import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Icon } from '@sharedModels/icon';
import { homeIcons } from '@mocks/icons';
import { Technology } from '@coreModels/technology';

@Component({
  selector: 'app-create-app-modal',
  templateUrl: './create-app-modal.component.html',
  styleUrls: ['./create-app-modal.component.scss'],
})
export class CreateAppModalComponent implements OnInit {
  icons: Icon[] = homeIcons;
  title = 'Create application';
  appForm: FormGroup;
  technologies: Observable<Technology[]> = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.appForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      projectDescription: ['', Validators.required],
      projectType: [''],
      id: ['', Validators.required],
      urlImage: [''],
      projectDependecies: [[]],
      projectTechnologies: [[]],
    });
  }
}
