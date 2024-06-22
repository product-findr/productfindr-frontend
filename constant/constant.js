export const ProductfindrAddress = "0x9A213F53334279C128C37DA962E5472eCD90554f";

export const ProductfindrABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "productName",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tagLine",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "productLink",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "twitterLink",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isOpenSource",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "string",
        name: "category",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "thumbNail",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "mediaFile",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "loomLink",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "workedWithTeam",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "string",
        name: "teamMembersInput",
        type: "string",
      },
    ],
    name: "ProductListed",
    type: "event",
  },
  {
    inputs: [],
    name: "getAllProducts",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "productName",
            type: "string",
          },
          {
            internalType: "string",
            name: "tagLine",
            type: "string",
          },
          {
            internalType: "string",
            name: "productLink",
            type: "string",
          },
          {
            internalType: "string",
            name: "twitterLink",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isOpenSource",
            type: "bool",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "string",
            name: "thumbNail",
            type: "string",
          },
          {
            internalType: "string",
            name: "mediaFile",
            type: "string",
          },
          {
            internalType: "string",
            name: "loomLink",
            type: "string",
          },
          {
            internalType: "bool",
            name: "workedWithTeam",
            type: "bool",
          },
          {
            internalType: "string",
            name: "teamMembersInput",
            type: "string",
          },
        ],
        internalType: "struct ProductListing.Product[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[12]",
        name: "productData",
        type: "string[12]",
      },
    ],
    name: "listProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
