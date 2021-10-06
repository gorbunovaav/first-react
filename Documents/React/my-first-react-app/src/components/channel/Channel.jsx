import s from './Channel.module.css';

function Channel(props) {
    return (
        <div className={s.channel}>
        <img style={props.style} src={props.channelImg} alt="channel-image" className={s.channelImg} />
        <span className={s.text}>{props.text}</span>
    </div>
            )
    }

    export default Channel;
