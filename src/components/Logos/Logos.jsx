import styles from './Logos.module.css'
import logo from '../../assets/images/Logos.png'


export default  function Logos () {
    return(
        <>
            <img className={styles.logos} src={logo} alt="logo" />
        </>
    )
}

