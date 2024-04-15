console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

// function addItem(item){
//     if (isFull){}
// }

function addItem(item){
    if(basket.length < maxItems){
    basket.push(item);
    console.log('added', item);
    return true
    }  else if(isFull() === true){
        console.log(`Can not add, ${item}`);
        return false;
    }
}
addItem('apple');
addItem('berries');
addItem('book');
addItem('flakes');
addItem('bottle');
addItem('chair');


function listItems(){
    for(let i = 0; i < basket.length; i ++){
        console.log(basket[i]);
    }
    return true;
}

function removeItem(item){
    basket.indexOf(item)
    basket.splice(basket.indexOf(item), 1);
    if(){
    return item;
    } else if()
}
console.log(removeItem('eggs'));
console.log(basket);


function empty(){
    basket.splice(0, basket.length);
}
empty(basket);
console.log(basket.length);

function isFull(){
    if (basket.length < maxItems){
        return false;
    }
    else{
        return true;
    }
}


// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
