function Pizza(size, toppings, ) {
  this.size = size;
  this.toppings = toppings;
}





//BI LOGIC
$(document).ready(function(){
  $("form#order").submit(function(event) {
    event.preventDefault();
    $("#result").show();
    let topArray = [];
    
    $("input:checkbox[name=top]:checked").each(function(){
    let inputTop = $(this).val();
    topArray.push(inputTop);
    $("#toppings").text(inputTop);
    });

    let inputName = $("#sfirstName").val();
    let inputSize = $("input:radio[name=size]:checked").val();
    $("#name").text(inputName);
    $("#size").text(inputSize);
  });
});