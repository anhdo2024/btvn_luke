function calculateShipping(weight, distance, membership) {
    let total = 5; // phí cơ bản

    // 1. Phí theo weight
    if (weight > 50) {
        total += 50;
    } else if (weight > 10) {
        total += 10;
    }

    // 2. Phí theo distance
    if (distance > 500) {
        total *= 1.2;
    }

    // 3. Giảm giá theo membership
    switch (membership) {
        case "Gold":
            total *= 0.5;
            break;
        case "Silver":
            total *= 0.8;
            break;
        case "Guest":
        default:
            break;
    }

    // 4. Bài toán khó: nếu > 100$ → trừ 10$
    if (total > 100) {
        total -= 10;
    }

    return total.toFixed(2);
}

console.log(calculateShipping(100, 1000, "Guest"));

console.log(calculateShipping(60, 600, "Gold"));

console.log(calculateShipping(80, 1000, "Gold"));