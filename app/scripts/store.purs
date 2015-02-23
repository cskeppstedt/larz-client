module Store
  ( Match
  , Team
  ) where

type Match = {
    id :: String,
    team1 :: Team,
    team2 :: Team,
    winning_team :: Char
  }

type Team = {
    
  }
