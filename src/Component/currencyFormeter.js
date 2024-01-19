export const formetCurrency = (value, currencyFormet, installmentMonth) => {
    let priceValue=value;
    if (installmentMonth && installmentMonth!=0) {
        priceValue=priceValue/installmentMonth;
    }
    const price=new Intl.NumberFormat('en-US', {style:'currency', currency:currencyFormet}).format(priceValue,);
    return price
}
