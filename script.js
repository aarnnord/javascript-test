(function() {
	
 var elems =document.getElementsByTagName("input");

for(var i=0;i<elems.length;i++)
{
    if(elems[i].type=="submit" && elems[i].name =="Submit")
    {
        elems[i].click();        
        break;
    }
}
})();