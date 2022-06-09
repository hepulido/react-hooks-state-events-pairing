import React from "react";


function Comments({video}) {

    const displayComments = video.comments.map(comment => {
        return (
            <div key={comment.id}>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
            </div>
        )
    })

    return (
        <div>
            <h2>{video.comments.length} Comments</h2>
            {displayComments}
        </div>
    )
}
export default Comments;