// src/context/AuthProvider.tsx
import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContextInstance";
import type { IUser } from "../types/types";

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);

    const login = (name: string) => {
        setUser({ id: Date.now(), name, favorites: [], cart: [] });
    };

    const logout = () => setUser(null);

    const toggleFavorite = (productId: number) => {
        if (!user) return;
        setUser(prev =>
            prev
                ? {
                    ...prev,
                    favorites: prev.favorites.includes(productId)
                        ? prev.favorites.filter(id => id !== productId)
                        : [...prev.favorites, productId],
                }
                : prev
        );
    };

    const toggleCart = (productId: number) => {
        if (!user) return;
        setUser(prev =>
            prev
                ? {
                    ...prev,
                    cart: prev.cart.includes(productId)
                        ? prev.cart.filter(id => id !== productId)
                        : [...prev.cart, productId],
                }
                : prev
        );
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, toggleFavorite, toggleCart }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;