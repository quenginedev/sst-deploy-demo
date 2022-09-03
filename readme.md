# SST Deploy Action
This is a demo project used Deploy a serverless stack application on AWS

## Prerequisites
1. AWS Account
2. Node.js and NPM

## Installation (running locally)
1. In the projects path using the terminal run `npm install`
2. [Using this guide](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html), get and `AWS ACCESS KEY` and an `AWS SECRET KEY`
3. Create a `.env` file and paste in the following key value pairs
```env
AWS_ACCESS_KEY_ID = [AWS ACCESS KEY]
AWS_SECRET_KEY_ID = [AWS SECRET KEY]
AWS_DEFAULT_REGION = eu-west-2 # This is the default region for your Lambda functions
```
