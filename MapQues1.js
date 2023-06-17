const groupDocumentsByType = (documentsArray) => {
    console.log("groupDocumentsByType is called!!")
    const folderMap = new Map();
    documentsArray.forEach((doc) => {
      const {
        parentDocumentId
      } = doc
      console.log({parentDocumentId})
      const folder = doc.isObsolete ? "OBSOLETE" : (doc.documentType || "MISC")
      const docs = new Map();
      if (!folderMap.has(folder)) {
        docs.set(parentDocumentId, [doc])
        folderMap.set(folder, {
          id:Math.round(Math.random()*1000),
          isOpened: false,
          totalCount: 1,
          documents: docs
        })
      } else {
        const prevVal = folderMap.get(folder).documents;
        folderMap.get(folder).totalCount += 1;
        if (prevVal.has(parentDocumentId)) {
          let prevDocArr = prevVal.get(parentDocumentId);
          prevDocArr = [...prevDocArr, doc];
          prevVal.set(parentDocumentId, prevDocArr)
        } else {
          prevVal.set(parentDocumentId, [doc])
        }
      }
    })
    return folderMap;
  }
  
  
  let documents = [{
      "docid": "u8aRXXtLxCYguM01krvU",
      "documentType": "EMAIL_DOC",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/273811117-263692506-273811117-EMA      IL-1.png",
      "visible": 1,
      "displayName": "Email",
      "preIngestionEmailId": "273811117",
      "parentDocumentId": "263692506",
      "pageIndex": 1,
      "creationTimeStamp": "1662195413955",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 1
    },
    {
      "docid": "u8aRXXtLxCYguM01krvk",
      "documentType": "EMAIL_DOC",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/273811117-263692506-273811117-EMA      IL-1.png",
      "visible": 1,
      "displayName": "Email",
      "preIngestionEmailId": "273811117",
      "parentDocumentId": "263692506",
      "pageIndex": 1,
      "creationTimeStamp": "1662195413955",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 1
    },
    {
      "docid": "u8aRXXtLxCYguM01krvk",
      "documentType": "EMAIL_DOC",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/273811117-263692506-273811117-EMA      IL-1.png",
      "visible": 1,
      "displayName": "Email",
      "preIngestionEmailId": "273811118",
      "parentDocumentId": "263692507",
      "pageIndex": 1,
      "creationTimeStamp": "1662195413955",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 1
    },
    {
      "docid": "bB7tie1ykNIDgGmV6fuk",
      "documentType": "C88_PDF",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/1867425200-1528222183-KX-I5H7-13451_c88-PDF-1.png",
      "visible": 1,
      "displayName": "C88",
      "preIngestionEmailId": "1867425200",
      "parentDocumentId": "1528222183",
      "pageIndex": 1,
      "creationTimeStamp": "1664264364537",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 5
    },
    {
      "docid": "79Zz7asXWNvKe7BcnU8g",
      "documentType": "C88_PDF",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/1867425200-1528222183-KX-I5H7-13451_c88-PDF-2.png",
      "visible": 1,
      "displayName": "C88",
      "preIngestionEmailId": "1867425200",
      "parentDocumentId": "1528222183",
      "pageIndex": 2,
      "creationTimeStamp": "1664264364499",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 5
    },
    {
      "docid": "pShl43wdbfqLo45KYQI6",
      "documentType": "TSCA_DOC",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/2074740199-1215320485-KX-I5H7-13451-TSCA-PDF-1.png",
      "visible": 1,
      "displayName": "SCA Document",
      "preIngestionEmailId": "2074740199",
      "parentDocumentId": "1215320485",
      "pageIndex": 1,
      "creationTimeStamp": "1662195561327",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 2
    },
    {
      "docid": "qFkTZuFrYsYchWTWTjk3",
      "documentType": "C89_PDF",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/1570724481-718389218-KX-I5H7-13451_c89-PDF-1.png",
      "visible": 1,
      "displayName": "C89",
      "preIngestionEmailId": "1570724481",
      "parentDocumentId": "718389218",
      "pageIndex": 1,
      "creationTimeStamp": "1664271564820",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 10
    },
    {
      "docid": "3vGULeoNp8aPEoywbQtr",
      "documentType": "CDS_PDF",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/d4ed6eb9-613b-3300-4ad3-16289cc2ef2a-if5m04pdte9XaEhfAXxB-KX-I5H7-13451_CDS-PDF-1.png",
      "visible": 1,
      "displayName": "T1",
      "preIngestionEmailId": "1464917774",
      "parentDocumentId": "if5m04pdte9XaEhfAXxB",
      "pageIndex": 1,
      "creationTimeStamp": "1672373551157",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 14
    },
    {
      "docid": "AnJe6pdypVNw6qapLLug",
      "documentType": "CDS_PDF",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/d4ed6eb9-613b-3300-4ad3-16289cc2ef2a-if5m04pdte9XaEhfAXxB-KX-I5H7-13451_CDS-PDF-2.png",
      "visible": 1,
      "displayName": "T1",
      "preIngestionEmailId": "1464917774",
      "parentDocumentId": "if5m04pdte9XaEhfAXxB",
      "pageIndex": 2,
      "creationTimeStamp": "1672373551125",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 14
    },
    {
      "docid": "ez98p0zawfAW6ZF63Q08",
      "documentType": "DMS_TAX",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/ffffffff-da63-8917-6628-aedad8f52657-qm5nWnIS03e78x7KQyhe-KX-I5H7-13451_DMSTAX-PDF-1.png",
      "visible": 1,
      "displayName": "DMSTAX",
      "preIngestionEmailId": "1690173846",
      "parentDocumentId": "qm5nWnIS03e78x7KQyhe",
      "pageIndex": 1,
      "creationTimeStamp": "1678701203336",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 27
    }
  ];
  
  
  let res = groupDocumentsByType(documents)
  console.log(res)
  let res1 = Object.fromEntries(res)
  console.log(typeof res1, res1)
//   res1.forEach((it)=>{
//     console.log(Object.entries(it.documents))
//   })
  
  