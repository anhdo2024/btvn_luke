function taskA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Nhiệm vụ A xong");
            resolve("A done");
        }, 3000);
    });
}

function taskB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Nhiệm vụ B xong");
            resolve("B done");
        }, 1000);
    });
}

function taskC() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Nhiệm vụ C xong");
            resolve("C done");
        }, 2000);
    });
}


// cau2:
async function runTest() {
    try {
        // 1. Chạy song song A và B
        const [resultA, resultB] = await Promise.all([
            taskA(),
            taskB()
        ]);

        console.log("Kết quả A:", resultA);
        console.log("Kết quả B:", resultB);

        // 2. Dùng kết quả A + B làm input cho C
        const resultC = await taskC(resultA, resultB);

        console.log("Kết quả C:", resultC);

    } catch (error) {
        console.error("Có lỗi xảy ra:", error);
    }
}

function taskC(inputA, inputB) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Nhiệm vụ C xong với input: ${inputA}, ${inputB}`);
            resolve("C done");
        }, 2000);
    });
}

runTest();