---
title: Getting Started - API Support
hide_title: true
sidebar_label: API Support
keywords:
    - weather
    - road weather
    - ground weather forecast
    - weather intelligence
    - weather apis
    - api support
hide_table_of_contents: true
---

# Fathym Habistack Forecast API

The Fathym Habistack Forecast API is a high-performance RESTful API that can be used to obtain forecasted values for a variety of variables at any set of points in space and time. This document outlines the process of making basic queries.

This document includes the following topics:

- Sample API Interactions
- Request a List of Available Variables
- Request Multiple Variables
- Request a List of Available Maptile Imagery
- Request a Maptile

## Sample API Interactions
In each of these examples, the {subscription key} is the one provided by the Azure API Management system.  You will see this key (both primary and secondary) on the Habistack Dashboard in the Forecast Access section.

![Dashboard New](/img/screenshots/dashboard-new.png)

## Request a List of Available Variables
Below is an example using curl to fetch the list of forecast variables. The list of variables is long and growing.

#### Curl Command
```console
curl -X 'GET' \
  'https://fathym-cloud-prd.azure-api.net/habistack/weather/ground/api/v0/api-variables' \
  -H 'lcu-subscription-key: {subscription key}'
```

#### Response Body
```console

[
  {
    "name": "CategoricalFreezingRain",
    "doc": "1 if there is freezing rain, 0 otherwise.",
    "level": "Surface",
    "units": "boolean"
  },
  {
    "name": "CategoricalIcePellets",
    "doc": "1 if there are ice pellets, 0 otherwise.",
    "level": "Surface",
    "units": "boolean"
  },
  {
    "name": "CategoricalRain",
    "doc": "1 if there is rain, 0 otherwise.",
    "level": "Surface",
    "units": "boolean"
  },
  {
    "name": "CategoricalRain-past-1hr",
    "doc": "1 if there is rain, 0 otherwise.-1 hours ago",
    "level": "Surface",
    "units": "boolean"
  },
  {
    "name": "CategoricalRain-past-2hr",
    "doc": "1 if there is rain, 0 otherwise.-2 hours ago",
    "level": "Surface",
    "units": "boolean"
  },
  {
    "name": "CategoricalRain-past-4hr",
    "doc": "1 if there is rain, 0 otherwise.-4 hours ago",
    "level": "Surface",
    "units": "boolean"
  },
  {
    "name": "CategoricalSnow",
    "doc": "1 if is snowing, 0 otherwise.",
    "level": "Surface",
    "units": "boolean"
  },
  {
    "name": "CloudCover",
    "doc": "Percent cloud cover.",
    "level": "EntireAtmosphere",
    "units": "%"
  },
  {
    "name": "CombinedCategoricals",
    "doc": "All categoricals combined into single bitmask.  Items are combined as such:\nbit0 - snow, bit1 - ice pellets, bit2 - freezing rain, bit3 - rain.",
    "level": "Surface",
    "units": "unsigned byte"
  },
  {
    "name": "CombinedCategoricals-past-1hr",
    "doc": "All categoricals combined into single bitmask.  Items are combined as such:\nbit0 - snow, bit1 - ice pellets, bit2 - freezing rain, bit3 - rain.-1 hours ago",
    "level": "Surface",
    "units": "unsigned byte"
  },
  {
    "name": "CombinedCategoricals-past-2hr",
    "doc": "All categoricals combined into single bitmask.  Items are combined as such:\nbit0 - snow, bit1 - ice pellets, bit2 - freezing rain, bit3 - rain.-2 hours ago",
    "level": "Surface",
    "units": "unsigned byte"
  },
  {
    "name": "CombinedCategoricals-past-4hr",
    "doc": "All categoricals combined into single bitmask.  Items are combined as such:\nbit0 - snow, bit1 - ice pellets, bit2 - freezing rain, bit3 - rain.-4 hours ago",
    "level": "Surface",
    "units": "unsigned byte"
  },
  {
    "name": "DewPoint",
    "doc": "DewPoint at 2 meters",
    "level": "2Meters",
    "units": "k"
  },
  {
    "name": "DewPoint-past-1hr",
    "doc": "DewPoint at 2 meters-1 hours ago",
    "level": "2Meters",
    "units": "k"
  },
  {
    "name": "DewPoint-past-2hr",
    "doc": "DewPoint at 2 meters-2 hours ago",
    "level": "2Meters",
    "units": "k"
  },
  {
    "name": "DewPoint-past-4hr",
    "doc": "DewPoint at 2 meters-4 hours ago",
    "level": "2Meters",
    "units": "k"
  },
  {
    "name": "LongWaveRadiation",
    "level": "Surface",
    "doc": "downward long wave rad. flux",
    "units": "W/m2"
  },
  {
    "name": "LongWaveRadiation-past-1hr",
    "level": "Surface",
    "doc": "downward long wave rad. flux-1 hours ago",
    "units": "W/m2"
  },
  {
    "name": "LongWaveRadiation-past-2hr",
    "level": "Surface",
    "doc": "downward long wave rad. flux-2 hours ago",
    "units": "W/m2"
  },
  {
    "name": "LongWaveRadiation-past-4hr",
    "level": "Surface",
    "doc": "downward long wave rad. flux-4 hours ago",
    "units": "W/m2"
  },
  {
    "name": "PrecipitationRate",
    "doc": "Precipitation Rate (kg/m^2/s)",
    "level": "Surface",
    "units": "kg/m^2/s"
  },
  {
    "name": "PrecipitationRate-past-1hr",
    "doc": "Precipitation Rate (kg/m^2/s)-1 hours ago",
    "level": "Surface",
    "units": "kg/m^2/s"
  },
  {
    "name": "PrecipitationRate-past-2hr",
    "doc": "Precipitation Rate (kg/m^2/s)-2 hours ago",
    "level": "Surface",
    "units": "kg/m^2/s"
  },
  {
    "name": "PrecipitationRate-past-4hr",
    "doc": "Precipitation Rate (kg/m^2/s)-4 hours ago",
    "level": "Surface",
    "units": "kg/m^2/s"
  },
  {
    "name": "PrecipitationRateMillisHr",
    "doc": "Precipitation rate in mm/hr",
    "level": "Surface",
    "units": "mm/hr"
  },
  {
    "name": "Pressure",
    "doc": "Surface pressure in pascal",
    "level": "Surface",
    "units": "Pa"
  },
  {
    "name": "Pressure-past-1hr",
    "doc": "Surface pressure in pascal-1 hours ago",
    "level": "Surface",
    "units": "Pa"
  },
  {
    "name": "Pressure-past-2hr",
    "doc": "Surface pressure in pascal-2 hours ago",
    "level": "Surface",
    "units": "Pa"
  },
  {
    "name": "Pressure-past-4hr",
    "doc": "Surface pressure in pascal-4 hours ago",
    "level": "Surface",
    "units": "Pa"
  },
  {
    "name": "RoadState",
    "doc": "Get projected road state (string) based on weather variables",
    "level": "Surface",
    "units": "unknown"
  },
  {
    "name": "RoadTemperature",
    "doc": "Road Temperature in Kelvin",
    "level": "Surface",
    "units": "kelvin"
  },
  {
    "name": "RouteDelayRisk",
    "doc": "Get projected route delay risk on scale of 0-5 with 5 being very high chance of delay",
    "level": "Surface",
    "units": "unknown"
  },
  {
    "name": "ShortWaveRadiation",
    "level": "Surface",
    "doc": "downward short wave rad. flux",
    "units": "W/m2"
  },
  {
    "name": "ShortWaveRadiation-past-1hr",
    "level": "Surface",
    "doc": "downward short wave rad. flux-1 hours ago",
    "units": "W/m2"
  },
  {
    "name": "ShortWaveRadiation-past-2hr",
    "level": "Surface",
    "doc": "downward short wave rad. flux-2 hours ago",
    "units": "W/m2"
  },
  {
    "name": "ShortWaveRadiation-past-4hr",
    "level": "Surface",
    "doc": "downward short wave rad. flux-4 hours ago",
    "units": "W/m2"
  },
  {
    "name": "SnowDepth",
    "doc": "Snow Depth (meters)",
    "level": "Surface",
    "units": "m"
  },
  {
    "name": "SnowDepth-past-1hr",
    "doc": "Snow Depth (meters)-1 hours ago",
    "level": "Surface",
    "units": "m"
  },
  {
    "name": "SnowDepth-past-2hr",
    "doc": "Snow Depth (meters)-2 hours ago",
    "level": "Surface",
    "units": "m"
  },
  {
    "name": "SnowDepth-past-4hr",
    "doc": "Snow Depth (meters)-4 hours ago",
    "level": "Surface",
    "units": "m"
  },
  {
    "name": "Temperature",
    "doc": "Temperature (kelvin) at 2 meters",
    "level": "2Meters",
    "units": "k"
  },
  {
    "name": "Temperature",
    "doc": "Temperature (kelvin) at surface",
    "level": "Surface",
    "units": "k"
  },
  {
    "name": "Temperature-past-1hr",
    "doc": "Temperature (kelvin) at 2 meters-1 hours ago",
    "level": "2Meters",
    "units": "k"
  },
  {
    "name": "Temperature-past-1hr",
    "doc": "Temperature (kelvin) at surface-1 hours ago",
    "level": "Surface",
    "units": "k"
  },
  {
    "name": "Temperature-past-2hr",
    "doc": "Temperature (kelvin) at 2 meters-2 hours ago",
    "level": "2Meters",
    "units": "k"
  },
  {
    "name": "Temperature-past-2hr",
    "doc": "Temperature (kelvin) at surface-2 hours ago",
    "level": "Surface",
    "units": "k"
  },
  {
    "name": "Temperature-past-4hr",
    "doc": "Temperature (kelvin) at 2 meters-4 hours ago",
    "level": "2Meters",
    "units": "k"
  },
  {
    "name": "Temperature-past-4hr",
    "doc": "Temperature (kelvin) at surface-4 hours ago",
    "level": "Surface",
    "units": "k"
  },
  {
    "name": "TotalPrecipitation",
    "doc": "Total Precipitation (kg/m^2)",
    "level": "Surface",
    "units": "kg/m^2"
  },
  {
    "name": "TotalPrecipitation-past-1hr",
    "doc": "Total Precipitation (kg/m^2)-1 hours ago",
    "level": "Surface",
    "units": "kg/m^2"
  },
  {
    "name": "TotalPrecipitation-past-2hr",
    "doc": "Total Precipitation (kg/m^2)-2 hours ago",
    "level": "Surface",
    "units": "kg/m^2"
  },
  {
    "name": "TotalPrecipitation-past-4hr",
    "doc": "Total Precipitation (kg/m^2)-4 hours ago",
    "level": "Surface",
    "units": "kg/m^2"
  },
  {
    "name": "Visibility",
    "doc": "Visibility in meters",
    "level": "Surface",
    "units": "m"
  },
  {
    "name": "WindDirection",
    "doc": "Wind Direction in degrees (0 is true north)",
    "level": "10Meters",
    "units": "degrees"
  },
  {
    "name": "WindGust",
    "doc": "Wind Gust Potential (m/s)",
    "level": "Surface",
    "units": "m/s"
  },
  {
    "name": "WindGust-past-1hr",
    "doc": "Wind Gust Potential (m/s)-1 hours ago",
    "level": "Surface",
    "units": "m/s"
  },
  {
    "name": "WindGust-past-2hr",
    "doc": "Wind Gust Potential (m/s)-2 hours ago",
    "level": "Surface",
    "units": "m/s"
  },
  {
    "name": "WindGust-past-4hr",
    "doc": "Wind Gust Potential (m/s)-4 hours ago",
    "level": "Surface",
    "units": "m/s"
  },
  {
    "name": "WindSpeed",
    "doc": "Wind Speed (m/s)",
    "level": "10Meters",
    "units": "m/s"
  },
  {
    "name": "WindSpeed-past-1hr",
    "doc": "Wind Speed (m/s)-1 hours ago",
    "level": "10Meters",
    "units": "m/s"
  },
  {
    "name": "WindSpeed-past-2hr",
    "doc": "Wind Speed (m/s)-2 hours ago",
    "level": "10Meters",
    "units": "m/s"
  },
  {
    "name": "WindSpeed-past-4hr",
    "doc": "Wind Speed (m/s)-4 hours ago",
    "level": "10Meters",
    "units": "m/s"
  }
]

```

## Request Multiple Variables
Below is an example of forecasting temperature, precipitation, and road state in Boulder, CO, USA one hour from current time and Denver, CO, USA two hours from current time:

#### Curl Command

```console

curl -X 'POST' \
  'https://fathym-cloud-prd.azure-api.net/habistack/weather/ground/api/v0/point-query' \
  -H 'lcu-subscription-key: {subscription key}'\
  -d '{
  "variables": [
    {
      "name": "Temperature",
      "level": "Surface"
    },
    {  
      "name": "PrecipitationRate",
      "level": "Surface"
    },
    {  
      "name": "RoadState",
      "level": "Surface"
    }
  ],
  "points": [
    {
      "lat": 40.021296,
      "lng": -105.264607,
      "relative-seconds": 3600
    },
    {
      "lat": 39.753299,
      "lng": -104.992361,
      "relative-seconds": 7200
    }
  ]
}'\'''

```

#### Response Body

```console

[
  {
    "name": "Temperature",
    "level": "Surface",
    "values": [
      295.1078,
      294.513
    ]
  },
  {
    "name": "PrecipitationRate",
    "level": "Surface",
    "values": [
      0.00048733334,
      0.0077775833
    ]
  },
  {
    "name": "RoadState",
    "level": "Surface",
    "values": [
      "Wet",
      "Wet"
    ]
  }
]

```


Notably, this example queries just three variables at just two points in space and time. In general, a query can be for any forecasted variables at any set of points. Querying thousands of points (e.g., along an interstate trucking route, or the locations of a set of retail establishments) is not only possible, but fast — responses in about one second are possible. For the purpose of forecasting along routes, a route is a list of points in space and time.

## Request a List of Available Maptile Imagery
The Habistack API delivers maptile imagery based on forecasted data. These images are suitable for display on, for example, Azure Maps. To discover what imagery is currently available, request a maptile manifest.

#### Curl Command

```console

curl -X 'GET' \
  'https://fathym-cloud-prd.azure-api.net/habistack/weather/ground/api/v0/maptile-manifest' \
  -H 'lcu-subscription-key: {subscription key}'

```

#### Response Body

```console

{
  "CloudCover_EntireAtmosphere": [
    1629406800,
    1629408600,
    1629410400,
    1629412200,
    1629414000,
    1629415800,
    1629417600,
    1629419400,
    1629421200,
    1629423000,
    1629424800,
    1629426600,
    1629428400,
    1629430200,
    1629432000,
    1629433800,
    1629435600,
    1629437400,
    1629439200,
    1629441000,
    1629442800,
    1629444600,
    1629446400,
    1629448200,
    1629450000,
    1629451800,
    1629453600,
    1629455400,
    1629457200,
    1629459000
  ],
  "Precipitation_Surface": [
    1629406800,
    1629408600,
    1629410400,
    1629412200,
    1629414000,
    1629415800,
    1629417600,
    1629419400,
    1629421200,
    1629423000,
    1629424800,
    1629426600,
    1629428400,
    1629430200,
    1629432000,
    1629433800,
    1629435600,
    1629437400,
    1629439200,
    1629441000,
    1629442800,
    1629444600,
    1629446400,
    1629448200,
    1629450000,
    1629451800,
    1629453600,
    1629455400,
    1629457200,
    1629459000
  ],
  "Temperature_2Meters": [
    1629406800,
    1629408600,
    1629410400,
    1629412200,
    1629414000,
    1629415800,
    1629417600,
    1629419400,
    1629421200,
    1629423000,
    1629424800,
    1629426600,
    1629428400,
    1629430200,
    1629432000,
    1629433800,
    1629435600,
    1629437400,
    1629439200,
    1629441000,
    1629442800,
    1629444600,
    1629446400,
    1629448200,
    1629450000,
    1629451800,
    1629453600,
    1629455400,
    1629457200,
    1629459000
  ],
  "Visibility_Surface": [
    1629406800,
    1629408600,
    1629410400,
    1629412200,
    1629414000,
    1629415800,
    1629417600,
    1629419400,
    1629421200,
    1629423000,
    1629424800,
    1629426600,
    1629428400,
    1629430200,
    1629432000,
    1629433800,
    1629435600,
    1629437400,
    1629439200,
    1629441000,
    1629442800,
    1629444600,
    1629446400,
    1629448200,
    1629450000,
    1629451800,
    1629453600,
    1629455400,
    1629457200,
    1629459000
  ],
  "Wind_10Meters": [
    1629406800,
    1629408600,
    1629410400,
    1629412200,
    1629414000,
    1629415800,
    1629417600,
    1629419400,
    1629421200,
    1629423000,
    1629424800,
    1629426600,
    1629428400,
    1629430200,
    1629432000,
    1629433800,
    1629435600,
    1629437400,
    1629439200,
    1629441000,
    1629442800,
    1629444600,
    1629446400,
    1629448200,
    1629450000,
    1629451800,
    1629453600,
    1629455400,
    1629457200,
    1629459000
  ]
}

```

Currently, five variables (layers) are available (as seen in the response above), and for each of those five variables, eight forecast times (approximately every 15 minutes for the next two hours) have available imagery.

Data from the manifest can be used to request maptiles, as seen below.

## Request a Maptile
In general, the URL scheme for requesting maptiles is:
/api/v0/maptile-fetch/{variable}/{t}/{z}/{x}/{y}.png

Where:

- {variable} is a variable from the maptile manifest (e.g., "Temperature_2Meters")
- {t} is a time from the maptile manifest corresponding to the desired variable (e.g., 1574186400)
- {z}/{x}/{y} are the zoom-level, and x, and y of the desired tile.

This is designed to be convenient to use with mapping software, here is an example of integrating it with Azure Maps in JS in the browser:

```console
function makeMaptileOptions(layerStr, t) {
return {
tileUrl: "/api/v0/maptile-fetch/"+layerStr+"/"+t+"/{z}/{x}/{y}.png",
opacity: 0.7,
tileSize: 256
}
}
```

Here is an example of accessing a maptile image directly.

Note the parameters "Temperature_2Meters" and 1629419400 come from the maptilemanifest as above.

#### Curl Command

```console
curl -X 'GET' \
  'https://fathym-cloud-prd.azure-api.net/habistack/weather/ground/api/v0/maptile-fetch/Temperature_2Meters/1629419400/0/0/0' \
  -H 'lcu-subscription-key: {subscription key}'
```

Then, ./tile-0-0-0.png is:

![API Tile 0](/img/screenshots/API-tile0.png)

At zoom-level `1`, there are four tiles:

![API Tile 1](/img/screenshots/API-zoom1-1.png)
![API Tile 2](/img/screenshots/API-zoom1-2.png)
![API Tile 3](/img/screenshots/API-zoom1-3.png)
![API Tile 4](/img/screenshots/API-zoom1-4.png)

And so on, up to the resolution of available forecast data (approximately zoom level 6 over the continental US and zoom level 3 everywhere else).

