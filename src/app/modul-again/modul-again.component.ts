import { Component, OnInit } from '@angular/core';
import { ModulService } from '../shared/ModulService';
import { Router } from '@angular/router';
import { Modul } from '../model/Modul';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modul-again',
  templateUrl: './modul-again.component.html',
  styleUrls: ['./modul-again.component.css']
})

export class ModulAgainComponent implements OnInit {
  selected = null;
  objects: Modul[] = [];
  hasSubmitted: boolean = false;
  form: FormGroup;

  constructor(private router: Router, private service: ModulService) {
    this.form = new FormGroup({
      semester: new FormControl("", [Validators.required, Validators.min(1), Validators.max(8)])
    });
  }

  ngOnInit(): void {
  }

  loadData(activeSemester: number) {
    this.service.getAll().then(objects => {
      this.objects = objects;
      let subset = null;
      this.objects.forEach(function (Modul) {
        if (Modul.note == "0,0" && Modul.semester < activeSemester) {
          subset.push();
        }
      });
    });
  }

  onSubmit() {
    if (this.form.invalid)
      return;
    this.hasSubmitted = true;
    this.loadData(this.form.value);
    this.service.changed.subscribe(() => {
      this.loadData(this.form.value);
      this.selected = null;
    });
  }

  onSelect(index) {
    this.selected = this.objects[index]
  }

  onEdit() {
    this.router.navigate(["modul", this.selected.id]);
  }
}
