namespace custom.a.db;

using {
    cuid,
    managed
} from '@sap/cds/common';


entity People : cuid, managed {
    Name : String(30);
    Age  : Integer;
    Date : DateTime default $now;
}

entity Media : cuid, managed {
    AttachmentMediaType : String(100);
    Attachment          : LargeBinary @Core.MediaType : AttachmentMediaType;
}

extend Media {
    FileName : String;
}
