// ---------- COUNTRIES (expanded with flag codes) ----------
const countries = [
  // =========================================================
  // NORTH AMERICA
  // =========================================================
  {
    country: "United States",
    city: "New York",
    timezone: "America/New_York",
    flag: "us",
    aliases: ["usa", "america", "united states", "new york", "ny", "us"],
  },
  {
    country: "United States",
    city: "Chicago",
    timezone: "America/Chicago",
    flag: "us",
    aliases: ["usa", "america", "chicago", "illinois"],
  },
  {
    country: "United States",
    city: "Denver",
    timezone: "America/Denver",
    flag: "us",
    aliases: ["usa", "america", "denver", "colorado"],
  },
  {
    country: "United States",
    city: "Los Angeles",
    timezone: "America/Los_Angeles",
    flag: "us",
    aliases: ["usa", "america", "los angeles", "la", "california"],
  },
  {
    country: "United States",
    city: "Anchorage",
    timezone: "America/Anchorage",
    flag: "us",
    aliases: ["alaska", "anchorage", "usa"],
  },
  {
    country: "United States",
    city: "Honolulu",
    timezone: "Pacific/Honolulu",
    flag: "us",
    aliases: ["hawaii", "honolulu", "usa"],
  },
  {
    country: "Canada",
    city: "Toronto",
    timezone: "America/Toronto",
    flag: "ca",
    aliases: ["canada", "toronto", "ca"],
  },
  {
    country: "Canada",
    city: "Vancouver",
    timezone: "America/Vancouver",
    flag: "ca",
    aliases: ["canada", "vancouver"],
  },
  {
    country: "Canada",
    city: "Edmonton",
    timezone: "America/Edmonton",
    flag: "ca",
    aliases: ["canada", "edmonton"],
  },
  {
    country: "Canada",
    city: "Halifax",
    timezone: "America/Halifax",
    flag: "ca",
    aliases: ["canada", "halifax"],
  },
  {
    country: "Mexico",
    city: "Mexico City",
    timezone: "America/Mexico_City",
    flag: "mx",
    aliases: ["mexico", "mexico city", "mx"],
  },
  {
    country: "Mexico",
    city: "Tijuana",
    timezone: "America/Tijuana",
    flag: "mx",
    aliases: ["mexico", "tijuana"],
  },
  {
    country: "Greenland",
    city: "Nuuk",
    timezone: "America/Nuuk",
    flag: "gl",
    aliases: ["greenland", "nuuk"],
  },

  // =========================================================
  // CENTRAL AMERICA
  // =========================================================
  {
    country: "Guatemala",
    city: "Guatemala City",
    timezone: "America/Guatemala",
    flag: "gt",
    aliases: ["guatemala"],
  },
  {
    country: "Belize",
    city: "Belize City",
    timezone: "America/Belize",
    flag: "bz",
    aliases: ["belize"],
  },
  {
    country: "Honduras",
    city: "Tegucigalpa",
    timezone: "America/Tegucigalpa",
    flag: "hn",
    aliases: ["honduras"],
  },
  {
    country: "El Salvador",
    city: "San Salvador",
    timezone: "America/El_Salvador",
    flag: "sv",
    aliases: ["el salvador"],
  },
  {
    country: "Nicaragua",
    city: "Managua",
    timezone: "America/Managua",
    flag: "ni",
    aliases: ["nicaragua"],
  },
  {
    country: "Costa Rica",
    city: "San Jose",
    timezone: "America/Costa_Rica",
    flag: "cr",
    aliases: ["costa rica"],
  },
  {
    country: "Panama",
    city: "Panama City",
    timezone: "America/Panama",
    flag: "pa",
    aliases: ["panama"],
  },

  // =========================================================
  // CARIBBEAN
  // =========================================================
  {
    country: "Bahamas",
    city: "Nassau",
    timezone: "America/Nassau",
    flag: "bs",
    aliases: ["bahamas"],
  },
  {
    country: "Cuba",
    city: "Havana",
    timezone: "America/Havana",
    flag: "cu",
    aliases: ["cuba"],
  },
  {
    country: "Jamaica",
    city: "Kingston",
    timezone: "America/Jamaica",
    flag: "jm",
    aliases: ["jamaica"],
  },
  {
    country: "Haiti",
    city: "Port-au-Prince",
    timezone: "America/Port-au-Prince",
    flag: "ht",
    aliases: ["haiti"],
  },
  {
    country: "Dominican Republic",
    city: "Santo Domingo",
    timezone: "America/Santo_Domingo",
    flag: "do",
    aliases: ["dominican republic", "dr"],
  },
  {
    country: "Puerto Rico",
    city: "San Juan",
    timezone: "America/Puerto_Rico",
    flag: "pr",
    aliases: ["puerto rico"],
  },
  {
    country: "Trinidad and Tobago",
    city: "Port of Spain",
    timezone: "America/Port_of_Spain",
    flag: "tt",
    aliases: ["trinidad", "tobago"],
  },
  {
    country: "Barbados",
    city: "Bridgetown",
    timezone: "America/Barbados",
    flag: "bb",
    aliases: ["barbados"],
  },
  {
    country: "St. Lucia",
    city: "Castries",
    timezone: "America/St_Lucia",
    flag: "lc",
    aliases: ["st lucia", "saint lucia"],
  },
  {
    country: "Grenada",
    city: "St. George's",
    timezone: "America/Grenada",
    flag: "gd",
    aliases: ["grenada"],
  },
  {
    country: "St. Vincent",
    city: "Kingstown",
    timezone: "America/St_Vincent",
    flag: "vc",
    aliases: ["st vincent", "saint vincent"],
  },
  {
    country: "Antigua and Barbuda",
    city: "St. John's",
    timezone: "America/Antigua",
    flag: "ag",
    aliases: ["antigua", "barbuda"],
  },
  {
    country: "Dominica",
    city: "Roseau",
    timezone: "America/Dominica",
    flag: "dm",
    aliases: ["dominica"],
  },
  {
    country: "St. Kitts and Nevis",
    city: "Basseterre",
    timezone: "America/St_Kitts",
    flag: "kn",
    aliases: ["st kitts", "saint kitts"],
  },

  // =========================================================
  // SOUTH AMERICA
  // =========================================================
  {
    country: "Brazil",
    city: "São Paulo",
    timezone: "America/Sao_Paulo",
    flag: "br",
    aliases: ["brazil", "sao paulo", "br"],
  },
  {
    country: "Brazil",
    city: "Manaus",
    timezone: "America/Manaus",
    flag: "br",
    aliases: ["brazil", "manaus"],
  },
  {
    country: "Brazil",
    city: "Rio de Janeiro",
    timezone: "America/Sao_Paulo",
    flag: "br",
    aliases: ["brazil", "rio", "rio de janeiro"],
  },
  {
    country: "Argentina",
    city: "Buenos Aires",
    timezone: "America/Argentina/Buenos_Aires",
    flag: "ar",
    aliases: ["argentina"],
  },
  {
    country: "Chile",
    city: "Santiago",
    timezone: "America/Santiago",
    flag: "cl",
    aliases: ["chile"],
  },
  {
    country: "Peru",
    city: "Lima",
    timezone: "America/Lima",
    flag: "pe",
    aliases: ["peru"],
  },
  {
    country: "Colombia",
    city: "Bogotá",
    timezone: "America/Bogota",
    flag: "co",
    aliases: ["colombia"],
  },
  {
    country: "Venezuela",
    city: "Caracas",
    timezone: "America/Caracas",
    flag: "ve",
    aliases: ["venezuela"],
  },
  {
    country: "Ecuador",
    city: "Quito",
    timezone: "America/Guayaquil",
    flag: "ec",
    aliases: ["ecuador"],
  },
  {
    country: "Bolivia",
    city: "La Paz",
    timezone: "America/La_Paz",
    flag: "bo",
    aliases: ["bolivia"],
  },
  {
    country: "Paraguay",
    city: "Asunción",
    timezone: "America/Asuncion",
    flag: "py",
    aliases: ["paraguay"],
  },
  {
    country: "Uruguay",
    city: "Montevideo",
    timezone: "America/Montevideo",
    flag: "uy",
    aliases: ["uruguay"],
  },
  {
    country: "Guyana",
    city: "Georgetown",
    timezone: "America/Guyana",
    flag: "gy",
    aliases: ["guyana"],
  },
  {
    country: "Suriname",
    city: "Paramaribo",
    timezone: "America/Paramaribo",
    flag: "sr",
    aliases: ["suriname"],
  },
  {
    country: "French Guiana",
    city: "Cayenne",
    timezone: "America/Cayenne",
    flag: "gf",
    aliases: ["french guiana"],
  },

  // =========================================================
  // EUROPE
  // =========================================================
  {
    country: "United Kingdom",
    city: "London",
    timezone: "Europe/London",
    flag: "gb",
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
    flag: "ie",
    aliases: ["ireland", "dublin"],
  },
  {
    country: "France",
    city: "Paris",
    timezone: "Europe/Paris",
    flag: "fr",
    aliases: ["france", "paris"],
  },
  {
    country: "Belgium",
    city: "Brussels",
    timezone: "Europe/Brussels",
    flag: "be",
    aliases: ["belgium", "brussels"],
  },
  {
    country: "Netherlands",
    city: "Amsterdam",
    timezone: "Europe/Amsterdam",
    flag: "nl",
    aliases: ["netherlands", "holland", "amsterdam"],
  },
  {
    country: "Luxembourg",
    city: "Luxembourg",
    timezone: "Europe/Luxembourg",
    flag: "lu",
    aliases: ["luxembourg"],
  },
  {
    country: "Germany",
    city: "Berlin",
    timezone: "Europe/Berlin",
    flag: "de",
    aliases: ["germany", "berlin", "de"],
  },
  {
    country: "Switzerland",
    city: "Zurich",
    timezone: "Europe/Zurich",
    flag: "ch",
    aliases: ["switzerland", "zurich"],
  },
  {
    country: "Austria",
    city: "Vienna",
    timezone: "Europe/Vienna",
    flag: "at",
    aliases: ["austria", "vienna"],
  },
  {
    country: "Liechtenstein",
    city: "Vaduz",
    timezone: "Europe/Vaduz",
    flag: "li",
    aliases: ["liechtenstein", "vaduz"],
  },
  {
    country: "Monaco",
    city: "Monaco",
    timezone: "Europe/Monaco",
    flag: "mc",
    aliases: ["monaco"],
  },
  {
    country: "Denmark",
    city: "Copenhagen",
    timezone: "Europe/Copenhagen",
    flag: "dk",
    aliases: ["denmark", "copenhagen"],
  },
  {
    country: "Norway",
    city: "Oslo",
    timezone: "Europe/Oslo",
    flag: "no",
    aliases: ["norway", "oslo"],
  },
  {
    country: "Sweden",
    city: "Stockholm",
    timezone: "Europe/Stockholm",
    flag: "se",
    aliases: ["sweden", "stockholm"],
  },
  {
    country: "Finland",
    city: "Helsinki",
    timezone: "Europe/Helsinki",
    flag: "fi",
    aliases: ["finland", "helsinki"],
  },
  {
    country: "Iceland",
    city: "Reykjavik",
    timezone: "Atlantic/Reykjavik",
    flag: "is",
    aliases: ["iceland", "reykjavik"],
  },
  {
    country: "Faroe Islands",
    city: "Tórshavn",
    timezone: "Atlantic/Faroe",
    flag: "fo",
    aliases: ["faroe", "faroe islands", "torshavn"],
  },
  {
    country: "Portugal",
    city: "Lisbon",
    timezone: "Europe/Lisbon",
    flag: "pt",
    aliases: ["portugal", "lisbon"],
  },
  {
    country: "Spain",
    city: "Madrid",
    timezone: "Europe/Madrid",
    flag: "es",
    aliases: ["spain", "madrid"],
  },
  {
    country: "Andorra",
    city: "Andorra la Vella",
    timezone: "Europe/Andorra",
    flag: "ad",
    aliases: ["andorra"],
  },
  {
    country: "Gibraltar",
    city: "Gibraltar",
    timezone: "Europe/Gibraltar",
    flag: "gi",
    aliases: ["gibraltar"],
  },
  {
    country: "Malta",
    city: "Valletta",
    timezone: "Europe/Malta",
    flag: "mt",
    aliases: ["malta", "valletta"],
  },
  {
    country: "Italy",
    city: "Rome",
    timezone: "Europe/Rome",
    flag: "it",
    aliases: ["italy", "rome"],
  },
  {
    country: "San Marino",
    city: "San Marino",
    timezone: "Europe/San_Marino",
    flag: "sm",
    aliases: ["san marino"],
  },
  {
    country: "Vatican City",
    city: "Vatican City",
    timezone: "Europe/Vatican",
    flag: "va",
    aliases: ["vatican", "holy see", "vatican city"],
  },
  {
    country: "Slovenia",
    city: "Ljubljana",
    timezone: "Europe/Ljubljana",
    flag: "si",
    aliases: ["slovenia", "ljubljana"],
  },
  {
    country: "Croatia",
    city: "Zagreb",
    timezone: "Europe/Zagreb",
    flag: "hr",
    aliases: ["croatia", "zagreb"],
  },
  {
    country: "Bosnia and Herzegovina",
    city: "Sarajevo",
    timezone: "Europe/Sarajevo",
    flag: "ba",
    aliases: ["bosnia", "bosnia and herzegovina", "sarajevo"],
  },
  {
    country: "Serbia",
    city: "Belgrade",
    timezone: "Europe/Belgrade",
    flag: "rs",
    aliases: ["serbia", "belgrade"],
  },
  {
    country: "Montenegro",
    city: "Podgorica",
    timezone: "Europe/Podgorica",
    flag: "me",
    aliases: ["montenegro", "podgorica"],
  },
  {
    country: "Kosovo",
    city: "Pristina",
    timezone: "Europe/Belgrade",
    flag: "xk",
    aliases: ["kosovo", "pristina"],
  },
  {
    country: "North Macedonia",
    city: "Skopje",
    timezone: "Europe/Skopje",
    flag: "mk",
    aliases: ["north macedonia", "macedonia", "skopje"],
  },
  {
    country: "Albania",
    city: "Tirana",
    timezone: "Europe/Tirane",
    flag: "al",
    aliases: ["albania", "tirana"],
  },
  {
    country: "Greece",
    city: "Athens",
    timezone: "Europe/Athens",
    flag: "gr",
    aliases: ["greece", "athens"],
  },
  {
    country: "Cyprus",
    city: "Nicosia",
    timezone: "Asia/Nicosia",
    flag: "cy",
    aliases: ["cyprus", "nicosia"],
  },
  {
    country: "Poland",
    city: "Warsaw",
    timezone: "Europe/Warsaw",
    flag: "pl",
    aliases: ["poland", "warsaw"],
  },
  {
    country: "Czech Republic",
    city: "Prague",
    timezone: "Europe/Prague",
    flag: "cz",
    aliases: ["czech", "czech republic", "prague"],
  },
  {
    country: "Slovakia",
    city: "Bratislava",
    timezone: "Europe/Bratislava",
    flag: "sk",
    aliases: ["slovakia", "bratislava"],
  },
  {
    country: "Hungary",
    city: "Budapest",
    timezone: "Europe/Budapest",
    flag: "hu",
    aliases: ["hungary", "budapest"],
  },
  {
    country: "Romania",
    city: "Bucharest",
    timezone: "Europe/Bucharest",
    flag: "ro",
    aliases: ["romania", "bucharest"],
  },
  {
    country: "Bulgaria",
    city: "Sofia",
    timezone: "Europe/Sofia",
    flag: "bg",
    aliases: ["bulgaria", "sofia"],
  },
  {
    country: "Moldova",
    city: "Chișinău",
    timezone: "Europe/Chisinau",
    flag: "md",
    aliases: ["moldova", "chisinau"],
  },
  {
    country: "Ukraine",
    city: "Kyiv",
    timezone: "Europe/Kyiv",
    flag: "ua",
    aliases: ["ukraine", "kyiv", "kiev"],
  },
  {
    country: "Belarus",
    city: "Minsk",
    timezone: "Europe/Minsk",
    flag: "by",
    aliases: ["belarus", "minsk"],
  },
  {
    country: "Lithuania",
    city: "Vilnius",
    timezone: "Europe/Vilnius",
    flag: "lt",
    aliases: ["lithuania", "vilnius"],
  },
  {
    country: "Latvia",
    city: "Riga",
    timezone: "Europe/Riga",
    flag: "lv",
    aliases: ["latvia", "riga"],
  },
  {
    country: "Estonia",
    city: "Tallinn",
    timezone: "Europe/Tallinn",
    flag: "ee",
    aliases: ["estonia", "tallinn"],
  },

  // =========================================================
  // RUSSIA
  // =========================================================
  {
    country: "Russia",
    city: "Moscow",
    timezone: "Europe/Moscow",
    flag: "ru",
    aliases: ["russia", "moscow"],
  },
  {
    country: "Russia",
    city: "Kaliningrad",
    timezone: "Europe/Kaliningrad",
    flag: "ru",
    aliases: ["kaliningrad", "russia"],
  },
  {
    country: "Russia",
    city: "St. Petersburg",
    timezone: "Europe/Moscow",
    flag: "ru",
    aliases: ["st petersburg", "russia"],
  },
  {
    country: "Russia",
    city: "Novosibirsk",
    timezone: "Asia/Novosibirsk",
    flag: "ru",
    aliases: ["novosibirsk", "russia"],
  },
  {
    country: "Russia",
    city: "Vladivostok",
    timezone: "Asia/Vladivostok",
    flag: "ru",
    aliases: ["vladivostok", "russia"],
  },

  // =========================================================
  // ASIA
  // =========================================================
  {
    country: "Bangladesh",
    city: "Dhaka",
    timezone: "Asia/Dhaka",
    flag: "bd",
    aliases: ["bangladesh", "dhaka", "bd"],
  },
  {
    country: "India",
    city: "New Delhi",
    timezone: "Asia/Kolkata",
    flag: "in",
    aliases: ["india", "new delhi", "delhi", "ind", "bharat"],
  },
  {
    country: "India",
    city: "Mumbai",
    timezone: "Asia/Kolkata",
    flag: "in",
    aliases: ["india", "mumbai", "bombay"],
  },
  {
    country: "India",
    city: "Bangalore",
    timezone: "Asia/Kolkata",
    flag: "in",
    aliases: ["india", "bangalore", "bengaluru"],
  },
  {
    country: "Pakistan",
    city: "Islamabad",
    timezone: "Asia/Karachi",
    flag: "pk",
    aliases: ["pakistan", "islamabad", "karachi", "pk"],
  },
  {
    country: "Pakistan",
    city: "Karachi",
    timezone: "Asia/Karachi",
    flag: "pk",
    aliases: ["pakistan", "karachi"],
  },
  {
    country: "Pakistan",
    city: "Lahore",
    timezone: "Asia/Karachi",
    flag: "pk",
    aliases: ["pakistan", "lahore"],
  },
  {
    country: "Nepal",
    city: "Kathmandu",
    timezone: "Asia/Kathmandu",
    flag: "np",
    aliases: ["nepal", "kathmandu"],
  },
  {
    country: "Bhutan",
    city: "Thimphu",
    timezone: "Asia/Thimphu",
    flag: "bt",
    aliases: ["bhutan", "thimphu"],
  },
  {
    country: "Sri Lanka",
    city: "Colombo",
    timezone: "Asia/Colombo",
    flag: "lk",
    aliases: ["sri lanka", "colombo", "sl"],
  },
  {
    country: "Maldives",
    city: "Malé",
    timezone: "Indian/Maldives",
    flag: "mv",
    aliases: ["maldives", "male"],
  },
  {
    country: "Afghanistan",
    city: "Kabul",
    timezone: "Asia/Kabul",
    flag: "af",
    aliases: ["afghanistan", "kabul"],
  },
  {
    country: "China",
    city: "Beijing",
    timezone: "Asia/Shanghai",
    flag: "cn",
    aliases: ["china", "beijing", "cn"],
  },
  {
    country: "China",
    city: "Shanghai",
    timezone: "Asia/Shanghai",
    flag: "cn",
    aliases: ["china", "shanghai"],
  },
  {
    country: "China",
    city: "Guangzhou",
    timezone: "Asia/Shanghai",
    flag: "cn",
    aliases: ["china", "guangzhou", "canton"],
  },
  {
    country: "China",
    city: "Shenzhen",
    timezone: "Asia/Shanghai",
    flag: "cn",
    aliases: ["china", "shenzhen"],
  },
  {
    country: "China",
    city: "Hong Kong",
    timezone: "Asia/Hong_Kong",
    flag: "hk",
    aliases: ["hong kong", "hk"],
  },
  {
    country: "China",
    city: "Macau",
    timezone: "Asia/Macau",
    flag: "mo",
    aliases: ["macau", "macao"],
  },
  {
    country: "Taiwan",
    city: "Taipei",
    timezone: "Asia/Taipei",
    flag: "tw",
    aliases: ["taiwan", "taipei"],
  },
  {
    country: "Japan",
    city: "Tokyo",
    timezone: "Asia/Tokyo",
    flag: "jp",
    aliases: ["japan", "tokyo", "jp"],
  },
  {
    country: "Japan",
    city: "Osaka",
    timezone: "Asia/Tokyo",
    flag: "jp",
    aliases: ["japan", "osaka"],
  },
  {
    country: "South Korea",
    city: "Seoul",
    timezone: "Asia/Seoul",
    flag: "kr",
    aliases: ["south korea", "korea", "seoul", "kr"],
  },
  {
    country: "North Korea",
    city: "Pyongyang",
    timezone: "Asia/Pyongyang",
    flag: "kp",
    aliases: ["north korea", "pyongyang"],
  },
  {
    country: "Mongolia",
    city: "Ulaanbaatar",
    timezone: "Asia/Ulaanbaatar",
    flag: "mn",
    aliases: ["mongolia", "ulaanbaatar"],
  },

  // =========================================================
  // CENTRAL ASIA
  // =========================================================
  {
    country: "Kazakhstan",
    city: "Almaty",
    timezone: "Asia/Almaty",
    flag: "kz",
    aliases: ["kazakhstan", "almaty"],
  },
  {
    country: "Kazakhstan",
    city: "Astana",
    timezone: "Asia/Almaty",
    flag: "kz",
    aliases: ["astana", "kazakhstan"],
  },
  {
    country: "Uzbekistan",
    city: "Tashkent",
    timezone: "Asia/Tashkent",
    flag: "uz",
    aliases: ["uzbekistan", "tashkent"],
  },
  {
    country: "Turkmenistan",
    city: "Ashgabat",
    timezone: "Asia/Ashgabat",
    flag: "tm",
    aliases: ["turkmenistan", "ashgabat"],
  },
  {
    country: "Kyrgyzstan",
    city: "Bishkek",
    timezone: "Asia/Bishkek",
    flag: "kg",
    aliases: ["kyrgyzstan", "bishkek"],
  },
  {
    country: "Tajikistan",
    city: "Dushanbe",
    timezone: "Asia/Dushanbe",
    flag: "tj",
    aliases: ["tajikistan", "dushanbe"],
  },

  // =========================================================
  // SOUTHEAST ASIA
  // =========================================================
  {
    country: "Singapore",
    city: "Singapore",
    timezone: "Asia/Singapore",
    flag: "sg",
    aliases: ["singapore", "sg"],
  },
  {
    country: "Malaysia",
    city: "Kuala Lumpur",
    timezone: "Asia/Kuala_Lumpur",
    flag: "my",
    aliases: ["malaysia", "kuala lumpur", "kl", "my"],
  },
  {
    country: "Indonesia",
    city: "Jakarta",
    timezone: "Asia/Jakarta",
    flag: "id",
    aliases: ["indonesia", "jakarta", "id"],
  },
  {
    country: "Indonesia",
    city: "Makassar",
    timezone: "Asia/Makassar",
    flag: "id",
    aliases: ["makassar", "indonesia"],
  },
  {
    country: "Indonesia",
    city: "Jayapura",
    timezone: "Asia/Jayapura",
    flag: "id",
    aliases: ["jayapura", "papua", "indonesia"],
  },
  {
    country: "Thailand",
    city: "Bangkok",
    timezone: "Asia/Bangkok",
    flag: "th",
    aliases: ["thailand", "bangkok", "th"],
  },
  {
    country: "Vietnam",
    city: "Ho Chi Minh City",
    timezone: "Asia/Ho_Chi_Minh",
    flag: "vn",
    aliases: ["vietnam", "ho chi minh", "saigon", "vn"],
  },
  {
    country: "Cambodia",
    city: "Phnom Penh",
    timezone: "Asia/Phnom_Penh",
    flag: "kh",
    aliases: ["cambodia", "phnom penh"],
  },
  {
    country: "Laos",
    city: "Vientiane",
    timezone: "Asia/Vientiane",
    flag: "la",
    aliases: ["laos", "vientiane"],
  },
  {
    country: "Myanmar",
    city: "Yangon",
    timezone: "Asia/Yangon",
    flag: "mm",
    aliases: ["myanmar", "burma", "yangon"],
  },
  {
    country: "Philippines",
    city: "Manila",
    timezone: "Asia/Manila",
    flag: "ph",
    aliases: ["philippines", "manila", "ph"],
  },
  {
    country: "Brunei",
    city: "Bandar Seri Begawan",
    timezone: "Asia/Brunei",
    flag: "bn",
    aliases: ["brunei"],
  },
  {
    country: "Timor-Leste",
    city: "Dili",
    timezone: "Asia/Dili",
    flag: "tl",
    aliases: ["timor leste", "east timor", "dili"],
  },

  // =========================================================
  // MIDDLE EAST
  // =========================================================
  {
    country: "Saudi Arabia",
    city: "Riyadh",
    timezone: "Asia/Riyadh",
    flag: "sa",
    aliases: ["saudi arabia", "saudi", "riyadh", "ksa"],
  },
  {
    country: "United Arab Emirates",
    city: "Dubai",
    timezone: "Asia/Dubai",
    flag: "ae",
    aliases: ["uae", "dubai", "united arab emirates"],
  },
  {
    country: "United Arab Emirates",
    city: "Abu Dhabi",
    timezone: "Asia/Dubai",
    flag: "ae",
    aliases: ["abu dhabi", "uae"],
  },
  {
    country: "Qatar",
    city: "Doha",
    timezone: "Asia/Qatar",
    flag: "qa",
    aliases: ["qatar", "doha"],
  },
  {
    country: "Bahrain",
    city: "Manama",
    timezone: "Asia/Bahrain",
    flag: "bh",
    aliases: ["bahrain", "manama"],
  },
  {
    country: "Kuwait",
    city: "Kuwait City",
    timezone: "Asia/Kuwait",
    flag: "kw",
    aliases: ["kuwait", "kuwait city"],
  },
  {
    country: "Oman",
    city: "Muscat",
    timezone: "Asia/Muscat",
    flag: "om",
    aliases: ["oman", "muscat"],
  },
  {
    country: "Yemen",
    city: "Sana'a",
    timezone: "Asia/Aden",
    flag: "ye",
    aliases: ["yemen", "sanaa", "aden"],
  },
  {
    country: "Iran",
    city: "Tehran",
    timezone: "Asia/Tehran",
    flag: "ir",
    aliases: ["iran", "tehran"],
  },
  {
    country: "Iraq",
    city: "Baghdad",
    timezone: "Asia/Baghdad",
    flag: "iq",
    aliases: ["iraq", "baghdad"],
  },
  {
    country: "Israel",
    city: "Jerusalem",
    timezone: "Asia/Jerusalem",
    flag: "il",
    aliases: ["israel", "jerusalem"],
  },
  {
    country: "Jordan",
    city: "Amman",
    timezone: "Asia/Amman",
    flag: "jo",
    aliases: ["jordan", "amman"],
  },
  {
    country: "Lebanon",
    city: "Beirut",
    timezone: "Asia/Beirut",
    flag: "lb",
    aliases: ["lebanon", "beirut"],
  },
  {
    country: "Syria",
    city: "Damascus",
    timezone: "Asia/Damascus",
    flag: "sy",
    aliases: ["syria", "damascus"],
  },
  {
    country: "Palestine",
    city: "Gaza",
    timezone: "Asia/Gaza",
    flag: "ps",
    aliases: ["palestine", "gaza", "west bank"],
  },
  {
    country: "Türkiye",
    city: "Istanbul",
    timezone: "Europe/Istanbul",
    flag: "tr",
    aliases: ["turkey", "turkiye", "istanbul"],
  },
  {
    country: "Türkiye",
    city: "Ankara",
    timezone: "Europe/Istanbul",
    flag: "tr",
    aliases: ["turkey", "ankara"],
  },

  // =========================================================
  // AFRICA
  // =========================================================
  {
    country: "Egypt",
    city: "Cairo",
    timezone: "Africa/Cairo",
    flag: "eg",
    aliases: ["egypt", "cairo"],
  },
  {
    country: "South Africa",
    city: "Johannesburg",
    timezone: "Africa/Johannesburg",
    flag: "za",
    aliases: ["south africa", "johannesburg", "cape town"],
  },
  {
    country: "South Africa",
    city: "Cape Town",
    timezone: "Africa/Johannesburg",
    flag: "za",
    aliases: ["south africa", "cape town"],
  },
  {
    country: "Nigeria",
    city: "Lagos",
    timezone: "Africa/Lagos",
    flag: "ng",
    aliases: ["nigeria", "lagos", "abuja"],
  },
  {
    country: "Nigeria",
    city: "Abuja",
    timezone: "Africa/Lagos",
    flag: "ng",
    aliases: ["nigeria", "abuja"],
  },
  {
    country: "Kenya",
    city: "Nairobi",
    timezone: "Africa/Nairobi",
    flag: "ke",
    aliases: ["kenya", "nairobi"],
  },
  {
    country: "Ethiopia",
    city: "Addis Ababa",
    timezone: "Africa/Addis_Ababa",
    flag: "et",
    aliases: ["ethiopia", "addis ababa"],
  },
  {
    country: "Morocco",
    city: "Casablanca",
    timezone: "Africa/Casablanca",
    flag: "ma",
    aliases: ["morocco", "casablanca", "rabat"],
  },
  {
    country: "Algeria",
    city: "Algiers",
    timezone: "Africa/Algiers",
    flag: "dz",
    aliases: ["algeria", "algiers"],
  },
  {
    country: "Tunisia",
    city: "Tunis",
    timezone: "Africa/Tunis",
    flag: "tn",
    aliases: ["tunisia", "tunis"],
  },
  {
    country: "Libya",
    city: "Tripoli",
    timezone: "Africa/Tripoli",
    flag: "ly",
    aliases: ["libya", "tripoli"],
  },
  {
    country: "Sudan",
    city: "Khartoum",
    timezone: "Africa/Khartoum",
    flag: "sd",
    aliases: ["sudan", "khartoum"],
  },
  {
    country: "Uganda",
    city: "Kampala",
    timezone: "Africa/Kampala",
    flag: "ug",
    aliases: ["uganda", "kampala"],
  },
  {
    country: "Tanzania",
    city: "Dar es Salaam",
    timezone: "Africa/Dar_es_Salaam",
    flag: "tz",
    aliases: ["tanzania", "dar es salaam"],
  },
  {
    country: "Ghana",
    city: "Accra",
    timezone: "Africa/Accra",
    flag: "gh",
    aliases: ["ghana", "accra"],
  },
  {
    country: "Zimbabwe",
    city: "Harare",
    timezone: "Africa/Harare",
    flag: "zw",
    aliases: ["zimbabwe", "harare"],
  },
  {
    country: "Namibia",
    city: "Windhoek",
    timezone: "Africa/Windhoek",
    flag: "na",
    aliases: ["namibia", "windhoek"],
  },
  {
    country: "Botswana",
    city: "Gaborone",
    timezone: "Africa/Gaborone",
    flag: "bw",
    aliases: ["botswana", "gaborone"],
  },
  {
    country: "Cameroon",
    city: "Yaoundé",
    timezone: "Africa/Douala",
    flag: "cm",
    aliases: ["cameroon", "yaounde"],
  },
  {
    country: "Ivory Coast",
    city: "Abidjan",
    timezone: "Africa/Abidjan",
    flag: "ci",
    aliases: ["ivory coast", "cote d'ivoire", "abidjan"],
  },
  {
    country: "Senegal",
    city: "Dakar",
    timezone: "Africa/Dakar",
    flag: "sn",
    aliases: ["senegal", "dakar"],
  },
  {
    country: "Mali",
    city: "Bamako",
    timezone: "Africa/Bamako",
    flag: "ml",
    aliases: ["mali", "bamako"],
  },
  {
    country: "Burkina Faso",
    city: "Ouagadougou",
    timezone: "Africa/Ouagadougou",
    flag: "bf",
    aliases: ["burkina faso", "ouagadougou"],
  },
  {
    country: "Niger",
    city: "Niamey",
    timezone: "Africa/Niamey",
    flag: "ne",
    aliases: ["niger", "niamey"],
  },
  {
    country: "Somalia",
    city: "Mogadishu",
    timezone: "Africa/Mogadishu",
    flag: "so",
    aliases: ["somalia", "mogadishu"],
  },
  {
    country: "Madagascar",
    city: "Antananarivo",
    timezone: "Indian/Antananarivo",
    flag: "mg",
    aliases: ["madagascar", "antananarivo"],
  },

  // =========================================================
  // OCEANIA
  // =========================================================
  {
    country: "Australia",
    city: "Sydney",
    timezone: "Australia/Sydney",
    flag: "au",
    aliases: ["australia", "sydney", "au"],
  },
  {
    country: "Australia",
    city: "Melbourne",
    timezone: "Australia/Melbourne",
    flag: "au",
    aliases: ["melbourne", "australia"],
  },
  {
    country: "Australia",
    city: "Brisbane",
    timezone: "Australia/Brisbane",
    flag: "au",
    aliases: ["brisbane", "australia"],
  },
  {
    country: "Australia",
    city: "Adelaide",
    timezone: "Australia/Adelaide",
    flag: "au",
    aliases: ["adelaide", "australia"],
  },
  {
    country: "Australia",
    city: "Perth",
    timezone: "Australia/Perth",
    flag: "au",
    aliases: ["perth", "australia"],
  },
  {
    country: "Australia",
    city: "Darwin",
    timezone: "Australia/Darwin",
    flag: "au",
    aliases: ["darwin", "australia"],
  },
  {
    country: "Australia",
    city: "Canberra",
    timezone: "Australia/Sydney",
    flag: "au",
    aliases: ["canberra", "australia"],
  },
  {
    country: "Australia",
    city: "Hobart",
    timezone: "Australia/Hobart",
    flag: "au",
    aliases: ["hobart", "australia"],
  },
  {
    country: "New Zealand",
    city: "Auckland",
    timezone: "Pacific/Auckland",
    flag: "nz",
    aliases: ["new zealand", "nz", "auckland"],
  },
  {
    country: "New Zealand",
    city: "Wellington",
    timezone: "Pacific/Auckland",
    flag: "nz",
    aliases: ["new zealand", "wellington"],
  },
  {
    country: "Papua New Guinea",
    city: "Port Moresby",
    timezone: "Pacific/Port_Moresby",
    flag: "pg",
    aliases: ["papua new guinea", "png", "port moresby"],
  },
  {
    country: "Fiji",
    city: "Suva",
    timezone: "Pacific/Fiji",
    flag: "fj",
    aliases: ["fiji", "suva"],
  },
  {
    country: "Samoa",
    city: "Apia",
    timezone: "Pacific/Apia",
    flag: "ws",
    aliases: ["samoa", "apia"],
  },
  {
    country: "Tonga",
    city: "Nukuʻalofa",
    timezone: "Pacific/Tongatapu",
    flag: "to",
    aliases: ["tonga", "nukualofa"],
  },
  {
    country: "Vanuatu",
    city: "Port Vila",
    timezone: "Pacific/Efate",
    flag: "vu",
    aliases: ["vanuatu", "port vila"],
  },
  {
    country: "Solomon Islands",
    city: "Honiara",
    timezone: "Pacific/Guadalcanal",
    flag: "sb",
    aliases: ["solomon islands", "honiara"],
  },
  {
    country: "Micronesia",
    city: "Palikir",
    timezone: "Pacific/Pohnpei",
    flag: "fm",
    aliases: ["micronesia", "palikir"],
  },
  {
    country: "Palau",
    city: "Ngerulmud",
    timezone: "Pacific/Palau",
    flag: "pw",
    aliases: ["palau", "ngerulmud"],
  },
  {
    country: "Marshall Islands",
    city: "Majuro",
    timezone: "Pacific/Majuro",
    flag: "mh",
    aliases: ["marshall islands", "majuro"],
  },
  {
    country: "Kiribati",
    city: "Tarawa",
    timezone: "Pacific/Tarawa",
    flag: "ki",
    aliases: ["kiribati", "tarawa"],
  },
  {
    country: "Nauru",
    city: "Yaren",
    timezone: "Pacific/Nauru",
    flag: "nr",
    aliases: ["nauru", "yaren"],
  },
  {
    country: "Tuvalu",
    city: "Funafuti",
    timezone: "Pacific/Funafuti",
    flag: "tv",
    aliases: ["tuvalu", "funafuti"],
  },

  // =========================================================
  // ADDITIONAL COUNTRIES
  // =========================================================
  {
    country: "Armenia",
    city: "Yerevan",
    timezone: "Asia/Yerevan",
    flag: "am",
    aliases: ["armenia", "yerevan"],
  },
  {
    country: "Azerbaijan",
    city: "Baku",
    timezone: "Asia/Baku",
    flag: "az",
    aliases: ["azerbaijan", "baku"],
  },
  {
    country: "Georgia",
    city: "Tbilisi",
    timezone: "Asia/Tbilisi",
    flag: "ge",
    aliases: ["georgia", "tbilisi"],
  },
  {
    country: "Iceland",
    city: "Reykjavik",
    timezone: "Atlantic/Reykjavik",
    flag: "is",
    aliases: ["iceland", "reykjavik"],
  },
];
// ---------- UTILITIES ----------
let is24Hour = JSON.parse(localStorage.getItem("worldClock24Hour")) ?? true;

function formatTime(timezone) {
  const formatter = new Intl.DateTimeFormat([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !is24Hour,
    timeZone: timezone,
  });
  const parts = formatter.formatToParts(new Date());
  const hour = parts.find((p) => p.type === "hour")?.value || "";
  const minute = parts.find((p) => p.type === "minute")?.value || "";
  const second = parts.find((p) => p.type === "second")?.value || "";
  const dayPeriod = parts.find((p) => p.type === "dayPeriod")?.value || "";
  if (is24Hour) return `${hour}:${minute}:${second}`;
  return `${hour}:${minute}:${second} <span class="am-pm">${dayPeriod}</span>`;
}

function formatDate(timezone) {
  return new Intl.DateTimeFormat([], {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: timezone,
  }).format(new Date());
}

function getUTCOffset(timezone) {
  const now = new Date();
  const utc = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
  const target = new Date(now.toLocaleString("en-US", { timeZone: timezone }));
  const diff = (target - utc) / 60000;
  const sign = diff >= 0 ? "+" : "-";
  const abs = Math.abs(diff);
  const hours = Math.floor(abs / 60);
  const minutes = abs % 60;
  return `UTC${sign}${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function findCountry(keyword) {
  keyword = keyword.trim().toLowerCase();
  return countries.filter(
    (c) =>
      c.country.toLowerCase().includes(keyword) ||
      c.city.toLowerCase().includes(keyword) ||
      c.aliases.some((a) => a.includes(keyword)),
  );
}

function getFavorites() {
  return JSON.parse(localStorage.getItem("favoriteClocks")) ?? [];
}
function saveFavorites(f) {
  localStorage.setItem("favoriteClocks", JSON.stringify(f));
}

function getTimeOfDay(timezone) {
  const now = new Date();
  const localTime = new Date(
    now.toLocaleString("en-US", { timeZone: timezone }),
  );
  const hour = localTime.getHours();

  if (hour >= 5 && hour < 12) return "morning";
  else if (hour >= 12 && hour < 17) return "afternoon";
  else if (hour >= 17 && hour < 21) return "evening";
  else return "night";
}

function getTheme() {
  return localStorage.getItem("theme") ?? "light";
}
function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}
function toggleTheme() {
  applyTheme(getTheme() === "light" ? "dark" : "light");
}

function toggleTimeFormat() {
  is24Hour = !is24Hour;
  localStorage.setItem("worldClock24Hour", JSON.stringify(is24Hour));
}

function getLocalTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function getCountryFromTimezone(tz) {
  return countries.find((c) => c.timezone === tz);
}

function sortCountries() {
  countries.sort((a, b) => a.country.localeCompare(b.country));
}

const popularCities = [
  "Asia/Dhaka",
  "Asia/Tokyo",
  "Europe/London",
  "Europe/Paris",
  "Europe/Berlin",
  "America/New_York",
  "America/Chicago",
  "America/Los_Angeles",
  "America/Toronto",
  "Asia/Dubai",
  "Asia/Singapore",
  "Asia/Shanghai",
  "Asia/Kolkata",
  "Australia/Sydney",
];

// ---------- DOM ----------
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const localClock = document.getElementById("localClock");
const favoriteClocks = document.getElementById("favoriteClocks");
const popularClocks = document.getElementById("popularClocks");
const clockTemplate = document.getElementById("clockTemplate");
const searchTemplate = document.getElementById("searchTemplate");
const themeBtn = document.getElementById("themeBtn");
const timeFormatBtn = document.getElementById("timeFormatBtn");

let favorites = getFavorites();
let renderedClocks = [];
let localTimezone = getLocalTimezone();

// ---------- CREATE CARD ----------
function createClockCard(data, removable = false, showPin = false) {
  const clone = clockTemplate.content.cloneNode(true);
  const card = clone.querySelector(".clock-card");
  const removeBtn = clone.querySelector(".remove-btn");

  // ===== PIN INDICATOR LOGIC =====
  const pinIndicator = clone.querySelector(".pin-indicator");
  if (showPin) {
    // Show pin if the country is in favorites
    pinIndicator.style.display = "flex";
    // Add tooltip
    pinIndicator.title = "Pinned to favorites";
  } else {
    pinIndicator.style.display = "none";
  }
  // ================================

  // flag
  const flagSpan = clone.querySelector(".flag-wrap .fi");
  if (data.flag) {
    flagSpan.className = `fi fi-${data.flag}`;
  }

  // Time-of-day image
  const timeImage = clone.querySelector(".time-image");
  const timeOfDay = getTimeOfDay(data.timezone);
  timeImage.src = `${timeOfDay}.webp`;
  timeImage.alt = timeOfDay;

  clone.querySelector(".country").textContent = data.country;
  clone.querySelector(".city").textContent = data.city;
  clone.querySelector(".time").dataset.timezone = data.timezone;
  clone.querySelector(".date").dataset.timezone = data.timezone;
  clone.querySelector(".utc").textContent = getUTCOffset(data.timezone);

  if (removable) {
    removeBtn.addEventListener("click", () => {
      favorites = favorites.filter((tz) => tz !== data.timezone);
      saveFavorites(favorites);
      renderFavorites();
    });
  } else {
    removeBtn.remove();
  }

  renderedClocks.push({
    time: clone.querySelector(".time"),
    date: clone.querySelector(".date"),
    timezone: data.timezone,
  });
  return clone;
}

function updateClocks() {
  renderedClocks.forEach((clock) => {
    clock.time.innerHTML = formatTime(clock.timezone);
    clock.date.textContent = formatDate(clock.timezone);

    // ===== ADD THIS TO UPDATE IMAGE =====
    const card = clock.time.closest(".clock-card");
    if (card) {
      const img = card.querySelector(".time-image");
      if (img) {
        const timeOfDay = getTimeOfDay(clock.timezone);
        img.src = `${timeOfDay}.webp`;
        img.alt = timeOfDay;
      }
    }
    // ====================================
  });
}

function renderLocalClock() {
  localClock.innerHTML = "";
  const place = getCountryFromTimezone(localTimezone);
  if (!place) return;
  localClock.appendChild(createClockCard(place));
}

function renderFavorites() {
  favoriteClocks.innerHTML = "";
  renderedClocks = renderedClocks.filter((c) => c.timezone === localTimezone);
  if (favorites.length === 0) {
    favoriteClocks.innerHTML = `<div class="empty">No favorite clocks yet.</div>`;
    return;
  }
  favorites.forEach((tz) => {
    const place = getCountryFromTimezone(tz);
    if (!place) return;
    favoriteClocks.appendChild(createClockCard(place, true));
  });
}

function renderPopular() {
  popularClocks.innerHTML = "";
  popularCities.forEach((tz) => {
    const place = getCountryFromTimezone(tz);
    if (!place) return;
    // Check if this place is in favorites
    const isPinned = favorites.includes(tz);
    popularClocks.appendChild(createClockCard(place, false, isPinned));
  });
}

/* =========================================================
RENDER ALL COUNTRIES
========================================================= */

let showAllCountries = false;
const ALL_COUNTRIES_LIMIT = 24; // Show first 24 by default

function renderAllCountries() {
  const container = document.getElementById("allClocks");
  const countDisplay = document.getElementById("countryCount");

  if (!container) return;

  container.innerHTML = "";

  // Sort countries by country name for better display
  const sortedCountries = [...countries].sort((a, b) =>
    a.country.localeCompare(b.country),
  );

  // Update count
  if (countDisplay) {
    countDisplay.textContent = `${sortedCountries.length} locations`;
  }

  // Determine which countries to show
  const displayCountries = showAllCountries
    ? sortedCountries
    : sortedCountries.slice(0, ALL_COUNTRIES_LIMIT);

  // Create wrapper for scrolling
  const wrapper = document.createElement("div");
  wrapper.className = "all-countries-wrapper";

  // Create grid inside wrapper
  const grid = document.createElement("div");
  grid.className = "clock-grid all-clocks-grid";

  // Track rendered clocks for this section
  const allRendered = [];

  displayCountries.forEach((place, index) => {
    const clone = clockTemplate.content.cloneNode(true);
    const card = clone.querySelector(".clock-card");
    const removeBtn = clone.querySelector(".remove-btn");

    // Remove remove button (no favorites in all countries view)
    if (removeBtn) removeBtn.remove();

    // ===== CHECK IF PINNED =====
    const pinIndicator = clone.querySelector(".pin-indicator");
    const isPinned = favorites.includes(place.timezone);
    if (isPinned) {
      pinIndicator.style.display = "flex";
      pinIndicator.title = "Pinned to favorites";
    } else {
      pinIndicator.style.display = "none";
    }
    // ============================

    // Set flag
    const flagSpan = clone.querySelector(".flag-wrap .fi");
    if (place.flag) {
      flagSpan.className = `fi fi-${place.flag}`;
    }

    // Time-of-day image
    const timeImage = clone.querySelector(".time-image");
    const timeOfDay = getTimeOfDay(place.timezone);
    timeImage.src = `${timeOfDay}.webp`;
    timeImage.alt = timeOfDay;

    // Set content
    clone.querySelector(".country").textContent = place.country;
    clone.querySelector(".city").textContent = place.city;
    clone.querySelector(".time").dataset.timezone = place.timezone;
    clone.querySelector(".date").dataset.timezone = place.timezone;
    clone.querySelector(".utc").textContent = getUTCOffset(place.timezone);

    // Add click to add to favorites (with pin update)
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      if (!favorites.includes(place.timezone)) {
        favorites.push(place.timezone);
        saveFavorites(favorites);
        renderFavorites();
        // Update pin status on this card
        pinIndicator.style.display = "flex";
        pinIndicator.title = "Pinned to favorites";
        // Visual feedback
        card.style.borderColor = "var(--primary)";
        card.style.transform = "scale(0.98)";
        setTimeout(() => {
          card.style.borderColor = "";
          card.style.transform = "";
        }, 300);
      } else {
        // Optionally: unpin if clicked again
        favorites = favorites.filter((tz) => tz !== place.timezone);
        saveFavorites(favorites);
        renderFavorites();
        pinIndicator.style.display = "none";
        // Visual feedback
        card.style.borderColor = "var(--danger)";
        card.style.transform = "scale(0.98)";
        setTimeout(() => {
          card.style.borderColor = "";
          card.style.transform = "";
        }, 300);
      }
    });

    // Update tooltip based on pin status
    card.title = isPinned
      ? `Click to remove ${place.country} (${place.city}) from favorites`
      : `Click to add ${place.country} (${place.city}) to favorites`;

    grid.appendChild(clone);

    // Add to rendered clocks
    allRendered.push({
      time: clone.querySelector(".time"),
      date: clone.querySelector(".date"),
      timezone: place.timezone,
    });
  });

  wrapper.appendChild(grid);
  container.appendChild(wrapper);

  // Add to main renderedClocks for updates
  renderedClocks = [...renderedClocks, ...allRendered];

  // Add show more/less button if there are more countries than limit
  if (sortedCountries.length > ALL_COUNTRIES_LIMIT) {
    const toggleDiv = document.createElement("div");
    toggleDiv.style.cssText = "text-align: center; margin-top: 20px;";

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "show-toggle-btn";
    toggleBtn.innerHTML = showAllCountries
      ? "Show Less ↑"
      : `Show All (${sortedCountries.length} locations) ↓`;

    toggleBtn.addEventListener("click", () => {
      showAllCountries = !showAllCountries;
      // Remove all rendered clocks from this section before re-rendering
      renderedClocks = renderedClocks.filter(
        (clock) => !allRendered.some((r) => r.time === clock.time),
      );
      renderAllCountries();
    });

    toggleDiv.appendChild(toggleBtn);
    container.appendChild(toggleDiv);
  }
}

// ---------- SEARCH ----------
function clearSearchResults() {
  searchResults.innerHTML = "";
  searchResults.style.display = "none";
}

function renderSearchResults(results) {
  clearSearchResults();
  if (!results.length) return;
  results.slice(0, 20).forEach((place) => {
    const clone = searchTemplate.content.cloneNode(true);
    const flagSpan = clone.querySelector(".search-flag .fi");
    if (place.flag) flagSpan.className = `fi fi-${place.flag}`;
    clone.querySelector(".search-country").textContent = place.country;
    clone.querySelector(".search-city").textContent = place.city;
    clone.querySelector(".search-item").addEventListener("click", () => {
      if (!favorites.includes(place.timezone)) {
        favorites.push(place.timezone);
        saveFavorites(favorites);
        renderFavorites();
      }
      searchInput.value = "";
      clearSearchResults();
    });
    searchResults.appendChild(clone);
  });
  searchResults.style.display = "block";
}

function performSearch(keyword) {
  keyword = keyword.trim();
  if (!keyword) {
    clearSearchResults();
    return;
  }
  renderSearchResults(findCountry(keyword));
}

// events
searchInput.addEventListener("input", (e) => performSearch(e.target.value));
searchInput.addEventListener("focus", () => {
  if (searchInput.value.trim()) performSearch(searchInput.value);
});
searchInput.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  const results = findCountry(searchInput.value);
  if (!results.length) return;
  const place = results[0];
  if (!favorites.includes(place.timezone)) {
    favorites.push(place.timezone);
    saveFavorites(favorites);
    renderFavorites();
  }
  searchInput.value = "";
  clearSearchResults();
});
document.addEventListener("click", (e) => {
  if (!searchResults.contains(e.target) && !searchInput.contains(e.target))
    clearSearchResults();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") clearSearchResults();
});

// ---------- RENDER APP ----------
function renderApp() {
  renderedClocks = [];
  renderLocalClock();
  renderFavorites();
  renderPopular();
  renderAllCountries();
  updateClocks();
}

function startClockUpdates() {
  updateClocks();
  setInterval(updateClocks, 1000);
}

function refreshFavorites() {
  favorites = getFavorites();
  renderFavorites();
}

// ---------- THEME & FORMAT ----------
applyTheme(getTheme());
themeBtn.textContent = getTheme() === "dark" ? "☀️" : "🌙";
themeBtn.addEventListener("click", () => {
  toggleTheme();
  themeBtn.textContent = getTheme() === "dark" ? "☀️" : "🌙";
});

timeFormatBtn.textContent = is24Hour ? "24H" : "12H";
timeFormatBtn.addEventListener("click", () => {
  toggleTimeFormat();
  timeFormatBtn.textContent = is24Hour ? "24H" : "12H";
  updateClocks();
});

// ---------- START ----------
sortCountries();
renderApp();
startClockUpdates();

// visibility
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) updateClocks();
});
window.addEventListener("focus", updateClocks);
