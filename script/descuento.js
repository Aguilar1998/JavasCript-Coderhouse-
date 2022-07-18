

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeDelPrecioConDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100
    
    return precioConDescuento
}

function calculos() {
    const price = document.getElementById('inputPrice')
    const priceValue = price.value

    const discount = document.getElementById('inputDiscount')
    const discountValue = discount.value

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)
    
    const result = document.getElementById('printDescount')
    result.innerText = 'El precio con descuento son: $' + precioConDescuento

}
