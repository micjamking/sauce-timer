import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Modules
import { AppRoutesModule } from './app.routes';

// Views
import { AppComponent } from './views/app-view/app.component';
import { TimerViewComponent } from './views/timer-view/timer-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';

// Components
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HistoryComponent } from './components/history/history.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import { TimerComponent } from './components/timer/timer.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';

// Services
import { TimerService } from './services/timer/timer.service';

@NgModule({
  declarations: [
    AppComponent,
    TimerViewComponent,
    AboutViewComponent,
    SidebarComponent,
    HistoryComponent,
    SettingsComponent,
    TabsComponent,
    TabComponent,
    TimerComponent,
    ActionButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule
  ],
  providers: [
    TimerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
