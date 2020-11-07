//BI Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "Small") {
    return 1;
  } else if(this.size === "Medium") {
    return 2;
  } else if(this.size === "Large") {
    return 3;
  } else {
  alert("Choose the Size")
  }
}

Pizza.prototype.price = function(xSize, xToppings) {
  let total = xSize + xToppings;
  $("#total").html(total);
}

Pizza.prototype.toppingsPrice = function() {
  if(this.toppings.length != 0) {
    let topPrice = this.toppings.length + 1;
    return topPrice;
  } else {
    alert("Choose the Toppings")
  }
}

//UI Logic
$(document).ready(function(){
  $("form#order").submit(function(event) {
    event.preventDefault();
    $("#result").show();
    let topArray = [];
    $("input:checkbox[name=top]:checked").each(function(){
    let inputTop = $(this).val();
    $("#toppings").text(inputTop);
    topArray.push(inputTop);      // can't figure out how to list them all      
    });
    let inputName = $("#iName").val();
    let inputPhone = $("#iPhone").val();
    let inputAddress = $("#iAddress").val();
    let inputSize = $("input:radio[name=size]:checked").val();
    $("#name").text(inputName);
    $("#size").text(inputSize);
    $("#phone").text(inputPhone);
    $("#address").text(inputAddress);
    let pizza = new Pizza(inputSize, topArray);
    let sizeVal = pizza.sizePrice();
    let toppingsVal = pizza.toppingsPrice();
    pizza.price(sizeVal, toppingsVal);
  });
});



