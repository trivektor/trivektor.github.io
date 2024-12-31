import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KFCSC6FMS3"
      ></Script>
      <Script>
        window.dataLayer = window.dataLayer || []; function gtag(){" "}
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-KFCSC6FMS3');
      </Script>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
