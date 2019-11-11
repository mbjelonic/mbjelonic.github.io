var map = AmCharts.makeChart("mapdiv",{
type: "map",
theme: "dark",
projection: "mercator",
panEventsEnabled : true,
backgroundColor : "#FFFFFF",
backgroundAlpha : 1,
zoomControl: {
zoomControlEnabled : true
},
dataProvider : {
map : "worldHigh",
getAreasFromMap : true,
areas :
[
	{
		"id": "AT",
		"showAsSelected": true
	},
	{
		"id": "BE",
		"showAsSelected": true
	},
	{
		"id": "BA",
		"showAsSelected": true
	},
	{
	  "id": "CA",
	  "showAsSelected": true
  },
	{
	  "id": "CZ",
	  "showAsSelected": true
  },
	{
		"id": "HR",
		"showAsSelected": true
	},
	{
		"id": "DK",
		"showAsSelected": true
	},
	{
		"id": "FR",
		"showAsSelected": true
	},
	{
		"id": "DE",
		"showAsSelected": true
	},
	{
		"id": "GR",
		"showAsSelected": true
	},
	{
	  "id": "ID",
	  "showAsSelected": true
  },
	{
		"id": "IT",
		"showAsSelected": true
	},
	{
		"id": "LI",
		"showAsSelected": true
	},
	{
		"id": "LU",
		"showAsSelected": true
	},
	{
		"id": "ME",
		"showAsSelected": true
	},
	{
		"id": "NL",
		"showAsSelected": true
	},
	{
		"id": "NO",
		"showAsSelected": true
	},
	{
		"id": "RS",
		"showAsSelected": true
	},
	{
		"id": "SI",
		"showAsSelected": true
	},
	{
		"id": "ES",
		"showAsSelected": true
	},
	{
		"id": "SE",
		"showAsSelected": true
	},
	{
		"id": "CH",
		"showAsSelected": true
	},
	{
		"id": "GB",
		"showAsSelected": true
	},
	{
		"id": "VA",
		"showAsSelected": true
	},
	{
		"id": "CU",
		"showAsSelected": true
	},
	{
		"id": "US",
		"showAsSelected": true
	},
	{
		"id": "CN",
		"showAsSelected": true
	},
	{
		"id": "HK",
		"showAsSelected": true
	},
	{
		"id": "IL",
		"showAsSelected": true
	},
	{
		"id": "JP",
		"showAsSelected": true
	},
	{
		"id": "JO",
		"showAsSelected": true
	},
	{
		"id": "MY",
		"showAsSelected": true
	},
	{
	  "id": "PS",
	  "showAsSelected": true
  },
	{
		"id": "SG",
		"showAsSelected": true
	},
	{
		"id": "KR",
		"showAsSelected": true
	},
	{
		"id": "TH",
		"showAsSelected": true
	},
	{
		"id": "AU",
		"showAsSelected": true
	}
]
},
areasSettings : {
autoZoom : true,
color : "#B4B4B7",
colorSolid : "#84ADE9",
selectedColor : "#84ADE9",
outlineColor : "#666666",
rollOverColor : "#9EC2F7",
rollOverOutlineColor : "#000000"
}
});
