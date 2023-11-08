import styles from "./Summary.scss";

const Summary = ({
  showStep = true,
  showChangeStep = false,
  onComplete = () => { },
  onChange = () => { }
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Resumen</span>
        {showChangeStep ? (
          <button className={styles.changeBtn} onClick={onChange}>Cambiar</button>
        ) : null}
      </div>
      {showStep ? (
        <div className={styles.body}>
          <div className={styles.shooping}>
            {[1, 2, 3, 4].map((_, index) => (
              <div className={styles.item} key={index}>
                <figure className={styles.picture}>
                  <img src="https://codersfree.nyc3.cdn.digitaloceanspaces.com/courses/portadas/facturacion-electronica-en-peru-curso-con-greenter-y-laravel.jpg" alt="" />
                </figure>
                <div className={styles.content}>
                  <h4 className={styles.title}>Curso completo de PHP 8 y MySQL 8 desde cero</h4>
                  <p className={styles.author}>Por: Dennis Martel</p>
                  <span className={styles.price}>$9.99</span>
                </div>
              </div>
            ))}
            <button className={styles.nextStepBtn} onClick={onComplete}>
              <span>Continuar</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Summary