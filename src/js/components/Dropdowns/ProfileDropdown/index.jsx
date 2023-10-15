import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProfileDropdown.scss";
import classNames from "classnames";

const ProfileDropdown = () => {
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
    styles.dropdownMenu,
    { [styles.active]: open },
    { [styles.inactive]: !open }
  )

  return (
    <div className={styles.menu} ref={dropdownMenuRef}>
      <div className={styles.menuTrigger} onClick={() => setOpen(!open)}>
        <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" alt="" />
      </div>
      <div className={dropdownMenuClasses}>
        <div className={styles.dropdownHeader}>
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" alt="" />
          <div className={styles.headerTexts}>
            <span className={styles.welcome}>Bienvenido</span>
            <span className={styles.name}>Dennis Tulen</span>
          </div>
        </div>
        <ul>
          <li className={styles.dropdownItem}>
            <Link>Administrar perfil</Link>
          </li>
          <li className={styles.dropdownItem}>
            <Link>Cerrar sesión</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileDropdown