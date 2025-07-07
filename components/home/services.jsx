import Image from "next/image";
import serviceLogo1 from "@/assets/services/fast_delivery.png";
import serviceLogo2 from "@/assets/services/secure_payment.png";
import serviceLogo4 from "@/assets/services/auth_product.png";
import serviceLogo6 from "@/assets/services/return.png";
import Link from "next/link";

const Services = () => {
    return (
        <section className="wrapper grid grid-cols-2 md:grid-cols-4 py-6">
            <Link href='/' className="flex flex-col justify-center items-center gap-3 p-2">
                <Image className="w-20 md:w-24" alt="" src={serviceLogo1} />
                <p className="md:text-lg font-semibold text-center">Fast Delivery</p>
            </Link>
            <Link href='/' className="flex flex-col justify-center items-center gap-3 p-2">
                <Image className="w-20 md:w-24" alt="" src={serviceLogo2} />
                <p className="md:text-lg font-semibold text-center">Secure Payment</p>
            </Link>
            
            <Link href='/' className="flex flex-col justify-center items-center gap-3 p-2">
                <Image className="w-20 md:w-24" alt="" src={serviceLogo4} />
                <p className="md:text-lg font-semibold text-center">Authentic Product</p>
            </Link>
            <Link href='/' className="flex flex-col justify-center items-center gap-3 p-2">
                <Image className="w-20 md:w-24" alt="" src={serviceLogo6} />
                <p className="md:text-lg font-semibold text-center">Easy Return Policy</p>
            </Link>
        </section>
    );
};

export default Services;