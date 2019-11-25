import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Technology } from '@coreModels/technology';

@Component({
  selector: 'app-create-app-modal',
  templateUrl: './create-app-modal.component.html',
  styleUrls: ['./create-app-modal.component.scss'],
})
export class CreateAppModalComponent implements OnInit {
  @Input() technologies: Technology[] = null;
  @Input() images: string[] = null;
  @Input() navigationTypes: any = null;

  @Output() submitClick = new EventEmitter<any>();

  title = 'Create application';
  appForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.appForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      projectDescription: ['', Validators.required],
      projectType: [''],
      id: ['', Validators.required],
      urlImage: [''],
      projectTechnologies: new FormArray(this.technologiesFBArray),
      navigationType: [''],
    });
  }

  get projectTechnologies() {
    const { projectTechnologies } = this.appForm.value;
    return this.technologies.filter((technology, index) => projectTechnologies[index]);
  }

  get technologiesFBArray() {
    return this.technologies ? this.technologies.map(() => new FormControl(false)) : [];
  }

  selectImage = (image: string) => this.appForm.controls['urlImage'].setValue(image);

  selectNavType = (navType: string) => this.appForm.controls['navigationType'].setValue(navType);

  submitForm = () => {
    const tech = this.projectTechnologies;
    debugger;
    this.submitClick.emit();
  };
}
