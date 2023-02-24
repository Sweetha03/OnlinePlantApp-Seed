import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seed } from '../seed';
import { SeedOperationService } from '../seed-operation.service';

@Component({
  selector: 'app-seed-details',
  templateUrl: './seed-details.component.html',
  styleUrls: ['./seed-details.component.css']
})
export class SeedDetailsComponent {
  __seedService:SeedOperationService;
  router:Router;
  activeRoute:ActivatedRoute;
  s:Seed = new Seed('','','',0,0,'','',0,0,0);


  constructor(seedService:SeedOperationService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__seedService = seedService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchSeedName = this.activeRoute.snapshot.params['sname'];
    console.log(searchSeedName);
    
    
    
  }

}
