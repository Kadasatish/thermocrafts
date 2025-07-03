// /js/main.js
function showPaymentSuccess(dotId) {
  const dot = document.getElementById(dotId);
  dot.style.backgroundColor = 'white';
  setTimeout(() => {
    dot.style.backgroundColor = 'black';
  }, 1500);
}
