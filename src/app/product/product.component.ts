import { Component } from "@angular/core";


@Component({
    selector : "app-product",
    templateUrl : "./product.component.html",
    styleUrls : ["./product.component.scss"]
})



export class productcomponent {
    pName : string[] = ["Hp","Dell","Lenovo"]
    pNo : number = 256
    pStatus : string = "dispatched"
}