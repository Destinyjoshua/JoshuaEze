"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}

export default function TwitterWidgets() {
  useEffect(() => {
    if (window.twttr?.widgets) {
      window.twttr.widgets.load();
    }
  });

  return (
    <Script
      src="https://platform.twitter.com/widgets.js"
      strategy="lazyOnload"
      onLoad={() => {
        window.twttr?.widgets.load();
      }}
    />
  );
}