
function isEven(no) {
    if (no % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function isOdd(a) {

    return a % 2 !== 0;


}

function isPrime(x) //5
{
    let flag = true;
    for (let i = 2; i < x; i++) {
        if (x % i == 0) {
            flag = false;
            break
        }
      
    }
    return flag

}
// console.log(isPrime(5));


function isDisarium(no) //135
{
    let no1 = no;
    let count = 0;
    let no2 = no;
    let sum = 0;

    while (no1 != 0) {
        no1 = Math.floor(no1 / 10);
        count++
    }
    while (no2 != 0) {
        let rem = no2 % 10;
        sum += Math.pow(rem, count)
        count--;
        no2 = Math.floor(no2 / 10)

    }
    if (sum == no) {
        return true;
    }
    else {
        return false;
    }
}


function isArmStrong(no)  //153
{
    let no1 = no;
    let no2 = no;
    let sum = 0;
    let count = 0;

    while (no1 != 0) {
        no1 = Math.floor(no1 / 10);
        count++;
    }
    while (no2 != 0) {
        let rem = Math.floor(no2 % 10);
        sum += Math.pow(rem, count);
        no2 = Math.floor(no2 / 10);
    }
    // console.log(sum);
    // console.log(no)
    if (sum == no) {
        return true;
    }
    else {
        return false;
    }

}
// isArmStrong(153)

 //Strong number
function isFactorial(no) {
    let fact = 1;
    for (let i = no; i >= 1; i--) {
        fact = fact * i;
    }
   return fact
}

function isStrong(no)   //145
{
  
    let sum = 0;
    while (no != 0) {
        let rem = no % 10;
        sum += isFactorial(rem);
        no = Math.floor(no / 10);

    }
console.log(sum);
if(sum==no)
{
    return true;
}
else{
    return false;
}

}
// isStrong(145);

// //Happy number
// function isHappy(no)
// {
//     let sum=0
// while(no!=0)
// {
//     let rem = no%10;
//         sum+= rem*rem;
//         no =  Math.floor(no/10);
    
// }
// return sum;


// }
// // let no =13
// while(no>9)
// {
//  no = isHappy(no);

//  if(no==1 || no==7)
//  {

//     return no;
//  }
//  else{
   
// return no;
//  }

// }


let btn = document.querySelector("button");
let inp = document.querySelector("input");
let opt = document.querySelector("#options");
let h2 = document.querySelector("h2");

btn.addEventListener("click", () => {
    let getValue = inp.value;
    //   console.log(getValue);
    let sOpt = opt.options[opt.selectedIndex].value;
    console.log(sOpt)


    if (sOpt === "isEven") {
        if (isEven(getValue)) {
            let msg = `${getValue} is an even number`;
            h2.innerHTML = msg;

        } else {
            let msg = `${getValue} is not even number`;
            h2.innerHTML = msg;
        }
    }
    else if (sOpt === "isOdd") {
        if (isOdd(getValue)) {
            let msg = `${getValue} is an odd number`;
            h2.innerHTML = msg;
        }
        else {
            let msg = `${getValue} is not odd number`;
            h2.innerHTML = msg;
        }
    }
    else if (sOpt == "isPrime") {
        if (isPrime(getValue)) {
            let msg = `${getValue} is a prime number`
            h2.innerHTML = msg;
        }
        else {
            let msg = `${getValue}is not a prime number`;
            h2.innerHTML = msg;
        }
    }
    else if (sOpt == "isDisarium") {
        if (isDisarium(getValue)) {
            let msg = `${getValue} is a desarium number`
            h2.innerHTML = msg;
        }
        else {
            let msg = `${getValue} is not a desarium number`;
            h2.innerHTML = msg;

        }
    }

    else if (sOpt == "isArmstrong") {
        if (isDisarium(getValue)) {
            let msg = `${getValue} is a Armstrong number`;
            h2.innerHTML = msg;
        } else {
            let msg = `${getValue} is a not Armstrong number`
            h2.innerHTML = msg;
        }
    }

    else if(sOpt=="isStrong")
    {
        if(isStrong(getValue))
        {
              let msg = `${getValue} is a Strong number`;
              h2.innerHTML= msg;
        }
        else{
          let msg =  `${getValue} is not a strong number`;
            h2.innerHTML =msg;
        }
    }

else if(sOpt=="isHappy")
{
    
    if(isHappy(getValue))
    {
        let msg = `${getValue} is a Happy number`
        h2.innerHTML = msg;
    }
    else{
        let msg = `${getValue} is not happy number`
        h2.innerHTML =msg;
    }
}


}








)


