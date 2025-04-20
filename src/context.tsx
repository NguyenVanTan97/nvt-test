import React, { createContext, useContext, useState } from "react";

const context = createContext<{
  isOpenNavMobile: boolean;
  setIsOpenNavMobile: (val: boolean) => void;
}>({} as any);

export function ActionProvider(props: React.PropsWithChildren) {
  const [isOpenNavMobile, setIsOpenNavMobile] = useState<boolean>(false);

  return (
    <context.Provider
      value={{
        isOpenNavMobile,
        setIsOpenNavMobile,
      }}
    >
      {props.children}
    </context.Provider>
  );
}

export function useActionProvider() {
  return useContext(context);
}
