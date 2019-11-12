am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_spiritedaway);
// Themes end

// Define country data
var countries = {
  "AD": {
    "country": "Andorra",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "AE": {
    "country": "United Arab Emirates",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "AF": {
    "country": "Afghanistan",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "AG": {
    "country": "Antigua and Barbuda",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "AI": {
    "country": "Anguilla",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "AL": {
    "country": "Albania",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "AM": {
    "country": "Armenia",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "AO": {
    "country": "Angola",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "AQ": {
    "country": "Antarctica",
    "continent_code": "AN",
    "continent": "Antarctica",
    "maps": []
  },
  "AR": {
    "country": "Argentina",
    "continent_code": "SA",
    "continent": "South America",
    "maps": []
  },
  "AS": {
    "country": "American Samoa",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "AT": {
    "country": "Austria",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "austriaLow", "austriaHigh" ]
  },
  "AU": {
    "country": "Australia",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": [ "australiaLow", "australiaHigh" ]
  },
  "AW": {
    "country": "Aruba",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "AX": {
    "country": "Aland Islands",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "AZ": {
    "country": "Azerbaijan",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "BA": {
    "country": "Bosnia and Herzegovina",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "bosniaHerzegovinaLow", "bosniaHerzegovinaHigh", "bosniaHerzegovinaCantonsLow", "bosniaHerzegovinaCantonsHigh" ]
  },
  "BB": {
    "country": "Barbados",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "BD": {
    "country": "Bangladesh",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "BE": {
    "country": "Belgium",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "BF": {
    "country": "Burkina Faso",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "BG": {
    "country": "Bulgaria",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "BH": {
    "country": "Bahrain",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "BI": {
    "country": "Burundi",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "BJ": {
    "country": "Benin",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "BL": {
    "country": "Saint Barthelemy",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "BM": {
    "country": "Bermuda",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "BN": {
    "country": "Brunei Darussalam",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "BO": {
    "country": "Bolivia, Plurinational State of",
    "continent_code": "SA",
    "continent": "South America",
    "maps": []
  },
  "BQ": {
    "country": "Bonaire, Sint Eustatius and Saba",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "BR": {
    "country": "Brazil",
    "continent_code": "SA",
    "continent": "South America",
    "maps": []
  },
  "BS": {
    "country": "Bahamas",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "BT": {
    "country": "Bhutan",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "BV": {
    "country": "Bouvet Island",
    "continent_code": "AN",
    "continent": "Antarctica",
    "maps": []
  },
  "BW": {
    "country": "Botswana",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "BY": {
    "country": "Belarus",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "BZ": {
    "country": "Belize",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "CA": {
    "country": "Canada",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [ "canadaLow", "canadaHigh" ]
  },
  "CC": {
    "country": "Cocos (Keeling) Islands",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "CD": {
    "country": "Congo, the Democratic Republic of the",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "CF": {
    "country": "Central African Republic",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "CG": {
    "country": "Congo",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "CH": {
    "country": "Switzerland",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "switzerlandLow", "switzerlandHigh" ]
  },
  "CI": {
    "country": "Cote d'Ivoire",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "CK": {
    "country": "Cook Islands",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "CL": {
    "country": "Chile",
    "continent_code": "SA",
    "continent": "South America",
    "maps": []
  },
  "CM": {
    "country": "Cameroon",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "CN": {
    "country": "China",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [ "chinaLow", "chinaHigh" ]
  },
  "CO": {
    "country": "Colombia",
    "continent_code": "SA",
    "continent": "South America",
    "maps": []
  },
  "CR": {
    "country": "Costa Rica",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "CU": {
    "country": "Cuba",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [ "cubaLow", "cubaHigh" ]
  },
  "CV": {
    "country": "Cape Verde",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "CW": {
    "country": "Curacao",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "CX": {
    "country": "Christmas Island",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "CY": {
    "country": "Cyprus",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ ]
  },
  "CZ": {
    "country": "Czech Republic",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "czechiaLow", "czechiaHigh" ]
  },
  "DE": {
    "country": "Germany",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "germanyLow", "germanyHigh" ]
  },
  "DJ": {
    "country": "Djibouti",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "DK": {
    "country": "Denmark",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "denmarkLow", "denmarkHigh" ]
  },
  "DM": {
    "country": "Dominica",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "DO": {
    "country": "Dominican Republic",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "DZ": {
    "country": "Algeria",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "EC": {
    "country": "Ecuador",
    "continent_code": "SA",
    "continent": "South America",
    "maps": []
  },
  "EE": {
    "country": "Estonia",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "EG": {
    "country": "Egypt",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": [ "egyptLow", "egyptHigh" ]
  },
  "EH": {
    "country": "Western Sahara",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "ER": {
    "country": "Eritrea",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "ES": {
    "country": "Spain",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "spainLow", "spainHigh", "spainProvincesLow", "spainProvincesHigh" ]
  },
  "ET": {
    "country": "Ethiopia",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "FI": {
    "country": "Finland",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "FJ": {
    "country": "Fiji",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "FK": {
    "country": "Falkland Islands (Malvinas)",
    "continent_code": "SA",
    "continent": "South America",
    "maps": []
  },
  "FM": {
    "country": "Micronesia, Federated States of",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "FO": {
    "country": "Faroe Islands",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "FR": {
    "country": "France",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "franceLow", "franceHigh", "franceDepartmentsLow", "franceDepartmentsHigh" ]
  },
  "GA": {
    "country": "Gabon",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "GB": {
    "country": "United Kingdom",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "ukLow", "ukHigh", "ukCountiesLow", "ukCountiesHigh" ]
  },
  "GB-CHA": {
    "country": "Channel Islands",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "GD": {
    "country": "Grenada",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "GE": {
    "country": "Georgia",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "GF": {
    "country": "French Guiana",
    "continent_code": "SA",
    "continent": "South America",
    "maps": []
  },
  "GG": {
    "country": "Guernsey",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "GH": {
    "country": "Ghana",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "GI": {
    "country": "Gibraltar",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "GL": {
    "country": "Greenland",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "GM": {
    "country": "Gambia",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "GN": {
    "country": "Guinea",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "GP": {
    "country": "Guadeloupe",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "GQ": {
    "country": "Equatorial Guinea",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "GR": {
    "country": "Greece",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "greeceLow", "greeceHigh" ]
  },
  "GS": {
    "country": "South Georgia and the South Sandwich Islands",
    "continent_code": "AN",
    "continent": "Antarctica",
    "maps": []
  },
  "GT": {
    "country": "Guatemala",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "GU": {
    "country": "Guam",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "GW": {
    "country": "Guinea-Bissau",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "GY": {
    "country": "Guyana",
    "continent_code": "SA",
    "continent": "South America",
    "maps": []
  },
  "HK": {
    "country": "Hong Kong",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [ "hongKongLow", "hongKongHigh" ]
  },
  "HM": {
    "country": "Heard Island and McDonald Islands",
    "continent_code": "AN",
    "continent": "Antarctica",
    "maps": []
  },
  "HN": {
    "country": "Honduras",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "HR": {
    "country": "Croatia",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "croatiaLow", "croatiaHigh" ]
  },
  "HT": {
    "country": "Haiti",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "HU": {
    "country": "Hungary",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "ID": {
    "country": "Indonesia",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [ "indonesiaLow", "indonesiaHigh" ]
  },
  "IE": {
    "country": "Ireland",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "IL": {
    "country": "Israel",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [ "israelLow", "israelHigh", "israelPalestineLow", "israelPalestineHigh" ]
  },
  "IM": {
    "country": "Isle of Man",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "IN": {
    "country": "India",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "IO": {
    "country": "British Indian Ocean Territory",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "IQ": {
    "country": "Iraq",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "IR": {
    "country": "Iran, Islamic Republic of",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "IS": {
    "country": "Iceland",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "IT": {
    "country": "Italy",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "italyLow", "italyHigh" ]
  },
  "JE": {
    "country": "Jersey",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "JM": {
    "country": "Jamaica",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "JO": {
    "country": "Jordan",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [ "jordanLow", "jordanHigh" ]
  },
  "JP": {
    "country": "Japan",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [ "japanLow", "japanHigh" ]
  },
  "KE": {
    "country": "Kenya",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "KG": {
    "country": "Kyrgyzstan",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "KH": {
    "country": "Cambodia",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "KI": {
    "country": "Kiribati",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "KM": {
    "country": "Comoros",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "KN": {
    "country": "Saint Kitts and Nevis",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "KP": {
    "country": "Korea, Democratic People's Republic of",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "KR": {
    "country": "Korea, Republic of",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [ "southKoreaLow", "southKoreaHigh" ]
  },
  "KT": {
    "country": "Saint Kitts and Nevis",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "KW": {
    "country": "Kuwait",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "KY": {
    "country": "Cayman Islands",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "KZ": {
    "country": "Kazakhstan",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "LA": {
    "country": "Lao People's Democratic Republic",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "LB": {
    "country": "Lebanon",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "LC": {
    "country": "Saint Lucia",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "LI": {
    "country": "Liechtenstein",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "liechtensteinLow", "liechtensteinHigh" ]
  },
  "LK": {
    "country": "Sri Lanka",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "LR": {
    "country": "Liberia",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "LS": {
    "country": "Lesotho",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "LT": {
    "country": "Lithuania",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "LU": {
    "country": "Luxembourg",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "luxembourgLow", "luxembourgHigh" ]
  },
  "LV": {
    "country": "Latvia",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "LY": {
    "country": "Libya",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "MA": {
    "country": "Morocco",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "MC": {
    "country": "Monaco",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [  "monacoLow", "monacoHigh" ]
  },
  "MD": {
    "country": "Moldova, Republic of",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "ME": {
    "country": "Montenegro",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "montenegroLow", "montenegroHigh" ]
  },
  "MF": {
    "country": "Saint Martin (French Part)",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "MG": {
    "country": "Madagascar",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "MH": {
    "country": "Marshall Islands",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "MK": {
    "country": "North Macedonia",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "ML": {
    "country": "Mali",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "MM": {
    "country": "Myanmar",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "MN": {
    "country": "Mongolia",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "MO": {
    "country": "Macao",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [ "macaoLow", "macaoHigh" ]
  },
  "MP": {
    "country": "Northern Mariana Islands",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "MQ": {
    "country": "Martinique",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "MR": {
    "country": "Mauritania",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "MS": {
    "country": "Montserrat",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "MT": {
    "country": "Malta",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "MU": {
    "country": "Mauritius",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "MV": {
    "country": "Maldives",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "MW": {
    "country": "Malawi",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "MX": {
    "country": "Mexico",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [ "mexicoLow", "mexicoHigh" ]
  },
  "MY": {
    "country": "Malaysia",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [ "malaysiaLow", "malaysiaHigh" ]
  },
  "MZ": {
    "country": "Mozambique",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "NA": {
    "country": "Namibia",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "NC": {
    "country": "New Caledonia",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "NE": {
    "country": "Niger",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "NF": {
    "country": "Norfolk Island",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "NG": {
    "country": "Nigeria",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "NI": {
    "country": "Nicaragua",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "NL": {
    "country": "Netherlands",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "netherlandsLow", "netherlandsHigh" ]
  },
  "NO": {
    "country": "Norway",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "norwayLow", "norwayHigh" ]
  },
  "NP": {
    "country": "Nepal",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "NR": {
    "country": "Nauru",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "NU": {
    "country": "Niue",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "NZ": {
    "country": "New Zealand",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "OM": {
    "country": "Oman",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "PA": {
    "country": "Panama",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "PE": {
    "country": "Peru",
    "continent_code": "SA",
    "continent": "South America",
    "maps": []
  },
  "PF": {
    "country": "French Polynesia",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "PG": {
    "country": "Papua New Guinea",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "PH": {
    "country": "Philippines",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "PK": {
    "country": "Pakistan",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "PL": {
    "country": "Poland",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "PM": {
    "country": "Saint Pierre and Miquelon",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "PN": {
    "country": "Pitcairn",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "PR": {
    "country": "Puerto Rico",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "PS": {
    "country": "Palestinian, State of",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [ "palestineLow", "palestineHigh" ]
  },
  "PT": {
    "country": "Portugal",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "PW": {
    "country": "Palau",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "PY": {
    "country": "Paraguay",
    "continent_code": "SA",
    "continent": "South America",
    "maps": []
  },
  "QA": {
    "country": "Qatar",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "RE": {
    "country": "Reunion",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "RO": {
    "country": "Romania",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "RS": {
    "country": "Serbia",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "serbiaLow", "serbiaHigh", "serbiaNoKosovoLow", "serbiaNoKosovoHigh" ]
  },
  "RU": {
    "country": "Russian Federation",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "RW": {
    "country": "Rwanda",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "SA": {
    "country": "Saudi Arabia",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "SB": {
    "country": "Solomon Islands",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "SC": {
    "country": "Seychelles",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "SD": {
    "country": "Sudan",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "SE": {
    "country": "Sweden",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "swedenLow", "swedenHigh" ]
  },
  "SG": {
    "country": "Singapore",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [ "singaporeLow", "singaporeHigh" ]
  },
  "SH": {
    "country": "Saint Helena, Ascension and Tristan da Cunha",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "SI": {
    "country": "Slovenia",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "sloveniaLow", "sloveniaHigh", "sloveniaRegionsLow", "sloveniaRegionsHigh" ]
  },
  "SJ": {
    "country": "Svalbard and Jan Mayen",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "SK": {
    "country": "Slovakia",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "SL": {
    "country": "Sierra Leone",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "SM": {
    "country": "San Marino",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "SN": {
    "country": "Senegal",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "SO": {
    "country": "Somalia",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "SR": {
    "country": "Suriname",
    "continent_code": "SA",
    "continent": "South America",
    "maps": []
  },
  "SS": {
    "country": "South Sudan",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "ST": {
    "country": "Sao Tome and Principe",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "SV": {
    "country": "El Salvador",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "SX": {
    "country": "Sint Maarten (Dutch Part)",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "SY": {
    "country": "Syrian Arab Republic",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "SZ": {
    "country": "Swaziland",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "TC": {
    "country": "Turks and Caicos Islands",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "TD": {
    "country": "Chad",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "TF": {
    "country": "French Southern Territories",
    "continent_code": "AN",
    "continent": "Antarctica",
    "maps": []
  },
  "TG": {
    "country": "Togo",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "TH": {
    "country": "Thailand",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": [ "thailandLow", "thailandHigh" ]
  },
  "TJ": {
    "country": "Tajikistan",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "TK": {
    "country": "Tokelau",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "TL": {
    "country": "Timor-Leste",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "TM": {
    "country": "Turkmenistan",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "TN": {
    "country": "Tunisia",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "TO": {
    "country": "Tonga",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "TR": {
    "country": "Turkey",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "TT": {
    "country": "Trinidad and Tobago",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "TV": {
    "country": "Tuvalu",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "TW": {
    "country": "Taiwan, Province of China",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "TZ": {
    "country": "Tanzania, United Republic of",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "UA": {
    "country": "Ukraine",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  },
  "UG": {
    "country": "Uganda",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "UM": {
    "country": "United States Minor Outlying Islands",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "US": {
    "country": "United States",
    "continent_code": "NA",
    "continent": "North America",
    "maps": [ "usaLow", "usaHigh", "usaTerritoriesLow", "usaTerritoriesHigh", "usaTerritories2Low", "usaTerritories2High" ]
  },
  "UY": {
    "country": "Uruguay",
    "continent_code": "SA",
    "continent": "South America",
    "maps": []
  },
  "UZ": {
    "country": "Uzbekistan",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "VA": {
    "country": "Holy See (Vatican City State)",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": [ "vaticanLow", "vaticanHigh" ]
  },
  "VC": {
    "country": "Saint Vincent and the Grenadines",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "VE": {
    "country": "Venezuela, Bolivarian Republic of",
    "continent_code": "SA",
    "continent": "South America",
    "maps": []
  },
  "VG": {
    "country": "Virgin Islands, British",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "VI": {
    "country": "Virgin Islands, U.S.",
    "continent_code": "NA",
    "continent": "North America",
    "maps": []
  },
  "VN": {
    "country": "Viet Nam",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "VU": {
    "country": "Vanuatu",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "WF": {
    "country": "Wallis and Futuna",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "WS": {
    "country": "Samoa",
    "continent_code": "OC",
    "continent": "Oceania",
    "maps": []
  },
  "YE": {
    "country": "Yemen",
    "continent_code": "AS",
    "continent": "Asia",
    "maps": []
  },
  "YT": {
    "country": "Mayotte",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "ZA": {
    "country": "South Africa",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "ZM": {
    "country": "Zambia",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "ZW": {
    "country": "Zimbabwe",
    "continent_code": "AF",
    "continent": "Africa",
    "maps": []
  },
  "XK": {
    "country": "Kosovo",
    "continent_code": "EU",
    "continent": "Europe",
    "maps": []
  }
};


var continents = {
  "AF": 0,
  "AN": 1,
  "AS": 2,
  "EU": 3,
  "NA": 4,
  "OC": 5,
  "SA": 6
}

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
chart.projection = new am4maps.projections.Miller();

// Create map polygon series for world map
var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
worldSeries.useGeodata = true;
worldSeries.geodata = am4geodata_worldLow;
worldSeries.exclude = ["AQ"];

var worldPolygon = worldSeries.mapPolygons.template;
worldPolygon.tooltipText = "{name}";
worldPolygon.nonScalingStroke = true;
worldPolygon.strokeOpacity = 0.5;
worldPolygon.fill = am4core.color("#eee");
worldPolygon.propertyFields.fill = "color";

var hs = worldPolygon.states.create("hover");
hs.properties.fill = chart.colors.getIndex(9);


// Create country specific series (but hide it for now)
var countrySeries = chart.series.push(new am4maps.MapPolygonSeries());
countrySeries.useGeodata = true;
countrySeries.hide();
countrySeries.geodataSource.events.on("done", function(ev) {
  worldSeries.hide();
  countrySeries.show();
});

var countryPolygon = countrySeries.mapPolygons.template;
countryPolygon.tooltipText = "{name}";
countryPolygon.nonScalingStroke = true;
countryPolygon.strokeOpacity = 0.5;
countryPolygon.fill = am4core.color("#eee");

var hs = countryPolygon.states.create("hover");
hs.properties.fill = chart.colors.getIndex(9);

// Set up click events
worldPolygon.events.on("hit", function(ev) {
  ev.target.series.chart.zoomToMapObject(ev.target);
  var map = ev.target.dataItem.dataContext.map;
  if (map) {
    ev.target.isHover = false;
    countrySeries.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/" + map + ".json";
    countrySeries.geodataSource.load();
  }
});

// Set up data for countries
var data = [];
for(var id in countries) {
  if (countries.hasOwnProperty(id)) {
    var country = countries[id];
    if (country.maps.length) {
      data.push({
        id: id,
        color: chart.colors.getIndex(continents[country.continent_code]),
        map: country.maps[0]
      });
    }
  }
}
worldSeries.data = data;

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

var homeButton = new am4core.Button();
homeButton.events.on("hit", function() {
  worldSeries.show();
  countrySeries.hide();
  chart.goHome();
});

homeButton.icon = new am4core.Sprite();
homeButton.padding(7, 5, 7, 5);
homeButton.width = 30;
homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
homeButton.marginBottom = 10;
homeButton.parent = chart.zoomControl;
homeButton.insertBefore(chart.zoomControl.plusButton);

}); // end am4core.ready()
