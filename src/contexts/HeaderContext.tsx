import { createContext, useContext, useState } from "react";

interface HeaderContextType {
    customBackAction: (() => void) | undefined;
    setCustomBackAction: (action: (() => void) | undefined) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderContextProvider = ({children}:{children:React.ReactNode}) => {
    const [customBackAction, setCustomBackAction] = useState<(() => void) | undefined>(undefined);

    return <HeaderContext.Provider value={{customBackAction, setCustomBackAction}}>{children}</HeaderContext.Provider>
}


export const useHeaderContext = () => {
    const context = useContext(HeaderContext);

    if(!context) throw new Error("useCustomBackAction must be used within a HeaderProvider");

    return context;
}
