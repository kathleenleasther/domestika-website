function addToCart(id) {
  // Get the artwork details
  var artwork = document.getElementById("artwork" + id).getAttribute("src");
  var title = document.getElementById("title" + id).innerHTML;
  var price = document.getElementById("price" + id).innerHTML;

  // Get the cart from local storage or create a new one
  var cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add the selected item to the cart
  cart["item" + id] = {
    artwork: artwork,
    title: title,
    price: price
  };

  // Store the updated cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Redirect to cart.html
  window.location.href = "cart.html";
}
