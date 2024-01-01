
class ProgressBar extends HTMLElement{
    static css = `
        :host{
            display:block;
            width: 250px;
            height: 40px;
            background-color: #eeee;
            border-radius: 4px;
            overflow: hidden;
        }
        .fill{
            width: 50%;
            height: 100%;
            background: #009578;
            transition: width 0.25s
        }
    `;
    static get observedAttributes(){
        return ["persent"];
    }
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        const style = document.createElement("style");
        const fill = document.createElement("div");
        style.innerHTML = ProgressBar.css;
        fill.classList.add("fill");
        this.shadowRoot.append(style,fill)
    };
    get persent(){
        const value = this.getAttribute("persent");
        if(isNaN(value)){
            return 0;
        }
        if(value < 0){
            return 0;
        }
        if(value > 100){
            return 100;
        }
        return Number(value)
    };
    set persent(value){
        this.setAttribute("persent",value)
    }
    attributeChangedCallback(name){
        if(name === "persent"){
            this.shadowRoot.querySelector(".fill").style.width = `${this.persent}%`
        }
    }
};

customElements.define("progress-bar", ProgressBar)

