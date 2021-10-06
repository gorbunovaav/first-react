import s from './Label.module.css'

function Label(props) {
   return (
      <div className={s.Label}>
         <span className={s.label}>{props.label}</span>
      </div>
   );
}

export default Label;