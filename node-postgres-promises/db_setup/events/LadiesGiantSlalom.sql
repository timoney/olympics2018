INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Ladies Giant Slalom', '2018-02-12', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Mikaela Shiffrin', 'USA', 1, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Tessa Worley', 'FRA', 3, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Viktoria Rebensburg', 'GER', 3, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Federica Brignone', 'ITA', 4, 0.0, null);

