import './App.css'
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;