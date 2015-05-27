centers = [];

Template.map.onCreated(function() {
    var data = {
        "countries": {
            "AD": {
                "name": "Andorra",
                "abbr": "AD",
                "zones": [
                    "Europe/Andorra"
                ]
            },
            "AE": {
                "name": "United Arab Emirates",
                "abbr": "AE",
                "zones": [
                    "Asia/Dubai"
                ]
            },
            "AF": {
                "name": "Afghanistan",
                "abbr": "AF",
                "zones": [
                    "Asia/Kabul"
                ]
            },
            "AG": {
                "name": "Antigua & Barbuda",
                "abbr": "AG",
                "zones": [
                    "America/Port_of_Spain"
                ]
            },
            "AI": {
                "name": "Anguilla",
                "abbr": "AI",
                "zones": [
                    "America/Port_of_Spain"
                ]
            },
            "AL": {
                "name": "Albania",
                "abbr": "AL",
                "zones": [
                    "Europe/Tirane"
                ]
            },
            "AM": {
                "name": "Armenia",
                "abbr": "AM",
                "zones": [
                    "Asia/Yerevan"
                ]
            },
            "AO": {
                "name": "Angola",
                "abbr": "AO",
                "zones": [
                    "Africa/Lagos"
                ]
            },
            "AQ": {
                "name": "Antarctica",
                "abbr": "AQ",
                "zones": [
                    "Antarctica/Rothera",
                    "Antarctica/Palmer",
                    "Antarctica/Mawson",
                    "Antarctica/Davis",
                    "Antarctica/Casey",
                    "Antarctica/Vostok",
                    "Antarctica/DumontDUrville",
                    "Antarctica/Syowa",
                    "Antarctica/Troll",
                    "Pacific/Auckland"
                ]
            },
            "AR": {
                "name": "Argentina",
                "abbr": "AR",
                "zones": [
                    "America/Argentina/Buenos_Aires",
                    "America/Argentina/Cordoba",
                    "America/Argentina/Salta",
                    "America/Argentina/Jujuy",
                    "America/Argentina/Tucuman",
                    "America/Argentina/Catamarca",
                    "America/Argentina/La_Rioja",
                    "America/Argentina/San_Juan",
                    "America/Argentina/Mendoza",
                    "America/Argentina/San_Luis",
                    "America/Argentina/Rio_Gallegos",
                    "America/Argentina/Ushuaia"
                ]
            },
            "AS": {
                "name": "Samoa (American)",
                "abbr": "AS",
                "zones": [
                    "Pacific/Pago_Pago"
                ]
            },
            "AT": {
                "name": "Austria",
                "abbr": "AT",
                "zones": [
                    "Europe/Vienna"
                ]
            },
            "AU": {
                "name": "Australia",
                "abbr": "AU",
                "zones": [
                    "Australia/Lord_Howe",
                    "Antarctica/Macquarie",
                    "Australia/Hobart",
                    "Australia/Currie",
                    "Australia/Melbourne",
                    "Australia/Sydney",
                    "Australia/Broken_Hill",
                    "Australia/Brisbane",
                    "Australia/Lindeman",
                    "Australia/Adelaide",
                    "Australia/Darwin",
                    "Australia/Perth",
                    "Australia/Eucla"
                ]
            },
            "AW": {
                "name": "Aruba",
                "abbr": "AW",
                "zones": [
                    "America/Curacao"
                ]
            },
            "AX": {
                "name": "Aaland Islands",
                "abbr": "AX",
                "zones": [
                    "Europe/Helsinki"
                ]
            },
            "AZ": {
                "name": "Azerbaijan",
                "abbr": "AZ",
                "zones": [
                    "Asia/Baku"
                ]
            },
            "BA": {
                "name": "Bosnia & Herzegovina",
                "abbr": "BA",
                "zones": [
                    "Europe/Belgrade"
                ]
            },
            "BB": {
                "name": "Barbados",
                "abbr": "BB",
                "zones": [
                    "America/Barbados"
                ]
            },
            "BD": {
                "name": "Bangladesh",
                "abbr": "BD",
                "zones": [
                    "Asia/Dhaka"
                ]
            },
            "BE": {
                "name": "Belgium",
                "abbr": "BE",
                "zones": [
                    "Europe/Brussels"
                ]
            },
            "BF": {
                "name": "Burkina Faso",
                "abbr": "BF",
                "zones": [
                    "Africa/Abidjan"
                ]
            },
            "BG": {
                "name": "Bulgaria",
                "abbr": "BG",
                "zones": [
                    "Europe/Sofia"
                ]
            },
            "BH": {
                "name": "Bahrain",
                "abbr": "BH",
                "zones": [
                    "Asia/Qatar"
                ]
            },
            "BI": {
                "name": "Burundi",
                "abbr": "BI",
                "zones": [
                    "Africa/Maputo"
                ]
            },
            "BJ": {
                "name": "Benin",
                "abbr": "BJ",
                "zones": [
                    "Africa/Lagos"
                ]
            },
            "BL": {
                "name": "St Barthelemy",
                "abbr": "BL",
                "zones": [
                    "America/Port_of_Spain"
                ]
            },
            "BM": {
                "name": "Bermuda",
                "abbr": "BM",
                "zones": [
                    "Atlantic/Bermuda"
                ]
            },
            "BN": {
                "name": "Brunei",
                "abbr": "BN",
                "zones": [
                    "Asia/Brunei"
                ]
            },
            "BO": {
                "name": "Bolivia",
                "abbr": "BO",
                "zones": [
                    "America/La_Paz"
                ]
            },
            "BQ": {
                "name": "Caribbean Netherlands",
                "abbr": "BQ",
                "zones": [
                    "America/Curacao"
                ]
            },
            "BR": {
                "name": "Brazil",
                "abbr": "BR",
                "zones": [
                    "America/Noronha",
                    "America/Belem",
                    "America/Fortaleza",
                    "America/Recife",
                    "America/Araguaina",
                    "America/Maceio",
                    "America/Bahia",
                    "America/Sao_Paulo",
                    "America/Campo_Grande",
                    "America/Cuiaba",
                    "America/Santarem",
                    "America/Porto_Velho",
                    "America/Boa_Vista",
                    "America/Manaus",
                    "America/Eirunepe",
                    "America/Rio_Branco"
                ]
            },
            "BS": {
                "name": "Bahamas",
                "abbr": "BS",
                "zones": [
                    "America/Nassau"
                ]
            },
            "BT": {
                "name": "Bhutan",
                "abbr": "BT",
                "zones": [
                    "Asia/Thimphu"
                ]
            },
            "BW": {
                "name": "Botswana",
                "abbr": "BW",
                "zones": [
                    "Africa/Maputo"
                ]
            },
            "BY": {
                "name": "Belarus",
                "abbr": "BY",
                "zones": [
                    "Europe/Minsk"
                ]
            },
            "BZ": {
                "name": "Belize",
                "abbr": "BZ",
                "zones": [
                    "America/Belize"
                ]
            },
            "CA": {
                "name": "Canada",
                "abbr": "CA",
                "zones": [
                    "America/St_Johns",
                    "America/Halifax",
                    "America/Glace_Bay",
                    "America/Moncton",
                    "America/Goose_Bay",
                    "America/Blanc-Sablon",
                    "America/Toronto",
                    "America/Nipigon",
                    "America/Thunder_Bay",
                    "America/Iqaluit",
                    "America/Pangnirtung",
                    "America/Resolute",
                    "America/Atikokan",
                    "America/Rankin_Inlet",
                    "America/Winnipeg",
                    "America/Rainy_River",
                    "America/Regina",
                    "America/Swift_Current",
                    "America/Edmonton",
                    "America/Cambridge_Bay",
                    "America/Yellowknife",
                    "America/Inuvik",
                    "America/Creston",
                    "America/Dawson_Creek",
                    "America/Vancouver",
                    "America/Whitehorse",
                    "America/Dawson"
                ]
            },
            "CC": {
                "name": "Cocos (Keeling) Islands",
                "abbr": "CC",
                "zones": [
                    "Indian/Cocos"
                ]
            },
            "CD": {
                "name": "Congo (Dem. Rep.)",
                "abbr": "CD",
                "zones": [
                    "Africa/Maputo",
                    "Africa/Lagos"
                ]
            },
            "CF": {
                "name": "Central African Rep.",
                "abbr": "CF",
                "zones": [
                    "Africa/Lagos"
                ]
            },
            "CG": {
                "name": "Congo (Rep.)",
                "abbr": "CG",
                "zones": [
                    "Africa/Lagos"
                ]
            },
            "CH": {
                "name": "Switzerland",
                "abbr": "CH",
                "zones": [
                    "Europe/Zurich"
                ]
            },
            "CI": {
                "name": "Cote d'Ivoire",
                "abbr": "CI",
                "zones": [
                    "Africa/Abidjan"
                ]
            },
            "CK": {
                "name": "Cook Islands",
                "abbr": "CK",
                "zones": [
                    "Pacific/Rarotonga"
                ]
            },
            "CL": {
                "name": "Chile",
                "abbr": "CL",
                "zones": [
                    "America/Santiago",
                    "Pacific/Easter"
                ]
            },
            "CM": {
                "name": "Cameroon",
                "abbr": "CM",
                "zones": [
                    "Africa/Lagos"
                ]
            },
            "CN": {
                "name": "China",
                "abbr": "CN",
                "zones": [
                    "Asia/Shanghai",
                    "Asia/Urumqi"
                ]
            },
            "CO": {
                "name": "Colombia",
                "abbr": "CO",
                "zones": [
                    "America/Bogota"
                ]
            },
            "CR": {
                "name": "Costa Rica",
                "abbr": "CR",
                "zones": [
                    "America/Costa_Rica"
                ]
            },
            "CU": {
                "name": "Cuba",
                "abbr": "CU",
                "zones": [
                    "America/Havana"
                ]
            },
            "CV": {
                "name": "Cape Verde",
                "abbr": "CV",
                "zones": [
                    "Atlantic/Cape_Verde"
                ]
            },
            "CW": {
                "name": "Curacao",
                "abbr": "CW",
                "zones": [
                    "America/Curacao"
                ]
            },
            "CX": {
                "name": "Christmas Island",
                "abbr": "CX",
                "zones": [
                    "Indian/Christmas"
                ]
            },
            "CY": {
                "name": "Cyprus",
                "abbr": "CY",
                "zones": [
                    "Asia/Nicosia"
                ]
            },
            "CZ": {
                "name": "Czech Republic",
                "abbr": "CZ",
                "zones": [
                    "Europe/Prague"
                ]
            },
            "DE": {
                "name": "Germany",
                "abbr": "DE",
                "zones": [
                    "Europe/Zurich",
                    "Europe/Berlin"
                ]
            },
            "DJ": {
                "name": "Djibouti",
                "abbr": "DJ",
                "zones": [
                    "Africa/Nairobi"
                ]
            },
            "DK": {
                "name": "Denmark",
                "abbr": "DK",
                "zones": [
                    "Europe/Copenhagen"
                ]
            },
            "DM": {
                "name": "Dominica",
                "abbr": "DM",
                "zones": [
                    "America/Port_of_Spain"
                ]
            },
            "DO": {
                "name": "Dominican Republic",
                "abbr": "DO",
                "zones": [
                    "America/Santo_Domingo"
                ]
            },
            "DZ": {
                "name": "Algeria",
                "abbr": "DZ",
                "zones": [
                    "Africa/Algiers"
                ]
            },
            "EC": {
                "name": "Ecuador",
                "abbr": "EC",
                "zones": [
                    "America/Guayaquil",
                    "Pacific/Galapagos"
                ]
            },
            "EE": {
                "name": "Estonia",
                "abbr": "EE",
                "zones": [
                    "Europe/Tallinn"
                ]
            },
            "EG": {
                "name": "Egypt",
                "abbr": "EG",
                "zones": [
                    "Africa/Cairo"
                ]
            },
            "EH": {
                "name": "Western Sahara",
                "abbr": "EH",
                "zones": [
                    "Africa/El_Aaiun"
                ]
            },
            "ER": {
                "name": "Eritrea",
                "abbr": "ER",
                "zones": [
                    "Africa/Nairobi"
                ]
            },
            "ES": {
                "name": "Spain",
                "abbr": "ES",
                "zones": [
                    "Europe/Madrid",
                    "Africa/Ceuta",
                    "Atlantic/Canary"
                ]
            },
            "ET": {
                "name": "Ethiopia",
                "abbr": "ET",
                "zones": [
                    "Africa/Nairobi"
                ]
            },
            "FI": {
                "name": "Finland",
                "abbr": "FI",
                "zones": [
                    "Europe/Helsinki"
                ]
            },
            "FJ": {
                "name": "Fiji",
                "abbr": "FJ",
                "zones": [
                    "Pacific/Fiji"
                ]
            },
            "FK": {
                "name": "Falkland Islands",
                "abbr": "FK",
                "zones": [
                    "Atlantic/Stanley"
                ]
            },
            "FM": {
                "name": "Micronesia",
                "abbr": "FM",
                "zones": [
                    "Pacific/Chuuk",
                    "Pacific/Pohnpei",
                    "Pacific/Kosrae"
                ]
            },
            "FO": {
                "name": "Faroe Islands",
                "abbr": "FO",
                "zones": [
                    "Atlantic/Faroe"
                ]
            },
            "FR": {
                "name": "France",
                "abbr": "FR",
                "zones": [
                    "Europe/Paris"
                ]
            },
            "GA": {
                "name": "Gabon",
                "abbr": "GA",
                "zones": [
                    "Africa/Lagos"
                ]
            },
            "GB": {
                "name": "Britain (UK)",
                "abbr": "GB",
                "zones": [
                    "Europe/London"
                ]
            },
            "GD": {
                "name": "Grenada",
                "abbr": "GD",
                "zones": [
                    "America/Port_of_Spain"
                ]
            },
            "GE": {
                "name": "Georgia",
                "abbr": "GE",
                "zones": [
                    "Asia/Tbilisi"
                ]
            },
            "GF": {
                "name": "French Guiana",
                "abbr": "GF",
                "zones": [
                    "America/Cayenne"
                ]
            },
            "GG": {
                "name": "Guernsey",
                "abbr": "GG",
                "zones": [
                    "Europe/London"
                ]
            },
            "GH": {
                "name": "Ghana",
                "abbr": "GH",
                "zones": [
                    "Africa/Accra"
                ]
            },
            "GI": {
                "name": "Gibraltar",
                "abbr": "GI",
                "zones": [
                    "Europe/Gibraltar"
                ]
            },
            "GL": {
                "name": "Greenland",
                "abbr": "GL",
                "zones": [
                    "America/Godthab",
                    "America/Danmarkshavn",
                    "America/Scoresbysund",
                    "America/Thule"
                ]
            },
            "GM": {
                "name": "Gambia",
                "abbr": "GM",
                "zones": [
                    "Africa/Abidjan"
                ]
            },
            "GN": {
                "name": "Guinea",
                "abbr": "GN",
                "zones": [
                    "Africa/Abidjan"
                ]
            },
            "GP": {
                "name": "Guadeloupe",
                "abbr": "GP",
                "zones": [
                    "America/Port_of_Spain"
                ]
            },
            "GQ": {
                "name": "Equatorial Guinea",
                "abbr": "GQ",
                "zones": [
                    "Africa/Lagos"
                ]
            },
            "GR": {
                "name": "Greece",
                "abbr": "GR",
                "zones": [
                    "Europe/Athens"
                ]
            },
            "GS": {
                "name": "South Georgia & the South Sandwich Islands",
                "abbr": "GS",
                "zones": [
                    "Atlantic/South_Georgia"
                ]
            },
            "GT": {
                "name": "Guatemala",
                "abbr": "GT",
                "zones": [
                    "America/Guatemala"
                ]
            },
            "GU": {
                "name": "Guam",
                "abbr": "GU",
                "zones": [
                    "Pacific/Guam"
                ]
            },
            "GW": {
                "name": "Guinea-Bissau",
                "abbr": "GW",
                "zones": [
                    "Africa/Bissau"
                ]
            },
            "GY": {
                "name": "Guyana",
                "abbr": "GY",
                "zones": [
                    "America/Guyana"
                ]
            },
            "HK": {
                "name": "Hong Kong",
                "abbr": "HK",
                "zones": [
                    "Asia/Hong_Kong"
                ]
            },
            "HN": {
                "name": "Honduras",
                "abbr": "HN",
                "zones": [
                    "America/Tegucigalpa"
                ]
            },
            "HR": {
                "name": "Croatia",
                "abbr": "HR",
                "zones": [
                    "Europe/Belgrade"
                ]
            },
            "HT": {
                "name": "Haiti",
                "abbr": "HT",
                "zones": [
                    "America/Port-au-Prince"
                ]
            },
            "HU": {
                "name": "Hungary",
                "abbr": "HU",
                "zones": [
                    "Europe/Budapest"
                ]
            },
            "ID": {
                "name": "Indonesia",
                "abbr": "ID",
                "zones": [
                    "Asia/Jakarta",
                    "Asia/Pontianak",
                    "Asia/Makassar",
                    "Asia/Jayapura"
                ]
            },
            "IE": {
                "name": "Ireland",
                "abbr": "IE",
                "zones": [
                    "Europe/Dublin"
                ]
            },
            "IL": {
                "name": "Israel",
                "abbr": "IL",
                "zones": [
                    "Asia/Jerusalem"
                ]
            },
            "IM": {
                "name": "Isle of Man",
                "abbr": "IM",
                "zones": [
                    "Europe/London"
                ]
            },
            "IN": {
                "name": "India",
                "abbr": "IN",
                "zones": [
                    "Asia/Kolkata"
                ]
            },
            "IO": {
                "name": "British Indian Ocean Territory",
                "abbr": "IO",
                "zones": [
                    "Indian/Chagos"
                ]
            },
            "IQ": {
                "name": "Iraq",
                "abbr": "IQ",
                "zones": [
                    "Asia/Baghdad"
                ]
            },
            "IR": {
                "name": "Iran",
                "abbr": "IR",
                "zones": [
                    "Asia/Tehran"
                ]
            },
            "IS": {
                "name": "Iceland",
                "abbr": "IS",
                "zones": [
                    "Atlantic/Reykjavik"
                ]
            },
            "IT": {
                "name": "Italy",
                "abbr": "IT",
                "zones": [
                    "Europe/Rome"
                ]
            },
            "JE": {
                "name": "Jersey",
                "abbr": "JE",
                "zones": [
                    "Europe/London"
                ]
            },
            "JM": {
                "name": "Jamaica",
                "abbr": "JM",
                "zones": [
                    "America/Jamaica"
                ]
            },
            "JO": {
                "name": "Jordan",
                "abbr": "JO",
                "zones": [
                    "Asia/Amman"
                ]
            },
            "JP": {
                "name": "Japan",
                "abbr": "JP",
                "zones": [
                    "Asia/Tokyo"
                ]
            },
            "KE": {
                "name": "Kenya",
                "abbr": "KE",
                "zones": [
                    "Africa/Nairobi"
                ]
            },
            "KG": {
                "name": "Kyrgyzstan",
                "abbr": "KG",
                "zones": [
                    "Asia/Bishkek"
                ]
            },
            "KH": {
                "name": "Cambodia",
                "abbr": "KH",
                "zones": [
                    "Asia/Bangkok"
                ]
            },
            "KI": {
                "name": "Kiribati",
                "abbr": "KI",
                "zones": [
                    "Pacific/Tarawa",
                    "Pacific/Enderbury",
                    "Pacific/Kiritimati"
                ]
            },
            "KM": {
                "name": "Comoros",
                "abbr": "KM",
                "zones": [
                    "Africa/Nairobi"
                ]
            },
            "KN": {
                "name": "St Kitts & Nevis",
                "abbr": "KN",
                "zones": [
                    "America/Port_of_Spain"
                ]
            },
            "KP": {
                "name": "Korea (North)",
                "abbr": "KP",
                "zones": [
                    "Asia/Pyongyang"
                ]
            },
            "KR": {
                "name": "Korea (South)",
                "abbr": "KR",
                "zones": [
                    "Asia/Seoul"
                ]
            },
            "KW": {
                "name": "Kuwait",
                "abbr": "KW",
                "zones": [
                    "Asia/Riyadh"
                ]
            },
            "KY": {
                "name": "Cayman Islands",
                "abbr": "KY",
                "zones": [
                    "America/Panama"
                ]
            },
            "KZ": {
                "name": "Kazakhstan",
                "abbr": "KZ",
                "zones": [
                    "Asia/Almaty",
                    "Asia/Qyzylorda",
                    "Asia/Aqtobe",
                    "Asia/Aqtau",
                    "Asia/Oral"
                ]
            },
            "LA": {
                "name": "Laos",
                "abbr": "LA",
                "zones": [
                    "Asia/Bangkok"
                ]
            },
            "LB": {
                "name": "Lebanon",
                "abbr": "LB",
                "zones": [
                    "Asia/Beirut"
                ]
            },
            "LC": {
                "name": "St Lucia",
                "abbr": "LC",
                "zones": [
                    "America/Port_of_Spain"
                ]
            },
            "LI": {
                "name": "Liechtenstein",
                "abbr": "LI",
                "zones": [
                    "Europe/Zurich"
                ]
            },
            "LK": {
                "name": "Sri Lanka",
                "abbr": "LK",
                "zones": [
                    "Asia/Colombo"
                ]
            },
            "LR": {
                "name": "Liberia",
                "abbr": "LR",
                "zones": [
                    "Africa/Monrovia"
                ]
            },
            "LS": {
                "name": "Lesotho",
                "abbr": "LS",
                "zones": [
                    "Africa/Johannesburg"
                ]
            },
            "LT": {
                "name": "Lithuania",
                "abbr": "LT",
                "zones": [
                    "Europe/Vilnius"
                ]
            },
            "LU": {
                "name": "Luxembourg",
                "abbr": "LU",
                "zones": [
                    "Europe/Luxembourg"
                ]
            },
            "LV": {
                "name": "Latvia",
                "abbr": "LV",
                "zones": [
                    "Europe/Riga"
                ]
            },
            "LY": {
                "name": "Libya",
                "abbr": "LY",
                "zones": [
                    "Africa/Tripoli"
                ]
            },
            "MA": {
                "name": "Morocco",
                "abbr": "MA",
                "zones": [
                    "Africa/Casablanca"
                ]
            },
            "MC": {
                "name": "Monaco",
                "abbr": "MC",
                "zones": [
                    "Europe/Monaco"
                ]
            },
            "MD": {
                "name": "Moldova",
                "abbr": "MD",
                "zones": [
                    "Europe/Chisinau"
                ]
            },
            "ME": {
                "name": "Montenegro",
                "abbr": "ME",
                "zones": [
                    "Europe/Belgrade"
                ]
            },
            "MF": {
                "name": "St Martin (French part)",
                "abbr": "MF",
                "zones": [
                    "America/Port_of_Spain"
                ]
            },
            "MG": {
                "name": "Madagascar",
                "abbr": "MG",
                "zones": [
                    "Africa/Nairobi"
                ]
            },
            "MH": {
                "name": "Marshall Islands",
                "abbr": "MH",
                "zones": [
                    "Pacific/Majuro",
                    "Pacific/Kwajalein"
                ]
            },
            "MK": {
                "name": "Macedonia",
                "abbr": "MK",
                "zones": [
                    "Europe/Belgrade"
                ]
            },
            "ML": {
                "name": "Mali",
                "abbr": "ML",
                "zones": [
                    "Africa/Abidjan"
                ]
            },
            "MM": {
                "name": "Myanmar (Burma)",
                "abbr": "MM",
                "zones": [
                    "Asia/Rangoon"
                ]
            },
            "MN": {
                "name": "Mongolia",
                "abbr": "MN",
                "zones": [
                    "Asia/Ulaanbaatar",
                    "Asia/Hovd",
                    "Asia/Choibalsan"
                ]
            },
            "MO": {
                "name": "Macau",
                "abbr": "MO",
                "zones": [
                    "Asia/Macau"
                ]
            },
            "MP": {
                "name": "Northern Mariana Islands",
                "abbr": "MP",
                "zones": [
                    "Pacific/Guam"
                ]
            },
            "MQ": {
                "name": "Martinique",
                "abbr": "MQ",
                "zones": [
                    "America/Martinique"
                ]
            },
            "MR": {
                "name": "Mauritania",
                "abbr": "MR",
                "zones": [
                    "Africa/Abidjan"
                ]
            },
            "MS": {
                "name": "Montserrat",
                "abbr": "MS",
                "zones": [
                    "America/Port_of_Spain"
                ]
            },
            "MT": {
                "name": "Malta",
                "abbr": "MT",
                "zones": [
                    "Europe/Malta"
                ]
            },
            "MU": {
                "name": "Mauritius",
                "abbr": "MU",
                "zones": [
                    "Indian/Mauritius"
                ]
            },
            "MV": {
                "name": "Maldives",
                "abbr": "MV",
                "zones": [
                    "Indian/Maldives"
                ]
            },
            "MW": {
                "name": "Malawi",
                "abbr": "MW",
                "zones": [
                    "Africa/Maputo"
                ]
            },
            "MX": {
                "name": "Mexico",
                "abbr": "MX",
                "zones": [
                    "America/Mexico_City",
                    "America/Cancun",
                    "America/Merida",
                    "America/Monterrey",
                    "America/Matamoros",
                    "America/Mazatlan",
                    "America/Chihuahua",
                    "America/Ojinaga",
                    "America/Hermosillo",
                    "America/Tijuana",
                    "America/Santa_Isabel",
                    "America/Bahia_Banderas"
                ]
            },
            "MY": {
                "name": "Malaysia",
                "abbr": "MY",
                "zones": [
                    "Asia/Kuala_Lumpur",
                    "Asia/Kuching"
                ]
            },
            "MZ": {
                "name": "Mozambique",
                "abbr": "MZ",
                "zones": [
                    "Africa/Maputo"
                ]
            },
            "NA": {
                "name": "Namibia",
                "abbr": "NA",
                "zones": [
                    "Africa/Windhoek"
                ]
            },
            "NC": {
                "name": "New Caledonia",
                "abbr": "NC",
                "zones": [
                    "Pacific/Noumea"
                ]
            },
            "NE": {
                "name": "Niger",
                "abbr": "NE",
                "zones": [
                    "Africa/Lagos"
                ]
            },
            "NF": {
                "name": "Norfolk Island",
                "abbr": "NF",
                "zones": [
                    "Pacific/Norfolk"
                ]
            },
            "NG": {
                "name": "Nigeria",
                "abbr": "NG",
                "zones": [
                    "Africa/Lagos"
                ]
            },
            "NI": {
                "name": "Nicaragua",
                "abbr": "NI",
                "zones": [
                    "America/Managua"
                ]
            },
            "NL": {
                "name": "Netherlands",
                "abbr": "NL",
                "zones": [
                    "Europe/Amsterdam"
                ]
            },
            "NO": {
                "name": "Norway",
                "abbr": "NO",
                "zones": [
                    "Europe/Oslo"
                ]
            },
            "NP": {
                "name": "Nepal",
                "abbr": "NP",
                "zones": [
                    "Asia/Kathmandu"
                ]
            },
            "NR": {
                "name": "Nauru",
                "abbr": "NR",
                "zones": [
                    "Pacific/Nauru"
                ]
            },
            "NU": {
                "name": "Niue",
                "abbr": "NU",
                "zones": [
                    "Pacific/Niue"
                ]
            },
            "NZ": {
                "name": "New Zealand",
                "abbr": "NZ",
                "zones": [
                    "Pacific/Auckland",
                    "Pacific/Chatham"
                ]
            },
            "OM": {
                "name": "Oman",
                "abbr": "OM",
                "zones": [
                    "Asia/Dubai"
                ]
            },
            "PA": {
                "name": "Panama",
                "abbr": "PA",
                "zones": [
                    "America/Panama"
                ]
            },
            "PE": {
                "name": "Peru",
                "abbr": "PE",
                "zones": [
                    "America/Lima"
                ]
            },
            "PF": {
                "name": "French Polynesia",
                "abbr": "PF",
                "zones": [
                    "Pacific/Tahiti",
                    "Pacific/Marquesas",
                    "Pacific/Gambier"
                ]
            },
            "PG": {
                "name": "Papua New Guinea",
                "abbr": "PG",
                "zones": [
                    "Pacific/Port_Moresby"
                ]
            },
            "PH": {
                "name": "Philippines",
                "abbr": "PH",
                "zones": [
                    "Asia/Manila"
                ]
            },
            "PK": {
                "name": "Pakistan",
                "abbr": "PK",
                "zones": [
                    "Asia/Karachi"
                ]
            },
            "PL": {
                "name": "Poland",
                "abbr": "PL",
                "zones": [
                    "Europe/Warsaw"
                ]
            },
            "PM": {
                "name": "St Pierre & Miquelon",
                "abbr": "PM",
                "zones": [
                    "America/Miquelon"
                ]
            },
            "PN": {
                "name": "Pitcairn",
                "abbr": "PN",
                "zones": [
                    "Pacific/Pitcairn"
                ]
            },
            "PR": {
                "name": "Puerto Rico",
                "abbr": "PR",
                "zones": [
                    "America/Puerto_Rico"
                ]
            },
            "PS": {
                "name": "Palestine",
                "abbr": "PS",
                "zones": [
                    "Asia/Gaza",
                    "Asia/Hebron"
                ]
            },
            "PT": {
                "name": "Portugal",
                "abbr": "PT",
                "zones": [
                    "Europe/Lisbon",
                    "Atlantic/Madeira",
                    "Atlantic/Azores"
                ]
            },
            "PW": {
                "name": "Palau",
                "abbr": "PW",
                "zones": [
                    "Pacific/Palau"
                ]
            },
            "PY": {
                "name": "Paraguay",
                "abbr": "PY",
                "zones": [
                    "America/Asuncion"
                ]
            },
            "QA": {
                "name": "Qatar",
                "abbr": "QA",
                "zones": [
                    "Asia/Qatar"
                ]
            },
            "RE": {
                "name": "Reunion",
                "abbr": "RE",
                "zones": [
                    "Indian/Reunion"
                ]
            },
            "RO": {
                "name": "Romania",
                "abbr": "RO",
                "zones": [
                    "Europe/Bucharest"
                ]
            },
            "RS": {
                "name": "Serbia",
                "abbr": "RS",
                "zones": [
                    "Europe/Belgrade"
                ]
            },
            "RU": {
                "name": "Russia",
                "abbr": "RU",
                "zones": [
                    "Europe/Kaliningrad",
                    "Europe/Moscow",
                    "Europe/Simferopol",
                    "Europe/Volgograd",
                    "Europe/Samara",
                    "Asia/Yekaterinburg",
                    "Asia/Omsk",
                    "Asia/Novosibirsk",
                    "Asia/Novokuznetsk",
                    "Asia/Krasnoyarsk",
                    "Asia/Irkutsk",
                    "Asia/Yakutsk",
                    "Asia/Khandyga",
                    "Asia/Vladivostok",
                    "Asia/Sakhalin",
                    "Asia/Ust-Nera",
                    "Asia/Magadan",
                    "Asia/Kamchatka",
                    "Asia/Anadyr"
                ]
            },
            "RW": {
                "name": "Rwanda",
                "abbr": "RW",
                "zones": [
                    "Africa/Maputo"
                ]
            },
            "SA": {
                "name": "Saudi Arabia",
                "abbr": "SA",
                "zones": [
                    "Asia/Riyadh"
                ]
            },
            "SB": {
                "name": "Solomon Islands",
                "abbr": "SB",
                "zones": [
                    "Pacific/Guadalcanal"
                ]
            },
            "SC": {
                "name": "Seychelles",
                "abbr": "SC",
                "zones": [
                    "Indian/Mahe"
                ]
            },
            "SD": {
                "name": "Sudan",
                "abbr": "SD",
                "zones": [
                    "Africa/Khartoum"
                ]
            },
            "SE": {
                "name": "Sweden",
                "abbr": "SE",
                "zones": [
                    "Europe/Stockholm"
                ]
            },
            "SG": {
                "name": "Singapore",
                "abbr": "SG",
                "zones": [
                    "Asia/Singapore"
                ]
            },
            "SH": {
                "name": "St Helena",
                "abbr": "SH",
                "zones": [
                    "Africa/Abidjan"
                ]
            },
            "SI": {
                "name": "Slovenia",
                "abbr": "SI",
                "zones": [
                    "Europe/Belgrade"
                ]
            },
            "SJ": {
                "name": "Svalbard & Jan Mayen",
                "abbr": "SJ",
                "zones": [
                    "Europe/Oslo"
                ]
            },
            "SK": {
                "name": "Slovakia",
                "abbr": "SK",
                "zones": [
                    "Europe/Prague"
                ]
            },
            "SL": {
                "name": "Sierra Leone",
                "abbr": "SL",
                "zones": [
                    "Africa/Abidjan"
                ]
            },
            "SM": {
                "name": "San Marino",
                "abbr": "SM",
                "zones": [
                    "Europe/Rome"
                ]
            },
            "SN": {
                "name": "Senegal",
                "abbr": "SN",
                "zones": [
                    "Africa/Abidjan"
                ]
            },
            "SO": {
                "name": "Somalia",
                "abbr": "SO",
                "zones": [
                    "Africa/Nairobi"
                ]
            },
            "SR": {
                "name": "Suriname",
                "abbr": "SR",
                "zones": [
                    "America/Paramaribo"
                ]
            },
            "SS": {
                "name": "South Sudan",
                "abbr": "SS",
                "zones": [
                    "Africa/Khartoum"
                ]
            },
            "ST": {
                "name": "Sao Tome & Principe",
                "abbr": "ST",
                "zones": [
                    "Africa/Abidjan"
                ]
            },
            "SV": {
                "name": "El Salvador",
                "abbr": "SV",
                "zones": [
                    "America/El_Salvador"
                ]
            },
            "SX": {
                "name": "St Maarten (Dutch part)",
                "abbr": "SX",
                "zones": [
                    "America/Curacao"
                ]
            },
            "SY": {
                "name": "Syria",
                "abbr": "SY",
                "zones": [
                    "Asia/Damascus"
                ]
            },
            "SZ": {
                "name": "Swaziland",
                "abbr": "SZ",
                "zones": [
                    "Africa/Johannesburg"
                ]
            },
            "TC": {
                "name": "Turks & Caicos Is",
                "abbr": "TC",
                "zones": [
                    "America/Grand_Turk"
                ]
            },
            "TD": {
                "name": "Chad",
                "abbr": "TD",
                "zones": [
                    "Africa/Ndjamena"
                ]
            },
            "TF": {
                "name": "French Southern & Antarctic Lands",
                "abbr": "TF",
                "zones": [
                    "Indian/Reunion",
                    "Indian/Kerguelen"
                ]
            },
            "TG": {
                "name": "Togo",
                "abbr": "TG",
                "zones": [
                    "Africa/Abidjan"
                ]
            },
            "TH": {
                "name": "Thailand",
                "abbr": "TH",
                "zones": [
                    "Asia/Bangkok"
                ]
            },
            "TJ": {
                "name": "Tajikistan",
                "abbr": "TJ",
                "zones": [
                    "Asia/Dushanbe"
                ]
            },
            "TK": {
                "name": "Tokelau",
                "abbr": "TK",
                "zones": [
                    "Pacific/Fakaofo"
                ]
            },
            "TL": {
                "name": "East Timor",
                "abbr": "TL",
                "zones": [
                    "Asia/Dili"
                ]
            },
            "TM": {
                "name": "Turkmenistan",
                "abbr": "TM",
                "zones": [
                    "Asia/Ashgabat"
                ]
            },
            "TN": {
                "name": "Tunisia",
                "abbr": "TN",
                "zones": [
                    "Africa/Tunis"
                ]
            },
            "TO": {
                "name": "Tonga",
                "abbr": "TO",
                "zones": [
                    "Pacific/Tongatapu"
                ]
            },
            "TR": {
                "name": "Turkey",
                "abbr": "TR",
                "zones": [
                    "Europe/Istanbul"
                ]
            },
            "TT": {
                "name": "Trinidad & Tobago",
                "abbr": "TT",
                "zones": [
                    "America/Port_of_Spain"
                ]
            },
            "TV": {
                "name": "Tuvalu",
                "abbr": "TV",
                "zones": [
                    "Pacific/Funafuti"
                ]
            },
            "TW": {
                "name": "Taiwan",
                "abbr": "TW",
                "zones": [
                    "Asia/Taipei"
                ]
            },
            "TZ": {
                "name": "Tanzania",
                "abbr": "TZ",
                "zones": [
                    "Africa/Nairobi"
                ]
            },
            "UA": {
                "name": "Ukraine",
                "abbr": "UA",
                "zones": [
                    "Europe/Kiev",
                    "Europe/Uzhgorod",
                    "Europe/Zaporozhye"
                ]
            },
            "UG": {
                "name": "Uganda",
                "abbr": "UG",
                "zones": [
                    "Africa/Nairobi"
                ]
            },
            "UM": {
                "name": "US minor outlying islands",
                "abbr": "UM",
                "zones": [
                    "Pacific/Pago_Pago",
                    "Pacific/Wake",
                    "Pacific/Honolulu"
                ]
            },
            "US": {
                "name": "United States",
                "abbr": "US",
                "zones": [
                    "America/New_York",
                    "America/Detroit",
                    "America/Kentucky/Louisville",
                    "America/Kentucky/Monticello",
                    "America/Indiana/Indianapolis",
                    "America/Indiana/Vincennes",
                    "America/Indiana/Winamac",
                    "America/Indiana/Marengo",
                    "America/Indiana/Petersburg",
                    "America/Indiana/Vevay",
                    "America/Chicago",
                    "America/Indiana/Tell_City",
                    "America/Indiana/Knox",
                    "America/Menominee",
                    "America/North_Dakota/Center",
                    "America/North_Dakota/New_Salem",
                    "America/North_Dakota/Beulah",
                    "America/Denver",
                    "America/Boise",
                    "America/Phoenix",
                    "America/Los_Angeles",
                    "America/Metlakatla",
                    "America/Anchorage",
                    "America/Juneau",
                    "America/Sitka",
                    "America/Yakutat",
                    "America/Nome",
                    "America/Adak",
                    "Pacific/Honolulu"
                ]
            },
            "UY": {
                "name": "Uruguay",
                "abbr": "UY",
                "zones": [
                    "America/Montevideo"
                ]
            },
            "UZ": {
                "name": "Uzbekistan",
                "abbr": "UZ",
                "zones": [
                    "Asia/Samarkand",
                    "Asia/Tashkent"
                ]
            },
            "VA": {
                "name": "Vatican City",
                "abbr": "VA",
                "zones": [
                    "Europe/Rome"
                ]
            },
            "VC": {
                "name": "St Vincent",
                "abbr": "VC",
                "zones": [
                    "America/Port_of_Spain"
                ]
            },
            "VE": {
                "name": "Venezuela",
                "abbr": "VE",
                "zones": [
                    "America/Caracas"
                ]
            },
            "VG": {
                "name": "Virgin Islands (UK)",
                "abbr": "VG",
                "zones": [
                    "America/Port_of_Spain"
                ]
            },
            "VI": {
                "name": "Virgin Islands (US)",
                "abbr": "VI",
                "zones": [
                    "America/Port_of_Spain"
                ]
            },
            "VN": {
                "name": "Vietnam",
                "abbr": "VN",
                "zones": [
                    "Asia/Bangkok",
                    "Asia/Ho_Chi_Minh"
                ]
            },
            "VU": {
                "name": "Vanuatu",
                "abbr": "VU",
                "zones": [
                    "Pacific/Efate"
                ]
            },
            "WF": {
                "name": "Wallis & Futuna",
                "abbr": "WF",
                "zones": [
                    "Pacific/Wallis"
                ]
            },
            "WS": {
                "name": "Samoa (western)",
                "abbr": "WS",
                "zones": [
                    "Pacific/Apia"
                ]
            },
            "YE": {
                "name": "Yemen",
                "abbr": "YE",
                "zones": [
                    "Asia/Riyadh"
                ]
            },
            "YT": {
                "name": "Mayotte",
                "abbr": "YT",
                "zones": [
                    "Africa/Nairobi"
                ]
            },
            "ZA": {
                "name": "South Africa",
                "abbr": "ZA",
                "zones": [
                    "Africa/Johannesburg"
                ]
            },
            "ZM": {
                "name": "Zambia",
                "abbr": "ZM",
                "zones": [
                    "Africa/Maputo"
                ]
            },
            "ZW": {
                "name": "Zimbabwe",
                "abbr": "ZW",
                "zones": [
                    "Africa/Maputo"
                ]
            }
        },
        "zones": {
            "Europe/Andorra": {
                "name": "Europe/Andorra",
                "lat": 42.5,
                "long": 1.5167,
                "countries": [
                    "AD"
                ],
                "comments": ""
            },
            "Asia/Dubai": {
                "name": "Asia/Dubai",
                "lat": 25.3,
                "long": 55.3,
                "countries": [
                    "AE",
                    "OM"
                ],
                "comments": ""
            },
            "Asia/Kabul": {
                "name": "Asia/Kabul",
                "lat": 34.5167,
                "long": 69.2,
                "countries": [
                    "AF"
                ],
                "comments": ""
            },
            "Europe/Tirane": {
                "name": "Europe/Tirane",
                "lat": 41.3333,
                "long": 19.8333,
                "countries": [
                    "AL"
                ],
                "comments": ""
            },
            "Asia/Yerevan": {
                "name": "Asia/Yerevan",
                "lat": 40.1833,
                "long": 44.5,
                "countries": [
                    "AM"
                ],
                "comments": ""
            },
            "Antarctica/Rothera": {
                "name": "Antarctica/Rothera",
                "lat": -66.4333,
                "long": -67.8667,
                "countries": [
                    "AQ"
                ],
                "comments": "Rothera Station, Adelaide Island"
            },
            "Antarctica/Palmer": {
                "name": "Antarctica/Palmer",
                "lat": -63.2,
                "long": -63.9,
                "countries": [
                    "AQ"
                ],
                "comments": "Palmer Station, Anvers Island"
            },
            "Antarctica/Mawson": {
                "name": "Antarctica/Mawson",
                "lat": -66.4,
                "long": 62.8833,
                "countries": [
                    "AQ"
                ],
                "comments": "Mawson Station, Holme Bay"
            },
            "Antarctica/Davis": {
                "name": "Antarctica/Davis",
                "lat": -67.4167,
                "long": 77.9667,
                "countries": [
                    "AQ"
                ],
                "comments": "Davis Station, Vestfold Hills"
            },
            "Antarctica/Casey": {
                "name": "Antarctica/Casey",
                "lat": -65.7167,
                "long": 110.5167,
                "countries": [
                    "AQ"
                ],
                "comments": "Casey Station, Bailey Peninsula"
            },
            "Antarctica/Vostok": {
                "name": "Antarctica/Vostok",
                "lat": -77.6,
                "long": 106.9,
                "countries": [
                    "AQ"
                ],
                "comments": "Vostok Station, Lake Vostok"
            },
            "Antarctica/DumontDUrville": {
                "name": "Antarctica/DumontDUrville",
                "lat": -65.3333,
                "long": 140.0167,
                "countries": [
                    "AQ"
                ],
                "comments": "Dumont-d'Urville Station, AdÃ©lie Land"
            },
            "Antarctica/Syowa": {
                "name": "Antarctica/Syowa",
                "lat": -68.9939,
                "long": 39.59,
                "countries": [
                    "AQ"
                ],
                "comments": "Syowa Station, E Ongul I"
            },
            "Antarctica/Troll": {
                "name": "Antarctica/Troll",
                "lat": -71.9886,
                "long": 2.535,
                "countries": [
                    "AQ"
                ],
                "comments": "Troll Station, Queen Maud Land"
            },
            "America/Argentina/Buenos_Aires": {
                "name": "America/Argentina/Buenos_Aires",
                "lat": -33.4,
                "long": -57.55,
                "countries": [
                    "AR"
                ],
                "comments": "Buenos Aires (BA, CF)"
            },
            "America/Argentina/Cordoba": {
                "name": "America/Argentina/Cordoba",
                "lat": -30.6,
                "long": -63.8167,
                "countries": [
                    "AR"
                ],
                "comments": "most locations (CB, CC, CN, ER, FM, MN, SE, SF)"
            },
            "America/Argentina/Salta": {
                "name": "America/Argentina/Salta",
                "lat": -23.2167,
                "long": -64.5833,
                "countries": [
                    "AR"
                ],
                "comments": "(SA, LP, NQ, RN)"
            },
            "America/Argentina/Jujuy": {
                "name": "America/Argentina/Jujuy",
                "lat": -23.8167,
                "long": -64.7,
                "countries": [
                    "AR"
                ],
                "comments": "Jujuy (JY)"
            },
            "America/Argentina/Tucuman": {
                "name": "America/Argentina/Tucuman",
                "lat": -25.1833,
                "long": -64.7833,
                "countries": [
                    "AR"
                ],
                "comments": "TucumÃ¡n (TM)"
            },
            "America/Argentina/Catamarca": {
                "name": "America/Argentina/Catamarca",
                "lat": -27.5333,
                "long": -64.2167,
                "countries": [
                    "AR"
                ],
                "comments": "Catamarca (CT), Chubut (CH)"
            },
            "America/Argentina/La_Rioja": {
                "name": "America/Argentina/La_Rioja",
                "lat": -28.5667,
                "long": -65.15,
                "countries": [
                    "AR"
                ],
                "comments": "La Rioja (LR)"
            },
            "America/Argentina/San_Juan": {
                "name": "America/Argentina/San_Juan",
                "lat": -30.4667,
                "long": -67.4833,
                "countries": [
                    "AR"
                ],
                "comments": "San Juan (SJ)"
            },
            "America/Argentina/Mendoza": {
                "name": "America/Argentina/Mendoza",
                "lat": -31.1167,
                "long": -67.1833,
                "countries": [
                    "AR"
                ],
                "comments": "Mendoza (MZ)"
            },
            "America/Argentina/San_Luis": {
                "name": "America/Argentina/San_Luis",
                "lat": -32.6833,
                "long": -65.65,
                "countries": [
                    "AR"
                ],
                "comments": "San Luis (SL)"
            },
            "America/Argentina/Rio_Gallegos": {
                "name": "America/Argentina/Rio_Gallegos",
                "lat": -50.3667,
                "long": -68.7833,
                "countries": [
                    "AR"
                ],
                "comments": "Santa Cruz (SC)"
            },
            "America/Argentina/Ushuaia": {
                "name": "America/Argentina/Ushuaia",
                "lat": -53.2,
                "long": -67.7,
                "countries": [
                    "AR"
                ],
                "comments": "Tierra del Fuego (TF)"
            },
            "Pacific/Pago_Pago": {
                "name": "Pacific/Pago_Pago",
                "lat": -13.7333,
                "long": -169.3,
                "countries": [
                    "AS",
                    "UM"
                ],
                "comments": "Samoa, Midway"
            },
            "Europe/Vienna": {
                "name": "Europe/Vienna",
                "lat": 48.2167,
                "long": 16.3333,
                "countries": [
                    "AT"
                ],
                "comments": ""
            },
            "Australia/Lord_Howe": {
                "name": "Australia/Lord_Howe",
                "lat": -30.45,
                "long": 159.0833,
                "countries": [
                    "AU"
                ],
                "comments": "Lord Howe Island"
            },
            "Antarctica/Macquarie": {
                "name": "Antarctica/Macquarie",
                "lat": -53.5,
                "long": 158.95,
                "countries": [
                    "AU"
                ],
                "comments": "Macquarie Island"
            },
            "Australia/Hobart": {
                "name": "Australia/Hobart",
                "lat": -41.1167,
                "long": 147.3167,
                "countries": [
                    "AU"
                ],
                "comments": "Tasmania - most locations"
            },
            "Australia/Currie": {
                "name": "Australia/Currie",
                "lat": -38.0667,
                "long": 143.8667,
                "countries": [
                    "AU"
                ],
                "comments": "Tasmania - King Island"
            },
            "Australia/Melbourne": {
                "name": "Australia/Melbourne",
                "lat": -36.1833,
                "long": 144.9667,
                "countries": [
                    "AU"
                ],
                "comments": "Victoria"
            },
            "Australia/Sydney": {
                "name": "Australia/Sydney",
                "lat": -32.1333,
                "long": 151.2167,
                "countries": [
                    "AU"
                ],
                "comments": "New South Wales - most locations"
            },
            "Australia/Broken_Hill": {
                "name": "Australia/Broken_Hill",
                "lat": -30.05,
                "long": 141.45,
                "countries": [
                    "AU"
                ],
                "comments": "New South Wales - Yancowinna"
            },
            "Australia/Brisbane": {
                "name": "Australia/Brisbane",
                "lat": -26.5333,
                "long": 153.0333,
                "countries": [
                    "AU"
                ],
                "comments": "Queensland - most locations"
            },
            "Australia/Lindeman": {
                "name": "Australia/Lindeman",
                "lat": -19.7333,
                "long": 149,
                "countries": [
                    "AU"
                ],
                "comments": "Queensland - Holiday Islands"
            },
            "Australia/Adelaide": {
                "name": "Australia/Adelaide",
                "lat": -33.0833,
                "long": 138.5833,
                "countries": [
                    "AU"
                ],
                "comments": "South Australia"
            },
            "Australia/Darwin": {
                "name": "Australia/Darwin",
                "lat": -11.5333,
                "long": 130.8333,
                "countries": [
                    "AU"
                ],
                "comments": "Northern Territory"
            },
            "Australia/Perth": {
                "name": "Australia/Perth",
                "lat": -30.05,
                "long": 115.85,
                "countries": [
                    "AU"
                ],
                "comments": "Western Australia - most locations"
            },
            "Australia/Eucla": {
                "name": "Australia/Eucla",
                "lat": -30.2833,
                "long": 128.8667,
                "countries": [
                    "AU"
                ],
                "comments": "Western Australia - Eucla area"
            },
            "Asia/Baku": {
                "name": "Asia/Baku",
                "lat": 40.3833,
                "long": 49.85,
                "countries": [
                    "AZ"
                ],
                "comments": ""
            },
            "America/Barbados": {
                "name": "America/Barbados",
                "lat": 13.1,
                "long": -58.3833,
                "countries": [
                    "BB"
                ],
                "comments": ""
            },
            "Asia/Dhaka": {
                "name": "Asia/Dhaka",
                "lat": 23.7167,
                "long": 90.4167,
                "countries": [
                    "BD"
                ],
                "comments": ""
            },
            "Europe/Brussels": {
                "name": "Europe/Brussels",
                "lat": 50.8333,
                "long": 4.3333,
                "countries": [
                    "BE"
                ],
                "comments": ""
            },
            "Europe/Sofia": {
                "name": "Europe/Sofia",
                "lat": 42.6833,
                "long": 23.3167,
                "countries": [
                    "BG"
                ],
                "comments": ""
            },
            "Atlantic/Bermuda": {
                "name": "Atlantic/Bermuda",
                "lat": 32.2833,
                "long": -63.2333,
                "countries": [
                    "BM"
                ],
                "comments": ""
            },
            "Asia/Brunei": {
                "name": "Asia/Brunei",
                "lat": 4.9333,
                "long": 114.9167,
                "countries": [
                    "BN"
                ],
                "comments": ""
            },
            "America/La_Paz": {
                "name": "America/La_Paz",
                "lat": -15.5,
                "long": -67.85,
                "countries": [
                    "BO"
                ],
                "comments": ""
            },
            "America/Noronha": {
                "name": "America/Noronha",
                "lat": -2.15,
                "long": -31.5833,
                "countries": [
                    "BR"
                ],
                "comments": "Atlantic islands"
            },
            "America/Belem": {
                "name": "America/Belem",
                "lat": -0.55,
                "long": -47.5167,
                "countries": [
                    "BR"
                ],
                "comments": "AmapÃ¡, E ParÃ¡"
            },
            "America/Fortaleza": {
                "name": "America/Fortaleza",
                "lat": -2.2833,
                "long": -37.5,
                "countries": [
                    "BR"
                ],
                "comments": "NE Brazil (MA, PI, CE, RN, PB)"
            },
            "America/Recife": {
                "name": "America/Recife",
                "lat": -7.95,
                "long": -33.1,
                "countries": [
                    "BR"
                ],
                "comments": "Pernambuco"
            },
            "America/Araguaina": {
                "name": "America/Araguaina",
                "lat": -6.8,
                "long": -47.8,
                "countries": [
                    "BR"
                ],
                "comments": "Tocantins"
            },
            "America/Maceio": {
                "name": "America/Maceio",
                "lat": -8.3333,
                "long": -34.2833,
                "countries": [
                    "BR"
                ],
                "comments": "Alagoas, Sergipe"
            },
            "America/Bahia": {
                "name": "America/Bahia",
                "lat": -11.0167,
                "long": -37.4833,
                "countries": [
                    "BR"
                ],
                "comments": "Bahia"
            },
            "America/Sao_Paulo": {
                "name": "America/Sao_Paulo",
                "lat": -22.4667,
                "long": -45.3833,
                "countries": [
                    "BR"
                ],
                "comments": "S & SE Brazil (GO, DF, MG, ES, RJ, SP, PR, SC, RS)"
            },
            "America/Campo_Grande": {
                "name": "America/Campo_Grande",
                "lat": -19.55,
                "long": -53.3833,
                "countries": [
                    "BR"
                ],
                "comments": "Mato Grosso do Sul"
            },
            "America/Cuiaba": {
                "name": "America/Cuiaba",
                "lat": -14.4167,
                "long": -55.9167,
                "countries": [
                    "BR"
                ],
                "comments": "Mato Grosso"
            },
            "America/Santarem": {
                "name": "America/Santarem",
                "lat": -1.5667,
                "long": -53.1333,
                "countries": [
                    "BR"
                ],
                "comments": "W ParÃ¡"
            },
            "America/Porto_Velho": {
                "name": "America/Porto_Velho",
                "lat": -7.2333,
                "long": -62.1,
                "countries": [
                    "BR"
                ],
                "comments": "RondÃ´nia"
            },
            "America/Boa_Vista": {
                "name": "America/Boa_Vista",
                "lat": 2.8167,
                "long": -59.3333,
                "countries": [
                    "BR"
                ],
                "comments": "Roraima"
            },
            "America/Manaus": {
                "name": "America/Manaus",
                "lat": -2.8667,
                "long": -59.9833,
                "countries": [
                    "BR"
                ],
                "comments": "E Amazonas"
            },
            "America/Eirunepe": {
                "name": "America/Eirunepe",
                "lat": -5.3333,
                "long": -68.1333,
                "countries": [
                    "BR"
                ],
                "comments": "W Amazonas"
            },
            "America/Rio_Branco": {
                "name": "America/Rio_Branco",
                "lat": -8.0333,
                "long": -66.2,
                "countries": [
                    "BR"
                ],
                "comments": "Acre"
            },
            "America/Nassau": {
                "name": "America/Nassau",
                "lat": 25.0833,
                "long": -76.65,
                "countries": [
                    "BS"
                ],
                "comments": ""
            },
            "Asia/Thimphu": {
                "name": "Asia/Thimphu",
                "lat": 27.4667,
                "long": 89.65,
                "countries": [
                    "BT"
                ],
                "comments": ""
            },
            "Europe/Minsk": {
                "name": "Europe/Minsk",
                "lat": 53.9,
                "long": 27.5667,
                "countries": [
                    "BY"
                ],
                "comments": ""
            },
            "America/Belize": {
                "name": "America/Belize",
                "lat": 17.5,
                "long": -87.8,
                "countries": [
                    "BZ"
                ],
                "comments": ""
            },
            "America/St_Johns": {
                "name": "America/St_Johns",
                "lat": 47.5667,
                "long": -51.2833,
                "countries": [
                    "CA"
                ],
                "comments": "Newfoundland Time, including SE Labrador"
            },
            "America/Halifax": {
                "name": "America/Halifax",
                "lat": 44.65,
                "long": -62.4,
                "countries": [
                    "CA"
                ],
                "comments": "Atlantic Time - Nova Scotia (most places), PEI"
            },
            "America/Glace_Bay": {
                "name": "America/Glace_Bay",
                "lat": 46.2,
                "long": -58.05,
                "countries": [
                    "CA"
                ],
                "comments": "Atlantic Time - Nova Scotia - places that did not observe DST 1966-1971"
            },
            "America/Moncton": {
                "name": "America/Moncton",
                "lat": 46.1,
                "long": -63.2167,
                "countries": [
                    "CA"
                ],
                "comments": "Atlantic Time - New Brunswick"
            },
            "America/Goose_Bay": {
                "name": "America/Goose_Bay",
                "lat": 53.3333,
                "long": -59.5833,
                "countries": [
                    "CA"
                ],
                "comments": "Atlantic Time - Labrador - most locations"
            },
            "America/Blanc-Sablon": {
                "name": "America/Blanc-Sablon",
                "lat": 51.4167,
                "long": -56.8833,
                "countries": [
                    "CA"
                ],
                "comments": "Atlantic Standard Time - Quebec - Lower North Shore"
            },
            "America/Toronto": {
                "name": "America/Toronto",
                "lat": 43.65,
                "long": -78.6167,
                "countries": [
                    "CA"
                ],
                "comments": "Eastern Time - Ontario & Quebec - most locations"
            },
            "America/Nipigon": {
                "name": "America/Nipigon",
                "lat": 49.0167,
                "long": -87.7333,
                "countries": [
                    "CA"
                ],
                "comments": "Eastern Time - Ontario & Quebec - places that did not observe DST 1967-1973"
            },
            "America/Thunder_Bay": {
                "name": "America/Thunder_Bay",
                "lat": 48.3833,
                "long": -88.75,
                "countries": [
                    "CA"
                ],
                "comments": "Eastern Time - Thunder Bay, Ontario"
            },
            "America/Iqaluit": {
                "name": "America/Iqaluit",
                "lat": 63.7333,
                "long": -67.5333,
                "countries": [
                    "CA"
                ],
                "comments": "Eastern Time - east Nunavut - most locations"
            },
            "America/Pangnirtung": {
                "name": "America/Pangnirtung",
                "lat": 66.1333,
                "long": -64.2667,
                "countries": [
                    "CA"
                ],
                "comments": "Eastern Time - Pangnirtung, Nunavut"
            },
            "America/Resolute": {
                "name": "America/Resolute",
                "lat": 74.6956,
                "long": -93.1708,
                "countries": [
                    "CA"
                ],
                "comments": "Central Time - Resolute, Nunavut"
            },
            "America/Atikokan": {
                "name": "America/Atikokan",
                "lat": 48.7586,
                "long": -90.3783,
                "countries": [
                    "CA"
                ],
                "comments": "Eastern Standard Time - Atikokan, Ontario and Southampton I, Nunavut"
            },
            "America/Rankin_Inlet": {
                "name": "America/Rankin_Inlet",
                "lat": 62.8167,
                "long": -91.9169,
                "countries": [
                    "CA"
                ],
                "comments": "Central Time - central Nunavut"
            },
            "America/Winnipeg": {
                "name": "America/Winnipeg",
                "lat": 49.8833,
                "long": -96.85,
                "countries": [
                    "CA"
                ],
                "comments": "Central Time - Manitoba & west Ontario"
            },
            "America/Rainy_River": {
                "name": "America/Rainy_River",
                "lat": 48.7167,
                "long": -93.4333,
                "countries": [
                    "CA"
                ],
                "comments": "Central Time - Rainy River & Fort Frances, Ontario"
            },
            "America/Regina": {
                "name": "America/Regina",
                "lat": 50.4,
                "long": -103.35,
                "countries": [
                    "CA"
                ],
                "comments": "Central Standard Time - Saskatchewan - most locations"
            },
            "America/Swift_Current": {
                "name": "America/Swift_Current",
                "lat": 50.2833,
                "long": -106.1667,
                "countries": [
                    "CA"
                ],
                "comments": "Central Standard Time - Saskatchewan - midwest"
            },
            "America/Edmonton": {
                "name": "America/Edmonton",
                "lat": 53.55,
                "long": -112.5333,
                "countries": [
                    "CA"
                ],
                "comments": "Mountain Time - Alberta, east British Columbia & west Saskatchewan"
            },
            "America/Cambridge_Bay": {
                "name": "America/Cambridge_Bay",
                "lat": 69.1139,
                "long": -104.9472,
                "countries": [
                    "CA"
                ],
                "comments": "Mountain Time - west Nunavut"
            },
            "America/Yellowknife": {
                "name": "America/Yellowknife",
                "lat": 62.45,
                "long": -113.65,
                "countries": [
                    "CA"
                ],
                "comments": "Mountain Time - central Northwest Territories"
            },
            "America/Inuvik": {
                "name": "America/Inuvik",
                "lat": 68.3497,
                "long": -132.2833,
                "countries": [
                    "CA"
                ],
                "comments": "Mountain Time - west Northwest Territories"
            },
            "America/Creston": {
                "name": "America/Creston",
                "lat": 49.1,
                "long": -115.4833,
                "countries": [
                    "CA"
                ],
                "comments": "Mountain Standard Time - Creston, British Columbia"
            },
            "America/Dawson_Creek": {
                "name": "America/Dawson_Creek",
                "lat": 59.7667,
                "long": -119.7667,
                "countries": [
                    "CA"
                ],
                "comments": "Mountain Standard Time - Dawson Creek & Fort Saint John, British Columbia"
            },
            "America/Vancouver": {
                "name": "America/Vancouver",
                "lat": 49.2667,
                "long": -122.8833,
                "countries": [
                    "CA"
                ],
                "comments": "Pacific Time - west British Columbia"
            },
            "America/Whitehorse": {
                "name": "America/Whitehorse",
                "lat": 60.7167,
                "long": -134.95,
                "countries": [
                    "CA"
                ],
                "comments": "Pacific Time - south Yukon"
            },
            "America/Dawson": {
                "name": "America/Dawson",
                "lat": 64.0667,
                "long": -138.5833,
                "countries": [
                    "CA"
                ],
                "comments": "Pacific Time - north Yukon"
            },
            "Indian/Cocos": {
                "name": "Indian/Cocos",
                "lat": -11.8333,
                "long": 96.9167,
                "countries": [
                    "CC"
                ],
                "comments": ""
            },
            "Europe/Zurich": {
                "name": "Europe/Zurich",
                "lat": 47.3833,
                "long": 8.5333,
                "countries": [
                    "CH",
                    "DE",
                    "LI"
                ],
                "comments": "Swiss time"
            },
            "Africa/Abidjan": {
                "name": "Africa/Abidjan",
                "lat": 5.3167,
                "long": -3.9667,
                "countries": [
                    "CI",
                    "BF",
                    "GM",
                    "GN",
                    "ML",
                    "MR",
                    "SH",
                    "SL",
                    "SN",
                    "ST",
                    "TG"
                ],
                "comments": ""
            },
            "Pacific/Rarotonga": {
                "name": "Pacific/Rarotonga",
                "lat": -20.7667,
                "long": -158.2333,
                "countries": [
                    "CK"
                ],
                "comments": ""
            },
            "America/Santiago": {
                "name": "America/Santiago",
                "lat": -32.55,
                "long": -69.3333,
                "countries": [
                    "CL"
                ],
                "comments": "most locations"
            },
            "Pacific/Easter": {
                "name": "Pacific/Easter",
                "lat": -26.85,
                "long": -108.5667,
                "countries": [
                    "CL"
                ],
                "comments": "Easter Island"
            },
            "Asia/Shanghai": {
                "name": "Asia/Shanghai",
                "lat": 31.2333,
                "long": 121.4667,
                "countries": [
                    "CN"
                ],
                "comments": "Beijing Time"
            },
            "Asia/Urumqi": {
                "name": "Asia/Urumqi",
                "lat": 43.8,
                "long": 87.5833,
                "countries": [
                    "CN"
                ],
                "comments": "Xinjiang Time"
            },
            "America/Bogota": {
                "name": "America/Bogota",
                "lat": 4.6,
                "long": -73.9167,
                "countries": [
                    "CO"
                ],
                "comments": ""
            },
            "America/Costa_Rica": {
                "name": "America/Costa_Rica",
                "lat": 9.9333,
                "long": -83.9167,
                "countries": [
                    "CR"
                ],
                "comments": ""
            },
            "America/Havana": {
                "name": "America/Havana",
                "lat": 23.1333,
                "long": -81.6333,
                "countries": [
                    "CU"
                ],
                "comments": ""
            },
            "Atlantic/Cape_Verde": {
                "name": "Atlantic/Cape_Verde",
                "lat": 14.9167,
                "long": -22.4833,
                "countries": [
                    "CV"
                ],
                "comments": ""
            },
            "America/Curacao": {
                "name": "America/Curacao",
                "lat": 12.1833,
                "long": -69,
                "countries": [
                    "CW",
                    "AW",
                    "BQ",
                    "SX"
                ],
                "comments": ""
            },
            "Indian/Christmas": {
                "name": "Indian/Christmas",
                "lat": -9.5833,
                "long": 105.7167,
                "countries": [
                    "CX"
                ],
                "comments": ""
            },
            "Asia/Nicosia": {
                "name": "Asia/Nicosia",
                "lat": 35.1667,
                "long": 33.3667,
                "countries": [
                    "CY"
                ],
                "comments": ""
            },
            "Europe/Prague": {
                "name": "Europe/Prague",
                "lat": 50.0833,
                "long": 14.4333,
                "countries": [
                    "CZ",
                    "SK"
                ],
                "comments": ""
            },
            "Europe/Berlin": {
                "name": "Europe/Berlin",
                "lat": 52.5,
                "long": 13.3667,
                "countries": [
                    "DE"
                ],
                "comments": "Berlin time"
            },
            "Europe/Copenhagen": {
                "name": "Europe/Copenhagen",
                "lat": 55.6667,
                "long": 12.5833,
                "countries": [
                    "DK"
                ],
                "comments": ""
            },
            "America/Santo_Domingo": {
                "name": "America/Santo_Domingo",
                "lat": 18.4667,
                "long": -68.1,
                "countries": [
                    "DO"
                ],
                "comments": ""
            },
            "Africa/Algiers": {
                "name": "Africa/Algiers",
                "lat": 36.7833,
                "long": 3.05,
                "countries": [
                    "DZ"
                ],
                "comments": ""
            },
            "America/Guayaquil": {
                "name": "America/Guayaquil",
                "lat": -1.8333,
                "long": -78.1667,
                "countries": [
                    "EC"
                ],
                "comments": "mainland"
            },
            "Pacific/Galapagos": {
                "name": "Pacific/Galapagos",
                "lat": 0.9,
                "long": -88.4,
                "countries": [
                    "EC"
                ],
                "comments": "GalÃ¡pagos Islands"
            },
            "Europe/Tallinn": {
                "name": "Europe/Tallinn",
                "lat": 59.4167,
                "long": 24.75,
                "countries": [
                    "EE"
                ],
                "comments": ""
            },
            "Africa/Cairo": {
                "name": "Africa/Cairo",
                "lat": 30.05,
                "long": 31.25,
                "countries": [
                    "EG"
                ],
                "comments": ""
            },
            "Africa/El_Aaiun": {
                "name": "Africa/El_Aaiun",
                "lat": 27.15,
                "long": -12.8,
                "countries": [
                    "EH"
                ],
                "comments": ""
            },
            "Europe/Madrid": {
                "name": "Europe/Madrid",
                "lat": 40.4,
                "long": -2.3167,
                "countries": [
                    "ES"
                ],
                "comments": "mainland"
            },
            "Africa/Ceuta": {
                "name": "Africa/Ceuta",
                "lat": 35.8833,
                "long": -4.6833,
                "countries": [
                    "ES"
                ],
                "comments": "Ceuta & Melilla"
            },
            "Atlantic/Canary": {
                "name": "Atlantic/Canary",
                "lat": 28.1,
                "long": -14.6,
                "countries": [
                    "ES"
                ],
                "comments": "Canary Islands"
            },
            "Europe/Helsinki": {
                "name": "Europe/Helsinki",
                "lat": 60.1667,
                "long": 24.9667,
                "countries": [
                    "FI",
                    "AX"
                ],
                "comments": ""
            },
            "Pacific/Fiji": {
                "name": "Pacific/Fiji",
                "lat": -17.8667,
                "long": 178.4167,
                "countries": [
                    "FJ"
                ],
                "comments": ""
            },
            "Atlantic/Stanley": {
                "name": "Atlantic/Stanley",
                "lat": -50.3,
                "long": -56.15,
                "countries": [
                    "FK"
                ],
                "comments": ""
            },
            "Pacific/Chuuk": {
                "name": "Pacific/Chuuk",
                "lat": 7.4167,
                "long": 151.7833,
                "countries": [
                    "FM"
                ],
                "comments": "Chuuk (Truk) and Yap"
            },
            "Pacific/Pohnpei": {
                "name": "Pacific/Pohnpei",
                "lat": 6.9667,
                "long": 158.2167,
                "countries": [
                    "FM"
                ],
                "comments": "Pohnpei (Ponape)"
            },
            "Pacific/Kosrae": {
                "name": "Pacific/Kosrae",
                "lat": 5.3167,
                "long": 162.9833,
                "countries": [
                    "FM"
                ],
                "comments": "Kosrae"
            },
            "Atlantic/Faroe": {
                "name": "Atlantic/Faroe",
                "lat": 62.0167,
                "long": -5.2333,
                "countries": [
                    "FO"
                ],
                "comments": ""
            },
            "Europe/Paris": {
                "name": "Europe/Paris",
                "lat": 48.8667,
                "long": 2.3333,
                "countries": [
                    "FR"
                ],
                "comments": ""
            },
            "Europe/London": {
                "name": "Europe/London",
                "lat": 51.5083,
                "long": 0.1253,
                "countries": [
                    "GB",
                    "GG",
                    "IM",
                    "JE"
                ],
                "comments": ""
            },
            "Asia/Tbilisi": {
                "name": "Asia/Tbilisi",
                "lat": 41.7167,
                "long": 44.8167,
                "countries": [
                    "GE"
                ],
                "comments": ""
            },
            "America/Cayenne": {
                "name": "America/Cayenne",
                "lat": 4.9333,
                "long": -51.6667,
                "countries": [
                    "GF"
                ],
                "comments": ""
            },
            "Africa/Accra": {
                "name": "Africa/Accra",
                "lat": 5.55,
                "long": 0.2167,
                "countries": [
                    "GH"
                ],
                "comments": ""
            },
            "Europe/Gibraltar": {
                "name": "Europe/Gibraltar",
                "lat": 36.1333,
                "long": -4.65,
                "countries": [
                    "GI"
                ],
                "comments": ""
            },
            "America/Godthab": {
                "name": "America/Godthab",
                "lat": 64.1833,
                "long": -50.2667,
                "countries": [
                    "GL"
                ],
                "comments": "most locations"
            },
            "America/Danmarkshavn": {
                "name": "America/Danmarkshavn",
                "lat": 76.7667,
                "long": -17.3333,
                "countries": [
                    "GL"
                ],
                "comments": "east coast, north of Scoresbysund"
            },
            "America/Scoresbysund": {
                "name": "America/Scoresbysund",
                "lat": 70.4833,
                "long": -20.0333,
                "countries": [
                    "GL"
                ],
                "comments": "Scoresbysund / Ittoqqortoormiit"
            },
            "America/Thule": {
                "name": "America/Thule",
                "lat": 76.5667,
                "long": -67.2167,
                "countries": [
                    "GL"
                ],
                "comments": "Thule / Pituffik"
            },
            "Europe/Athens": {
                "name": "Europe/Athens",
                "lat": 37.9667,
                "long": 23.7167,
                "countries": [
                    "GR"
                ],
                "comments": ""
            },
            "Atlantic/South_Georgia": {
                "name": "Atlantic/South_Georgia",
                "lat": -53.7333,
                "long": -35.4667,
                "countries": [
                    "GS"
                ],
                "comments": ""
            },
            "America/Guatemala": {
                "name": "America/Guatemala",
                "lat": 14.6333,
                "long": -89.4833,
                "countries": [
                    "GT"
                ],
                "comments": ""
            },
            "Pacific/Guam": {
                "name": "Pacific/Guam",
                "lat": 13.4667,
                "long": 144.75,
                "countries": [
                    "GU",
                    "MP"
                ],
                "comments": ""
            },
            "Africa/Bissau": {
                "name": "Africa/Bissau",
                "lat": 11.85,
                "long": -14.4167,
                "countries": [
                    "GW"
                ],
                "comments": ""
            },
            "America/Guyana": {
                "name": "America/Guyana",
                "lat": 6.8,
                "long": -57.8333,
                "countries": [
                    "GY"
                ],
                "comments": ""
            },
            "Asia/Hong_Kong": {
                "name": "Asia/Hong_Kong",
                "lat": 22.2833,
                "long": 114.15,
                "countries": [
                    "HK"
                ],
                "comments": ""
            },
            "America/Tegucigalpa": {
                "name": "America/Tegucigalpa",
                "lat": 14.1,
                "long": -86.7833,
                "countries": [
                    "HN"
                ],
                "comments": ""
            },
            "America/Port-au-Prince": {
                "name": "America/Port-au-Prince",
                "lat": 18.5333,
                "long": -71.6667,
                "countries": [
                    "HT"
                ],
                "comments": ""
            },
            "Europe/Budapest": {
                "name": "Europe/Budapest",
                "lat": 47.5,
                "long": 19.0833,
                "countries": [
                    "HU"
                ],
                "comments": ""
            },
            "Asia/Jakarta": {
                "name": "Asia/Jakarta",
                "lat": -5.8333,
                "long": 106.8,
                "countries": [
                    "ID"
                ],
                "comments": "Java & Sumatra"
            },
            "Asia/Pontianak": {
                "name": "Asia/Pontianak",
                "lat": 0.0333,
                "long": 109.3333,
                "countries": [
                    "ID"
                ],
                "comments": "west & central Borneo"
            },
            "Asia/Makassar": {
                "name": "Asia/Makassar",
                "lat": -4.8833,
                "long": 119.4,
                "countries": [
                    "ID"
                ],
                "comments": "east & south Borneo, Sulawesi (Celebes), Bali, Nusa Tengarra, west Timor"
            },
            "Asia/Jayapura": {
                "name": "Asia/Jayapura",
                "lat": -1.4667,
                "long": 140.7,
                "countries": [
                    "ID"
                ],
                "comments": "west New Guinea (Irian Jaya) & Malukus (Moluccas)"
            },
            "Europe/Dublin": {
                "name": "Europe/Dublin",
                "lat": 53.3333,
                "long": -5.75,
                "countries": [
                    "IE"
                ],
                "comments": ""
            },
            "Asia/Jerusalem": {
                "name": "Asia/Jerusalem",
                "lat": 31.7806,
                "long": 35.2239,
                "countries": [
                    "IL"
                ],
                "comments": ""
            },
            "Asia/Kolkata": {
                "name": "Asia/Kolkata",
                "lat": 22.5333,
                "long": 88.3667,
                "countries": [
                    "IN"
                ],
                "comments": ""
            },
            "Indian/Chagos": {
                "name": "Indian/Chagos",
                "lat": -6.6667,
                "long": 72.4167,
                "countries": [
                    "IO"
                ],
                "comments": ""
            },
            "Asia/Baghdad": {
                "name": "Asia/Baghdad",
                "lat": 33.35,
                "long": 44.4167,
                "countries": [
                    "IQ"
                ],
                "comments": ""
            },
            "Asia/Tehran": {
                "name": "Asia/Tehran",
                "lat": 35.6667,
                "long": 51.4333,
                "countries": [
                    "IR"
                ],
                "comments": ""
            },
            "Atlantic/Reykjavik": {
                "name": "Atlantic/Reykjavik",
                "lat": 64.15,
                "long": -20.15,
                "countries": [
                    "IS"
                ],
                "comments": ""
            },
            "Europe/Rome": {
                "name": "Europe/Rome",
                "lat": 41.9,
                "long": 12.4833,
                "countries": [
                    "IT",
                    "SM",
                    "VA"
                ],
                "comments": ""
            },
            "America/Jamaica": {
                "name": "America/Jamaica",
                "lat": 17.9681,
                "long": -75.2067,
                "countries": [
                    "JM"
                ],
                "comments": ""
            },
            "Asia/Amman": {
                "name": "Asia/Amman",
                "lat": 31.95,
                "long": 35.9333,
                "countries": [
                    "JO"
                ],
                "comments": ""
            },
            "Asia/Tokyo": {
                "name": "Asia/Tokyo",
                "lat": 35.6544,
                "long": 139.7447,
                "countries": [
                    "JP"
                ],
                "comments": ""
            },
            "Africa/Nairobi": {
                "name": "Africa/Nairobi",
                "lat": -0.7167,
                "long": 36.8167,
                "countries": [
                    "KE",
                    "DJ",
                    "ER",
                    "ET",
                    "KM",
                    "MG",
                    "SO",
                    "TZ",
                    "UG",
                    "YT"
                ],
                "comments": ""
            },
            "Asia/Bishkek": {
                "name": "Asia/Bishkek",
                "lat": 42.9,
                "long": 74.6,
                "countries": [
                    "KG"
                ],
                "comments": ""
            },
            "Pacific/Tarawa": {
                "name": "Pacific/Tarawa",
                "lat": 1.4167,
                "long": 173,
                "countries": [
                    "KI"
                ],
                "comments": "Gilbert Islands"
            },
            "Pacific/Enderbury": {
                "name": "Pacific/Enderbury",
                "lat": -2.8667,
                "long": -170.9167,
                "countries": [
                    "KI"
                ],
                "comments": "Phoenix Islands"
            },
            "Pacific/Kiritimati": {
                "name": "Pacific/Kiritimati",
                "lat": 1.8667,
                "long": -156.6667,
                "countries": [
                    "KI"
                ],
                "comments": "Line Islands"
            },
            "Asia/Pyongyang": {
                "name": "Asia/Pyongyang",
                "lat": 39.0167,
                "long": 125.75,
                "countries": [
                    "KP"
                ],
                "comments": ""
            },
            "Asia/Seoul": {
                "name": "Asia/Seoul",
                "lat": 37.55,
                "long": 126.9667,
                "countries": [
                    "KR"
                ],
                "comments": ""
            },
            "Asia/Almaty": {
                "name": "Asia/Almaty",
                "lat": 43.25,
                "long": 76.95,
                "countries": [
                    "KZ"
                ],
                "comments": "most locations"
            },
            "Asia/Qyzylorda": {
                "name": "Asia/Qyzylorda",
                "lat": 44.8,
                "long": 65.4667,
                "countries": [
                    "KZ"
                ],
                "comments": "Qyzylorda (Kyzylorda, Kzyl-Orda)"
            },
            "Asia/Aqtobe": {
                "name": "Asia/Aqtobe",
                "lat": 50.2833,
                "long": 57.1667,
                "countries": [
                    "KZ"
                ],
                "comments": "Aqtobe (Aktobe)"
            },
            "Asia/Aqtau": {
                "name": "Asia/Aqtau",
                "lat": 44.5167,
                "long": 50.2667,
                "countries": [
                    "KZ"
                ],
                "comments": "Atyrau (Atirau, Gur'yev), Mangghystau (Mankistau)"
            },
            "Asia/Oral": {
                "name": "Asia/Oral",
                "lat": 51.2167,
                "long": 51.35,
                "countries": [
                    "KZ"
                ],
                "comments": "West Kazakhstan"
            },
            "Asia/Beirut": {
                "name": "Asia/Beirut",
                "lat": 33.8833,
                "long": 35.5,
                "countries": [
                    "LB"
                ],
                "comments": ""
            },
            "Asia/Colombo": {
                "name": "Asia/Colombo",
                "lat": 6.9333,
                "long": 79.85,
                "countries": [
                    "LK"
                ],
                "comments": ""
            },
            "Africa/Monrovia": {
                "name": "Africa/Monrovia",
                "lat": 6.3,
                "long": -9.2167,
                "countries": [
                    "LR"
                ],
                "comments": ""
            },
            "Europe/Vilnius": {
                "name": "Europe/Vilnius",
                "lat": 54.6833,
                "long": 25.3167,
                "countries": [
                    "LT"
                ],
                "comments": ""
            },
            "Europe/Luxembourg": {
                "name": "Europe/Luxembourg",
                "lat": 49.6,
                "long": 6.15,
                "countries": [
                    "LU"
                ],
                "comments": ""
            },
            "Europe/Riga": {
                "name": "Europe/Riga",
                "lat": 56.95,
                "long": 24.1,
                "countries": [
                    "LV"
                ],
                "comments": ""
            },
            "Africa/Tripoli": {
                "name": "Africa/Tripoli",
                "lat": 32.9,
                "long": 13.1833,
                "countries": [
                    "LY"
                ],
                "comments": ""
            },
            "Africa/Casablanca": {
                "name": "Africa/Casablanca",
                "lat": 33.65,
                "long": -6.4167,
                "countries": [
                    "MA"
                ],
                "comments": ""
            },
            "Europe/Monaco": {
                "name": "Europe/Monaco",
                "lat": 43.7,
                "long": 7.3833,
                "countries": [
                    "MC"
                ],
                "comments": ""
            },
            "Europe/Chisinau": {
                "name": "Europe/Chisinau",
                "lat": 47,
                "long": 28.8333,
                "countries": [
                    "MD"
                ],
                "comments": ""
            },
            "Pacific/Majuro": {
                "name": "Pacific/Majuro",
                "lat": 7.15,
                "long": 171.2,
                "countries": [
                    "MH"
                ],
                "comments": "most locations"
            },
            "Pacific/Kwajalein": {
                "name": "Pacific/Kwajalein",
                "lat": 9.0833,
                "long": 167.3333,
                "countries": [
                    "MH"
                ],
                "comments": "Kwajalein"
            },
            "Asia/Rangoon": {
                "name": "Asia/Rangoon",
                "lat": 16.7833,
                "long": 96.1667,
                "countries": [
                    "MM"
                ],
                "comments": ""
            },
            "Asia/Ulaanbaatar": {
                "name": "Asia/Ulaanbaatar",
                "lat": 47.9167,
                "long": 106.8833,
                "countries": [
                    "MN"
                ],
                "comments": "most locations"
            },
            "Asia/Hovd": {
                "name": "Asia/Hovd",
                "lat": 48.0167,
                "long": 91.65,
                "countries": [
                    "MN"
                ],
                "comments": "Bayan-Ã–lgii, Govi-Altai, Hovd, Uvs, Zavkhan"
            },
            "Asia/Choibalsan": {
                "name": "Asia/Choibalsan",
                "lat": 48.0667,
                "long": 114.5,
                "countries": [
                    "MN"
                ],
                "comments": "Dornod, SÃ¼khbaatar"
            },
            "Asia/Macau": {
                "name": "Asia/Macau",
                "lat": 22.2333,
                "long": 113.5833,
                "countries": [
                    "MO"
                ],
                "comments": ""
            },
            "America/Martinique": {
                "name": "America/Martinique",
                "lat": 14.6,
                "long": -60.9167,
                "countries": [
                    "MQ"
                ],
                "comments": ""
            },
            "Europe/Malta": {
                "name": "Europe/Malta",
                "lat": 35.9,
                "long": 14.5167,
                "countries": [
                    "MT"
                ],
                "comments": ""
            },
            "Indian/Mauritius": {
                "name": "Indian/Mauritius",
                "lat": -19.8333,
                "long": 57.5,
                "countries": [
                    "MU"
                ],
                "comments": ""
            },
            "Indian/Maldives": {
                "name": "Indian/Maldives",
                "lat": 4.1667,
                "long": 73.5,
                "countries": [
                    "MV"
                ],
                "comments": ""
            },
            "America/Mexico_City": {
                "name": "America/Mexico_City",
                "lat": 19.4,
                "long": -98.85,
                "countries": [
                    "MX"
                ],
                "comments": "Central Time - most locations"
            },
            "America/Cancun": {
                "name": "America/Cancun",
                "lat": 21.0833,
                "long": -85.2333,
                "countries": [
                    "MX"
                ],
                "comments": "Eastern Standard Time - Quintana Roo"
            },
            "America/Merida": {
                "name": "America/Merida",
                "lat": 20.9667,
                "long": -88.3833,
                "countries": [
                    "MX"
                ],
                "comments": "Central Time - Campeche, YucatÃ¡n"
            },
            "America/Monterrey": {
                "name": "America/Monterrey",
                "lat": 25.6667,
                "long": -99.6833,
                "countries": [
                    "MX"
                ],
                "comments": "Mexican Central Time - Coahuila, Durango, Nuevo LeÃ³n, Tamaulipas away from US border"
            },
            "America/Matamoros": {
                "name": "America/Matamoros",
                "lat": 25.8333,
                "long": -96.5,
                "countries": [
                    "MX"
                ],
                "comments": "US Central Time - Coahuila, Durango, Nuevo LeÃ³n, Tamaulipas near US border"
            },
            "America/Mazatlan": {
                "name": "America/Mazatlan",
                "lat": 23.2167,
                "long": -105.5833,
                "countries": [
                    "MX"
                ],
                "comments": "Mountain Time - S Baja, Nayarit, Sinaloa"
            },
            "America/Chihuahua": {
                "name": "America/Chihuahua",
                "lat": 28.6333,
                "long": -105.9167,
                "countries": [
                    "MX"
                ],
                "comments": "Mexican Mountain Time - Chihuahua away from US border"
            },
            "America/Ojinaga": {
                "name": "America/Ojinaga",
                "lat": 29.5667,
                "long": -103.5833,
                "countries": [
                    "MX"
                ],
                "comments": "US Mountain Time - Chihuahua near US border"
            },
            "America/Hermosillo": {
                "name": "America/Hermosillo",
                "lat": 29.0667,
                "long": -109.0333,
                "countries": [
                    "MX"
                ],
                "comments": "Mountain Standard Time - Sonora"
            },
            "America/Tijuana": {
                "name": "America/Tijuana",
                "lat": 32.5333,
                "long": -116.9833,
                "countries": [
                    "MX"
                ],
                "comments": "US Pacific Time - Baja California near US border"
            },
            "America/Santa_Isabel": {
                "name": "America/Santa_Isabel",
                "lat": 30.3,
                "long": -113.1333,
                "countries": [
                    "MX"
                ],
                "comments": "Mexican Pacific Time - Baja California away from US border"
            },
            "America/Bahia_Banderas": {
                "name": "America/Bahia_Banderas",
                "lat": 20.8,
                "long": -104.75,
                "countries": [
                    "MX"
                ],
                "comments": "Mexican Central Time - BahÃ­a de Banderas"
            },
            "Asia/Kuala_Lumpur": {
                "name": "Asia/Kuala_Lumpur",
                "lat": 3.1667,
                "long": 101.7,
                "countries": [
                    "MY"
                ],
                "comments": "peninsular Malaysia"
            },
            "Asia/Kuching": {
                "name": "Asia/Kuching",
                "lat": 1.55,
                "long": 110.3333,
                "countries": [
                    "MY"
                ],
                "comments": "Sabah & Sarawak"
            },
            "Africa/Maputo": {
                "name": "Africa/Maputo",
                "lat": -24.0333,
                "long": 32.5833,
                "countries": [
                    "MZ",
                    "BI",
                    "BW",
                    "CD",
                    "MW",
                    "RW",
                    "ZM",
                    "ZW"
                ],
                "comments": "Central Africa Time (UTC+2)"
            },
            "Africa/Windhoek": {
                "name": "Africa/Windhoek",
                "lat": -21.4333,
                "long": 17.1,
                "countries": [
                    "NA"
                ],
                "comments": ""
            },
            "Pacific/Noumea": {
                "name": "Pacific/Noumea",
                "lat": -21.7333,
                "long": 166.45,
                "countries": [
                    "NC"
                ],
                "comments": ""
            },
            "Pacific/Norfolk": {
                "name": "Pacific/Norfolk",
                "lat": -28.95,
                "long": 167.9667,
                "countries": [
                    "NF"
                ],
                "comments": ""
            },
            "Africa/Lagos": {
                "name": "Africa/Lagos",
                "lat": 6.45,
                "long": 3.4,
                "countries": [
                    "NG",
                    "AO",
                    "BJ",
                    "CD",
                    "CF",
                    "CG",
                    "CM",
                    "GA",
                    "GQ",
                    "NE"
                ],
                "comments": "West Africa Time (UTC+1)"
            },
            "America/Managua": {
                "name": "America/Managua",
                "lat": 12.15,
                "long": -85.7167,
                "countries": [
                    "NI"
                ],
                "comments": ""
            },
            "Europe/Amsterdam": {
                "name": "Europe/Amsterdam",
                "lat": 52.3667,
                "long": 4.9,
                "countries": [
                    "NL"
                ],
                "comments": ""
            },
            "Europe/Oslo": {
                "name": "Europe/Oslo",
                "lat": 59.9167,
                "long": 10.75,
                "countries": [
                    "NO",
                    "SJ"
                ],
                "comments": ""
            },
            "Asia/Kathmandu": {
                "name": "Asia/Kathmandu",
                "lat": 27.7167,
                "long": 85.3167,
                "countries": [
                    "NP"
                ],
                "comments": ""
            },
            "Pacific/Nauru": {
                "name": "Pacific/Nauru",
                "lat": 0.5167,
                "long": 166.9167,
                "countries": [
                    "NR"
                ],
                "comments": ""
            },
            "Pacific/Niue": {
                "name": "Pacific/Niue",
                "lat": -18.9833,
                "long": -168.0833,
                "countries": [
                    "NU"
                ],
                "comments": ""
            },
            "Pacific/Auckland": {
                "name": "Pacific/Auckland",
                "lat": -35.1333,
                "long": 174.7667,
                "countries": [
                    "NZ",
                    "AQ"
                ],
                "comments": "New Zealand time"
            },
            "Pacific/Chatham": {
                "name": "Pacific/Chatham",
                "lat": -42.05,
                "long": -175.45,
                "countries": [
                    "NZ"
                ],
                "comments": "Chatham Islands"
            },
            "America/Panama": {
                "name": "America/Panama",
                "lat": 8.9667,
                "long": -78.4667,
                "countries": [
                    "PA",
                    "KY"
                ],
                "comments": ""
            },
            "America/Lima": {
                "name": "America/Lima",
                "lat": -11.95,
                "long": -76.95,
                "countries": [
                    "PE"
                ],
                "comments": ""
            },
            "Pacific/Tahiti": {
                "name": "Pacific/Tahiti",
                "lat": -16.4667,
                "long": -148.4333,
                "countries": [
                    "PF"
                ],
                "comments": "Society Islands"
            },
            "Pacific/Marquesas": {
                "name": "Pacific/Marquesas",
                "lat": -9,
                "long": -138.5,
                "countries": [
                    "PF"
                ],
                "comments": "Marquesas Islands"
            },
            "Pacific/Gambier": {
                "name": "Pacific/Gambier",
                "lat": -22.8667,
                "long": -133.05,
                "countries": [
                    "PF"
                ],
                "comments": "Gambier Islands"
            },
            "Pacific/Port_Moresby": {
                "name": "Pacific/Port_Moresby",
                "lat": -8.5,
                "long": 147.1667,
                "countries": [
                    "PG"
                ],
                "comments": "most locations"
            },
            "Asia/Manila": {
                "name": "Asia/Manila",
                "lat": 14.5833,
                "long": 121,
                "countries": [
                    "PH"
                ],
                "comments": ""
            },
            "Asia/Karachi": {
                "name": "Asia/Karachi",
                "lat": 24.8667,
                "long": 67.05,
                "countries": [
                    "PK"
                ],
                "comments": ""
            },
            "Europe/Warsaw": {
                "name": "Europe/Warsaw",
                "lat": 52.25,
                "long": 21,
                "countries": [
                    "PL"
                ],
                "comments": ""
            },
            "America/Miquelon": {
                "name": "America/Miquelon",
                "lat": 47.05,
                "long": -55.6667,
                "countries": [
                    "PM"
                ],
                "comments": ""
            },
            "Pacific/Pitcairn": {
                "name": "Pacific/Pitcairn",
                "lat": -24.9333,
                "long": -129.9167,
                "countries": [
                    "PN"
                ],
                "comments": ""
            },
            "America/Puerto_Rico": {
                "name": "America/Puerto_Rico",
                "lat": 18.4683,
                "long": -65.8939,
                "countries": [
                    "PR"
                ],
                "comments": ""
            },
            "Asia/Gaza": {
                "name": "Asia/Gaza",
                "lat": 31.5,
                "long": 34.4667,
                "countries": [
                    "PS"
                ],
                "comments": "Gaza Strip"
            },
            "Asia/Hebron": {
                "name": "Asia/Hebron",
                "lat": 31.5333,
                "long": 35.095,
                "countries": [
                    "PS"
                ],
                "comments": "West Bank"
            },
            "Europe/Lisbon": {
                "name": "Europe/Lisbon",
                "lat": 38.7167,
                "long": -8.8667,
                "countries": [
                    "PT"
                ],
                "comments": "mainland"
            },
            "Atlantic/Madeira": {
                "name": "Atlantic/Madeira",
                "lat": 32.6333,
                "long": -15.1,
                "countries": [
                    "PT"
                ],
                "comments": "Madeira Islands"
            },
            "Atlantic/Azores": {
                "name": "Atlantic/Azores",
                "lat": 37.7333,
                "long": -24.3333,
                "countries": [
                    "PT"
                ],
                "comments": "Azores"
            },
            "Pacific/Palau": {
                "name": "Pacific/Palau",
                "lat": 7.3333,
                "long": 134.4833,
                "countries": [
                    "PW"
                ],
                "comments": ""
            },
            "America/Asuncion": {
                "name": "America/Asuncion",
                "lat": -24.7333,
                "long": -56.3333,
                "countries": [
                    "PY"
                ],
                "comments": ""
            },
            "Asia/Qatar": {
                "name": "Asia/Qatar",
                "lat": 25.2833,
                "long": 51.5333,
                "countries": [
                    "QA",
                    "BH"
                ],
                "comments": ""
            },
            "Indian/Reunion": {
                "name": "Indian/Reunion",
                "lat": -19.1333,
                "long": 55.4667,
                "countries": [
                    "RE",
                    "TF"
                ],
                "comments": "RÃ©union, Crozet Is, Scattered Is"
            },
            "Europe/Bucharest": {
                "name": "Europe/Bucharest",
                "lat": 44.4333,
                "long": 26.1,
                "countries": [
                    "RO"
                ],
                "comments": ""
            },
            "Europe/Belgrade": {
                "name": "Europe/Belgrade",
                "lat": 44.8333,
                "long": 20.5,
                "countries": [
                    "RS",
                    "BA",
                    "HR",
                    "ME",
                    "MK",
                    "SI"
                ],
                "comments": ""
            },
            "Europe/Kaliningrad": {
                "name": "Europe/Kaliningrad",
                "lat": 54.7167,
                "long": 20.5,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow-01 - Kaliningrad"
            },
            "Europe/Moscow": {
                "name": "Europe/Moscow",
                "lat": 55.7558,
                "long": 37.6178,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+00 - west Russia"
            },
            "Europe/Simferopol": {
                "name": "Europe/Simferopol",
                "lat": 44.95,
                "long": 34.1,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+00 - Crimea"
            },
            "Europe/Volgograd": {
                "name": "Europe/Volgograd",
                "lat": 48.7333,
                "long": 44.4167,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+00 - Caspian Sea"
            },
            "Europe/Samara": {
                "name": "Europe/Samara",
                "lat": 53.2,
                "long": 50.15,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+00 (Moscow+01 after 2014-10-26) - Samara, Udmurtia"
            },
            "Asia/Yekaterinburg": {
                "name": "Asia/Yekaterinburg",
                "lat": 56.85,
                "long": 60.6,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+02 - Urals"
            },
            "Asia/Omsk": {
                "name": "Asia/Omsk",
                "lat": 55,
                "long": 73.4,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+03 - west Siberia"
            },
            "Asia/Novosibirsk": {
                "name": "Asia/Novosibirsk",
                "lat": 55.0333,
                "long": 82.9167,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+03 - Novosibirsk"
            },
            "Asia/Novokuznetsk": {
                "name": "Asia/Novokuznetsk",
                "lat": 53.75,
                "long": 87.1167,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+03 (Moscow+04 after 2014-10-26) - Kemerovo"
            },
            "Asia/Krasnoyarsk": {
                "name": "Asia/Krasnoyarsk",
                "lat": 56.0167,
                "long": 92.8333,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+04 - Yenisei River"
            },
            "Asia/Irkutsk": {
                "name": "Asia/Irkutsk",
                "lat": 52.2667,
                "long": 104.3333,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+05 - Lake Baikal"
            },
            "Asia/Yakutsk": {
                "name": "Asia/Yakutsk",
                "lat": 62,
                "long": 129.6667,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+06 - Lena River"
            },
            "Asia/Khandyga": {
                "name": "Asia/Khandyga",
                "lat": 62.6564,
                "long": 135.5539,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+06 - Tomponsky, Ust-Maysky"
            },
            "Asia/Vladivostok": {
                "name": "Asia/Vladivostok",
                "lat": 43.1667,
                "long": 131.9333,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+07 - Amur River"
            },
            "Asia/Sakhalin": {
                "name": "Asia/Sakhalin",
                "lat": 46.9667,
                "long": 142.7,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+07 - Sakhalin Island"
            },
            "Asia/Ust-Nera": {
                "name": "Asia/Ust-Nera",
                "lat": 64.5603,
                "long": 143.2267,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+07 - Oymyakonsky"
            },
            "Asia/Magadan": {
                "name": "Asia/Magadan",
                "lat": 59.5667,
                "long": 150.8,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+08 (Moscow+07 after 2014-10-26) - Magadan"
            },
            "Asia/Kamchatka": {
                "name": "Asia/Kamchatka",
                "lat": 53.0167,
                "long": 158.65,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+08 (Moscow+09 after 2014-10-26) - Kamchatka"
            },
            "Asia/Anadyr": {
                "name": "Asia/Anadyr",
                "lat": 64.75,
                "long": 177.4833,
                "countries": [
                    "RU"
                ],
                "comments": "Moscow+08 (Moscow+09 after 2014-10-26) - Bering Sea"
            },
            "Asia/Riyadh": {
                "name": "Asia/Riyadh",
                "lat": 24.6333,
                "long": 46.7167,
                "countries": [
                    "SA",
                    "KW",
                    "YE"
                ],
                "comments": ""
            },
            "Pacific/Guadalcanal": {
                "name": "Pacific/Guadalcanal",
                "lat": -8.4667,
                "long": 160.2,
                "countries": [
                    "SB"
                ],
                "comments": ""
            },
            "Indian/Mahe": {
                "name": "Indian/Mahe",
                "lat": -3.3333,
                "long": 55.4667,
                "countries": [
                    "SC"
                ],
                "comments": ""
            },
            "Africa/Khartoum": {
                "name": "Africa/Khartoum",
                "lat": 15.6,
                "long": 32.5333,
                "countries": [
                    "SD",
                    "SS"
                ],
                "comments": ""
            },
            "Europe/Stockholm": {
                "name": "Europe/Stockholm",
                "lat": 59.3333,
                "long": 18.05,
                "countries": [
                    "SE"
                ],
                "comments": ""
            },
            "Asia/Singapore": {
                "name": "Asia/Singapore",
                "lat": 1.2833,
                "long": 103.85,
                "countries": [
                    "SG"
                ],
                "comments": ""
            },
            "America/Paramaribo": {
                "name": "America/Paramaribo",
                "lat": 5.8333,
                "long": -54.8333,
                "countries": [
                    "SR"
                ],
                "comments": ""
            },
            "America/El_Salvador": {
                "name": "America/El_Salvador",
                "lat": 13.7,
                "long": -88.8,
                "countries": [
                    "SV"
                ],
                "comments": ""
            },
            "Asia/Damascus": {
                "name": "Asia/Damascus",
                "lat": 33.5,
                "long": 36.3,
                "countries": [
                    "SY"
                ],
                "comments": ""
            },
            "America/Grand_Turk": {
                "name": "America/Grand_Turk",
                "lat": 21.4667,
                "long": -70.8667,
                "countries": [
                    "TC"
                ],
                "comments": ""
            },
            "Africa/Ndjamena": {
                "name": "Africa/Ndjamena",
                "lat": 12.1167,
                "long": 15.05,
                "countries": [
                    "TD"
                ],
                "comments": ""
            },
            "Indian/Kerguelen": {
                "name": "Indian/Kerguelen",
                "lat": -48.6472,
                "long": 70.2175,
                "countries": [
                    "TF"
                ],
                "comments": "Kerguelen, St Paul I, Amsterdam I"
            },
            "Asia/Bangkok": {
                "name": "Asia/Bangkok",
                "lat": 13.75,
                "long": 100.5167,
                "countries": [
                    "TH",
                    "KH",
                    "LA",
                    "VN"
                ],
                "comments": "most of Indochina"
            },
            "Asia/Dushanbe": {
                "name": "Asia/Dushanbe",
                "lat": 38.5833,
                "long": 68.8,
                "countries": [
                    "TJ"
                ],
                "comments": ""
            },
            "Pacific/Fakaofo": {
                "name": "Pacific/Fakaofo",
                "lat": -8.6333,
                "long": -170.7667,
                "countries": [
                    "TK"
                ],
                "comments": ""
            },
            "Asia/Dili": {
                "name": "Asia/Dili",
                "lat": -7.45,
                "long": 125.5833,
                "countries": [
                    "TL"
                ],
                "comments": ""
            },
            "Asia/Ashgabat": {
                "name": "Asia/Ashgabat",
                "lat": 37.95,
                "long": 58.3833,
                "countries": [
                    "TM"
                ],
                "comments": ""
            },
            "Africa/Tunis": {
                "name": "Africa/Tunis",
                "lat": 36.8,
                "long": 10.1833,
                "countries": [
                    "TN"
                ],
                "comments": ""
            },
            "Pacific/Tongatapu": {
                "name": "Pacific/Tongatapu",
                "lat": -20.8333,
                "long": -174.8333,
                "countries": [
                    "TO"
                ],
                "comments": ""
            },
            "Europe/Istanbul": {
                "name": "Europe/Istanbul",
                "lat": 41.0167,
                "long": 28.9667,
                "countries": [
                    "TR"
                ],
                "comments": ""
            },
            "America/Port_of_Spain": {
                "name": "America/Port_of_Spain",
                "lat": 10.65,
                "long": -60.4833,
                "countries": [
                    "TT",
                    "AG",
                    "AI",
                    "BL",
                    "DM",
                    "GD",
                    "GP",
                    "KN",
                    "LC",
                    "MF",
                    "MS",
                    "VC",
                    "VG",
                    "VI"
                ],
                "comments": ""
            },
            "Pacific/Funafuti": {
                "name": "Pacific/Funafuti",
                "lat": -7.4833,
                "long": 179.2167,
                "countries": [
                    "TV"
                ],
                "comments": ""
            },
            "Asia/Taipei": {
                "name": "Asia/Taipei",
                "lat": 25.05,
                "long": 121.5,
                "countries": [
                    "TW"
                ],
                "comments": ""
            },
            "Europe/Kiev": {
                "name": "Europe/Kiev",
                "lat": 50.4333,
                "long": 30.5167,
                "countries": [
                    "UA"
                ],
                "comments": "most locations"
            },
            "Europe/Uzhgorod": {
                "name": "Europe/Uzhgorod",
                "lat": 48.6167,
                "long": 22.3,
                "countries": [
                    "UA"
                ],
                "comments": "Ruthenia"
            },
            "Europe/Zaporozhye": {
                "name": "Europe/Zaporozhye",
                "lat": 47.8333,
                "long": 35.1667,
                "countries": [
                    "UA"
                ],
                "comments": "Zaporozh'ye, E Lugansk / Zaporizhia, E Luhansk"
            },
            "Pacific/Wake": {
                "name": "Pacific/Wake",
                "lat": 19.2833,
                "long": 166.6167,
                "countries": [
                    "UM"
                ],
                "comments": "Wake Island"
            },
            "America/New_York": {
                "name": "America/New_York",
                "lat": 40.7142,
                "long": -73.9936,
                "countries": [
                    "US"
                ],
                "comments": "Eastern Time"
            },
            "America/Detroit": {
                "name": "America/Detroit",
                "lat": 42.3314,
                "long": -82.9542,
                "countries": [
                    "US"
                ],
                "comments": "Eastern Time - Michigan - most locations"
            },
            "America/Kentucky/Louisville": {
                "name": "America/Kentucky/Louisville",
                "lat": 38.2542,
                "long": -84.2406,
                "countries": [
                    "US"
                ],
                "comments": "Eastern Time - Kentucky - Louisville area"
            },
            "America/Kentucky/Monticello": {
                "name": "America/Kentucky/Monticello",
                "lat": 36.8297,
                "long": -83.1508,
                "countries": [
                    "US"
                ],
                "comments": "Eastern Time - Kentucky - Wayne County"
            },
            "America/Indiana/Indianapolis": {
                "name": "America/Indiana/Indianapolis",
                "lat": 39.7683,
                "long": -85.8419,
                "countries": [
                    "US"
                ],
                "comments": "Eastern Time - Indiana - most locations"
            },
            "America/Indiana/Vincennes": {
                "name": "America/Indiana/Vincennes",
                "lat": 38.6772,
                "long": -86.4714,
                "countries": [
                    "US"
                ],
                "comments": "Eastern Time - Indiana - Daviess, Dubois, Knox & Martin Counties"
            },
            "America/Indiana/Winamac": {
                "name": "America/Indiana/Winamac",
                "lat": 41.0514,
                "long": -85.3969,
                "countries": [
                    "US"
                ],
                "comments": "Eastern Time - Indiana - Pulaski County"
            },
            "America/Indiana/Marengo": {
                "name": "America/Indiana/Marengo",
                "lat": 38.3756,
                "long": -85.6553,
                "countries": [
                    "US"
                ],
                "comments": "Eastern Time - Indiana - Crawford County"
            },
            "America/Indiana/Petersburg": {
                "name": "America/Indiana/Petersburg",
                "lat": 38.4919,
                "long": -86.7214,
                "countries": [
                    "US"
                ],
                "comments": "Eastern Time - Indiana - Pike County"
            },
            "America/Indiana/Vevay": {
                "name": "America/Indiana/Vevay",
                "lat": 38.7478,
                "long": -84.9328,
                "countries": [
                    "US"
                ],
                "comments": "Eastern Time - Indiana - Switzerland County"
            },
            "America/Chicago": {
                "name": "America/Chicago",
                "lat": 41.85,
                "long": -86.35,
                "countries": [
                    "US"
                ],
                "comments": "Central Time"
            },
            "America/Indiana/Tell_City": {
                "name": "America/Indiana/Tell_City",
                "lat": 37.9531,
                "long": -85.2386,
                "countries": [
                    "US"
                ],
                "comments": "Central Time - Indiana - Perry County"
            },
            "America/Indiana/Knox": {
                "name": "America/Indiana/Knox",
                "lat": 41.2958,
                "long": -85.375,
                "countries": [
                    "US"
                ],
                "comments": "Central Time - Indiana - Starke County"
            },
            "America/Menominee": {
                "name": "America/Menominee",
                "lat": 45.1078,
                "long": -86.3858,
                "countries": [
                    "US"
                ],
                "comments": "Central Time - Michigan - Dickinson, Gogebic, Iron & Menominee Counties"
            },
            "America/North_Dakota/Center": {
                "name": "America/North_Dakota/Center",
                "lat": 47.1164,
                "long": -100.7008,
                "countries": [
                    "US"
                ],
                "comments": "Central Time - North Dakota - Oliver County"
            },
            "America/North_Dakota/New_Salem": {
                "name": "America/North_Dakota/New_Salem",
                "lat": 46.845,
                "long": -100.5892,
                "countries": [
                    "US"
                ],
                "comments": "Central Time - North Dakota - Morton County (except Mandan area)"
            },
            "America/North_Dakota/Beulah": {
                "name": "America/North_Dakota/Beulah",
                "lat": 47.2642,
                "long": -100.2222,
                "countries": [
                    "US"
                ],
                "comments": "Central Time - North Dakota - Mercer County"
            },
            "America/Denver": {
                "name": "America/Denver",
                "lat": 39.7392,
                "long": -103.0158,
                "countries": [
                    "US"
                ],
                "comments": "Mountain Time"
            },
            "America/Boise": {
                "name": "America/Boise",
                "lat": 43.6136,
                "long": -115.7975,
                "countries": [
                    "US"
                ],
                "comments": "Mountain Time - south Idaho & east Oregon"
            },
            "America/Phoenix": {
                "name": "America/Phoenix",
                "lat": 33.4483,
                "long": -111.9267,
                "countries": [
                    "US"
                ],
                "comments": "Mountain Standard Time - Arizona (except Navajo)"
            },
            "America/Los_Angeles": {
                "name": "America/Los_Angeles",
                "lat": 34.0522,
                "long": -117.7572,
                "countries": [
                    "US"
                ],
                "comments": "Pacific Time"
            },
            "America/Metlakatla": {
                "name": "America/Metlakatla",
                "lat": 55.1269,
                "long": -130.4236,
                "countries": [
                    "US"
                ],
                "comments": "Pacific Standard Time - Annette Island, Alaska"
            },
            "America/Anchorage": {
                "name": "America/Anchorage",
                "lat": 61.2181,
                "long": -148.0997,
                "countries": [
                    "US"
                ],
                "comments": "Alaska Time"
            },
            "America/Juneau": {
                "name": "America/Juneau",
                "lat": 58.3019,
                "long": -133.5803,
                "countries": [
                    "US"
                ],
                "comments": "Alaska Time - Alaska panhandle"
            },
            "America/Sitka": {
                "name": "America/Sitka",
                "lat": 57.1764,
                "long": -134.6981,
                "countries": [
                    "US"
                ],
                "comments": "Alaska Time - southeast Alaska panhandle"
            },
            "America/Yakutat": {
                "name": "America/Yakutat",
                "lat": 59.5469,
                "long": -138.2728,
                "countries": [
                    "US"
                ],
                "comments": "Alaska Time - Alaska panhandle neck"
            },
            "America/Nome": {
                "name": "America/Nome",
                "lat": 64.5011,
                "long": -164.5936,
                "countries": [
                    "US"
                ],
                "comments": "Alaska Time - west Alaska"
            },
            "America/Adak": {
                "name": "America/Adak",
                "lat": 51.88,
                "long": -175.3419,
                "countries": [
                    "US"
                ],
                "comments": "Aleutian Islands"
            },
            "Pacific/Honolulu": {
                "name": "Pacific/Honolulu",
                "lat": 21.3069,
                "long": -156.1417,
                "countries": [
                    "US",
                    "UM"
                ],
                "comments": "Hawaii time"
            },
            "America/Montevideo": {
                "name": "America/Montevideo",
                "lat": -33.1167,
                "long": -55.8167,
                "countries": [
                    "UY"
                ],
                "comments": ""
            },
            "Asia/Samarkand": {
                "name": "Asia/Samarkand",
                "lat": 39.6667,
                "long": 66.8,
                "countries": [
                    "UZ"
                ],
                "comments": "west Uzbekistan"
            },
            "Asia/Tashkent": {
                "name": "Asia/Tashkent",
                "lat": 41.3333,
                "long": 69.3,
                "countries": [
                    "UZ"
                ],
                "comments": "east Uzbekistan"
            },
            "America/Caracas": {
                "name": "America/Caracas",
                "lat": 10.5,
                "long": -65.0667,
                "countries": [
                    "VE"
                ],
                "comments": ""
            },
            "Asia/Ho_Chi_Minh": {
                "name": "Asia/Ho_Chi_Minh",
                "lat": 10.75,
                "long": 106.6667,
                "countries": [
                    "VN"
                ],
                "comments": "south Vietnam"
            },
            "Pacific/Efate": {
                "name": "Pacific/Efate",
                "lat": -16.3333,
                "long": 168.4167,
                "countries": [
                    "VU"
                ],
                "comments": ""
            },
            "Pacific/Wallis": {
                "name": "Pacific/Wallis",
                "lat": -12.7,
                "long": -175.8333,
                "countries": [
                    "WF"
                ],
                "comments": ""
            },
            "Pacific/Apia": {
                "name": "Pacific/Apia",
                "lat": -12.1667,
                "long": -170.2667,
                "countries": [
                    "WS"
                ],
                "comments": ""
            },
            "Africa/Johannesburg": {
                "name": "Africa/Johannesburg",
                "lat": -25.75,
                "long": 28,
                "countries": [
                    "ZA",
                    "LS",
                    "SZ"
                ],
                "comments": ""
            }
        }
    };

    for (var name in data.zones) {
        centers.push(new Center(data.zones[name]));
    }
});

Template.map.onRendered(function() {
    var $map = this.$('.map-inset');
    var width = $map.outerWidth();
    var height = $map.outerHeight();

    $(window).resize(function() {
        width = $map.outerWidth();
        height = $map.outerHeight();
    }).resize()

    var timeZone = Users.findOne().timeZone;

    console.log(timeZone);

    centers.forEach(function(center) {
        var $node = $('<span>').css({
            left: center.x * 100 + '%',
            top: center.y * 100 + '%'
        }).attr('data-time-zone', center.name);
        $map.append($node);

        if (timeZone === center.name) {
            $node.addClass('validated');
            var $axisXValidator = this.$('.map-axis.validator.x');
            var $axisYValidator = this.$('.map-axis.validator.y');
            $axisXValidator.css('left', center.x * 100 + '%');
            $axisYValidator.css('top', center.y * 100 + '%');

        }
        center.dom = $node;
    }, this);
});

Template.map.events({
    'click .map-inset': function(evt, tmpl) {
        evt.preventDefault();
        var $axisXcursor = tmpl.$('.map-axis.cursor.x');
        var $axisYcursor = tmpl.$('.map-axis.cursor.y');
        var $axisXValidator = tmpl.$('.map-axis.validator.x');
        var $axisYValidator = tmpl.$('.map-axis.validator.y');
        var $currentlyValidatedCenter = $('.map-inset span.validted');

        var $selectedCenter = $('.map-inset span.selected');
        $currentlyValidatedCenter.removeClass('validated');

        $selectedCenter.addClass('validated').removeClass('selected')
        var $validatedCenter = $selectedCenter;

        var timeZone = $validatedCenter.attr('data-time-zone');
        $axisXValidator.attr('style', $axisXcursor.attr('style'));
        $axisYValidator.attr('style', $axisYcursor.attr('style'));

        if (timeZone) {
            Session.set('timeZone', timeZone);

            Users.update(Meteor.userId(), {
                $set: {
                    timeZone: timeZone
                }
            }, function(error) {
                if (error) {
                    alert(error.reason);
                }
            });
        }
    },
    'mousemove .map-inset': function(evt, tmpl) {
        evt.preventDefault();
        var $axisX = tmpl.$('.map-axis.cursor.x');
        var $axisY = tmpl.$('.map-axis.cursor.y');
        var $map = tmpl.$('.map-inset');
        var $labelName = tmpl.$('.map-label-name');
        var $labelTime = tmpl.$('.map-label-time');

        var width = $map.outerWidth();
        var height = $map.outerHeight();

        var offset = $('.map-inset').offset();
        var x = evt.pageX - offset.left;
        var y = evt.pageY - offset.top;
        var px = x / width;
        var py = y / height;
        var dist;
        var closestDist = 100;
        var closestCenter;

        centers.forEach(function(center) {
            dist = center.distSqr(px, py);
            if (dist < closestDist) {
                closestCenter = center;
                closestDist = dist;
            }
        });

        if (closestCenter) {
            var $center = $(closestCenter.dom);
            if ($center.hasClass('selected')) {
                return;
            }

            var m = moment().tz(closestCenter.name);
            $labelName.text(closestCenter.name);
            $labelTime.text(m.format('LLL') + m.zoneAbbr());
            $axisX.css('left', closestCenter.x * 100 + '%');
            $axisY.css('top', closestCenter.y * 100 + '%');

            $('.map-inset span.selected').removeClass('selected');
            $center.addClass('selected')
        }
    }
});
