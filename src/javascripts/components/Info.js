import {toggleClass} from '../utils/utils';

export default class Info {
    constructor({el}) {
        this.el = el;
        this.container = document.querySelector('.rtd__info-container');
        this.setListeners();
    }

    setListeners() {
        this.el.addEventListener('click', this.handleClick.bind(this));
        document.addEventListener('click', this.handleOutsideClick.bind(this));
    }

    handleClick() {
        toggleClass(this.container, 'is-visible-flex');
    }

    handleOutsideClick(e) {
        e.preventDefault()
        if(e.target !== this.container &&
           e.target !== this.el &&
           this.container.classList.contains('is-visible-flex')
        ) {
            this.container.classList.remove('is-visible-flex');
        }
    }
}