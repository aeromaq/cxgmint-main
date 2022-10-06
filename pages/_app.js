import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";


function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>

  <Component {...pageProps} />
  </ThirdwebProvider>
  )
}

export default MyApp
