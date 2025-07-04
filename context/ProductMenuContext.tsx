'use client';

import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";


interface ProductMenuContextType {
    isProductMenuOpen: boolean;
    setIsProductMenuOpen: Dispatch<SetStateAction<boolean>>
}

const ProductMenuContext = createContext<ProductMenuContextType | undefined>
    (undefined);

interface ProductMenuProviderProps {
    children: ReactNode;
}
export const ProductMenuProvider: React.FC<ProductMenuProviderProps> = ({ children }) => {
    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

    return (
        <ProductMenuContext.Provider value={{ isProductMenuOpen, setIsProductMenuOpen }}>
            {children}
        </ProductMenuContext.Provider>
    );
};

export const useProductMenu = () => {
    const context = useContext(ProductMenuContext);
    if (context === undefined) {
        throw new Error('useProductMenu must be used within a ProductMenuProvider');
    }
    return context;
}