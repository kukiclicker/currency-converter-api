# Currency-converter-api


## About The Project

<p id="about-the-project">
This is a simple NestJS-based API for currency conversion using the Open Exchange Rates API.
</p>


### Used technologies
<p id="used-technologies">


[![Nest][Nest.js]][Nest-url] [![Node][Node.js]][Node-url]
[![TypeScript][TypeScript.js]][TypeScript-url]
[![Vercel][Vercel-img]][Vercel-url]
</p>

## Getting Started
In order to develop this project following dependencies were installed:
<ul>
    <li>Node.js</li>
    <li>NestCLI</li>

    
</ul>

### Node.js
<p id="node">
The package manager of choice in this project was npm. This package manager comes
with node.js.<br>

* To check version of npm use command:
  ```sh
  npm --version
  ```
</p>

### Nest.js
<p id="nest">

#### Instalation

Next step is to install Nest.js framework for API development.   <br>

* Installation command:
  ```sh
  npm i -g @nestjs/cli
  ```

#### New project

* Creating new Nest.js project:
  ```sh
  nest new project-name
  ```
This command create new project and populate the directory with initial Nest 
files, building a core structure of the project.

</p>

#### Running the application 
* Starting application in dev mode:
  ```sh
  npm run start:dev <application-name>
  ```
This command run main.ts file and logs the changes of the project automatically to console. 

#### Vercel 
Application is deployed on vercel platform. Vercel is a cloud platform and hosting service that specializes in simplifying the deployment and hosting of web applications, particularly those built with modern frontend frameworks and serverless functions. 
* Installing vercel:
  ```sh
  npm i -g vercel
  ```

## Exchange rates

This API uses https://openexchangerates.org/api/latest.json to gather the latest exchange rates. To fetch the data, you must be signed in on OpenExchange and register your application. The service will then provide you with an application key for authorization when reading data.

In Nest.js, data retrieval is executed using the "axios" module and the "get()" method
* Installing axios:
  ```sh
  npm install axios
  ```

* Calling get method:
  ```nestjs
  const response = await axios.get(this.apiUrl, {
        params: {
          app_id: this.apiKey,
        },
      });
  ```
    Here "apiUrl" represents link to the api and "apiKey" application key provided by OpenExchange .
## API link

https://currency-converter-e2g4zwyah-uros-projects-1ce427ee.vercel.app/

## API endpoints

This API has only one endpoint. The API accepts a POST request with three attributes in the body:<br>
* amount - the amount of money to exchange
* amount-currency - the currency of the money
* target-currency - the currency to convert into

 Example:<br>
 * Request body:
    ```json
    {
    "amount": 100,
    "amount-currency":"USD",
    "target-currency":"EUR"
    }
    ```
* Response body:
    ```json
    {
    "amount": 93.145,
    "currency": "EUR"
    }
    ```

To perform the exchange, you must provide all three parameters; otherwise, the server returns a status 400 error.

## Contact

<p id="contact">
Uros Mitrovic 
<br>LinkedIn: https://www.linkedin.com/in/uros-mitrovic-016a23208/
<br>Email: umitrovic22@gmail.com
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License
<p id="licence">
Distributed under the MIT License. See `LICENSE.txt` for more information.
</p>
<p align="right">(<a href="#readme-top">back to top</a>)</p>


[MongoDB-url]:https://www.mongodb.com/atlas/database
[Nest-url]:https://nestjs.com/
[TypeScript-url]:https://www.typescriptlang.org/
[Vercel-url]:https://www.typescriptlang.org/](https://vercel.com
[Node-url]:https://nodejs.org/en
[Nest.js]:https://img.shields.io/badge/Nest.js-20232A?style=for-the-badge&logo=nestjs&logoColor=FF0000
[Node.js]:https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=Node.js&logoColor=FFFFF
[MongoDB-Atlas]:https://img.shields.io/badge/MongoDB-20232A?style=for-the-badge&logo=MongoDB
[RabbitMQ]:https://img.shields.io/badge/RabbitMQ-20232A?style=for-the-badge&logo=rabbitmq
[TypeScript.js]:https://img.shields.io/badge/TypeScript-20232A?style=for-the-badge&logo=typescript
[Vercel-img]:https://img.shields.io/badge/Vercel-20232A?style=for-the-badge&logo=vercel
