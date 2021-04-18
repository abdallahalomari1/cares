alert("welcome to my website");
var typecar =prompt("please enter your favarate car small car or large car"+'small or large');
console.log(typecar);
while( typecar!=='small'&& typecar!=='large')
{ 
   typecar=prompt("please enter your favarate car small car or large car");
}
if(typecar=="small"){

 var image1='<img src="img/2.jpg"alt="smallcar"/>';
document.write(image1);

}
if(typecar=="large"){


document.write('< img src="https://images.honestjohn.co.uk/imagecache/file/width/640/media/11844111/volvo-xc90-1.jpg"alt="largecar"alt="large car">');

} 
var number= prompt("how many car favarate");

for(var i=0;i<number;i++)
{
  var image2='<img src="https://images.honestjohn.co.uk/imagecache/file/width/640/media/11844111/volvo-xc90-1.jpg"alt="largecar"/>';
   document.write(image2);
}
//function decleration
function favcar (car){
var userchoice=prompt('do you like '+car+'?');
}
favcar('limzon');
// function expression
var favcar2= function(car){
var userchoice =prompt('do you like'+car+'?');
return userchoice ;
}
var rusult= favcar2('Toyota');
console.log(rusult);

 