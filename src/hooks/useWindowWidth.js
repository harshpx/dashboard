import React from 'react'

const useWindowWidth = () => {
    const [width,setWidth] = React.useState(window.innerWidth);

    const trackWidth = ()=>{
        setWidth(window.innerWidth);
    }

    React.useLayoutEffect(()=>{
        window.addEventListener('resize',trackWidth);
        trackWidth();
        return ()=>{
            window.removeEventListener('resize',trackWidth);
        }
    },[])

    return {
        isMobile: width <= 768,
        isTablet: width > 768 && width < 1200,
        isDesktop: width >= 1200,
        width,
    }
};

export default useWindowWidth;