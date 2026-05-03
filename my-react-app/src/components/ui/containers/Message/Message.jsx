import TaskStatus from "../../badges/TaskStatus/TaskStatus"
import styles from "./Message.module.css";

const Message = ({isUser, last_name, first_name, formattedDate, mess}) => {

    const username_time = `${last_name} ${first_name} (${formattedDate})`

    if(isUser){
        return (
            <div className={styles.message_user}>
                <h2 className={styles.message_user__username}>{username_time}</h2>
                <p className={styles.message_user__text}>{mess}</p>
            </div>
        )
    } else {
        return (
            <div className={styles.message_employee}>
                <h2 className={styles.message_employee__name}>{username_time}</h2>
                <p className={styles.message_employee__text}>{mess}</p>
            </div>
        )
    }
}

export default Message