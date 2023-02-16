var VALUES = [
    0,
    1,
    "0",
    "1",
    NaN,
    Infinity,
    -Infinity,
    null,
    undefined,
    {},
    {},
    [],
    [],
    [0, 1, 2],
    {
        vegetable: "asparagus",
        meat: "steak"
    },
    console,
    console.log,
    document,
    document.write
];
function stringValue(value) {
    return value;
}
function generateTypeHeader() {
    return "<tr><th>Value</th><th>Type</th>\r\n";
}

function generateTypeRow(value) {
    return "<tr><td>" + stringValue(value) + "</td><td>" + (typeof value) + "</td></tr>\r\n";
}

function generateTypeTable() {
    table = "<table>\r\n";

    table += " " + generateTypeHeader();
    for (var counter = 0; counter < VALUES.length; counter++) {
        table += " " + generateTypeRow(VALUES[counter]);
    }
    table += "</table>\r\n";
    return table;
}

function init() {
    console.log("Welcoem to week 5")
    document.getElementById('typeTable').innerHTML = generateTypeTable();
}

window.addEventListener('load', init);