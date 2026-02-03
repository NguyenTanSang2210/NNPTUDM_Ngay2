// ===== Câu 1: Constructor function Product =====
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// ===== Câu 2: Khởi tạo mảng products (ít nhất 6 sản phẩm, 2 danh mục) =====
const products = [
    new Product(1, "Laptop Lenovo", 25000000, 10, "Máy tính", true),
    new Product(2, "iPhone 15pro", 20000000, 5, "Điện thoại", true),
    new Product(3, "SAMSUNG S24Ultra", 30000000, 0, "Điện thoại", true),
    new Product(4, "Chuột Attack Shark", 120000, 20, "Chuột", true),
    new Product(5, "Bàn Dareu", 350000, 8, "Bàn phím", false),
    new Product(6, "Smart watch SamSung", 50000, 12, "Đồng hồ thông minh", true)
];

// Hiển thị kết quả
const output = document.getElementById("output");
function log(title, data) {
    output.textContent += `\n${title}\n`;
    output.textContent += JSON.stringify(data, null, 2) + "\n";
}

// ===== Câu 3: Tạo mảng mới chỉ chứa name, price =====
const namePriceList = products.map(p => ({
    name: p.name,
    price: p.price
}));
log("Câu 3 - Name & Price:", namePriceList);

// ===== Câu 4: Lọc sản phẩm còn hàng (quantity > 0) =====
const inStockProducts = products.filter(p => p.quantity > 0);
log("Câu 4 - Sản phẩm còn hàng:", inStockProducts);

// ===== Câu 5: Có ít nhất 1 sản phẩm giá trên 30.000.000 không =====
const hasExpensiveProduct = products.some(p => p.price > 30000000);
log("Câu 5 - Có sản phẩm > 30.000.000:", hasExpensiveProduct);

// ===== Câu 6: Tất cả sản phẩm Accessories có đang bán không =====
const accessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);
log("Câu 6 - Accessories đang bán:", accessoriesAvailable);

// ===== Câu 7: Tính tổng giá trị kho =====
const totalInventoryValue = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
);
log("Câu 7 - Tổng giá trị kho:", totalInventoryValue);

// ===== Câu 8: Dùng for...of in ra thông tin =====
output.textContent += "\nCâu 8 - for...of:\n";
for (const p of products) {
    output.textContent += `${p.name} - ${p.category} - ${p.isAvailable}\n`;
}

// ===== Câu 9: Dùng for...in in tên thuộc tính & giá trị =====
output.textContent += "\nCâu 9 - for...in:\n";
for (const key in products[0]) {
    output.textContent += `${key}: ${products[0][key]}\n`;
}

// ===== Câu 10: Danh sách tên sản phẩm đang bán và còn hàng =====
const sellingInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
log("Câu 10 - Sản phẩm đang bán & còn hàng:", sellingInStockNames);
