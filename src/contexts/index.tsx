import { ReactNode } from "react";

import { ModalProvider } from "./use-modal";
import { MessagAlertProvider } from "./use-alertMessageStatus";

interface IAppProvider {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProvider) => (
  <MessagAlertProvider>
    <ModalProvider>{children}</ModalProvider>
  </MessagAlertProvider>
);

export { AppProvider };
