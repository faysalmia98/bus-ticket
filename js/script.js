/* First Class Ticket Increase Event Clicked Handler */
document.getElementById("ticket-increase").addEventListener("click", function() {
    ticketCountChange("ticket", true);
    calculateTotalAmount();
});

/* First Class Ticket decrease Event Clicked Handler */
document.getElementById("ticket-decrease").addEventListener("click", function(){
    ticketCountChange("ticket", false);
    calculateTotalAmount();
});

/* First Class Ticket Increase Event Clicked Handler */
document.getElementById("economy-increase").addEventListener("click", function() {
    ticketCountChange("economy", true);
    calculateTotalAmount();
});

/* First Class Ticket decrease Event Clicked Handler */
document.getElementById("economy-decrease").addEventListener("click", function(){
    ticketCountChange("economy", false);
    calculateTotalAmount();
});

function ticketCountChange(ticket,increase) {
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if(increase == true) {
        ticketNewCount = ticketCount + 1;
    }
    if(increase == false && ticketNewCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    let ticketPrice = 0;
    if(ticket == "ticket"){
        ticketPrice = ticketNewCount * 150;
    }
    if(ticket == "economy"){
        ticketPrice = ticketNewCount * 100;
    }
    document.getElementById(ticket + "-price").innerText= ticketPrice;
}

function calculateTotalAmount(){
    const ticketInput = document.getElementById("ticket-count");
    const ticketCount = parseInt(ticketInput.value);
    const economyInput = document.getElementById("economy-count");
    const economyCount = parseInt(economyInput.value);
    const subTotalAmount = ticketCount * 150 + economyCount * 100;
    document.getElementById("subtotal-amount").innerText = subTotalAmount;

    const vat = Math.round(subTotalAmount * 0.1);
    document.getElementById("vat").innerText = vat;

    const totalAmount = subTotalAmount + vat;
    document.getElementById("totalAmount").innerText = totalAmount;
}

document.getElementById("book-now").addEventListener("click", function(){
    const bookModal = document.getElementById("booking-area");
    bookModal.style.display = "none";
    const completedBook = document.getElementById("completed-book");
    completedBook.style.display = "block";

});

document.getElementById("btn-done").addEventListener("click", function(){
    const bookModal = document.getElementById("booking-area");
    bookModal.style.display = "block";
    const completedBook = document.getElementById("completed-book");
    completedBook.style.display = "none";
});