function initpage(){
	var sbutton=document.getElementsByClassName("btn")[0];
	sbutton.addEventListener("click",search);
}
function search(event){
	event.preventDefault(); //must prevent default
	var httpRequest = new XMLHttpRequest();//making object
	var query=document.getElementById("query");

	//set ajax response before opening and sending
  httpRequest.onreadystatechange=function(){searchPhp(httpRequest,query);};
  httpRequest.open("GET","superheroes.php?q="+query.value,true); //create request
  httpRequest.send(); //sending request
}
function searchPhp(httpRequest,query){
	
	//alert(httpRequest.status +" "+httpRequest.readyState);
	//note the captial S in readyState
	if (httpRequest.readyState=== 4){

		if(httpRequest.status===200){
			var response=httpRequest.responseText;

			var result=document.getElementById("result");
			//alert(response);
			result.innerHTML=response;

			//alert(response);
		}
		else{
			alert("Problem");
		}
	}
	
}



document.addEventListener("DOMContentLoaded",function(){
	initpage();
});