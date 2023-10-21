import styles from "./BenefitsForYou.scss";

const BenefitsForYou = () => {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.benefits}>
          <div className={styles.benefitsCard}>
            <i className="fas fa-chalkboard-teacher" aria-hidden="true"></i>
            <div className={styles.texts}>
              <h1 className={styles.title}>Capacitaciones Online</h1>
              <p className={styles.subtitle}>para que potencies tus conocimientos</p>
            </div>
          </div>
          <div className={styles.benefitsCard}>
            <i className="fa fa-laptop" aria-hidden="true"></i>
            <div className={styles.texts}>
              <h1 className={styles.title}>Contenidos</h1>
              <p className={styles.subtitle}>puedes verlos en cualquier lugar</p>
            </div>
          </div>
          <div className={styles.benefitsCard}>
            <i className="fa fa-blog" aria-hidden="true"></i>
            <div className={styles.texts}>
              <h1 className={styles.title}>Acceso Ilimitado</h1>
              <p className={styles.subtitle}>aprende a tu propio ritmo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsForYou