let ProfilePic = () => {
    return(
        <div>
            <img src="https://avatarmaker.com/images/other/cartoon-m.png"/>
        </div>
    )
}

let CommentBody = () => {
    return (
        <div>
            <b>Username</b>
        </div>
    )
}

let Comment = () => {
    return(
        <div>
        <ProfilePic />
        <CommentBody />
        </div>
    )
}

let Comments = () => {
    return (
        <div>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}

ReactDOM.render(<Comments />, document.getElementById('root'))