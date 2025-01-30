"use server";

import axios from "axios";

export async function getProducts() {
  const res: any = await axios.get("https://fakestoreapi.com/products");
  return res.data;
}
export async function getSingleProduct(id:string) {
    const res: any = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  }