function insert_Row() {
    //Write your code here
  const table = document.querySelector('#sampleTable');
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
	  <td>New Cell1</td>
	  <td>New Cell2</td>
	  `
	table.innerHTML = newRow.innerHTML+table.innerHTML;
	document.body.appendChild(table);
  
}
