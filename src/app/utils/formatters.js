const numberFormatters = {
    ru: {
        currency: Intl.NumberFormat("ru"),
        rub: Intl.NumberFormat("ru", { currency: "RUB", style: "currency" }),
    },
};

export { numberFormatters };
