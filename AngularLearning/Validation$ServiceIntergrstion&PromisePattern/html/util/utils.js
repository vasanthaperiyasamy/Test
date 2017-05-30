(function(){
	
	function utilityService($http,$q){
		
		
		
		var dfd=$q.defer();
		
		
		this.getAlphaPattern={
			alphabetOnly: /^[a-zA-Z ]*$/ 
		};
		
		
		
		
		
		this.getCountries=function(){
			return [{name:"United States",code:"USA"},{name:"India",code:"IN"}];
		};
	
	
		this.getJSONCountries= function(){
			
			$http.get('util/countries.json')
				.then(function(response){
					//alert("fetchd data" + response.data.countries);
				dfd.resolve(response);	
					
			})
				.catch(function(errorResponse){
					alert("error"  +errorResponse);
					 dfd.reject(errorResponse);
				});
			return dfd.promise;
		}
	
	
	};
	
	
	
	
	angular.module("utils",[]);
	angular.module("utils").service("utilService",["$http","$q",utilityService]);
	
	
})();