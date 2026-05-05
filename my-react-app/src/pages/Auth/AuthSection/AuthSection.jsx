import Footer from "@components/layout/Footer/Footer"
import styles from "./AuthSection.module.css";
import logo from "@icons/logo.svg"

const AuthSection = ({children, header}) => {

    return (
        <div>
            <div className={styles.auth_section}>
                <div className={styles.auth_section__title}>
                    <h1 className={styles.auth_section__header}>
                        {header}
                    </h1>
                    <img src={logo} alt="" className={styles.auth_section__logo} />
                </div>
                <div className={styles.auth_section__content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthSection; 