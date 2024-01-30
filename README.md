# job-portal-api

# plan

- <a href="#the-app-overview" > The app overview <a/>
- <a href="#about-the-author" > About the author <a/>
- <a href="#dependencies" > Dependencies <a/>
- <a href="#code-structure" > Code structure <a/>
- <a href="#routes" > Routes <a/>
- <a href="#links" > Links <a/>

# The app overview
The application is a LinkedIn clone for beginners developed with sails.js

# About the author 
+ [Github](https://github.com/Dr-Lab1) 
+ [X](https://x.com/@JoBahati) 
+ [Facebook](https://facebook.com/jonathan.kukwabantu.7)
+ [LinkedIn](https://www.linkedin.com/in/jonathan-kukwabantu-798238288/)

# Dependencies
*node.js*

*sails.js*

*sails-mysql*

*nodemon*

Copy these code on your dependencies list in package.json

    "@sailshq/lodash": "^3.10.3",
    "sails": "^1.5.9",
    "sails-hook-orm": "^4.0.0",
    "sails-hook-sockets": "^3.0.0",
    "sails-mysql": "^3.0.1"

And this on your scripts list in package.json

    "dev": "nodemon app.js"

# Code structure 
1. app.js
    
    The app's root

2. config/routes.js

    Serves to configure all routes in the app

3. api/controllers/CompanyController.js

    Serves to manage fonctionnalities and renders responses 

4. api/models/Company.js 

    Discuss with the db to CRUD

# Routes 

        "POST /companies"       : "CompanyController.create",
        "GET  /companies"       : "CompanyController.find",
        "GET  /company/:id"     : "CompanyController.findOne",
        "PUT  /company/:id"     : "CompanyController.update",
        "DELETE  /company/:id"  : "CompanyController.delete",

# Sails links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)
