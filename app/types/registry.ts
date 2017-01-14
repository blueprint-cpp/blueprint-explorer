import { NamespaceData, Namespace } from './namespace';
import { Type } from './type';

export class Registry {
  private file: string;

  private namespaceMap: Map<number, Namespace>;
  private typeMap: Map<number, Type>;

  constructor(file: string) {
    this.file = file;

    this.namespaceMap = new Map<number, Namespace>();
    this.typeMap = new Map<number, Type>();
  }

  public addNamespace(data: NamespaceData) : void {
    this.namespaceMap.set(data.crc, new Namespace(data.namespace));
  }

  public addType(data: any) : void {
    this.typeMap.set(data.id, new Type(data.name));
  }
}
