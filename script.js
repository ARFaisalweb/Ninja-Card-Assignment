//increase first class ticket number.
document.getElementById('first-class-increase').addEventListener('click', function () {
    handleTicketChanger('first-class', true);
})

  //decrease first class ticket number.
document.getElementById('first-class-decrease').addEventListener('click', function () {
    handleTicketChanger('first-class', false);
})

 //increase economy class ticket number.
document.getElementById('economy-class-increase').addEventListener('click', function () {
    handleTicketChanger('economy-class', true);
})

  // decrease economy class ticket number.
document.getElementById('economy-class-decrease').addEventListener('click', function () {
    handleTicketChanger('economy-class', false);
})

//confirmation page showing and main page remove.
document.getElementById('book-now').addEventListener('click', function() {
    document.getElementById('confirmation-area').style.display = 'flex';
    document.getElementById('main-area').style.display = 'none';
})
      
 //confirmation page remove and main page show.
document.getElementById('remove-button').addEventListener('click', function () {
    document.getElementById('confirmation-area').style.display = 'none';
    document.getElementById('main-area').style.display = 'block';

    document.getElementById('first-class-count').value = 0;
    document.getElementById('economy-class-count').value = 0;
    document.getElementById('subtotal-amount').innerText = '$' + 0;
    document.getElementById('vat-amount').innerText = '$' + 0;
    document.getElementById('total-amount').innerText = '$' + 0;

    document.getElementById('first-class-ticket').innerText = 0;
    document.getElementById('economy-class-ticket').innerText = 0;
    document.getElementById('total-bill').innerText = '$' + 0;
})

//main operating function.
function handleTicketChanger(ticket, isIncreasing) {
    const ticketNumber = getInputValue(ticket);
    let ticketNewNumber = ticketNumber;
    if (isIncreasing == true) {
        ticketNewNumber = ticketNumber + 1;
    }
    if (isIncreasing == false && ticketNumber > 0) {
        ticketNewNumber = ticketNumber - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewNumber;
    calculateTotal();
}

//all the calculation.
function calculateTotal() {
    const firstClassCount = getInputValue('first-class');
    const economyClassCount = getInputValue('economy-class');

    document.getElementById('first-class-ticket').innerText = firstClassCount;
    document.getElementById('economy-class-ticket').innerText = economyClassCount;

    const subTotal = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('subtotal-amount').innerText = '$' + subTotal;

    const vat = Math.round(subTotal * .1);
    document.getElementById('vat-amount').innerText = '$' + vat;

    const Total = subTotal + vat;
    document.getElementById('total-amount').innerText = '$' + Total;

    document.getElementById('total-bill').innerText = '$' + Total;
}

//function return.
function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}