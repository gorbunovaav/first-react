import s from './Time.module.css'
import clockIcon from './../../../assets/img/clock.png';

function Time() {
   return (
      <div className={s.Time}>
         <div className={s.time}>
            <img className={s.timeIcon} src={clockIcon} alt="clock-icon" />
            <span className={s.timeText}>2:00 pm</span>
         </div>
      </div>
   );
}

export default Time;