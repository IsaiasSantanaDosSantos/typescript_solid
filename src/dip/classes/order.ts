import { OrderStatus } from "./interfaces/order-status";
import { CustumerOrder } from "./interfaces/custumer-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { MessagingProtocol } from "./interfaces/messaging-protocol";
import { PersistencyProtocol } from "./interfaces/persistency-protocol";

export class Order {
  private _orderStatus: OrderStatus = "open";
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly custumer: CustumerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("Seu carrinho está vázio");
      return;
    }

    this._orderStatus = "closed";
    this.messaging.sendMessage(
      `Seu pedido com o total de R$ ${this.cart.totalWithDiscount()} foi recebido.`,
    );
    this.persistency.saveOrder();
    this.cart.clear();

    console.log(
      "O cliente é: ",
      this.custumer.getName(),
      this.custumer.getIDN(),
    );
  }
}
