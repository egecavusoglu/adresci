import "../styles/globals.css";
import { ToastProvider } from "react-toast-notifications";

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider placement="top-center">
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
