import Footer from "@components/layout/Footer/Footer"
import styles from "./ForgotPasswordPage.module.css";
import AuthSection from "../AuthSection/AuthSection";
import InputAuth from "@components/ui/inputs/InputAuth/InputAuth";
import WhiteBtn from "@components/ui/buttons/WhiteBtn/WhiteBtn";
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {

    return (
        <AuthSection header={"Забыли пароль"}>  
            <div className={styles.desktop_input__wrapper}>
                <InputAuth title={"Адрес эл.почты"}></InputAuth>
            </div>
            <div className={styles.text__wrapper}>
                <p className={styles.auth_section__text}>Важно! Проверяйте папки “Спам” и “Нежелательные сообщения”, письмо может прийти туда.</p>
            </div>
            <div className={styles.buttons__wrapper}>
                <WhiteBtn>Запросить письмо</WhiteBtn>
                <Link to="/login" className={styles.link__route}>Войти в аккаунт</Link>
            </div>

        </AuthSection>
    )
}

export default ForgotPasswordPage; 