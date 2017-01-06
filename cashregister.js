//creating method of the staffs

function StaffMember(name,discountPercent){
	this.name =name;
	this.discountPercent = discountPercent;
}


//creating 2 staffs 

var  sally = new StaffMember("sally",5);
var bob = new StaffMember("bob",10);



var cashRegister = {
	total : 0,
	lastTransactionAmount :0,

	//adding  method 1 

	add:function(itemCost){
		this.total += (itemCost || 0);
		this.lastTransactionAmount = itemCost;
	},

	//method 2  - to scan  the all items to  calculate quantity and price

	scan:function(item ,quantity){
		switch(item){
			case "eggs":
			this.add(1.20,2);
			break;

			case "milk":
			this.add(2.10,2);
			break;


			case "chocolate":
			this.add(3.20,4);
			break;
		}

		return true;
	},

	//method to  check lastTransaction amount

	voidLastTransactionAmount:function(){
		this.totall -= this.lastTransactionAmount;
		this.lastTransactionAmount = 0;
	},


	//apply  method to controll  staffDiscount

	applyStaffDiscount:function(employee){
		this.employee = employee;
		 //create a  variable  to  store the  discount
		 var discount = (100 - employee.discountPercent)/100;
		 this.total = this.total * discount;
	}
};


cashRegister.scan("eggs",4);
cashRegister.scan("milk",4);
cashRegister.scan("chocolate",2);

cashRegister.applyStaffDiscount(me);

console.log("your  totall  bill  is  " + cashRegister.total);