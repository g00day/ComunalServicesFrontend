import { useState } from 'react';
import styles from './InputAuth.module.css'
import showPassIcon from '../../../../public/icons/show_pass_16x10.svg'

const InputAuth = ({isPass, title}) => {

    const [isShown, setIsShown] = useState(false);

    const inputType = isPass ? (isShown ? "text" : "password") : "text";

    const togglePass = () => {
        setIsShown(!isShown);
    };

    return (
    <div className={styles.input__container}>
        <p className={styles.input__header}>{title}</p>
        <div className={styles.input__wrapper}>
            <input
                type={inputType}
                placeholder={isPass ? "Введите пароль..." : "Введите текст..."}
                className={styles.input__field}
            />
            {isPass && (
                <img src={showPassIcon} alt="icon" className={styles.show_pass_icn} onClick={togglePass}></img>
            )}
        </div>
    </div>
    )
}

export default InputAuth;