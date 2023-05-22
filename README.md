# EWD Assignment-2 : Movie App Backend API Develpment 
This is the project for Enterprise Web Development Assignment-2 submission consisting of API's for the react frontend for movie application where users can search for movies/tv series and can see trending movies and search through TV series and movies available.

This project is an extension of the EWD API Labs,
link to the labs repo :
https://github.com/20100850-ganesh/webapi_repo.git

The labs were run on the GitHub CodeSpaces using containers.
Based on the labs, I have built this API for my Assignment-1 React Front End application.
My Frontend app does not have anything related to users, so I did not implement the user related API functions, however the labs do contain solutions to the exercises and all other authentication implementation.



## Features

- Trending : 
    In the Trending Page users can catch current hot trending Movies/TV series and its the default landing page.There will be 10 paginated pages of results for current trending content. All the content will have respective ratings above the cardand users can click to view futher deatils of the content with information about it and cast/crew. Also users can click on the button below to watch the trailer.
- Movies :
    In the movies page, the user is able to view only movies and can navigate through several thousands of pages. Each movie card can be clicked to view further details about the movie. 
- TV Series :
    In the TV Series page, the user is able to view only TV series and can navigate through several thousands of pages. Each card can be clicked to view further details about the TV Series. 
- Search :
    In this page, user can search for a specifi movie/TV Series in the search bar and the results will be populated. In the movies tab only movie search results will be displayed, but if TV Series tab is selected the results will be of only TV Series.




## Installation

Install my-project with npm

Clone the github repo:
```bash
  https://github.com/20100850-ganesh/wedassign.git
  cd movies-api
```

Install Dependencies
```bash
  npm install
```
Running the build

```bash
  npm start
```
    
## Accessing the Web App

Links for the deployed project

React Front End - MovieApp:

```
  https://capable-hummingbird-a83dd1.netlify.app/
```

BackEnd API node.js project deployed at:
```
  https://ewd-assign2.onrender.com
```



## API Reference

#### Get all movies

```http
  GET /movies
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get only the Trending Latest Movies

```http
  GET /trending
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |


#### Get all the TV Series
```http
  GET /series
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Search for Movies/TV Series
```http
  POST /search
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

While doing the POST /search , the body parameters should be as follows : 
{
  "query": "batman",
  "type": "movie",
  "page": 1
}

The query is the string you want to search for ,
The type would be either "tv" or "movie" ,
The page is the page number for the search result. 
## Authors

- [@HariVenkataSaiGaneshLolla](https://github.com/20100850-ganesh)
- SETU Roll Number : W20100850.

