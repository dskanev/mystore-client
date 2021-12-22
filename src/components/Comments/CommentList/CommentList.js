import Comment from "../Comment";

const CommentList = ({
    comments
}) => {
    console.log(comments);
    return (
        <>
            {comments.length > 0
                ? (
                    <ul className="other-projects-list">
                        {comments.map(x => <Comment key={x.id} comment={x} />)}
                    </ul>
                ) 
                : <p className="no-projects">No comments have been published yet.</p>
            }
        </>
    );
}

export default CommentList;