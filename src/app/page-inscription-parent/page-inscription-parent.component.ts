import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-inscription-parent',
  templateUrl: './page-inscription-parent.component.html',
  styleUrls: ['./page-inscription-parent.component.scss']
})
export class PageInscriptionParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   *Charger la photo de profil
   **/
  onLoadFile(event: any): void {
    let image = document.getElementById(event.target.id + "Img");
    // @ts-ignore
    image.src = URL.createObjectURL(event.target.files[0]);
  };

}
