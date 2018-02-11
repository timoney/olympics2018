CREATE TABLE event (
  event_id    serial primary key,
  event_nm    varchar(50),
  event_dt    date,
  stat_cd     varchar(50)
);

ALTER TABLE event ADD COLUMN winner_url varchar(100);
ALTER TABLE event ADD COLUMN recap_url varchar(100);