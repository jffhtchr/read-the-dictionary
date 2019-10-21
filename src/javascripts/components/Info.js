import {toggleClass} from '../utils/utils';

export default class Info {
    constructor({el}) {
        this.el = el;
        this.container = document.querySelector('.rtd__info-container');
        this.login = document.querySelector('.rtd__login');
        this.info = document.querySelector('.rtd__info');
        this.setListeners();
    }

    setListeners() {
        this.el.addEventListener('click', this.handleClick.bind(this));
        document.addEventListener('click', this.handleOutsideClick.bind(this));
    }

    handleClick(e) {
        toggleClass(this.container, 'is-visible-flex');
        if(e.target.classList.contains("rtd__login-button")){
            this.login.classList.add('is-visible-block');
            this.info.classList.remove('is-visible-block');
        }
        else if(e.target.classList.contains("rtd__info-button")) {
            this.login.classList.remove('is-visible-block');
            this.info.classList.add('is-visible-block');
        }
    }

    handleOutsideClick(e) {
        e.preventDefault()
        if(e.target !== this.container &&
           this.container.classList.contains('is-visible-flex') &&
           e.target !== this.el &&
           !e.target.classList.contains('rtd__button')
        ) {
            this.container.classList.remove('is-visible-flex');
        }
    }
}