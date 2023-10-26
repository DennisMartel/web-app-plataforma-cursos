import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CartDropdown.scss";
import classNames from "classnames";

const CartDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownMenuRef = useRef();

  useEffect(() => {
    const handler = e => {
      if (!dropdownMenuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  });

  const dropdownMenuClasses = classNames(
    styles.dropdownCart,
    { [styles.active]: open },
    { [styles.inactive]: !open }
  )

  return (
    <div className={styles.dropdown} ref={dropdownMenuRef}>
      <div className={styles.cart} onClick={() => setOpen(!open)}>
        <i className={classNames("fa fa-shopping-cart", styles.cartIcon)} aria-hidden="true"></i>
        <div className={styles.badge}>0</div>
      </div>
      <div className={dropdownMenuClasses}>
        <ul>
          <li>
            <div className={styles.cartItem}>
              <figure className={styles.media}>
                <img
                  className={styles.image}
                  src="https://codersfree.nyc3.digitaloceanspaces.com/courses/portadas/curso-php-y-mysql-desde-cero.jpg"
                  alt=""
                />
              </figure>
              <div className={styles.content}>
                <h2 className={styles.title}>Curso completo de PHP 8 y MySQL 8 desde cero</h2>
                <p className={styles.price}>$9.99</p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.cartItem}>
              <figure className={styles.media}>
                <img
                  className={styles.image}
                  src="https://codersfree.nyc3.digitaloceanspaces.com/courses/portadas/curso-php-y-mysql-desde-cero.jpg"
                  alt=""
                />
              </figure>
              <div className={styles.content}>
                <h2 className={styles.title}>Curso completo de PHP 8 y MySQL 8 desde cero</h2>
                <p className={styles.price}>$9.99</p>
              </div>
            </div>
          </li>
        </ul>
        <div className={styles.checkout}>
          <span className={styles.totolCart}>Total: $20.00</span>
          <Link to="/cart" className={styles.goCart}>
            Ir al carrito
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartDropdown