export const mockEvent = { 
  event_id: 1,
  event_nm: 'Women\'s 7.5 km Sprint',
  event_dt:'2018-02-10',
  stat_cd: 'NOT_STARTED', 
  user_selection: '',
  participants : [
    { event_participant_id: 1, event_id:1, participant_nm: 'Megan McJames', country: 'USA', points: 5, odds: 0.5, finish: 1 },
    { event_participant_id: 2, event_id:1 , participant_nm: 'Mikaela Shiffrin', country: 'USA', points: 2, odds: 0.2 , finish: 3},
    { event_participant_id: 3, event_id:1 , participant_nm: 'Linsey Vonn', country: 'USA', points: 1, odds: 0.1, finish: 5},
    { event_participant_id: 4, event_id:1 , participant_nm: 'Other', country: '', points: 3, odds: 0.3, finish: 2}
  ]
}