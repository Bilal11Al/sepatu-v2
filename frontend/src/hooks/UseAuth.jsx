import AuthContext from "../context/AuthContext";
import { useContext } from "react";


function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
}
export default useAuth