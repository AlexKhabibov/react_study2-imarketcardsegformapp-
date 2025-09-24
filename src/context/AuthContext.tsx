import { useState, type ReactNode, useEffect } from "react";
import { AuthContext } from "./AuthContextInstance";
import type { IUser } from "../types/types";

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);

    // Загружаем пользователя из localStorage при инициализации
    useEffect(() => {
        const currentUserKey = localStorage.getItem("currentUser");
        if (currentUserKey) {
            const storedUser = localStorage.getItem(`user_${currentUserKey}`);
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
    }, []);

    const saveUser = (updatedUser: IUser) => {
        setUser(updatedUser);
        localStorage.setItem(`user_${updatedUser.name}`, JSON.stringify(updatedUser));
        localStorage.setItem("currentUser", updatedUser.name); // чтобы знать, кто сейчас авторизован
    };

    const login = (name: string) => {
        const storedUser = localStorage.getItem(`user_${name}`);
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            const newUser: IUser = { id: Date.now(), name, favorites: [], cart: [] };
            saveUser(newUser);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("currentUser");
    };

    const toggleFavorite = (productId: number) => {
        if (!user) return;
        const updatedUser: IUser = {
            ...user,
            favorites: user.favorites.includes(productId)
                ? user.favorites.filter(id => id !== productId)
                : [...user.favorites, productId],
        };
        saveUser(updatedUser);
    };

    const toggleCart = (productId: number) => {
        if (!user) return;
        const updatedUser: IUser = {
            ...user,
            cart: user.cart.includes(productId)
                ? user.cart.filter(id => id !== productId)
                : [...user.cart, productId],
        };
        saveUser(updatedUser);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, toggleFavorite, toggleCart }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;