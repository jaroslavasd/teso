## The task
1. Using programming platform, create a short automated test suite (3-5 test cases will be sufficient) using following instructions:

* "Send http `GET` request to target url **http://ptsv2.com/t/candidateGetsCredentials/post** and read response body. This body will contain following fields:
  * `username`,
  * `password`,
  * `targetUrl`.

2. This `{ targetUrl }` endpoint uses _BASIC Authorization_ method. Send a `POST` request to `{ targetUrl }` using credentials received `{ username, password }` and create 3 testcases to validate response body.

### Recommendations for the task: 
* use of _NodeJS_ would be an advantage;
* use of "_jasmine_" framework: <https://jasmine.github.io/> would be an advantage;
* use of "_Axios_" package: <https://github.com/axios/axios> would be an advantage;

## How to run

```
git clone git@github.com:jaroslavasd/teso.git
cd teso
npm install
jasmine
```

## The output example
```
> jasmine
Randomized with seed 73983
Started
.....


5 specs, 0 failures
Finished in 8.036 seconds
Randomized with seed 73983 (jasmine --random=true --seed=73983)
```