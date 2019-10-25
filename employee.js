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
            }
            else if (answer.whatDo === "View All Departments") {
                console.log("view all departments");
                viewDepartments();
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

function postAuction() {
    // prompt for info about the item being put up for auction
    inquirer
      .prompt([
        {
          name: "item",
          type: "input",
          message: "What is the item you would like to submit?"
        },
        {
          name: "category",
          type: "input",
          message: "What category would you like to place your auction in?"
        },
        {
          name: "startingBid",
          type: "input",
          message: "What would you like your starting bid to be?",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
      ])
      .then(function(answer) {
        // when finished prompting, insert a new item into the db with that info
        connection.query(
          "INSERT INTO auctions SET ?",
          {
            item_name: answer.item,
            category: answer.category,
            starting_bid: answer.startingBid || 0,
            highest_bid: answer.startingBid || 0
          },
          function(err) {
            if (err) throw err;
            console.log("Your auction was created successfully!");
            // re-prompt the user for if they want to bid or post
            start();
          }
        );
      });
  }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//            Add Role
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//          Add Departments
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~






// LEFT TO DO: [ADD] employees, roles, and departments; [UPDATE] employee roles, WRITE readme file.
    // [ADD] functions are comparable to postAuction in greatBay activity


// BONUS: [UPDATE] employee managers, [VIEW] employees by manager, [DELETE] departments, roles, and employees, [VIEW] total salary budget
