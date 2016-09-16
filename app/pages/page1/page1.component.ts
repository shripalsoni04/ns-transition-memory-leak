import { Component } from '@angular/core';

import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'page1',
    templateUrl: 'pages/page1/page1.component.html'
})
export class Page1Component{

    constructor(private routerExtensions: RouterExtensions){

    }

    goToPage2(){
        // no memory leak with fade transition.
        //this.routerExtensions.navigate(['page2']);

        // memory leak when slide transition
        this.routerExtensions.navigate(['page2'], {
            transition: {
                name: 'slide'
            }
        });
    }
}