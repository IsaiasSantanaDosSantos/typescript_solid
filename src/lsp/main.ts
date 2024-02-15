/*
Liskov substitution principal (Princípio da substituição de Liskov) - Se Ø (x) é uma propriedade demonstrável dos objetos x de tipo T. Então Ø (y) deve ser verdadeiro para objetos y de tipo S onde S é um sbtipo de T.

Mais simples: Subtipos precisam ser substituíveis por seus tipo de base.

Mais simples ainda: Se meu programa espera um Animal, algo do tipo Dog (que herda de Animal) deve servir como qualquer outro Animal.
*/
import { Messaging } from "./services/messaging";
import { Order } from "./classes/order";
import { Persistency } from "./services/persistency";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping-cart";
import {
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from "./classes/discount";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product("Camisa", 49.91));
shoppingCart.addItem(new Product("Caderno", 9.9123));
shoppingCart.addItem(new Product("Lápis", 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
