// Client facing scripts here
// const dishes = require('../../../routes/dishes');
// console.log('here', dishes);
// const dishes = require("../../routes/dishes");

$(document).ready( function() {
  // handle click on cart-icon to go to the orders page
  $(".cart-icon").click(e => {
    window.location.href='/api/cart';
  });

  $(".place-order").click(e => {

    window.location.href='/api/orders';
  });



  // handle order button click
  $(".order-button").click(e => {
    e.preventDefault();
    const id = $(e.target).attr('value');
    console.log('id: ', id);
    // $(".added-to-cart").addClass(id)  //.show();
    // $(`#${id}`).show()
    // $(".order-button").addClass(id);
    // $(`.${id}`).add('.added-to-cart').show()
   // $(".order-button").addClass(id);
  //  console.log('this', $(this).val());
  //   console.log('val', ($(".order-button").val()));
  //   if ($(".order-button").val() === id) {
  //     $(".added-to-cart").show();
  //   };



    $.ajax({
      url: "/api/dishes",
      method: "POST",
      data: {
        id: $(e.target).attr('value')
      },
      // sucess: () => {
      //   // console.log($(this).val());
      //   console.log('button clicked!');
      // }
    });


  });


  //////test
  $(".place-order").click(e => {
    e.preventDefault();
    console.log('im in the click handler');
    console.log($(e.target).attr('value'));
    $.ajax({
      url: "/api/orders",
      method: "POST",
      data: {
        id: $(e.target).attr('value')
      },
      // sucess: () => {
      //   // console.log($(this).val());
      //   console.log('button clicked!');
      // }
    });
  });

});





