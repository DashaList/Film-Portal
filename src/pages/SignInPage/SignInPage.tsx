import styles from './SignInPage.module.scss'
import AuthForm from '../../components/AuthForm/AuthForm'
import { useAppDispatch } from '../../hooks/redux'
import { login } from '../../store/actions/userActions'

const SignInPage = () => {

    const dispatch = useAppDispatch()

    const signinHandler = (email: string, password: string) => {
        console.log(email, password)
        dispatch( login(email, password) )
    }
  
  return (
    <div className={styles.SignInPage}>
      <AuthForm type='signin'
        title='Вход в аккаунт'
        btnName='Войти'
        bottomText={{
            left: 'Нет аккаунта? ',
            right: 'Попробуйте бесплатно'
        }}
        submitHandler={signinHandler} />
  </div>
  )
}

export default SignInPage