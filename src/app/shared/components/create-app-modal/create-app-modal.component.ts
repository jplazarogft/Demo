import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Technology } from '@coreModels/technology';
import { Project } from '@coreModels/project';
import { ProjectType } from '@coreEnums/project.enum';

@Component({
  selector: 'app-create-app-modal',
  templateUrl: './create-app-modal.component.html',
  styleUrls: ['./create-app-modal.component.scss'],
})
export class CreateAppModalComponent implements OnInit {
  @Input() dependencies: Project[] = null;
  @Input() images: string[] = null;
  @Input() navigationTypes: any = null;
  @Input() technologies: Technology[] = null;

  @Output() submitClick = new EventEmitter<Project>();

  title = 'Create application';
  appForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.appForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      projectDescription: ['', Validators.required],
      projectTypeId: [1], // value fixed, we are generating an app
      projectTypeName: [ProjectType.Application], // value fixed, we are generating an app
      id: ['', Validators.required],
      urlImage: [''],
      projectTechnologies: new FormArray(this.technologiesFBArray),
      projectDependencies: new FormArray(this.dependenciesArray),
      navigationType: [''],
    });
  }

  get projectDependencies() {
    const { projectDependencies } = this.appForm.value;
    return this.dependencies.filter((dependency, index) => projectDependencies[index]);
  }

  get projectTechnologies() {
    const { projectTechnologies } = this.appForm.value;
    return this.technologies.filter((technology, index) => projectTechnologies[index]);
  }

  get technologiesFBArray() {
    return this.technologies ? this.technologies.map(() => new FormControl(false)) : [];
  }

  get dependenciesArray() {
    return this.dependencies ? this.dependencies.map(() => new FormControl(false)) : [];
  }

  get projectData() {
    const {
      projectName,
      projectDescription,
      projectTypeId,
      projectTypeName,
      urlImage,
      navigationType,
    } = this.appForm.value;
    return {
      projectName,
      projectDescription,
      projectTypeId,
      projectTypeName,
      urlImage,
      navigationType,
      projectTechonologies: this.projectTechnologies,
      projectDependencies: this.projectDependencies,
    };
  }

  setImage = (image: string) => this.appForm.controls.urlImage.setValue(image);

  setNavType = (navType: string) => this.appForm.controls.navigationType.setValue(navType);

  submitForm = () => {
    const formData = this.projectData;
    this.submitClick.emit(formData);
  };
}
