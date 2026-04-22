// hämtar element från HTML
const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const balanceSpan = document.getElementById("balance");
const incomeButton = document.getElementById("incomeBtn");
const expenseButton = document.getElementById("expenseBtn");

// startvärde för saldo
let balance = 0;

// funktion för att lägga till transaktion
function addTransaction(type) {

    const desc = descInput.value;
    const amountNumber = Number(amountInput.value);

    // kollar att fälten inte är tomma
    if (desc === "" || amountInput.value === "") {
        return;
    }

    // kollar att beloppet är ett nummer
    if (isNaN(amountNumber)) {
        return;
    }

    // skapar li-element
    const lista = document.createElement("li");

    if (type === "income") {
        lista.innerHTML = desc + " - " + amountNumber + " kr (Inkomst)";
        incomeList.appendChild(lista);
        balance += amountNumber;   // lägger till
    } else {
        lista.innerHTML = desc + " - " + amountNumber + " kr (Utgift)";
        expenseList.appendChild(lista);
        balance -= amountNumber;   // drar bort
    }

    // uppdaterar saldo
    balanceSpan.innerHTML = balance;

    // rensar input-fälten
    descInput.value = "";
    amountInput.value = "";
}

// event listeners
incomeButton.addEventListener("click", () => {
    addTransaction("income");
});

expenseButton.addEventListener("click", () => {
    addTransaction("expense");
});