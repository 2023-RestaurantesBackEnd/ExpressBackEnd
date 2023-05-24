import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpinnerComponent } from './spinner/spinner.component';
@NgModule({
  declarations: [TableComponent, SpinnerComponent],
  imports: [
    CommonModule,
    TableModule,
    ContextMenuModule,
    ProgressSpinnerModule,
  ],
  exports: [TableComponent, SpinnerComponent],
})
export class SharedModule {}
