let settings = {
  host: "localhost",
  user: "website",
  password: "IU*(&THHGkjhgfkjg&",
  database: "kingsroyale",
  prevousSeason: 0,
  currentSeason: 1,
};

let config = {
  mainConnection: {
    host: settings.host,
    user: settings.user,
    password: settings.password,
    database: settings.database
  },
  currentSeasonConnection: {
    host: settings.host,
    user: settings.user,
    password: settings.password,
    database: `${settings.database}${settings.currentSeason}`
  },
  prevousSeasonConnection: {
    host: settings.host,
    user: settings.user,
    password: settings.password,
    database: `${settings.database}${settings.prevousSeason}`
  },
};

module.exports = config;
