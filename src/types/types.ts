export interface IProduct {
    id: number,
    img: string,
    name: string,
    description: string,
    price: number
};

export interface IUser {
    id: number;
    name: string;
    favorites: number[];
    cart: number[];
};

export interface IAuthContext {
    user: IUser | null;
    login: (name: string) => void;
    logout: () => void;
    toggleFavorite: (productId: number) => void;
    toggleCart: (productId: number) => void;
};