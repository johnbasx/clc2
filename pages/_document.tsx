import { Html, Head, Main, NextScript } from "next/document";
import { NextSeo } from "next-seo";

export default function Document() {
  return (
    <Html
      lang='en'
      // className='from-black to-purple-900 via-zinc-900 bg-gradient-to-br'
      className='antialiased bg-black '
    >
      <Head />
      <body className='from-black to-purple-900 via-zinc-900 bg-gradient-to-br'>
        <Main />
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
