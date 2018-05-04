# YelpFusion

The YelpFusion is about the fusion view of pinterest ui and yelp bussinesses api.


## Basic Application Structure

Applications that target a single toolkit will have the following structure.

    app/                # Contains JavaScript and Theme code
        model/          # Data model classes
        view/           # Views as well as ViewModels and ViewControllers
        store/          # Data stores
        controller/     # Global / application-level controllers

    overrides/          # JavaScript code that is automatically required

    resources/          # Assets such as images, fonts, etc.

## Getting started

- Install node.js(latest version 8.0)

- Install Sencha Cmd 6.5.3.6(https://www.sencha.com/products/extjs/cmd-download/)

- Download Extjs 6.5.1

## Steps to be followed after clone git

- Make sure node.js and sencha cmd installed of metioned versions

    ## Build app
    
    - Go  inside folder structure of views (eg:FolderAppPath/view) and build app.

    $ sencha app build

    ## Run app
     
      $ node app
      
      - App runs on port 1600(http://localhost:1600).

.


