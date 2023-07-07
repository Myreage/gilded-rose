export type QualityParameters = {
  initialQuality: number;
  sellIn: number;
};

abstract class Item {
  static readonly MINIMUM_QUALITY = 0;
  static readonly MAXIMUM_QUALITY = 50;

  abstract updateQuality(): void;

  abstract deprecatedLogQuality(): void;
}

export default Item;
