import { Link } from "react-router-dom";
// Components
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import styles from "./Cart.scss";

const Cart = () => {
  return (
    <main className={styles.webAppWrapper}>
      <Menu />
      <div className="container">
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Carrito de compras</h3>
          <div className={styles.shopping}>
            <div className={styles.cart}>
              {[1, 2, 3].map((_, index) => (
                <div className={styles.item} key={index}>
                  <figure className={styles.media}>
                    <img
                      src="https://codersfree.nyc3.cdn.digitaloceanspaces.com/courses/portadas/facturacion-electronica-en-peru-curso-con-greenter-y-laravel.jpg"
                      alt=""
                    />
                  </figure>
                  <div className={styles.content}>
                    <h4 className={styles.title}>Curso completo de PHP 8 y MySQL 8 desde cero</h4>
                    <p className={styles.author}>Por: Dennis Martel</p>
                    <span className={styles.price}>$9.99</span>
                  </div>
                  <div className={styles.actions}>
                    <div className={styles.delete}>
                      <i className="fa fa-times-circle"></i>
                      <span>Eliminar</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.summary}>
              <span className={styles.totalLabel}>Total:</span>
              <span className={styles.total}>$9.99</span>
              <div className={styles.checkout}>
                <p className={styles.terms}>Al proceder con el pago aceptas los <Link to="/terms-and-conditions">Terminos y condiciones</Link> de la plataforma</p>
                <button className={styles.checkoutBtn}>
                  <span>Continuar con el pago</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Cart