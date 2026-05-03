export const WHATSAPP_NUMBER = "2348000000000"; // Replace with real number

export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_ORDER_TEMPLATE = `Hello Vinsom Concepts, I'm interested in your light fittings.

Product Name:
Quantity:
Location:

Please provide more details. Thank you.`;

export function productOrderMessage(productName) {
  return `Hello Vinsom Concepts, I'm interested in the *${productName}*.

Quantity:
Location:

Please share the price and delivery details. Thank you.`;
}
