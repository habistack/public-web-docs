---
title: Getting Started - Evaluation Guide
hide_title: true
sidebar_label: Evaluation Guide
keywords:
    - weather
    - road weather
    - forecast evaluation
    - variables
    - ground weather forecast
    - weather intelligence
    - weather apis
hide_table_of_contents: true
---

# Fathym Habistack Forecast API Evaluation Guide
Evaluation Guide – Table of Contents
- What is Fathym’s Habistack Forecast API?
- What data variables are available?
- What are the possible outcomes/results for Road State?
- What is a combined categorical?
- What is the forecast’s geographic coverage?
- What is the forecast window?
- Which points are available for forecasts?
- Does the API allow for connections from Python?
- What are the available outputs for the API?
- How accurate is the data and is there data verification?
- Is documentation available?
- Is support available?

## What is Fathym’s Habistack Forecast API?
The Fathym Habistack Forecast API, known generally as Habistack, is a robust, feature-rich API that offers a powerful suite of weather and surface condition forecasting application development tools. The API provides forecasting capabilities over freely chosen locations in both space and time.

A wide array of user-selected weather variables is available for query, together with highly specialized surface condition variables derived from statistically based machine learning models. Forecasts from any combination of variables can be integrated into any imaginable customer application.

Habistack is a valuable addition to many data applications.

## What data variables are available?
In addition to the wide array of user selected HRRR and GFS weather model variables that users can query; the API delivers a unique suite of highly specialized forecast variables derived through statistically based machine learning models. These derived variables include road temperature, road state/condition, and a delay risk factor for destination arrival estimates.

**Derived Variables**
- Surface/Road state condition
- Road temperature
- Delay Risk (origin-destination)

**Weather Variables**
- Ambient temperature
- Precipitation amount
- Precipitation type
- Precipitation rate
- Wind direction
- Wind speed
- Wind gust
- Barometric pressure
- Relative Humidity
- Dew point
- Irradiance
- Snow depth
- Cloud Cover

## What are the possible outcomes/results for Road State?
 - Dry
 - Wet
 - Snow
 - Freezing Rain
 - Ice
 - Hail
 - Snow and Ice
 - Freezing Rain and Ice
 - Hail and Ice

## What is a combined categorical?
In general, a combined categorical is an efficient way to communicate information. A combined categorical is a "bitmask", which is a way to store multiple yes/no values in a single number. The idea is that the number is interpreted in binary (as a sequence of zeros and ones) with each binary digit (read: bit) indicating 1=yes or 0=no.

In practice, with 4 bits, there are 16 possibilities:
- 0: none
- 1: only snow
- 2: only ice pellets
- 3: snow and ice pellets
- 4: only freezing rain
- 5: snow and freezing rain
- 6: ice pellets and freezing rain
- 7: snow and ice pellets and freezing rain
- 8: only rain
- 9: snow and rain
- 10: ice pellets and rain
- 11: snow and ice pellets and rain
- 12: freezing rain and rain
- 13: snow and freezing rain and rain
- 14: ice pellets and freezing rain and rain
- 15: snow and ice pellets and freezing rain and rain

For example, when requesting a location in San Francisco, California, USA and the result is coming back as 0 in this field - the zero indicates that there is no snow, no ice pellets, no freezing rain, and no rain forecasted for that location and time.

## What is the forecast’s geographic coverage?
Forecast coverage is global, with higher resolution (3-km) coverage available over the continental United States (CONUS). Global coverage is available at a 13-km resolution. If you’re looking for higher resolution coverage over a certain region, contact us for a custom quote.

## What is the forecast window?
Habistack provides a 16-hour forecast window for continental US (CONUS) geography covered by the HRRR weather model and a 120-hour forecast window with the GFS global weather model. The API also offers the capability for 90-day historical queries. All forecasts are time-interpolated to the nearest second, when clients just cannot wait for the hourly updates offered by other forecast APIs.

## Which points are available for forecasts?
Habistack offers developers powerful weather forecasting capabilities over freely chosen locations across the globe, with any combination of variables. Potential use cases include, but are not limited to, individual point forecasts through time, as well as individual forecasts for large sets of locations, such as all Sam’s Club locations in the contiguous US. Also, dynamic routing features can extend forecast capabilities to user-selected transportation routes, supporting many potential applications targeting commercial transportation and travel where road and surface condition predictions impact planning and logistics.

In general, a query can be for any forecasted variables at any set of points. Querying thousands of points (e.g., along an interstate trucking route, or the locations of a set of retail establishments) is not only possible, but fast — responses in about one second are possible. For the purpose of forecasting along routes, a route is a list of points in space and time.

**Geospatial Capabilities**
- Point Forecast
- Multiple point forecast
- Route/alternative route forecast

## Does the API allow for connections from Python?
Yes, it does. You can use Python to send in a request nearly identical to one that works in the Try It Out section of the website. You do NOT have to include the quotation marks in the header  headers = {lcu-subscription-key: api_key_here} with your primary key.

If you include the quotation marks in the header  headers = {"lcu-subscription-key": "api_key_here"}, you will likely receive a 404 - Resource Not Found message.

## What are the available outputs for the API?
Habistack is a high-performance RESTful API that can be used to obtain forecasted values for a variety of variables at any set of points in space and time. When querying the API, the results you will receive back are in JSON.

Additionally, maptile output is compatible with all industry standard map overlay APIs such as Azure Maps, Google Maps, and OpenStreetMap.

## How accurate is the data and is there data verification?
Fathym’s verification studies have shown the following:

**Air Temperature Forecast Accuracy**
- +/- 1.0°C of a given observation over 18 hours
- +/- 2.0°C beyond 18 hours
- +/- 2.5°C in peak heat

**Road Temperature Forecast Accuracy**
- +/- 1.5°C of a given observation over 18 hours
- +/- 2.5°C beyond 18 hours
- +/- 2.5°C in peak heat

Fathym’s road-specific variables are carefully and continuously validated using third party and independent sources such as
weather stations.

Fathym validates overall forecast accuracy by cross-checking 60,000 points every hour as observed by worldwide
weather stations (1,000 stations, 15 hours of forecasts, 4 times per hour).

Fathym validates road temperature forecast accuracy by cross-checking 5,000 points per day against stations with infrared
cameras pointed at roads in various geographies.

Fathym has done studies comparing road state conditions to human-labeled Department of Transportation webcam images, establishing a greater than 90% accuracy of forecasting surface conditions.

The net effect of all this validation over time will be to train the machine learning model, aiding in increasing accuracy and granularity of data, which will yield continual improvements.

**Please read our 2019 verification study:**
https://blog.fathym.com/hubfs/DataVerification-08122019.pdf


## Is documentation available?
Yes, the API is fully documented. You can find documentation here: 
https://www.habistack.com/docs/getting-started/apisuptdoc

## Is support available?
Yes, customers can contact support staff who will respond within hours on weekdays. Email us at support@fathym.com.


