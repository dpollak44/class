import Person from './Person';
import Item from './item';

export default interface Order {
    customer: Person;
    date: Date;
    item: Item;
}
