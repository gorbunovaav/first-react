import s from './ArticleHeader.module.css'

function ArticleHeader(props) {
    return (
        <div className={s.ArticleHeader}>
            <h1 className={s.title}>{props.title}</h1>
        </div>
    );
}

export default ArticleHeader;