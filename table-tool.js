function fillTable(objects) {
	if (!objects.tableElement) { throw "Missing tableElement" }
	else if (!objects.sectionCount) { throw "Missing sectionCount" }
	else if (!objects.rowCountForSection) { throw "Missing rowCountForSection" }
	else if (!objects.columnCountForIndexPath) { throw "Missing columnCountForIndexPath" }
	else if (!objects.cellForIndexPath) { throw "Missing cellForIndexPath" }

	for (var section = 0; section < objects.sectionCount; section += 1) {
		var rowCount = objects.rowCountForSection(section)
		console.log(rowCount)
		for (var row = 0; row < rowCount; row += 1) {
			var rowElement = document.createElement("tr")
			var columnCountIndexPath = {
				section: section,
				row: row,
				column: null
			}
			var columnCount = objects.columnCountForIndexPath(columnCountIndexPath)
			for (var column = 0; column < columnCount; column += 1) {
				var indexPath = {
					section: section,
					row: row,
					column: column
				}
				var cell = document.createElement("td")
				rowElement.appendChild(objects.cellForIndexPath(cell, indexPath))
			}
			objects.tableElement.appendChild(rowElement)
		}
	}
}

