function calculateTicketsPrice(tickets, children, regularPrice)
{
    if (tickets < 0 || children < 0 || regularPrice < 0) {
        return false;
    }

    var totalPrice = tickets * regularPrice;

    if (children > 0) {
        var discount = 0.5 * regularPrice * children;
        var priceWithDiscount = totalPrice - discount;
        return {
            totalPrice: priceWithDiscount,
            discount: discount
        }
    }
    return {
        totalPrice: totalPrice
    }
}
module.exports = {
    calculateTicketsPrice: calculateTicketsPrice
};
