import s from './MenuItem.module.css';
import Arrows from './../../../assets/img/arrows-icon.png';

function MenuItem(props) {
    return (
        <div className={s.menuItem}>
        <img src={props.menuImg} alt="menu-image" className={s.menuImg} />
        <span className={s.text}>{props.text}</span>
        <img src={Arrows} alt="Arrows" className={s.arrows} />
    </div>
            )
    }

    export default MenuItem;

