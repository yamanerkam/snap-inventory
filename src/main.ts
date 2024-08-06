import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

defineCustomElements(window);
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({"projectId":"snap-inventory-e69c6","appId":"1:564314679730:web:91f192636202cc7ec25cab","storageBucket":"snap-inventory-e69c6.appspot.com","apiKey":"AIzaSyCVcbGDXbdilyYTM2kygtvYwvm8o1jKX6s","authDomain":"snap-inventory-e69c6.firebaseapp.com","messagingSenderId":"564314679730"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()),
  ],
});
