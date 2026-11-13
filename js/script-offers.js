window.onload = async () => {
  const res = await fetch("php/get-loans.php");
  const loans = await res.json();
  const list = document.getElementById("loanRequests");
  loans.forEach(loan => {
    const li = document.createElement("li");
    li.innerHTML = loan.borrower_name + " needs $" + loan.amount +
      '<button onclick="selectRequest('+ loan.id +')">Offer Loan</button>';
    list.appendChild(li);
  });
};

let selectedRequestId = null;
function selectRequest(id) { selectedRequestId = id; }

document.getElementById("offerForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const lenderName = document.getElementById("lenderName").value;
  const offerAmount = parseFloat(document.getElementById("offerAmount").value);
  const interestRate = parseFloat(document.getElementById("interestRate").value);
  const res = await fetch("php/add-offer.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ requestId: selectedRequestId, lenderName, offerAmount, interestRate })
  });
  const data = await res.json();
  document.getElementById("selectedOfferInfo").innerText = data.message;
});