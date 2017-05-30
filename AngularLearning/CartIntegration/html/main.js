(function(){
	
	angular.module("mainApp",["signIn","utils","ui.router","products"]);	
	
	function config($stateProvider){
	
		//defining the states
		
		var signInObj={
			name:"signin",
			templateUrl:"signin/signIn.tpl.html"
		};
		$stateProvider.state("signin",signInObj);
	
		 var productObj={
			name:"product",
			templateUrl:"product/product.tpl.html",
			//controller:"productCtrl as pc"
		};
		$stateProvider.state("product",productObj );

		//cart navigation
		var cartObj={
			name:"cart",
			templateUrl:"product/cart.tpl.html",
			controller:"productCtrl as pc"
		};
		$stateProvider.state("cart",cartObj );
	
	}
	
	angular.module("mainApp").config(["$stateProvider",config]);

})();
