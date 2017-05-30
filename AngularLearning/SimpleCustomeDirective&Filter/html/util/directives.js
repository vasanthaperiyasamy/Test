(function(){
	
	function bsBrandName() {
		alert("loding");
        return {
            
            template: '<a class="navbar-brand" href="#">Birla Soft CG</a>',
          
        };
    };
	
	angular.module("utils").directive("bsBrandName",[bsBrandName]);
	
})();
