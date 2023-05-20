// creation
var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("placeholder","Enter a number")
input.setAttribute("type","text") ;
input.setAttribute("id","books");

var button=document.createElement("button");
button.setAttribute ("type","button");
button.setAttribute("class","btn btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);
let name=document.createElement("div");
name.setAttribute("id","name");

let isbn=document.createElement("div");
isbn.setAttribute("id","isbn");

let pages=document.createElement("div");
pages.setAttribute("id","pages");

let au=document.createElement("div");
au.setAttribute("id","au");

let pub=document.createElement("div");
pub.setAttribute("id","pub");

let rel=document.createElement("div");
rel.setAttribute("id","rel");

let count=document.createElement("div");
count.setAttribute("id","count")



div.append (input,button,name,isbn,pages,au,pub,rel,count);
document.body.append(div);
// input source
async function foo(){
    
let res=document.getElementById("books").value;
var url=`https://anapioficeandfire.com/api/books/${res}`;
try{
let result=await fetch(url);
let result1=await result.json();

//display 
console.log(result1.name);
name.innerHTML= `Book Name :${result1.name}`;
isbn.innerHTML= `Isbn:${result1.isbn}`;
pages.innerHTML= `Number Of Pages:${result1.numberOfPages}`;
au.innerHTML= `Authors of book:${result1.authors}`;
pub.innerHTML= `Publisher:${result1.publisher}`;
rel.innerHTML= `Released:${result1.released}`;
count.innerHTML=`country:${result1.country}`;


}
catch (error) {
    console.log(error);
    

   }
  
}

