import Label from '../headliner/label/Label';
import Time from '../headliner/time/Time';
import s from './News.module.css';

function News(props) {
    return (
        <div className={s.News}>
            <img src={props.newsImg} alt="News-image" className={s.newsImg} />
            <div className={s.newsWrapper}>
            <span className={s.newsText}>{props.text}</span>
            <div className={s.newsInner}>
            <Label label={props.label}/>
            <Time/>
            </div>
            </div>
            
        </div>
            )
    }

    export default News;  
