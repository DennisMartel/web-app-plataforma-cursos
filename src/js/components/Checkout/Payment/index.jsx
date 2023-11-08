import { useState } from "react";
import styles from "./Payment.scss";
import { Input } from "../../Form";

const Payment = ({
  showStep = false,
  onComplete = () => { }
}) => {
  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Pago</span>
      </div>
      {showStep ? (
        <div className={styles.body}>
          <div className={styles.payment}>
            <Input
              name="card-holder"
              id="card-holder"
              label="Titular"
            />
            <Input
              name="card-holder"
              id="card-holder"
              label="Numero"
              placeholder="0000 0000 0000 0000"
            />
            <div className={styles.cardInfo}>
              <Input
                name="expiration-year"
                id="expiration-year"
                label="Año"
                placeholder="YYYY"
              />
              <Input
                name="expiration-month"
                id="expiration-month"
                label="Mes"
                placeholder="MM"
              />
              <Input
                name="security-code"
                id="security-code"
                label="Cvv"
                placeholder="000"
              />
            </div>
            <button
              className={styles.nextStepBtn}
              onClick={() => onComplete(formData)}
            >
              Continuar
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Payment;