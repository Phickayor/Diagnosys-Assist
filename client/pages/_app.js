import "@/styles/globals.css";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import { ToastContainer } from "react-toastify";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: ["400","500","600","700"], subsets: ["latin"] });
config.autoAddCss = false;
export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={`flex ${poppins.className}`}>
        <div className="fixed opacity-30 right-0 bg-green-500 h-56 lg:h-72 backdrop blur-lg w-56 lg:w-72 -z-10 rounded-full"></div>
        <div className="fixed opacity-30  bottom-0 bg-green-500 h-56 lg:h-72 backdrop blur-lg w-56 lg:w-72 -z-10 rounded-full"></div>
      </div>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
