namespace custom.a.db;

using {
    cuid,
    managed
} from '@sap/cds/common';


entity People : cuid, managed {
    Name : String(30);
    Age  : Integer;
}
