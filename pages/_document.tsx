import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <div>
        <Head>
          <title>Template</title>
          <meta name="description" content="Some description" />
        </Head>
      </div>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
