import { useState } from "react";
import './css/Clock.css'

const Clock = () => {
    let date  = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString()
   
    let birthDate = new Date('October 6, 2003, 10:58:32 PM')
    
    let year = Number(date.slice(date.indexOf('/', date.indexOf('/') + 1) + 1)) - birthDate.getFullYear()
    let month = Number(date.slice(0, date.indexOf('/'))) - birthDate.getMonth()
    let day = Number(date.slice(date.indexOf('/') + 1, date.indexOf('/', date.indexOf('/') + 1))) -  birthDate.getDate() 
    let hour = Number(time.slice(0,time.indexOf(':')))
    let minutes = Number(time.slice(time.indexOf(':') + 1, time.indexOf(':', time.indexOf(':') + 1))) - birthDate.getMinutes()
    let seconds = Number(time.slice(time.indexOf(':', time.indexOf(':') + 1) + 1, time.indexOf(' '))) - birthDate.getSeconds()
    if(time.indexOf('PM') !== -1) {
        hour += 12
    }
    hour = hour - birthDate.getHours()

    if(month < 0) {
        year--
        month += 12
    }
    
    if(day < 0) {
        if(month > 0) {
            month--
        }
        else {
            year--
            month = 11;
        }
    }

    if(hour <= 0) {
        day--
        hour += 24
    }

    if(minutes <= 0) {
        hour--
        minutes += 60
    }

    if(seconds <= 0) {
        minutes-- 
        seconds+= 60
    }


    const [ctime,setTime] = useState(time)
    const [cDate, setDate] = useState(date)

    const UpdateTime=()=>{
        time =  new Date().toLocaleTimeString()
        date = new Date().toLocaleDateString()
        setTime(time)
        setDate(date)
    }
    setInterval(UpdateTime)
    return <h1>I am {year} years, {month} months, {day} days, {hour} hours, {minutes} minutes and {seconds} seconds old</h1>
}
 
export default Clock;