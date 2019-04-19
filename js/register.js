$(document).ready(function(){
  $("#pass_1").click(function(){
    $("#add_item_checkout").after('<tr id="add_item_checkout"> <td class="checkout_table_left_column">1 Day Pass</td> <td class="checkout_table_center_column">$899</td> <td class="checkout_table_right_column"> <button class="remove_item">Remove</button></td> </tr>');
  });
  $("#pass_2").click(function(){
    $("#add_item_checkout").after('<tr id="add_item_checkout"> <td class="checkout_table_left_column">2 Day Pass</td> <td class="checkout_table_center_column">$1099</td> <td class="checkout_table_right_column"> <button class="remove_item">Remove</button></td> </tr>');
  });
  $("#pass_3").click(function(){
    $("#add_item_checkout").after('<tr id="add_item_checkout"> <td class="checkout_table_left_column">3 Day Pass</td> <td class="checkout_table_center_column">$1299</td> <td class="checkout_table_right_column"> <button class="remove_item">Remove</button></td> </tr>');
  });
  $("#pass_3w_button").click(function(){
    $("#add_item_checkout").after('<tr id="add_item_checkout"> <td class="checkout_table_left_column">3 Day Pass + Workshops</td> <td class="checkout_table_center_column">$1499</td> <td class="checkout_table_right_column"> <button class="remove_item">Remove</button></td> </tr>');
  });
  $("#student_pass").click(function(){
    $("#add_item_checkout").after('<tr id="add_item_checkout"> <td class="checkout_table_left_column">Student Pass</td> <td class="checkout_table_center_column">$300/Day</td> <td class="checkout_table_right_column"> <button class="remove_item">Remove</button></td> </tr>');
  });


  $(".remove_item").click(function(){
    (".checkout_item").remove();
  });

  $(".remove_all").click(function(){
    ("#add_item_checkout").remove();
  });
});
