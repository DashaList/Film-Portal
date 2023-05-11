import React, { FormEvent, SetStateAction, useState } from 'react';

const re = () => {
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([
        {
            id: 1,
            author: "Иван",
            text: "Крутой фильм!!!",
            replies: [
                {
                    id: 1,
                    author: "Яна",
                    text: "Согласна"
                },
                {
                    id: 2,
                    author: "Борис",
                    text: "У меня иное мнение",
                },
            ],
        },
        {
            id: 2,
            author: "Коля",
            text: "Как это можно смотреть?",
            replies: [
                {
                    id: 1,
                    author: "Даня",
                    text: "Сценаристу руки бы оторвать"
                },
            ],
        },
    ]);

    const handleCommentChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const newId = comments.length + 1;
        const newCommentObject = {
            id: newId,
            author: "Аноним",
            text: newComment,
            replies: [],
        };
        setComments([...comments, newCommentObject]);
        setNewComment("");
    };

    const handleReplySubmit = (e: FormEvent<HTMLFormElement>, commentId: number) => {
        e.preventDefault();
        const commentIndex = comments.findIndex((c) => c.id === commentId);
        const newReplyId = comments[commentIndex].replies.length + 1;
        const newReplyObject = {
            id: newReplyId,
            author: "Аноним",
            text: newComment,
        };
        const newCommentsArray = [...comments];
        newCommentsArray[commentIndex].replies.push(newReplyObject);
        setComments(newCommentsArray);
        setNewComment("");
    };

    return (
        <div>
            <h2>Comments:</h2>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <strong>{comment.author}</strong> - {comment.text}

                    {comment.replies.map((reply) => (
                        <div key={reply.id} style={{ marginLeft: "40px" }}>
                            <strong>{reply.author}</strong> - {reply.text}
                        </div>
                    ))}
                    <form
                        onSubmit={(e) => handleReplySubmit(e, comment.id)}
                        style={{ marginLeft: "10px" }}
                    >
                        <input
                            type="text"
                            placeholder="Ответе на комментарий"
                            value={newComment}
                            onChange={handleCommentChange}
                        />
                        <button type="submit">Ответить</button>
                    </form>
                </div>
            ))}
            <form onSubmit={handleCommentSubmit}>
                <input
                    type="text"
                    placeholder="Напишите комментарий"
                    value={newComment}
                    onChange={handleCommentChange}
                />
                <button type="submit">Опубликовать</button>
            </form>
        </div>
    );
};

export default re;