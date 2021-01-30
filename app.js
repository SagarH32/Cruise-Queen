// Selecting Input Fields

let firstClass = document.getElementsByTagName("input")[4].value;
let economyClass = document.getElementsByTagName("input")[5].value;

// Selecting Pricing

let subtotal = document.getElementById("subtotal").innerText;
let vat = document.getElementById("vat").innerText;
let total = document.getElementById("total").innerText;

// Main function

function bookTicket() {
  // Quantity and Calculation
  function quantity() {
    let increaseFirstClass = document.querySelectorAll("#increase")[0];
    let increaseEconomy = document.querySelectorAll("#increase")[1];
    let decreaseFirstClass = document.querySelectorAll("#decrease")[0];
    let decreaseEconomyClass = document.querySelectorAll("#decrease")[1];
    firstClass = parseFloat(firstClass);
    economyClass = parseFloat(economyClass);

    addEventListener("click", function (event) {
      if (event.target === increaseFirstClass) {
        if (firstClass >= 0) {
          firstClass = firstClass + 1;
          document.getElementsByTagName("input")[4].value = firstClass;
        }
      }
      if (event.target === increaseEconomy) {
        if (economyClass >= 0) {
          economyClass = economyClass + 1;
          document.getElementsByTagName("input")[5].value = economyClass;
        }
      }

      if (event.target === decreaseFirstClass) {
        if (firstClass > 0) {
          firstClass = firstClass - 1;
          document.getElementsByTagName("input")[4].value = firstClass;
        }
      }
      if (event.target === decreaseEconomyClass) {
        if (economyClass > 0) {
          economyClass = economyClass - 1;
          document.getElementsByTagName("input")[5].value = economyClass;
        }
      }

      calcultePrice();
    });

    function calcultePrice() {
      let firstClassPrice = 150;
      let economyClassPrice = 100;

      subtotal =
        firstClassPrice * firstClass + economyClassPrice * economyClass;
      document.getElementById("subtotal").innerText = "$" + subtotal;

      vat = (subtotal / 100) * 10;
      document.getElementById("vat").innerText = "$" + vat;

      total = subtotal + vat;
      document.getElementById("total").innerText = "$" + total;
    }
  }

  document.getElementById("bookNow").addEventListener("click", function () {
    let fromLocation = document.getElementsByTagName("input")[0].value;
    let toLocation = document.getElementsByTagName("input")[1].value;
    let date1 = document.getElementsByTagName("input")[2].value;
    let date2 = document.getElementsByTagName("input")[3].value;

    let firstClass = document.getElementsByTagName("input")[4].value;
    let economyClass = document.getElementsByTagName("input")[5].value;
    let totalTicket = parseFloat(firstClass) + parseFloat(economyClass);
    total = document.getElementById("total").innerText;

    document.getElementById("result").innerText =
      "Number of Tickets: " +
      totalTicket +
      ". " +
      
      "First Class Ticket: total " +
      firstClass +
      ". Economy Class: total " +
      economyClass +
      "." + 
      " Departure " +
      date1 +
      " & Return " +
      date2 +
      "." +
      " Total Amount (with 10% vat): " +
      total;

  });

  quantity();
}

bookTicket();