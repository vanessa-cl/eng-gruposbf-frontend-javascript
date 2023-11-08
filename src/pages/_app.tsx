import MainLayout from "@/components/layouts/MainLayout";
import MapWrapperProvider from "@/context/MapWrapperContext";
import GlobalStyle from "@/styles/GlobalStyle.style";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <MapWrapperProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MapWrapperProvider>
    </>
  );
}
