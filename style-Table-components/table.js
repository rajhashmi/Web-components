export class Table extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const header = this.dataset.header.split(",").map(head => head.trim());

    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="style.css">
            <table>
                <thead>
                    <tr>
                      ${header.map(header => `<th>${header}</th>`).join("")}
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        `;
  }
/**
 * @param data {string[][]};
 */
  set data(data){

    const tablebody = this.shadowRoot.querySelector("tbody");
    const rows = data.map(rowData =>{
        const row = document.createElement("tr");
        const cells = rowData.map(cellData => {
            const cell = document.createElement("td");

            cell.innerText = cellData;
            return cell
        });
        row.append(...cells);
        return row
    })
    tablebody.innerHTML = "";
    tablebody.append(...rows);
  }
}
