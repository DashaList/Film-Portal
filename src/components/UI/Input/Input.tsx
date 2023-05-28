import { FC, useState } from 'react';
import styles from './Input.module.scss'
import eyeOn from '../../../assets/img/svg/eye-on.svg'
import eyeOff from '../../../assets/img/svg/eye-off.svg'
import cn from 'classnames'

export interface InputProps {
    type: string;
    placeholder: string;
    //inpType?: 'text' | 'number' | 'radio',
    //name_ru: string,
    //name_en: string,
    func?: any;
    style?: 'light' | 'dark'
}

const Input: FC<InputProps> = ({type, placeholder, func, style = 'dark'}) => {

    const [showPassword, setShowPassword] = useState(false)

    const eyeClickHandler = () => {
        setShowPassword(!showPassword)
    }
    
  return (
    <div className={cn(styles.Input, styles[style],)}>
        {type !== 'password' &&
            <input type={type} placeholder={placeholder} onChange={(e) => func(e.target.value)} data-testid='inputBox'/>
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