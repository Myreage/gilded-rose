import Item, { QualityParameters } from "./Item";

class CommonItem extends Item {
  private quality: number;
  private sellIn: number;

  constructor({ initialQuality, sellIn }: QualityParameters) {
    super();
    this.quality = initialQuality;
    this.sellIn = sellIn;
  }

  updateQuality = () => {
    const qualityLoss = this.sellIn <= 0 ? 2 : 1;
    this.quality = Math.max(Item.MINIMUM_QUALITY, this.quality - qualityLoss);
    this.sellIn -= 1;
  };

  deprecatedLogQuality() {
    console.log(`Common Item -> ${this.quality}`);
  }
}

export default CommonItem;
