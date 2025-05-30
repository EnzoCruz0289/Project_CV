import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements AfterViewInit {
onClick(arg0: string) {
throw new Error('Method not implemented.');
}

  ngAfterViewInit() {
    const elemento = document.querySelector('.pantalla-completa') as HTMLElement;

    if (elemento) {
      elemento.addEventListener('mousemove', (e: MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;
        elemento.style.setProperty('--x', `${x}px`);
        elemento.style.setProperty('--y', `${y}px`);
      });
    }
  }
}