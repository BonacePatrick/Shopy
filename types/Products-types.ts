export interface ProductsTypes {
    _id: string;
    name: string;
    slug: string;
    categoryName: string;
    price: number;
    description: string;
    imageUrl: string;
}
export interface ProductsDetailTypes {
    _id: string;
    name: string;
    slug: string;
    categoryName: string;
    price: number;
    description: string;
    images: any;
    price_id: string;
}
export interface ProductCategoryTypes {
    _id: string;
    name: string;
    slug: string;
    categoryName: string;
    price: number;
    imageUrl: string;
}