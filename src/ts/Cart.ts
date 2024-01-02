import Buyable from './Buyable';

export default class Cart {
  private _items: Buyable[] = [];
    delItem: any;

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }
}