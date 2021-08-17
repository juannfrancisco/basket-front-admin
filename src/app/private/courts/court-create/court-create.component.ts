import { BreadcrumbItem } from './../../../models/breadcrumb-item';
import { CourtsService } from './../../../services/courts.service';
import { Court } from './../../../models/court';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-court-create',
  templateUrl: './court-create.component.html',
  styleUrls: ['./court-create.component.css']
})
export class CourtCreateComponent implements OnInit {

  title: string = "Nueva Cancha";
  breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", link: "/app" },
    { name: "Canchas", link: "/app/courts" }
  ];
  errorMsg: string = "";
  diplayError: boolean = false;
  court: Court;

  courtForm = new FormGroup({
    //oid: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl('', Validators.required),
    spectators: new FormControl('', Validators.required),
    latitude: new FormControl(''),
    longitude: new FormControl('')
  });


  constructor(
    private service: CourtsService,
    private router: Router) { }

  ngOnInit() {
  }

  classFormControl(name) {
    return {
      'is-invalid': this.courtForm.get(name).invalid && this.courtForm.get(name).dirty,
      'is-valid': this.courtForm.get(name).valid
    }
  }

  save() {
    let court: Court = {
      oid: "",
      name: this.courtForm.get("name").value,
      description: this.courtForm.get("description").value,
      spectators: this.courtForm.get("spectators").value,
      location: {
        latitude: this.courtForm.get("latitude").value,
        longitude: this.courtForm.get("longitude").value
      }
    };

    this.service.save(court).subscribe(
      data => {
        this.router.navigate(["/app/courts"]);
      },
      err => {
        this.diplayError = true;
        this.errorMsg = "Ocurrio un error al almacenar los datos";
      }
    );

  }

}
