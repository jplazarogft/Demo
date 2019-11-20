import { Component, OnInit, Output, EventEmitter, Input, TemplateRef } from '@angular/core';
import { ModalService } from './modal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() headerTemplate: TemplateRef<any>;
  @Input() bodyTemplate: TemplateRef<any>;
  @Input() footerTemplate: TemplateRef<any>;
  @Output() wrapperClick = new EventEmitter<boolean>();

  isVisible = new Observable<boolean>();

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.isVisible = this.modalService.visible$;
  }

  closeModal = () => this.modalService.toggleVisibility();

  sendEvent = () => this.wrapperClick.emit(true);
}
