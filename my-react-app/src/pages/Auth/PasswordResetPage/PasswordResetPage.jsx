import AuthSection from "../AuthSection/AuthSection"
import InputAuth from "@components/ui/inputs/InputAuth/InputAuth"
import WhiteBtn from "@components/ui/buttons/WhiteBtn/WhiteBtn"
import styles from "./PasswordResetPage.module.css"
import {Link} from 'react-router-dom'

const PasswordResetPage = () => {
    return (
        <AuthSection header={"Восстановление пароля"}>
            <div className={styles.desktop_input__wrapper}>
                <InputAuth title={"Новый пароль"} type="text"/>
                <InputAuth title={"Новый пароль(повторно)"} type="password"/>
            </div>
            <div className={styles.buttons__wrapper}>
                <WhiteBtn>Сохранить</WhiteBtn>
                <Link to="/login" className={styles.link__route}>Войти в аккаунт</Link>
            </div>
        </AuthSection>
    )
}

export default PasswordResetPage;