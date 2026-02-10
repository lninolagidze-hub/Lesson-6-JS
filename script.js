// დავალება 4.1
// შექმენით მასივი ნებისმიერი ტიპის და რაოდენობის ელემენტებით. 
// ეკრანზე გამოიტანეთ ამ მასივის სიგრძე.

// პასუხი:
// let arr= ["nino", "sky", 15 ];
// alert(arr.length);
// console.log(arr.length)



// დავალება 4.2
// მოცემულია მასივი arr. ინდექსის გამოყენებით მასივს დაამატეთ 
// ახალი ელემენტი 'd', ხოლო რიგით მეორე
// ელემენტი ჩაანაცვლეთ 'x'-ით.
// let arr = ['a', 'b', 'c'];


// პასუხი:


// let arr1= ["a", "b", "c" ];
// arr1.push("d");
// arr1["1"]="x";
// alert(arr1);
// console.log(arr1)









// დავალება 4.3
// მოცემულია ცარიელი მასივი arr. მეთოდი .push-ის გამოყენებით მასივს 
// დაამატეთ ახალი ელემენტები 'a', 'b'
// და 'c'.
// let arr = [];


// პასუხი:

// let arr = [];
// arr.push("a")
// arr.push("b")
// arr.push("c")
// arr.push("d")
// alert(arr)
// console.log(arr)







// 2 | P a g e
// დავალება 4.4
// მოცემულია მასივი arr და ცვლადები key1, key2.
// key1-ის ინდექსის მქონე მასივის ელემენტს მიუმატეთ key2 
// ინდექსის მასივის ელემნტი და შედეგი კონსოლზე
// გამოიტანეთ.
// let arr = [1, 2, 3, 4, 5];
// let key1 = 1;
// let key2 = 2;

// პასუხი:

// let arr = [1, 2, 3, 4, 5];
// let key1 = 1;
// let key2 = 2;

// let key3=arr[key1]+arr[key2]
// alert(key3)
// console.log(key3)




// დავალება 4.5
// მოცემულია მასივი arr. ოპერატორი delete-ით წაშალეთ მასივის 
// რიგით მე-2 და მე-4 ელემენტები. კონსოლზე
// გამოიტანეთ ჯერ მასივის სიგრძე და მერე თვით ეს მასივიც. 
// შეიცვალა თუ არა მასივის სიგრძე?
// let arr = ['a', 'b', 'c', 'd', 'e'];


// პასუხი:

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(4,1);
// arr.splice(2,1)
// alert(arr)
// console.log(arr)




// დავალება 4.6
// მოცემულია მასივი names. დაასორტირეთ მასივი ჯერ ანბანის თანმიმდევრობით, შემდეგ საწინააღმდეგოდ.
// შედეგები გამოიტანეთ ეკრანზე. 
// let names = ['ხვიჩა', 'გოგა', 'მაკა', 'ანა', 'ინა']

// პასუხი:

// let names = ['ხვიჩა', 'გოგა', 'მაკა', 'ანა', 'ინა']

// names.sort();
// alert(names)
// console.log(names)
// names.reverse();
// alert(names)
// console.log(names)




// დავალება 4.6
// მოცემულია კოდი, რომელმაც კონსოლზე უნდა გამოიტანოს მასივის ბოლო ელემნტი. აღმოაჩინეთ შეცდომა
// კოდში.
// let arr = [11, 22, 33, 44, 55];
// console.log(arr[arr.length]);


// პასუხი: ბოლო ელემენტი უნდა იყოს სიგრძეს მინუს ერთი






// დავალება 4.7
// მოცემულია კოდი, რომელმაც კონსოლზე უნდა გამოიტანოს მასივის სიგრძე. აღმოაჩინეთ შეცდომა კოდში.
// let arr = {10, 11, 12, 13, 14};
// console.log(arr.length]);

// პასუხი: { ეს არაა მასივისთვის, მასივისთვის უნდ აგამოვიყენოთ []

// let arr = [10, 11, 12, 13, 14];

// length ოის მერე არაა საჭირო ]


// console.log(arr.length);





// 3 | P a g e
// დავალება 4.8
// მოცემულია კოდი, რომელმაც კონსოლზე უნდა გამოიტანოს მასივის სიგრძე. აღმოაჩინეთ შეცდომა კოდში.
// let arr = [10, 11, 12, 13, 14];
// console.log(arr.lenght);

// პასუხი: length უნდა იყო და არა  lenght


// დავალება 4.9
// შექმენით ფუნქცია getBlankArray ისე, რომ მან დააბრუნოს ცარიელი მასივი.

// function getBlankArray() {return [];}
// let arr = getBlankArray();
// console.log(arr)
// alert(arr)

// დავალება 4.10
// შექმენით ფუნქცია getNumOfComponents ისე, რომ მან დააბრუნოს მასზე გადაცემული components მასივის
// ელემენტების რაოდენობა.
// let arr=[1,2,3,4,5,6,7,8]

// function getNumOfComponents(arr) {return arr.length}

// let number=getNumOfComponents(arr)

// console.log(number)
// alert(number)


// დავალება 4.11
// განსაზღვრეთ ისრული ფუნქცია priceSum, რომელიც დააბრუნებს მასზე გადაცემული ფასების მასივის ჯამს.

// let prices=[100,200,300]

// function priceSum(prices) {return prices[1]+prices[2]+prices[0] }

// let sum=priceSum(prices)
// alert(sum)
// console.log(sum1)


// or 



// function priceSum1(prices) {
//     let sum = 0;
//     for (let i = 0; i < prices.length; i++) {
//         sum += prices[i]; 
//     }
//     return sum;
// }

// let sum1=priceSum(prices)
// alert(sum1)
// console.log(sum1)






// დავალება 4.12
// შექმენით ფუნქცია addBoll ისე, რომ მან დაამატოს "ბურთი" მასზე გადაცემულ toys მასივს და დააბრუნოს
// იგივე მასივი.
// let toys = ['ოვერბორდი', 'პაზლი', 'Lego'];

// pasukhi:

// let toys = ['ოვერბორდი', 'პაზლი', 'Lego']

// let ball="ბურთი"

// function addball(toys) {toys.push(ball); return (toys);}



// let updatedToys = addball(toys);
// console.log(updatedToys); 
// alert(updatedToys); 










// დავალება 4.13
// მოცემულია მასივი toys და ცვლადი toy. შექმენით ფუნქცია addToy, 
// რომელსაც გადაეცემა პარამეტრებად
// ცვლადი toy და მასივი toys. ფუნქციამ უნდა დააბრუნოს toys მასივი, 
// რომელშიც დამატებული იქნება toy
// ცვლადის მნიშვნელობა.
// let toys = ['ოვერბორდი', 'პაზლი', 'Lego'];
// let toy = 'Yo-yo';

// პასუხი:

let toys = ['ოვერბორდი', 'პაზლი', 'Lego'];
let toy = 'Yo-yo';

function addToy(toy, toysArray) {
    toysArray.push(toy); 
    return toysArray;
}

alert(addToy(toy, toys));
console.log(addToy(toy, toys))


// დავალება 4.14

// შექმენით ფუნქცია getLastToy, ისე რომ დააბრუნოს მასზე გადაცემული 
// მასივის ბოლო ელემენტი.

?

// function getLastToy(toysArray) {
//     return toysArray[toysArray.length - 1];
// }

