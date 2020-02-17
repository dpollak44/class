class Cart {
    constructor(items) {
        this.items = items || {};
    }

    addItem(id, count) {
        // {"1" : 8, "2" : 5}
        // [{id: 1, count: 8}, {id: 2, count: 5}]
        const cc = this.items[id] || 0;
        this.items[id] = cc + +count;
    }

    getItems() {
        //return this.items;
        return Object.keys(this.items).map(id => {
            const item = global.items.find(i => i.id === +id);
            return {
                item: item,
                count: this.items[id],
                subtotal: (item.price * this.items[id]).toFixed(2)
            };
        });
    }
}

module.exports = Cart;