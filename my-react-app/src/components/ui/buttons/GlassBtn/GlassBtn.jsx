import styles from './GlassBtn.module.css';
import addBtnIcn from "@icons/add_icn_16x16.svg"
import cancelBtnIcn from "@icons/cancel_icn_16x16.svg"
import completeBtnIcn from "@icons/complete_icn_16x12.svg"


const GlassBtn = ({typeOfBtn}) => {
    if(typeOfBtn === 'add'){
        return (
            <button className={styles.glass_add_btn}>
                <img src={addBtnIcn} alt="icon" className={styles.add_btn_icn}/>
            </button>
        )
    }

    if(typeOfBtn === 'close') {
        return (
            <button className={styles.glass_add_btn}>
                <img src={cancelBtnIcn} alt="icon" className={styles.add_btn_icn}/>
            </button>
        )
    }

    if(typeOfBtn === 'confirm'){
        return (
            <button className={styles.glass_add_btn}>
                <img src={completeBtnIcn} alt="icon" className={styles.add_btn_icn}/>
            </button>
        )
    }
}

export default GlassBtn