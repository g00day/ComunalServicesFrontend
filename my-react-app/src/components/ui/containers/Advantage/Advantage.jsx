import styles from './Advantage.module.css';

const Advantage = ({title, text}) => {


    return (
        <div className={styles.advantage}>
            <div class="advantage__content">
                <h1 className={styles.advantage__header}>
                    {title}
                </h1>
                <p className={styles.advantage__text}>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Advantage;