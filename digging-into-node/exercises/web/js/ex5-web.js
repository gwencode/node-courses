(function Ex5(){
	var btn;
	var recordsList;

	document.addEventListener("DOMContentLoaded",init,false);

	// **************

	function init() {
		btn = document.querySelectorAll("[rel*=js-btn]")[0];
		recordsList = document.querySelectorAll("[rel*=js-records-list]")[0];

		btn.addEventListener("click",getRecords,false);
	}

	function renderRecords(records) {
		var transforms = {
			"row": {
				"<>": "tr",
				html: "<td>${something}</td><td>${other}</td>",
			},
			"table": {
				"<>": "table",
				border: "1",
				cellPadding: "10",
				html: function table(){
					return `<tr><td>Something</td><td>Other</td></tr>
						${json2html.transform(records,transforms.row)}
					`;
				},
			},
		};

		recordsList.innerHTML = json2html.transform({},transforms.table);
	}

	async function getRecords() {
		let response = await fetch("/get-records")
    // Vérifiez si la réponse du serveur est réussie (statut 200 OK)
    if (!response.ok) {
      throw new Error('La requête a échoué avec le statut ' + response.status);
    }
    // Convertissez la réponse en JSON et retournez-la
    let records = await response.json();
    if (records && records.length > 0) {
      renderRecords(records);
    }
	}

})();
