# Example recipe book app integrating with Salesforce

Example Nuxt 3 App project using Salesforce as the Backend to store the recipe data. 

UI is build using Nuxt UI and Tailwind CSS ( comes with Nxut UI)


Salesforce Objects
Custom Object Name :Recipe__c

Fields:
Ingredients__c
Directions__c

## Pages :
-Index Page: 
    Display list of Recipies as Cards
    Create Recipe Slide Over + Nuxt Form
-[id] : View Decipie detials page

## Services
Salesforce Data Service:
udpate the .env file to set the useraccount to connect to SF

## Modules
Nuxt UI

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install


## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# yarn
yarn dev


## Production

Build the application for production:

```bash
# npm
npm run build

# yarn
yarn build



Locally preview production build:

```bash
# npm
npm run preview

# yarn
yarn preview

```

