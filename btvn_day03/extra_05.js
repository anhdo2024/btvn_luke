const product = {
    name: "iPhone",
    price: 1200,
    color: "Black",
    inStock: true
};

const filter = {
    maxPrice: 1500,
    preferredColor: "Black",
    requireStock: true
};

function checkProduct(product, filter) {
    const reasons = [];

    // 1. Check giá (chỉ khi có maxPrice)
    if (filter.maxPrice !== undefined && product.price > filter.maxPrice) {
        reasons.push("Giá quá cao");
    }

    // 2. Check màu
    if (
        filter.preferredColor &&
        product.color !== filter.preferredColor
    ) {
        reasons.push("Sai màu");
    }

    // 3. Check tồn kho
    if (filter.requireStock && !product.inStock) {
        reasons.push("Hết hàng");
    }

    // 4. Kết luận
    if (reasons.length === 0) {
        console.log("Product Matches!");
    } else {
        console.log("Không phù hợp vì:");
        reasons.forEach(reason => console.log("- " + reason));
    }
}

checkProduct(product, filter);