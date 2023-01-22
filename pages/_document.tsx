import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'></link>
        <Script src='https://kit.fontawesome.com/fefe198549.js' crossOrigin='anonymous' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
