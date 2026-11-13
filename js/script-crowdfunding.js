window.onload = renderCampaigns;

document.getElementById("campaignForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const title = document.getElementById("campaignTitle").value;
  const description = document.getElementById("campaignDesc").value;
  const goal = parseFloat(document.getElementById("campaignGoal").value);
  await fetch("php/add-campaign.php", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ title, description, goal })
  });
  renderCampaigns();
  this.reset();
});

async function renderCampaigns() {
  const res = await fetch("php/get-campaigns.php");
  const campaigns = await res.json();
  const list = document.getElementById("campaignList");
  list.innerHTML = "";
  campaigns.forEach(c => {
    list.innerHTML += `<li><b>${c.title}</b>: $${c.raised} of $${c.goal}</li>`;
  });
}