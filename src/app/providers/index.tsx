import { Session } from "next-auth";

import AuthProvider from "./AuthProvider";
import TRPCProvider from "./TRPCProvider";
// import ThemeProviders from "./ThemeProviders";

type Props = {
  children: React.ReactNode;
  serverSession: Session | null;
};

function ProvidersWrapper({ children, serverSession }: Props) {
  return (
    <>
      <AuthProvider serverSession={serverSession}>
        {/* <ThemeProviders> */}
        <TRPCProvider>{children}</TRPCProvider>
        {/* </ThemeProviders> */}
      </AuthProvider>
    </>
  );
}

export default ProvidersWrapper;
