// Class cha
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getDetails() {
        console.log(`Product: ${this.name}, Price: ${this.price}`);
    }
}

// Class con: Electronics
class Electronics extends Product {
    constructor(name, price, warranty) {
        super(name, price); // gọi class cha
        this.warranty = warranty;
    }

    // Override (đa hình)
    getDetails() {
        console.log(`Electronics: ${this.name}, Price: ${this.price}, Warranty: ${this.warranty} months`);
    }
}

// Class con: Clothing
class Clothing extends Product {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    // Override
    getDetails() {
        console.log(`Clothing: ${this.name}, Price: ${this.price}, Size: ${this.size}`);
    }
}

class ShoppingCart {
    #items = []; // private

    addItem(product) {
        this.#items.push(product);
    }

    showCart() {
        console.log("=== Cart Items ===");
        this.#items.forEach(item => item.getDetails());
    }

    calculateTotal() {
        return this.#items.reduce((total, item) => total + item.price, 0);
    }
}

function processPayment(totalAmount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (totalAmount > 0) {
                resolve("Thanh toán thành công");
            } else {
                reject("Giỏ hàng trống, không thể thanh toán");
            }
        }, 2000);
    });
}

// Tạo sản phẩm
const phone = new Electronics("iPhone", 1000, 12);
const shirt = new Clothing("T-Shirt", 20, "L");

// Tạo giỏ hàng
const cart = new ShoppingCart();

// Thêm sản phẩm
cart.addItem(phone);
cart.addItem(shirt);

// Hiển thị giỏ hàng
cart.showCart();

// Tính tổng
const total = cart.calculateTotal();
console.log("Total:", total);

// Thanh toán
processPayment(total)
    .then(message => console.log(message))
    .catch(error => console.log(error));