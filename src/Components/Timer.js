import React, { useState, useEffect } from 'react';
import moment from 'moment';

function CountdownTimer() {
    const [inputMinutes, setInputMinutes] = useState(0);
    const [inputSeconds, setInputSeconds] = useState(0);
    const [duration, setDuration] = useState(moment.duration(0, 'seconds'));
    const [isActive, setIsActive] = useState(false);
    const [timeOver, setTimeOver] = useState(false);

    useEffect(() => {
        let timer = null;
        if (isActive && duration.asSeconds() > 0) {
            timer = setInterval(() => {
                setDuration(prevDuration => {
                    const newDuration = moment.duration(prevDuration.asSeconds() - 1, 'seconds');
                    if (newDuration.asSeconds() <= 0) {
                        setIsActive(false);
                        setTimeOver(true);
                        return moment.duration(0, 'seconds');
                    }
                    return newDuration;
                });
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isActive, duration]);

    const handleStart = () => {
        // ตั้งค่าระยะเวลาเริ่มต้นเมื่อเริ่มนับถอยหลัง
        setDuration(moment.duration(inputMinutes, 'minutes').add(inputSeconds, 'seconds'));
        setIsActive(true);
        setTimeOver(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setDuration(moment.duration(0, 'seconds'));
        setInputMinutes(0);
        setInputSeconds(0);
        setTimeOver(false);
    };

    const handleMinuteChange = (e) => {
        setInputMinutes(parseInt(e.target.value, 10));
    };

    const handleSecondChange = (e) => {
        setInputSeconds(parseInt(e.target.value, 10));
    };

    const formattedDuration = moment.utc(duration.asMilliseconds()).format('mm:ss');

    return (
        <div style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '24px' }}>
            <div>
                <label>นาที: </label>
                <input
                    type="number"
                    min="0"
                    value={inputMinutes}
                    onChange={handleMinuteChange}
                    disabled={isActive}
                />
            </div>
            <div>
                <label>วินาที: </label>
                <input
                    type="number"
                    min="0"
                    max="59"
                    value={inputSeconds}
                    onChange={handleSecondChange}
                    disabled={isActive}
                />
            </div>
            <div style={{ margin: '20px' }}>
                <button onClick={handleStart} disabled={isActive || (inputMinutes === 0 && inputSeconds === 0)}>
                    เริ่มนับถอยหลัง
                </button>
                <button onClick={handleReset}>รีเซ็ต</button>
            </div>
            <div>
                {timeOver ? (
                    <span style={{ color: 'red' }}>หมดเวลาแล้ว</span>
                ) : (
                    <span>{formattedDuration}</span>
                )}
            </div>
        </div>
    );
}

export default CountdownTimer;
