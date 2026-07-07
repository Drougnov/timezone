const countries = [
  /* =========================================================
   NORTH AMERICA
========================================================= */

  {
    country: "United States",
    city: "New York",
    timezone: "America/New_York",
    flag: "🇺🇸",
    aliases: ["usa", "america", "united states", "new york", "ny", "us"],
  },

  {
    country: "United States",
    city: "Chicago",
    timezone: "America/Chicago",
    flag: "🇺🇸",
    aliases: ["usa", "america", "chicago", "illinois"],
  },

  {
    country: "United States",
    city: "Denver",
    timezone: "America/Denver",
    flag: "🇺🇸",
    aliases: ["usa", "america", "denver", "colorado"],
  },

  {
    country: "United States",
    city: "Los Angeles",
    timezone: "America/Los_Angeles",
    flag: "🇺🇸",
    aliases: ["usa", "america", "los angeles", "la", "california"],
  },

  {
    country: "United States",
    city: "Anchorage",
    timezone: "America/Anchorage",
    flag: "🇺🇸",
    aliases: ["alaska", "anchorage", "usa"],
  },

  {
    country: "United States",
    city: "Honolulu",
    timezone: "Pacific/Honolulu",
    flag: "🇺🇸",
    aliases: ["hawaii", "honolulu", "usa"],
  },

  {
    country: "Canada",
    city: "Toronto",
    timezone: "America/Toronto",
    flag: "🇨🇦",
    aliases: ["canada", "toronto", "ca"],
  },

  {
    country: "Canada",
    city: "Vancouver",
    timezone: "America/Vancouver",
    flag: "🇨🇦",
    aliases: ["canada", "vancouver"],
  },

  {
    country: "Canada",
    city: "Edmonton",
    timezone: "America/Edmonton",
    flag: "🇨🇦",
    aliases: ["canada", "edmonton"],
  },

  {
    country: "Canada",
    city: "Halifax",
    timezone: "America/Halifax",
    flag: "🇨🇦",
    aliases: ["canada", "halifax"],
  },

  {
    country: "Mexico",
    city: "Mexico City",
    timezone: "America/Mexico_City",
    flag: "🇲🇽",
    aliases: ["mexico", "mexico city", "mx"],
  },

  {
    country: "Mexico",
    city: "Tijuana",
    timezone: "America/Tijuana",
    flag: "🇲🇽",
    aliases: ["mexico", "tijuana"],
  },

  {
    country: "Greenland",
    city: "Nuuk",
    timezone: "America/Nuuk",
    flag: "🇬🇱",
    aliases: ["greenland", "nuuk"],
  },

  /* =========================================================
   CENTRAL AMERICA
========================================================= */

  {
    country: "Guatemala",
    city: "Guatemala City",
    timezone: "America/Guatemala",
    flag: "🇬🇹",
    aliases: ["guatemala"],
  },

  {
    country: "Belize",
    city: "Belize City",
    timezone: "America/Belize",
    flag: "🇧🇿",
    aliases: ["belize"],
  },

  {
    country: "Honduras",
    city: "Tegucigalpa",
    timezone: "America/Tegucigalpa",
    flag: "🇭🇳",
    aliases: ["honduras"],
  },

  {
    country: "El Salvador",
    city: "San Salvador",
    timezone: "America/El_Salvador",
    flag: "🇸🇻",
    aliases: ["el salvador"],
  },

  {
    country: "Nicaragua",
    city: "Managua",
    timezone: "America/Managua",
    flag: "🇳🇮",
    aliases: ["nicaragua"],
  },

  {
    country: "Costa Rica",
    city: "San Jose",
    timezone: "America/Costa_Rica",
    flag: "🇨🇷",
    aliases: ["costa rica"],
  },

  {
    country: "Panama",
    city: "Panama City",
    timezone: "America/Panama",
    flag: "🇵🇦",
    aliases: ["panama"],
  },

  /* =========================================================
   CARIBBEAN
========================================================= */

  {
    country: "Bahamas",
    city: "Nassau",
    timezone: "America/Nassau",
    flag: "🇧🇸",
    aliases: ["bahamas"],
  },

  {
    country: "Cuba",
    city: "Havana",
    timezone: "America/Havana",
    flag: "🇨🇺",
    aliases: ["cuba"],
  },

  {
    country: "Jamaica",
    city: "Kingston",
    timezone: "America/Jamaica",
    flag: "🇯🇲",
    aliases: ["jamaica"],
  },

  {
    country: "Haiti",
    city: "Port-au-Prince",
    timezone: "America/Port-au-Prince",
    flag: "🇭🇹",
    aliases: ["haiti"],
  },

  {
    country: "Dominican Republic",
    city: "Santo Domingo",
    timezone: "America/Santo_Domingo",
    flag: "🇩🇴",
    aliases: ["dominican republic", "dr"],
  },

  {
    country: "Puerto Rico",
    city: "San Juan",
    timezone: "America/Puerto_Rico",
    flag: "🇵🇷",
    aliases: ["puerto rico"],
  },

  /* =========================================================
   SOUTH AMERICA
========================================================= */

  {
    country: "Brazil",
    city: "São Paulo",
    timezone: "America/Sao_Paulo",
    flag: "🇧🇷",
    aliases: ["brazil", "sao paulo", "br"],
  },

  {
    country: "Brazil",
    city: "Manaus",
    timezone: "America/Manaus",
    flag: "🇧🇷",
    aliases: ["brazil", "manaus"],
  },

  {
    country: "Argentina",
    city: "Buenos Aires",
    timezone: "America/Argentina/Buenos_Aires",
    flag: "🇦🇷",
    aliases: ["argentina"],
  },

  {
    country: "Chile",
    city: "Santiago",
    timezone: "America/Santiago",
    flag: "🇨🇱",
    aliases: ["chile"],
  },

  {
    country: "Peru",
    city: "Lima",
    timezone: "America/Lima",
    flag: "🇵🇪",
    aliases: ["peru"],
  },

  {
    country: "Colombia",
    city: "Bogotá",
    timezone: "America/Bogota",
    flag: "🇨🇴",
    aliases: ["colombia"],
  },

  {
    country: "Venezuela",
    city: "Caracas",
    timezone: "America/Caracas",
    flag: "🇻🇪",
    aliases: ["venezuela"],
  },

  {
    country: "Ecuador",
    city: "Quito",
    timezone: "America/Guayaquil",
    flag: "🇪🇨",
    aliases: ["ecuador"],
  },

  {
    country: "Bolivia",
    city: "La Paz",
    timezone: "America/La_Paz",
    flag: "🇧🇴",
    aliases: ["bolivia"],
  },

  {
    country: "Paraguay",
    city: "Asunción",
    timezone: "America/Asuncion",
    flag: "🇵🇾",
    aliases: ["paraguay"],
  },

  {
    country: "Uruguay",
    city: "Montevideo",
    timezone: "America/Montevideo",
    flag: "🇺🇾",
    aliases: ["uruguay"],
  },

  {
    country: "Guyana",
    city: "Georgetown",
    timezone: "America/Guyana",
    flag: "🇬🇾",
    aliases: ["guyana"],
  },

  {
    country: "Suriname",
    city: "Paramaribo",
    timezone: "America/Paramaribo",
    flag: "🇸🇷",
    aliases: ["suriname"],
  },

  {
    country: "French Guiana",
    city: "Cayenne",
    timezone: "America/Cayenne",
    flag: "🇬🇫",
    aliases: ["french guiana"],
  },
  /* =========================================================
   EUROPE (WESTERN & NORTHERN)
========================================================= */

  {
    country: "United Kingdom",
    city: "London",
    timezone: "Europe/London",
    flag: "🇬🇧",
    aliases: [
      "uk",
      "united kingdom",
      "britain",
      "great britain",
      "england",
      "london",
    ],
  },

  {
    country: "Ireland",
    city: "Dublin",
    timezone: "Europe/Dublin",
    flag: "🇮🇪",
    aliases: ["ireland", "dublin"],
  },

  {
    country: "France",
    city: "Paris",
    timezone: "Europe/Paris",
    flag: "🇫🇷",
    aliases: ["france", "paris"],
  },

  {
    country: "Belgium",
    city: "Brussels",
    timezone: "Europe/Brussels",
    flag: "🇧🇪",
    aliases: ["belgium", "brussels"],
  },

  {
    country: "Netherlands",
    city: "Amsterdam",
    timezone: "Europe/Amsterdam",
    flag: "🇳🇱",
    aliases: ["netherlands", "holland", "amsterdam"],
  },

  {
    country: "Luxembourg",
    city: "Luxembourg",
    timezone: "Europe/Luxembourg",
    flag: "🇱🇺",
    aliases: ["luxembourg"],
  },

  {
    country: "Germany",
    city: "Berlin",
    timezone: "Europe/Berlin",
    flag: "🇩🇪",
    aliases: ["germany", "berlin", "de"],
  },

  {
    country: "Switzerland",
    city: "Zurich",
    timezone: "Europe/Zurich",
    flag: "🇨🇭",
    aliases: ["switzerland", "zurich"],
  },

  {
    country: "Austria",
    city: "Vienna",
    timezone: "Europe/Vienna",
    flag: "🇦🇹",
    aliases: ["austria", "vienna"],
  },

  {
    country: "Liechtenstein",
    city: "Vaduz",
    timezone: "Europe/Vaduz",
    flag: "🇱🇮",
    aliases: ["liechtenstein", "vaduz"],
  },

  {
    country: "Monaco",
    city: "Monaco",
    timezone: "Europe/Monaco",
    flag: "🇲🇨",
    aliases: ["monaco"],
  },

  {
    country: "Denmark",
    city: "Copenhagen",
    timezone: "Europe/Copenhagen",
    flag: "🇩🇰",
    aliases: ["denmark", "copenhagen"],
  },

  {
    country: "Norway",
    city: "Oslo",
    timezone: "Europe/Oslo",
    flag: "🇳🇴",
    aliases: ["norway", "oslo"],
  },

  {
    country: "Sweden",
    city: "Stockholm",
    timezone: "Europe/Stockholm",
    flag: "🇸🇪",
    aliases: ["sweden", "stockholm"],
  },

  {
    country: "Finland",
    city: "Helsinki",
    timezone: "Europe/Helsinki",
    flag: "🇫🇮",
    aliases: ["finland", "helsinki"],
  },

  {
    country: "Iceland",
    city: "Reykjavik",
    timezone: "Atlantic/Reykjavik",
    flag: "🇮🇸",
    aliases: ["iceland", "reykjavik"],
  },

  {
    country: "Faroe Islands",
    city: "Tórshavn",
    timezone: "Atlantic/Faroe",
    flag: "🇫🇴",
    aliases: ["faroe", "faroe islands", "torshavn"],
  },

  {
    country: "Portugal",
    city: "Lisbon",
    timezone: "Europe/Lisbon",
    flag: "🇵🇹",
    aliases: ["portugal", "lisbon"],
  },

  {
    country: "Spain",
    city: "Madrid",
    timezone: "Europe/Madrid",
    flag: "🇪🇸",
    aliases: ["spain", "madrid"],
  },

  {
    country: "Andorra",
    city: "Andorra la Vella",
    timezone: "Europe/Andorra",
    flag: "🇦🇩",
    aliases: ["andorra"],
  },

  {
    country: "Gibraltar",
    city: "Gibraltar",
    timezone: "Europe/Gibraltar",
    flag: "🇬🇮",
    aliases: ["gibraltar"],
  },

  {
    country: "Malta",
    city: "Valletta",
    timezone: "Europe/Malta",
    flag: "🇲🇹",
    aliases: ["malta", "valletta"],
  },
  /* =========================================================
   EUROPE (SOUTHERN & EASTERN)
========================================================= */

  {
    country: "Italy",
    city: "Rome",
    timezone: "Europe/Rome",
    flag: "🇮🇹",
    aliases: ["italy", "rome"],
  },

  {
    country: "San Marino",
    city: "San Marino",
    timezone: "Europe/San_Marino",
    flag: "🇸🇲",
    aliases: ["san marino"],
  },

  {
    country: "Vatican City",
    city: "Vatican City",
    timezone: "Europe/Vatican",
    flag: "🇻🇦",
    aliases: ["vatican", "holy see", "vatican city"],
  },

  {
    country: "Slovenia",
    city: "Ljubljana",
    timezone: "Europe/Ljubljana",
    flag: "🇸🇮",
    aliases: ["slovenia", "ljubljana"],
  },

  {
    country: "Croatia",
    city: "Zagreb",
    timezone: "Europe/Zagreb",
    flag: "🇭🇷",
    aliases: ["croatia", "zagreb"],
  },

  {
    country: "Bosnia and Herzegovina",
    city: "Sarajevo",
    timezone: "Europe/Sarajevo",
    flag: "🇧🇦",
    aliases: ["bosnia", "bosnia and herzegovina", "sarajevo"],
  },

  {
    country: "Serbia",
    city: "Belgrade",
    timezone: "Europe/Belgrade",
    flag: "🇷🇸",
    aliases: ["serbia", "belgrade"],
  },

  {
    country: "Montenegro",
    city: "Podgorica",
    timezone: "Europe/Podgorica",
    flag: "🇲🇪",
    aliases: ["montenegro", "podgorica"],
  },

  {
    country: "Kosovo",
    city: "Pristina",
    timezone: "Europe/Belgrade",
    flag: "🇽🇰",
    aliases: ["kosovo", "pristina"],
  },

  {
    country: "North Macedonia",
    city: "Skopje",
    timezone: "Europe/Skopje",
    flag: "🇲🇰",
    aliases: ["north macedonia", "macedonia", "skopje"],
  },

  {
    country: "Albania",
    city: "Tirana",
    timezone: "Europe/Tirane",
    flag: "🇦🇱",
    aliases: ["albania", "tirana"],
  },

  {
    country: "Greece",
    city: "Athens",
    timezone: "Europe/Athens",
    flag: "🇬🇷",
    aliases: ["greece", "athens"],
  },

  {
    country: "Cyprus",
    city: "Nicosia",
    timezone: "Asia/Nicosia",
    flag: "🇨🇾",
    aliases: ["cyprus", "nicosia"],
  },

  {
    country: "Poland",
    city: "Warsaw",
    timezone: "Europe/Warsaw",
    flag: "🇵🇱",
    aliases: ["poland", "warsaw"],
  },

  {
    country: "Czech Republic",
    city: "Prague",
    timezone: "Europe/Prague",
    flag: "🇨🇿",
    aliases: ["czech", "czech republic", "prague"],
  },

  {
    country: "Slovakia",
    city: "Bratislava",
    timezone: "Europe/Bratislava",
    flag: "🇸🇰",
    aliases: ["slovakia", "bratislava"],
  },

  {
    country: "Hungary",
    city: "Budapest",
    timezone: "Europe/Budapest",
    flag: "🇭🇺",
    aliases: ["hungary", "budapest"],
  },

  {
    country: "Romania",
    city: "Bucharest",
    timezone: "Europe/Bucharest",
    flag: "🇷🇴",
    aliases: ["romania", "bucharest"],
  },

  {
    country: "Bulgaria",
    city: "Sofia",
    timezone: "Europe/Sofia",
    flag: "🇧🇬",
    aliases: ["bulgaria", "sofia"],
  },

  {
    country: "Moldova",
    city: "Chișinău",
    timezone: "Europe/Chisinau",
    flag: "🇲🇩",
    aliases: ["moldova", "chisinau"],
  },

  {
    country: "Ukraine",
    city: "Kyiv",
    timezone: "Europe/Kyiv",
    flag: "🇺🇦",
    aliases: ["ukraine", "kyiv", "kiev"],
  },

  {
    country: "Belarus",
    city: "Minsk",
    timezone: "Europe/Minsk",
    flag: "🇧🇾",
    aliases: ["belarus", "minsk"],
  },

  {
    country: "Lithuania",
    city: "Vilnius",
    timezone: "Europe/Vilnius",
    flag: "🇱🇹",
    aliases: ["lithuania", "vilnius"],
  },

  {
    country: "Latvia",
    city: "Riga",
    timezone: "Europe/Riga",
    flag: "🇱🇻",
    aliases: ["latvia", "riga"],
  },

  {
    country: "Estonia",
    city: "Tallinn",
    timezone: "Europe/Tallinn",
    flag: "🇪🇪",
    aliases: ["estonia", "tallinn"],
  },

  {
    country: "Russia",
    city: "Moscow",
    timezone: "Europe/Moscow",
    flag: "🇷🇺",
    aliases: ["russia", "moscow"],
  },

  {
    country: "Russia",
    city: "Kaliningrad",
    timezone: "Europe/Kaliningrad",
    flag: "🇷🇺",
    aliases: ["kaliningrad", "russia"],
  },
  /* =========================================================
   ASIA (SOUTH & EAST ASIA)
========================================================= */

  {
    country: "Bangladesh",
    city: "Dhaka",
    timezone: "Asia/Dhaka",
    flag: "🇧🇩",
    aliases: ["bangladesh", "dhaka", "bd"],
  },

  {
    country: "India",
    city: "New Delhi",
    timezone: "Asia/Kolkata",
    flag: "🇮🇳",
    aliases: ["india", "new delhi", "delhi", "ind", "bharat"],
  },

  {
    country: "Pakistan",
    city: "Islamabad",
    timezone: "Asia/Karachi",
    flag: "🇵🇰",
    aliases: ["pakistan", "islamabad", "karachi", "pk"],
  },

  {
    country: "Nepal",
    city: "Kathmandu",
    timezone: "Asia/Kathmandu",
    flag: "🇳🇵",
    aliases: ["nepal", "kathmandu"],
  },

  {
    country: "Bhutan",
    city: "Thimphu",
    timezone: "Asia/Thimphu",
    flag: "🇧🇹",
    aliases: ["bhutan", "thimphu"],
  },

  {
    country: "Sri Lanka",
    city: "Colombo",
    timezone: "Asia/Colombo",
    flag: "🇱🇰",
    aliases: ["sri lanka", "colombo", "sl"],
  },

  {
    country: "Maldives",
    city: "Malé",
    timezone: "Indian/Maldives",
    flag: "🇲🇻",
    aliases: ["maldives", "male"],
  },

  {
    country: "Afghanistan",
    city: "Kabul",
    timezone: "Asia/Kabul",
    flag: "🇦🇫",
    aliases: ["afghanistan", "kabul"],
  },

  {
    country: "China",
    city: "Beijing",
    timezone: "Asia/Shanghai",
    flag: "🇨🇳",
    aliases: ["china", "beijing", "cn"],
  },

  {
    country: "China",
    city: "Shanghai",
    timezone: "Asia/Shanghai",
    flag: "🇨🇳",
    aliases: ["china", "shanghai"],
  },

  {
    country: "China",
    city: "Hong Kong",
    timezone: "Asia/Hong_Kong",
    flag: "🇭🇰",
    aliases: ["hong kong", "hk"],
  },

  {
    country: "China",
    city: "Macau",
    timezone: "Asia/Macau",
    flag: "🇲🇴",
    aliases: ["macau", "macao"],
  },

  {
    country: "Taiwan",
    city: "Taipei",
    timezone: "Asia/Taipei",
    flag: "🇹🇼",
    aliases: ["taiwan", "taipei"],
  },

  {
    country: "Japan",
    city: "Tokyo",
    timezone: "Asia/Tokyo",
    flag: "🇯🇵",
    aliases: ["japan", "tokyo", "jp"],
  },

  {
    country: "Japan",
    city: "Osaka",
    timezone: "Asia/Tokyo",
    flag: "🇯🇵",
    aliases: ["japan", "osaka"],
  },

  {
    country: "South Korea",
    city: "Seoul",
    timezone: "Asia/Seoul",
    flag: "🇰🇷",
    aliases: ["south korea", "korea", "seoul", "kr"],
  },

  {
    country: "North Korea",
    city: "Pyongyang",
    timezone: "Asia/Pyongyang",
    flag: "🇰🇵",
    aliases: ["north korea", "pyongyang"],
  },

  {
    country: "Mongolia",
    city: "Ulaanbaatar",
    timezone: "Asia/Ulaanbaatar",
    flag: "🇲🇳",
    aliases: ["mongolia", "ulaanbaatar"],
  },

  {
    country: "Kazakhstan",
    city: "Almaty",
    timezone: "Asia/Almaty",
    flag: "🇰🇿",
    aliases: ["kazakhstan", "almaty"],
  },

  {
    country: "Kazakhstan",
    city: "Astana",
    timezone: "Asia/Almaty",
    flag: "🇰🇿",
    aliases: ["astana", "kazakhstan"],
  },
  /* =========================================================
   ASIA (SOUTHEAST & CENTRAL ASIA)
========================================================= */

  {
    country: "Singapore",
    city: "Singapore",
    timezone: "Asia/Singapore",
    flag: "🇸🇬",
    aliases: ["singapore", "sg"],
  },

  {
    country: "Malaysia",
    city: "Kuala Lumpur",
    timezone: "Asia/Kuala_Lumpur",
    flag: "🇲🇾",
    aliases: ["malaysia", "kuala lumpur", "kl", "my"],
  },

  {
    country: "Indonesia",
    city: "Jakarta",
    timezone: "Asia/Jakarta",
    flag: "🇮🇩",
    aliases: ["indonesia", "jakarta", "id"],
  },

  {
    country: "Indonesia",
    city: "Makassar",
    timezone: "Asia/Makassar",
    flag: "🇮🇩",
    aliases: ["makassar", "indonesia"],
  },

  {
    country: "Indonesia",
    city: "Jayapura",
    timezone: "Asia/Jayapura",
    flag: "🇮🇩",
    aliases: ["jayapura", "papua", "indonesia"],
  },

  {
    country: "Thailand",
    city: "Bangkok",
    timezone: "Asia/Bangkok",
    flag: "🇹🇭",
    aliases: ["thailand", "bangkok", "th"],
  },

  {
    country: "Vietnam",
    city: "Ho Chi Minh City",
    timezone: "Asia/Ho_Chi_Minh",
    flag: "🇻🇳",
    aliases: ["vietnam", "ho chi minh", "saigon", "vn"],
  },

  {
    country: "Cambodia",
    city: "Phnom Penh",
    timezone: "Asia/Phnom_Penh",
    flag: "🇰🇭",
    aliases: ["cambodia", "phnom penh"],
  },

  {
    country: "Laos",
    city: "Vientiane",
    timezone: "Asia/Vientiane",
    flag: "🇱🇦",
    aliases: ["laos", "vientiane"],
  },

  {
    country: "Myanmar",
    city: "Yangon",
    timezone: "Asia/Yangon",
    flag: "🇲🇲",
    aliases: ["myanmar", "burma", "yangon"],
  },

  {
    country: "Philippines",
    city: "Manila",
    timezone: "Asia/Manila",
    flag: "🇵🇭",
    aliases: ["philippines", "manila", "ph"],
  },

  {
    country: "Brunei",
    city: "Bandar Seri Begawan",
    timezone: "Asia/Brunei",
    flag: "🇧🇳",
    aliases: ["brunei"],
  },

  {
    country: "Timor-Leste",
    city: "Dili",
    timezone: "Asia/Dili",
    flag: "🇹🇱",
    aliases: ["timor leste", "east timor", "dili"],
  },

  {
    country: "Uzbekistan",
    city: "Tashkent",
    timezone: "Asia/Tashkent",
    flag: "🇺🇿",
    aliases: ["uzbekistan", "tashkent"],
  },

  {
    country: "Turkmenistan",
    city: "Ashgabat",
    timezone: "Asia/Ashgabat",
    flag: "🇹🇲",
    aliases: ["turkmenistan", "ashgabat"],
  },

  {
    country: "Kyrgyzstan",
    city: "Bishkek",
    timezone: "Asia/Bishkek",
    flag: "🇰🇬",
    aliases: ["kyrgyzstan", "bishkek"],
  },

  {
    country: "Tajikistan",
    city: "Dushanbe",
    timezone: "Asia/Dushanbe",
    flag: "🇹🇯",
    aliases: ["tajikistan", "dushanbe"],
  },

  {
    country: "Azerbaijan",
    city: "Baku",
    timezone: "Asia/Baku",
    flag: "🇦🇿",
    aliases: ["azerbaijan", "baku"],
  },

  {
    country: "Armenia",
    city: "Yerevan",
    timezone: "Asia/Yerevan",
    flag: "🇦🇲",
    aliases: ["armenia", "yerevan"],
  },

  {
    country: "Georgia",
    city: "Tbilisi",
    timezone: "Asia/Tbilisi",
    flag: "🇬🇪",
    aliases: ["georgia", "tbilisi"],
  },
  /* =========================================================
   MIDDLE EAST
========================================================= */

  {
    country: "Saudi Arabia",
    city: "Riyadh",
    timezone: "Asia/Riyadh",
    flag: "🇸🇦",
    aliases: ["saudi arabia", "saudi", "riyadh", "ksa"],
  },

  {
    country: "United Arab Emirates",
    city: "Dubai",
    timezone: "Asia/Dubai",
    flag: "🇦🇪",
    aliases: ["uae", "dubai", "united arab emirates"],
  },

  {
    country: "United Arab Emirates",
    city: "Abu Dhabi",
    timezone: "Asia/Dubai",
    flag: "🇦🇪",
    aliases: ["abu dhabi", "uae"],
  },

  {
    country: "Qatar",
    city: "Doha",
    timezone: "Asia/Qatar",
    flag: "🇶🇦",
    aliases: ["qatar", "doha"],
  },

  {
    country: "Bahrain",
    city: "Manama",
    timezone: "Asia/Bahrain",
    flag: "🇧🇭",
    aliases: ["bahrain", "manama"],
  },

  {
    country: "Kuwait",
    city: "Kuwait City",
    timezone: "Asia/Kuwait",
    flag: "🇰🇼",
    aliases: ["kuwait", "kuwait city"],
  },

  {
    country: "Oman",
    city: "Muscat",
    timezone: "Asia/Muscat",
    flag: "🇴🇲",
    aliases: ["oman", "muscat"],
  },

  {
    country: "Yemen",
    city: "Sana'a",
    timezone: "Asia/Aden",
    flag: "🇾🇪",
    aliases: ["yemen", "sanaa", "aden"],
  },

  {
    country: "Iran",
    city: "Tehran",
    timezone: "Asia/Tehran",
    flag: "🇮🇷",
    aliases: ["iran", "tehran"],
  },

  {
    country: "Iraq",
    city: "Baghdad",
    timezone: "Asia/Baghdad",
    flag: "🇮🇶",
    aliases: ["iraq", "baghdad"],
  },

  {
    country: "Israel",
    city: "Jerusalem",
    timezone: "Asia/Jerusalem",
    flag: "🇮🇱",
    aliases: ["israel", "jerusalem"],
  },

  {
    country: "Jordan",
    city: "Amman",
    timezone: "Asia/Amman",
    flag: "🇯🇴",
    aliases: ["jordan", "amman"],
  },

  {
    country: "Lebanon",
    city: "Beirut",
    timezone: "Asia/Beirut",
    flag: "🇱🇧",
    aliases: ["lebanon", "beirut"],
  },

  {
    country: "Syria",
    city: "Damascus",
    timezone: "Asia/Damascus",
    flag: "🇸🇾",
    aliases: ["syria", "damascus"],
  },

  {
    country: "Palestine",
    city: "Gaza",
    timezone: "Asia/Gaza",
    flag: "🇵🇸",
    aliases: ["palestine", "gaza", "west bank"],
  },

  {
    country: "Türkiye",
    city: "Istanbul",
    timezone: "Europe/Istanbul",
    flag: "🇹🇷",
    aliases: ["turkey", "turkiye", "istanbul"],
  },

  /* =========================================================
   AFRICA
========================================================= */

  {
    country: "Egypt",
    city: "Cairo",
    timezone: "Africa/Cairo",
    flag: "🇪🇬",
    aliases: ["egypt", "cairo"],
  },

  {
    country: "South Africa",
    city: "Johannesburg",
    timezone: "Africa/Johannesburg",
    flag: "🇿🇦",
    aliases: ["south africa", "johannesburg", "cape town"],
  },

  {
    country: "Nigeria",
    city: "Lagos",
    timezone: "Africa/Lagos",
    flag: "🇳🇬",
    aliases: ["nigeria", "lagos", "abuja"],
  },

  {
    country: "Kenya",
    city: "Nairobi",
    timezone: "Africa/Nairobi",
    flag: "🇰🇪",
    aliases: ["kenya", "nairobi"],
  },

  {
    country: "Ethiopia",
    city: "Addis Ababa",
    timezone: "Africa/Addis_Ababa",
    flag: "🇪🇹",
    aliases: ["ethiopia", "addis ababa"],
  },

  {
    country: "Morocco",
    city: "Casablanca",
    timezone: "Africa/Casablanca",
    flag: "🇲🇦",
    aliases: ["morocco", "casablanca", "rabat"],
  },

  {
    country: "Algeria",
    city: "Algiers",
    timezone: "Africa/Algiers",
    flag: "🇩🇿",
    aliases: ["algeria", "algiers"],
  },

  {
    country: "Tunisia",
    city: "Tunis",
    timezone: "Africa/Tunis",
    flag: "🇹🇳",
    aliases: ["tunisia", "tunis"],
  },

  {
    country: "Libya",
    city: "Tripoli",
    timezone: "Africa/Tripoli",
    flag: "🇱🇾",
    aliases: ["libya", "tripoli"],
  },

  {
    country: "Sudan",
    city: "Khartoum",
    timezone: "Africa/Khartoum",
    flag: "🇸🇩",
    aliases: ["sudan", "khartoum"],
  },

  {
    country: "Uganda",
    city: "Kampala",
    timezone: "Africa/Kampala",
    flag: "🇺🇬",
    aliases: ["uganda", "kampala"],
  },

  {
    country: "Tanzania",
    city: "Dar es Salaam",
    timezone: "Africa/Dar_es_Salaam",
    flag: "🇹🇿",
    aliases: ["tanzania", "dar es salaam"],
  },

  {
    country: "Ghana",
    city: "Accra",
    timezone: "Africa/Accra",
    flag: "🇬🇭",
    aliases: ["ghana", "accra"],
  },

  {
    country: "Zimbabwe",
    city: "Harare",
    timezone: "Africa/Harare",
    flag: "🇿🇼",
    aliases: ["zimbabwe", "harare"],
  },

  {
    country: "Namibia",
    city: "Windhoek",
    timezone: "Africa/Windhoek",
    flag: "🇳🇦",
    aliases: ["namibia", "windhoek"],
  },

  {
    country: "Botswana",
    city: "Gaborone",
    timezone: "Africa/Gaborone",
    flag: "🇧🇼",
    aliases: ["botswana", "gaborone"],
  },
  /* =========================================================
   OCEANIA
========================================================= */

  {
    country: "Australia",
    city: "Sydney",
    timezone: "Australia/Sydney",
    flag: "🇦🇺",
    aliases: ["australia", "sydney", "au"],
  },

  {
    country: "Australia",
    city: "Melbourne",
    timezone: "Australia/Melbourne",
    flag: "🇦🇺",
    aliases: ["melbourne", "australia"],
  },

  {
    country: "Australia",
    city: "Brisbane",
    timezone: "Australia/Brisbane",
    flag: "🇦🇺",
    aliases: ["brisbane", "australia"],
  },

  {
    country: "Australia",
    city: "Adelaide",
    timezone: "Australia/Adelaide",
    flag: "🇦🇺",
    aliases: ["adelaide", "australia"],
  },

  {
    country: "Australia",
    city: "Perth",
    timezone: "Australia/Perth",
    flag: "🇦🇺",
    aliases: ["perth", "australia"],
  },

  {
    country: "Australia",
    city: "Darwin",
    timezone: "Australia/Darwin",
    flag: "🇦🇺",
    aliases: ["darwin", "australia"],
  },

  {
    country: "New Zealand",
    city: "Auckland",
    timezone: "Pacific/Auckland",
    flag: "🇳🇿",
    aliases: ["new zealand", "nz", "auckland"],
  },

  {
    country: "Papua New Guinea",
    city: "Port Moresby",
    timezone: "Pacific/Port_Moresby",
    flag: "🇵🇬",
    aliases: ["papua new guinea", "png", "port moresby"],
  },

  {
    country: "Fiji",
    city: "Suva",
    timezone: "Pacific/Fiji",
    flag: "🇫🇯",
    aliases: ["fiji", "suva"],
  },

  {
    country: "Samoa",
    city: "Apia",
    timezone: "Pacific/Apia",
    flag: "🇼🇸",
    aliases: ["samoa", "apia"],
  },

  {
    country: "Tonga",
    city: "Nukuʻalofa",
    timezone: "Pacific/Tongatapu",
    flag: "🇹🇴",
    aliases: ["tonga", "nukualofa"],
  },

  {
    country: "Vanuatu",
    city: "Port Vila",
    timezone: "Pacific/Efate",
    flag: "🇻🇺",
    aliases: ["vanuatu", "port vila"],
  },

  {
    country: "Solomon Islands",
    city: "Honiara",
    timezone: "Pacific/Guadalcanal",
    flag: "🇸🇧",
    aliases: ["solomon islands", "honiara"],
  },

  {
    country: "Micronesia",
    city: "Palikir",
    timezone: "Pacific/Pohnpei",
    flag: "🇫🇲",
    aliases: ["micronesia", "palikir"],
  },

  {
    country: "Palau",
    city: "Ngerulmud",
    timezone: "Pacific/Palau",
    flag: "🇵🇼",
    aliases: ["palau", "ngerulmud"],
  },

  {
    country: "Marshall Islands",
    city: "Majuro",
    timezone: "Pacific/Majuro",
    flag: "🇲🇭",
    aliases: ["marshall islands", "majuro"],
  },

  {
    country: "Kiribati",
    city: "Tarawa",
    timezone: "Pacific/Tarawa",
    flag: "🇰🇮",
    aliases: ["kiribati", "tarawa"],
  },

  {
    country: "Nauru",
    city: "Yaren",
    timezone: "Pacific/Nauru",
    flag: "🇳🇷",
    aliases: ["nauru", "yaren"],
  },

  {
    country: "Tuvalu",
    city: "Funafuti",
    timezone: "Pacific/Funafuti",
    flag: "🇹🇻",
    aliases: ["tuvalu", "funafuti"],
  },
];
