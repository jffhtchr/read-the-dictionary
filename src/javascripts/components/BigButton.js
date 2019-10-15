import axios from 'axios';
import {toggleClass} from '../utils/utils';

export default class BigButton {
    constructor({el}) {
        this.el = el;
        this.story = document.querySelector('.rtd__story')
        this.setListeners();
    }

    setListeners() {
        this.el.addEventListener('click', this.handleClick.bind(this))
        this.el.addEventListener('mousedown', this.transformButton.bind(this))
        this.el.addEventListener('mouseup', this.transformButton.bind(this))
    }

    handleClick() {
        axios.get(`/story`)
        .then(res => {
            this.story.innerHTML = res.data
        })
        .catch(console.error);
    }

    transformButton() {
        toggleClass(this.el, "rtd__button--pressed")
    }
}