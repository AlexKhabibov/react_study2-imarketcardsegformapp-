import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    useEffect(() => {
        if (!user.email) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <>
            <h1>Добро пожаловать, {user.email}</h1>
        </>
    );
}

export default Dashboard;