export interface ProductRegistration {
  code?: number,
  name: string,
  custPrice: number,
  markup: number,
  custSale: number,
  realMargin: number,
  taxRuleCode: number
}