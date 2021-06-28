import { Component, OnInit, ViewChild } from '@angular/core'
import {MatMenuTrigger} from '@angular/material/menu'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  constructor() { 

    window.addEventListener('resize', () => {
      this.closeMyMenu()
    })
    
  }

  ngOnInit(): void {
  }

  closeMyMenu() {
    if (window.innerWidth > 768) {
      this.trigger.closeMenu();
    }
  }

}
