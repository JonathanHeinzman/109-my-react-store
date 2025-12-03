class DataService {
  getProducts() {
    return [
      { _id: 1, name: "Fresh Raw Milk", price: 5.99, category: "Dairy & Eggs", image: "/images/milk62.png" },
      { _id: 2, name: "Chocolate Bar", price: 1.99, category: "Candy", image: "/images/choco62.png" },
      { _id: 3, name: "Strawberry", price: 0.75, category: "Fruit", image: "/images/straw62.png" },
      { _id: 4, name: "Orange", price: 0.99, category: "Fruit", image: "/images/orange62.png" },
    ];
  }
}

export default DataService;