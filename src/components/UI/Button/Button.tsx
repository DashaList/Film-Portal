import cn from 'classnames';
import { FC } from 'react'
import styles  from './Button.module.scss'
import { ButtonProps } from '../../../types/types';



const Button: FC<ButtonProps> = ({variant = 'contained', children}) => {
    const mainCn = cn(
        styles.Button,
        styles[variant]
    )

    return (
        <button className={mainCn}>
            {children}
        </button>
    )
}

export default Button