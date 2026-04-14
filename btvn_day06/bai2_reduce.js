// Bài 2: Tính toán báo cáo (Reduce)
// Đề bài: Sau khi chạy một bộ test (Test Suite), bạn nhận được mảng kết quả như sau:

// const testResults = [
//     { id: 1, duration: 120, status: "passed" },
//     { id: 2, duration: 450, status: "failed" },
//     { id: 3, duration: 200, status: "passed" },
//     { id: 4, duration: 310, status: "passed" }
// ];

// Yêu cầu:
// Sử dụng .reduce() để tính tổng thời gian (duration) thực thi của toàn bộ các Test Case.
// (Nâng cao) Tiếp tục dùng .reduce() để đếm xem có bao nhiêu test "passed" và bao nhiêu test "failed" (Kết quả trả về là 1 object: { passed: 3, failed: 1 }).

const testResults = [
    { id: 1, duration: 120, status: "passed" },
    { id: 2, duration: 450, status: "failed" },
    { id: 3, duration: 200, status: "passed" },
    { id: 4, duration: 310, status: "passed" }
];

//.cau 1
const totalDuration = testResults.reduce((sum, item) => sum + item.duration, 0);
console.log("Tổng thời gian thực thi:", totalDuration);

// cau 2
const statusCount = testResults.reduce((count, item) => {
    if (item.status === "passed") {
        count.passed += 1;
    } else if (item.status === "failed") {
        count.failed += 1;
    }
    return count;
}, { passed: 0, failed: 0 });

console.log("Số lượng test:", statusCount);