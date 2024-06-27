export const ProductfindrAddress = "0xd544F1b378C668b2e41188e8a7887F3a20A6b30B";

export const ProductfindrABI = [
	{
		"inputs": [
			{
				"internalType": "string[12]",
				"name": "productData",
				"type": "string[12]"
			}
		],
		"name": "listProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "tagLine",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "productLink",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "twitterLink",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isOpenSource",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "category",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "thumbNail",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "mediaFile",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "loomLink",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "workedWithTeam",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "teamMembersInput",
				"type": "string"
			}
		],
		"name": "ProductListed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_targetNumberOfTesters",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_testingGoal",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_loomLink",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "_goals",
				"type": "string[]"
			},
			{
				"internalType": "string",
				"name": "_startingDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_endingDate",
				"type": "string"
			}
		],
		"name": "storeBetaTestingData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllProducts",
		"outputs": [
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
					}
				],
				"internalType": "struct ProductListing.Product[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBetaTestingData",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];