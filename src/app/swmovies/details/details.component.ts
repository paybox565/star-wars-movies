import { Component, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
    @Input() details?: Movie
    @Input() listTitle?: string
    @Input() listData?: any
    @Input() listRelativeUrl?: string
}
