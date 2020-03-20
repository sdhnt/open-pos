import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  newUser: EventEmitter<any> = new EventEmitter();
  cbUpdateCreated: EventEmitter<any> = new EventEmitter();
  prodAddCreated: EventEmitter<any> = new EventEmitter();
  productUpdateCreated: EventEmitter<any> = new EventEmitter();
  addRecCalcCreated: EventEmitter<any> = new EventEmitter();
  genRecCreated: EventEmitter<any> = new EventEmitter();
  addSingleProdCreated: EventEmitter<any> = new EventEmitter();
  addRecProdCreated: EventEmitter<any> = new EventEmitter();
  addRecCalcCcreated: EventEmitter<any> = new EventEmitter();
  viewRecs: EventEmitter<any> = new EventEmitter();
  constructor() { }

  emitNewUserEvent(data?) {
    this.newUser.emit(data);
  }

  emitCbUpdateCreated(data?) {
    this.cbUpdateCreated.emit(data);
  }

  emitProdAddCreated(data?) {
    this.prodAddCreated.emit(data);
  }

  emitProductUpdateCreated(data?) {
    this.productUpdateCreated.emit(data);
  }

  emitAddRecCalcCreated(data?) {
    this.addRecCalcCreated.emit(data);
  }

  emitGenRecCreated(data?) {
    console.log(data);
    this.genRecCreated.emit(data);
  }

  emitAddSingleProdCreated(data?) {
    this.addSingleProdCreated.emit(data);
  }

  emitAddRecProdCreated(data?) {
    console.log(data);
    this.addRecProdCreated.emit(data);
  }

  emitAddRecCalcCcreated(data?) {
    this.addRecCalcCcreated.emit(data);
  }

  emitViewRecs(data?) {
    this.viewRecs.emit(data);
  }
}
