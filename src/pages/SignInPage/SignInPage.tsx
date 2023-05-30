import styles from './SignInPage.module.scss'
import AuthForm from '../../components/AuthForm/AuthForm'
import { useAppDispatch } from '../../hooks/redux'
import { login } from '../../store/actions/userActions'
import { useTranslation } from 'react-i18next'

const SignInPage = () => {

    const { t } = useTranslation()

    const dispatch = useAppDispatch()

    const signinHandler = (email: string, password: string) => {
        console.log(email, password)
        dispatch( login(email, password) )
    }
  
  return (
    <div className={styles.SignInPage}>
      <AuthForm type='signin'
        title={t('sign_in_account')}
        btnName={t('sign_in')}
        bottomText={{
            left: `${t('no_account?')} `,
            right: t('try_for_free')
        }}
        submitHandler={signinHandler} />
  </div>
  )
}

export default SignInPage