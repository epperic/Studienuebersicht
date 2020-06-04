import { Modul } from '../model/Modul';
import { Output, EventEmitter, Injectable, } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable()
export class ModulService {
  @Output() changed = new EventEmitter();
  objects: Modul[] = [];

  constructor(private db: AngularFirestore) { }

  async getSemester(semester: string) {
    return new Promise<Modul[]>(resolve => {
      let collection = this.db.collection('modul');
      collection.get().subscribe(function (snapshot) {
        let objects: Modul[] = [];
        snapshot.forEach(function (doc) {
          let data = doc.data();
          if (data.semester == semester) {
            let obj = new Modul(doc.id, data["name"], data["professor"], data["ects"], data["note"], data["semester"]);
            objects.push(obj);
          }
        });
        resolve(objects);
      });
    });
  }

  async getGrades() {
    return new Promise<Modul[]>(resolve => {
      let gesamt_ECTS: number = 0;
      let collection = this.db.collection('modul');
      collection.get().subscribe(function (snapshot) {
        let objects: Modul[] = [];
        snapshot.forEach(function (doc) {
          let data = doc.data();
          if (data.note != "0,0") {
            let obj = new Modul(doc.id, data["name"], data["professor"], data["ects"], data["note"], data["semester"]);
            objects.push(obj);
          }
        });
        objects.sort((a, b) => a.semester - b.semester);
        resolve(objects);
      });
    });
  }

  async getToDoModules(activeSemester: number) {
    return new Promise<Modul[]>(resolve => {
      let collection = this.db.collection('modul');
      collection.get().subscribe(function (snapshot) {
        let objects: Modul[] = [];
        snapshot.forEach(function (doc) {
          let data = doc.data();
          if (data.note == "0,0" && data.semester < activeSemester) {
            let obj = new Modul(doc.id, data["name"], data["professor"], data["ects"], data["note"], data["semester"]);
            objects.push(obj);
          }
        });
        objects.sort((a, b) => a.semester - b.semester);
        resolve(objects);
      });
    });
  }

  delete(id: string) {
    this.db.collection('modul').doc(id).delete().then(() => {
      this.changed.emit();
    });
  }

  byID(id: string) {
    return new Promise<Modul>(resolve => {
      this.db.collection('modul').doc(id).get().subscribe(function (doc) {
        let data = doc.data();
        let obj = new Modul(doc.id, data["name"], data["professor"], data["ects"], data["note"], data["semester"]);
        resolve(obj);
      });
    })
  }

  save(obj: Modul) {
    let collection = this.db.collection('modul');
    let tmp = {
      "name": obj.name,
      "professor": obj.professor,
      "ects": obj.ects,
      "note": obj.note,
      "semester": obj.semester
    };

    if (obj.id == "") {
      collection.add(tmp).then(doc => {
        obj.id = doc.id;
        this.changed.emit();
      });
    } else {
      collection.doc(obj.id).set(tmp).then(() => {
        this.changed.emit();
      });
    }
  }
}