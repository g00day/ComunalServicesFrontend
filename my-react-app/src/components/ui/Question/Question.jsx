import styles from './Question.module.css';
import openIcon from '../../../../public/icons/open_answer.svg';
import closeIcon from '../../../../public/icons/close_answer.svg';

const Principe = ({questionText, answerText, isActive=false, onClick }) => {


    return (
        <div className={styles.question} onClick={onClick}>
            <div className={styles.question__header}>
                <p className={isActive?styles.question__text_active:styles.question__text}>{questionText}</p>
                <img src={isActive?closeIcon:openIcon} alt="icon" className={styles.question__icon}></img>
            </div>
            {isActive && (
                <p className={styles.answer}>{answerText}</p>
            )}
        </div>
    )
}

export default Principe;