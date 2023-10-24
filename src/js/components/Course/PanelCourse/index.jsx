import styles from "./PanelCourse.scss";

const PanelCourse = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.box}>
        <div className={styles.content}>
          <button className={styles.joinBtn}>Unirse al curso</button>
          <ul className={styles.unstyledList}>
            <li className={styles.listItem}>
              <div className={styles.general}>
                <i className="fa fa-clock"></i>
                <span className={styles.text}>Tiempo de duracion: 9h 46m 30s</span>
              </div>
            </li>
            <li className={styles.listItem}>
              <div className={styles.general}>
                <i className="fa fa-calendar"></i>
                <span className={styles.text}>Ultima actualizacion: 22-10-2023</span>
              </div>
            </li>
            <li className={styles.listItem}>
              <div className={styles.general}>
                <i className="fa fa-user"></i>
                <span className={styles.text}>Estudiantes: 5</span>
              </div>
            </li>
            <li className={styles.listItem}>
              <div className={styles.general}>
                <i className="fa fa-chart-line"></i>
                <span className={styles.text}>Nivel: Intermedio</span>
              </div>
            </li>
            <li className={styles.listItem}>
              <div className={styles.general}>
                <i className="fa fa-infinity"></i>
                <span className={styles.text}>Acceso ilimitado</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PanelCourse;