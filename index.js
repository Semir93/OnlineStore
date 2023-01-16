   function showSection(sectionId) {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = "none";
    }
    document.getElementById(sectionId).style.display = "block";
  }
  
  function showOrderForm(event, product) {
    var orderForm = document.getElementById("order-form");
    orderForm.style.display = "block";
    document.getElementById("product-name").innerHTML = product;
    orderForm.style.left = event.clientX + 'px';
    orderForm.style.top = event.clientY + 'px';
  }
  
  function submitOrder() {
    var quantity = document.getElementById("quantity").value;
    var address = document.getElementById("address").value;
    var product = document.getElementById("product-name").innerHTML;
    console.log("Order submitted for " + quantity + " kg of " + product + " to be delivered to " + address);
   
    document.getElementById("order-form").style.display = "none";
    document.getElementById("quantity").value = "";
    document.getElementById("address").value = "";
    document.getElementById("order-confirmation").style.display = "block";
  }

  document.getElementById("close-confirmation").addEventListener("click", function(){
    document.getElementById("order-confirmation").style.display = "none";
  });

  function closeOrderForm() {
    document.getElementById("order-form").style.display = "none";
  }

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-image");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slides[slideIndex-1].style.opacity = "1";
  setTimeout(function(){ plusSlides(1); }, 3000);
}