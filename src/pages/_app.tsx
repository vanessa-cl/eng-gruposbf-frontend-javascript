import MainLayout from "@/components/layouts/MainLayout";
import GlobalStyle from "@/styles/GlobalStyle.style";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
