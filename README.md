CRUD operations on the given dataset using MongoDB
How to Run the Program:
1. Start MongoDB (if not running already):
mongod --dbpath /data/db
2. Run the script:
node mongodb_crud.js
3. Check the inserted data in MongoDB:
use companyDB
db.employees.find().pretty()
