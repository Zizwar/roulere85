/** @jsx h */
/** @jsxFrag Fragment */
import { h } from "preact";
import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

import seo from "../utils/seo.json" assert { type: "json" };

export default function App({ Component }: AppProps) {
  return (
    <div>
      <html
        data-wf-page="5e99e50e1c66a9720b7ceb38"
        data-wf-site="5e2d678660dc1a91f8ef1b43"
      >
        <Head>
          <meta  charset="utf-8" />
          <title>{seo.title}</title>
          <meta
            content={seo.description}
            name="description"
          />
          <meta content={seo.title} property="og:title" />
          <meta
            content={seo.description}
            property="og:description"
          />
          <meta
            content="http://drive.google.com/uc?export=view&amp;id=1A3w-CeEMQgr1Tvk6RG8-RAgnAR3TEjqf"
            property="og:image"
          />
          <meta content="summary" name="twitter:card" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content={seo.title} name="generator" />
          <link href="css/normalize.css" rel="stylesheet" type="text/css" />
          <link href="css/webflow.css" rel="stylesheet" type="text/css" />
          <link href="css/mntn.webflow.css" rel="stylesheet" type="text/css" />

          <link
            href="images/favicon.png"
            rel="shortcut icon"
            type="image/x-icon"
          />
          <link href="images/webclip.png" rel="apple-touch-icon" />
          <meta name="theme-color" content="#0B1D26" />
        </Head>
        <Component />
      </html>
    </div>
  );
}
