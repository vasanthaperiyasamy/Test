(function(){
	
	function singInUser(utilSvc){
			var mc=this;
			mc.user={};
			//this.countries=utilSvc.getCountries();
			
			
			mc.alphaPattern=utilSvc.getAlphaPattern;
			
			utilSvc.getJSONCountries()
			.then(function(response){
			
				 console.log(response);
				mc.countries=response.data.countries;
				
			})
			.catch(function(errorResponse){
				 console.log(errorResponse);			
			});
			
			
			
			
			//alert("hi");
	};
	
	
	angular.module("signIn",[]);
	angular.module("signIn").controller("signInCtrl",["utilService",singInUser]);
})();