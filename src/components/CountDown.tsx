import { useState, useEffect } from 'react';
import styles from '../styles/components/CountDown.module.css'

export function CountDown() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  //const minuteLeftRight = String(minutes).padStart(2, '0').split('');
  //split divide os numeros transformados em string ('2' '5')
  //e padStart acrescenta um 0 a esquerda quando tiver 1 digito so ('0' '5')

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    setIsActive(false);
  }

  //Contador
  useEffect(() => {
    if (isActive && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [isActive, time])//2 parametros/ 1 oque eu quero exectuarfunction) / 2quanto()

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {isActive ? (
        <button
          type="button"
          className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
          onClick={startCountDown}
        >
          Abandonar ciclo
        </button>
      ) : (
        <button
          type="button"
          className={styles.countDownButton}
          onClick={startCountDown}
        >
          Iniciar um ciclo
        </button>
      )}

    </div>
  );
}