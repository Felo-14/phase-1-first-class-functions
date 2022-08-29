function receivesAFunction(myfunc){
    return myfunc();
}
 
function returnsANamedFunction(){
    return function named(){
        return "Hey There"
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return "Hey There"
    }
}