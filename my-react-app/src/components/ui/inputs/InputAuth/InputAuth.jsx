import { useState } from 'react';
import styles from './InputAuth.module.css'
import showPassIcon from '@icons/show_pass_16x10.svg'

const InputAuth = ({title, ...props}) => {

    const [isShown, setIsShown] = useState(false);

    const isPassword = props.type === 'password';

    const inputType = isPassword ? (isShown ? "text" : "password") : "text";

    const togglePass = () => {
        setIsShown(!isShown);
    };

    return (
        <div className={styles.input__container}>
            <p className={styles.input__header}>{title}</p>
            <div className={styles.input__wrapper}>
                <input
                    type={inputType}
                    placeholder={isPassword ? "Введите пароль..." : "Введите текст..."}
                    className={styles.input__field}
                />
                {isPassword && (
                    <img src={showPassIcon} alt="icon" className={styles.show_pass_icn} onClick={togglePass}></img>
                )}
            </div>
        </div>
    )
}

export default InputAuth;