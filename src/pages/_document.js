// import Document, { Html, Head, Main, NextScript } from "next/document";

// class MyDocument extends Document {
//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           {/* Fonts */}
//           <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
//           <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Roboto:wght@400;500&family=Style+Script&display=swap" rel="stylesheet" />
//         </Head>
//         <body>
//           {/* <script
//             src="https://kit.fontawesome.com/17ad245e47.js"
//             crossOrigin="anonymous"
//           ></script>
//           {/* Scripts for esewa payment */}
//           {/* <script
//             src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js"
//           ></script>
//           <script
//             src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/hmac-sha256.min.js"
//           ></script>
//           <script
//             src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/enc-base64.min.js"
//           ></script> */}
//           {/* Tailwind CSS */}
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      {/* spinner */}
      <script type="module" src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/waveform.js"></script>



      {/* bootstrap css  */}

      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Roboto:wght@400;500&family=Style+Script&display=swap" rel="stylesheet" />
      <body>
        <script
          src="https://kit.fontawesome.com/17ad245e47.js"
          crossOrigin="anonymous"
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
