import React, { useState } from "react";

export const GlobalContext = React.createContext({});

export const GlobalProvider = ({ children }) => {
    const [ApiUrl, setApiUrl] = useState(null);

    return (
        <GlobalContext.Provider
            value={{
                ApiUrl,
                setApiUrl
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
