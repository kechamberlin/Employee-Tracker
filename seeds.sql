USE employee_trackerDB;

INSERT INTO user_group (id, name)
VALUES (1, "Hallowed Oblivion"),
(2, "Sacred Ancients"),
(3, "Hammers of the Fox"),
(4, "Division of the Sacred"),
(5, "Forge Hawks");

INSERT INTO user (id, username, user_group_id)
VALUES (1, "Kearen", 1), -- Umeyarus is in Hallowed Oblivion group
(2, "Ilinorin", 1), -- Umeyarus is in Hallowed Oblivion group
(3, "Keanelis", 1), -- Umeyarus is in Hallowed Oblivion group
(4, "Vasandoral", 1), -- Umeyarus is in Hallowed Oblivion group
(5, "Balzeiros", 2), -- Umeyarus is in Sacred Ancients group
(6, "Heiris", 2), -- Umeyarus is in Sacred Ancients group
(7, "Omaydark", 2), -- Umeyarus is in Sacred Ancients group
(8, "Adgolor", 3), -- Umeyarus is in Hammers of the Fox group
(9, "Naesalor", 3), -- Umeyarus is in Hammers of the Fox group
(10, "Liajyre", 3), -- Umeyarus is in Hammers of the Fox group
(11, "Quira", 3), -- Umeyarus is in Hammers of the Fox group
(12, "Xyrzana", 4), -- Umeyarus is in Division of the Sacred group
(13, "Bryna", 4), -- Umeyarus is in Division of the Sacred group
(14, "Sylkrana", 5), -- Umeyarus is in Forge Hawks group
(15, "Keywynn", 5), -- Umeyarus is in Forge Hawks group
(16, "Ulacaryn", 5), -- Umeyarus is in Forge Hawks group
(17, "Qiynore", 5), -- Umeyarus is in Forge Hawks group
(18, "Gregwyn", 5), -- Umeyarus is in Forge Hawks group
(19, "Vallana", 5), -- Umeyarus is in Forge Hawks group
(20, "Umeyarus", 1); -- Umeyarus is in Hallowed Oblivion group

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