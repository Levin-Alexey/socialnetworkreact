import classes from '../css/UserContent.module.css';
import Post from "./Post";


const UserContent = () => {
    return <section className={classes.user_content_wrapper}>
        <div className={classes.user_info_wrapper}>
            <div className={classes.user_avata}></div>
            <div className={classes.user_info}></div>
        </div>
        <div className={classes.new_post_wrapper}></div>
        <div className={classes.user_posts_wrapper}>
            <Post/>
        </div>

    </section>
}
export default UserContent;