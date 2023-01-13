export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public discountRate: number,
        public discountedPrice?: number

    ) { }

}
