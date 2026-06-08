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
#👽 Level 1 — Variables & Math

## Challenge 1: Age Calculator

Create variables:

- `birthYear`
- `currentYear`

Calculate the age and print:


You are 20 years old
 */
let birthYear = 2003, currentYear = 2026;
console.log(birthYear - currentYear);
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