// function greet(namee,age,branch){
//   let a="hii my name is "+namee+" My age is "+age+" My branch is "+ branch;
//   return a;
// }
// console.log(greet('Smita',19,'CSE'));

// function as expression
// const res=function greet(namee,age,branch){
//   let a="hii my name is "+namee+". My age is "+age+".  My branch is "+ branch;
//   return a;
// }
// console.log(res('Smita',19,'CSE'));

// const info=()=>{
//   console.log("hii my name is Smita .My age is 19. My branch is CSE");
// };
// info();

// function info(str="hii"){
//   console.log("hello "+str);
// }
// info();

// function info(str="hii"){
//   console.log("hello "+str);
// }
// info("mystr");
 
// IIFE immediately invoked function expression
// (function(){
//   console.log("immediately invoked")
// }
// ());

// (() => {
//   console.log("immediately invoked with arrow func")
// })();

// setTimeout(function(){console.log("hii")},1000);

function selectLanguage(lang="def"){
  let data;
  if(lang=='java'){
    function javaCompiler(){
      return "javaCompiler calling";
    }
    data =javaCompiler();
  }
  else if(lang=='c'){
    function cCompiler(){
      return "c compiler calling ";
    }
    data=cCompiler();
  }
  else if(lang=='def'){
    return "default language";
  }
  else{
    data="language not supported";
  }
  return data;
}

console.log(selectLanguage("java"));
console.log(selectLanguage("c"));
console.log(selectLanguage());
console.log(selectLanguage("python"));