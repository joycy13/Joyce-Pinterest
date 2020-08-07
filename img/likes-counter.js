export default class LikesCounter extends HTMLElement {
    constructor() {
        super()
        this._root = this.attachShadow({mode: 'open'})
    }


    attributesChangedCallback() {
        
    }
}
