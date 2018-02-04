CREATE TABLE config (
  config_id  serial primary key,
  type    varchar(50),
  key     varchar(50),
  value   varchar(4000)
);

insert into config (type, key, value) values ('GROUP', 'PyeongChang User Groups', 'Timoney Family');
insert into config (type, key, value) values ('GROUP', 'PyeongChang User Groups', 'Bank of America');
insert into config (type, key, value) values ('GROUP', 'PyeongChang User Groups', 'Friends');

insert into config (type, key, value) 
values 
('RULES', 'Timoney Family', 
'How it works:
1. Must make picks before February 10, 2018. 
2. If there is an entry fee, it must be payed by February 10, 2018. 
3. Each event will be worth x number of points as determined by the "Total Points" section.
4. Those points will be subdived among the event participants based on win probability.
5. If your pick wins, you will get "Winner Points" number of points.
6. Whoever has the most points at the end of competition will be the winner.
7. Prize money will be calculated once all entries are finalized. The total money will probably be broken down: 80% to 1st place and 20% to 2nd place.');

insert into config (type, key, value) values ('RULES', 'Bank of America', 'Bank of America Rules');
insert into config (type, key, value) values ('RULES', 'Friends', 'Friends Rules');

insert into config (type, key, value) values ('MESSAGE', 'Timoney Family', 'Timoney Message');
insert into config (type, key, value) values ('MESSAGE', 'Bank of America', 'Bank of America Message');
insert into config (type, key, value) values ('MESSAGE', 'Friends', 'Friends Message');
