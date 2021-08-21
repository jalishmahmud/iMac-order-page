// get current cost 
function getCurrentCost(costId) {
    const cost = document.getElementById(costId);
    return cost;
};
const extraMemoryCost = getCurrentCost('extra-memory');
const extraStorageCost = getCurrentCost('extra-storage');
const deliveryCharge = getCurrentCost('delivery-charge');
const totalPrice = getCurrentCost('total-price');
const gtandTotal = getCurrentCost('grand-total');

// calculate total price
function getTotalPrice() {
    const basePrice = parseInt(document.getElementById('base-price').innerText);
    const memoryCost = parseInt(extraMemoryCost.innerText);
    const storageCost = parseInt(extraStorageCost.innerText);
    const deliveryCost = parseInt(deliveryCharge.innerText);
    const totalCost = basePrice + memoryCost + storageCost + deliveryCost;
    totalPrice.innerText = totalCost;
    gtandTotal.innerText = totalCost;
};

// event handeler fucntion
function eventHandeler(option, price, setPrice) {
    document.getElementById(option).addEventListener('click', function () {
        setPrice.innerText = price;
        getTotalPrice();
    });
};
//memory
eventHandeler('memory-8gb', '0', extraMemoryCost);
eventHandeler('memory-16gb', '180', extraMemoryCost);
//storage
eventHandeler('storage-256gb', '0', extraStorageCost);
eventHandeler('storage-512gb', '100', extraStorageCost);
eventHandeler('storage-1tb', '180', extraStorageCost);
//delevery
eventHandeler('free-delivery', '0', deliveryCharge);
eventHandeler('express-delivery', '20', deliveryCharge);

// promo code apply function
function applyPromo() {
    const promoCode = document.getElementById('promo-code');
    if (promoCode.value == 'stevekaku') {
        const grandTotalAmount = parseInt(gtandTotal.innerText);
        const grandTotalAfterPromo = grandTotalAmount / 100 * 80;
        gtandTotal.innerText = grandTotalAfterPromo;
        promoCode.value = '';
    }
    else {
        promoCode.value = '';
    }
};
// pormo button event handeler
document.getElementById('promo-button').addEventListener('click', function () {
    applyPromo();
});