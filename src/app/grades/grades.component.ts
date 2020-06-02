import { Component, OnInit } from '@angular/core';
import { ModulService } from '../shared/ModulService';
import { Modul } from '../model/Modul';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  objects: Modul[] = [];
  selected = null;

  constructor(private service: ModulService) {
    this.loadData();
  }

  ngOnInit(): void {
  }

  loadData() {
    this.service.getAll().then(objects => {
      this.objects = objects;
      let subset: Modul[] = null;
      this.objects.forEach(function (Modul) {
        if (Modul.note != "0,0") {
          subset.push();
        }
      });
    });
    //subset.sort((a, b) => a.semester - b.semester);
    //this.objects = subset;
  }

  onSelect(index) {
    this.selected = this.objects[index]
  }
}