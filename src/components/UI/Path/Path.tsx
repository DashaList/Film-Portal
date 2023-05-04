import styles from './Path.module.scss'

const Path = ({children}:any) => {
    return (
        <nav className={styles.nav}>
            {children}
        </nav>
    );
};

export default Path;