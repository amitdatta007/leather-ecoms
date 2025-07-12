export const createCategoriesParams = (categories) => {
    const url = new URLSearchParams(window.location.search)

    if (categories?.length > 0) {
        url.set('categories', categories?.join(' '))
    } else{
        url.has('categories') && url.delete('categories');
    }
    return `${url}`
}
export const createSubCategoriesParams = (subCats) => {
    const url = new URLSearchParams(window.location.search)

    if (subCats?.length > 0) {
        url.set('sub_categories', subCats?.join(' '))
    } else{
        url.has('sub_categories') && url.delete('sub_categories');
    }
    return `${url}`
}

export const createSizesParams = (sizes) => {
    const url = new URLSearchParams(window.location.search)

    if (sizes?.length > 0) {
        url.set('sizes', sizes?.join(' '))
    } else{
        url.has('sizes') && url.delete('sizes');
    }
    return `${url}`
}

export const createSortParams = (sort) => {
    const url = new URLSearchParams(window.location.search)

    if (sort?.length > 0) {
        url.set('sort_by', sort)
    } else{
        url.has('sort_by') && url.delete('sort_by');
    }
    return `${url}`
}

export const createPriceRangeParams = (min, max) => {
    const url = new URLSearchParams(window.location.search);

    if(min) {
        url.set('min_price', min);
    } else{
        url.has('min_price') && url.delete('min_price');
    }
    if(max) {
        url.set('max_price', max);
    } else {
        url.has('max_price') && url.delete('max_price');
    }

    return `${url}`
}
