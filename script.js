function calculate() {
  const income = document.getElementById('income').value;

  const tax = calculateTax(Number(income));

  document.getElementById('result').innerText =
    `Tax: ${tax}`;
}