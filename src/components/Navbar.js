import { useCartData } from "../contexts/dataContext";
import { ROUTE } from "../reducer/reducer";

export function Navbar() {
  
  const { state, dispatch } = useCartData();
  
  const ItemsInWishlist = (acc, current) =>
    current.wishlist ? acc + 1 : acc + 0;
  
    const ItemsInCart = (acc, current) =>
    current.cartQty > 0 ? acc + 1 : acc + 0;
  
  return (
    <nav className="nav-bar nav-bar-shadow">
      <button
        onClick={() => dispatch({ type: ROUTE, payload: "productListing" })}
      >
        <h1>Product Central</h1>
      </button>

      <div>
        <button
          className="btn-icon"
          onClick={() => dispatch({ type: ROUTE, payload: "wishlist" })}
        >
          <i class="fas fa-heart"></i>
          <span className="badge">
            {state.productData.reduce(ItemsInWishlist, 0)}
          </span>
        </button>
        <button
          className="btn-icon"
          onClick={() => dispatch({ type: ROUTE, payload: "cart" })}
        >
          <i class="fas fa-cart-plus"></i>
          <span className="badge">
            {state.productData.reduce(ItemsInCart, 0)}
          </span>
        </button>
      </div>
    </nav>
  );
}
