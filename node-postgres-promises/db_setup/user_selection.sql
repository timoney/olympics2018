CREATE TABLE user_selection (
  user_selection_id     serial primary key,
  user_id               int,
  event_id              int,
  event_participant_id  int,
  row_stat_cd           varchar(50),
  creat_ts              timestamp
);

insert into user_selection (user_id, event_id, event_participant_id, row_stat_cd, creat_ts) 
VALUES (11, 10, 23, 'ACTIVE', current_timestamp);