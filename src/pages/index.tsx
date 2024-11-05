import Head from "next/head";
import Scoring from "./scoring";

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>
          Next Generation Solutions for Cricket Scoring
        </title>
        <meta
          name="title"
          content="Next Generation Solutions for Cricket Scoring"
        />
        <meta
          name="description"
          content="Next Generation Solutions for Cricket Scoring"
        />
        <meta
          name="keywords"
          content="Next Generation Solutions for Cricket Scoring"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>

      <div className="flex h-screen w-full">
        <div className="w-1/2 bg-slate-300">
          <Scoring />
        </div>
        <div className="w-1/2 bg-gray-400"></div>
      </div>

    </div>
  );
}
