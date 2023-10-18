import PropTypes from "prop-types";
import styles from "./HeroSlider.scss";
import CarouselFrame from "../../Frames/CarouselFrame";

const HeroSlider = ({
  data,
}) => {
  return (
    <CarouselFrame
      autoPlay={true}
      showButtons={false}
      autoPlayTimeout={5000}
      transitionTime={800}
      ariaLabel="Carousel"
      id="main-carousel"
    >
      {data && Array.isArray(data) && data.map((item, key) => (
        <div key={key} className={styles.carouselInner}>
          <div className={styles.carouselImage}>
            <img
              src={item}
              alt={`slider ${key + 1}`}
            />
          </div>
          <div className="container">
            <div className={styles.contentBox}>
              <h1 className={styles.title}>Lorem ipsum dolor sit amet {key + 1}</h1>
              <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt optio obcaecati culpa vel, nam repudiandae ratione nulla, debitis voluptas eveniet nesciunt voluptatem dignissimos placeat! Repudiandae id odit architecto natus tempore?</p>
            </div>
          </div>
        </div>
      ))}
    </CarouselFrame>
  )
}

HeroSlider.propTypes = {
  data: PropTypes.array,
}

export default HeroSlider