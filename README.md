# html-table-tool

`html-table-tool` is a lightweight JS library that fills a HTML table with data in minimal code.

## Install

### Webpack / ES6 / NPM

First, install the library like so: `npm i html-table-tool`, then import the library function in an ES6 JS file, `import fillTable from "html-table-tool"`

### Browser JS File

Download the latest version from the [releases](https://github.com/harrego/html-table-tool/releases/) page and place the downloaded JS file somewhere in your project structure then import it with HTML like so:
`<script type="text/javascript" src="table-tool-1.0.0.min.js"></script>`, the tool is then usable as `fillTable()`

*Make sure you change the `src` to the appropriate location in your project*

## Usage

The library uses one function `fillTable` with one parameter, an object with 5 required children:

| Child name | Expected type | Description | Return type |
| ---------- | ------------- | ----------- | ----------- |
| tableElement | DOM table element | The table to insert the data into | N/A |
| sectionCount | Int | The amount of sections to produce the table, if a header if needed then 2 is generally set | N/A |
| rowCountForSection | Function | The amount of rows within a section, a function is required with the parameter `(section)` | Integer |
| columnCountForIndexPath | Function | The amount of columns for a particular row, a function is required with the parameter `(indexPath)` (more about index paths can be seen below), in this case the `column` child of the index path object is null | Integer |
| cellForIndexPath | Function | The cell that will be inserted into the table, a function is required with the parameters `(cell, indexPath)` (more about index paths can be seen below), you must edit the cell and return it | DOM td element (from `cell` parameter)

An example of a broken down object can be seen here:

#### Variable setup

```
// The data to display in the table
var people = ["Harry", "Jane", "Brian"]

// Create the table object
var tableObjects = {
```

#### tableElement

```
// DOM table element
tableElement: document.getElementById("example-table"),
```

#### sectionCount


```
// Amount of sections, in this case 1 for a header and another for the data
sectionCount: 2,
```

#### rowCountForSection

```
// Amount of rows in each section
rowCountForSection: function(section) {
	// If the first section (the header), we only need 1
	if (section == 0) { return 1 }

	// If it's the second section (the data), we need the match the rows with the data we want to display
	else { return people.length }
},
```

#### columnCountForIndexPath

```
// In this case only 1 column for both sections
columnCountForIndexPath: function(indexPath) { return 1 },
```

#### cellForIndexPath

```
// Returning the cell
cellForIndexPath: function(cell, indexPath) {
	// If it's the first section (the header), simply display the single column header
	if (indexPath.section == 0) { cell.innerHTML = "<b>Name</b>" }

	// If it's the second section (the data), display the data for the position the index path gives
	else { cell.innerHTML = people[indexPath.row] }
	return cell
}
```

#### Finalising

```
}
// Fill the table using the setup object
fillTable(tableObjects)
```

## Building

**NOTE:** Building is only required for development.

The project uses `webpack` and `babel` to bundle a single JS file for the browser.

To build first install all depencides:

`npm i`

Then build with `webpack`:

`npm run build` (or `npm run dev` for development and debugging)
