import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import styles from './AuthForm.module.scss'
import google from '../../assets/img/svg/google_sign.svg'
import vk from '../../assets/img/svg/vk-1.svg'
import { Link } from 'react-router-dom'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface AuthFormProps {
    type: 'signin' | 'signup'
    title: string;
    btnName: string;
    bottomText: {
        left: string,
        right: string
    };
    submitHandler: (email: string, password: string) => void
}

const AuthForm: FC<AuthFormProps> = ({type, title, btnName, bottomText, submitHandler}) => {

    const { t } = useTranslation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const passwordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

  return (
    <div className={styles.AuthForm}>
        <h2 className={styles.title}>{title}</h2>
        <Input type="text" placeholder='Введите e-mail' onChange={loginInputHandler} style='light'></Input>
        <div className={styles.passwordInput}>
        <Input type="password" placeholder='Введите пароль' onChange={passwordInputHandler} style='light'></Input>
        </div>
        <div className={styles.signBtn}>
            <Button onClick={() => submitHandler(email, password)}>{btnName}</Button>
        </div>
        <div className={styles.divide}>
            <div className={styles.line}></div>
            <div className={styles.divideTextWrap}>
                <div className={styles.divideText}>{t('Auth.or')}</div>
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
            <span>{bottomText.left}</span>
            {type === 'signin' && <Link to={"/signup"}>{bottomText.right}</Link>}
            {type === 'signup' && <Link to={"/signin"}>{bottomText.right}</Link>}
        </div>
    </div>
  )
}

export default AuthForm