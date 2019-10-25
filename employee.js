var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "employee_trackerDB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});


// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt({
            name: "whatDo",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Roles",
                "View All Departments",
                "EXIT"]
        })
        .then(function (answer) {
            if (answer.whatDo === "View All Employees") {
                console.log("view all employees");
                viewEmployees();
            }
            else if (answer.whatDo === "View All Roles") {
                console.log("view all roles");
                viewRoles();
            // }
            




            } else {
                connection.end();
            }
        });
}



// ==============================
//         MAIN FUNCTIONS
// ==============================

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//        View All Employees
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, results) {
        if (err) throw err;
        console.table(results);
        start();
    })
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//        View All Roles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function viewRoles() {
    connection.query("SELECT * FROM role", function (err, results) {
        if (err) throw err;
        console.table(results);
        start();
    })
}