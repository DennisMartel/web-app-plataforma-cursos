// Components
import Menu from "../../components/Menu";
import HeroSlider from "../../components/Sliders/HeroSlider";
import BenefitsForYou from "../../components/BenefitsForYou";
import Course from "../../components/Course";
import styles from "./Homepage.scss";

const Homepage = () => {
  const data = [
    "https://img-c.udemycdn.com/notices/home_carousel_slide/image/25ae6ffb-1e42-4e58-9c63-e02b00d480a9.jpg",
    "https://img-c.udemycdn.com/notices/home_carousel_slide/image/1a871a12-4289-4d90-90e8-641d10a73f69.jpg"
  ]

  return (
    <main className={styles.webAppWrapper}>
      <Menu />
      <HeroSlider data={data} />
      <BenefitsForYou />
      <div className={styles.courseWrapper}>
        <div className="container">
          <h1 className={styles.title}>Ultimos cursos</h1>
          <section className={styles.courses}>
            {[1, 2, 3, 4].map((_, index) => (
              <Course key={index} />
            ))}
          </section>
        </div>
      </div>
    </main>
  )
}

export default Homepage