class Electronics {
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

const electronicsList = [
    new Electronics("E001", "TV", "42 inch LED TV", 20, "42 inch", "Black", "Plastic"),
    new Electronics("E002", "Phone", "Smartphone with 64GB storage", 100, "5.5 inch", "Silver", "Metal"),
    // Add more electronics here
];

export default electronicsList;