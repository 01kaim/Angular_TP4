import { Component, EventEmitter, Input, Output } from '@angular/core';
import { menuData } from './menu-data';
interface SideNavToggle {
  screenWidth: number;
  collaspsed: boolean;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Output() onToglleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  screenWidth = 0;
  collapsed = true;
  navData = menuData;
  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToglleSideNav.emit({
      collaspsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
  closeSidenav(): void {
    this.collapsed = false;
    this.onToglleSideNav.emit({
      collaspsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }
}
