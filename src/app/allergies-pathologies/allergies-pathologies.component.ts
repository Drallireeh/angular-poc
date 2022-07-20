import { Component, OnInit } from '@angular/core';
import { GetPokeService } from '../services/get-poke.service';

@Component({
  selector: 'app-allergies-pathologies',
  templateUrl: './allergies-pathologies.component.html',
  styleUrls: ['./allergies-pathologies.component.less']
})
export class AllergiesPathologiesComponent implements OnInit {
  pokemon:any;
  constructor(private service:GetPokeService) { }

  ngOnInit(): void {
  }

}
