import AdvantagesSection from "./AdvantagesSection/AdvantagesSection";
import PrincipiesSection from "./PrincipiesSection/PrinsipiesSection";
import FaqSection from "./FaqSection/FaqSection";
import styles from "./IndexPage.module.css"

const IndexPage = () => {
    
    return (
        <div className={styles.indexPage__container}>
            <div className={styles.indexPage__slogan}>
                <h1 className={styles.indexPage__header}>Самый удобный ЖКХ-сервис</h1>
                <h2 className={styles.indexPage__secondText}>Работать быстро - не значит плохо</h2>
            </div>
            <PrincipiesSection/>
            <AdvantagesSection/>
            <FaqSection/>
            <img src="../../public/img/abstract_1.svg" alt="" className={styles.abstract_image}/>
        </div>
    )
}


export default IndexPage;