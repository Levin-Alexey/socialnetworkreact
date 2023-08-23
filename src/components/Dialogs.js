import classes from '../css/Dialogs.module.css';
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    return <div className={classes.dialogs_item}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>

};
const Message = (props) => {
    return <div className={classes.chat_item}>{props.message}</div>
};

const Dialogs = (props) => {
    return <div className={classes.dialogs_wrapper}>
        <div className={classes.dialogs_list}>
            <DialogItem name = 'Dmitriy' id = '1'/>
            <DialogItem name = 'Alex' id = '2'/>
            <DialogItem name = 'Sasha' id = '3'/>
            <DialogItem name = 'kolya' id = '4'/>
        </div>
        <div className={classes.dialogs_chat}>
            <Message message = "Hi" />
            <Message message = "Hello" />
            <Message message = "Good day" />
            <Message message = "OK" />
        </div>

    </div>
};

export default Dialogs;
