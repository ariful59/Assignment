// You have an array like “ var x = [ 10, 20, 30] “ 
// Now sum all those items using for loop. The sum Result is 60.

var x = [10, 20, 30];
function approchOne() {
    var sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    console.log(sum);
}

function approchTwo(){
    var sum = 0;
    for(let i of x){
        sum+=i;
    }
    console.log(sum);
}

function approchThree(){
    var sum = 0, i = 0;
    while(i < x.length){
        sum+=x[i];
        i++;
    }
    console.log(sum);
}

var result = () => {
    let sum = 0;
    for(let i of x){
        sum+= i;
    }
    return sum;
};

approchOne();
approchTwo();
approchThree();
console.log(result());


