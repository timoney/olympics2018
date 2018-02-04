/*2/25 Gold Medal count
  Norway +150
  Germany +160
  USA +500
  Canada +700*/

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Gold Medal count', '2018-02-26', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Norway', '', 20, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Germany', '', 30, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'USA', '', 50, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Canada', '', 65, 0.0, null);

/* 2/10
Biathlon- Women's 7.5km Sprint
  Anastasiya Kuzmina (SVK) +150
  Laura Dahlmeier (GER) +450
  Darya Domracheva (BLR) +650
  Kaisa Mäkäräinen (FIN) +650
  Denise Herrmann (GER) +750*/

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Biathlon- Women\'s 7.5km Sprint', '2018-02-10', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Anastasiya Kuzmina', 'SVK', 8, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Laura Dahlmeier', 'GER', 8, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Darya Domracheva', 'BLR', 19, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Kaisa Mäkäräinen', 'FIN', 19, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Denise Herrmann', 'GER', 20, 0.0, null);

/* 2/11
Luge- Men's Singles ****
  Felix Loch (GER)  -115
  Wolfgang Kindl (AUT)  +225
  Semen Pavlichenko (OAR) +650
  Roman Repilov(OAR)  +800*/

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Luge- Men\'s Singles', '2018-02-11', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Felix Loch', 'GER', 6, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Wolfgang Kindl', 'AUT', 11, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Semen Pavlichenko', 'OAR', 19, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Roman Repilov', 'OAR', 23, 0.0, null);

/*2/12
Alpine Skiing- Ladies' Giant Slalom
  Mikaela Shiffrin (USA) +150
  Tessa Worley (FRA) +500
  Viktoria Rebensburg (GER) +500
  Federica Brignone (ITA) +700
  Sofia Goggia (ITA) +1600*/

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Alpine Skiing- Ladies\' Giant Slalom', '2018-02-12', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Mikaela Shiffrin', 'USA', 8, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Tessa Worley', 'FRA', 17, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Viktoria Rebensburg', 'GER', 14, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Federica Brignone', 'ITA', 20, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Sofia Goggia', 'ITA', 40, 0.0, null);

/*2/13
Curling- Mixed Doubles 
  Canada +110
  Switzerland +350
  China +350
  USA +800
  Norway +1000*/

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Curling- Mixed Doubles', '2018-02-13', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Canada', '', 7, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Switzerland', '', 13, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'China', '', 13, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'USA', '', 22, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Norway', '', 25, 0.0, null);

/*2/14
Snowboard- Men's Halfpipe
  Shaun White 3 USA
  Ayumu Hirano 4 JPN
  Yuto Totsuka 4.5 JPN
  Ben Ferguson 7 USA
  Scotty James 11 AUS*/

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Snowboard- Men\'s Halfpipe', '2018-02-14', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Shaun White', 'USA', 7, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Ayumu Hirano', 'JPN', 9, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Yuto Totsuka', 'JPN', 12, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Ben Ferguson', 'USA', 20, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Scotty James', 'AUS', 25, 0.0, null);

/*
2/15
Figure Skating- Pair Skating
  Savchenko / Massot 1.90 GER
  Wenjing / Cong 2.00 CHN
  Tarasova / Morozov 5.00 OAR
  Duhamel / Radford 9.00 CAN*/

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Figure Skating- Pair Skating', '2018-02-15', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Savchenko / Massot', 'GER', 6, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Wenjing / Cong', 'CHN', 7, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Tarasova / Morozov', 'OAR', 13, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Duhamel / Radford', 'CAN', 21, 0.0, null);

/*
2/16
Cross-Country Skiiing- Men's 15km Free
  Maurice Manificat (FRA) +300
  Martin Johnsrud Sundby (NOR) +350
  Dario Cologna (SUI) +500
  Sergei Ustyugov (RUS) +700
  Simen Hegstad Krüger (NOR) +900 */

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Cross-Country Skiiing- Men\'s 15km Free', '2018-02-16', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Maurice Manificat', 'FRA', 12, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Martin Johnsrud Sundby', 'NOR', 13, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Dario Cologna', 'SUI', 17, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Simen Hegstad Krüger', 'NOR', 24, 0.0, null);

/*
2/17
Skeleton- Women  
  Jacqueline Lolling 1.95 GER
  Elisabeth Vathje 3.90 CAN
  Tina Hermann 4.90 GER
  Mirela Rahneva 6.35 CAN*/

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Skeleton- Women', '2018-02-17', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Jacqueline Lolling', 'GER', 6, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Elisabeth Vathje', 'CAN', 9, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Tina Hermann', 'GER', 11, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Mirela Rahneva', 'CAN', 19, 0.0, null);

/*2/18
Freestyle Skiing- Men's Aerials
  Guangpu Qi 3.00 (CHN)
  Anton Kushnir 3.25 (BLR)
  Maxim Burov 4.00 (OAR)
  Zongyang Jia 5.50 (CHN)*/

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Freestyle Skiing- Men\'s Aerials', '2018-02-18', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Guangpu Qi', 'CHN', 7, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Anton Kushnir', 'BLR', 7, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Maxim Burov', 'OAR', 9, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Zongyang Jia', 'CHN', 13, 0.0, null);

/*2/19
Bobsleigh- 2-man   
  Justin Kripps 3.00 (CAN)
  Francesco Friedrich 3.30 (GER)
  Nico Walther 4.00 (GER)
  Johannes Lochner 4.50 (GER)*/

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Bobsleigh- 2-man', '2018-02-19', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Justin Kripps', 'CAN', 7, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Francesco Friedrich', 'GER', 7, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Nico Walther', 'GER', 9, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Johannes Lochner', 'GER', 11, 0.0, null);

/*2/20
Short Track Speed Skating- Ladies 3000m Relay
  South Korea 2.15
  China 3.15
  Netherlands 4.30 
  Canada 9.00*/

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Short Track Speed Skating- Ladies 3000m Relay', '2018-02-20', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'South Korea', '', 6, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'China', '', 10, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Netherlands', '', 11, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Canada', '', 20, 0.0, null);

/*
2/21
Freestyle Skiing- Men's Ski Cross
  Marc Bischofberger (SUI)5.50  
  Jean Frederic Chapuis (FRA)5.50
  Alex Fiva (SUI)7.50 
  Victor Oehling Norberg (SWE)9.00*/

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Freestyle Skiing- Men\'s Ski Cross', '2018-02-21', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Marc Bischofberger', 'SUI', 13, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Jean Frederic Chapuis', 'FRA', 13, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Alex Fiva', 'SUI', 17, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Victor Oehling Norberg', 'SWE', 20, 0.0, null);

/*2/22
Ice Hockey- Women
  USA -120
  Canada EVEN
  Finland +1600
  Olympic Athletes of Russia +1800*/

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Ice Hockey- Women', '2018-02-22', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'USA', '', 6, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Canada', '', 8, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Finland', '', 40, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Olympic Athletes of Russia', '', 42, 0.0, null);

/*
2/23
Speed Skating- Men's 1,000m
  Kjeld Nuis 1.90 (NED)
  Kai Verbij 4.00 (NED)
  Havard Holmefjord Lorentzen 4.50 (NOR)
  Koen Verweij 11.00 (NED)*/

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Speed Skating- Men\'s 1,000m', '2018-02-23', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Kjeld Nuis', 'NED', 6, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Kai Verbij', 'NED', 12, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Havard Holmefjord Lorentzen', 'NOR', 13, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Koen Verweij', 'NED', 25, 0.0, null);

/*
2/24
Curling- Men ****
  Canada -110
  Sweden +250
  Switzerland +1400
  Great Britain +1400
  Norway +1400
  USA +2000 */


INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Curling- Men', '2018-02-24', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Canada', '', 6, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Sweden', '', 11, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Switzerland', '', 40, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Great Britain', '', 40, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Norway', '', 40, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'USA', '', 60, 0.0, null);

/*
2/25
Ice Hockey- Men
  Olympic Athletes of Russia +225
  Canada +275
  Sweden +400
  Finland +800
  Czech Republic +900
  USA +900*/

INSERT INTO event (event_nm, event_dt, stat_cd)
VALUES ('Ice Hockey- Men', '2018-02-25', 'NOT_STARTED');

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Olympic Athletes of Russia', '', 9, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Canada', '', 12, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Sweden', '', 15, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Finland', '', 22, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'Czech Republic', '', 24, 0.0, null);

INSERT INTO event_participant (event_id, participant_nm, country, points, odds, finish)
VALUES ((select max(event_id) from event), 'USA', '', 24, 0.0, null);

