import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        localStorage.setItem("user", JSON.stringify({
            email,
            token: password
        }));

        alert("Форма отправлена!");
        navigate('/dashboard')
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
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
            </form>
        </>
    );
}

export default Login;