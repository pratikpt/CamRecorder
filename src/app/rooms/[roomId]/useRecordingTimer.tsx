import { useState, useCallback, useEffect, useRef } from 'react';

const useRecordingTimer = () => {
    const [seconds, setSeconds] = useState(0);
    const intervalId = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (intervalId.current !== null) {
                clearInterval(intervalId.current);
            }
        };
    }, []);

    const startTimer = useCallback(() => {
        if (intervalId.current !== null) return;

        intervalId.current = window.setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
    }, []);

    const pauseTimer = useCallback(() => {
        if (intervalId.current !== null) {
            clearInterval(intervalId.current);
            intervalId.current = null;
        }
    }, []);

    const resetTimer = useCallback(() => {
        if (intervalId.current !== null) {
            clearInterval(intervalId.current);
        }
        intervalId.current = null;
        setSeconds(0);
    }, []);

    return { seconds, startTimer, pauseTimer, resetTimer };
};

export default useRecordingTimer;
