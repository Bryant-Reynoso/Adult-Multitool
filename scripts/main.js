
function init(){
	initEvents();
}

function initEvents(){
	var redirectElementList = document.querySelectorAll("[data-redirect]");
		
	redirectElementList.forEach((element)=>{
		element.addEventListener("click", (event)=>{
			var redirectValue = event.target.getAttribute("data-redirect");
			window.location.href = redirectValue;
		});
	});
	
}

