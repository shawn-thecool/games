const spec = {
  boss: {
    name: "보스",
    hp: 1000,
    ap: 10,
    status: "normal", // normal, attack, hold, stun
    fps: 1000
  },
  users: [
    {
      id: "A",
      name: "player 1",
      hp: 1000,
      ap: 10,
      dp: 0,
      fps: 1000,
      gage: 0,
      active:{
        id:'active A',
        name:'active 1',
        methods:[]
      },
      passive:{
        id:'passive A',
        name:'passive 1',
        methods:[]
      }
    }
  ]
};
