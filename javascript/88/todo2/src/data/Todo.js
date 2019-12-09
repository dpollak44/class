export default class Todo {
    constructor(props) {
        this.id = props.id;
        this.text = props.text;
        this.complete = props.complete;

        Object.freeze(this);
    }
}