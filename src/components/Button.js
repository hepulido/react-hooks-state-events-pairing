import {React, useState} from "react"
import Comments from "./Comments"

function Button({video}){
    const [upVote, setUpVote] = useState(video.upvotes)
    const [downVote, setDownVote] = useState(video.downvotes)
    const [hideComments, setHideComments] = useState(video.comments)
    function handleUpVote (){
     return setUpVote(upVote => upVote++);
    }

    function handleDownVote (){
        return setDownVote(downVote => downVote--);
    }
    function handleHideComments(){
        return setHideComments(hideComments => !hideComments)
    }

    
    return(
        <>
         <div >
                <button onClick={handleUpVote} name="up">{upVote}👍</button>  
                <button onClick={handleDownVote} name="down">{downVote}👎</button>
            </div>
            <div>
                <button onClick={handleHideComments} id="hideComments">{hideComments ? "Hide" : "Show"} Comments</button>
                {hideComments ? <Comments video={video} /> : null}
            </div>
    </>
    )
}

export default Button;