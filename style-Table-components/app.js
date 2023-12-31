import { Table } from "./table.js";
customElements.define("style-table", Table);

const newData = [
    ["8831", "shahid", "India"],
    ["6608", "hashmi", "India"]
];

const userTable = document.getElementById("user");

userTable.data = newData