import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Product } from "../Product";

@Injectable()
export class test{
    prod: Product[]=[];
    test: boolean = true;
    update = new Subject<boolean>();
}