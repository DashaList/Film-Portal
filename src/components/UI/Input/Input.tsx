import { FC } from 'react';
import styles from './Input.module.scss'
import eyeOn from '../../../assets/img/svg/eye-on.svg'
import eyeOff from '../../../assets/img/svg/eye-off.svg'

interface InputProps {
    type: string;
    placeholder?: string;
    passwordEye?: {
        showPassword: boolean;
        eyeClickHandler: () => void
    }
}

const Input: FC<InputProps> = ({type, placeholder = '', passwordEye}) => {
  return (
    <div className={styles.Input}>
        <input type={type} maxLength={254} placeholder={placeholder}/>
        {passwordEye &&
            <div className={styles.passwordEye} onClick={passwordEye.eyeClickHandler}>
                {passwordEye.showPassword ? <img src={eyeOff} alt="" /> : <img src={eyeOn} alt="" />}
            </div>
        }
    </div>
  )
}

export default Input