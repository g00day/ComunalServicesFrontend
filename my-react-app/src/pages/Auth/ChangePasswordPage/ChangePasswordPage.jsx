import AuthSection from "../AuthSection/AuthSection"
import InputAuth from "@components/ui/inputs/InputAuth/InputAuth"
import styles from "./ChangePasswordPage.module.css"
import WhiteBtn from "@components/ui/buttons/WhiteBtn/WhiteBtn"
import {Link} from 'react-router-dom'

const ChangePasswordPage = () => {

    return (
        <AuthSection header={"Смена пароля"}>
            <InputAuth title={"Старый пароль"} type="password"/>
            <InputAuth title={"Новй пароль"} type="password"/>
            <InputAuth title={"Новй пароль(повторно)"} type="password"/>
            <div className={styles.buttons__wrapper}>
                <WhiteBtn>Сохранить</WhiteBtn>
                <Link to="/forgot-password" className={styles.link__route}>Забыли пароль?</Link>
            </div>
        </AuthSection>
    )
}

export default ChangePasswordPage; 