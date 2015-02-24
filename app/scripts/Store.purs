module Store
  ( Match()
  , Team()
  , Player()
  , tmp
  ) where

type Match = { match_id :: String
             , team1 :: Team
             , team2 :: Team
             , winning_team :: String }

type Team = { players :: [Player] }

type Player = { deaths :: Number
              , hero_id :: String
              , heroassists :: Number
              , herokills :: Number
              , level :: Number
              , nickname :: String }

player name = { deaths: 0
              , hero_id: "asd"
              , heroassists: 5
              , herokills: 7
              , level: 23
              , nickname: name }

tmp :: Team
tmp = { players: [ player "skepparn_"
                 , player "schln"
                 , player "Adelsmansman" 
                 , player "Pacoloco"
                 , player "zwex" ] }

