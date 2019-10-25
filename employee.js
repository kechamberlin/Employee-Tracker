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
                "Add Employee",
                "Add Role",
                "Add Department",
                "EXIT"
            ]
        })
        .then(function (answer) {
            if (answer.whatDo === "View All Employees") {
                console.log("view all employees");
                viewEmployees();
            }
            else if (answer.whatDo === "View All Roles") {
                console.log("view all roles");
                viewRoles();
            }
            else if (answer.whatDo === "View All Departments") {
                console.log("view all departments");
                viewDepartments();
            }
            else if (answer.whatDo === "Add Employee") {
                console.log("add an employee");
                addEmployee();
            }
            else if (answer.whatDo === "Add Role") {
                console.log("add a role");
                addRole();
            }
            else if (answer.whatDo === "Add Department") {
                console.log("add a department");
                // addDepartment();
            }
            else {
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//       View All Departments
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, results) {
        if (err) throw err;
        console.table(results);
        start();
    })
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//           Add Employee
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function addEmployee() {
    // prompt for info about the new employee
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is their first name?"
            },
            {
                name: "last_name",
                type: "input",
                message: "What is their last name?"
            },
            {
                name: "role_id",
                type: "input",
                message: "What is their role?"
            },
            {
                name: "manager_id",
                type: "input",
                message: "Who is their manager?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: answer.role_id || 0,
                    manager_id: answer.manager_id || 0
                },
                function (err) {
                    if (err) throw err;
                    console.log("You added a new employee!");
                    start();
                }
            );
        });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//            Add Role
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function addRole() {
    // prompt for info about the new role
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is the new role?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the new role's salary?"
            },
            {
                name: "department_id",
                type: "input",
                message: "Under what department does this role fall under?"
            }
        ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: answer.title,
                    salary: answer.salary,
                    department_id: answer.department_id || 0
                },
                function (err) {
                    if (err) throw err;
                    console.log("You added a new role!");
                    start();
                }
            );
        });
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//          Add Departments
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function addDepartment() {
    // prompt for info about the new department
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is their first name?"
            },
            {
                name: "last_name",
                type: "input",
                message: "What is their last name?"
            },
            {
                name: "role_id",
                type: "input",
                message: "What is their role?"
            },
            {
                name: "manager_id",
                type: "input",
                message: "Who is their manager?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.first_name,
                    last_name: answer.last_name,
                    role_id: answer.role_id || 0,
                    manager_id: answer.manager_id || 0
                },
                function (err) {
                    if (err) throw err;
                    console.log("You added a new employee!");
                    start();
                }
            );
        });
}




// LEFT TO DO: [ADD] employees, roles, and departments; [UPDATE] employee roles, WRITE readme file.
    // [ADD] functions are comparable to postAuction in greatBay activity


// BONUS: [UPDATE] employee managers, [VIEW] employees by manager, [DELETE] departments, roles, and employees, [VIEW] total salary budget
