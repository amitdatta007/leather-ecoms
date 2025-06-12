const getImageUrl = (url) => {
    const fullImageUrl = url?.startsWith('https')
        ? url
        : `${process.env.NEXT_PUBLIC_SERVER_URL}/${url}`;

    return fullImageUrl;
}

export default getImageUrl;