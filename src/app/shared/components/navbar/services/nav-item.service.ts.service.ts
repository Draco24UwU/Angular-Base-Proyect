import { Injectable } from '@angular/core';
import { elemento_nav } from '../../../constants/navbar.-constants';

@Injectable({
  providedIn: 'root',
})
export class NavItemService {
  private expandedItem: elemento_nav | null = null;

  // * Metodo para asignar el item del navbar actual.
  public setExpandedItem(item: elemento_nav) {
    if (this.expandedItem && this.expandedItem !== item) {
      this.collapseItem(this.expandedItem);
    }
    this.expandedItem = item;
  }

  // * Metodo para collapsar el item y todos su subitems.
  public collapseItem(item: elemento_nav) {
    item.isExpanded = false;
    if (item.subNav) {
      item.subNav.forEach(subItem => this.collapseItem(subItem));
    }
  }

  // * Metodo para saber si el item actual esta expandido.
  public isItemExpanded(item: elemento_nav): boolean {
    return this.expandedItem === item;
  }
}
