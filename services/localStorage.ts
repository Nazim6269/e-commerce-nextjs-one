class LocalStorage<T> {
  setProduct(value: T): void {
    if (typeof window === "undefined") return;
    const item = this.getProduct();
    localStorage.setItem("cart", JSON.stringify(value));
  }

  getProduct(): T | null {
    if (typeof window === "undefined") return null;
    const item = localStorage.getItem("cart");
    return item ? JSON.parse(item) : null;
  }
}

export const cartStorage = new LocalStorage();
