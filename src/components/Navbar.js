import { useNavigate } from "react-router";
import { useCartData } from "../contexts/data-context";

export function Navbar() {
  const { state } = useCartData();
  const navigate = useNavigate();

  const ItemsInWishlist = (acc, current) =>
    current.wishlist ? acc + 1 : acc + 0;

  const ItemsInCart = (acc, current) => (current.cartQty > 0 ? acc + 1 : acc);

  return (
    <nav className="nav-bar nav-bar-shadow">
      <div>
        <button className="btn btn-thin">
          <h1>OwlMart</h1>
        </button>
        <button className="btn btn-thin" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="btn btn-thin" onClick={() => navigate("/shop")}>
          Shop Now
        </button>
      </div>
      <div className="nav-bar--right-menu">
        <button
          className="btn btn-thin btn-font-size-x-large"
          onClick={() => navigate("/wishlist")}
        >
          <div className="badge-container">
            <i className="fas fa-heart"></i>
            <span
              className={
                state.productData.reduce(ItemsInWishlist, 0) > 0
                  ? "badge"
                  : "badge visibility-hidden"
              }
            >
              {state.productData.reduce(ItemsInWishlist, 0)}
            </span>
          </div>
        </button>
        <button
          className="btn btn-thin btn-font-size-x-large"
          onClick={() => navigate("/cart")}
        >
          <div className="badge-container">
            <i className="fas fa-cart-plus"></i>
            <span
              className={
                state.productData.reduce(ItemsInCart, 0) > 0
                  ? "badge"
                  : "badge visibility-hidden"
              }
            >
              {state.productData.reduce(ItemsInCart, 0)}
            </span>
          </div>
        </button>
      </div>
    </nav>
  );
}
