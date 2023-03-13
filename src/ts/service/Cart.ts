import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    remove(id: number): void {
        let index: number = this._items.findIndex((element: any) => element.id === id);
        this._items.splice(index, 1);
    }

    price(): number {
        return this._items.reduce((acc: number, item: any): number => acc + item.price, 0);
    }

    discountedPrice(discount: number): number {
        return this.price() * ((100 - discount) / 100);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
}