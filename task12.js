let cart=[
    {name: "T-shirt", price: 20, quantity: 2},
    {name: "Shoes", price: 50, quantity: 1},
     {name: "Cap", price: 10, quantity: 3}
]
let total=0

cart.forEach(item => {
  total += item.price * item.quantity;
});
console.log("Total Price:", total);

// question no 2 solution 


let cart2 = [
  {name: "T-shirt", price: 20, quantity: 2},
  {name: "Shoes", price: 50, quantity: 1},
  {name: "Cap", price: 10, quantity: 3}
];

let total2 = 0;

// Calculate total price
cart.forEach(item => {
  total2 += item.price * item.quantity;
});

// Apply 10% discount
let discount = total * 0.10;
let finalPrice = total - discount;

console.log("Total Price:", total2);
console.log("Discount (10%):", discount);
console.log("Final Price after coupon:", finalPrice);


// 1. Online Store ki Cart (Array of Objects)
let cart3 = [
  { name: "T-shirt", price: 20, quantity: 2 }, // 40
  { name: "Shoes", price: 50, quantity: 1 },   // 50
  { name: "Cap", price: 10, quantity: 3 }      // 30
];

let subtotal = 0;

// 2. Har item ki total price nikal kar subtotal mein jama (add) karna
cart3.forEach(item => {
  subtotal += item.price * item.quantity;
});

// 3. 18% Tax calculate karna (18% = 0.18)
let taxRate = 0.18;
let taxAmount = subtotal * taxRate;

// 4. Final Bill (Subtotal + Tax)
let totalBill = subtotal + taxAmount;

// Output display karna
console.log("Subtotal: $" + subtotal);
console.log("Tax (18%): $" + taxAmount.toFixed(2));
console.log("Total Bill (including tax): $" + totalBill.toFixed(2));


// 1. User ka data (Weight in kg, Height in meters)
let weight = 70; // kg
let height = 1.75; // meters (e.g., 5 feet 9 inches approx)

// 2. BMI Calculate karna (Formula: weight / height^2)
// Hum ** operator use kar rahe hain power ke liye
let bmi = weight / (height ** 2);

// 3. Result ko format karna (Decimal ke baad 2 numbers tak)
let finalBMI = bmi.toFixed(2);

// 4. Output dikhana
console.log("Weight: " + weight + " kg");
console.log("Height: " + height + " m");
console.log("Calculated BMI: " + finalBMI);

// 5. BMI Category batana (If-Else ka istemal)
if (finalBMI < 18.5) {
    console.log("Category: Underweight");
} else if (finalBMI >= 18.5 && finalBMI <= 24.9) {
    console.log("Category: Normal Weight");
} else {
    console.log("Category: Overweight");
}


// 1. Aapki mahine ki tankhwa aur tax kitna katna hai
let salary = 50000;    // Mahine ki salary
let taxRate_1 = 0.10;    // 10% tax (yani 0.10)

// 2. Tax ki raqam nikalain
let taxAmount_1= salary * taxRate; 

// 3. Salary mein se tax nikal (minus) dein
let finalSalary = salary - taxAmount;

// Result check karein
console.log("Asli Salary: " + salary);
console.log("Tax Kat Gaya: " + taxAmount);
console.log("Hath mein aane wali Salary: " + finalSalary);


// 1. Panch alag alag users ki ratings
let user1 = 5;
let user2 = 4;
let user3 = 5;
let user4 = 3;
let user5 = 4;

// 2. Pehlay tamam ratings ko jama (add) karein
let sum = user1 + user2 + user3 + user4 + user5;

// 3. Phir total numbers (5) se divide karein
let average = sum / 5;

// Result check karein
console.log("Total Ratings Sum:", sum); // 21
console.log("Average Rating:", average); // 4.2

// 1. Order ki total amount
let orderAmount = 450; // Aap yahan koi bhi rakam likh kar check kar sakti hain
let deliveryCharge = 0;

// 2. Condition lagana (Check karna)
if (orderAmount < 500) {
    // Agar order 500 se kam hai, to 50 Rs delivery charge lagega
    deliveryCharge = 50;
    console.log("Aapka order 500 se kam hai, is liye delivery fee lagegi.");
} else {
    // Agar order 500 ya us se zyada hai, to delivery free
    deliveryCharge = 0;
    console.log("Mubarak ho! Aapko free delivery mili hai.");
}

// 3. Final Bill calculate karna
let totalBill_2 = orderAmount + deliveryCharge;

// Results dikhana
console.log("Order Amount: " + orderAmount);
console.log("Delivery Fee: " + deliveryCharge);
console.log("Total Bill: " + totalBill_2);



// 1. Details (Inputs)
let principal = 10000;  // Asli raqam (Jitne paise bank mein jama kiye)
let rate = 5;           // Saalana interest ki sharah (5%)
let time = 2;           // Kitne saal ke liye (2 saal)

// 2. Simple Interest ka formula lagana
// Formula: (P * R * T) / 100
let interest = (principal * rate * time) / 100;

// 3. Final amount nikalna (Asli raqam + Interest)
let totalAmount = principal + interest;

// Results dikhana
console.log("Asli Raqam (Principal): " + principal);
console.log("Kitne saal (Time): " + time);
console.log("Interest Rate: " + rate + "%");
console.log("----------------------------");
console.log("Sirf Interest kitna bana: " + interest);
console.log("Total wapas milne wali raqam: " + totalAmount);



// 1. Shuruati raqam (Starting Balance)
let accountBalance = 10000; 

// 2. Kitne paise nikalne hain (Withdrawal Amount)
let withdrawAmount = 2500;

// 3. Baqi bachi hui raqam nikalna (Minus operator)
let remainingBalance = accountBalance - withdrawAmount;

// Results dikhana
console.log("Pehlay balance tha: " + accountBalance);
console.log("Itne paise nikale: " + withdrawAmount);
console.log("Ab account mein bache hain: " + remainingBalance);


// 1. Total minutes jo convert karne hain
let totalMinutes = 130; 

// 2. Ghantay (Hours) nikalna
// 1 ghantay mein 60 minutes hotay hain
let hours = Math.floor(totalMinutes / 60);

// 3. Baqi bache huye minutes nikalna (Modulo operator %)
let remainingMinutes = totalMinutes % 60;

// Results dikhana
console.log("Total Minutes: " + totalMinutes);
console.log("Result: " + hours + " Hours and " + remainingMinutes + " Minutes");


// ================================
//   LOGIN SYSTEM
// ================================

// Correct username and password
let correctUsername = "admin";
let correctPassword = "1234";

// User input (change these to test)
let enterUsername = "admin";
let enterPassword = "1234";

// Check login
if (enterUsername === correctUsername && enterPassword === correctPassword) {
  console.log("✅ Login Successful! Welcome, " + enterUsername);
} else if (enterUsername !== correctUsername) {
  console.log("❌ Wrong Username!");
} else {
  console.log("❌ Wrong Password!");
}
// ================================
//   WEBSITE AGE RESTRICTION CHECK
// ================================

// User age (change this to test)
let userAge = 20;

// Check age
if (userAge >= 18) {
  console.log("✅ Access Granted! Welcome to the website.");
} else {
  console.log("❌ Access Denied! You must be 18 or older.");
  console.log("🔞 Sorry, you are " + userAge + " years old. Come back later!");
}

// ================================
//   DISCOUNT SYSTEM
// ================================

// Order amount (change this to test)
let orderAmount1 = 250;

// Check discount
if (orderAmount1 > 200) {
  let discount = orderAmount1 * 20 / 100;
  let finalPrice = orderAmount1 - discount;
  console.log("🛒 Order Amount1 : $" + orderAmount1);
  console.log("🎉 Discount     : 20% = $" + discount);
  console.log("✅ Final Price  : $" + finalPrice);
} else if (orderAmount > 100) {
  let discount = orderAmount1 * 10 / 100;
  let finalPrice = orderAmount1 - discount;
  console.log("🛒 Order Amount1 : $" + orderAmount1);
  console.log("🎉 Discount     : 10% = $" + discount);
  console.log("✅ Final Price  : $" + finalPrice);
} else {
  console.log("🛒 Order Amount1 : $" + orderAmount1);
  console.log("❌ No Discount  : Order must be above $100");
  console.log("✅ Final Price  : $" + orderAmount1);
}


// ================================
//   STUDENT GRADE SYSTEM
// ================================

// Student marks (change this to test)
let marks = 85;

// Check grade
if (marks >= 90) {
  console.log("📝 Marks  : " + marks);
  console.log("🏆 Grade  : A");
  console.log("✅ Result : Excellent!");
} else if (marks >= 75) {
  console.log("📝 Marks  : " + marks);
  console.log("🥈 Grade  : B");
  console.log("✅ Result : Good!");
} else if (marks >= 50) {
  console.log("📝 Marks  : " + marks);
  console.log("🥉 Grade  : C");
  console.log("✅ Result : Average!");
} else {
  console.log("📝 Marks  : " + marks);
  console.log("❌ Grade  : Fail");
  console.log("😢 Result : Better luck next time!");
}

// ================================
//   WEATHER ADVISORY SYSTEM
// ================================

// Weather condition (change this to test)
// Options: "hot", "cold", "rainy"
let weather = "hot";

// Check weather
if (weather === "hot") {
  console.log("🌤️  Weather   : Hot");
  console.log("🌡️  Advisory  : Drink lots of water");
  console.log("✅  Tip       : Wear light clothes & use sunscreen!");
} else if (weather === "cold") {
  console.log("❄️  Weather   : Cold");
  console.log("🧥  Advisory  : Wear warm clothes");
  console.log("✅  Tip       : Drink hot tea & stay indoors!");
} else if (weather === "rainy") {
  console.log("🌧️  Weather   : Rainy");
  console.log("☂️  Advisory  : Carry an umbrella");
  console.log("✅  Tip       : Wear raincoat & avoid going out!");
} else {
  console.log("❓  Weather   : " + weather);
  console.log("⚠️  Advisory  : Unknown weather condition!");
  console.log("✅  Tip       : Please enter hot, cold or rainy");
}
