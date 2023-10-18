import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./CarouselFrame.scss";
import classNames from "classnames";

const CarouselFrame = ({
  children,
  id,
  ariaLabel,
  showButtons,
  autoPlay,
  autoPlayTimeout,
  transitionTime,
  wrapperClasses
}) => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (autoPlay || !showButtons) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayTimeout);

      carouselRef.current.addEventListener("mouseenter", () => {
        clearInterval(intervalRef.current);
      });

      carouselRef.current.addEventListener("mouseleave", () => {
        intervalRef.current = setInterval(() => {
          nextSlide();
        }, autoPlayTimeout);
      });
    }
  }, []);

  const nextSlide = () => {
    if (carouselRef.current.children.length > 0) {
      const firstSlide = carouselRef.current.children[0];

      carouselRef.current.style.transition = `${transitionTime}ms ease-out all`;

      const slideSize = carouselRef.current.children[0].offsetWidth;

      carouselRef.current.style.transform = `translateX(-${slideSize}px)`;

      const transition = () => {
        carouselRef.current.style.transition = "none";
        carouselRef.current.style.transform = "translateX(0)";

        carouselRef.current.appendChild(firstSlide);

        carouselRef.current.removeEventListener("transitionend", transition);
      }

      carouselRef.current.addEventListener("transitionend", transition);
    }
  }

  const carouselWrapperClasses = classNames(styles.carousel, wrapperClasses);

  const prevSlide = () => {
    if (carouselRef.current.children.length > 0) {
      const nextIndex = carouselRef.current.children.length - 1;

      const lastSlide = carouselRef.current.children[nextIndex];

      carouselRef.current.insertBefore(lastSlide, carouselRef.current.firstChild);

      carouselRef.current.style.transition = "none";

      const slideSize = carouselRef.current.children[0].offsetWidth;

      carouselRef.current.style.transform = `translateX(-${slideSize}px)`;

      setTimeout(() => {
        carouselRef.current.style.transition = `${transitionTime}ms ease-out all`;
        carouselRef.current.style.transform = `translateX(0)`;
      }, 30);
    }
  }

  return (
    <div aria-label={ariaLabel} id={id} className={carouselWrapperClasses}>
      {showButtons ? (
        <>
          <div className={styles.carouselControlPrev} onClick={prevSlide}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </div>
          <div className={styles.carouselControlNext} onClick={nextSlide}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </>
      ) : null}
      <div className={styles.wrapper} ref={carouselRef}>
        {children}
      </div>
    </div>
  )
}

CarouselFrame.defaultProps = {
  autoPlayTimeout: 3000,
  transitionTime: 500
}

CarouselFrame.propTypes = {
  children: PropTypes.element,
  showButtons: PropTypes.bool,
  autoPlay: PropTypes.bool,
  autoPlayTimeout: PropTypes.number,
  transitionTime: PropTypes.number,
  id: PropTypes.string,
  ariaLabel: PropTypes.string,
}

export default CarouselFrame