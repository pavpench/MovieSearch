## MovieSearch.com
Movie search client supported by Backend for operating requests to a 3rd API 

#### Initiating the project and available scripts
Project is divided in Client and Server side 

 `npm instal`
in both folders for *installing* dependancies

 `npm start`
For starting the client

`npm run serve`
For running the server. Server is set to run on http://localhost:3030/ 
*nodemon* is included as a dependancy for development convenience

#### Implementation

The applications takes 4 variables which are validated for a specific search(based on KeyWord or MovieTitle) in order to fetch from the Server which
transforms the request in the appropriate format and transfers it to the 3rd party API.
ContextAPI is used on Client side in order to render the response into Cards.
 
#### Work in Progress
* Database is to be included in order to store preset of requests and reduce request to the 3rd party API.
* Search module to be implemented in order to check if the Input data from the user is available in the Database and Request it from API if not available.


#### Shout out 
to *http://omdbapi.com/* for provisioning a 3rd party API for this excercise
