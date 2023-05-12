import { useState } from "react";
import Button from "../UI/Button/Button";
import styles from './CommentBox.module.scss'

const CommentBox = () => {
    const [addAuthor, setAuthor] = useState('')
    const [addTheme, setTheme] = useState('')
    const [addText, setText] = useState('')
    const [comments, setComments] = useState([{
        id: 1,
        avatar: 'https://i.pinimg.com/236x/0f/5a/27/0f5a27b5595e942808f00283ee4746d0--voxel-pixel-art.jpg?nii=t',
        auhtor: 'Shroom',
        theme: 'Перу не беру',
        text: 'Филипп стал инвалидом и не может жить без поддержки других людей. У него есть заботливая домохозяйка, умная секретарша, услужливый садовник, опытная медсестра. Вот только с личным помощником (он же сиделка) Филиппу не везёт. Непрерывная текучка кадров. Сможет ли ужиться Филипп с Дриссом, который даже не ищет работу личного помощника?',
        subcomments: [{
            id: 1,
            avatar: 'https://i.pinimg.com/originals/fc/0b/36/fc0b36e90ecdc43d2363ba89002801c9.png',
            auhtor: 'Cat',
            theme: 'Вот такие пироги ',
            text: 'бла-бла-бла',
        }]
    },
    {
        id: 2,
        avatar: 'https://i1.sndcdn.com/artworks-YxVjbp5m1w4ZVlXT-yrsSiQ-t3000x3000.jpg',
        auhtor: 'Pizza',
        theme: 'Хорошая работа',
        text: 'В итоге хочу сказать, что «Приключения Паддингтона» здорово поднимают настроение и подстегивают узнать об этом неусидчивом медведе еще больше. Так что с уверенностью желаю вам только самого приятного просмотра и рекомендую ради интереса хотя бы частично ознакомиться с произведениями Майкла Бонда, которые даже не думают о том, чтобы устареть.',
        subcomments: []
    }])
    const [targetId, setTargetId] = useState(0)

    const [displayForm, setDisplayForm] = useState(false)
    const showForm = () => {
        setDisplayForm(!displayForm)
    }
    const showFormSubcomment = (commentId: number) => {
        showForm()
        setTargetId(commentId)
        console.log(commentId)
    }
    const AddComment = () => {
        if (targetId === 0) {
            const newId = comments.length + 1;
            const newComment = {
                id: newId,
                avatar: 'https://i.redd.it/romry9zym79z.png',
                auhtor: addAuthor,
                theme: addTheme,
                text: addText,
                subcomments: []
            }
            setComments([...comments, newComment])
        }
        else {
            const newId = comments[targetId-1].subcomments.length + 1
            const newSubcomment = {
                id: newId,
                avatar: 'https://i.redd.it/romry9zym79z.png',
                auhtor: addAuthor,
                theme: addTheme,
                text: addText
            }
            comments[targetId-1].subcomments.push(newSubcomment)
            setComments(comments)
        }

        setAuthor('')
        setTheme('')
        setText('')
        setDisplayForm(!displayForm)
        setTargetId(0)

    }
    return (
        <div className={styles.commentBox}>
            {comments.map((comment) => (
                <div className={styles.comment} key={comment.id}>
                    <div className={styles.commentHeader}>
                        <div className={styles.userName}>
                            <img src={comment.avatar} alt="" className={styles.avatar} />
                            <h3 className={styles.commentAuthor}> {comment.auhtor}</h3>
                        </div>
                        <div onClick={() => showFormSubcomment(comment.id)}>
                            <Button variant='outlined'> Ответить на комментарий </Button>
                        </div>
                    </div>
                    <h2 className={styles.theme}>{comment.theme} </h2>
                    <p className={styles.text}>{comment.text}</p>

                    {comment.subcomments.map((subcomment) => (
                        <div className={styles.subcomment} key={`${comment.id} ${subcomment.id}`}>
                            <div className={styles.commentHeader}>
                                <div className={styles.userName}>
                                    <img src={subcomment.avatar} alt="" className={styles.avatar} />
                                    <h3 className={styles.commentAuthor}> {subcomment.auhtor}</h3>
                                </div>
                            </div>
                            <h2 className={styles.theme}>{subcomment.theme} </h2>
                            <p className={styles.text}>{subcomment.text}</p>
                        </div>
                    ))}
                </div>

            ))}

            <div className={styles.addCommentBox} style={displayForm ? { display: 'flex' } : { display: 'none' }}>
                <input className={styles.addCommentBoxHeader} type="text" placeholder="Имя" value={addAuthor} onChange={e => setAuthor(e.target.value)} />
                <input className={styles.addCommentBoxHeader} type="text" placeholder="Тема" value={addTheme} onChange={e => setTheme(e.target.value)} />
                <textarea className={styles.addCommentBoxText} placeholder="Текст" value={addText} onChange={e => setText(e.target.value)} />
                <div onClick={AddComment} className={styles.btn}>
                    <Button > Опубликовать </Button>
                </div>
            </div>
            <div onClick={showForm} className={styles.btn}>
                <Button> Добавить комментарий </Button>
            </div>
        </div>
    );
};

export default CommentBox;