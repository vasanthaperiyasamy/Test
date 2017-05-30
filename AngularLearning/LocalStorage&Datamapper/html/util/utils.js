(function(){
	
	function utilityService($http,$q){
		
		
		
		
		
		
		this.getAlphaPattern={
			alphabetOnly: /^[a-zA-Z ]*$/ 
		};
		
		
		
		
		//hardcoded countries
		this.getCountries=function(){
			return [{name:"United States",code:"USA"},{name:"India",code:"IN"}];
		};
		
		
			//data mapper functionality
			function dataMapper(response){
					response.data.countries.forEach(function(element,index){
						element.id=index;
			});
				return response;
			}
			
		
		
		
			//localstorage usage
			this.getJSONCountries= function(){
				
				var dfd=$q.defer();
				var getData=localStorage.getItem("countries");
				if(getData){
				alert("get from localstorage");
				dfd.resolve(JSON.parse(getData));	
				
				}else{
				alert("get from http");
				$http.get('util/countries.json')
					.then(function(response){
					localStorage.setItem("countries",JSON.stringify(response));	
					var result=dataMapper(response);
					console.log(response);
					dfd.resolve(response);	
						
				})
					.catch(function(errorResponse){
						alert("error"  +errorResponse);
						 dfd.reject(errorResponse);
					});
				
			} 
		
		return dfd.promise;
		
		}
		
		
		
		
		
		
		
		
		
		 
	
	
	};
	
	
	
	
	angular.module("utils",[]);
	angular.module("utils").service("utilService",["$http","$q",utilityService]);
	
	
})();