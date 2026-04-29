import {Link} from 'react-router'
import styles from './YellowBtn.module.css'

const YellowBtn = ({compHeight="32px", isLink=false, pathSvg, children, ...props }) => {
    if(isLink) {
        return (
        <Link {...props} className={styles.yellow_btn}>
            {children}
        </Link>
        )
    } else {
        return (
            <button style={{heigth: {compHeight}}} className={styles.yellow_btn}>
                <img src={pathSvg} alt="icon" className={styles.btn__icon}></img>
                {children}
            </button>
        )
    }
}

export default YellowBtn;