const Comment = ({
    comment
}) => {
    return (
        <li className="otherProject">
            <div className="floatLeft">
                <h6>{comment.userDetails?.firstName}:</h6>
                <h2>{comment.text}</h2>
            </div>            
        </li>
    )
}

export default Comment;