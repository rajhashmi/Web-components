export class Counter extends HTMLElement {
  css = `
    :host{
        display:block;
        max-width: 150px;
        background-color: white;
        border-radius:4px;
        padding:16px;
        border:1px solid #dddd;
        user-select: none;
    }

    .value{
        padding:24px 0;
        text-align: center;
        font-family: sans-serif;
        font-size: 48px;
    }
    .buttons{
        display:flex;
        gap:16px;
    }
    .button{
        flex-grow:1;
        font-size:24px;
        padding: 16px 0;
        background: #ddd;
        color: #33333;
        cursor:pointer;
        outline:none;
        border:none;
        border-radius:4px;
    }

    .button:active{
        background: #cccc
    }
    `;

  template = () => {
    return `
    <div class="value">${this.value}</div>
    <div class="buttons"> 
    <button type="button" class="button button--increment">+</button>
    <button type="button" class="button button--decrement">-</button>
    </div>
    `;
  };
  constructor() {
    super();
    this.value = 0;
    this.attachShadow({ mode: "open" });
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `
        <style>${this.css.trim()}</style>
        ${this.template().trim()}
        `;
        this.shadowRoot.querySelector(".button--increment").addEventListener("click", this.onIncremnentButtonClick)
        this.shadowRoot.querySelector(".button--decrement").addEventListener("click", this.onDecrementButtonClick)
  }
  onIncremnentButtonClick = ()=>{
    this.value++;
    this.render();
  }
  onDecrementButtonClick = ()=>{
    this.value = Math.max(0, this.value - 1);
    this.render();
  };
}
