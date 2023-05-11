import Button from "../UI/Button/Button";
import styles from './CommentBox.module.scss'

const CommentBox = () => {
    const comments = [{
        avatar: 'https://i.pinimg.com/236x/0f/5a/27/0f5a27b5595e942808f00283ee4746d0--voxel-pixel-art.jpg?nii=t',
        auhtor: 'Shroom',
        theme: 'Перу не беру',
        text: 'Филипп стал инвалидом и не может жить без поддержки других людей. У него есть заботливая домохозяйка, умная секретарша, услужливый садовник, опытная медсестра. Вот только с личным помощником (он же сиделка) Филиппу не везёт. Непрерывная текучка кадров. Сможет ли ужиться Филипп с Дриссом, который даже не ищет работу личного помощника?',
        subcomments: [{
            avatar: 'https://i.pinimg.com/originals/fc/0b/36/fc0b36e90ecdc43d2363ba89002801c9.png',
            auhtor: 'Cat',
            theme: 'Вот такие пироги ',
            text: 'бла-бла-бла',


        }]
    }]
    return (
        <div className={styles.commentBox}>
            {comments.map((comment) => (
                <div className={styles.comment}>
                    <div className={styles.commentHeader}>
                        <img src={comment.avatar} alt="" className={styles.avatar} />
                        <h3 className={styles.commentAuthor}> {comment.auhtor}</h3>
                    </div>
                    <h2 className={styles.theme}>{comment.theme} </h2>
                    <p className={styles.text}>{comment.text}</p>
                    <Button variant='outlined'> Ответить на комментарий </Button>
                    {comment.subcomments.map((subcomment) => (
                        <div className={styles.subcomment}>
                            <div className={styles.commentHeader}>
                                <img src={subcomment.avatar} alt="" className={styles.avatar} />
                                <h3 className={styles.commentAuthor}> {subcomment.auhtor}</h3>
                            </div>
                            <h2 className={styles.theme}>{subcomment.theme} </h2>
                            <p className={styles.text}>{subcomment.text}</p>
                        </div>
                    ))}
                </div>
            ))}
            <Button> Добавить комментарий </Button>

            <div className={styles.addCommentBox}>
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="Тема"/>
                <input type="text" placeholder="Текст"/>
                <Button> Опубликовать </Button>

            </div>
        </div>
    );
};

export default CommentBox;