function shouldRunTest(isServerUp, isDatabaseConnected, lastTestStatus, isWeekend) {

    // 1. Guard: server hoặc DB không OK → stop
    if (!isServerUp || !isDatabaseConnected) {
        return "Không chạy test - Server/Database chưa sẵn sàng";
    }

    // 2. Nếu không phải cuối tuần → chạy hết
    if (!isWeekend) {
        return "Chạy tất cả test";
    }

    // 3. Nếu là cuối tuần + test Failed → chạy
    if (lastTestStatus === "Failed") {
        return "Chạy lại test Failed";
    }

    // 4. Cuối tuần + Passed → không chạy
    if (lastTestStatus === "Passed") {
        return "Chỉ chạy vào ngày thường";
    }

    // 5. fallback (phòng trường hợp input sai)
    return "Trạng thái không hợp lệ";
}

console.log(shouldRunTest(true, true, "Failed", true));
// Chạy lại test Failed

console.log(shouldRunTest(true, true, "Passed", true));
// Chỉ chạy vào ngày thường

console.log(shouldRunTest(true, true, "Passed", false));
// Chạy tất cả test

console.log(shouldRunTest(false, true, "Failed", false));
//  Không chạy test - Server/Database chưa sẵn sàng


console.log(shouldRunTest(true, true, "Passedxxx", "xxx"));
//  Trạng thái không hợp lệ