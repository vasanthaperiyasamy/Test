
<div ng-controller="productCtrl as pc">


	<div>
	
	<input type="text" ng-model="pc.search" ></input>
	<button ng-click="pc.searchProducts()">Search</button>
	<div>

	<table>
		<tr>
			<td>Model</td>
			<td>Price</td>
			<td>Description</td>
		</tr>
		
		<tr  ng-repeat="items in pc.products">
			<td ng-bind="items.name| limitTo:10">Name </td>
			<td ng-bind="items.salePrice|currency:$">Price</td>
			<td ng-bind="items.longDescription|limitTo:30">Description</td>
			<td> <button ng-click="pc.selectItems(items)">Add to Cart </button>
		</tr>
		
	</table>
		
</div>