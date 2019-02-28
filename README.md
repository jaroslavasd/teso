# teso

## The task

1. Using programming platform, create a short automated test suite (3-5 test cases will be sufficient) using following instructions:

* "Send http `GET` request to target url *{ http://ptsv2.com/t/candidateGetsCredentials/post }* and read response body. This body will contain following fields:
** username,
** password,
** targetUrl

2. This *{ targetUrl }* endpoint uses _BASIC Authorization_ method. Send a `POST` request to *{ targetUrl }* using credentials received *{ username, password }* and create 3 testcases to validate response body.

### Recommendations for the task: 
* use of NodeJS would be an advantage;
* use of "jasmine" framework: https://jasmine.github.io/ would be an advantage;
* use of "Axios" package: https://github.com/axios/axios would be an advantage;

## How to run

```
git clone git@github.com:jaroslavasd/teso.git
cd teso
cd yourRepoName/
npm install
jasmine
```