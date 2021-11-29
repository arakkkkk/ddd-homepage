import React, { useState } from "react";

export const GlobalContext = React.createContext({});

export const GlobalProvider = ({ children }) => {
    const [ApiUrl, setApiUrl] = useState(null);
    const [Url, setUrl] = useState(null);

    return (
        <GlobalContext.Provider
            value={{
                ApiUrl,
                setApiUrl,
                Url,
                setUrl
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
