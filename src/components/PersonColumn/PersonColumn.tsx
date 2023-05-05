import styles from './PersonColumn.module.scss'


const PersonColumn = () => {
    return (
        <div className={styles.PersonColumn}>
            <h3 className={styles.columnHeader}> В главных ролях </h3>
            <div className={styles.personRow}>
                <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/2b59aa9c-9d6f-4b09-92fa-c758624b68fd/280x420" alt="" className={styles.avatar} />
                <span className={styles.personName}>Бен Уишоу</span>
            </div>
        </div>
    );
};

export default PersonColumn;