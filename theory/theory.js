

// const numbers = [1,2,3,5];
// const sort_numbers = numbers.sort(function(a, b) {
//     return b - a;
// });

// console.log(sort_numbers);


// const names = ["Vladimir", "Elena", "Igor", "Andry"];


// console.log(names.splice(0, 2));
// console.log(names);


// const greatWoman = "Elena";
// console.log(names.indexOf(greatWoman));
// console.log(names[names.indexOf(greatWoman)]);
// const newNames = names.with(names.indexOf(greatWoman), "Елена Великая");
// console.log(names);
// console.log(newNames);
// console.log(names);


// const capitalNames = names.map((name, index) => {
//     if (index === 1) {
//         return "Elena Great";
//     }
//     return name.toUpperCase();
// });

// console.log(capitalNames);

// console.log(names.includes("q"));




// const people = [
//     {name: "Vladimir", budget: 4200},
//     {name: "Elena", budget: 45200},
//     {name: "Igor", budget: 1200},
//     {name: "Andry", budget: 84200},
// ];


// console.log();

// let finededPerson;

// for (let person of people) {
//     if (person.budget === 84200) {
//         finededPerson = person;
//     } 
// }


// console.log(finededPerson);

// const findedPerson = people.find((person) => {
//     return person.budget === 84200;

// });
// console.log(findedPerson);


// const findedPerson = people.findIndex((person) => person.budget === 84200);
// console.log(people.with(findedPerson, {
//     name: "Dot",
//     age: 14,
//     budget: 99999999
// }));


// const filtered = people.filter((p) => {
//     return p.budget > 4200;
// });
// console.log(filtered);

// -------------------

// let sumBudget = 0;

// const filtered = people.filter((p) => {
//     return p.budget > 4200;
// });
// filtered.forEach((p) => {
//     sumBudget += p.budget;
// });
// console.log(sumBudget);


// const sumBudget = people
//     .filter((p) => p.budget > 4200)
//     .map((p) => p.budget)
//     .reduce((acc, p) => acc + p, 0)

// console.log(sumBudget);


// const string = "Привет, как дела?";
// const reversed = string
//             .split("")
//             .toReversed()
//             .join("")
//             .split()
//             .filter(s => s !== "!")
//             .join("");
// console.log(reversed);


// const num = 42;  // integer
// const float =  42.2;
// const pow = 2e3;
// const big = 1_000_000;


// // console.log(Math.pow(2, 3) - 1);

// // console.log(Number.POSITIVE_INFINITY);
// // console.log(Number.NEGATIVE_INFINITY);
// // console.log(1/0);

// const weird = 44;
// console.log(true ? !Number.isNaN(weird) : false);


// const strInt = "44";
// const strFloat = "44.44";

// // console.log(parseInt(strInt));
// // console.log(Math.ceil(parseFloat(strFloat)));
// console.log(+strInt, +strFloat);

// console.log(+((0.1 + 0.2).toFixed(1)));

// BigInt


// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 31927312719312231n);



// function

// function declaration
// function greet(name) {
//     console.log(name);
// }
// greet("Hello");
// // function expression
// const greet = (name) => console.log(name);

// // setTimeout(()=>{
// //     greet("Ivan");
// // }, 1500);

// // let link = `https://youtube.com`

// let count = 0;
// const interval = setInterval(() => {
//     if (count === 5) {
//         clearInterval(interval);
//     }
//     else {
//        console.log(count++);
//     }

// }, 1000);



    
// const arrow = (name, surname) => console.log(`${name} ${surname}`); 
// arrow("Ivan", "Pechalov");

// const pow = (number, exp) => Math.pow(number, exp);

// let r = pow(2, 3);
// console.log(r);


// Default parameters 
// const sum = (a=0, b=0) => a + b;
// console.log(sum(40, 2));
// console.log(sum(40));






// const comments = [
//     {
//      id: 1,
//      authorName: 'Глеб Фильтеровский',
//      authorRating: 5404,
//      text: 'Присоединяюсь, из трех функций понял только filter!'
//    },
//    {
//      id: 2,
//      authorName: 'Иван Редьюсов',
//      authorRating: 348,
//      text: 'Используйте console.log для отладки и сами все поймете!'
//    },
//    {
//      id: 3,
//      authorName: 'Анна Мэп',
//      authorRating: 1892,
//      text: 'Посмотрите гайды на YouTube, там все объясняется.'
//    },
//    {
//      id: 4,
//      authorName: 'Анна Мэп',
//      authorRating: 1892,
//      text: 'Кстати, использовать console.log — отличная идея!'
//    },
//    {
//      id: 5,
//      authorName: 'Иван Редьюсов',
//      authorRating: 348,
//      text: 'Если вы приложите ревью, нам будет проще вам помочь.'
//    },
//  ];


//  const filtered_comments = comments.filter((comment) =>{
//     return comment.authorRating > 348 && comment.text.length > 10;
//  });

//  console.log(filtered_comments);


// const binArr = [100101, 1000111001, 10110010];

// const changedArray = binArr.map((num) => {
//     let lenghtN = num.toString();
//     let result = "";
//     for (let i = 0; i < lenghtN; i++) {
//         result += num % 2;
//         num /= 10; 
//     }
//     return result;
    
// });

// console.log(changedArray);

// const arrText = comments.map((comment) => comment.text);
// console.log(arrText);

// const numbers = [1,2,3];
// const factorial = (item) => {
//     let j = 1;
//     for (let i  = 1; i <= item; i++) {
//         j *= i;
//     }
//     return j;
// }
// const factArr = numbers
// .map((item) => factorial(item))
// .filter((item) => item % 2 == 0);

// console.log(factArr);



// function sumAll(...numbers) {
    
// }

// function sumNum(... numbers) {    
//     return numbers.reduce((acc, item)=>acc + item, 0)
// }

// console.log(sumNum(1,2,3,4,5));



// closures

// surnames = ["Pechalov", "Gribkov", "Rusanov"];




// const createPerson = (name) => {
//     return (surname) => {
//         console.log(`${name} ${surname}`);
//     };
// }

// const addLastName = createPerson("Ivan");


// for (surname of surnames) {
//     addLastName(surname);
// }



// Objects 


const person = {
    name: "Ivan",
    age: 18,
    isTikTok: false,
    adress: {
        ciy: "Moscow",
        street: "Nevsky"
    },
    "complex key": "complex value",
    [1 + 2]: "computed value",
    great() {
        console.log("Greet from person");
    },
    arrow: () => {
        console.log(`this is an arrow function`);
    },
    info() {
        console.log(`Person -> ${this.name}\nAge -> ${this.age}`);
    },
    
};

// const name = "W"

// const {age, name:firstName} = person
// console.log(firstName, age);


// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(person[key]);
//     }
// }


// Object.keys(person)
//     .forEach(key => console.log(person[key]));


// const logger = {
//     keys(withText=true) {
//         if (withText) {
//             console.log("Object keys", Object.keys(this));
//         }
//         else {
//             console.log(Object.keys(this));
//         }
//     },
//     keysAndValue() {
//         Object.keys(this).forEach(key => {
//             console.log("Value", this[key]);
//         })
//     }
// }

// // logger.keys.bind(person)();
// // bound();

// // logger.keys.call(person, false);
// // logger.keys.apply(person, []);


// logger.keys.bind(person)(true);


// class Human {
//     isHuman = true;

//     run() {
//         console.log("run");
//     }
//     jump() {
//         console.log("jump");
//     }
//     walk() {
//         console.log("walk");
//     }
//     eat() {
//         console.log("eat");
//     }
// }


// class Person extends Human {
    
//     constructor (name, age, job) {
//         super();
//         this.name = name;
//         this.age = age;
//         this.job = job;
//     }

//     getInfo() {
//         console.log(`${this.name} ${this.age} ${this.job}`)
//     }

//     getName() {
//         return this.name;
//     }
//     getAge() {
//         return this.age;
//     }
//     setAge(age) {
//         if (age > 0 && age < 120) {
//             this.age = age;
//         } else {
//             this.age = 1;
//         }
//     }

//     static sayHello() {
//         console.log("Hello");
//     }

//     toString() {
//         return `${this.name} ${this.age}`
//     }
// }

// Person.sayHello()

// const p = new Person("Ivan", 18, "programmist");
// p.getInfo();
// p.setAge(24);
// p.run()
// console.log(p.getAge());

// console.log(p.toString())


// async




// setTimeout(() => {
//     console.log("1")
// }, 1000);

// for (let i = 0; i < 10; i++) {
//     console.log(`for ${i}`)
    
// }


// const timeout =  setTimeout(() => {
//         console.log("1");
//     }, 1000);

// clearTimeout(timeout)

// setTimeout(() => {
//     console.log("2")
// }, 3000);

// setInterval(() => {
//     console.log("tick")
// }, 1000)



// function delay(callback, time=1000) {
//     setTimeout(callback, time);
// }


// delay(() => {
//     console.log("timeout");
// }, 3000)


// const delay = (time = 1000) => {
//     const p = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([1, 2, 3]);
//             // reject("Error in delay")
//         }, time);
//     });
//     return p;
// }

// delay(2500)
// .then((data) => {
//     return data.map((x) => x ** 2);   
// }).then((data) => console.log(data))
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("Finally");
// })



const getData = () => new Promise((resolve) => {
    return resolve([1,2,34])
});

// getData().then(array => console.log(array));

async function asyncExample(time = 1000) {
    
    await sayHello(5);
    const data = await getData();
    try {
        console.log(data);
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("finally")
    }
    
}

asyncExample(3000)

function sayHello(count) {
    for (let i = 0; i < count; i++) {
        console.log(`Hello ${i}`)
    }
}







