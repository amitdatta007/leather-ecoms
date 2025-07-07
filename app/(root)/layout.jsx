import PaymentInfo from "@/components/home/paymentInfo";
import PoliciesOverview from "@/components/home/policiesOverview";
import ShortDescription from "@/components/home/shortDescription";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { getCategories } from "@/actions/products";
import { getSettings } from "@/actions/others";
import { auth } from "@/lib/auth";
import AuthProvider from "@/components/providers/AuthProvider";
import { SessionProvider } from 'next-auth/react'

const PublicLayout = async ({ children }) => {
    const [categories, settings] = await Promise.all([
        getCategories(),
        getSettings(),
    ]);

    const session = await auth();




    return (
        <AuthProvider session={session}>
            <SessionProvider session={session}>
                <Navbar categories={categories?.data} settings={settings?.data} />
                {children}
                <PoliciesOverview />
                <PaymentInfo />
                {/* <ShortDescription /> */}
                <Footer settings={settings?.data} />
            </SessionProvider>
        </AuthProvider>
    );
};

export default PublicLayout;