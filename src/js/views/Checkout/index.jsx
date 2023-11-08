import { useState, useEffect } from "react";
// Components
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import Summary from "../../components/Checkout/Summary";
import Billing from "../../components/Checkout/Billing";
import Payment from "../../components/Checkout/Payment";
import Confirmation from "../../components/Checkout/Confirmation";
import styles from "./Checkout.scss";

const Checkout = () => {
  const [step, setStep] = useState({
    summary: true,
    billing: false,
    payment: false,
    confirmation: false,
    step1: false,
    step2: false
  });
  const [finished, setFinished] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (finished === true) {
      const payload = formData;
    }
  }, [finished]);

  const onSummaryComplete = () => {
    setStep({
      summary: false,
      billing: true,
      payment: false,
      confirmation: false,
      step1: true,
    });
  }

  const onBillingComplete = (data) => {
    const billing = data;

    setStep({
      summary: false,
      billing: false,
      payment: true,
      confirmation: false,
      step1: true,
      step2: true
    });

    setFormData({ ...formData, billing });
  }

  const onPaymentComplete = (data) => {
    const payment = data;

    setStep({
      summary: false,
      billing: false,
      payment: false,
      confirmation: true,
      step1: false,
      step2: false
    });

    setFormData({ ...formData, payment });
    setFinished(true);
  }

  const onSummaryChange = () => {
    setStep({
      summary: true,
      billing: false,
      payment: false,
      confirmation: false,
      step1: false,
      step2: false
    });
  }

  const onBillingChange = () => {
    setStep({
      summary: false,
      billing: true,
      payment: false,
      confirmation: false,
      step1: true,
      step2: false
    });
  }

  return (
    <main className={styles.webAppWrapper}>
      <Menu />
      <div className={styles.wrapper}>
        <div className="container">
          <Summary
            showStep={step.summary}
            showChangeStep={step.step1}
            onComplete={onSummaryComplete}
            onChange={onSummaryChange}
          />
          <Billing
            showStep={step.billing}
            showChangeStep={step.step2}
            onComplete={onBillingComplete}
            onChange={onBillingChange}
          />
          <Payment
            showStep={step.payment}
            onComplete={onPaymentComplete}
          />
          <Confirmation
            showStep={step.confirmation}
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Checkout