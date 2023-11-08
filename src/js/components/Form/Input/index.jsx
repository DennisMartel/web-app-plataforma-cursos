import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
// Utils
import { formValidator } from "../../../utils/formValidator";
import styles from "./Input.scss";

const Input = ({
  errorText = "",
  id = "",
  name = "",
  type = "text",
  label = "",
  placeholder = "",
  autoComplete = false,
  maxLength,
  fullWidth = false,
  initialValue = "",
  regExpression = null,
  optional = false,
  validationCallback = () => { },
  onChange = () => { },
}) => {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [image, setImage] = useState(undefined);
  const inputRef = useRef(null);

  useEffect(() => {
    if (initialValue !== "" || typeof initialValue !== "undefined" || initialValue !== null) {
      inputRef.current.value = initialValue;
    }
  }, []);

  useEffect(() => {
    if (typeof initialValue !== 'undefined' && initialValue !== inputRef.current.value) {
      inputRef.current.value = initialValue;
      setValue(initialValue);
    }

    if (initialValue === "" || initialValue === null) {
      setImage("");
    }
  }, [initialValue]);

  useEffect(() => {
    setClass();
  }, [value]);

  const onBlurFunc = () => {
    const inputValue = inputRef.current.value.trim();
    const regex = regExpression ?? "";
    const isValid = formValidator(regex, inputValue);
    setValue(inputValue);
    setValid(isValid);
    setClass();
    validationCallbackFunc(isValid, inputValue);
  }

  const onChangeFunc = (e) => {
    return typeof onChange === 'function'
      ? onChange(e)
      : () => { };
  }

  const validationCallbackFunc = (validity, value) => {
    return typeof validationCallback === 'function'
      ? validationCallback(validity, value)
      : () => { };
  }

  const setClass = () => {
    const image = classNames(
      { [styles.image]: value },
      { [styles.isValid]: valid && value },
      { [styles.isInvalid]: (!valid || !value) && !optional },
    );

    if (type !== 'checkbox') {
      setImage(image);
    }
  }

  const containerClasses = classNames(styles.wrapper, {
    [styles.fullWidth]: fullWidth
  });

  const borderStyle = value && !valid
    ? { borderColor: "#f53d3d" }
    : value && valid
      ? { borderColor: "#36b04c" }
      : null;

  const isAutoComplete = autoComplete ? "on" : "off";

  return (
    <div className={containerClasses}>
      {label ? <label htmlFor={id} className={styles.label}>{label}</label> : null}
      <div className={styles.inputContainer}>
        <input
          aria-label={label}
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          autoComplete={isAutoComplete}
          maxLength={maxLength}
          ref={inputRef}
          style={borderStyle}
          onChange={onChangeFunc}
          onBlur={onBlurFunc}
          className={styles.input}
        />
        <ValidationImage
          inputRef={inputRef}
          value={value}
          valid={valid}
          image={image}
        />
      </div>
      {errorText && <span className={styles.error}>{errorText}</span>}
    </div>
  )
}

const ValidationImage = ({
  inputRef,
  value,
  valid,
  image
}) => {
  const [imageValid, setImageValid] = useState(null);
  const [imageInvalid, setImageInvalid] = useState(null);

  useEffect(() => {
    setImageValid({
      backgroundImage: `url(https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png)`
    });

    setImageInvalid({
      backgroundImage: `url(https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/523/posts/32694/final_image/tutorial-preview-large.png)`
    });
  }, []);

  const imageClasses = classNames(styles.image);
  const applyOwnImage = inputRef && inputRef.current && inputRef.current.value == "";
  const style = value && !valid ? imageValid : value && valid ? imageInvalid : null;
  return style ? <div className={applyOwnImage ? imageClasses : image} style={style} /> : null;
}

export default Input;