let TotalIncome  = 0;
let Savings = 0;
let Expenses = 0;
function addIncome(){
    let amount = parseFloat (document.getElementById("in").value);
    TotalIncome += amount;
    document.getElementById("T").textContent ="$" + TotalIncome.toFixed(2);
     Bs ();
}
 function AddSavings(){
    let amount = parseFloat (document.getElementById('SA').value);
    Savings+=amount;
    document.getElementById("TS").textContent ="$" + Savings.toFixed(2);
    Bs ();
 }
 function AddExpenses(){
    let amount = parseFloat (document.getElementById('E').value);
    Expenses+=amount;
    document.getElementById("TE").textContent ="$" + Expenses.toFixed(2);
    Bs ();
 }
 function Bs() {
    let RB = TotalIncome - Savings - Expenses;
    if (RB < 0) {
        document.getElementById('RB').textContent = "Tafuta pesa manze";
        document.getElementById('TB').textContent = "Tafuta pesa manze";
    } else {
        document.getElementById('RB').textContent = "$" + RB.toFixed(2);
        let TB = TotalIncome;
        document.getElementById("TB").textContent = "$" + TB.toFixed(2);
    }
}
