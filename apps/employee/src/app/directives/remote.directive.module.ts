import { NgModule } from '@angular/core';
import { RemoteDirective } from './remote.directive';

@NgModule({
  declarations: [RemoteDirective],
  exports: [RemoteDirective],
})
export class RemoteDirectiveModule {}
