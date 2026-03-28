let bugPriority = 3;

switch (bugPriority) {
    case 1:
        console.log("Blocker - Sửa ngay!");
        break;
    case 2:
        console.log("High - Cần sửa trong sprin");
        break;
    case 3:
        console.log("Low - Sửa sau");
        break;
    default:
        console.log("Độ ưu tiên không hợp lệ");
}