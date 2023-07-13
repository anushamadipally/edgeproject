import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  openSidebar: boolean = true;

  menuSidebar = [
    {
      link_name: "Home",
      link: "/home",
      icon: "fa fa-home",
      sub_menu: []
    }, 
    {
      link_name: "Courses",
      link: null,
      icon: "fa fa-book",
      sub_menu: [
        {
          link_name: "Html",
          link: "/create-fw",
        }, {
          link_name: "css",
          link: "manage-my-fw",
        }, {
          link_name: "angular", 
          link: "show-all-owners-fw",
        },
        {
          link_name: "flutter", 
          link: "popular-frame-works",
        }
      ]
    },
    {
      link_name: "Profile",
      link: null,
      icon: "fa fa-users",
      sub_menu: [
        {
          link_name: "Users",
          link: "/users",
        }
        // }, {
        //   link_name: "Doctors",
        //   link: "/doctors",
        // }, {
        //   link_name: "Institues",
        //   link: "/institues",
        // },
        // {
        //   link_name: "Fw Owners",
        //   link: "fw-owners",
        // }
      ]
    }, {
      link_name: "Games",
      link: null,
      icon: "fa fa-rocket",
      sub_menu: [
        // {
        //   link_name: "Fw analysis", 
        //   link: "fw-analysis",
        // },
        // {
        //   link_name: "Ask Doctors",
        //   link: "ask-doctors",
        // }
      ]
    }, {
      link_name: "Knowledge Brain",
      link: "/chart",
      icon: "fa fa-home",
      sub_menu: [
        {
          link_name: "Emergency kit", 
          link: "emergency-kit",
          
        }
      ]
    }, 
    //  {
    //   link_name: "Polices",
    //   link: "/policies",
    //   icon: "fa fa-pencil",
    //   sub_menu: []
    // }, {
    //   link_name: "Analytics",
    //   link: "/analytics",
    //   icon: "fa fa-area-chart",
    //   sub_menu: []
    // }, {
      {
      link_name: "Settings",
      link: "/settings",
      icon: "fa fa-cog",
      sub_menu: []
    }
    
  ]

  constructor() { }

  ngOnInit() {

  }

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }
}
