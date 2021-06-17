# All-Auth-Passport
This is a demo of how you can incorporate multiple authentication strategies within the same document via passport.
The home page features a list of login methods that are available for demo.  The protected route can only be viewed 
when a valid login has been provided.  Normal registration and login is provided via a passport local strategy while 
other OAuth strategies are used when demoing the remaining third party login methods.

## General Breakdown
Refer to the following flowchart to see the login/authorization flow.  As you peruse the code base you will be able
to view notes and comments that outline the steps in this flow so that you can more easily digest all the steps
involved in setting up the different authentication methods.

![OAuth Flowchart](/images/OAuth_Flowchart.png)

Json-db has been setup as a mock single source database with promise query wrappers to emulate the steps typically involved when
calling to and from an external database.

## Dependencies

bcryptjs, cookie-session, ejs, express, morgan, node-json-db, passport, passport-local, passport-oauth (various third party strategies),
uuidv4

## Author
Matthew Fisher