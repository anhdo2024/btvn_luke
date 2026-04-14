// Bài 1: Lọc và Biến đổi dữ liệu (Filter & Map)
// Đề bài: Bạn có một mảng danh sách các sản phẩm lấy về từ trang tìm kiếm.

// const products = [
//     { name: "iPhone 15", price: 1000, stock: 5 },
//     { name: "Macbook M3", price: 2000, stock: 0 },
//     { name: "AirPods Pro", price: 250, stock: 10 },
//     { name: "iPad Air", price: 600, stock: 0 }
// ];

// Yêu cầu: 1. Sử dụng .filter() để lấy ra các sản phẩm còn hàng (stock > 0). 2. Sử dụng .map() từ kết quả trên để tạo ra mảng mới chỉ chứa tên của các sản phẩm còn hàng. 


const products = [
    { name: "iPhone 15", price: 1000, stock: 5 },
    { name: "Macbook M3", price: 2000, stock: 0 },
    { name: "AirPods Pro", price: 250, stock: 10 },
    { name: "iPad Air", price: 600, stock: 0 }
];
// Bước 1: Lọc các sản phẩm còn hàng
const inStockProducts = products.filter(product => product.stock > 0);

// Bước 2: Tạo mảng mới chỉ chứa tên của các sản phẩm còn hàng
const productNames = inStockProducts.map(product => product.name);

console.log("Sản phẩm còn hàng:", inStockProducts);
console.log("Tên sản phẩm còn hàng:", productNames);