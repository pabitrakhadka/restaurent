import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Roboto:wght@400;500&family=Style+Script&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <script type="module" src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/waveform.js" async></script>
        <script src="https://kit.fontawesome.com/17ad245e47.js" crossOrigin="anonymous" async></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
