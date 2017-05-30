(function(){
	alert("hifrom product");
	
	function productSvc($http,$q){
		 this.getProducts=function(search){
			
			var dfd=$q.defer();
			var url="WM/"+search;
			$http.get(url)
			.then(function(response){
				dfd.resolve(response);
			})
			.catch(function(errorResponse){
				dfd.reject(errorResponse);
			});
			return dfd.promise;
		};
	
	}
	
	// controller
	function productCtrl(productSvc){
		var pc=this;
		pc.searchProducts=function(){
			productSvc.getProducts(pc.search)
			.then(function(response){
				pc.products=response.data.items;
				console.log(pc.products);
			})
			.catch(function(errorResponse){
				alert("error occured");
			}); 
		}
			
	};
	angular.module("products",[]);
	angular.module("products").service("productSvc",["$http","$q",productSvc])
							 .controller("productCtrl",["productSvc",productCtrl]);
	
})();
