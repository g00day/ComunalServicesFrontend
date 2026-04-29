import {Link} from 'react-router'
import styles from './WhiteBtn.module.css'

const WhiteBtn = ({compHeight="32px", isLink=false, children, ...props }) => {
    if(isLink) {
        return (
        <Link {...props} className={styles.white_btn}>
            {children}
        </Link>
        )
    } else {
            return (
                <button style={{heigth: {compHeight}}} className={styles.white_btn}>
                    {children}
                </button>
            )
    }
}

export default WhiteBtn; 