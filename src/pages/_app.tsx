import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";

import { api } from "npm/utils/api";

import "npm/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
  <ClerkProvider {...pageProps}>
    <Component {...pageProps} />;
  </ClerkProvider>
  )
};

export default api.withTRPC(MyApp);
