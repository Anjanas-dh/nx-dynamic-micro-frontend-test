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

    await loadRemoteModule('todo', './Module').then((m) => {
      console.log('directive m:', m);
      console.log('directive m Module:', m.RemoteEntryModule);
      console.log('directive m Component', m.RemoteEntryComponent);
      console.error('RemoteEntryComponent not defined');
      // const planBarModuleRef = createNgModuleRef(
      //   m.RemoteEntryModule,
      //   this.injector
      // );
      // console.log('planBarModuleRef', planBarModuleRef);
      // this.viewContainerRef.createComponent(
      //   m.RemoteEntryComponent,
      //   planBarModuleRef
      // );
    });
  }
}
