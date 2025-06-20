const budgetSlider = document.getElementById("budgetSlider");
const budgetAmount = document.getElementById("budgetAmount");
const highlight = document.querySelector(".highlight");
const preferenceInput = document.getElementById("preferenceInput");
const modeInput = document.getElementById("modeInput");

// Update displayed budget value live while sliding
budgetSlider.addEventListener("input", () => {
  budgetAmount.textContent = budgetSlider.value;
});

// Toggle selected buttons and update hidden inputs + suggested budget
document.querySelectorAll(".option").forEach(btn => {
  btn.addEventListener("click", () => {
    const parent = btn.parentElement;
    const isMulti = parent.classList.contains("days") || parent.classList.contains("time");

    if (!isMulti) {
      parent.querySelectorAll(".option").forEach(b => b.classList.remove("selected"));
    }

    btn.classList.toggle("selected");
    updateHiddenInputs();
    updateSuggestedBudget(); // ← Trigger update here as well
  });
});

// Sync selected values into hidden inputs
function updateHiddenInputs() {
  document.getElementById("modeInput").value =
    [...document.querySelectorAll("#mode-options .selected")].map(b => b.textContent.trim()).join(",");
  document.getElementById("preferenceInput").value =
    [...document.querySelectorAll("#preference-options .selected")].map(b => b.textContent.trim()).join(",");
  document.getElementById("daysInput").value =
    [...document.querySelectorAll("#days-options .selected")].map(b => b.textContent.trim()).join(",");
  document.getElementById("timesInput").value =
    [...document.querySelectorAll("#times-options .selected")].map(b => b.textContent.trim()).join(",");
}

// Update suggested budget based on current selections
function updateSuggestedBudget() {
  const mode = modeInput.value.toLowerCase();         // online or offline
  const preference = preferenceInput.value.toLowerCase(); // private or group

  let suggested = 2000;

  if (mode === "online" && preference === "private classes") suggested = 3000;
  else if (mode === "offline" && preference === "private classes") suggested = 5000;
  else suggested = 2000;

  highlight.textContent = `Rs. ${suggested}/month`;
  budgetAmount.textContent = suggested;
  budgetSlider.value = suggested;
}

// Initialize on load
updateHiddenInputs();
updateSuggestedBudget();
