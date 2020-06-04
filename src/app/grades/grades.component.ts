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
  allECTS = null;

  constructor(private service: ModulService) {
    this.loadData();
  }

  ngOnInit(): void {
  }

  loadData() {
    this.service.getGrades().then(objects => {
      this.objects = objects;
      this.calcAllECTS();
    });
  }

  onSelect(index) {
    this.selected = this.objects[index]
  }

  calcAllECTS() {
    let CollectedECTS = 0;
    this.objects.forEach(function (modul) {
      CollectedECTS += (modul.ects * 1);
    });
    this.allECTS = CollectedECTS;
  }
}