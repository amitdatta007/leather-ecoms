import { getCampaigns } from "@/actions/products";
import Campaign from "@/components/home/campaign";
import Breadcrumb from "@/components/shared/others/Breadcrumb";

const CampaignsPage = async () => {
    const campaigns = await getCampaigns();
    return (
        <main className='mt-[72px] lg:mt-[150px] bg-[#FFFCF4] pb-10'>
            <Breadcrumb title='CAMPAIGNS' />
            <div className="flex flex-col gap-10">
                {
                    campaigns?.data?.map((campaign, i) => (
                        <Campaign key={i} campaign={campaign} />
                    ))
                }
            </div>
        </main>
    );
};

export default CampaignsPage;