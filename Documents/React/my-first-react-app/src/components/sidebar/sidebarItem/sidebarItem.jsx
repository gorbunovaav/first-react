import s from './sidebarItem.module.css';

function SidebarItem(props) {
    return (
        <div className={s.SidebarItem}>
            <img src={props.icon} alt="Icon" className={s.SidebarIcon} />
            <span className={s.SidebarText}>{props.text}</span>
        </div>
            )
    }

    export default SidebarItem;  
