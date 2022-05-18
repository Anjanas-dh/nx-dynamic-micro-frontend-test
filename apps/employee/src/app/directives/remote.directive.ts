import {
  Directive,
  Injector,
  OnInit,
  ViewContainerRef,
  createNgModuleRef,
} from '@angular/core';
import { loadRemoteModule, setRemoteDefinitions } from '@nrwl/angular/mfe';
// import {
//   loadRemoteModule,
//   LoadRemoteModuleEsmOptions,
// } from '@angular-architects/module-federation';

@Directive({
  selector: '[dynamicMfeTestShellsRemote]',
})
export class RemoteDirective implements OnInit {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) {
    console.log('directive constructed');
  }

  async ngOnInit(): Promise<void> {
    console.log('directive ngOnInit');

    const remoteModule = await loadRemoteModule('todo', './Module').then(
      (m) => m.RemoteEntryModule
    );
    console.log('directive remoteModule', remoteModule);

    const planBarModuleRef = createNgModuleRef(
      remoteModule.RemoteEntryModule,
      this.injector
    );
    this.viewContainerRef.createComponent(
      remoteModule.RemoteEntryComponent,
      planBarModuleRef
    );
  }
}
