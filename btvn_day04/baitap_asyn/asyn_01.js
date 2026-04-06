function openBrowser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1. Đã mở trình duyệt");
            resolve();
        }, 1000);
    });
}

function enterUrl(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("2. Đã nhập URL: " + url);
            resolve();
        }, 2000);
    });
}

function clickButton() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("3. Đã click nút Login");
            resolve();
        }, 3000);
    });
}

// openBrowser();
// enterUrl("https://example.com/login");
// clickButton();

// async function runtest() {
//     await openBrowser();
//     await enterUrl("https://example.com/login");
//     await clickButton();

//     console.log("Kết thúc test");
// }

async function runtest() {
    try {
        await openBrowser();
        await enterUrl("https://example.com/login");
        await clickButton();
        console.log("Kết thúc test");
    } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
    }
}

runtest();


