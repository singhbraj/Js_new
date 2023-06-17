


const groupDocumentsByTypes = (documents) =>{

    const folderMap = new Map()
    
   documents.forEach((doc)=>{
   const {parentDocumentId} = doc;
   const folder = (doc.documentType)
   const docs = new Map()
   if(!folderMap.has(folder)){
       docs.set(parentDocumentId,[doc])
       folderMap.set(folder,
         {documents:docs}
       )
   }else{
   const prevValue = folderMap.get(folder).documents
      if(prevValue.has(parentDocumentId)){
          let prevDocArr = prevValue.get(parentDocumentId)
          prevDocArr = [...prevDocArr,doc];
          prevValue.set(parentDocumentId,prevDocArr)
      }else{
           prevValue.set(parentDocumentId,[doc])
      }
   }
   })
   
   
   return folderMap;


}

let documents = [
  {
      "docid": "qrv52qE4XFdhYZ3W7egW",
      "documentType": "EMAIL_DOC",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/1206308622-R3ZEfOLgweI0DSYunwyE-1206308622-EMAIL-1.png",
      "visible": 1,
      "displayName": "Email",
      "preIngestionEmailId": "1206308622",
      "parentDocumentId": "R3ZEfOLgweI0DSYunwyE",
      "pageIndex": 1,
      "creationTimeStamp": "1678775197849",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 1
  },
  {
      "docid": "ZyB4F16jZ6kdOzA9yinS",
      "documentType": "BOL",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/1206308622-uSvUFvNZonaQbyzJ8H6H-PO2402424025BL-1.png",
      "visible": 1,
      "displayName": "BILL OF LADING",
      "preIngestionEmailId": "1206308622",
      "parentDocumentId": "uSvUFvNZonaQbyzJ8H6H",
      "pageIndex": 1,
      "creationTimeStamp": "1678775197836",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 1
  },
  {
      "docid": "2BM1lnzOjczIToayxLiJ",
      "documentType": "INVOICE",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/7b286acc-218b-ea0e-8fcf-3abc9b516f16-7anncnq9xsaWRIsrcT6h-KX-I5H7-17105-Aggregation_file-XLS-1.png",
      "visible": 1,
      "displayName": "Commercial Invoice",
      "preIngestionEmailId": "1060622070",
      "parentDocumentId": "7anncnq9xsaWRIsrcT6h",
      "pageIndex": 1,
      "creationTimeStamp": "1679895047464",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 3
  },
  {
      "docid": "moxtyRZ4xrW0PbvyIf3D",
      "documentType": "INVOICE",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/7b286acc-218b-ea0e-8fcf-3abc9b516f16-7anncnq9xsaWRIsrcT6h-KX-I5H7-17105-Aggregation_file-XLS-2.png",
      "visible": 1,
      "displayName": "Commercial Invoice",
      "preIngestionEmailId": "1060622070",
      "parentDocumentId": "7anncnq9xsaWRIsrcT6h",
      "pageIndex": 2,
      "creationTimeStamp": "1679895047447",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 3
  },
  {
      "docid": "8PDEOu3sjiYx8sDVJziy",
      "documentType": "INVOICE",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/7b286acc-218b-ea0e-8fcf-3abc9b516f16-7anncnq9xsaWRIsrcT6h-KX-I5H7-17105-Aggregation_file-XLS-3.png",
      "visible": 1,
      "displayName": "Commercial Invoice",
      "preIngestionEmailId": "1060622070",
      "parentDocumentId": "7anncnq9xsaWRIsrcT6h",
      "pageIndex": 3,
      "creationTimeStamp": "1679895047428",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 3
  },
  {
      "docid": "qWB50GRqOLVVDf2r4rde",
      "documentType": "TSCA_DOC",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/ffffffff-deeb-69f0-6628-aedad8f52cb8-BfR8UtW4ikxo41PfVlVA-KX-I5H7-17105-TSCA-PDF-1.png",
      "visible": 1,
      "displayName": "SCA Document",
      "preIngestionEmailId": "1614211988",
      "parentDocumentId": "BfR8UtW4ikxo41PfVlVA",
      "pageIndex": 1,
      "creationTimeStamp": "1678777217691",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 2
  },
  {
      "docid": "PGiQILfU3W6VsnOO1UMl",
      "documentType": "TSCA_DOC",
      "remoteurl": "https://kxr-images-staging.s3.amazonaws.com/1206308622-ehC2jWF9biDEv8b4TSqE-TSCAstatementblanket-woodproduct-1.png",
      "visible": 1,
      "displayName": "SCA Document",
      "preIngestionEmailId": "1206308622",
      "parentDocumentId": "ehC2jWF9biDEv8b4TSqE",
      "pageIndex": 1,
      "creationTimeStamp": "1678775197862",
      "updationTimeStamp": "0",
      "enabled": 1,
      "version": 1
  }
]

const listOfSelectedDocument = (documentList)=>{
    let docsList = [];

    const data = Object.keys(documentList)
    // console.log({data})
    data.forEach((folder)=>{
            let folderData = documentList[folder]
            let {documents}  =   folderData
            let parentDocIds = Array.from(documents.keys())
            parentDocIds.forEach((parentDoc,index)=>{
              let docs = documents.get(parentDoc);
            //   console.log(docs)
              docsList=[...docsList,{documentId:docs?.[0]?.docid,documentName:`${folder}-${index+1}`,version:docs?.[0]?.version}]
            })
    })
console.log(docsList)
return docsList
}



let groupDocumentes = groupDocumentsByTypes(documents)

groupDocumentes =Object.fromEntries(groupDocumentes) 

const getSelected = listOfSelectedDocument(groupDocumentes)
console.log(getSelected)






