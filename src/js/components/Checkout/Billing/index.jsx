import { useState } from "react";
//Components
import { Input, Select } from "../../Form"
import styles from "./Billing.scss";

const Billing = ({
  showStep = false,
  showChangeStep = false,
  onComplete = () => { },
  onChange = () => { }
}) => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    country: "",
    department: "",
    municipality: ""
  });

  const [options, setOptions] = useState([
    {
      label: "Option 1",
      value: "opt1",
    },
    {
      label: "Option 2",
      value: "opt2",
    },
    {
      label: "Option 3",
      value: "opt3",
    }
  ])

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Facturacion</span>
        {showChangeStep ? (
          <button onClick={onChange} className={styles.changeBtn}>Cambiar</button>
        ) : null}
      </div>
      {showStep ? (
        <div className={styles.body}>
          <div className={styles.billing}>
            <div className={styles.fullName}>
              <Input
                name="name"
                id="name"
                label="Nombres"
                initialValue={formData.name}
                validationCallback={(valid, value) => {
                  if (formData.name !== value) {
                    setFormData({ ...formData, name: value })
                  }
                }}
              />
              <Input
                name="lastname"
                id="lastname"
                label="Apellidos"
                initialValue={formData.lastname}
                validationCallback={(valid, value) => {
                  if (formData.lastname !== value) {
                    setFormData({ ...formData, lastname: value })
                  }
                }}
              />
            </div>
            <Input
              name="email"
              id="email"
              type="email"
              label="Correo electronico"
              initialValue={formData.email}
              validationCallback={(valid, value) => {
                if (formData.email !== value) {
                  setFormData({ ...formData, email: value })
                }
              }}
            />
            <Select
              id="country"
              label="Pais"
              options={options}
              onChange={({ value }) => setFormData({ ...formData, country: value })}
              isSearchable
            />
            <Select
              id="department"
              label="Departamento"
              options={options}
              onChange={({ value }) => setFormData({ ...formData, department: value })}
              isSearchable
            />
            <Select
              id="municipality"
              label="Municipio"
              options={options}
              onChange={({ value }) => setFormData({ ...formData, municipality: value })}
              isSearchable
            />
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

export default Billing