import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabComponent} from './tab.component';
import {MatTabsModule} from '@angular/material';
import {HomeComponent} from './home/home.component';
import {PerformanceComponent} from './performance/performance.component';
import {NativeHardwareTestComponent} from './native-hardware-test/native-hardware-test.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    HttpClientModule
  ],
  declarations: [TabComponent, HomeComponent, PerformanceComponent, NativeHardwareTestComponent],
  exports: [TabComponent]
})
export class TabModule {
}
