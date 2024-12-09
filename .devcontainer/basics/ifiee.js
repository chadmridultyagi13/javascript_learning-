// IMMEDIATELY INVOKED FUNCTION EXPRESSION , -> USED TO PREVENT THE POLLUTION OF GLOBAL SCOPE AND ALSO USE TO CALL FUNCTION IMMEDIATELY
// ()(); -> pehle bracket ke andar function declare karna hai , and dusre bracket ke andar parameters of that function bhejne hai, basically second bracket calling ke liye hai AND HAMESHA SECOND BRACKET KE BAAD SEMICOLOUMN LAGANA HAI VARNA ARROW FUNCTION KO PATA NHI KI CONTEXT ROKHNA KAHA HAI 
/* (function chai(){
console.log(`DB CONNECTED`) ;                -> named iife
})(); */ // this is the way
 // now arrow function 
 /* (() => {
    console.log("DB CONNECTED TWO")          -> named iife
    
    })();
*/
