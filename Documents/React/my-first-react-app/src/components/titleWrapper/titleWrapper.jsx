import s from './titleWrapper.module.css';
import linkImg from './../../assets/img/link-icon.png';

function TitleWrapper(props) {
    return (
        <div className={s.TitleWrapper}>
            <h2 className={s.blockTitle}>{props.title}</h2>
            <div className={s.linkWrapper}>
                <a rel="stylesheet" href="#" className={s.link}>See all</a>
                <img src={linkImg} alt="Link-image" className={s.linkImg} />
            </div>
        </div>
            )
    }

    export default TitleWrapper;  
