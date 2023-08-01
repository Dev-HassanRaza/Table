function printMultiplicationTable() {
  const number = prompt("Enter a number from 1 to 20:");

  const parsedNumber = parseInt(number);

  document.write(`<h2>Multiplication Table for ${parsedNumber}</h2>`);
  document.write("<table>");
  for (let i = 1; i <= 10; i++) {
    const result = parsedNumber * i;
    document.write(
      `<tr><td>${parsedNumber} x ${i}</td><td>=</td><td>${result}</td></tr>`
    );
  }
  document.write("</table>");
}

printMultiplicationTable();
