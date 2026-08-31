import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { useSharedValue, SharedValue } from "react-native-reanimated";

type HeaderContextType = {
  headerTranslateY: SharedValue<number>;
  headerHeight: SharedValue<number>;
  headerName: string
  setHeaderName: Dispatch<SetStateAction<string>>
  back: boolean,
  setBack: Dispatch<SetStateAction<boolean>>
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerName, setHeaderName] = useState("Arcadia");
  const [back, setBack] = useState(false);
  const headerTranslateY = useSharedValue(0);
  const headerHeight = useSharedValue(0);
  return (
    <HeaderContext.Provider
      value={{
        headerTranslateY,
        headerHeight,
        headerName,
        setHeaderName,
        back,
        setBack
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = ()=>{
    const context = useContext(HeaderContext);
    if(!context){
        throw new Error("useHeaderContext must be used within a HeaderProvider");
    }

    return context;
}