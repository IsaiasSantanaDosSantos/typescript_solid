/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
Depender de abstrações, não de implementações.
Abstrações não devem depender de datalhes. Detalhes devem depender de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível não classes que gerenciam as classes de baixo nível.
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
import { EnterpriseCustumer, IndividualCustumer } from "./classes/custumer";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustumer = new IndividualCustumer(
//   "Luiz",
//   "Miranda",
//   "333.333.333-33",
// );
const enterpriseCustumer = new EnterpriseCustumer(
  "Empresa Gigante",
  "222.222.222/2222-2",
);

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustumer,
);

shoppingCart.addItem(new Product("Camisa", 49.91));
shoppingCart.addItem(new Product("Caderno", 9.9123));
shoppingCart.addItem(new Product("Lápis", 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
