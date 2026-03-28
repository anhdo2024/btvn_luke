// câu hỏi tình huống: Bạn lấy được số lượng sản phẩm từ Website là chuỗi "5". 
// Bạn muốn kiểm tra xem nó có lớn hơn 0 hay không. Bạn nên dùng cách nào an toàn nhất?
//  (Gợi ý: Ép kiểu về Number trước khi so sánh === hay cứ dùng > 0?)

// Trả lời:
/*
Cách an toàn nhất là ép kiểu (type casting) về Number trước khi so sánh. 

việc chuyển đổi sang số giúp tránh sai sót logic khi so sánh (ví dụ: chuỗi rỗng "" hoặc chuỗi không phải số).
*/

let quantityStr = "5"; // Dữ liệu từ website
let quantity = Number(quantityStr); // Ép kiểu sang Number

if (quantity > 0) {
    console.log("Sản phẩm lớn hơn 0");
}