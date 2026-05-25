function createPayment(price,invoice){

  const paymentUrl =
  `https://app.pakasir.com/pay/siwomarket/${price}?order_id=${invoice}`;

  window.location.href = paymentUrl;
}