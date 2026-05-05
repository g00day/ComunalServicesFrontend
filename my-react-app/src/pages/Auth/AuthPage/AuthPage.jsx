import AuthSection from "../AuthSection/AuthSection"
import InputAuth from "@components/ui/inputs/InputAuth/InputAuth"
import WhiteBtn from "@components/ui/buttons/WhiteBtn/WhiteBtn"
import styles from "./AuthPage.module.css"
import {Link} from 'react-router-dom'

const AuthPage = () => {
    return (
        <AuthSection header={"Войти"}>
            <InputAuth title={"Логин"} type="text"/>
            <InputAuth title={"Пароль"} type="password"/>
            <div className={styles.buttons__wrapper}>
                <WhiteBtn>Войти в аккаунт</WhiteBtn>
                <WhiteBtn isLink={true} to="/register">Зарегистрироваться</WhiteBtn>
                <Link to="/forgot-password" className={styles.link__route}>Забыли пароль?</Link>
            </div>
        </AuthSection>
    )
}

export default AuthPage;