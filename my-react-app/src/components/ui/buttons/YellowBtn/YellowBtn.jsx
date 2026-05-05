import {Link} from 'react-router'
import styles from './YellowBtn.module.css'

const YellowBtn = ({compHeight="32px", isLink=false, pathSvg, children, ...props }) => {
    if(isLink) {
        return (
            <Link 
                style={{ height: compHeight, display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
                className={styles.yellow_btn} 
                {...props}
            >
                <img src={pathSvg} alt="icon" className={styles.btn__icon}></img>
                <p>{children}</p>
            </Link>
        )
    } else {
        return (
            <button style={{heigth: {compHeight}}} className={styles.yellow_btn}>
                <img src={pathSvg} alt="icon" className={styles.btn__icon}></img>
                <p>{children}</p>
            </button>
        )
    }
}

export default YellowBtn;