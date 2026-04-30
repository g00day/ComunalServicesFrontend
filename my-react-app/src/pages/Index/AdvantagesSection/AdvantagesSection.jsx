import Advantage from "@components/ui/containers/Advantage/Advantage";
import styles from "./AdvantagesSection.module.css";

const AdvantagesSection = () => {

    return (
        <div className={styles.advantages__container}>
            <h2 className={styles.advantages__header}>Почему мы лучше?</h2>
            <Advantage 
                title={`Прозрачность в обработке обращений`}
                text={`Сервис гарантирует, что ваше обращение будет направлено представителю местного муниципалитета в первоначальном виде, обработано согласно срокам указанным в регламенте, предоставление актуальной информации о состоянии обработки обращения.`}
            />
            <Advantage 
                title={`Быстрая обработка обращений`}
                text={`Сотрудники муниципалитета обязаны предоставить ответ на ваше обращение в течении пяти рабочих дней, с момента поступления обращения.`}
            />
            <Advantage 
                title={`Отлаженный цифровизированный процесс`}
                text={`Визуально удобный интерфейс, ускоряющий подачу обращения. Полноценная функциональность, удовлетворяющая потребности пользователя.`}
            />
        </div>
    )
}

export default AdvantagesSection 