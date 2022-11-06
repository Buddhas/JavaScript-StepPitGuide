import { useEffect, useState } from 'react';

export default function useDebounce(delay, fn) {
    const [delay, setdelay] = useState(delay)
    useEffect(() => {
        const handle = setTimeout(() => {
            fn.apply(this)
        }, delay);
        return () => {
            clearTimeout(handle)
        }
    }, [delay, fn])
}