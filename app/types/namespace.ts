import { Symbol } from './symbol';

export class Namespace extends Symbol {
  children: Symbol[];

  constructor(name: string) {
    super(name);

    this.children = [];
  }

  public addSymbol(symbol: Symbol) : void {
    this.children.push(symbol);
  }

  public findNamespace(ns: string) : Namespace {
    for (let child of this.children) {
      if (child instanceof Namespace && child.name === ns) {
        return child as Namespace;
      }
    }

    return null;
  }

  public sort() : void {
    for (let child of this.children) {
      if (child instanceof Namespace) {
        child.sort();
      }
    }

    this.children.sort((c1: Symbol, c2: Symbol) : number => {
      if (c1.constructor === c2.constructor) {
        return (c1.name < c2.name ? -1 : (c1.name > c2.name ? 1 : 0));
      }
      else {
        return (c1 instanceof Namespace) ? -1 : 1;
      }
    });
  }
}

export interface NamespaceData {
  crc: number;
  namespace: string;
}
