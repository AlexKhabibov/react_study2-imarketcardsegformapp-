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

        alert('Пользователь вышел из учетной записи')
        navigate('/');
    };

    const deleteAccClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!currentUserKey) return;

        localStorage.removeItem(currentUserKey);
        localStorage.removeItem("currentUser");

        alert('Учетная запись удалена')
        navigate('/');
    };

    return (
        <>
            <h1>Добро пожаловать, {user.email}</h1>
            <button onClick={logOutClick}>Выйти</button>
            <button onClick={deleteAccClick}>Удалить учетную запись</button>
            <br />
            <br />
            <br />
            <h2>Список задач</h2>
            <input type="text" />
            <button>Добавить</button>
            <button>Удалить</button>
            <ul></ul>
        </>
    );
}

export default Dashboard;