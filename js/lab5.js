/** WAP Lab5 JS assignment */

jQuery(document).ready(function () {
"use strict";

jQuery("#productSubmitButton").on("click" , function (event) {
        event.preventDefault();
});
     jQuery("#productSubmitButton").click(function onClickMe() {


         //let stockQnt = document.getElementById("stockQntInput").value;
         //let name = document.getElementById("nameInput").value;
         let productNum = $("#productNumInput").val();
         let stockQnt = $("#stockQntInput").val();
         let name = $("#nameInput").val();
         let supplier = $("#supplierInput").val();
         let unitPrice = $("#unitPriceInput").val();
         let dateSupplied = $("#dateInput").val();

         alert("Product Number =" + productNum + "\n" +
             "Product Name ="+ name + "\n" +
             "Supplier =" + supplier + "\n" +
             "Unit Price =" + unitPrice +"\n" +
             "Supplied Date =" + dateSupplied);

     })
});

