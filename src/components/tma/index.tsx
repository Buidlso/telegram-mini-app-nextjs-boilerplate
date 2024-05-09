'use client'

import { PropsWithChildren } from "react";
import { DisplayGate, SDKProvider } from '@tma.js/sdk-react';
import { TmaProviderError } from "./tma-provider-error";
import { TmaProviderLoading } from "./tma-provider-loading";
import { TmaProviderInitialState } from "./tma-provider-initial-state";

export function TmaSDKProvider({ children }: PropsWithChildren) {
  return (
    <SDKProvider
      options={{ cssVars: true,
         acceptCustomStyles: true,
          async: true
         }}
    >
      <DisplayGate
        error={TmaProviderError}
        loading={TmaProviderLoading}
        initial={TmaProviderInitialState}
      >
        {children}
      </DisplayGate>
    </SDKProvider>
  );
}
