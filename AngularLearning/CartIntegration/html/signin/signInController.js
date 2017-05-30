(function(){
	
	function singInUser(utilSvc){
			var mc=this;
			mc.user={};
			//mc.countries=utilSvc.getCountries();
			
			
			mc.alphaPattern=utilSvc.getAlphaPattern;
			alert("hi");
			 utilSvc.getJSONCountries()
			.then(function(response){
			
				// console.log(response);
				mc.countries=response.data.countries;
				
			})
			.catch(function(errorResponse){
				 console.log(errorResponse);			
			}); 
			
			
			
			
			
	};
	
	
	angular.module("signIn",[]);
	angular.module("signIn").controller("signInCtrl",["utilService",singInUser]);
})();