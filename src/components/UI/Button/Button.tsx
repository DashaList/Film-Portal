import cn from 'classnames';
import { FC, ReactNode } from 'react'
import styles  from './Button.module.scss'

interface ButtonProps {
    variant?: 'contained' | 'outlined' | "translucent";
    children: ReactNode;
    onClick?: () => void
}

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