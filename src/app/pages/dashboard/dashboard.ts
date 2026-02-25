import { Component } from '@angular/core';
import { SideBar } from "../../components/side-bar/side-bar";
import { Header } from "../../components/header/header";
import { DashboardHero } from "../../components/dashboard-hero/dashboard-hero";

@Component({
  selector: 'app-dashboard',
  imports: [SideBar, Header, DashboardHero],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
