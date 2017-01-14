import { Injectable } from '@angular/core';
import * as ElectronConfig from 'electron-config';

@Injectable()
export class SettingsService {
  private config: ElectronConfig;

  private registries: string[];

  constructor() {
    console.log('Settings Service initialized');

    this.load();

    if (this.registries) {
      for (let registry of this.getRegistries()) {
        console.log('> ' + registry);
      }
    }
  }

  public addRegistry(file: string) : void {
    console.log('Settings: Open \'' + file + '\'');

    this.registries.push(file);
    this.save();
  }

  public removeRegistry(file: string) : void {
    console.log('Settings: Close \'' + file + '\'');

    let index: number = this.registries.indexOf(file, 0);
    if (index >= 0) {
      this.registries.splice(index, 1);
    }
  }

  public clearRegistries() : void {
    console.log('Settings: Close All');

    this.registries = [];
    this.save();
  }

  public getRegistries() : string[] {
    return this.registries;
  }

  private load() : void {
    this.config = new ElectronConfig();
    this.registries = this.config.get('registries');

    if (!this.registries) {
      this.registries = [];
    }
  }

  private save() : void {
    this.config.set('registries', this.registries);
  }
}
