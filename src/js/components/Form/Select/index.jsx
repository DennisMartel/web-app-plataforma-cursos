import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./Select.scss";

const Select = ({
  placeholder = "elegir opción",
  options = [],
  isMulti = false,
  isSearchable = false,
  align = "left" || "right",
  id = "",
  label = "",
  onChange = () => { }
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setSearchValue("");
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  useEffect(() => {
    const handler = e => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  const handleInputClick = () => setShowMenu(!showMenu);

  const getDisplay = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return placeholder;
    }

    if (isMulti) {
      return (
        <div className={styles.selectTag}>
          {selectedValue.map((option, index) => {
            return (
              <div key={option.value + index} className={styles.selectTagItem}>
                {option.label}
                <span onClick={e => onTagRemove(e, option)} className={styles.selectTagClose}>
                  <i className="fa fa-times"></i>
                </span>
              </div>
            )
          })}
        </div>
      )
    }

    return selectedValue.label;
  }

  const removeOption = option => selectedValue.filter(opt => opt.value !== option.value);

  const onTagRemove = (e, option) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChange(newValue);
  }

  const onItemClick = option => {
    let newValue;
    if (isMulti) {
      if (selectedValue.findIndex(opt => opt.value === option.value) >= 0) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValue, option];
      }
    } else {
      newValue = option;
    }
    setSelectedValue(newValue);
    onChange(newValue);
  }

  const isSelected = option => {
    if (isMulti) {
      return selectedValue.filter((o) => o.value === option.value).length > 0;
    }

    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  const onSearch = e => setSearchValue(e.target.value);

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }

    return options.filter(option => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
  };

  const selectedValuesClasses = classNames(
    styles.selectedValue,
    { [styles.placeholder]: !selectedValue || selectedValue.length == 0 }
  );

  const selectedMenuClasses = classNames(
    styles.selectMenu,
    { [styles.alignmentLeft]: align.toLocaleLowerCase() === "left" },
    { [styles.alignmentRight]: align.toLocaleLowerCase() === "right" }
  );

  return (
    <div>
      {label ? <label htmlFor={id} className={styles.label}>{label}</label> : null}
      <div className={styles.selectContainer}>
        <div ref={inputRef} onClick={handleInputClick} className={styles.selectInput}>
          <div className={selectedValuesClasses}>{getDisplay()}</div>
          <div className={styles.selectTools}>
            <div className={styles.selectTool}>
              
            </div>
          </div>
        </div>
        {showMenu && (
          <div className={selectedMenuClasses}>
            {isSearchable && (
              <div className={styles.selectSearch}>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className={styles.selectFormControl}
                  onChange={onSearch}
                  value={searchValue}
                  ref={searchRef}
                />
              </div>
            )}
            {getOptions().map(option => (
              <div
                onClick={() => onItemClick(option)}
                key={option.value}
                className={classNames(
                  styles.selectItem,
                  { [styles.selected]: isSelected(option) }
                )}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Select