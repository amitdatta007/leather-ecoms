import { cn } from "@/utils/utils";
import { Check, ChevronRight, PackageCheck, Truck } from "lucide-react";

const TrackOrder = ({ data }) => {
    return (
        <section className="wrapper py-8 pb-32">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-4">
                    <p className="font-bold text-xl md:text-2xl">Order Details <span className="text-xl">#{data?.tracking_id}</span></p>
                </div>
                <p className="text-sm text-muted">
                    {
                        (new Date(data?.created_at)).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })
                    }
                </p>
            </div>
            <div className="w-fit lg:w-full lg:mx-auto flex flex-col lg:flex-row lg:items-center mt-6">
                <div
                    className={cn(
                        'w-16 h-16 rounded-full bg-border relative grid place-items-center',
                        data?.status >= 0 && 'bg-success  ring ring-success ring-offset-2 text-white'
                    )}
                >
                    {
                        data?.status > 0 ? <Check strokeWidth={1.5} className="w-10 h-10" /> : <PackageCheck strokeWidth={1.5} className="w-10 h-10" />
                    }
                    <div className="absolute w-fit h-full text-nowrap flex flex-col lg:items-start top-4 lg:top-20 left-[85px] lg:left-0">
                        <p className="text-xl font-semibold uppercase text-black">Order Confirmed</p>
                    </div>
                </div>
                <div className={cn(
                    "lg:flex-1 w-0.5 lg:w-auto h-20 lg:h-0.5 self-center",
                    data?.status > 0 ? 'bg-success' : 'bg-border'
                )} />

                <div
                    className={cn(
                        'w-16 h-16 rounded-full bg-border relative grid place-items-center',
                        data?.status >= 1 && 'bg-success  ring ring-success ring-offset-2 text-white'
                    )}
                >
                    {
                        data?.status > 1 ? <Check strokeWidth={1.5} className="w-10 h-10" /> : <PackageCheck strokeWidth={1.5} className="w-10 h-10" />
                    }
                    <div className="absolute w-fit h-full text-nowrap flex flex-col lg:items-center top-4 lg:top-20 left-[85px] lg:left-1/2 lg:-translate-x-1/2">
                        <p className="text-xl font-semibold uppercase text-black">Order Confirmed</p>
                    </div>
                </div>
                <div className={cn(
                    "lg:flex-1 w-0.5 lg:w-auto h-20 lg:h-0.5 self-center",
                    data?.status > 1 ? 'bg-success' : 'bg-border'
                )} />

                <div
                    className={cn(
                        'w-16 h-16 rounded-full bg-border relative grid place-items-center',
                        data?.status >= 2 && 'bg-success  ring ring-success ring-offset-2 text-white'
                    )}
                >
                    {
                        data?.status > 2 ? <Check strokeWidth={1.5} className="w-10 h-10" /> : <PackageCheck strokeWidth={1.5} className="w-10 h-10" />
                    }
                    <div className="absolute w-fit h-full text-nowrap flex flex-col lg:items-center top-4 lg:top-20 left-[85px] lg:left-1/2 lg:-translate-x-1/2">
                        <p className="text-xl font-semibold uppercase text-black">Order Confirmed</p>
                    </div>
                </div>
                


            </div>

        </section>
    );
};

export default TrackOrder;