alert("Uyqingiz kelmasa, keling qo'ylar sonini sanaymiz")
var sheep = +prompt("Qo'ylar sonini kiriting")
while(isNaN(sheep) || sheep==0){
    sheep = +prompt("Xato! Iltimos, qaytadan urinib, son kiriting")
}

let sum = " ta qo'y"
for (let i = 1; i<=sheep; i++) {
 sum = i + sum
console.log(sum);
sum = " ta qo'y"}

// masalan, sheep =5
//i=1 1<=5 sum= 1 ta qo'y
//i=2 2<=5 sum = 21ta qo'y
//i=3 3<=5 sum = 321 ta qo'y
//i=4 4<=5 sum = 4321 ta qo'y
//i=5 5<=5 sum = 54321 ta qo'y
//i=6 6<=5 shart bajarilmadi, sikl to'xtadi,
//korganimizdek, sum ozgaruvchiga har safar oldiga son qoshilib ketyapti, uni oldini olish uchun sum =" ta qo'y" ga tenglab qo'yamiz