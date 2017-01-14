import { Symbol } from './symbol';

export class Type extends Symbol {
  id: number;

  constructor(name: string) {
    super(name);
  }
}

export interface TypeData {
  id: number;
  name: string;
  namespace: number;
}
