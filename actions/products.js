"use server"

export const getProducts = async (searchParams) => {
    try {
        const queryString = new URLSearchParams(
            Object.entries(searchParams).reduce((acc, [key, value]) => {
                acc[key] = Array.isArray(value) ? value.join(' ') : value;
                return acc;
            }, {})
        ).toString();

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?${queryString}`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
};

export const getProductBySlug = async (slug) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}

export const getCategories = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}

export const getBrands = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brands`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}

export const makeOrder = async (data) => {



    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}

export const getFirstCampaign = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/first-campaign`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}

export const getLastCampaign = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/last-campaign`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}

export const getHighlightProduct = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/week`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}

export const getFirstCampaignProduct = async (slug) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/first-campaign?slug=${slug}`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}
export const getLastCampaignProduct = async (slug) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/last-campaign?slug=${slug}`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}

export const getCouponCampaign = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/coupon-campaign`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}
export const getCouponCampaignProducts = async (slug) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/coupon-campaign?slug=${slug}`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}

export const searchProduct = async (searchParams) => {
    try {
        const queryString = new URLSearchParams(
            Object.entries(searchParams).reduce((acc, [key, value]) => {
                acc[key] = Array.isArray(value) ? value.join(' ') : value;
                return acc;
            }, {})
        ).toString();

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?${queryString}`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}

export const getOrderInfo = async(trackId) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/${trackId}`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}