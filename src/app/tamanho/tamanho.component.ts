import {Component, OnInit} from '@angular/core';
import 'fabric';
import { ValueTransformer } from '@angular/compiler/src/util';
import {AppComponent} from '../app.component';
declare const fabric: any;

@Component({
    selector: 'app-tamanho',
    templateUrl: './tamanho.component.html'
})

export class TamanhoComponent {
    private canvas: any;
    
    private size: any = {
        width: 540,
        height: 540
    };
    constructor(){}

    ngOnInit() {
        this.canvas = new fabric.Canvas('canvas', {
            hoverCursor: 'pointer',
            selection: true,
            selectionBorderColor: 'blue'
          });

        /*this.canvas.setWidth(this.size.width);
        this.canvas.setHeight(this.size.height);*/
        
    }

    changeSize(event: any) {
        this.canvas.setWidth(this.size.width);
        this.canvas.setHeight(this.size.height);
    }
}