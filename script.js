function showOffer() {
  const offerText = document.getElementById('offerText');
  offerText.innerText = "🎉 20% off on all pizzas today!";
}

function reserve(event) {
  event.preventDefault(); // prevent form refresh
  document.getElementById('confirm').innerText = "✅ Reservation Confirmed!";
}
// Show message when page loads
window.onload = function () {
  console.log("Restaurant features loaded successfully!");
};
