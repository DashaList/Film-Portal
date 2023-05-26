import styles from './HeaderDropdown.module.scss'
import login from '../../assets/img/svg/login-new.svg'
import languageIcon from '../../assets/img/svg/language-new.svg'
import supportIcon from '../../assets/img/svg/support-new.svg'
import cn from 'classnames'
import { FC } from 'react'

interface HeaderDropdownProps {
    loginHandler: () => void;
    refProps: React.RefObject<HTMLDivElement>;
    onMouseLeave: () => void
}

const HeaderDropdown: FC<HeaderDropdownProps> = ({loginHandler, refProps, onMouseLeave}) => {

  return (
    <div className={styles.Dropdown} ref={refProps} onMouseLeave={onMouseLeave}>
        <div className={styles.triangle}></div>
        <div className={styles.dropdownWrapper}>
            <div className={styles.dropdownBlock}>
                <div>
                    <img src={languageIcon} alt="" />
                </div>
                <span>Изменить язык</span>
            </div>

            <a href="https://start.ru/support" className={styles.dropdownBlock}>
                    <div>
                        <img src={supportIcon} alt="" />
                    </div>
                    <span>Служба поддержки</span>
            </a>

            <div className={cn(styles.dropdownBlock, styles.authBlock)}>
                <div className={styles.authText}>Уже есть аккаунт?</div>
                <button className={styles.loginBtn} onClick={loginHandler}>
                    Войти
                    <img src={login} alt="" />
                </button>
            </div>

        </div>
    </div>
  )
}

export default HeaderDropdown