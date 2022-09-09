export const formatPrice = (price) => {
    const newNum = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(price / 100);
    return newNum;
};

export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => {
        return item[type];
    });
    if (type === "colors") {
        unique = unique.flat();
    }
    return ["all", ...new Set(unique)];
};
