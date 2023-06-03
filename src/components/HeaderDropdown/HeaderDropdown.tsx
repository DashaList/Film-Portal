import styles from './HeaderDropdown.module.scss'
import login from '../../assets/img/svg/login-new.svg'
import languageIcon from '../../assets/img/svg/language-new.svg'
import supportIcon from '../../assets/img/svg/support-new.svg'
import cn from 'classnames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { logout } from '../../store/actions/userActions'

interface HeaderDropdownProps {
    loginHandler: () => void;
    refProps: React.RefObject<HTMLDivElement>;
    onMouseLeave: () => void
}

const HeaderDropdown: FC<HeaderDropdownProps> = ({loginHandler, refProps, onMouseLeave}) => {

    const { t } = useTranslation()

    const { isAuth } = useAppSelector( state => state.userReducer)
    const { isAdmin } = useAppSelector( state => state.userReducer.user)
    const dispatch = useAppDispatch()

    const logoutHandler = () => {
        dispatch( logout() )
    }

    //const isAuth = true

  return (
    <div data-testid='HeaderDropdown'className={styles.Dropdown} ref={refProps} onMouseLeave={onMouseLeave}>
        <div className={styles.triangle}></div>
        <div className={styles.dropdownWrapper}>
            <div className={styles.dropdownBlock}>
                <div>
                    <img src={languageIcon} alt="" />
                </div>
                <span>{t('Header.change_language')}</span>
            </div>

            <a href="https://start.ru/support" className={styles.dropdownBlock}>
                    <div>
                        <img src={supportIcon} alt="support" />
                    </div>
                    <span>{t('Header.support_center')}</span>
            </a>

            {!isAuth &&
                <div data-testid='Login' className={cn(styles.dropdownBlock, styles.authBlock)} onClick={loginHandler}>
                    <div className={styles.authText}>{t('have_an_account?')}</div>
                    <div className={styles.loginBtn}>
                        {t('sign_in')}
                        <img src={login} alt="" />
                    </div>
                </div>
            }

            {isAuth &&
                <div data-testid='Login' className={cn(styles.dropdownBlock, styles.authBlock)} onClick={logoutHandler}>
                    <div className={styles.authText}></div>
                    <div className={styles.loginBtn}>
                        {t('sign_out')}
                        <img src={login} alt="" />
                    </div>
                </div>
            }

        </div>
    </div>
  )
}

export default HeaderDropdown