async function getData() {
  let response = await fetch("https://mul14.github.io/data/employees.json");

  let data = await response.json();

  for (let i = 0; i < data.length; i++) {
    if (data[i].salary > 15000000) {
      console.log("NO. " + (i + 1) + " - " + data[i].first_name);
    }
  }
}
