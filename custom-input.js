export default class CustomInput extends HTMLElement{
    constructor(){
        super();
        const shadowRoot = this.attachShadow({mode:"open"});

        const customInputTemplate = document.querySelector("#custom-inputTemplate");
        shadowRoot.appendChild(customInputTemplate.content.cloneNode(true));

        this.wrapper = shadowRoot.querySelector(".custom_input_wrapper");
        this.inputWrapper = shadowRoot.querySelector(".inputWrapper");
        this.label = shadowRoot.querySelector("label");
        this.labelClass = this.children[0].className;
        this.input = shadowRoot.querySelector("input");
        this.p = shadowRoot.querySelector("p");

        this.type = this.getAttribute("type");
        this.id = this.getAttribute("id");
        this.class = this.getAttribute("class");
        this.placeholder = this.getAttribute("placeholder");
        this.ui = this.getAttribute("ui");
        
    }

    connectedCallback(){
        const customID = `custom${this.type.slice(0,1).toUpperCase()}${this.type.slice(1,this.type.length)}ID`;

        this.input.setAttribute("type", this.type);
        this.input.setAttribute("id", this.id === 'null' ? customID : this.id);
        if(this.class !== null){
            this.inputWrapper.classList.add(this.class);
        }
        if(this.placeholder !== null){
            this.input.setAttribute("placeholder", this.placeholder)
        }
        
        this.label.setAttribute("for", this.id === 'null' ? customID : this.id);
        this.label.setAttribute("class", this.labelClass === 'null'?'': this.labelClass)
        this.wrapper.classList.add(this.ui);
        
        this.input.addEventListener("keydown",()=>{
            this.checkEmptyInput();
        });

        this.input.addEventListener("blur",()=>{
            if(this.type === 'email')  {
                this.emailValidation();
            }else if(this.type === 'password')  {
                this.passwordValidation();
            }
            this.checkEmptyInput();
        })
    }

    checkEmptyInput(){
        if(this.wrapper.classList.contains('underline')){
            this.input.value !== '' ? this.wrapper.classList.add('filled') : this.wrapper.classList.remove('filled');
        }
    }
    passwordValidation(){
        this.input.value.length <= 7 || this.input.value.search(/[0-9]/) === -1 || this.input.value.search(/[A-Z]/) === -1 ? this.showError() : this.hideError();
    }
    emailValidation(){
        this.input.value.includes("@") && this.input.value.includes(".") ? this.hideError() : this.showError();
    }

    showError(){
        this.p.style.display = "block";
        this.wrapper.classList.add("has-error");
    }
    hideError(){
        this.p.style.display = "none";
        this.wrapper.classList.remove("has-error");
    }
}

customElements.define("custom-input", CustomInput);