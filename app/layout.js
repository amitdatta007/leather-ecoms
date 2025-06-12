import { Public_Sans } from "next/font/google";
import "./globals.css";
import "./a.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './range.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import 'react-toastify/dist/ReactToastify.css';
import Providers from "@/components/providers/Providers";
import { cn } from "@/utils/utils";
import { Bounce, ToastContainer } from "react-toastify";
import { getSettings } from "@/actions/others";

const workSans = Public_Sans({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800', '900'] });

export async function generateMetadata() {
  const settings = await getSettings();

  return {
      title: `${settings?.data?.meta_title}`,
      description: settings?.data?.meta_description,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(workSans.className, 'pb-[60px] md:pb-0')}>
        <Providers>
          {children}
        </Providers>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          limit={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}