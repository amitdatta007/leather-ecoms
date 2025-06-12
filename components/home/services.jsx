import Image from "next/image";
import serviceLogo1 from "@/assets/services/fast_delivery.png";
import serviceLogo2 from "@/assets/services/secure_payment.png";
import serviceLogo3 from "@/assets/services/emi.png";
import serviceLogo4 from "@/assets/services/auth_product.png";
import serviceLogo5 from "@/assets/services/official.png";
import serviceLogo6 from "@/assets/services/return.png";
import Link from "next/link";

const Services = () => {
    return (
        <section className="wrapper grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            <Link href='/' className="flex flex-col justify-center items-center gap-3 p-2">
                <Image className="w-20 md:w-24" alt="" src={serviceLogo1} />
                <p className="md:text-lg font-semibold text-center">Fast Delivery</p>
            </Link>
            <Link href='/' className="flex flex-col justify-center items-center gap-3 p-2">
                <Image className="w-20 md:w-24" alt="" src={serviceLogo2} />
                <p className="md:text-lg font-semibold text-center">Secure Payment</p>
            </Link>
            <Link href='/' className="flex flex-col justify-center items-center gap-3 p-2">
                <Image className="w-20 md:w-24" alt="" src={serviceLogo3} />
                <p className="md:text-lg font-semibold text-center">EMI (Up to 36 Months)</p>
            </Link>
            <Link href='/' className="flex flex-col justify-center items-center gap-3 p-2">
                <Image className="w-20 md:w-24" alt="" src={serviceLogo4} />
                <p className="md:text-lg font-semibold text-center">Authentic Product</p>
            </Link>
            <Link href='/' className="flex flex-col justify-center items-center gap-3 p-2">
                <Image className="w-20 md:w-24" alt="" src={serviceLogo5} />
                <p className="md:text-lg font-semibold text-center">Official Warranty</p>
            </Link>
            <Link href='/' className="flex flex-col justify-center items-center gap-3 p-2">
                <Image className="w-20 md:w-24" alt="" src={serviceLogo6} />
                <p className="md:text-lg font-semibold text-center">Easy Return Policy</p>
            </Link>
        </section>
    );
};

export default Services;