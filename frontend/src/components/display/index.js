import { useEffect, useState } from "react";
import './display.css'

function Display() {
    const [countdown, setCountdown] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  
    // Data de destino (17 de novembro de 2023)
    const targetDate = new Date('2023-11-17T00:00:00');
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        const now = new Date();
        const timeDifference = targetDate - now;
  
        if (timeDifference <= 0) {
          clearInterval(intervalId);
          setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
          setCountdown({ days, hours, minutes, seconds });
        }
      }, 1000); // Atualize a cada segundo
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div>
       
        <div className="display">
          <span>{countdown.days} dias</span>
          <span>{countdown.hours} horas</span>
          <span>{countdown.minutes} minutos</span>
          <span>{countdown.seconds} segundos</span>
        </div>
      </div>
    );
  }
  
  export default Display;