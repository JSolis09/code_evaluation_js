# HAVEN Code Evaluation

## Introduction

This repository is intended to evaluate your skill level.  The exercises should be completed and submitted within 3 days of receiving the link to this repository.  Please fork this repository and submit a pull request when you are finished.
For each exercise there is a folder with a README.md file.  Please include any assumptions you make in the README.md file.  You may use any libraries you wish to complete the exercises.  Please include a package.json file with your submission.
Each exercise should run independently of the other exercises.  Please include instructions on how to run each exercise in the README.md file for each exercise.


## Exercise 1

When a user performs certain actions on the website, we need to inform the server.  

Create a React Component which executes an asynchronous function and returns a success or failure. 
After the action is completed successfully a POST API call is required.  The path for the API call is /company/{id}/update (where {id} is the id of the company the user belongs to.  This can be obtained from the Redux store).  
The POST contains a JSON object with the following:
```json
{
  state: "purchased"
}
```
If there is an error with the API call, it can be ignored.

We are looking for the core functionality of the component. You may need to make assumptions about the environment and the data.  Please include a README.md file with your assumptions and any other information you think is relevant.




## Exercise 2
Create a React Component to replicate the "Current Status" section from this [Figma Design](https://www.figma.com/file/9Dxb2gDtwuvNbxjAK23feR/Frontend-Developer---Dev-Test-Files?type=design&node-id=0%3A1&mode=design&t=YyKHn78KlXbxec0P-1e)  
You can assume that the values displayed are available in the Redux store.  You can also assume that the Redux store is available to the component.  You can use any libraries you wish to complete this exercise.  Please include a README.md file with any assumptions you make and any other information you think is relevant.

## Exercise 3

Implement the necessary classes to hold the following Data:

Device
```
{
  id: int,
  name: string,
  install_timestamp: string,
  status: string,
  install_location: int
}
```
Dwelling
```
{
  id: int,
  name: string,
  address: string,
  devices: all of the Devices installed in the Dwelling
}
```
Service Company
```
{
  id: int,
  name: string,
  address: string,
  dwellings: all of the Dwelling managed by the Service Company
}
```

Create a React Component to list all devices that are associated to a service company. The service company name should be at the top and the list should include the device name and the name of the dwelling it is installed in.
The data can be obtained via GET API calls.  The paths for the API calls are:
```
/service_company/{id}
/dwelling/{id}
/device/{id}
```
 You can use any libraries you wish to complete this exercise.  Please include a README.md file with any assumptions you make and any other information you think is relevant.  If you notice any areas where the data model or API could be improved, please include that in your README.md file as well.

## Exercise 4

Document the steps you followed to implement and test the previous two exercises.  Please include a README.md file with your documentation.

If you have any questions, please contact the person who sent you the link to this repository. Thank you for your time and effort.