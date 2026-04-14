// Đề bài: Bạn có một file cấu hình chung (defaultConfig) và một cấu hình riêng cho môi trường Staging (stagingConfig).


const defaultConfig = {
    browser: "chrome",
    timeout: 5000,
    headless: true
};

const stagingConfig = {
    timeout: 10000,
    url: "https://staging.example.com"
};

// Yêu cầu:
// Sử dụng Spread Operator (...) để gộp 2 object này thành finalConfig. Lưu ý: Giá trị của stagingConfig phải ghi đè lên defaultConfig.
const finalConfig = { ...defaultConfig, ...stagingConfig };
console.log("Final Config:", finalConfig);


//Sử dụng Object.keys() để in ra danh sách các thông số cấu hình có trong finalConfig.
const configKeys = Object.keys(finalConfig);
console.log("Các thông số cấu hình:", configKeys);