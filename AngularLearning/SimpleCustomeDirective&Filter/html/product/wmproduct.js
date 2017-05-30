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
		
		
		//add item to cart
		var cartItems=[];
		this.addToCart=function(item){
			cartItems.push(item);
		};
		
		this.getCartItems=function(){
			return cartItems;
		};
		
		//remove cart item
		this.removeCartItems=function(item){
			var index=cartItems.indexOf(item);
			cartItems.splice(index,1);
		//	cartItems.apply();
			alert("removed");
		};
		
		
	
	}
	
	// controller
	function productCtrl($rootScope,productSvc){
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
		
		
		
			// select prodcts 
			pc.selectItems=function(item){
				alert("selected item is "+item);
				productSvc.addToCart(item);
				$rootScope.$broadcast("Added");
				
			};
		
			//display cart items 
			function init(){
				pc.cartITems=productSvc.getCartItems();
			}
			init();
			
			
			//remove items from cart
			
			pc.removeItems=function(item){
				productSvc.removeCartItems(item);
				$rootScope.$broadcast("Deleted");
			};
			
	};
	

	
	
	
	
	
	angular.module("products",[]);
	angular.module("products").service("productSvc",["$http","$q",productSvc])
							 .controller("productCtrl",["$rootScope","productSvc",productCtrl]);
	
})();
