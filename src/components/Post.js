import classes from '../css/Post.module.css';

const Post = (props) => {
    return <div className={classes.post_wrapper}>
        <div className={classes.sectionPost_1_wrapper}>
            <div className={classes.avatarAndInfo}>
                <div className={classes.post_avatar}></div>
                <div className={classes.nameAndTime_wrapper}>
                    <div className={classes.userName_post}></div>
                    <div className={classes.timePosted}></div>
                </div>
            </div>
        </div>
        <div className={classes.contentPost_wrapper}>
            <div className={classes.textContent}>
                <p>{props.message}</p>
            </div>
            <div className={classes.mediaContent}></div>
        </div>
        <div className={classes.likesandEmotion_wrapper}>
            <div></div>
            <div className={classes.likesCounter}>
                <div>{props.likes}</div>
            </div>
        </div>
    </div>
};

export default Post;
