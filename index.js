// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let   neighborhoodId = 0;
class Neigborhood {

    constructor(name){
      this.name = name;
      this.id = ++neighborhoodId;
      store.neighborhoods.push(this)
    }

    deliveries(){
      
    }

    customers(){

  
    }

    meals(){
    
    }
}

let customerId = 0;
class Customer {
    constructor(name, neighborhoodId){
      this.name = name,
      this.neighborhoodId = neighborhoodId;
      this.id = ++customerId;
      store.customers.push(this);
    }

    deliveries(){
      
    }

    meals(){
      
    }

    totalSpent(){
      
    }
}

let mealId = 0;
class Meal(){
  constructor(title, price){
    this.title = title;
    this.price = price;
    this.id = ++mealId;
    store.meals.push(this);
  }
}



