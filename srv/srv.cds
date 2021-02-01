namespace custom.a.srv;

using {custom.a.db} from '../db/db';

service AnyService {

    entity Peoples as projection on db.People;

}
