const userInput = 256;
const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
function factorizer (num,i){
    return num/i;
}
for(i of prime);{
    
}
 /* 1] ek aisa loop jo input number ko leta hai
    2] use prime k members se devide karta hai, 
    3] unme se jo numbers se input number 0 
    remainder k sath devide ho woh 1st array me save hoga
    --> ab sabhi factors pane k liye ek number ko ek se jyada bar b devide karna pad sakta hai
    4] to uske liye 1st array k jo members hai unme se hi aage us number k factors hone wale hai
    to unme se har ek number  ko devide karenge jab tak reaminder 0 na aajye */