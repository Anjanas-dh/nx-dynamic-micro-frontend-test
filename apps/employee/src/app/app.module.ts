import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mfe';
import { RemoteDirectiveModule } from './directives/remote.directive.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RemoteDirectiveModule,
    RouterModule.forRoot(
      [
        {
          path: 'login',
          loadChildren: () =>
            loadRemoteModule('login', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: '',
          component: NxWelcomeComponent,
        },
        {
          path: 'todo',
          loadChildren: () =>
            loadRemoteModule('todo', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
