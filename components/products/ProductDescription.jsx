'use client'

import { cn } from "@/utils/utils";
import { useState } from "react";

const ProductDescription = ({ product }) => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="mt-10 border-t">
            <div className='wrapper'>
                <div className="flex items-center justify-center flex-wrap gap-6">
                    <button
                        onClick={() => setTabIndex(0)}
                        className={cn(
                            "pt-4 uppercase font-semibold border-t-2 border-transparent animate text-text-muted-50",
                            tabIndex === 0 && "border-primary text-text-primary "
                        )}
                    >
                        Description
                    </button>
                    <button
                        onClick={() => setTabIndex(1)}
                        className={cn(
                            "pt-4 uppercase font-semibold border-t-2 border-transparent animate text-text-muted-50",
                            tabIndex === 1 && " border-primary text-text-primary"
                        )}
                    >
                        Reviews ({ product?.review?.length })
                    </button>
                    <button
                        onClick={() => setTabIndex(2)}
                        className={cn(
                            "pt-4 uppercase font-semibold border-t-2 border-transparent animate text-text-muted-50",
                            tabIndex === 2 && "border-primary text-text-primary "
                        )}
                    >
                        Shipping & Delivery
                    </button>
                </div>

                <div className="mt-10">
                    <div className={cn(tabIndex === 0 ? 'flex' : 'hidden')}>
                        <div dangerouslySetInnerHTML={{ __html: product?.description }}></div>
                    </div>
                    <div className={cn(tabIndex === 1 ? 'flex' : 'hidden')}>2</div>
                    <div className={cn(tabIndex === 2 ? 'flex' : 'hidden')}>3</div>

                </div>
            </div>
        </section>
    );
};

export default ProductDescription;