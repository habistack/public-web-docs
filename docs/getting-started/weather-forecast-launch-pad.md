---
title: Getting Started - Weather Forecast Launch Pad
hide_title: true
sidebar_label: Ready-To-Go Weather Forecast Launch Pad
keywords:
    - weather
    - road weather
    - ground weather forecast
    - weather intelligence
    - weather apis
    - api support
    - weather forecast
    - launch pad
hide_table_of_contents: true
---

# Ready-To-Go Weather Forecast Launch Pad

Fathym Habistack and Fathym Platform combine to give users an intuitive and comprehensive workflow for deploying applications integrated with Habistack APIs and also external APIs. Users can also take advantage of pre-configured automations that launch open-source dashboard templates auto-populated with Habistack forecast data.

## Low-Code Units (LCUs)
In Fathym’s system, pre-configured automations and launch pads are referred to as Low-Code Units (LCUs). Without getting bogged down in jargon, we will provide a quick overview here as you will see the term LCU pop up.

LCUs are essentially curated code packages that can be deployed to your Fathym enterprise, composable automations of all sorts of software components, configurations and services. These flexible packages are versatile and can range from instructions for creating repositories and scaffolding code, to installing API configurations or deploying cloud resources or app templates. They are building blocks for efficiently assembling and deploying applications in the cloud.

For example, there are LCUs for launching SPA starter apps, for setting up, scaffolding and deploying new repositories, for installing Google Tag Manager to an app, and for deploying containerized applications, CMS or databases on Azure. Individual LCU components are also combined to create launch pads – comprehensive and often full stack automations that drastically simplify the process of assembling and launching cloud-based applications for various application use cases. An example of this is the weather forecast launch pad.

## Weather Forecast Launch Pad

The weather forecast launch pad consists of a point forecast dashboard and route forecast application that are auto-populated with weather forecast data from Habistack when deployed. To install this package, we are simply going to ask the Thinky AI bot to do it.

Navigate to [Fathym Thinky AI](https://www.fathym.com/thinky)

If you have registered for Fathym already you can set your active enterprise, set your name, and agree to Responsible AI terms. 

![Enterprise Set](https://www.fathym.com/iot/img/screenshots/thinky_active_ent_set.png)

Click on LCU and then Find. 

![Thinky Initial Options](https://www.fathym.com/iot/img/screenshots/thinky_initial_assist_card.png)

![LCU Options](https://www.fathym.com/iot/img/screenshots/thinky_lcu_options.png)

Thinky will then provide a list of available LCU packages, but you can further filter the list by typing ‘weather forecast’.

Select Weather Forecast Launch Pad. 

![Thinky Forecast Launch Card](https://www.fathym.com/iot/img/screenshots/thinky_forecast_launch_card.png)

:::note
Alternatively, click the Install button and enter the full LCU package name in the chat: ```@fathym-it/lcu-habistack-launch-pad@thinky```
:::

Thinky then brings you through several steps to collect information. 

Many LCU packages collect various parameters to define and set the conditions of their operation. For example, as an LCU is installed Thinky can request information such as selecting a GitHub organization or Fathym project, or inputting API keys, a location or a container ID for Google Tag Manager. This enables Thinky to operate as a virtual developer and fully set everything up on your behalf.

For this launch pad, Thinky will first ask what (new or existing) project to deploy the package to. In this case, select the option to create a new project. Thinky will prompt you to select the GitHub organization you would like to fork code into and authorize GitHub if not authorized yet.

![Thinky New Project](https://www.fathym.com/iot/img/screenshots/thinky_create_new_project.png)

![Thinky GitHub Auth](https://www.fathym.com/iot/img/screenshots/thinky_gh_auth.png)

![Thinky GitHub Organization](https://www.fathym.com/iot/img/screenshots/thinky_gh_org_selection.png)

Thinky will then ask for your Habistack API key and provide a link that navigates to your [Habistack dashboard](https://www.fathym.com/dashboard/forecast/).

![Thinky IoT Launch](https://www.fathym.com/iot/img/screenshots/thinky_habistack_api_card.png)

Copy your API key and paste it in the chat. 

![Forecast API Keys](https://www.fathym.com/iot/img/screenshots/iot_api_keys.png)

Thinky will ask for a Geocodio API key. Geocodio is a third-part tool that provides an API for defining specific locations for American and Canadian addresses. You can sign up for free and easily fetch your API key (Thinky provides a link to the Geocodio API dashboard).  

![Geocodio API Keys](https://www.fathym.com/iot/img/screenshots/geocodio_api_keys.png)

To conclude the required steps for this launch pad, Thinky will ask you to enter the default location to load the data for. Enter a town or city (e.g., Boulder, Colorado) or perhaps the address for your house or apartment. 

At this point the launch is all set to run and will commence installation. 

![Habistack LCU Phases](https://www.fathym.com/iot/img/screenshots/thinky_habistack_gh_phases.png)

Once the launch pad deployment is complete, you can view the project in your [Fathym dashboard](https://www.fathym.com/dashboard/)

As you can, three routes have been deployed: /, /api, /forecast.

![Forecast Launch Pad Routes](https://www.fathym.com/iot/img/screenshots/habistack_routes_configured.png)

Under / is a point forecast dashboard fed by Habistack APIs of the location you defined with the Geocodio API. Click the launch button to open the dashboard in your browser.

![Forecast Data Dashboard](https://www.fathym.com/iot/img/screenshots/forecast_data_dashboard.png)

Under /api two API proxies are configured and feeding data from the Habistack and Geocodio APIs.

![Forecast API Routes](https://www.fathym.com/iot/img/screenshots/forecast_api_routes.png)

And under /forecast is a route forecast demo application fed by Habistack APIs. Click the launch button to open the application in your browser.

![Proadject Forecast Demo](https://www.fathym.com/iot/img/screenshots/proadject_forecast_demo.png)

In this application, you can easily specify a route through an origin, destination and start time; assess ML-derived forecast variables along the route for road temperature, road state, potential delay risk, crosswind risk, precipitation rate, snow depth and wind speed; and apply map layers for radar reflectivity, cloud cover, precipitation, temperature, visibility and wind.