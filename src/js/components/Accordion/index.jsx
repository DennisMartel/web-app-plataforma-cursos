import { useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./Accordion.scss";
import classNames from "classnames";

const Accordion = ({
  id,
  title,
  showIcon,
  currentIndex,
  children
}) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const accordionRef = useRef(null);
  const isExpanded = currentIndex === activeIndex;

  const expandHandler = index => setActiveIndex(isExpanded ? -1 : index);

  const iconArrowClasses = classNames(
    { ["fas fa-chevron-down"]: !isExpanded },
    { ["fas fa-chevron-up"]: isExpanded },
  );

  return (
    <div
      id={id}
      className={styles.wrapper}
      aria-expanded={isExpanded}
      aria-label={isExpanded ? "show" : "hide"}
    >
      <div className={styles.accordionHeader} onClick={() => expandHandler(currentIndex)}>
        <p className={styles.title}>{title}</p>
        {showIcon ? <i className={iconArrowClasses}></i> : null}
      </div>
      <div
        className={styles.accordion}
        ref={accordionRef}
        style={
          isExpanded
            ? { height: accordionRef.current.scrollHeight }
            : { height: "0px" }
        }
      >
        {children}
      </div>
    </div>
  )
}

Accordion.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  showIcon: PropTypes.bool,
  currentIndex: PropTypes.number,
  children: PropTypes.element,
}

export default Accordion