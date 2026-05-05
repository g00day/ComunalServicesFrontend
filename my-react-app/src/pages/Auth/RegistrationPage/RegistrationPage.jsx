import AuthSection from "../AuthSection/AuthSection"
import styles from "./RegistrationPage.module.css"
import InputAuth from "@components/ui/inputs/InputAuth/InputAuth"
import WhiteBtn from "@components/ui/buttons/WhiteBtn/WhiteBtn"
import {Link} from 'react-router-dom'

const RegistrationPage = () => {

    return (
        <AuthSection header={"Регистрация"}>
                <InputAuth title={"Логин:"} type="text"/>
                <InputAuth title={"Почта:"} type="text"/>
                <InputAuth title={"Пароль:"} type="password"/>
                <InputAuth title={"ФИО:"} type="text"/>
                <InputAuth title={"Адрес жилищника:"} type="text"/>
                <div className={styles.avatar__wrapper}>
                    <p className={styles.avatar__text}>Аватар</p>
                    <WhiteBtn>Загрузить</WhiteBtn>
                </div>
                <p className={styles.avatar__loaded}>Загружен: typa_ya.jpg</p>
                <div className={styles.buttons__wrapper}>
                    <WhiteBtn>Запросить письмо</WhiteBtn>
                    <Link to="/login" className={styles.link__route}>Войти в аккаунт</Link>
                </div>
        </AuthSection>
        )
}

export default RegistrationPage;