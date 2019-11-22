import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';
import { Technology } from '@coreModels/technology';

@Component({
  selector: 'app-create-app-modal',
  templateUrl: './create-app-modal.component.html',
  styleUrls: ['./create-app-modal.component.scss'],
})
export class CreateAppModalComponent implements OnInit, OnChanges {
  @Input() technologies: Technology[] = null;

  title = 'Create application';
  appForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges) {
    const { technologies } = changes;
    if (technologies.currentValue && technologies.currentValue.length > 0) {
      // this.appForm.addControl('projectTechnologies', new FormArray(this.technologiesFBArray));
    }
  }

  ngOnInit() {
    this.appForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      projectDescription: ['', Validators.required],
      projectType: [''],
      id: ['', Validators.required],
      urlImage: [''],
      projectTechnologies: new FormArray(this.technologiesFBArray),
    });
  }

  get technologiesFBArray() {
    return this.technologies ? this.technologies.map(() => new FormControl(false)) : [];
  }

  submitForm = () => {
    console.log(this.appForm);
    debugger;
  };
}
