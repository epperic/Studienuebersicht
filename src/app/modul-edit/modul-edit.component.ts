import { Component, OnInit } from '@angular/core';
import { Modul } from '../model/Modul';
import { ModulService } from '../shared/ModulService';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modul-edit',
  templateUrl: './modul-edit.component.html',
  styleUrls: ['./modul-edit.component.css']
})
export class ModulEditComponent implements OnInit {
  public obj: Modul = null;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: ModulService,
    private _location: Location) {
    let id = this.route.snapshot.params["id"];

    this.form = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      professor: new FormControl("", [Validators.required, Validators.minLength(3)]),
      ects: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
      note: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      semester: new FormControl("", [Validators.required, Validators.min(1), Validators.max(7)])
    });

    if (id == 0)
      this.obj = new Modul("", "", "", 0, "", 0);
    else
      this.service.byID(id).then(obj => {
        this.obj = obj;
        this.form.setValue({
          "name": this.obj.name,
          "professor": this.obj.professor,
          "ects": this.obj.ects,
          "note": this.obj.note,
          "semester": this.obj.semester
        });
      });
  }

  ngOnInit(): void {
  }

  onCancel() {
    this._location.back();
  }

  onSubmit() {
    if (this.form.invalid)
      return;
    this.obj.name = this.form.controls["name"].value;
    this.obj.professor = this.form.controls["professor"].value;
    this.obj.ects = this.form.controls["ects"].value;
    this.obj.note = this.form.controls["note"].value;
    this.obj.semester = this.form.controls["semester"].value;
    this.service.save(this.obj);
    this._location.back();
  }
}
