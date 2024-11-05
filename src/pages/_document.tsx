import { Html, Head, Main, NextScript } from "next/document";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Scoring App",
  description: "Scoring App",
};
export default function Document() {
  return (
    <Html lang="en">
      <title>Scoring App</title>
      {/* <link rel="icon" href="/img/favicon/black/favicon.ico" sizes="48x48" />
      <link rel="apple-touch-icon" href="/img/favicon/black/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/img/favicon/black/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/img/favicon/black/android-chrome-512x512.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/black/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/black/favicon-16x16.png" />

      <link rel="manifest" href="img/favicon/site.webmanifest" /> */}
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        />

        <meta name="title" content="Next Generation Solutions for Cricket Scoring" />
        <meta name="description" content="Next Generation Solutions for Cricket Scoring" />
        <meta name="keywords" content="Next Generation Solutions for Cricket Scoring" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
