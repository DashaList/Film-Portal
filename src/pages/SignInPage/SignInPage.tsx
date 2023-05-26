import Button from '../../components/UI/Button/Button'
import google from '../../assets/img/svg/google_sign.svg'
import vk from '../../assets/img/svg/vk-1.svg'
import { Link } from 'react-router-dom'
import Input from '../../components/UI/Input/Input'
import styles from './SignInPage.module.scss'

const SignInPage = () => {
  
  return (
    <div className={styles.SignInPage}>
      <div className={styles.formWrapper}>
          <h2 className={styles.title}>Вход в аккаунт</h2>
          <Input type="text" placeholder='Введите e-mail'></Input>
          <div className={styles.passwordInput}>
            <Input type="password" placeholder='Придумайте пароль'></Input>
          </div>
          <div className={styles.signInBtn}>
              <Button>Войти</Button>
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
              <span>Нет аккаунта? </span>
              <Link to={"/signup"}>Попробуйте бесплатно</Link>
          </div>
      </div>
  </div>
  )
}

export default SignInPage