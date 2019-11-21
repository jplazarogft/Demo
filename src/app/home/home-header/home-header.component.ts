import { Component, OnInit, Input } from '@angular/core';
import { Icon } from '@sharedModels/icon';
import { ModalService } from '../../shared/components/modal/modal.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
  providers: [ModalService],
})
export class HomeHeaderComponent implements OnInit {
  @Input() icons: Icon[] = [];
  @Input() title = '';

  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  showCreateAppModal = () => this.modalService.toggleVisibility();
}
