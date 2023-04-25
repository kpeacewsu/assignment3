const { sequelize, TimeSlot, Student } = require('../models');


const timeslots = [{
    startTime: "2023-05-01 09:00:00",
    endTime: "2023-05-01 10:00:00",
    availableSeats: 6
},
{
    startTime: "2023-05-01 10:00:00",
    endTime: "2023-05-01 11:00:00",
    availableSeats: 6
},
{
    startTime: "2023-05-01 11:00:00",
    endTime: "2023-05-01 12:00:00",
    availableSeats: 6
},
{
    startTime: "2023-05-01 13:00:00",
    endTime: "2023-05-01 14:00:00",
    availableSeats: 6
},
{
    startTime: "2023-05-01 14:00:00",
    endTime: "2023-05-01 15:00:00",
    availableSeats: 6
},
{
    startTime: "2023-05-01 15:00:00",
    endTime: "2023-05-01 16:00:00",
    availableSeats: 6
}


];


const students =
    [{
        firstName: 'John',
        lastName: 'K',
        projectTitle: 'Project 1',
        email: 'johndoe@email.com',
        phoneNumber: '555-123-4567'
    },
    {

        firstName: 'Chris',
        lastName: 'D',
        projectTitle: 'Project 2',
        email: 'chris@email.com',
        phoneNumber: '555-123-4667'
    },
    {

        firstName: 'Baby',
        lastName: 'Doe',
        projectTitle: 'Project 3',
        email: 'babyDoe@email.com',
        phoneNumber: '555-123-4577'
    },
    {

        firstName: 'Chris',
        lastName: 'B',
        projectTitle: 'Project 4',
        email: 'chrisb@email.com',
        phoneNumber: '555-123-4067'
    },
    {

        firstName: 'Bella',
        lastName: 'D',
        projectTitle: 'Project 5',
        email: 'johndoe1@email.com',
        phoneNumber: '555-123-4570'
    },
    {

        firstName: 'Nessie',
        lastName: 'Fillbert',
        projectTitle: 'Project 6',
        email: 'johndoe2@email.com',
        phoneNumber: '555-123-4571'
    },
    {

        firstName: 'John II',
        lastName: 'Doe',
        projectTitle: 'Project 7',
        email: 'johndoe3@email.com',
        phoneNumber: '555-223-4567'
    },
    {

        firstName: 'Jeep',
        lastName: 'Doe',
        projectTitle: 'Project 8',
        email: 'johndoe4@email.com',
        phoneNumber: '555-123-4588'
    },
    {

        firstName: 'John III',
        lastName: 'Doe',
        projectTitle: 'Project 9',
        email: 'johndoe5@email.com',
        phoneNumber: '555-123-4589'
    },
    {

        firstName: 'Jia',
        lastName: 'Doe',
        projectTitle: 'Project 10',
        email: 'johndoe6@email.com',
        phoneNumber: '555-123-4590'
    },
    {

        firstName: 'Kisha',
        lastName: 'Doe',
        projectTitle: 'Project 11',
        email: 'johndoe7@email.com',
        phoneNumber: '555-123-4591'
    },
    {

        firstName: 'Pop',
        lastName: 'Doe',
        projectTitle: 'Project 12',
        email: 'johndoe7@email.com',
        phoneNumber: '555-123-4592'
    },
    {

        firstName: 'Ana',
        lastName: 'Doe',
        projectTitle: 'Project 13',
        email: 'johndoe8@email.com',
        phoneNumber: '555-123-4593'
    },
    {

        firstName: 'Ayi',
        lastName: 'Doe',
        projectTitle: 'Project 144',
        email: 'johndoe89@email.com',
        phoneNumber: '555-123-4594'
    },
    {

        firstName: 'Doll',
        lastName: 'Doe',
        projectTitle: 'Project 15',
        email: 'johndoe10@email.com',
        phoneNumber: '555-123-4595'
    }, {

        firstName: 'Jenna',
        lastName: 'Doe',
        projectTitle: 'Project 16',
        email: 'johndoe1011@email.com',
        phoneNumber: '555-123-4596'
    }, {

        firstName: 'Ruhi',
        lastName: 'Doe',
        projectTitle: 'Project 17',
        email: 'johndoe12@email.com',
        phoneNumber: '555-123-4597'
    }, {

        firstName: 'Maggie',
        lastName: 'Doe',
        projectTitle: 'Project 18',
        email: 'johndoe13@email.com',
        phoneNumber: '555-123-4598'
    }, {

        firstName: 'Love',
        lastName: 'Doe',
        projectTitle: 'Project 19',
        email: 'johndoe1314@email.com',
        phoneNumber: '555-123-4599'
    }, {

        firstName: 'Luv',
        lastName: 'Doe',
        projectTitle: 'Project 20',
        email: 'johndoe14@email.com',
        phoneNumber: '555-123-4600'
    }, {

        firstName: 'Russel',
        lastName: 'Doe',
        projectTitle: 'Project 21',
        email: 'johndoe1415@email.com',
        phoneNumber: '555-123-4601'
    }, {

        firstName: 'Kriti',
        lastName: 'Doe',
        projectTitle: 'Project 22',
        email: 'johndoe141516@email.com',
        phoneNumber: '555-123-4602'
    }, {

        firstName: 'Kris',
        lastName: 'Doe',
        projectTitle: 'Project 23',
        email: 'johndoe19@email.com',
        phoneNumber: '555-123-4603'
    }, {

        firstName: 'Krystal',
        lastName: 'Doe',
        projectTitle: 'Project 24',
        email: 'johndoe20@email.com',
        phoneNumber: '555-123-4604'
    }, {

        firstName: 'Lily',
        lastName: 'Doe',
        projectTitle: 'Project 25',
        email: 'johndoe2024@email.com',
        phoneNumber: '555-123-4605'
    }, {

        firstName: 'Ria',
        lastName: 'Doe',
        projectTitle: 'Project 26',
        email: 'johndoe23@email.com',
        phoneNumber: '555-123-4606'
    }, {

        firstName: 'Juhi',
        lastName: 'Doe',
        projectTitle: 'Project 27',
        email: 'johndoe2325@email.com',
        phoneNumber: '555-123-4608'
    }, {

        firstName: 'Zia',
        lastName: 'Doe',
        projectTitle: 'Project 28',
        email: 'johndoe232526@email.com',
        phoneNumber: '555-123-4609'
    }, {

        firstName: 'Jamie',
        lastName: 'Doe',
        projectTitle: 'Project 29',
        email: 'johndoe45@email.com',
        phoneNumber: '555-123-4610'
    }, {

        firstName: 'Pope',
        lastName: 'Doe',
        projectTitle: 'Project 30',
        email: 'johndoe134@email.com',
        phoneNumber: '555-123-4611'
    }, {

        firstName: 'Amanda',
        lastName: 'Doe',
        projectTitle: 'Project 31',
        email: 'johndoe31@email.com',
        phoneNumber: '555-123-4612'
    }, {

        firstName: 'Lisa',
        lastName: 'Doe',
        projectTitle: 'Project 32',
        email: 'johndoe32@email.com',
        phoneNumber: '555-123-4613'
    }, {

        firstName: 'Laila',
        lastName: 'Doe',
        projectTitle: 'Project 33',
        email: 'johndoe323@email.com',
        phoneNumber: '555-123-4614'
    },
    {

        firstName: 'Adam',
        lastName: 'Doe',
        projectTitle: 'Project 34',
        email: 'johndoe34@email.com',
        phoneNumber: '555-123-4615'
    },

    {

        firstName: 'Nandia',
        lastName: 'Doe',
        projectTitle: 'Project 3435',
        email: 'johndoe35@email.com',
        phoneNumber: '555-123-4568'
    }
    ];
async function createTablesAndInsertData() {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');

        await dropTableIfExists(Student);
        await dropTableIfExists(TimeSlot);

        await createAndPopulateTable(TimeSlot, timeslots);
        await createAndPopulateTable(Student, students);

        console.log('All tables created and data inserted successfully.');
    } catch (error) {
        console.error('Error occurred while creating tables and inserting data:', error);
    }/* finally {
          await sequelize.close();
        }*/
}

async function dropTableIfExists(Model) {
    try {
        await Model.drop();
        console.log(`${Model.name} table dropped if exists.`);
    } catch (error) {
        console.error(`Error dropping ${Model.name} table if exists:`, error);
    }
}

async function createAndPopulateTable(Model, data) {
    try {
        await Model.sync({ force: true });
        await Model.bulkCreate(data);
        console.log(`${Model.name} table created and data inserted.`);
    } catch (error) {
        console.error(`Error creating ${Model.name} table and inserting data:`, error);
    }
}

module.exports = { createTablesAndInsertData };