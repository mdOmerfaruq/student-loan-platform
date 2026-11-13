document.getElementById("loanForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const name = document.getElementById("borrowerName").value;
  const amount = parseFloat(document.getElementById("loanAmount").value);
  const res = await fetch("php/add-loan.php", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ name, amount })
  });
  const data = await res.json();
  document.getElementById("loanMessage").textContent = data.message;
});