import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate()

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userKey = email;
        const storedUser = JSON.parse(localStorage.getItem(userKey) || "{}");

        if (storedUser.token === password) {
            localStorage.setItem("currentUser", userKey);
            alert("Вход успешен!");
            navigate("/dashboard");
        } else {
            alert("Неверный логин или пароль!");
        }
    };


    const handleRegister = () => {
        const userKey = email;
        if (localStorage.getItem(userKey)) {
            alert("Пользователь уже существует!");
            return;
        }

        localStorage.setItem(userKey, JSON.stringify({ email, token: password }));
        localStorage.setItem("currentUser", userKey);

        alert("Регистрация успешна!");
        navigate('/dashboard');
    };


    return (
        <>
            <form onSubmit={handleLogin}>
                <input type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    required />
                <input type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    required />
                <button type="submit">Войти</button>
                <button onClick={handleRegister} type="button">Регистрация</button>
            </form>
        </>
    );
}

export default Login;