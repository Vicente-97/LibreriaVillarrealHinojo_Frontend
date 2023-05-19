import { Books } from "./bookInterface";
import { user } from "./userCompleto";

export interface Favorite{
    book:Books,
    user: user,
    quantity:Number

}