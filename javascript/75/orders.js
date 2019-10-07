(function () {
    'use strict';

    class Item {
        /*constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }*/
        constructor(props) {
            this.name = props.name;
            this.price = props.price;
            this.quantity = props.quantity;
        }
    }

    class Order {
        /*constructor(customer, address, items) {
            this.customer = customer;
            this.address = address;
            this.items = items;
        }*/

        constructor(props) {
            this.customer = props.customer;
            this.address = props.address;
            this.items = props.items;
        }

        get total() {
            let total = 0;
            this.items.forEach(item => total += (item.price * item.quantity));
            return total;
        }
    }

    /*fetch('orders.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(orderData => {
            // console.log(orderData);
            const orders = [];
            orderData.forEach(order => orders.push(processOrder(order)));
            console.log(orders);
        })
        .catch(err => console.error(err));*/

    async function getOrders() {
        try {
            const response = await fetch('orders.json');
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const orderData = await response.json();

            const orders = [];
            orderData.forEach(order => orders.push(processOrder(order)));
            console.log(orders);
        } catch (err) {
            console.error(err);
        }
    }

    function processOrder(orderData) {
        // const items = [];
        // orderData.items.forEach(item => items.push(processItem(item)));
        // return new Order(orderData.customer, orderData.address, items);

        // causes jshint warning for some unknown reason
        //const { items, ...rest } = orderData;
        let items, rest;
        ({ items, ...rest } = orderData);
        const orderItems = [];
        items.forEach(item => orderItems.push(processItem(item)));
        return new Order({
            items: orderItems,
            ...rest
        });
    }

    function processItem(itemData) {
        // return new Item(itemData.item, itemData.total / itemData.quantity, itemData.quantity);

        //const { total, item, ...rest } = itemData;
        let total, item, rest;
        ({ total, item, ...rest } = itemData);
        return new Item({
            name: item,
            price: total / rest.quantity,
            ...rest
        });
    }

    getOrders();
}());