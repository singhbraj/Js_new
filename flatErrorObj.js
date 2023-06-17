


let outPutObj = {}

const constructResult = (key,value) =>{
/* console.log("key===>",key)
console.log("value===>",value) */



 value.forEach(item=>{
  let keysList = Object.keys(item)
  let str = ''
  if(keysList.includes("invoiceId")){
  str = `${str}.${item.invoiceId}`
  }
   if(keysList.includes("merchandiseId")){
  str = `${str}.${item.merchandiseId}`
  }
 
   if(keysList.includes("fieldId") && item?.fieldId){
    str = `${str}.${item.fieldId}`
  }

  if(keysList.includes("partyType")){
    str = `${str}.${item.partyType}`
  }
  
   if(keysList.includes("fieldName")){
  str = `${str}.${item.fieldName}`
  }

  
  if(str[0] === '.'){
  str = str.slice(1)
  }
  
  /* console.log(str) */
  
  outPutObj[`${key}`]={...outPutObj[`${key}`],[str]:{...item}}
  
  
}) 

/* console.log(Object.keys(value)) */

}

let errorObj = {
  "header": [{
      "fieldmessage": "[5/8] Country of destination code is missing in Header section and therefore country of destination code in item section should be filled for Merchandise Seq No: 1",
      "fieldmessageType": "WARNING",
      "fieldName": "destinationCountry",
      "invoiceId": "vuwuAWdMljZ2i0fsrDp7",
      "merchandiseId": "XnkIsq1ri3PWVVzqTUlT",
      "fieldId": ""
    },
    {
      "fieldmessage": "[7/4] Mode of transport at the border is missing",
      "fieldmessageType": "WARNING",
      "fieldName": "borderTransportMode"
    },
    {
      "fieldmessage": "[7/2] Container is missing",
      "fieldmessageType": "WARNING",
      "fieldName": "container"
    }
  ],
  "parties": [{
      "fieldmessage": "[3/17] Declarant - Street and Number is missing",
      "fieldmessageType": "WARNING",
      "fieldName": "AddressLine1",
      "partyType": "declarant"
    },
    {
      "fieldmessage": "[3/17] Declarant - PostCode is missing",
      "fieldmessageType": "WARNING",
      "fieldName": "ZipCode",
      "partyType": "declarant"
    },
    {
      "fieldmessage": "[3/17] Declarant - City is missing",
      "fieldmessageType": "WARNING",
      "fieldName": "City",
      "partyType": "declarant"
    },
    {
      "fieldmessage": "[3/17] Declarant - Name is missing",
      "fieldmessageType": "WARNING",
      "fieldName": "FullName",
      "partyType": "declarant"
    },
    {
      "fieldmessage": "[3/12] Exporter Identification No. is missing",
      "fieldmessageType": "WARNING",
      "fieldName": "eoriNumber",
      "partyType": "exporter"
    },
    {
      "fieldmessage": "[3/41] Person Presenting the Goods to Customs in case of Entry in the Declarant's Records (EIDR) or Pre-Lodged Customs Declaration Identification Number is missing",
      "fieldmessageType": "WARNING",
      "fieldName": "eidrEoriNumber"
    },
    {
      "fieldmessage": "[3/17] | [3/18] Declarant is missing",
      "fieldmessageType": "WARNING",
      "fieldName": "declarant",
      "partyType": "declarant"
    }
  ],
  "items": [{
      "fieldmessage": "[5/16] Preference is missing",
      "fieldmessageType": "WARNING",
      "fieldName": "preference",
      "invoiceId": "vuwuAWdMljZ2i0fsrDp7",
      "merchandiseId": "XnkIsq1ri3PWVVzqTUlT",
      "fieldId": ""
    },
    {
      "fieldmessage": "[6/5] Gross Mass is missing",
      "fieldmessageType": "WARNING",
      "fieldName": "grossMass",
      "invoiceId": "vuwuAWdMljZ2i0fsrDp7",
      "merchandiseId": "XnkIsq1ri3PWVVzqTUlT",
      "fieldId": ""
    },
    {
      "fieldmessage": "[6/9] Types of Packages is missing",
      "fieldmessageType": "WARNING",
      "fieldName": "packageType",
      "invoiceId": "vuwuAWdMljZ2i0fsrDp7",
      "merchandiseId": "XnkIsq1ri3PWVVzqTUlT",
      "fieldId": ""
    },
    {
      "fieldmessage": "[8/5] Nature of Transaction is missing in Header section and therefore nature of transaction in item section should be filled for Merchandise Seq No: 1",
      "fieldmessageType": "WARNING",
      "fieldName": "transactionNature",
      "invoiceId": "vuwuAWdMljZ2i0fsrDp7",
      "merchandiseId": "XnkIsq1ri3PWVVzqTUlT",
      "fieldId": ""
    },
    {
      "fieldmessage": "[6/1] Net Mass is missing",
      "fieldmessageType": "WARNING",
      "fieldName": "netMass",
      "invoiceId": "vuwuAWdMljZ2i0fsrDp7",
      "merchandiseId": "XnkIsq1ri3PWVVzqTUlT",
      "fieldId": ""
    },
    {
      "fieldmessage": "[6/18] Description of Goods is missing",
      "fieldmessageType": "WARNING",
      "fieldName": "description",
      "invoiceId": "vuwuAWdMljZ2i0fsrDp7",
      "merchandiseId": "XnkIsq1ri3PWVVzqTUlT",
      "fieldId": ""
    },
    {
      "fieldmessage": "[6/10] Number of Packages is missing",
      "fieldmessageType": "WARNING",
      "fieldName": "packageCount",
      "invoiceId": "vuwuAWdMljZ2i0fsrDp7",
      "merchandiseId": "XnkIsq1ri3PWVVzqTUlT",
      "fieldId": ""
    },
    {
      "fieldmessage": "[5/16] Country of Preferential Origin is missing",
      "fieldmessageType": "WARNING",
      "fieldName": "prefrenceOrigin",
      "invoiceId": "vuwuAWdMljZ2i0fsrDp7",
      "merchandiseId": "XnkIsq1ri3PWVVzqTUlT",
      "fieldId": ""
    }
  ],
  "transport": []
}







let keyValuePair = Object.entries(errorObj)


for([key,value] of keyValuePair){
constructResult(key,value)
}

console.log(outPutObj)


