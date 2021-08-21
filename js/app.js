// memory
const extraMemoryCost = document.getElementById('extra-memory');
//storage
const extraStorageCost = document.getElementById('extra-storage');
// delivery charge
const deliveryCharge = document.getElementById('delivery-charge');
// total price
const totalPrice = document.getElementById('total-price');
// grand total price 
const gtandTotal = document.getElementById('grand-total');

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

// promo code apply
function applyPromo() {
    const promoCode = document.getElementById('promo-code');
    if (promoCode.value == 'stevekaku') {
        const grandTotalAmount = parseInt(gtandTotal.innerText);
        const grandTotalAfterPromo = grandTotalAmount / 100 * 80;
        gtandTotal.innerText = grandTotalAfterPromo;
        promoCode.value = '';
    };
};

// memory event handeler
document.getElementById('memory-8gb').addEventListener('click', function () {
    extraMemoryCost.innerText = '0';
    getTotalPrice();
});
document.getElementById('memory-16gb').addEventListener('click', function () {
    extraMemoryCost.innerText = '180';
    getTotalPrice();
});

// storage event handeler
document.getElementById('storage-256gb').addEventListener('click', function () {
    extraStorageCost.innerText = '0';
    getTotalPrice();
});
document.getElementById('storage-512gb').addEventListener('click', function () {
    extraStorageCost.innerText = '100';
    getTotalPrice();
});
document.getElementById('storage-1tb').addEventListener('click', function () {
    extraStorageCost.innerText = '180';
    getTotalPrice();
});

// delivery event handeler
document.getElementById('free-delivery').addEventListener('click', function () {
    deliveryCharge.innerText = '0';
    getTotalPrice();
});
document.getElementById('express-delivery').addEventListener('click', function () {
    deliveryCharge.innerText = '20';
    getTotalPrice();
});

// pormo button handeler
document.getElementById('promo-button').addEventListener('click', function () {
    applyPromo();
});