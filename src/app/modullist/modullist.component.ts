import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Modul } from '../model/Modul';
import { ModulService } from '../shared/ModulService';

@Component({
  selector: 'app-modullist',
  templateUrl: './modullist.component.html',
  styleUrls: ['./modullist.component.css']
})
export class ModullistComponent implements OnInit {
  selected = null;
  objects: Modul[] = [];
  allECTS: number;

  constructor(private router: Router,
    private service: ModulService,
    private route: ActivatedRoute) {
    this.loadData();
    this.service.changed.subscribe(() => {
      this.loadData();
      this.selected = null;
    });
  }

  loadData() {
    let semester:string = this.route.snapshot.url[1].toString();
    this.service.getSemester(semester).then(objects => {
      this.objects = objects;
      this.calcAllECTS();
    });
  }

  calcAllECTS() {
    let CollectedECTS = 0;
    this.objects.forEach(function (modul) {
      if(modul.note != "0,0"){
        CollectedECTS += (modul.ects * 1);
      }
    });
    this.allECTS = CollectedECTS;
  }

  ngOnInit(): void {
  }

  onSelect(index) {
    this.selected = this.objects[index]
  }

  onEdit() {
    this.router.navigate(["modul", this.selected.id]);
  }

  onDelete() {
    this.service.delete(this.selected.id)
  }

  onNew() {
    this.router.navigate(["modul", 0]);
  }
}
