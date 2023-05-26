import cn from 'classnames';
import { FC, ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
    variant?: 'contained' | 'outlined' | "translucent";
    children: ReactNode;
    size?: string;
    onClick?: () => void
}

const Button: FC<ButtonProps> = ({ variant = 'contained', children, onClick = () => null }) => {
    const mainCn = cn(
        styles.Button,
        styles[variant]
    )

    return (
        <button className={mainCn} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button