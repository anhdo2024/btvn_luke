function checkPage(pageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${pageName} loaded successfully!`);
            resolve(pageName);
        }, 2000);
    });
}

// Kich bản A - Tải lần lượt từng trang
async function runSequential() {
    console.time("Sequential");

    await checkPage("HomePage");
    await checkPage("ProductPage");
    await checkPage("ContactPage");

    console.timeEnd("Sequential");
}

runSequential();


// Kịch bản B - Tải đồng thời tất cả các trang
async function runParallel() {
    console.time("Parallel");

    await Promise.all([
        checkPage("HomePage"),
        checkPage("ProductPage"),
        checkPage("ContactPage")
    ]);

    console.timeEnd("Parallel");
}

runParallel();