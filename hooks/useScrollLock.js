import { useCallback } from 'react';

export const useScrollLock = () => {
    const lockScroll = useCallback(() => {
        document.body.classList.add('scroll_disable')
    }, []);
    const unlockScroll = useCallback(() => {
        document.body.classList.remove('scroll_disable')
    }, []);

    return {
        lockScroll,
        unlockScroll
    }
};