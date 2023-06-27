//first

function obj (a, b){
    if(a === b){
        return "ტოლია"
    }else{
        return "არ არის ტოლი"
    }
    
}

console.log(obj (10, 10))


//second

function toCelsius(num){
    if(num === num){
        return ((num-32)*5)/9
    }
}

console.log(toCelsius(25));

//third

function operation(a, b){
    if(typeof a,b === "string"){
        return false
    }else{
        return (a+b)
    }
}

console.log(operation(3, 5));
