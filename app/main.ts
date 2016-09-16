// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { Page1Component, Page2Component } from './pages';
import { routes } from './app.routes';

@NgModule({
    declarations: [AppComponent, Page1Component, Page2Component],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forRoot(routes)],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);