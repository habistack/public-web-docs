---
slug: /
title: Introduction - Overview
hide_title: true
sidebar_label: Overview
keywords:
    - weather
    - road weather
    - ground weather forecast
    - weather intelligence
    - weather apis
hide_table_of_contents: true
---

# Introducing Habistack

Habistack is the most flexible, cloud-native forecast engine and API for delivering machine learning and statistics-based forecasts with any combination of variables.

Habistack’s cloud-based forecast engine can ingest data from any model or sensor, process that data through a machine learning algorithm and combine with the [Fathym Platform](https://www.fathym.com/docs) to launch applications from ready-made templates auto-populated with Habistack data.

![Habistack Architecture](https://www.fathym.com/iot/img/habistack_architecture.png)

Habistack combines the world’s best weather forecasts with statistics-based, machine-learning techniques to tackle large datasets, including road weather and surface condition forecasts.

Habistack brings together NOAA’s HRRR and GFS as a predictive weather forecast data stream with current conditions data from ground-based weather stations all over the US. This forecast model also incorporates historical sensor data from current-conditions sensors, establishing a combined forecast + IoT sensor machine learning model.

Habistack delivers a unique suite of highly specialized forecast variables derived through statistically-based machine learning models. These derived variables include road temperature, road state/condition, and a delay risk factor for destination arrival estimates.

![Habistack Variables](https://www.fathym.com/iot/img/habistack_variables.png)

Habistack draws from infrared and temperature sensors on roads to predict a **Road Temperature** derived variable for road surfaces anywhere in the world. 

Combining that temperature prediction with known weather variables such as recent precipitation, it outputs a **Road State** variable. For example, when road temperatures drop below freezing and precipitation is forecast, a Road’s State may be “Icy.”

Habistack also determines when a road will be too hot or too windy – outputting a derived variable for a road route’s potential **Delay Risk.**

**Habistack data outputs:** 

- Point and Multiple Point Forecasts 
- Geo-Fenced Area Forecasts 
- Route and Alternative Route Forecasts
- Road Temperature
- Surface / Road Condition 
- Weather Delay Risk
- 16 Hour CONUS Forecasts at 3-km Resolution 
- 120+ Hour Global Forecasts at 13-km Resolution

The Fathym platform offers open-source, pre-configured app templates and one-click, automated workflows to easily transform forecast data into dynamic apps and dashboards in the cloud.


