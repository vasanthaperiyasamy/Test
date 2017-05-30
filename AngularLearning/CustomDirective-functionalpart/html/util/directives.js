(function(){
	
	//custom directive used as element
	function bsBrandName() {
		
        return {
            
            template: '<a class="navbar-brand" href="#">Birla Soft CG</a>',
			restrict:"E" //"E" -use only as element , "A" -use only as attribute
        };
    };
	
	
	// transclude example
	function bdTransacludeEx(){
		alert("transclude");
		return{		
			template: "<h2> I am tranclude example </h2><div ng-transclude></div>",
			transclude:true
		};
	}
	
	
	// use the directive only as attribute wherever alphabets only condition is required
	function bsAlphabetOnly(){
			//alert("alphabets only");
			return{
				restrict:"A",
				link:function(scope,element,args){
				element.bind("keypress",function(event){
					console.log(event.key);
					var regEx=new RegExp(/^[A-z]+$/);
					if(!regEx.test(event.key)){
						event.preventDefault();
					}
					
				});
				
			}
				
		};
			
	};
	
	
	// use the directive only as attribute wherever number only condition is required
	function bsNumberOnly(){
			alert("number only");
			return {
				restrict:"A",
				link:function(scope,element,attrs){
					 var hasLength=attrs["length"];
					
				element.bind("keypress",function(evt){
						var regEx=new RegExp(/^[0-9]+$/);
						if(regEx.test(evt.key)){
							//alert("length is" +hasLength);
							//alert(" thhhhh " + this.value.length);
								if(hasLength && parseInt(hasLength) && this.value.length>hasLength){
									evt.preventDefault();
								}
						}else{
							evt.preventDefault();
						}
				});
				}
			}
	};
	
	
	
	angular.module("utils").directive("bsBrandName",[bsBrandName])
						   .directive("bsTranscludeEx",[bdTransacludeEx])
						   .directive("bsAlphabetOnly",[bsAlphabetOnly])
						   .directive("bsNumberOnly",[bsNumberOnly]);;
	
})();
