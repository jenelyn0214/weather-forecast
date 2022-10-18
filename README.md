# Weather Forecast
![image](https://user-images.githubusercontent.com/62682071/196465525-50ad6c6a-7ab0-44bb-889a-17fcee7675a2.png)

## Setup

- Clone the repository on your computer
```
$ git clone git@github.com:jenelyn0214/weather-forecast.git
$ cd weather-forecast
```

- Install dependencies,
```
$ npm install --legacy-peer-deps
or 
$ yarn install --legacy-peer-deps
```

- Login to your Github and Auth0 account to create app by following the steps here: 

https://muthuannamalai.tech/how-to-add-a-github-social-connection-in-auth0

**Note:** In setting up the application in Auth0, disable other connections so only Github will display on login

![image](https://user-images.githubusercontent.com/62682071/196473388-c588c810-7cd1-45fd-b7c6-9f203a1eb73d.png)

- Login or create an account in openweathermap.org and you can generate API keys on this page:

https://home.openweathermap.org/api_keys

- Create a .env file in the root folder and set these variables: 
```
REACT_APP_DOMAIN=your_auth0_domain
REACT_APP_CLIENT_ID=your_auth0_client_id
REACT_APP_WEATHER_API_KEY=your_open_weather_api_key
```
**Note:** Setup on how to generate above keys are listed below.

- Run the project
```
$ npm start
```
