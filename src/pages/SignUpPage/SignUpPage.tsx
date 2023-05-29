import styles from './SignUpPage.module.scss'
import AuthForm from '../../components/AuthForm/AuthForm'
import { useAppDispatch } from '../../hooks/redux'
import { register } from '../../store/actions/userActions'

const SignUpPage = () => {
    
    const dispatch = useAppDispatch()

    const signupHandler = (email: string, password: string) => {
        console.log(email, password)
        dispatch( register(email, password) )
    }

  return (
    <div className={styles.SignUpPage}>
        <AuthForm type='signup'
            title='Зарегистрируйтесь и смотрите START 7 дней бесплатно'
            btnName='Зарегистрироваться'
            bottomText={{
                left: 'Уже есть аккаунт? ',
                right: 'Войти'
          }}
          submitHandler={signupHandler}  />
    </div>
  )
}

export default SignUpPage