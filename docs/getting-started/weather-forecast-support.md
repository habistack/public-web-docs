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

# Fathym Forecast API

The Fathym Forecast API is a high-performance RESTful API that can be used to obtain forecasted values for a variety of variables at any set of points in space and time. This document outlines the process of making basic queries.

This document includes the following topics:

- Sample API Interactions
- Request a List of Available Variables
- Request Multiple Variables
- Request a List of Available Maptile Imagery
- Request a Maptile

## Sample API Interactions
In each of these examples, the {subscription key} is the one provided by the Azure API Management system.

## Request a List of Available Variables
Below is an example using curl to fetch the list of forecast variables. The list of variables is long and growing. Note: The results below are truncated for brevity:

```console
$ curl -X GET "https://api-prd.fathym.com/api/v0/apivariables" -H "Ocp-Apim-Subscription-Key: {subscription key}"
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
{ "name": "CategoricalRain",
"doc": "1 if there is rain, 0 otherwise.",
"level": "Surface",
"units": "boolean"
},

[… SNIP …],

{
"name": "DewPoint",
"doc": "DewPoint at 2 meters",
"level": "2Meters",
"units": "k"
},

[… SNIP …],

{
"name":
"LongWaveRadiation",
"level": "Surface",
"doc": "downward long wave rad. flux",
"units": "W/m2"
},

[… SNIP …],

{
"name": "PrecipitationRate",
"doc": "Precipitation Rate (kg/m^2/s)",
"level": "Surface",
"units": "kg/m^2/s"
},

[… SNIP …],

{
"name": "RoadState",
"doc": "Get projected road state (string) based on weather variables",
"level": "Surface",
"units": "unknown"
},
{ "name": "RoadTemperature",
"doc": "Road Temperature in Kelvin",
"level": "Surface",
"units": "kelvin"
},

[… SNIP …],

{
"name": "Temperature",
"doc": "Temperature (kelvin) at surface",
"level": "Surface",
"units": "k"
},

[… SNIP …],

{
"name": "WindDirection",
"doc": "Wind Direction in degrees (0 is true north)",
"level": "10Meters",
"units": "degrees"
},
{
"name": "WindSpeed",
"doc": "Wind Speed (m/s)",
"level": "10Meters",
"units": "m/s"
},

[… SNIP …]

]

```

## Request Multiple Variables
Below is an example of forecasting temperature, precipitation, and road state in Boulder, CO, USA one hour from current time and Denver, CO, USA two hours from current time:


```console
$ curl "https://fathym-forecast-int.azure-api.net/api/v0/point-query" \
-H "Content-Type: application/json" \
-H "Ocp-Apim-Subscription-Key: {subscription key}" \
--data-ascii
'{"variables":[{"name":"Temperature","level":"Surface"},{"name":"PrecipitationRate","level":"Surface"},{"name":"RoadState","level":"Surface"}],"points": [{"lat":40.021296,"lng":-105.264607,"relativeseconds":3600},{"lat":39.753299,"lng":-104.992361,"relativeseconds":7200}]}'
[
{
"name": "Temperature",
"level": "Surface",
"values": [
301.0521415710449,
298.94481951395676
]
},
{
"name": "PrecipitationRate",
"level": "Surface",
"values": [
0,
0
]
},
{
"name": "RoadState",
"level": "Surface",
"values": [
"Dry",
"Dry"
]
}
]

```

Notably, this example queries just three variables at just two points in space and time. In general, a query can be for any forecasted variables at any set of points. Querying thousands of points (e.g., along an interstate trucking route, or the locations of a set of retail establishments) is not only possible, but fast — responses in about one second are possible. For the purpose of forecasting along routes, a route is a list of points in space and time.

## Request a List of Available Maptile Imagery
The Forecast API delivers maptile imagery based on forecasted data. These images are suitable for display on, for example, Azure Maps. To discover what imagery is currently available, request a maptile manifest.

```console
$ curl "https://fathym-forecast-int.azure-api.net/api/v0/maptile-manifest " \
-H "Ocp-Apim-Subscription-Key: {subscription key}"
{
"CloudCover_EntireAtmosphere": [
1574186400,
1574187300,
1574188200,
1574189100,
1574190000,
1574190900,
1574191800,
1574192700
],
"PrecipitationRate_Surface": [
1574186400,
1574187300,
1574188200,
1574189100,
1574190000,
1574190900,
1574191800,
1574192700
],
"Temperature_Surface": [
1574186400,
1574187300,
1574188200,
1574189100,
1574190000,
1574190900,
1574191800,
1574192700
],
"Visibility_Surface": [
1574186400,
1574187300,
1574188200,
1574189100,
1574190000,
1574190900,
1574191800,
1574192700
],
"Wind_10Meters": [
1574186400,
1574187300,
1574188200,
1574189100,
1574190000,
1574190900,
1574191800,
1574192700
]
}

```
Currently, five variables (layers) are available (as seen in the response above), and for each of those five variables, eight forecast times (approximately every 15 minutes for the next two hours) have available imagery.

Data from the manifest can be used to request maptiles, as seen below.

## Request a Maptile
In general, the URL scheme for requesting maptiles is:
/api/v0/maptile-fetch/{variable}/{t}/{z}/{x}/{y}.png

Where:

- {variable} is a variable from the maptile manifest (e.g., "Temperature_Surface")
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

Note the parameters "Temperature_Surface" and 1574186400 come from the maptilemanifest as above.

```console
$ curl "https://fathym-forecast-int.azure-api.net/api/v0/maptilefetch/Temperature_Surface/1574186400/0/0/0.png" \
-H "Ocp-Apim-Subscription-Key: {subscription key}" \
--output tile-0-0-0.png
```

Then, ./tile-0-0-0.png is:

![API Tile 0](/img/screenshots/API-tile0.png)

At zoom-level `1`, there are four tiles:

![API Tile 1](/img/screenshots/API-zoom1-1.png)
![API Tile 2](/img/screenshots/API-zoom1-2.png)
![API Tile 3](/img/screenshots/API-zoom1-3.png)
![API Tile 4](/img/screenshots/API-zoom1-4.png)

And so on, up to the resolution of available forecast data (approximately zoom level 6 over the continental US and zoom level 3 everywhere else).

