import styles from './SignUpPage.module.scss'
import eyeOn from '../../assets/img/svg/eye-on.svg'
import eyeOff from '../../assets/img/svg/eye-off.svg'
import cn from 'classnames'
import Button from '../../components/UI/Button/Button'
import google from '../../assets/img/svg/google_sign.svg'
import vk from '../../assets/img/svg/vk-1.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const SignUpPage = () => {

    const [showPassword, setShowPassword] = useState(false)

    const eyeClickHandler = () => {
        setShowPassword(!showPassword)
    }

  return (
    <div className={styles.SignUpPage}>
        <div className={styles.formWrapper}>
            <div className={styles.title}>
                <span>Зарегистрируйтесь и смотрите START 7 дней бесплатно</span>
            </div>
            <div className={styles.signInput}>
                {/* <label htmlFor="login" className={styles.placeholder}>Введите </label> */}
                <input type="text" id='login' maxLength={254} placeholder='Введите e-mail'/>
            </div>
            <div className={cn(styles.signInput, styles.passwordInput)}>
                <input type={showPassword ? "text" : "password"} placeholder='Придумайте пароль'/>
                <div className={styles.passwordEye} onClick={eyeClickHandler}>
                    {showPassword ? <img src={eyeOn} alt="" /> : <img src={eyeOff} alt="" />}
                </div>
            </div>
            <div className={styles.signInBtn}>
                <Button>Зарегистрироваться</Button>
            </div>
            <div className={styles.divide}>
                <div className={styles.line}></div>
                <div className={styles.divideTextWrap}>
                    <div className={styles.divideText}>или</div>
                </div>
            </div>
            <div className={styles.signButtons}>
                <div className={styles.signButton}>
                    <img src={google} alt="" />
                </div>
                <div className={styles.signButton}>
                    <img src={vk} alt="" />
                </div>
            </div>
            <div className={styles.signBottom}>
                <span>Уже есть аккаунт? </span>
                <Link to={"/signIn"}>Войти</Link>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage