import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();
    const currentUserKey = localStorage.getItem("currentUser");
    const user = JSON.parse(localStorage.getItem(currentUserKey || "") || "{}");

    useEffect(() => {
        const currentUser = currentUserKey
            ? JSON.parse(localStorage.getItem(currentUserKey) || "{}")
            : null;

        if (!currentUserKey || !currentUser?.email) {
            navigate("/");
        }
    }, [currentUserKey, navigate]);


    const logOutClick = () => {

        navigate('/');
    };

    const deleteAccClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!currentUserKey) return;

        localStorage.removeItem(currentUserKey); 
        localStorage.removeItem("currentUser"); 
        navigate('/');
    };

    return (
        <>
            <h1>Добро пожаловать, {user.email}</h1>
            <button onClick={logOutClick}>Выйти</button>
            <button onClick={deleteAccClick}>Удалить учетнуюю запись</button>
        </>
    );
}

export default Dashboard;