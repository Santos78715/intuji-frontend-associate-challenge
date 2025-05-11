import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { UserInformationComponent } from './user-information/user-information.component';

@NgModule({
  declarations: [SearchComponent, UserInformationComponent],
  imports: [CommonModule],
  exports: [SearchComponent, UserInformationComponent],
})
export class ToolbarModule {}
