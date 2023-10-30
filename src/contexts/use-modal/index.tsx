import { createContext, ReactNode, useContext, useState } from "react";

interface IModalParams {
  isOpen: boolean;
  data: any;
}

interface IModalContextData {
  params: IModalParams;
  handleParams: (params: IModalParams) => void;
}

interface IModalProvider {
  children: ReactNode;
}

const ModalContext = createContext<IModalContextData>({} as IModalContextData);

function ModalProvider({ children }: IModalProvider) {
  const [params, setParams] = useState<IModalParams>({
    ...{ isOpen: false },
  } as unknown as IModalParams);

  function handleParams(data: any) {
    setParams(data);
  }

  return (
    <ModalContext.Provider
      value={{
        params,
        handleParams,
      }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModalParams() {
  return useContext(ModalContext);
}

export { ModalProvider, useModalParams };
