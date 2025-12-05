class DataService {
  getProducts() {
    return [
      { _id: 1, name: "Keyboard", price: 399.99, category: "Piano", image: "/images/keyboard.png" },
      { _id: 2, name: "Drum Set", price: 699.99, category: "Drums", image: "/images/drumset.png" },
      { _id: 3, name: "XLR Cables", price: 19.75, category: "Cables", image: "/images/xlrcables.png" },
      { _id: 4, name: "Baby Grand Piano", price: 999.99, category: "Piano", image: "/images/babygrandpiano.png" },
      { _id: 5, name: "Drum Sticks", price: 11.99, category: "Drums", image: "/images/drumsticks.png" },
      { _id: 6, name: "Stratocaster Guitar", price: 299.99, category: "Guitar", image: "/images/strat.png" },
      { _id: 7, name: "Bass", price: 199.99, category: "Bass", image: "/images/bass.png" },
      { _id: 8, name: "Guitar Picks", price: 4.99, category: "Guitar", image: "/images/guitarpicks.png" },
      { _id: 9, name: "Acoustic Guitar", price: 199.99, category: "Guitar", image: "/images/acousticguitar.png" },
    ];
  }
}

export default DataService;