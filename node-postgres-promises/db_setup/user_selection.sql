CREATE TABLE user_selection (
  user_selection_id     serial primary key,
  user_id               int,
  event_id              int,
  event_participant_id  int
);

INSERT INTO USER_SELECTION (USER_ID, EVENT_ID, EVENT_PARTICIPANT_ID) 
VALUES (1, 1, 1);