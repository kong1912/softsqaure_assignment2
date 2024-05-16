import { Component } from '@angular/core';
import { MylovePipe } from './mylove.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [MylovePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
}
