let invoices = [{
    "shipmentId": "KX-Y3A4-7579",
    "invoiceId": "I9W7v7NLaGQ7tsCkAnFl",
    "invoiceDate": {
      "epochs": 1660418858802
    },
    "invoiceTotal": "201600",
    "poNo": "YCAD-1234-1",
    "currency": "EUR",
    "incoTermsConditionsCode": "EXW",
    "descriptionOfPlaceOfDelivery": "BARCELONA",
    "deliveryZoneIndicator": "1",
    "merchandises": [
      {
      "merchandiseId": "xFXv2ZXllndVQM0Xkw5K",
      "invoiceId": "I9W7v7NLaGQ7tsCkAnFl",
      "packageType": "BG",
      "commercialDescription": "DRAWER NIGHTSTAND",
      "commodityCode": "7326908688",
      "countryOfOrigin": "VN",
      "grossMass": "41",
      "tariffRegime": "2",
      "procedure": "01",
      "netMass": "28",
      "unitValue": "201600",
      "supUnitsQuantity": "0",
      "convertedUnitValue": "201600",
      "additionalInfo": [{
        "merchandiseId": "xFXv2ZXllndVQM0Xkw5K",
        "infoId": "3QuL1dpotVmTK4Zyfp3b",
        "code": "A001",
        "ref": "JDAJDHAD",
        "shipmentId": "KX-Y3A4-7579",
        "infoType": "ES_ITEM_PRODUCED_DOCUMENT",
        "documentDate": "2022-12-09"
      }],
      "statValue": "400",
      "supUnits": "AD",
      "specialMentions": [{
        "merchandiseId": "xFXv2ZXllndVQM0Xkw5K",
        "infoId": "atK7jGQsN1uXWwNuB49j",
        "code": "10300",
        "shipmentId": "KX-Y3A4-7579",
        "infoType": "ES_ITEM_SPECIAL_DOCUMENT"
      }],
      "itemDuties": [{
          "taxType": "A10",
          "taxBase": "10",
          "taxRate": "10",
          "taxAmount": "1",
          "merchandiseId": "xFXv2ZXllndVQM0Xkw5K",
          "merchandiseDutyId": "Y8OzJV5ySzDC49hShWzv"
        },
        {
          "taxType": "A10",
          "taxBase": "30",
          "taxRate": "40",
          "taxAmount": "12",
          "merchandiseId": "xFXv2ZXllndVQM0Xkw5K",
          "merchandiseDutyId": "uuRakDJdgZCqBPYNwRyx"
        }
      ],
      "totalAmount": "13",
      "tariffRegimeSuffix": "18",
      "procedureSuffix": "07",
      "previousDocumentInfo": [{
        "merchandiseId": "xFXv2ZXllndVQM0Xkw5K",
        "infoId": "5C7909AhwwmoniUC6Fr7",
        "shipmentId": "KX-Y3A4-7579",
        "infoType": "ES_ITEM_PREVIOUS_DOCUMENT"
      }],
      "packageCount": "2",
      "unitType": "KILOGRAM",
      "unitCount": "200",
      "unitPrice": "1008",
      "customValue": "300",
      "regimeAdditionalCode": "A01",
      "exciseCode": "0I8",
      "packageDescription": "Bolsa"
    }],
    "netWeight": "28.0",
    "grassWeight": "41.0"
  },
  {
    "shipmentId": "KX-Y3A4-7579",
    "invoiceId": "X6p1khOVDKf9RqUqA4uM",
    "invoiceDate": {},
    "merchandises": [{
      "merchandiseId": "0xuQ0pOX7Ji651WTxAz6",
      "invoiceId": "X6p1khOVDKf9RqUqA4uM",
      "grossMass": " ",
      "netMass": " ",
      "supUnitsQuantity": "0",
      "totalAmount": "0.0",
      "unitCount": "0"
    }],
    "netWeight": "0.0",
    "grassWeight": "0.0"
  }
]


function cal(invoices) {
  let invoiceId = "I9W7v7NLaGQ7tsCkAnFl"
  let merchandiseId = "xFXv2ZXllndVQM0Xkw5K"
  let tableName = "itemDuties"
  let id = "uuRakDJdgZCqBPYNwRyx"
  let rest = {
    taxType: "A99"
  }

  invoices = invoices.map((item) => item.invoiceId == invoiceId ?

    {
      ...item,
      merchandises: [...item.merchandises.map((merchItem) => merchItem.merchandiseId == merchandiseId ?

        {
          ...merchItem,
          [`${tableName}`]: [...merchItem[`${tableName}`].map((tableItem) => tableItem.merchandiseDutyId == id ? {
            ...tableItem,
            ...rest
          } : tableItem)]
        } : merchItem

      )]
    }

    :
    item

  )

  // console.log(invoices)
  return invoices

}




let res = cal(invoices)

let res1 = invoices[0].merchandises[0].itemDuties[1]
let res2 = res[0].merchandises[0].itemDuties[1]
console.log(res1)
console.log(res2)
