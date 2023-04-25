const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const timeSlotRoutes = require('./routes/timeSlotRoutes'); // Add this line
const db = require('./models');
const { createTablesAndInsertData } = require('./models/insertData');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/students', studentRoutes);
app.use('/api/time_slots', timeSlotRoutes);

async function main() {
  try {
    await db.sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    // Sync the database schema
    await db.sequelize.sync();
       // Create tables and insert data
       await createTablesAndInsertData(); 
    // Add a delay of 1 second to allow sync to complete
    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      
 
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();
