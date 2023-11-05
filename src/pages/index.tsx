import Head from "next/head";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nike</title>
        <meta name="description" content="Produtos e Coleções Exclusivas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    </>
  );
}
