var mylist=["cookies", "vegatables", "fruits"];
document.querySelector("#my-txt").innerHTML=mylist;
function adds(){
    var thing=document.querySelector("#A1").value;
    if(mylist.indexOf(thing)==-1){
mylist.push(thing);
document.querySelector("#my-txt").innerHTML=mylist;
    }
    else{
alert("You have already put this item.")
    }
}
function remover(){
    var thing=document.querySelector("#A1").value;
    if(mylist.indexOf(thing)>-1){
        mylist.pop();
       document.querySelector("#my-txt").innerHTML=mylist;
           }
        else{
       alert("You can't remove this item.")
          }
    }

