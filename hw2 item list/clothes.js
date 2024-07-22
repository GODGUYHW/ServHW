class Clothes {
    constructor(id, name, description, stock, size, color, material) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.stock = stock;
        this.size = size;
        this.color = color;
        this.material = material;
    }

    getDetails() {
        return `ID: ${this.id}\nName: ${this.name}\nDescription: ${this.description}\nStock: ${this.stock}\nSize: ${this.size}\nColor: ${this.color}\nMaterial: ${this.material}`;
    }
}
const clothesList = [
    new Clothes("C001", "Shirt", "Comfortable cotton shirt", 50, ["S", "M", "L", "XL"], "Blue", "Cotton"),
    new Clothes("C002", "Polo", "Casual polo shirt", 30,  ["S", "M", "L", "XL"], "Red", "Polyester"),
    new Clothes("T001", "T-Shirt", "cotton shirt", 50, ["S", "M", "L", "XL"], ["White","Black"], "Cotton"),
    new Clothes("S001", "Shorts", "Casual Shorts", 30,  "Free Size", ["White","Black"], "Polyester"),
];

export default clothesList;