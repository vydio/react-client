import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { Provider } from "next-auth/client";
import { SWRConfig } from "swr";
import { useIPFSNode, IPFSContext } from "@gatsby-tv/utilities";
import { AppProvider } from "@gatsby-tv/components";
import { fetcher } from "@gatsby-tv/next";
import "react-image-crop/dist/ReactCrop.css";

import { AppLayout } from "@src/components/AppLayout";

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  const node = useIPFSNode();

  const HeaderMarkup = (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="preconnect" href="http://localhost:6001" />
      <link rel="stylesheet" type="text/css" href="/fonts.css" />
      <link
        rel="preload"
        href="/fonts/Inter.var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Head>
  );

  return (
    <AppProvider theme="dark">
      <Provider session={pageProps.session}>
        <SWRConfig value={{ fetcher }}>
          <IPFSContext.Provider value={node}>
            {HeaderMarkup}
            <AppLayout page={Component} $props={pageProps} />
          </IPFSContext.Provider>
        </SWRConfig>
      </Provider>
    </AppProvider>
  );
}