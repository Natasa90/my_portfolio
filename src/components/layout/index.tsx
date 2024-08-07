import React, { useState, useEffect } from 'react';

// Custom hook to detect screen size
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};

const Layout = ({ children }: any) => {
    const { width } = useWindowSize();

    // Adjust styles based on screen size
    const layoutStyle = {
        display: 'flex',
        flexFlow: 'column wrap',
        marginLeft: width < 768 ? '1rem' : '8rem', // Adjust margin for smaller screens
        paddingBottom: width < 768 ? '1rem' : '2rem' // Adjust padding for smaller screens
    };

    return (
        <main style={layoutStyle}>
            {children}
        </main>
    );
};

export default Layout;