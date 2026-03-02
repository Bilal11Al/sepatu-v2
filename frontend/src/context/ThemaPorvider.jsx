import { useEffect, useState } from "react";
import { ThemaContext } from "./ThemaContext";

function ThemaProvider({ children }) {
    const [thema, setThema] = useState(() => {
        // ini lazyy  Initialization di dalam state
        const saved = localStorage.getItem('thema');
        return saved ? JSON.parse(saved) : false
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', thema);
        localStorage.setItem('thema', JSON.stringify(thema));
    }, [thema]);

    return (
        <ThemaContext.Provider value={{ thema, setThema }}>
            {children}
        </ThemaContext.Provider>
    );
}

export { ThemaProvider }