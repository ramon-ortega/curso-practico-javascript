function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;

    return precioConDescuento;
}

function onButtonToCalculateDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const finalPrice = calcularPrecioConDescuento(priceValue, discountValue);

    const pricePrint = document.getElementById("finalPrice");
    pricePrint.innerText = `El precio con descuento es: $${finalPrice}`;
}