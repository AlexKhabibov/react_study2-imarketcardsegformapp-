import { useContext } from "react";
import { AuthContext } from "../context/AuthContextInstance";

const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth должен использоваться внутри AuthProvider");
    return ctx;
};

export default useAuth;