import s from './Header.module.css';
import MenuItem from './menuItem/MenuItem';
import PersonalImage from './../../assets/img/person-image.png';
import menuicon1 from './../../assets/img/menu-icon1.png';
import menuicon2 from './../../assets/img/menu-icon2.png';
import menuicon3 from './../../assets/img/menu-icon3.png';

function Header(props) {
    return (
        <div className={s.header}>
            <menu className={s.menu}>
                <MenuItem  menuImg={menuicon1} text="San Francisco, California"/>
                <MenuItem  menuImg={menuicon2} text="Analysis"/>
                <MenuItem  menuImg={menuicon3} text="Monthly"/>
            </menu>
                <input type="text" placeholder="Search for anything…" className={s.search}></input>
                <button className={s.menuButton}></button>
                <img src={PersonalImage} alt="personal-image" className={s.personalImg} />
            </div>
    );
    }

    export default Header;
    