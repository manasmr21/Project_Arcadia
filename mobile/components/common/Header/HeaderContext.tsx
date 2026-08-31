import { createContext, useContext, useState } from "react";
import { useSharedValue, SharedValue } from "react-native-reanimated";

type HeaderContextType = {
  headerTranslateY: SharedValue<number>;
  headerHeight: SharedValue<number>;
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const headerTranslateY = useSharedValue(0);
  const headerHeight = useSharedValue(0);

  return (
    <HeaderContext.Provider
      value={{
        headerTranslateY,
        headerHeight,
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