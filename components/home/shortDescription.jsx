import Link from "next/link";

const ShortDescription = () => {
    return (
        <section className=" my-10">
            <div className="wrapper flex flex-col gap-6 items-start">
                <h3 className="text-2xl font-bold text-primary">Jitben - আপনার প্রয়োজনের সবকিছু, এক প্ল্যাটফর্মে!</h3>
                <p className="text-paragraph">জীবনকে সহজ ও আরও স্টাইলিশ করতে, Jitben নিয়ে এসেছে নানা ধরনের পণ্য। এখানে রয়েছে হোম অ্যাপ্লায়েন্স যা বাড়ির কাজ সহজ করে, ফ্যাশন ও লাইফস্টাইলের পণ্য যা আপনার স্টাইলকে বাড়িয়ে তুলবে, স্বাস্থ্য ও ব্যক্তিগত যত্নের পণ্য আপনার সুরক্ষায়, গ্যাজেট ও ইলেকট্রনিক্স যা আপনার দৈনন্দিন জীবনকে আরও স্মার্ট করবে। এছাড়াও পাওয়া যাবে মনকাড়া জুয়েলারি এবং বিশেষ উপহার ও কম্বো প্যাক, যা আপনজনের জন্য আদর্শ উপহার। Jitben – সবকিছু এক ছাদের নিচে! এক নজরে আমাদের ক্যাটাগরি গুলো দেখে নিন :
                    <br /> <br />
                    #Home & Kitchen Appliance – আপনার বাড়ির জন্য আধুনিক সমাধান:
                    <br /> <br />
                    জীবনকে আরও সহজ করতে, Jitben-এ পাবেন আধুনিক হোম অ্যাপ্লায়েন্স এবং কিচেন অ্যাপ্লায়েন্স, যা প্রতিদিনের কাজগুলোকে করে তুলবে আরও দ্রুত ও কার্যকর।</p>
                <Link href='/' className="bg-primary hover:bg-primary-muted py-3.5 px-7 text-white text-sm font-semibold">SHOW MORE</Link>
            </div>
        </section>
    );
};

export default ShortDescription;