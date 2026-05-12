import styles from "./Appeal.module.css";
import TaskStatus from "../../badges/TaskStatus/TaskStatus";

const Appeal = ({title, text, postTitle, status}) => {


    return (
        <div className={styles.review__container}>
            <div className={styles.head_status__wrapper}>
                <h2 className={styles.review__header}>{title}</h2>
                <TaskStatus status={status}/>
            </div>
            <div>
                <p className={styles.review__text}>{text}</p>
            </div>
            <div className={styles.review__postTitle_wrapper}>
                <p>{postTitle}</p>
            </div>
        </div>
    )

}

export default Appeal; 
