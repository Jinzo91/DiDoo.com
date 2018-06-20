# DiDoo.com
The DiDoo.com project contains frontend, backend and database.

## Setup (before first run)

Go to your project root folder via command line
```
cd path/to/workspace/DiDoo.com
```

**Install node dependencies**

```
Open command shell in backend and frontend fodlers and run: npm install
```

**Set up your database**

* Create a new directory where your database will be stored (it's a good idea to separate data and business logic - the data directory should be on a different place than your app)
* Start the database server
```
mongod --dbpath relative/path/to/database
```
* Create all database schemes and import data to begin with
```
Open command shell in the backend folder and run: mongorestore dump/
```
