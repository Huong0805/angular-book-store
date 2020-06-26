import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  constructor() { }

  logtoConsole(msg) {
    console.log(msg);
  }


}
