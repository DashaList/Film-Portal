import styles from './SignUpPage.module.scss'
import AuthForm from '../../components/AuthForm/AuthForm'
import { useAppDispatch } from '../../hooks/redux'
import { register } from '../../store/actions/userActions'
import { useTranslation } from 'react-i18next'

const SignUpPage = () => {

    const { t } = useTranslation()
    
    const dispatch = useAppDispatch()

    const signupHandler = (email: string, password: string) => {
        console.log(email, password)
        dispatch( register(email, password) )
    }

  return (
    <div className={styles.SignUpPage}>
        <AuthForm type='signup'
            title={t('watch_start_7_days')}
            btnName={t('sign_up')}
            bottomText={{
                left: `${t('have_an_account?')} `,
                right: t('sign_in')
          }}
          submitHandler={signupHandler}  />
    </div>
  )
}

export default SignUpPage