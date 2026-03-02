import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { ThemaProvider } from "./context/ThemaPorvider.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ThemaProvider>
        <App />
      </ThemaProvider>
    </AuthProvider>
  </BrowserRouter>
)
