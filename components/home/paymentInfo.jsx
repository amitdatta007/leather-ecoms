import Image from "next/image";
import pay from '@/assets/pay.webp';
import paymob from "@/assets/paymob.webp";

const PaymentInfo = () => {
    return (
        <section className="my-10">
            <Image src={pay} alt="" className="hidden md:block w-full" />
            <Image src={paymob} alt="" className="md:hidden w-full" />
        </section>
    );
};

export default PaymentInfo;