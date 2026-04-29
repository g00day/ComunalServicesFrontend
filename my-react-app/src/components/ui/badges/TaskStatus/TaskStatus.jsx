import styles from './TaskStatus.module.css'

const TaskStatus = ({status}) => {
    if (status === "created") {
        return (
            <div className={styles.created}>Создано</div>
        )
    }
    else if (status === "in_work") {
        return (
            <div className={styles.in_work}>В работе</div>
        )
    }
    else if (status === "close") {
        return (
            <div className={styles.close}>Закрыто</div>
        )
    }
}

export default TaskStatus;