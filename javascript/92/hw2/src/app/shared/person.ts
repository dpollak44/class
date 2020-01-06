import Address from './address';

export default interface Person {
    firstName: string;
    lastName: string;
    address: Address;

    friends?: string[];
}
