import "../styles/globals.css";

//INTERNAL IMPORT
import { NavBar } from "../components/index";
import { SwapTokenContextProvider } from "../components/Context/SwapContext";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <SwapTokenContextProvider>
      <NavBar />
      <Component {...pageProps} />
    </SwapTokenContextProvider>
  </div>
);
export default MyApp;
