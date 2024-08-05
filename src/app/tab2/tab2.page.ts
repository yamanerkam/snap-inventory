import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonButton, IonItem, IonList, IonInput, IonFabButton, IonIcon, IonFab, IonImg } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

type InventoryObject = {
  id: string,
  name: string,
  quantity: number,
  price: number,
  imgUrl: string,
  createdAt: Date,
  updatedAt?: Date
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonImg, IonFab, IonIcon, IonFabButton, IonInput, IonList, CommonModule, FormsModule, IonItem, IonButton, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {
  name: string = ''
  quantity: number | null = null
  price: number | null = null
  imgUrl: string | undefined = undefined

  constructor() { }
  onClick() {
    console.log(this.name, this.quantity, this.price)
  }

  public async photo() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    console.log(capturedPhoto.webPath)
    if (capturedPhoto) {
      this.imgUrl = capturedPhoto.webPath
    }
  }

}
