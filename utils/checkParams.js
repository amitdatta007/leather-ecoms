const checkParams = (allParams, hrefParams) => {
    return Object.keys(hrefParams).every(
        key => allParams[key] === hrefParams[key]
    );
};

export default checkParams;