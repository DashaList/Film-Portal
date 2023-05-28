import styles from './SignUpPage.module.scss'
import Button from '../../components/UI/Button/Button'
import google from '../../assets/img/svg/google_sign.svg'
import vk from '../../assets/img/svg/vk-1.svg'
import { Link } from 'react-router-dom'
import Input from '../../components/UI/Input/Input'

const SignUpPage = () => {

  return (
    <div className={styles.SignUpPage}>
        <div className={styles.formWrapper}>
            <h2 className={styles.title}>Зарегистрируйтесь и смотрите START 7 дней бесплатно</h2>
            <Input type="text"placeholder='Введите e-mail' style='light'></Input>
            <div className={styles.passwordInput}>
                <Input type="text"placeholder='Введите пароль' style='light'></Input>
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