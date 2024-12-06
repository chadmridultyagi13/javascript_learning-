/*function saymyname(){
console.log("mridul") ;
}
-> function declaration
saymyname() -> calling/execution of the function
*/
// ek cheez hai -> 3 + null -> 3 , 3 + "a" - > 3a (yaha 3 ko string ki tarah treat kiya jayega) 
// jab ham values hi pass nhi karte as a arguement , and function ke andar voh as  a parameter hai , then we get undefined 
/* function loginusermessage(username){
if(username===undefined){
console.log("pls enter a username")
return }
return ` ${username} has just logged in ` 
}
console.log(loginUserMessage())
output -> please enter a username 
          undefined -> CAME DUE TO RETURN 
*/
// UNDEFINED,EMPTY STRING ETC KO IF ELSE KE ANDAR, BY DEFAUFLT FALSE MAANTE HAI 
// EK DEFAULT VALUES KA BHI SCENE HAI, we can pass default values 
// kaafi baar situation hoti hai ki kitne no of arguements pass karenge yeh bata nhi hota , isliye we have to adjust our parameters accordingly 
/* so pata nhi hai kitne parameters hai we use rest operator ... (situation wise it can be called as spread operator as well as rest operator)
 function calculateCartPrice(num1){
  return num1 
 }
    ... -> use to pack the values in the bundle 
    function fg(num1,num2 , ...num3){
    return num3 
    }
    console.log(fg(12,13,14,15,16)) -> [14,15,16](array aayega)
*/
// how to use objects in function->
/* const user = {
username : "hitesh"
prices : 199 
}
function handleobject(anyobject){
 console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`)  -> mannle prices ki jagah price likh diya object ke andar then. yaha print undefined hoga prices waali jagah 
 -> direct object bhi pass kar sakte hai as the arguement 

}
*/
