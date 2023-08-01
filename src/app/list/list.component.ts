import { Component } from '@angular/core';

import { HotelsService } from '../services/hotels.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotels } from '../hotels.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  hotel: Hotels[]=[];
constructor(private service : HotelsService, private router: Router, private route: ActivatedRoute){

}
ngOnInit():void{
  this.service.list().subscribe(data => this.hotel)
}


}
