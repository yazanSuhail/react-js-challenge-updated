import { createContext, SetStateAction, useContext, useState } from "react";
import {
  IAlertMessageContextData,
  IAlertMessageProvider,
  IMessageAlertProps,
} from "../../interfaces/IAlertStatusProps";

const MessageAlertContext = createContext<IAlertMessageContextData>(
  {} as IAlertMessageContextData
);

function MessagAlertProvider({ children }: IAlertMessageProvider) {
  const [params, setParams] = useState<IMessageAlertProps>(
    {} as unknown as IMessageAlertProps
  );

  function handleParams(data: SetStateAction<IMessageAlertProps>) {
    setParams(data);
  }

  return (
    <MessageAlertContext.Provider
      value={{
        params,
        handleParams,
      }}>
      {children}
    </MessageAlertContext.Provider>
  );
}

function useMessageAlertStatus() {
  return useContext(MessageAlertContext);
}

export { MessagAlertProvider, useMessageAlertStatus };
