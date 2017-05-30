(function(){
	
	//custom directive used as element
	function bsBrandName() {
		
        return {
            
            template: '<a class="navbar-brand" href="#">Birla Soft CG</a>',
			restrict:"E" //"E" -use only as element , "A" -use only as attribute
        };
    };
	
	function bdTransacludeEx(){
		alert("transclude");
		return{		
			template: "<h2> I am tranclude example </h2><div ng-transclude></div>",
			transclude:true
		};
	}
	
	
	
	
	angular.module("utils").directive("bsBrandName",[bsBrandName])
						   .directive("bsTranscludeEx",[bdTransacludeEx]);
	
})();
