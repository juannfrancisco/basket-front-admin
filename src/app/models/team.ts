import { Contact } from './contact';
export class Team {

    oid:string;
    name:string;
    nameURL:string;
    bio:string;
    gender:string;
    category:string;
    contact:Contact;
    


    constructor(){
        this.contact = new Contact();
    }
	//ngprivate Contact contact;
}
