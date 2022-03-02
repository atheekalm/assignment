export interface productsprops{
    products: product[]
    // product:product
}



interface details {
    price:number,
    size: string,
    tag: string,
    image: string,
    type: string
}

export interface product {
    id: number,
    name: string,
    details: details,
    cartquantity:number

}