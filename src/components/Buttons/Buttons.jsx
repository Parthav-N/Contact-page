import styles from './Buttons.module.css';
import { MdMessage, MdCall } from "react-icons/md";

export const Buttons = (props) => {
    
    const {isOutline, icon, text, ...rest} = props;

    return (
        <button {...rest} className={isOutline? styles.outline_btn : styles.primary_btn}>
            {icon}
            {text}
        </button>
    )
}
