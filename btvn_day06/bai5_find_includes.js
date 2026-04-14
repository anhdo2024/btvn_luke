// Đề bài: Bạn lấy được danh sách các mã lỗi từ Log hệ thống và một mã lỗi cụ thể từ UI.
// JavaScript


const systemErrors = [
    { code: "E01", msg: "Invalid Password" },
    { code: "E02", msg: "User Not Found" },
    { code: "E03", msg: "Network Timeout" }
];
const errorFromUI = "E02";

//Yêu cầu:
// Sử dụng .find() để tìm object lỗi trong systemErrors có mã trùng với errorFromUI.
// Sau khi tìm được, in ra câu thông báo lỗi (msg) tương ứng để so sánh với UI.
const foundError = systemErrors.find(error => error.code === errorFromUI);
console.log("Lỗi tìm được:", foundError);



//Tạo một mảng phụ chứa các mã lỗi "nghiêm trọng": const criticalErrors = ["E01", "E03"]. Sử dụng .includes() để kiểm tra xem mã errorFromUI có nằm trong danh sách nghiêm trọng hay không.

const criticalErrors = ["E01", "E02"]
const isCritical = criticalErrors.includes(errorFromUI);
if (isCritical) {
    console.log(`Mã lỗi ${errorFromUI} là lỗi nghiêm trọng!`);
} else {
    console.log(`Mã lỗi ${errorFromUI} không phải là lỗi nghiêm trọng.`);
}  