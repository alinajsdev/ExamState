
// 1
// const polidrome = (str) => {
//     const example = str.toString()
//     let check = ''
//     for(let i = example.length - 1; i >= 0; --i){
//         check += example[i]
//     }
//    return example == check ? true : false
// }

// console.log(polidrome(12321));



// 2

// const count = (str) => {
//     let vowels = 'ауоиэыяюе'
//     var consonants = 'бвгджзйклмнпрстфхцчщш'
//     let vcount = 0
//     let consonantsCount = 0

//     for ( i = 0; i < str.length; i++){
    
//         if(vowels.indexOf(str[i]) !== -1 ){
//           vcount += 1     
//         }else if(consonants.indexOf(str[i]) !== -1){
//             consonantsCount += 1
//         }
//     }
//     return `vowels : ${vcount} consonants : ${consonantsCount}`

// }
// console.log(count('рьориkjдоазцлузкщцузкшхла'));



// 3

// const year = (number) =>{
//     if(number % 4 === 0 && number % 100 !== 0 || number % 400 === 0){
//         return true
//     }else{
//         false
//     }
// }
// console.log(year(2020));



// 4
// var date1 = new Date("7/11/2010");
// var date2 = new Date("12/12/2010");

// var timeDiff = Math.abs(date2.getTime() - date1.getTime());
// var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
// console.log(diffDays);


// 5

// const areAnagrams = (str1, str2) => {
//     str1 = str1.replace(/\s+/g, '').toLowerCase();
//     str2 = str2.replace(/\s+/g, '').toLowerCase();
//     let sortStr1 = str1.split('').sort().join()
//     let sortStr2 = str2.split('').sort().join()

//    return sortStr1.length !== sortStr2.length ? false : true
// }

// console.log(areAnagrams('nap', 'pan'));

// 6 in the file html

// function generatePassword(){
// 	var length = 8,
// 	charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// 	res = '';
// 	for (var i = 0, n = charset.length; i < length; ++i) {
// 		res += charset.charAt(Math.floor(Math.random() * n));
// 	}
// 	return res;
// }
// console.log(generatePassword());


// 7

// function calculateInvestment(a, years) {
//     let rate = 10; // годовая процентная ставка
//     let finalAmount = a * Math.pow((1 + rate / 100), years);
//     return finalAmount.toFixed(0); // округление до 2 знаков после запятой
// }

// console.log(calculateInvestment(3000, 8));

// 8

// function count(inputString) {
//     // Убираем лишние пробелы в начале и конце строки, затем делим строку на слова
//     let words = inputString.trim().split(/\s+/);
//     // Возвращаем количество слов в массиве
//     return words.length;
// }


// 9
// function is_prime(num) {
//     if (num <= 1) return false; // 0 и 1 не являются простыми числами
//     if (num <= 3) return true; // 2 и 3 являются простыми числами

//     // Проверяем кратность 2 и 3
//     if (num % 2 === 0 || num % 3 === 0) return false;

//     // Проверяем кратность всех чисел от 5 до sqrt(num) с шагом 6 (проверка делителей вида 6k ± 1)
//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//     }

//     return true; // Число простое
// }

// // Пример использования
// let number = 8;
// console.log(`Число ${number} является простым: ${is_prime(number)}`);



// 10


// 11
// function isValidDate(day, month, year) {
//     // month в JavaScript начинается с 0, поэтому уменьшаем его на 1
//     month = month - 1;

//     // Создаем объект Date с указанными параметрами
//     let date = new Date(year, month, day);

//     // Проверяем, совпадают ли день, месяц и год
//     if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
//         return true;
//     } else {
//         return false;
//     }
// }



// 15
// function is_isogram(word) {
//     // Преобразуем слово в нижний регистр для игнорирования регистра
//     word = word.toLowerCase();
    
//     // Используем объект для хранения встреченных букв
//     let lettersSeen = {};
    
//     // Проходим по каждой букве в слове
//     for (let i = 0; i < word.length; i++) {
//         let letter = word[i];
//         // Если буква уже была встречена, возвращаем false
//         if (lettersSeen[letter]) {
//             return false;
//         }
//         // Иначе добавляем букву в объект
//         lettersSeen[letter] = true;
//     }
    
//     // Если не было повторяющихся букв, возвращаем true
//     return true;
// }

// 16


// function encodeString(input) {
//     // Создаем объект для замены букв на числа
//     const replacements = {
//         'а': '4',
//         'е': '3',
//         'и': '1',
//         'о': '0',
//         'с': '5'
//     };

//     // Проходим по каждому символу в строке
//     for (let letter in replacements) {
//         // Заменяем буквы на числа в строке
//         input = input.replace(new RegExp(letter, 'gi'), replacements[letter]);
//     }

//     // Возвращаем закодированную строку
//     return input;
// }

// // Примеры использования
// console.log(encodeString("Алексей")); // "4l3к53й"
// console.log(encodeString("искусство")); // "1ск5у55тв0"
// console.log(encodeString("программирование")); // "пр0гр4мм1р0в4н13"
// console.log(encodeString("Тестовое сообщение")); // "Т35т0в0е 50общение"



// 17
// var today = new Date()
// var day = today.getDay();
// var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log("Today is : " + daylist[day]);
// var hour = today.getHours();
// var minute = today.getMinutes();
// var second = today.getSeconds();
// var prepand = (hour >= 12)? " PM ":" AM ";
// hour = (hour >= 12)? hour - 12: hour;


// 18
// function numberToWords(number) {
//     const units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
//     const teens = ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
//     const tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];

//     if (number < 0 || number > 99 || !Number.isInteger(number)) {
//         return "Число должно быть положительным целым от 0 до 99.";
//     }

//     if (number === 0) {
//         return "ноль";
//     }

//     let words = '';

//     if (number >= 10 && number < 20) {
//         return teens[number - 10];
//     } else {
//         words += tens[Math.floor(number / 10)]; // Десятки
//         if (number % 10 !== 0) {
//             words += ' ' + units[number % 10]; // Единицы
//         }
//     }

//     return words.trim();
// }

// // Примеры использования
// console.log(numberToWords(5)); // "пять"
// console.log(numberToWords(20)); // "двадцать"
// console.log(numberToWords(37)); // "тридцать семь"
// console.log(numberToWords(99)); // "девяносто девять"



// 19
// function convertDateFormat(dateString) {
//     // Разделяем строку на части по разделителю "/"
//     let parts = dateString.split('/');
//     // Получаем день, месяц и год из разделенных частей
//     let day = parts[0];
//     let month = parts[1];
//     let year = parts[2];

//     // Формируем новую строку в формате "ГГГГММДД"
//     let formattedDate = year + month + day;

//     // Возвращаем отформатированную дату
//     return formattedDate;
// }

// // Пример использования
// console.log(convertDateFormat("25/12/2023")); // "20231225"
// console.log(convertDateFormat("3/5/2022"));    // "20220503"
// console.log(convertDateFormat("10/03/2021")); // "20210310"



// 20
// function areNumbersIncreasing(numbers) {
//     // Проходим по всем числам в списке, начиная со второго
//     for (let i = 1; i < numbers.length; i++) {
//         // Если текущее число меньше или равно предыдущему, значит, числа не возрастают
//         if (numbers[i] <= numbers[i - 1]) {
//             return false;
//         }
//     }
//     // Если все числа в списке возрастают, возвращаем true
//     return true;
// }

// // Пример использования
// console.log(areNumbersIncreasing([1, 3, 5, 7]));    // true
// console.log(areNumbersIncreasing([10, 7, 6, 5]));  // false
// console.log(areNumbersIncreasing([1, 2, 2, 4]));    // false
// console.log(areNumbersIncreasing([1, 2, 3, 4]));    // true


// 21
// function checkSlotMachine(arr) {
//     // Проверяем, что массив содержит ровно 4 элемента
//     if (arr.length !== 4) {
//         return false;
//     }

//     // Получаем первый элемент массива
//     const firstElement = arr[0];

//     // Проходим по всем элементам массива, начиная со второго
//     for (let i = 1; i < arr.length; i++) {
//         // Если текущий элемент не равен первому, возвращаем false
//         if (arr[i] !== firstElement) {
//             return false;
//         }
//     }

//     // Если все элементы равны, возвращаем true
//     return true;
// }

// // Пример использования
// console.log(checkSlotMachine([1, 1, 1, 1]));    // true
// console.log(checkSlotMachine([2, 2, 3, 2]));    // false
// console.log(checkSlotMachine(['a', 'a', 'a', 'a']));  // true
// console.log(checkSlotMachine(['apple', 'apple', 'apple', 'banana']));  // false


// 22
// function get_month(language, number) {
//     // Создаем объекты для хранения названий месяцев на разных языках
//     const months_ru = {
//         1: 'Январь', 2: 'Февраль', 3: 'Март', 4: 'Апрель', 5: 'Май', 6: 'Июнь',
//         7: 'Июль', 8: 'Август', 9: 'Сентябрь', 10: 'Октябрь', 11: 'Ноябрь', 12: 'Декабрь'
//     };
//     const months_en = {
//         1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June',
//         7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'
//     };

//     // В зависимости от языка, выбираем соответствующий объект с названиями месяцев
//     const months = (language === 'ru') ? months_ru : months_en;

//     // Проверяем, что переданный номер месяца находится в диапазоне от 1 до 12
//     if (number < 1 || number > 12) {
//         return 'Некорректный номер месяца';
//     }

//     // Возвращаем название месяца для переданного номера и языка
//     return months[number];
// }

// // Пример использования
// console.log(get_month('ru', 1)); // "Январь"
// console.log(get_month('en', 5)); // "May"
// console.log(get_month('ru', 15)); // "Некорректный номер месяца"


// 23
// function isMagicDate(day, month, year) {
//     // Получаем последние две цифры года
//     let lastTwoDigitsOfYear = year % 100;
    
//     // Проверяем, является ли день, умноженный на месяц, равным последним двум цифрам года
//     return day * month === lastTwoDigitsOfYear;
// }

// // Пример использования
// console.log(isMagicDate(10, 3, 60));   // true (10 * 3 = 60)
// console.log(isMagicDate(5, 6, 78));    // false (5 * 6 != 78)
// console.log(isMagicDate(12, 2, 96));   // true (12 * 2 = 96)


// 24
// function isPangram(text) {
//     // Создаем строку, содержащую все буквы алфавита
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     // Преобразуем текст в нижний регистр для унификации
//     text = text.toLowerCase();
//     // Проходимся по каждой букве в алфавите
//     for (let i = 0; i < alphabet.length; i++) {
//         // Если хотя бы одной буквы алфавита нет в тексте, возвращаем false
//         if (text.indexOf(alphabet[i]) === -1) {
//             return false;
//         }
//     }
//     // Если все буквы алфавита присутствуют в тексте, возвращаем true
//     return true;
// }

// // Пример использования
// const text = "The quick brown fox jumps over the lazy dog";
// console.log(isPangram(text)); // Выведет: true


// 25
// function is_pangram(text) {
//     // Создаем строку, содержащую все буквы алфавита
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     // Преобразуем текст в нижний регистр для унификации
//     text = text.toLowerCase();
//     // Проходимся по каждой букве в алфавите
//     for (let char of alphabet) {
//         // Если хотя бы одной буквы алфавита нет в тексте, возвращаем false
//         if (!text.includes(char)) {
//             return false;
//         }
//     }
//     // Если все буквы алфавита присутствуют в тексте, возвращаем true
//     return true;
// }

// // Пример использования
// const text = "The quick brown fox jumps over the lazy dog";
// console.log(is_pangram(text)); // Выведет: true


// 26
// function draw_triangle() {
//     const base = 15;
//     const height = 8;

//     // Верхняя часть треугольника
//     for (let i = 1; i <= height; i++) {
//         let row = '';
//         for (let j = 1; j <= base; j++) {
//             if (j >= (base / 2 + 1 - i) && j <= (base / 2 + i)) {
//                 row += '*';
//             } else {
//                 row += ' ';
//             }
//         }
//         console.log(row);
//     }
// }

// // Вызываем функцию для отрисовки треугольника
// draw_triangle();


// 27
// function calculatePoints(wins, draws, losses) {
//     // Победы дают 3 очка, ничьи дают 1 очко, поражения дают 0 очков
//     const points = (3 * wins) + (1 * draws) + (0 * losses);
//     return points;
// }

// // Пример использования
// const wins = 5;
// const draws = 3;
// const losses = 2;

// const totalPoints = calculatePoints(wins, draws, losses);
// console.log("Количество набранных очков:", totalPoints);


// 28
// const subtraction = (arr) => {
//     let sort =  arr.sort((a,b)=> a-b)
//     return sort.at(-1) - sort[0]
// }
// console.log(subtraction([4,5,6,2,8,9,100]));

// 30
// const cut = (string) => {
//     return string.substring(1, word.length - 1);
// }
// console.log(cut('ekfjnwekfnef'));

// 31
// const boolean = (string) => {

//     for (let index = 0; index < string.length; index++) {
//         if( string[index] === string[index - 1] ) {
//             return true
//         }
        
//     }

// return false
// }
// console.log(boolean('qerty'));

// 32
function checkPasswordComplexity(password) {
    let complexity = 0;

    // Проверяем длину пароля
    if (password.length >= 6) {
        complexity++;
    }

    // Проверяем, содержит ли пароль хотя бы одну цифру
    if (/[0-9]/.test(password)) {
        complexity++;
    }

    // Проверяем, содержит ли пароль хотя бы одну заглавную букву
    if (/[A-Z]/.test(password)) {
        complexity++;
    }

    // Проверяем, содержит ли пароль хотя бы одну строчную букву
    if (/[a-z]/.test(password)) {
        complexity++;
    }

    // Проверяем, содержит ли пароль хотя бы один из специальных символов
    if (/[!@#$%^&*()-+]/.test(password)) {
        complexity++;
    }

    return complexity;
}

// Пример использования
const password = "Password123!";
console.log("Сложность пароля:", checkPasswordComplexity(password));
