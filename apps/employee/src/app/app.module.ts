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
          path: '',
          children: [
            {
              path: '',
              loadChildren: () =>
                loadRemoteModule('login', './Module').then(
                  (m) => m.RemoteEntryModule
                ),
            },
          ],
        },
        {
          path: 'todo',
          children: [
            {
              path: '',
              loadChildren: () =>
                loadRemoteModule('login', './Module').then(
                  (m) => m.RemoteEntryModule
                ),
            },
            {
              path: '',
              loadChildren: () =>
                loadRemoteModule('todo', './Module').then(
                  (m) => m.RemoteEntryModule
                ),
              outlet: 'planner',
            },
          ],
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
