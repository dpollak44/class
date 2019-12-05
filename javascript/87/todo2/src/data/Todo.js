export default class Todo {
    constructor(props) {
        this.id = props.id;
        this.text = props.text;

        Object.freeze(this);
    }
}