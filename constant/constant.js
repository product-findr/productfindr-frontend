export const ProductfindrAddress = "0xd544F1b378C668b2e41188e8a7887F3a20A6b30B";

export const ProductfindrABI = [
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
    inputs: [
      {
        internalType: "string",
        name: "_productName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_targetNumberOfTesters",
        type: "string",
      },
      {
        internalType: "string",
        name: "_testingGoal",
        type: "string",
      },
      {
        internalType: "string",
        name: "_loomLink",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_goals",
        type: "string[]",
      },
      {
        internalType: "string",
        name: "_startingDate",
        type: "string",
      },
      {
        internalType: "string",
        name: "_endingDate",
        type: "string",
      },
    ],
    name: "storeBetaTestingData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    inputs: [],
    name: "getBetaTestingData",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const UserInfoAddress = "0x27384e29EbF7DfD5aa0d58D4972d7C191bd94840";

export const UserInfoABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "username",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "string",
        name: "bio",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "interests",
        type: "string[]",
      },
    ],
    name: "addUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "deleteUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "username",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "string",
        name: "bio",
        type: "string",
      },
    ],
    name: "updateUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "string[]",
        name: "interests",
        type: "string[]",
      },
    ],
    name: "updateUserInterests",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "username",
        type: "string",
      },
    ],
    name: "UserAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "interests",
        type: "string[]",
      },
    ],
    name: "UserInterestsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "username",
        type: "string",
      },
    ],
    name: "UserUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUser",
    outputs: [
      {
        internalType: "string",
        name: "username",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "string",
        name: "bio",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "interests",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUserInterests",
    outputs: [
      {
        internalType: "string[]",
        name: "interests",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "userExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const ProductFindRMainAddress =
  "0x5D4e28Ab9B654225a3D5a33BD74d16e6188Ac726";

export const ProductFindRMainABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_productAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_commentAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_reviewAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "initialOwner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reputation",
          "type": "uint256"
        }
      ],
      "name": "UserReputationUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_reviewer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_content",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_rating",
          "type": "uint256"
        }
      ],
      "name": "addReview",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_content",
          "type": "string"
        }
      ],
      "name": "commentOnProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_commentId",
          "type": "uint256"
        }
      ],
      "name": "getComment",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "commenter",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "content",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct Comment.CommentInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_commentId",
          "type": "uint256"
        }
      ],
      "name": "getCommenter",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        }
      ],
      "name": "getComments",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "commenter",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "content",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct Comment.CommentInfo[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        }
      ],
      "name": "getCommentsCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getListedProducts",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "productName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "tagLine",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "productLink",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "twitterLink",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "description",
                  "type": "string"
                },
                {
                  "internalType": "bool",
                  "name": "isOpenSource",
                  "type": "bool"
                },
                {
                  "internalType": "string",
                  "name": "category",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "thumbNail",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "mediaFile",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "loomLink",
                  "type": "string"
                },
                {
                  "internalType": "bool",
                  "name": "workedWithTeam",
                  "type": "bool"
                },
                {
                  "internalType": "string",
                  "name": "teamMembersInput",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "pricingOption",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "offer",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "promoCode",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "expirationDate",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "betaTestingLink",
                  "type": "string"
                }
              ],
              "internalType": "struct Product.ProductDetails",
              "name": "details",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "upvotes",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "betaTestingAvailable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct Product.ProductInfo[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getListedProductsAvailable",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "productName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "tagLine",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "productLink",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "twitterLink",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "description",
                  "type": "string"
                },
                {
                  "internalType": "bool",
                  "name": "isOpenSource",
                  "type": "bool"
                },
                {
                  "internalType": "string",
                  "name": "category",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "thumbNail",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "mediaFile",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "loomLink",
                  "type": "string"
                },
                {
                  "internalType": "bool",
                  "name": "workedWithTeam",
                  "type": "bool"
                },
                {
                  "internalType": "string",
                  "name": "teamMembersInput",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "pricingOption",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "offer",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "promoCode",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "expirationDate",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "betaTestingLink",
                  "type": "string"
                }
              ],
              "internalType": "struct Product.ProductDetails",
              "name": "details",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "upvotes",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "betaTestingAvailable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct Product.ProductInfo[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        }
      ],
      "name": "getProduct",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "productName",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "tagLine",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "productLink",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "twitterLink",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "description",
                  "type": "string"
                },
                {
                  "internalType": "bool",
                  "name": "isOpenSource",
                  "type": "bool"
                },
                {
                  "internalType": "string",
                  "name": "category",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "thumbNail",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "mediaFile",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "loomLink",
                  "type": "string"
                },
                {
                  "internalType": "bool",
                  "name": "workedWithTeam",
                  "type": "bool"
                },
                {
                  "internalType": "string",
                  "name": "teamMembersInput",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "pricingOption",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "offer",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "promoCode",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "expirationDate",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "betaTestingLink",
                  "type": "string"
                }
              ],
              "internalType": "struct Product.ProductDetails",
              "name": "details",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "upvotes",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "betaTestingAvailable",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct Product.ProductInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_reviewId",
          "type": "uint256"
        }
      ],
      "name": "getReview",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "reviewer",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "content",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "rating",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct Review.ReviewInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_reviewId",
          "type": "uint256"
        }
      ],
      "name": "getReviewer",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        }
      ],
      "name": "getReviews",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "reviewer",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "content",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "rating",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct Review.ReviewInfo[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        }
      ],
      "name": "getReviewsCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "productName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "tagLine",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "productLink",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "twitterLink",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "isOpenSource",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "category",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "thumbNail",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "mediaFile",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "loomLink",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "workedWithTeam",
              "type": "bool"
            },
            {
              "internalType": "string",
              "name": "teamMembersInput",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "pricingOption",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "offer",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "promoCode",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "expirationDate",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "betaTestingLink",
              "type": "string"
            }
          ],
          "internalType": "struct Product.ProductDetails",
          "name": "details",
          "type": "tuple"
        }
      ],
      "name": "registerProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_upvoter",
          "type": "address"
        }
      ],
      "name": "upvoteProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userReputation",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
];