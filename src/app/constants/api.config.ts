import { environment } from "../../environments/environment";

export const LOGIN = {
  authenticate: environment.API + 'login/authenticate'
}

export const ORDER = {
  PlaceOrder: environment.API + 'orders/PlaceOrder'
}
