import React, { useState, useEffect } from 'react';
import moment from 'moment';

const DigitalClock = () => {
    const [currentTime, setCurrentTime] = useState(moment());
    const [clickTime, setClickTime] = useState(null);
    const [checkTime, setCheckTime] = useState(null);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    useEffect(() => {
        if(checkTime!==null){
            setClickTime(currentTime);
        }
        // eslint-disable-next-line
    }, [checkTime]);

    const handleOnClickCheck = () => {
        setCheckTime(!checkTime);
    }

    return (
        <>
            <div>{currentTime.format('YYYY-MM-DD hh:mm:s')}</div>
            <div>
                {clickTime&&(
                    <div>{clickTime.format('YYYY-MM-DD hh:mm:s')}</div>
                )}
                {(clickTime)?(
                    <div>{clickTime.format('YYYY-MM-DD hh:mm:s')}</div>
                ):(
                    <div>ยังไม้มีการเปลี่ยนแปลง</div>
                )}
            </div>
            <div>
                <button onClick={handleOnClickCheck}>click!!</button>
            </div>
        </>
    );
}

export default DigitalClock;