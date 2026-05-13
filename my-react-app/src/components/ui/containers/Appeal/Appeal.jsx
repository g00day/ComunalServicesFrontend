import styles from "./Appeal.module.css";
import TaskStatus from "../../badges/TaskStatus/TaskStatus";
import redCircleIcon from "@icons/red_circle_icn.svg"; 
import messIcon from "@icons/mess_icon_8x8.svg";

const Appeal = ({hasNewMess=false, title, text, createTime, countNewMess, status}) => {


    return (
        <div className={styles.appeal__container}>
            <div className={styles.head_status__wrapper}>
                {hasNewMess && (
                    <img src={redCircleIcon} alt="icon" className={styles.new_mess__icn}/>
                )}
                <div className={styles.spaceBetween}>
                    <h2 className={styles.appeal__header}>{title}</h2>
                    <TaskStatus status={status}/>
                </div>
            </div>
            <div>
                <p className={styles.appeal__text}>{text}</p>
            </div>
            <div className={styles.appeal__create_wrapper}>
                <p className={styles.appeal__create_time}>Создано: {createTime}</p>
                {hasNewMess && (
                    <div className={styles.appeal__count_new_mess_wrapper}>
                        <p className={styles.new_mess__count}>{countNewMess}</p>
                        <img src={messIcon} alt="icon" className={styles.icn_mess}/>
                    </div>
                )}
            </div>
        </div>
    )

}

export default Appeal; 
