import Principe from "@components/ui/containers/Principe/Principe";
import styles from './PrincipiesSection.module.css';

const PrincipiesSection = () => {

    return (
        <div className={styles.principies__container}>
            <h2 className={styles.principies__header}>Принцип работы:</h2>
            <Principe title={`Формирование`} text={`Создать обращение можно на странице “заявления”`} num={'1'} className={styles.desktop_1pr}/>
            <Principe title={`Обработка`} text={`Обращение обрабатывается на стороне муниципалитета, сроки решения зависят от нагрузки на портал, и сложности задачи.`} num={'2'} className={styles.desktop_2pr}/>
            <Principe title={`Ответ`} text={`Ответ приходит в чате, после решения проблемы, обращение переходит в статус “Закрыто”, решение сохраняется.`} num={'3'} className={styles.desktop_3pr}/>
        </div>
    )
}

export default PrincipiesSection