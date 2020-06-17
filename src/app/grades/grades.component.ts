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
  allECTS: number;
  averageGrade: number;

  constructor(private service: ModulService) {
    this.loadData();
  }

  ngOnInit(): void {
  }

  loadData() {
    this.service.getModules().then(objects => {
      this.objects = this.getGrades(objects);
      this.allECTS = this.service.calcAllECTS(this.objects);
      this.averageGrade = this.service.calcAverageGrade(this.objects);
    });
  }

  getGrades(objects: Modul[]) {
    let filteredObjects: Modul[] = [];
    objects.forEach(function (obj) {
      if (obj.note != 0.0) {
        filteredObjects.push(obj);
      }
    });
    filteredObjects.sort((a, b) => a.semester - b.semester);
    return filteredObjects;
  }

  onSelect(index) {
    this.selected = this.objects[index]
  }
}