/*var n = 1;

while(n <= 100){
    if(n%3==0 && n%5==0){
        console.log(n + 'FizzBuss');
    }else if(n%5==0){
        console.log(n + 'Buzz');
    }else if(n%3==0){
        console.log(n + 'Fizz');
    }
    n++
}*/

for (var i=1; i < 101; i++){
    if(i % 3 == 0){
        console.log("Fizz");
    }else if(i % 5 == 0){
        console.log("Buzz");
    }else console.log(i);
}