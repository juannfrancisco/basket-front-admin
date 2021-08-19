import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading:boolean = false;
  showImage:boolean = false;

  constructor() { }

  show( showImage?:boolean ){
    this.isLoading = true;
    this.showImage = showImage;
  }

  hide(){
    this.isLoading = false;
    this.showImage = false;
  }
  
}
