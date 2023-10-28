import styles from "./Loader.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.balls}></div>
      <div className={styles.balls}></div>
      <div className={styles.balls}></div>
    </div>
  )
}

export default Loader