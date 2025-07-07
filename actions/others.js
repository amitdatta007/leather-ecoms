export const getSettings = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
};

export const getBanners = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sliders`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
};

export const getAboutUs = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about-us`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}
export const getPrivacyPolicy = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/privacy-policy`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}
export const getExchangePolicy = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/exchange-policy`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}
export const getShippingPolicy = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shipping-policy`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}
export const getTermsConditions = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/terms-conditions`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}
export const getReturnPolicy = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/return-policy`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}

export const getDeliveryArea = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/delivery-area`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}

export const getStory = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/video-story`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}

export const getWatchShop = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/video-watch`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}

export const getPromotionTimer = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/promotion-timer`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}

export const getReview = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/review`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}

export const getProfile = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getProfile/${id}`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}


export const getOrder = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/singleOrder/${id}`, {
            cache: "no-cache"
        });

        if (!res.ok) {
            throw new Error('Network Error!');
        } return await res.json();
    } catch (err) {
        return { message: 'Somthing Want wrong!' };
    }
}