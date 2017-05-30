(function(){


	function phoneFormatter(){
		return function(input,criteria){
			var output="";
			if(criteria=='US'){
				output=input.substring(0,3)+"-"+input.substring(3,6)+"-"+input.substring(6,10);
			}
			else {
				output=input.substring(0,5)+"-"+input.substring(5,10);
			}
			
			return output;
		};
	};


	angular.module("utils").filter("phoneFormatter",[phoneFormatter]);

})();