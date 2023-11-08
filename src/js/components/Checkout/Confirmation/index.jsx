import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Utils
import { generateOrderCode } from "../../../utils/utils";
// Components
import Loader from "../../Loader";
import styles from "./Confirmation.scss";

const Confirmation = ({
  showStep = false
}) => {
  const navigate = useNavigate();
  const orderCode = generateOrderCode();

  useEffect(() => {
    if (showStep === true) {
      setTimeout(() => {
        navigate("/order-confirmed", {
          state: {
            orderCode
          }
        })
      }, 5000);
    }
  }, [showStep]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Confirmacion</span>
      </div>
      {showStep ? (
        <div className={styles.body}>
          <h1 className={styles.title}>Estamos procesando tu solicitud</h1>
          <p className={styles.subtitle}>Tu codigo de orden es: {orderCode}</p>
          <Loader />
        </div>
      ) : null}
    </div>
  )
}

export default Confirmation