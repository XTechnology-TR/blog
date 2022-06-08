import Document, { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
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
    )
  }
}
