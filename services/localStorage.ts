import { CartItemMinimal } from "@/components/Add";

class LocalStorage<T> {
  setProduct(value: T): void {
    if (typeof window === "undefined") return;
    const item = this.getProduct();
    localStorage.setItem("cart", JSON.stringify(value));
  }

  getProduct(): CartItemMinimal[] | null {
    if (typeof window === "undefined") return null;
    const item = localStorage.getItem("cart");
    return item ? (JSON.parse(item) as CartItemMinimal[]) : null;
  }
}

export const cartStorage = new LocalStorage();
