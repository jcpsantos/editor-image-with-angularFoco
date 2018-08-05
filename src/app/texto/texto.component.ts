import {Component, OnInit, Input} from '@angular/core';
import 'fabric';
import {AppComponent} from '../app.component';
declare const fabric: any;


@Component({
    selector: 'app-texto',
    templateUrl: './texto.component.html'
})

export class TextoComponent{
    private textString: string;
    private canvas: any;
    
    constructor(){}

    ngOnInit(){
        this.canvas = new fabric.Canvas('canvas', {
            hoverCursor: 'pointer',
            selection: true,
            selectionBorderColor: 'blue'
          });
    }

    addText() {
        let textString = this.textString;
        let text = new fabric.IText(textString, {
          left: 10,
          top: 10,
          fontFamily: 'helvetica',
          angle: 0,
          fill: '#000000',
          scaleX: 0.5,
          scaleY: 0.5,
          fontWeight: '',
          hasRotatingPoint: true
        });
        this.extend(text, this.randomId());
        this.canvas.add(text);
        this.selectItemAfterAdded(text);
        this.textString = '';
      }

      extend(obj, id) {
        obj.toObject = (function (toObject) {
          return function () {
            return fabric.util.object.extend(toObject.call(this), {
              id: id
            });
          };
        })(obj.toObject);
      }

      randomId() {
        return Math.floor(Math.random() * 999999) + 1;
      }

      selectItemAfterAdded(obj) {
        this.canvas.deactivateAllWithDispatch().renderAll();
        this.canvas.setActiveObject(obj);
      }
}