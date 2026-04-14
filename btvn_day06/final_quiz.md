******************************************************
PHẦN 1: BASIC & DATA STRUCTURES (ARRAY, OBJECT, SCOPE)
Câu 1: Sự khác biệt lớn nhất giữa let và var trong một vòng lặp for là gì? 
A. var nhanh hơn let. 
B. let tạo ra phạm vi khối (block scope), var tạo ra phạm vi hàm (function scope). => Đáp án
C. let không thể thay đổi giá trị, var thì có thể. 
D. Không có sự khác biệt nào.

Đáp án: B. let tạo ra phạm vi khối (block scope), var tạo ra phạm vi hàm (function scope).

Giải thích dễ hiểu:
var (function scope):
Biến được khai báo bằng var không bị giới hạn trong {} của vòng lặp.
Nó “thoát ra ngoài” và dùng được trong toàn bộ function.

let (block scope):
Biến chỉ tồn tại bên trong {} của vòng lặp for.
Mỗi lần lặp sẽ tạo một bản sao riêng của biến.

******************************************************
Câu 2: Bạn có một mảng các phần tử const elements = ['Button', 'Input', 'Checkbox']. Phương thức nào dùng để biến đổi mảng này thành mảng các chữ in hoa? 
A. elements.filter() 
B. elements.forEach()  => Đáp án
C. elements.map() 
D. elements.reduce()

const elements = ['Button', 'Input', 'Checkbox'];

const upperCaseElements = elements.map(item => item.toUpperCase());

console.log(upperCaseElements);
// ["BUTTON", "INPUT", "CHECKBOX"]

******************************************************
Câu 3: Kết quả của đoạn code sau là gì? console.log(typeof [1, 2, 3]); 
A. "array" 
B. "list"  
C. "object"  => Đáp án
D. "undefined"


******************************************************
Câu 4: Để kiểm tra xem một mảng có chứa một phần tử cụ thể hay không (ví dụ: kiểm tra thông báo lỗi có xuất hiện trong danh sách lỗi không), ta dùng phương thức nào?
A. includes() 
B. find() 
C. some() 
D. Cả 3 phương thức trên đều có thể ứng dụng tùy trường hợp. => Đáp án


******************************************************
Câu 5: Trong một Object, làm thế nào để truy cập thuộc tính nếu tên thuộc tính đó được lưu trong một biến (Dynamic Key)?
A. object.variableName 
B. object[variableName] => Đáp án
C. object->variableName 
D. object{variableName}

=======================================================
PHẦN 2: ASYNCHRONOUS JAVASCRIPT (PROMISE, ASYNC/AWAIT)
Câu 6: Thứ tự in ra của đoạn code sau là gì?
console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');


A. 1, 2, 3 
B. 1, 3, 2 => Đáp án
C. 2, 1, 3 
D. 3, 1, 2


=======================================================
Câu 7: Trạng thái ban đầu của một Promise khi vừa được khởi tạo là gì? 
A. Resolved 
B. Rejected 
C. Pending  => Đáp án
D. Fulfilled

=======================================================
Câu 8: Từ khóa await chỉ có tác dụng khi được đặt trong một hàm có từ khóa nào? 
A. static 
B. sync 
C. async => Đáp án
D. promise

=======================================================
Câu 9: Khi dùng Promise.all([p1, p2, p3]), nếu p1 bị lỗi (reject) thì kết quả trả về là gì? 
A. Trả về kết quả của p2 và p3. 
B. Trả về lỗi của p1 ngay lập tức và hủy bỏ việc đợi các Promise còn lại. => Đáp án
C. Đợi tất cả xong rồi mới báo lỗi. 
D. Trả về undefined.

=======================================================
Câu 10: Làm thế nào để bắt lỗi (error handling) khi sử dụng cú pháp async/await? 
A. Dùng .catch() ở cuối hàm async. 
B. Dùng cấu trúc try...catch bọc quanh đoạn code await. 
C. Dùng câu lệnh if (error). 
D. Cả A và B đều đúng.  => Đáp án

=======================================================
Câu 11: Sự khác biệt giữa Microtask (Promise) và Macrotask (setTimeout) trong Event Loop là gì? 
A. Macrotask luôn chạy trước Microtask. 
B. Microtask luôn chạy trước Macrotask sau khi Call Stack trống. => Đáp án
C. Cả hai chạy cùng lúc (song song). 
D. Microtask chỉ chạy nếu Macrotask bị lỗi.

console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');
Thứ tự chạy:
1 (sync)
4 (sync)
3 (microtask - Promise)
2 (macrotask - setTimeout)

=======================================================
PHẦN 3: OBJECT-ORIENTED PROGRAMMING (CLASS, OOP)
Câu 12: Để tạo một thực thể (Object) từ một Class, ta sử dụng từ khóa nào? 
A. create 
B. make 
C. new => Đáp án
C. Cả hai chạy cùng lúc (song song). 
D. this


=======================================================
Câu 13: Hàm nào được tự động gọi ngay khi một đối tượng được khởi tạo từ Class? 
A. init() 
B. start() 
C. constructor() => Đáp án
D. main()

=======================================================
Câu 14: Tính chất nào của OOP cho phép một Class con kế thừa các thuộc tính và phương thức từ Class cha? 
A. Encapsulation 
B. Inheritance  => Đáp án
C. Polymorphism 
D. Abstraction

=======================================================
Câu 15: Từ khóa super() trong Class con có tác dụng gì? 
A. Để kết thúc một Class. 
B. Để gọi hàm khởi tạo (constructor) của Class cha.  => Đáp án
C. Để tăng tốc độ xử lý của Class. 
D. Để bảo mật dữ liệu.


=======================================================
Câu 16: Làm thế nào để khai báo một thuộc tính là Private (riêng tư) trong ES6 Class? A. Sử dụng từ khóa private. 
B. Sử dụng dấu gạch dưới _ ở trước tên biến (quy ước). 
C. Sử dụng dấu # ở trước tên biến (chuẩn ES6+). 
B. Để gọi hàm khởi tạo (constructor) của Class cha.  => Đáp án
D. Cả B và C (tùy vào tiêu chuẩn dự án).


=======================================================

Câu 17: Tính Đa hình (Polymorphism) trong Automation Testing được thể hiện rõ nhất khi nào? 
A. Khi một hàm login() được viết lại để chạy trên cả Web và Mobile.  
B. Để gọi hàm khởi tạo (constructor) của Class cha.  => Đáp án
B. Khi ta dùng super() để gọi cha. 
C. Khi ta dùng biến private để giấu Selector. 
D. Khi ta dùng async/await để đợi trang load.


=======================================================
Câu 18: Phương thức static trong một Class có đặc điểm gì? 
A. Phải khởi tạo đối tượng bằng new mới gọi được. 
B. Có thể gọi trực tiếp từ tên Class mà không cần tạo đối tượng.   => Đáp án
C. Không thể chứa logic xử lý. 
D. Chỉ dùng được cho các biến số.


=======================================================
Câu 19: Tại sao trong Page Object Model (POM), người ta thường dùng tính Trừu tượng (Abstraction)?  => Đáp án
A. Để giấu các Selector phức tạp và chỉ cung cấp các hàm nghiệp vụ dễ hiểu (như login, checkout). 
B. Để code chạy nhanh hơn. 
C. Để tiết kiệm bộ nhớ RAM. 
D. Để không phải dùng async/await.


=======================================================
Câu 20: Trong Class, từ khóa this đại diện cho điều gì? 
A. Đại diện cho Class cha. 
B. Đại diện cho chính thực thể (đối tượng) hiện tại đang được thao tác.   => Đáp án
C. Đại diện cho biến toàn cục. 
D. Đại diện cho hàm constructor.