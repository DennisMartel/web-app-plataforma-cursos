import { useState } from "react";
import classNames from "classnames";
import styles from "./Menu.scss";
import { Link } from "react-router-dom";
import ProfileDropdown from "../Dropdowns/ProfileDropdown";

const isLoggedIn = false;

const Menu = () => {
  const [open, setOpen] = useState(false);

  const sidenavClasses = classNames(
    styles.sidenav,
    { [styles.open]: open }
  );

  const overlayClasses = classNames(
    styles.overlay,
    { [styles.open]: open }
  );

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerInner}>
            <div className={classNames(styles.headerDesktop, styles.desktopLeft)}>
              <div className={styles.brandLogo}>
                <Link to={"/"}><b>detu</b>dev.</Link>
              </div>
              <div className={styles.menu}>
                <i className={classNames("fa fa-bars", styles.menuIcon)} aria-hidden="true"></i>
                <span className={styles.menuText}>Menu</span>
              </div>
            </div>
            <div className={classNames(styles.headerDesktop, styles.desktopCenter)}>
              <div className={styles.search}>
                <div className={styles.searchIcon}>
                  <i className={"fa fa-search"} aria-hidden="true"></i>
                </div>
                <input className={styles.searchInput} type="text" placeholder="¿Qué quieres aprender?" />
              </div>
            </div>
            <div className={classNames(styles.headerDesktop, styles.desktopRight)}>
              <div className={styles.cart}>
                <i className={classNames("fa fa-shopping-cart", styles.cartIcon)} aria-hidden="true"></i>
                <div className={styles.badge}>0</div>
              </div>
              {isLoggedIn ? <ProfileDropdown /> : (
                <div className={styles.authButton}>
                  <Link to={"auth/signin"}>Inicia sesión</Link>
                  <div>|</div>
                  <Link to={"auth/enroll"}>Únete gratis</Link>
                </div>
              )}
            </div>
            <div className={classNames(styles.headerMobile, styles.mobileLeft)}>
              <div className={styles.openMobile} onClick={() => setOpen(!open)}>
                <i className={classNames("fa fa-bars", styles.menuIcon)} aria-hidden="true"></i>
              </div>
            </div>
            <div className={styles.headerMobile}>
              <div className={styles.brandLogo}>
                <Link to={"/"}><b>detu</b>dev.</Link>
              </div>
            </div>
            <div className={classNames(styles.headerMobile, styles.mobileRight)}>
              <div className={styles.cart}>
                <i className={classNames("fa fa-shopping-cart", styles.cartIcon)} aria-hidden="true"></i>
                <div className={styles.badge}>0</div>
              </div>
              {isLoggedIn && <ProfileDropdown />}
            </div>
          </div>
        </div>
      </header>
      <div className={overlayClasses} onClick={() => setOpen(!open)}></div>
      <div className={sidenavClasses}>
        <ul className={styles.mobileNav}>
          <p className={styles.topic}>Temas</p>
          <li className={styles.menuItem}>
            <Link to="/category/desarrollo-web" className={styles.menuLink}>
              <span className={styles.menuLinkIcon} dangerouslySetInnerHTML={{ __html: "<i class='fa fa-laptop' aria-hidden='true'></i>" }} />
              Desarrollo web
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/category/desarrollo-movil" className={styles.menuLink}>
              <span className={styles.menuLinkIcon} dangerouslySetInnerHTML={{ __html: "<i class='fa fa-mobile' aria-hidden='true'></i>" }} />
              Desarrollo móvil
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/category/desarrollo-de-videojuegos" className={styles.menuLink}>
              <span className={styles.menuLinkIcon} dangerouslySetInnerHTML={{ __html: "<i class='fa fa-gamepad' aria-hidden='true'></i>" }} />
              Desarrollo de videojuegos
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/category/bases-de-datos" className={styles.menuLink}>
              <span className={styles.menuLinkIcon} dangerouslySetInnerHTML={{ __html: "<i class='fa fa-database' aria-hidden='true'></i>" }} />
              Bases de datos
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/category/lenguajes-de-programacion" className={styles.menuLink}>
              <span className={styles.menuLinkIcon} dangerouslySetInnerHTML={{ __html: "<i class='fa fa-code' aria-hidden='true'></i>" }} />
              Lenguajes de programación
            </Link>
          </li>
        </ul>
        {!isLoggedIn && (
          <div className={styles.footer}>
            <Link className={styles.buttonEnroll} to={"auth/enroll"}>Únete gratis</Link>
            <Link className={styles.buttonLogin} to={"auth/signin"}>Inicia sesión</Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Menu