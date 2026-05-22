function insert_Row() {

  const table = document.querySelector('#sampleTable tbody');

  const newRow = document.createElement('tr');

  newRow.innerHTML = `
      <td>New Cell1</td>
      <td>New Cell2</td>
  `;

  table.prepend(newRow);

}