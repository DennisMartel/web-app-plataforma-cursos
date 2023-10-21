import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./Course.scss";

const Course = () => {
  return (
    <article className={styles.course}>
      <div className={styles.header}>
        <span className={styles.level}>Principiante</span>
        <i class={classNames("far fa-bookmark", styles.bookmark)}></i>
        <figure className={styles.picture}>
          <img 
            className={styles.image}
            src="https://codersfree.nyc3.digitaloceanspaces.com/courses/portadas/curso-php-y-mysql-desde-cero.jpg" 
            alt="" 
          />
        </figure>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Curso completo de PHP 8 y MySQL 8 desde cero</h1>
        <div className={styles.widgets}>
          <div className={styles.students}>
            <i class="far fa-user"></i>
            <span className={styles.total}>1382</span>
          </div>
          <div className={styles.duration}>
            <i class="far fa-clock"></i>
            <span className={styles.time}>3h 50m</span>
          </div>
        </div>
        <div className={styles.author}>
          <img className={styles.avatar} src="" alt="" />
          <p className={styles.name}>Dennis Martel</p>
        </div>
        <Link className={styles.infoBtn}>Ver más</Link>
      </div>
    </article>
  )
}

export default Course