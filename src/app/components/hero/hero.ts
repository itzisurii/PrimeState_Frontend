import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  @ViewChild('heroImage') heroImage!: ElementRef<HTMLImageElement>;

  ngAfterViewInit(): void {
    // Example: make sure it always covers parent
    const img = this.heroImage.nativeElement;
    img.style.objectFit = 'cover';
    img.style.width = '100%';
    img.style.height = '100%';
  }
}
