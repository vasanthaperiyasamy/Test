(function(){
	alert("hifrom product");
	
	function productSvc($http,$q){
		
		 this.getProducts=function(){
			alert("get products");
			var dfd=$q.defer();
			$http.get("product/products.json")
			.then(function(response){
				alert(response.data.products);
				//console.log(response);
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
		alert("rpoduct controller");
		 
		 
		// pc.getProducts=function(){
			 
			 productSvc.getProducts()
			.then(function(response){
				alert(response.data.products);
				pc.products=response.data.products;
				console.log(pc.products);
				alert("success");
			})
			.catch(function(errorResponse){
				alert("error occured");
			}); 
		
			// return response;
			 
		 //}
			
		 
		 
		 
		 
		
		
	};
	
	
	
	
	
	
	
	
	angular.module("products",[]);
	angular.module("products").service("productSvc",["$http","$q",productSvc])
							 .controller("productCtrl",["productSvc",productCtrl]);
	
})();
