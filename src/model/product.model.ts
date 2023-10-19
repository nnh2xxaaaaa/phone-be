/* eslint-disable prettier/prettier */
import { InfoProduct, ListOrder } from "./info-product.model";


export interface Product {
    phone: InfoProduct[];
    laptop: InfoProduct[],
    tablet: InfoProduct[],
    id_order: string;
    product_by_id: InfoProduct;
    list_order: ListOrder[];
    quantity_order_phone: number | string;
    total_order_phone: number;
    vat: number;
    total_cash: number;
    discount: number;
    shipping: number;
    saveTracking: { tracking_order: string; list_order: ListOrder[] }[];
    search_order: { tracking_order: string; list_order: ListOrder[] }[]
}

export enum ProductInView {
    "OPEN" = "OPEN",
    "IN_VIEW" = "IN_VIEW",
    "DONE" = "DONE",
}