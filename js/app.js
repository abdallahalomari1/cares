alert("welcome to my website");
var username =prompt("please enter your favarate car small car or large car");
while( username!=='small'&& username!=='large')
{ 
   username=prompt("please enter your favarate car small car or large car");
}
if(username=="small"){

 var image1='<img src="img/2.jpg"alt="smallcar"/>';
document.write(image1);

}
if(username=="large"){

var image2='<img src="https://images.honestjohn.co.uk/imagecache/file/width/640/media/11844111/volvo-xc90-1.jpg"alt="largecar"/>';
document.write(image2);

} 
var number= prompt("how many car favarate");

for(var i=0;i<number;i++)
{
  var image2='<img src="https://images.honestjohn.co.uk/imagecache/file/width/640/media/11844111/volvo-xc90-1.jpg"alt="largecar"/>';
   document.write(image2);
}

 