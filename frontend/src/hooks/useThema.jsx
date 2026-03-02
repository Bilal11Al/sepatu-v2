import { useContext } from "react";
import { ThemaContext } from "../context/ThemaContext";

function useThema() {
    const context = useContext(ThemaContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
}

export { useThema }