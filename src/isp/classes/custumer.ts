import {
  IndividualCustumerProtocol,
  EnterpriseCustumerProtocol,
  CustumerOrder,
} from "./interfaces/custumer-protocol";

export class IndividualCustumer
  implements IndividualCustumerProtocol, CustumerOrder
{
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cnpj = "";
  }

  getName(): string {
    return this.firstName + " " + this.lastName;
  }

  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustumer
  implements EnterpriseCustumerProtocol, CustumerOrder
{
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.name;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
