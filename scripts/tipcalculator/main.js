(() => {
	var notDecimalPattern = /[^0-9\.,]/g;
	//var decimalPattern = /([0-9]+)([\.]?)([0-9]{0,2})/g;
	var allInputs = document.querySelectorAll("input");	
	var tipButtons = document.querySelectorAll("[data-tip-percent]");
		
	allInputs.forEach((input)=>{
		input.addEventListener("input", (event)=>{
			var inputValue = event.target.value;
			var foundAlpha = inputValue.match(notDecimalPattern);
			
			if(foundAlpha != null && foundAlpha.length > 0){
				event.target.value = inputValue.replace(foundAlpha,"");
			}
		});
	});
	
	tipButtons.forEach((button)=>{
		button.addEventListener("click", (event)=>{
			var billAmountElement = document.querySelector("#txtBillAmount");
			
			if(billAmountElement.value !== ""){
				var billAmount = parseFloat(billAmountElement.value);
				var tipPercent = parseInt(event.target.getAttribute("data-tip-percent"));
				
				var tipAmount = calculateTip(billAmount, tipPercent);
				var total = calculateTotal(billAmount, parseFloat(tipAmount));
				
				displayTip(tipAmount);
				displayTotalBill(total);
			}			
		});
	});
	
	function calculateTip(billAmount, tipPercent){		
		return (billAmount * (tipPercent * 0.01)).toFixed(2);
	}
	
	function calculateTotal(billAmount, tipAmount){		
		return (billAmount + tipAmount).toFixed(2);
	}
	
	function displayTip(tipAmount){
		document.querySelector("#lblTip").innerHTML = `Tip Amount: $${tipAmount}`;
	}
	
	function displayTotalBill(total){
		document.querySelector("#lblFullBill").innerHTML = `Bill + Tip: $${total}`;
	}
	
})();