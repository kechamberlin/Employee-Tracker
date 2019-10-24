USE employee_trackerDB;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (),
        (),
        (),
        (),
        ();

INSERT INTO role (title, salary, department_id)
VALUES (), -- Umeyarus is in Hallowed Oblivion group
        (), -- Umeyarus is in Hallowed Oblivion group
        (), -- Umeyarus is in Hallowed Oblivion group
        (), -- Umeyarus is in Hallowed Oblivion group

INSERT INTO department (name)
VALUES (), -- Umeyarus is in Hallowed Oblivion group
        (), -- Umeyarus is in Hallowed Oblivion group
        (), -- Umeyarus is in Hallowed Oblivion group









INSERT INTO comment (id, text, user_id) -- this will be starting comments
VALUES (1, "Discussion Thread: Hallowed Oblivion", 1), -- Kearen's comment
(2, "Discussion Thread: Sacred Ancients", 5), -- Balzeiros's comment
(3, "Discussion Thread: Hammers of the Fox", 8), -- Adgolor's comment
(4, "Discussion Thread: Division of the Sacred", 12), -- Xyrzana's comment
(5, "Garage Sale", 9), -- Naesalor's comment
(6, "Discussion Thread: Forge Hawks", 14), -- Sylkrana's comment
(7, "I love this database", 1); -- Kearen's comment

INSERT INTO comment (text, user_id, responding_to_id) -- these will be responses
VALUES ("We rule!", 2, 1), -- Ilinorin's response to comment id 1
("We rock!", 6, 2), -- Heiris's response to comment id 2
("We are the best!", 11, 3), -- Quira's response to comment id 3
("We are awesome!", 13, 4), -- Bryna's response to comment id 4
("I am ready to buy!", 2, 5), -- Ilinorin's response to comment id 5
("We are amazing!", 18, 6), -- Gregwyn's response to comment id 6
("Me too!", 2, 7), -- Ilinorin's response to comment id 7
("No you don't!", 10, 8), -- Liajyre's response to comment id 8 (which itself is a response!)
("WOOOOO!", 7, 2); -- Omaydark's response to comment id 2