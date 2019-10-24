USE employee_trackerDB;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kris", "Chamberlin", 3, 1),
        ("Aleah", "Gonsalves", 1, 2),
        ("Daisy", "Dog", 4, 3),
        ("Mingas", "Galinas", 6, 4),
        ("Amber", "Goff", 8, 4),
        ("Jarrod", "Gaut", 5, 5),
        ("Tessa", "Overfelt", 2, 6),
        ("Sean", "Emery", 7, 7);

INSERT INTO department (name)
VALUES ("Sales"), 
        ("Legal"), 
        ("Engineering"), 
        ("Finance");


INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 90000, 1), 
        ("Salesperson", 50000, 1), 
        ("Lawyer", 100000, 2),
        ("Paralegal", 60000, 2), 
        ("Lead Engineer", 100000, 3),
        ("Software Engineer", 50000, 3),
        ("Lead Accountant", 75000, 4),
        ("Bookkeeper", 25000, 4);
