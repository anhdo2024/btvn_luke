// Đề bài: Bạn cần kiểm tra tính hợp lệ của một danh sách các Input trên Form đăng ký.
// JavaScript
// 

const formFields = [
    { label: "Username", value: "quang_test", isValid: true },
    { label: "Email", value: "test@gmail.com", isValid: true },
    { label: "Password", value: "123", isValid: false },
    { label: "Phone", value: "0909", isValid: true }
];

// Yêu cầu:
// Sử dụng .every() để kiểm tra xem tất cả các trường đã hợp lệ (isValid === true) để nhấn nút Submit chưa?
const allValid = formFields.every(field => field.isValid === true);
console.log("Tất cả trường hợp lệ:", allValid);


// Sử dụng .some() để kiểm tra xem có ít nhất một trường bị lỗi (isValid === false) để hiển thị thông báo cảnh báo chung không?
const hasInvalid = formFields.some(field => field.isValid === false);
if (hasInvalid) {
    console.log("Có trường bị lỗi, vui lòng kiểm tra lại!");
} else {
    console.log("Tất cả trường hợp lệ, có thể submit form.");
}