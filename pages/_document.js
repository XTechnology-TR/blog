import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
 static async getInitialProps(ctx) {
  const initialProps = await Document.getInitialProps(ctx);
  return {
   ...initialProps,
   // Anything returned here can be used by the client
   unstable_referrer: ctx.req.headers.referrer,
  };
 }
 render() {
  return (
   <Html lang="tr">
    <Head />
    <body>
     <Main />
     <NextScript />
    </body>
   </Html>
  );
 }
}
