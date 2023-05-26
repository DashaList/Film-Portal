import cn from 'classnames';
import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
    variant?: 'contained' | 'outlined' | "translucent";
    size?: 'small' | 'medium' | 'large';
    children: ReactNode;
    onClick?: () => void
}

const Button: FC<ButtonProps> = ({variant = 'contained', size= 'medium', children, onClick = () => null}) => {
    const mainCn = cn(
        styles.Button,
        styles[variant],
        styles[size]
    )

    return (
        <button className={mainCn} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button