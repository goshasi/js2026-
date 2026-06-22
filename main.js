/*
🐠🐠1️⃣ Mini Project 1: Simple Profile

Create variables:

- name
- age
- country
- favoriteLanguage
- hobbies array


Print a profile like this:

---
Name: ShasiAge: 20Country: LebanonFavorite Language: JavaScriptHobbies: coding, design, reading
---
*/
let name = "shasi", age = "50";
let country = "syria";
let [favoriteLang, hobbies] = ["chainese", ["arabicCalligraphy", "reding", "sleeping", "pet keeping"]];

console.log("-".repeat(3));
console.log(`name: ${name} age: ${age} country: ${country} favoriteLanguage: ${favoriteLang} hobbies: ${hobbies.join(", ")}`);
console.log("-".repeat(3));
//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
/*
🐠🐠2️⃣ Mini Project 2: Simple Receipt

Create:

```
let item1 = "Laptop";let price1 = 500;let item2 = "Mouse";let price2 = 20;let item3 = "Keyboard";let price3 = 40;
```

Print:

- each item with its price
- total price
- total price after tax
*/
let item1 = "laptop";
let item2 = "mouse";
let item3 = "keyboard";

let price1 = 500;
let price2 = 20;
let price3 = 40;
console.log(`
    item: ${item1} --> price:${price1}  
    item: ${item2} --> price:${price2}
    item: ${item3} --> price:${price3}
    `);
let total = price1 + price2 + price3;
console.log("total price: " + total);

let tax = total * 0.10;
console.log("total price after tax: " + (total + tax));

//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
/*
🐠🐠3️⃣ Mini Project 3: Playlist Manager

Create an array:

```
let playlist = [];
```

Then:

- add 3 songs
- remove the last song
- add a song to the beginning
- print the final playlist
- print how many songs are in the playlist */

let nasheeds = ["x1", "x2", "x3"];
// Ai review: nasheeds.pop(2); pop func. didnt take any parameters its alrady remove last param.
//  لذلك كتابة رقم 2 بداخلها ليس له تأثير ولا حاجة له.
nasheeds.pop();
console.log(nasheeds);
nasheeds.unshift("y1");
console.log(nasheeds);
console.log(nasheeds.length);
//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
/*
🐠🐠4️⃣ Mini Project 4: Word Game

Create variables:

```
let noun = "cat";let verb = "runs";let adjective = "cute";let place = "garden";
```

Print a funny sentence using all variables.

Example:

```
The cute cat runs in the garden.
```
 */
let noun = "cat";
let verb = "runs";
let adjective = "cute";
let place = "garden";
console.log(`the ${adjective} ${noun} ${verb} in the ${place}.`);

/*
تقييمي لك هو 8.5 من 10! 🚀⬆️

نقاط القوة (9.5/10): استخدام ذكي ومتقدم للـ Destructuring والـ Template Literals، وكود نظيف وحسابات دقيقة للضرائب.

نقاط تحتاج تحسين (-1.5): تمرير قيمة داخل دالة ()pop (وهي لا تأخذ وسائط)، وعدم الالتزام الحرفي بتنسيق المخرجات وأسماء المتغيرات المطلوبة.
*/
//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
console.log("*".repeat(30));
/*
# Arrays
🐠🐠5️⃣ Challenge 9: Favorite Foods

Create an array with 5 favorite foods.

Print:

- the first food
- the last food
- the array length

*/

let favFood = ["pizza", "healthy food", "poteto", "mama's food", "jubun"];
console.log(favFood[0]);
console.log(favFood[favFood.length - 1]);
console.log(favFood.length);
//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀

/*
🐠🐠6️⃣ Challenge 10: Update Array Item

Create:

```
let colors = ["red", "blue", "green"];
```

Change `"blue"` to `"purple"`.

Print the new array.
 */
let colors = ["red", "blue", "green"];
colors[1] = "purple";
console.log(colors);
//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
/*
🐠🐠7️⃣Challenge 11: Shopping Cart

Create an empty array called `cart`.

Then:

- add 3 items using `push()`
- remove the last item using `pop()`
- add one item to the beginning using `unshift()`
- remove the first item using `shift()`

Print the cart after every step. */
let cart = [];
cart.push("x1", "x2", "x3");
console.log(cart);
cart.pop();
console.log(cart);
cart.unshift("y1");
console.log(cart);
cart.shift();
console.log(cart);

//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
/*
🐠🐠8️⃣Challenge 12: Nested Array

Create an array of students:

```
let students = [  ["Sara", 18],  ["Mona", 20],  ["Ali", 22]];
```

Print:

```
Mona is 20 years old
```

using array indexes. */
let students = [["Sara", 18], ["Mona", 20], ["Ali", 22]];
console.log(`${students[1][0]} is ${students[1][1]} years old.`);
//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀


/*⬆️
### 1️⃣ التحدي 9: Favorite Foods

كودك سليم جداً، ولكن في الإصدارات الحديثة من JavaScript (ES2022 وما بعدها)، يمكنك استخدام دالة `.at()` لجلب العناصر من النهاية بسهولة دون الحاجة لكتابة اسم المصفوفة مرتين:

* **كودك الحالي:** `favFood[favFood.length - 1]`
* **بديل احترافي:** `favFood.at(-1)` (الرقم `-1` يعني العنصر الأول من النهاية).

### 2️⃣ التحدي 10: Update Array Item

* **تعديل ممتاز:** قمت بتغيير القيمة مباشرة عبر الـ Index وهو الحل الأسرع والأفضل دائماً للتعديل المباشر.

### 3️⃣ التحدي 11: Shopping Cart

* **تطبيق رائع:** تتبع دقيق للمطلوب، واستخدامك للدوال `pop` و `shift` بدون تمرير أي قيم داخل الأقواس يدل على أنك استوعبت الملاحظة السابقة تماماً.

### 4️⃣ التحدي 12: Nested Array

* **الوصول للمصفوفة ثنائية الأبعاد:** دقيق جداً وذكي.
* `students[1]` أعطاك المصفوفة `["Mona", 20]`.
* `[0]` أعطاك الاسم، و `[1]` أعطاك العمر.



---

### 🏆 التقييم النهائي لهذا الجزء:

**10 من 10!** 🌟
تجنبت كل الأخطاء السابقة، وكتبت كوداً نظيفاً، ومنظماً، ويعمل بكفاءة عالية. استمر بهذا التركيز!يبدو أنك قمت بإعادة إرسال نفس الكود السابق تأكيداً على مراجعته، وكما أخبرتك قبل قليل، الكود **ممتاز وخالٍ من الأخطاء تماماً**!

ولكن لكي تستفيد أكثر، إليك بعض الإضافات والتحسينات البسيطة (Best Practices) التي تجعل كودك أكثر احترافية:

---

### 1️⃣ التحدي 9: Favorite Foods

كودك سليم جداً، ولكن في الإصدارات الحديثة من JavaScript (ES2022 وما بعدها)، يمكنك استخدام دالة `.at()` لجلب العناصر من النهاية بسهولة دون الحاجة لكتابة اسم المصفوفة مرتين:

* **كودك الحالي:** `favFood[favFood.length - 1]`
* **بديل احترافي:** `favFood.at(-1)` (الرقم `-1` يعني العنصر الأول من النهاية).

### 2️⃣ التحدي 10: Update Array Item

* **تعديل ممتاز:** قمت بتغيير القيمة مباشرة عبر الـ Index وهو الحل الأسرع والأفضل دائماً للتعديل المباشر.

### 3️⃣ التحدي 11: Shopping Cart

* **تطبيق رائع:** تتبع دقيق للمطلوب، واستخدامك للدوال `pop` و `shift` بدون تمرير أي قيم داخل الأقواس يدل على أنك استوعبت الملاحظة السابقة تماماً.

### 4️⃣ التحدي 12: Nested Array

* **الوصول للمصفوفة ثنائية الأبعاد:** دقيق جداً وذكي.
* `students[1]` أعطاك المصفوفة `["Mona", 20]`.
* `[0]` أعطاك الاسم، و `[1]` أعطاك العمر.



---

### 🏆 التقييم النهائي لهذا الجزء:

**10 من 10!** 🌟
تجنبت كل الأخطاء السابقة، وكتبت كوداً نظيفاً، ومنظماً، ويعمل بكفاءة عالية. استمر بهذا التركيز! */




/*
# Strings

🐠🐠9️⃣Challenge 5: Full Name

Create:

```
let firstName = "Shasi";let lastName = "Something";
```

Print the full name.
 */
let firstName = "Shasi";
let lastName = "Something";
console.log(firstName + " " + lastName);
//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
/*
🐠🐠🔟Challenge 6: Sentence Builder

Create variables:

```
let language = "JavaScript";let goal = "build websites";
```

Print:

```
I am learning JavaScript because I want to build websites.
```
 */
let language = "JavaScript";
let goal = "build websites";
console.log(`I am learning ${language} bcs. I wanna ${goal}`);
//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
/*
🐠🐠1️⃣1️⃣😶👽Challenge 7: String Length

Create a variable:

```
let message = "I love coding";
```

Print how many characters it has.
*/
let message = "I love coding";
message.slice();
console.log(message);
//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
/*
🐠🐠1️⃣2️⃣Challenge 8: First and Last Character

Create a word and print:

- first character
- last character

Example:

```
JavaScriptFirst: JLast: t
``` */
let firstChar = "Javascrip", lastChar = "t";
console.log(firstChar + lastChar);

//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀


console.log("*".repeat(30));
//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
/*
#👽🦜 Level 1 — Variables & Math

## Challenge 1: Age Calculator

Create variables:

- `birthYear`
- `currentYear`

Calculate the age and print:


You are 20 years old
 */
let birthYear = 2003, currentYear = 2026;
console.log(-(birthYear - currentYear));//unary
//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
/*
## Challenge 2: Price With Tax

Create:

let price = 100;
let tax = 0.11;

Print the final price after tax.
 */
let price = 100;
let tax0 = 0.11;
console.log(price + (price * tax0));
//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
/*
Challenge 3: Minutes to Seconds

Create a variable for minutes and convert it to seconds.

Example:

5 minutes = 300 seconds
 */
let min = 5;
let sec = min * 60;
console.log(sec);
//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
/*
 Challenge 4: Remainder Check

Create a number and check the remainder when divided by 2.

Print the result.

Example:

The remainder is 1
 */
let number = 51;
console.log(number % 2);
//🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀🦀
let hi = "jello word";
hi[0] = "h";
let firstLetter = hi[0];
console.log(firstLetter);
console.log("*".repeat(30));
//(⌐■_■) SCOPES & BOOLEAN VAL. & İF STATEMENT & EQUALİTY OPERATOR 
/*
Level 4 — if Statements & Booleans
1️⃣Challenge 1: Age Checker
إذا العمر 18 أو أكثر:
You can vote.
غير ذلك:
You cannot vote yet.
*/
let agee = 10;
if (agee >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote yet.");
}
console.log("*".repeat(30));
/*2️⃣Challenge 2: Even or Odd
اطبع إذا الرقم زوجي أو فردي.
*/
let numberİf = 3;
if (numberİf % 2) {
    console.log("the num is Odd");
} else {
    console.log("the num. is Even.");
}
console.log("*".repeat(30));
/*.3️⃣Challenge 3: Free Shipping
إذا كان المبلغ أكبر أو يساوي 100:
You qualify for free shipping.
    وإلا:
Add more items.
*/
let Shipping = window.prompt("Enter ur total Shipping!", 2500);
if (Shipping >= 100) {
    console.log("You qualify for free shipping.");
} else {
    console.log("Add more items.");
}
/*3️⃣ التحدي الثالث: Free Shipping
التقييم: 6/10
الملاحظات: 1.  دالة window.prompt() تعيد دائماً القيمة كـ نص (String) وليس كـ رقم 
(Number). مقارنة النصوص مع الأرقام قد تسبب مشاكل أحياناً. الأفضل دائماً تحويل المدخلات إلى رقم باستخدام Number() أو parseInt().
2.  تسمية المتغير Shipping غير دقيقة، فالمدخل هنا هو "إجمالي المبلغ" أو "السعر"، فالأفضل تسميته totalPrice أو amount. */
/*
# Level 5 — Equality Operators
4️⃣Challenge 4: Password Check
إذا كانت كلمة المرور صحيحة:
Access granted
غير ذلك:
Access denied
*/
let pass = window.prompt("Enter ur password!", "jack");
if (pass === "jack") {
    console.log("Access granted");
} else {
    console.log("Access denied");
}
/*
5️⃣Challenge 5: Strict Equality
جرّب:
5 === "5"
5 == "5"
true === 1
واكتب النتيجة وفسرها. 
*/
if (5 === "5") {
    console.log("it returns false. cuse the type not the same first one number, other one is a string");
} else if (5 == "5") {
    console.log("is true cuse here we dont have strict equalty and that mean we dont comparing a type.");
} else {
    console.log("true === 1 as we're comparing type+value we have boolean on the other hand we have num and all this equals false");
}

/*
6️⃣Challenge 6: Favorite Color

إذا كان اللون المفضل:

blue

اطبع:

Great choice! */
let favColor = "yellow";
if (favColor === "blue") {
    console.log("Great choice!");
} else {
    console.log("retry");
}
/*
7️⃣Challenge 7: Greeting Function
greet(name)
تطبع:
Hello, Hamed!*/

function Greeting(name) {
    return "hello" + " " + name;
}
console.log(Greeting("Khaled"));
/*
8️⃣Challenge 8: Sum Function
add(a, b)
ترجع المجموع.
 */
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));

/*
9️⃣Challenge 9: Larger Number
findLarger(a, b)
ترجع الرقم الأكبر.
*/
function findLarger(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }

}
console.log(findLarger(10, 20));
/*
🔟Challenge 10: Even Checker Function
isEven(number)
ترجع:
true
أو:
false 
const isEven = number => number % 2 ? console.log("yes this is Even Number.") : console.log("false");

console.log(isEven(36)); 


في السطر الخاص بك: number % 2 ? ... : ...
إذا كان الرقم زوجياً (مثل 36)، فإن 36 % 2 تعطي 0.
 وفي JavaScript،
  الرقم 0 يُعامل كـ False.
   لذلك سينتقل الكود مباشرة إلى الجزء الثاني
 بعد النقطتين ويفذ console.log("false"). 
أي أن كودك الحالي يقول عن الرقم الزوجي أنه false!



هنا المفاجأة: في JavaScript، أي نص يحتوي على حروف أو أرقام (حتى لو كان "0") يعتبر Truthy (صحيح) في الشروط. النص الوحيد الذي يعتبر False هو النص الفارغ "".

بناءً على ذلك، الشرط تحقق دائماً واعتبره True، فطبع لك "yes this is Even Number.".

ولكن ماذا لو جربت رقماً فردياً مثل 37؟

37 % 2 تعطي 1.

تتحول إلى النص "1".

النص "1" يعتبر أيضاً Truthy (صحيح)!

النتيجة: الكود سيطبع "yes this is Even Number." حتى مع الأرقام الفردية! (جرب بنفسك وسترى).
const isEven = number => (number % 2).toString() ? " yes this is Even Number." : "false";
console.log(isEven(36));
*/
const isEven = number => number % 2 === 0 ? true : false;
console.log(isEven(36));

// العمليات الشرطية مثل === ترجع تلقائياً true أو false،
// فلا حاجة لكتابة if أو ? : على الإطلاق!
const isEven2 = number => number % 2 === 0;

console.log(isEven2(7));  // سيطبع: false
/*

Mini Project 1: Grade Checker

Function:

checkGrade(score)
90+ → A
80+ → B
70+ → C
60+ → D
أقل → F
*/

function checkGrade(score) {
    switch (true) {
        case score >= 90:
            return "A";
            break;
        case score >= 80:
            return "B";
            break;
        case score >= 70:
            return "C";
            break;
        case score >= 60:
            return "D";
            break;
        case score < 60:
            return "F";
    }
}
console.log(checkGrade(59));
/*
Mini Project 2: Simple Calculator
اعمل Functions:
add()
subtract()
multiply()
divide()
*/
function calculator(a, b) {
    function sum(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a < b ? b - a : a - b;//في الآلات الحاسبة العادية، لو طلب المستخدم 10 - 20 يجب أن تظهر له -10.
    }
    function multiply(a, b) {
        return a * b;
    }
    function divide(a, b) {
        //دالة القسمة (divide): نسيت إضافة حماية "القسمة على صفر" التي تحدثنا عنها في المنطق سابقاً.
        return b === 0 ? "cannot divide by zero!" : a / b;

    }
    console.log(sum(10, 20));
    console.log(subtract(10, 20));
    console.log(multiply(10, 20));
    console.log(divide(10, 20));
}
calculator(10, 20);
/*
Mini Project 3: Movie Ticket
canWatchMovie(age)
إذا العمر 18 أو أكثر → مسموح.
*/
function canWatchMovie(age) {
    return age >= 18 ? "ok" : "noooo";
}
console.log(canWatchMovie(30));
console.log(canWatchMovie(10));