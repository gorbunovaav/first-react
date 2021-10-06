
import s from './Headliner.module.css';
import likeIcon from './../../assets/img/like-icon.png';
import dislikeIcon from './../../assets/img/dislike-icon.png';
import Time from './time/Time';
import Label from './label/Label';
import ArticleHeader from './article.header/ArticleHeader';


function Headliner(props) {
return (
    <article className={s.headliner}>
        <img className={s.thumbnailImg} src={props.thumbnail} alt="thumbnail image" />
        <div className={s.info}>
            <ArticleHeader title={props.title}/>
            <div className={s.rating}>
                <div className={s.like}>
                    <img className={s.likeIcon} src={likeIcon} alt="like-icon" />
                    <span className={s.text}>{props.like}</span>
                </div>
                <div className={s.dislike}>
                    <img className={s.dislikeIcon} src={dislikeIcon} alt="dislike-icon" />
                    <span className={s.text}>{props.dislike}</span>
                </div>
            </div>
            <div className={s.wrapper}>
                <Label label={props.label}/>
                <Time/>
            </div>
        </div>
    </article>
);
}

export default Headliner;
