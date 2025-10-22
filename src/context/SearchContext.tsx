import React, { createContext, ReactNode, useContext, useState } from "react";

type SearchContextType = {
    pattern: string;
    setPattern: (text: string) => void;
    clearSearch: () => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
    const [pattern, setPattern] = useState("");

    const clearSearch = () => setPattern("");

    return (
        <SearchContext.Provider value={{ pattern, setPattern, clearSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
};
