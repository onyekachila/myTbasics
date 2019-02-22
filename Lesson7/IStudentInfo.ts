// Interface Declaration

enum FootballClubLove {
  "ARSENAL",
  "BARCELONA",
  "REAL MADRID",
  "LIVERPOOL"
}

interface IStudentInfo {
  Name: string;
  State: string;
  Age: Number;
  clubSuppoerted: FootballClubLove;
}

export { IStudentInfo };
