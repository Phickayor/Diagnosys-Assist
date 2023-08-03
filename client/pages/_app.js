import "@/styles/globals.css";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import { ToastContainer } from "react-toastify";
config.autoAddCss = false;
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} /> <ToastContainer />
    </>
  );
}
