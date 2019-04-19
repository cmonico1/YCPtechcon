$(document).ready(function(){
  $("#pass_1").click(function(){
    $("#add_item_checkout").after('<tr id="add_item_checkout"> <td class="checkout_table_left_column">1 Day Pass</td> <td class="checkout_table_center_column">$899</td> <td class="checkout_table_right_column"> <button class="remove_item">Remove</button></td> </tr>');
  });
  
});
