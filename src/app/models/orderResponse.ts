export enum Period {
  morning,
  night
}

export enum DishType {
  entrée,
  side,
  drink,
  dessert,

  //Error must be the last one
  error
}

export interface OrderResponse {
  dishes: Dish[];
  period: Period;
}

export interface Dish {
  allowMultiple: boolean;
  name: string;
  number: number;
  quantity: number;
  type: DishType;
}
