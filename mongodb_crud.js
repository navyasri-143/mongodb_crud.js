const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'companyDB';
async function runCRUD()
{
 const client = new MongoClient(url);
 try {
 await client.connect();
 console.log("Connected to MongoDB!");
 const db = client.db(dbName);
 const employees = db.collection('employees');
 // **1. CREATE - Insert multiple documents**
 const employeeData = [
 { name: "Alice", position: "Developer", salary: 50000 },
 { name: "Bob", position: "Manager", salary: 70000 },
 { name: "Charlie", position: "Designer", salary: 60000 }
 ];
 await employees.insertMany(employeeData);
 console.log("Employees inserted successfully!");
 // **2. READ - Fetch all employees**
 const allEmployees = await employees.find().toArray();
 console.log("All Employees:", allEmployees);
 // **3. UPDATE - Modify an employee’s salary**
 await employees.updateOne({ name: "Alice" }, { $set: { salary: 55000 } });
 console.log("Alice's salary updated!");
 // **4. DELETE - Remove an employee**
 await employees.deleteOne({ name: "Charlie" });
 console.log("Charlie deleted from the database.");
 } catch (err)
 {
 console.error("Error:", err);
 } finally
 {
 // Close the database connection
 await client.close();
 console.log("Connection closed.");
 }
}
// Run CRUD operations
runCRUD();