import styles from './Principe.module.css';

const Principe = ({title, text, num, className}) => {



    return (
        <div className={`${styles.principe} ${className || ''}`}>
            <div className={styles.principe__content}>
                <h1 className={styles.principe__header}>
                    {title}
                </h1>
                <p className={styles.principe__text}>
                    {text}
                </p>
            </div>
            <p className={styles.principe__number}>{num}</p>

        </div>
    )
}

export default Principe;