import { Component, Input, OnInit } from '@angular/core';
import { Item } from '@app/models/Item';
import { UtilsService } from '@app/services/helpers/utils/utils.service';

@Component({
  selector: 'm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() data: Item;
  backgroundLoaded: boolean = false;
  backgroundPlaceholder: string = this.utilsService.getPlaceholderBackground();

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {}

  onCardClick() {
    const actualPath = this.utilsService.getLastPath();

    switch (actualPath) {
      case 'characters':
        this.utilsService.navigateTo('/main/characters/' + this.data.id);
        break;
      default:
        this.utilsService.navigateTo('/main/characters');
        break;
    }
  }
}
