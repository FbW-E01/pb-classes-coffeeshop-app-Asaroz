function foodobject(item_name, type, price) {
	const obj = {
		item: item_name,
		type: type,
		price: price
	}
	return obj
}
const drinks = ["orange juice", "lemonade", "cranberry juice",
	"pineapple juice", "lemon iced tea", "vanilla chai latte",
	"hot chocolate", "iced coffee"
]
const foods = ["tuna sandwich", "ham and cheese sandwich",
	"bacon and egg", "steak", "hamburger", "cinnamon roll"
]
const allfoods = []
for (item in foods) {
	allfoods.push(foodobject(foods[item], "food", Math.round(Math.random() * 30) / 10 + 1))
}
for (item in drinks) {
	allfoods.push(foodobject(drinks[item], "drink", Math.round(Math.random() * 30) / 10 + 1))
}


console.log(allfoods)


class CoffeeShop {
	constructor(name, menu = [], orders = []) {
		this.name = name
		this.menu = menu
		this.orders = orders
	}
	add_order(item) {
		if (this.menu.find(element => element.item === item)) {
			this.orders.push(item)
			return "order " + item+" added"
		} else {
			return "This item is currently unavailable!"
		}
	}
	fulfill_order() {
		if(this.orders.length>0){
			let helper= "The " + this.orders[0] + " is ready!"
			this.orders.splice(0,1)
			return helper
		}else{
			return "all orders have been fullfilled"
		}
	
	}
	list_orders() {
		return this.orders
	}
	due_amount() {
		let total = 0
		for(item in this.menu){
			for(let order in this.orders){
				if(this.menu[item].item ===this.orders[order]){
					total = total+ this.menu[item].price
				}
			}
			
		}
		return total.toFixed(2)
	}
	cheapest_item(){
		let smallest=100000
		for(item in this.menu){
			if(this.menu[item].price<smallest) {smallest = this.menu[item].price}
		}
		return smallest
	}
	drinks_only(){
		const drinks = []
		for(item in this.menu){
			if(this.menu[item].type==="drink"){drinks.push(this.menu[item].item)}
		}
		return drinks
	}
	food_only(){
		const foods = []
		for(item in this.menu){
			if(this.menu[item].type==="food"){foods.push(this.menu[item].item)}
		}
		return foods
	}
	

}

const coffe = new CoffeeShop("mylittleCoffe",allfoods)
console.log(coffe.add_order("tuna sandwich"))
console.log(coffe.add_order("pineapple juice"))
console.log("the total amount is "+coffe.due_amount()+"€")
console.log(coffe.fulfill_order())
console.log(coffe.fulfill_order())
console.log(coffe.fulfill_order())
console.log(coffe.add_order("pineapple juice"))
console.log(coffe.list_orders())
console.log(coffe.cheapest_item())
console.log(coffe.drinks_only())
console.log(coffe.food_only())
