import styles from './Footer.module.scss'
import cn from 'classnames'
import age18 from '../../assets/img/svg/age_18.svg'
import cloudPayment from '../../assets/img/svg/cloud_payment.svg'
import payonline from '../../assets/img/svg/payonline.svg'
import vk from '../../assets/img/svg/vk.svg'
import ok from '../../assets/img/svg/ok.svg'
import tg from '../../assets/img/svg/tg.svg'
import tiktok from '../../assets/img/svg/tiktok.svg'
import youtube from '../../assets/img/svg/youtube.svg'
import visa from '../../assets/img/svg/visa.svg'
import mir from '../../assets/img/svg/mir.svg'
import mastercard from '../../assets/img/svg/mastercard.svg'
import apple from '../../assets/img/svg/apple.svg'
import google from '../../assets/img/svg/google.svg'
import Huawei from '../../assets/img/svg/Huawei.svg'

import samsumg from '../../assets/img/svg/samsung.svg'
import lg from '../../assets/img/svg/lg.svg'
import sony from '../../assets/img/svg/sony.svg'
import philips from '../../assets/img/svg/philips.svg'
import haier from '../../assets/img/svg/haier.svg'
import panasonic from '../../assets/img/svg/panasonic.svg'
import mi from '../../assets/img/svg/mi.svg'
import huawei from '../../assets/img/svg/huawei-new.svg'
import tcl from '../../assets/img/svg/tcl.svg'
import hisense from '../../assets/img/svg/hisense.svg'
import googleTv from '../../assets/img/svg/google_tv.svg'
import miBox from '../../assets/img/svg/mi_box.svg'
import appleTv from '../../assets/img/svg/apple_tv.svg'
import rombica from '../../assets/img/svg/rombica.svg'
import tvip from '../../assets/img/svg/tvip.svg'
import chromecast from '../../assets/img/svg/chromecast.svg'
import { useWindowWidth } from '../../hooks/hooks'

const Footer = () => {

    const windowWidth = useWindowWidth()
    const tvs = [samsumg, lg, sony, philips, haier, panasonic, mi, huawei, tcl, hisense, googleTv, miBox, appleTv, rombica, tvip, chromecast]

  return (
    <footer>
        {windowWidth >= 1024 && <div className={styles.Footer}>
            <div className={styles.footer__item}>
                <div className={styles.menu}>
                    <a href="!#" className={styles.link}>Регистрация и оплата</a>
                    <a href="!#" className={styles.link}>Политика приватности</a>
                    <a href="!#" className={styles.link}>Пользовательское соглашение</a>
                    <a href="!#" className={styles.link}>Сообщить об ошибке</a>
                </div>
                <div className={styles.copyright}>
                    <div>
                        <img src={age18} alt="18+" />
                    </div>
                    <span>© ООО «Старт.Ру», 2017-2023</span>
                </div>
            </div>
            <div className={styles.footer__item}>
                <div className={styles.menu}>
                    <a href="!#" className={styles.link}>О нас</a>
                    <a href="!#" className={styles.link}>Контакты</a>
                    <a href="!#" className={styles.link}>Партнерам</a>
                    <a href="!#" className={styles.link}>Вакансии</a>
                    <a href="!#" className={styles.link}>Акции</a>
                    <a href="!#" className={styles.link}>Журнал</a>
                </div>
                <div className={styles.payment}>
                    <span className={styles.bottom_title}>Система&nbsp;оплаты</span>
                    <div className={styles.payment_images}>
                        <img src={cloudPayment} alt="cloud payment" />
                        <img src={payonline} alt="payonline" />
                    </div>
                </div>
            </div>
            <div className={styles.footer__item}>
                <div>
                    <div className={styles.menu}>
                        <a href="!#" className={styles.link}>Служба поддержки</a>
                        <a href="!#" className={styles.link}>Где смотреть</a>
                        <a href="!#" className={styles.link}>Вопросы и ответы</a>
                    </div>
                    <div className={styles.social}>
                        <a href="!#" className={styles.social__items}>
                            <img src={youtube} alt="youtube" />
                        </a>
                        <a href="!#" className={styles.social__items}>
                            <img src={vk} alt="vk" />
                        </a>
                        <a href="!#" className={styles.social__items}>
                            <img src={ok} alt="ok" />
                        </a>
                        <a href="!#" className={styles.social__items}>
                            <img src={tiktok} alt="tiktok" />
                        </a>
                        <a href="!#" className={styles.social__items}>
                            <img src={tg} alt="tg" />
                        </a>
                    </div>
                </div>
                <div>
                    <span className={styles.bottom_title}>Мы принимаем карты</span>
                    <div className={styles.cards}>
                        <a href="!#">
                            <img src={visa} alt="visa" />
                        </a>
                        <a href="!#">
                        <img src={mir} alt="mir" />
                        </a>
                        <a href="!#">
                            <img src={mastercard} alt="mastercard" />
                        </a>
                    </div>
                </div>
            </div>
            <div className={cn(styles.footer__item, styles.footer__item_last)}>
                <div className={styles.apps}>
                    <div>
                        <img src={apple} alt="apple" />
                    </div>
                    <div>
                        <img src={google} alt="google" />
                    </div>
                    <div>
                        <img src={Huawei} alt="Huawei" />
                    </div>
                </div>
                <span className={styles.bottom_title}>START на большом экране</span>
                <div className={styles.tvs}>
                    {tvs.map(item => 
                        <div key={item}>
                            <img src={item} alt={item} />
                        </div>
                    )}
                </div>
            </div>
        </div>}
    </footer>
  )
}

export default Footer