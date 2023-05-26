import { FC, useState } from 'react';
import styles from './Input.module.scss'
import eyeOn from '../../../assets/img/svg/eye-on.svg'
import eyeOff from '../../../assets/img/svg/eye-off.svg'

export interface InputProps {
    type: string;
    placeholder: string;
}

const Input: FC<InputProps> = ({type, placeholder}) => {

    const [showPassword, setShowPassword] = useState(false)

    const eyeClickHandler = () => {
        setShowPassword(!showPassword)
    }
    
  return (
    <div className={styles.Input}>
        {type !== 'password' &&
            <input type={type} placeholder={placeholder}/>
        }
        {type === 'password' &&
            <>
                <input type={showPassword ? "text" : "password"} placeholder={placeholder}/>
                <div className={styles.passwordEye} onClick={eyeClickHandler}>
                    {showPassword ? <img src={eyeOff} alt="" /> : <img src={eyeOn} alt="" />}
                </div>
            </>
        }
    </div>
  )
}

export default Input