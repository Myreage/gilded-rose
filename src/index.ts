import Item from "./items/Item";
import LegacyItem from "./items/LegacyItem";

export class GildedRose {
  private readonly items: Item[];

  constructor(legacyItems: LegacyItem[] = []) {
    this.items = legacyItems.map((item) => item.getItem());
  }

  updateQuality() {
    this.items.forEach((item) => {
      item.updateQuality();
      item.deprecatedLogQuality();
    });
  }
}
