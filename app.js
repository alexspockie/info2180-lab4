function initpage(){
	var sbutton=document.getElementsByClassName("btn")[0];
	sbutton.addEventListener("click",search);
}
function search(event){
	event.preventDefault(); //must prevent default
	var httpRequest = new XMLHttpRequest();//making object
	//set ajax response before opening and sending
  httpRequest.onreadystatechange=function(){searchPhp(httpRequest);};
  httpRequest.open("GET","superheroes.php",true); //create request
  httpRequest.send(); //sending request
  //alert(httpRequest.status);
}
function searchPhp(httpRequest){
	
	//alert(httpRequest.status +" "+httpRequest.readyState);
	//note the captial S in readyState
	if (httpRequest.readyState=== 4){

		if(httpRequest.status===200){
			var response=httpRequest.responseText;
			alert(response);
		}
		else{
			alert("Problem");
		}
	}
	
}



document.addEventListener("DOMContentLoaded",function(){
	initpage();
});