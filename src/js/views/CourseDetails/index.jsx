// Components
import CourseSidebar from "../../components/Course/PanelCourse";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Accordion from "../../components/Accordion";
import styles from "./CourseDetails.scss";

const CourseDetails = () => {
  return (
    <main className={styles.webAppWrapper}>
      <Menu />
      <div className={styles.cover}>
        <div className="container">
          <div className={styles.wrapper}>
            <figure className={styles.picture}>
              <img className={styles.image} src="https://codersfree.nyc3.digitaloceanspaces.com/courses/portadas/curso-php-y-mysql-desde-cero.jpg" alt="" />
            </figure>
            <div className={styles.information}>
              <h1 className={styles.title}>Curso completo de PHP 8 y MySQL 8 desde cero</h1>
              <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe assumenda in labore atque nam? Esse, minus. Ipsa, sunt ea repellendus cupiditate ullam porro delectus aperiam. Accusantium, eius esse? Mollitia, quasi?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <section className={styles.courseCurriculum}>
          <CourseSidebar />
          <div className={styles.curriculum}>
            <h1 className={styles.title}>Contenido del curso</h1>
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Accordion
                id={`Seccion ${index + 1}`}
                title={`Seccion ${index + 1}`}
                showIcon={true}
                currentIndex={index}
              >
                <ul className={styles.unstyledList}>
                  <li>
                    <div className={styles.listItem}>
                      <i className="fa fa-play-circle"></i>
                      <div className={styles.blockListItem}>
                        <p className={styles.lessonTitle}>Presentacion del curso</p>
                        <span className={styles.lessonTime}>05:36</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.listItem}>
                      <i className="fa fa-play-circle"></i>
                      <div className={styles.blockListItem}>
                        <p className={styles.lessonTitle}>Mi primer programa en PHP</p>
                        <span className={styles.lessonTime}>13:27</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.listItem}>
                      <i className="fa fa-play-circle"></i>
                      <div className={styles.blockListItem}>
                        <p className={styles.lessonTitle}>Variables en PHP</p>
                        <span className={styles.lessonTime}>09:09</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </Accordion>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default CourseDetails