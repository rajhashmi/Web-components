export class Button extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode:"open"});
    }
    connectedCallback(){
        this.shadowRoot.innerHTML = `
        <style>${css}</style>
        <button class="button"> 
        <span class= "label"> Click Me </span>
        </button>
        `;
    }
}

const css = `
 .button {
    display:inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    gap: 8px;

    background-color: #166df7;
    border-radius: 5px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;

    font-family: "sans-serif";
 }
`;