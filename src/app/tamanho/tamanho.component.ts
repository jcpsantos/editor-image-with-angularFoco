import {Component, OnInit} from '@angular/core';
import 'fabric';
import { ValueTransformer } from '@angular/compiler/src/util';
declare const fabric: any;

@Component({
    selector: 'app-tamanho',
    templateUrl: './tamanho.component.html'
})

export class TamanhoComponent {
    private canvas: any;
    
    private size: any = {
        width: 500,
        height: 800
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