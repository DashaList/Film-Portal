import styles from './SignUpPage.module.scss'
import Button from '../../components/UI/Button/Button'
import google from '../../assets/img/svg/google_sign.svg'
import vk from '../../assets/img/svg/vk-1.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Input from '../../components/UI/Input/Input'

const SignUpPage = () => {

    const [showPassword, setShowPassword] = useState(false)

    const eyeClickHandler = () => {
        setShowPassword(!showPassword)
    }

  return (
    <div className={styles.SignUpPage}>
        <div className={styles.formWrapper}>
            <h2 className={styles.title}>Зарегистрируйтесь и смотрите START 7 дней бесплатно</h2>
            <Input type="text"placeholder='Введите e-mail'></Input>
            <div className={styles.passwordInput}>
                <Input
                type={showPassword ? "text" : "password"}
                placeholder='Придумайте пароль'
                passwordEye={{showPassword, eyeClickHandler}}
                ></Input>
            </div>
            <div className={styles.signUpBtn}>
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
                <Link to={"/signin"}>Войти</Link>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage