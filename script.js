class Start {
  constructor() {
    this.playerName = "Kamu";
    this.botName = "udin";
    this.playerOption;
    this.botOption;
    this.winner = "";
  }

  //option bot awal
  set setBotOption(option) {
    this.botOption = option;
  }

  get getBotOption() {
    return this.botOption;
  }
  //option bot akhir

  //option player awal
  get getPlayerOption() {
    return this.playerOption;
  }

  set setPlayerOption(option) {
    this.playerOption = option;
  }
  //option player akhir

  botBrain() {
    const option = ["🖐", "✌", "✊"];
    const bot = option[Math.floor(Math.random() * option.length)];
    return bot;
  }

  winCalculation() {
    if (this.botOption == "🖐" && this.playerOption == "✌") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "🖐" && this.playerOption == "✊") {
      return (this.winner = this.botName);
    } else if (this.botOption == "✌" && this.playerOption == "🖐") {
      return (this.winner = this.botName);
    } else if (this.botOption == "✌" && this.playerOption == "✊") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✊" && this.playerOption == "🖐") {
      return (this.winner = this.playerName);
    } else if (this.botOption == "✊" && this.playerOption == "✌") {
      return (this.winner = this.botName);
    } else {
      return (this.winner = "SERI");
    }
  }

  matchResult() {
    if (this.winner != "SERI") {
      return `${this.winner} menang`;
    } else {
      return ` WAAHHH ${this.winner}, tidak ada yang menang lol`;
    }
  }
}

function pickOption(params) {
  const start = new Start();
  start.setPlayerOption = params;
  start.setBotOption = start.botBrain();
  start.winCalculation();

  // start.getBotOption = start.NamaRandom();

  const inGame = document.getElementById("inGame");
  const result = document.getElementById("result");

  inGame.textContent = "...";
  result.textContent = "...";

  setTimeout(() => {
    inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`;
    result.textContent = start.matchResult();
  }, 500);
}
const nama_bot = NamaRandom();

function NamaRandom() {
  const nama = ["udin", "nada", "babo, vina"];
  const random_nama = nama[Math.floor(Math.random() * nama.length)];
  // document.getElementById("result").innerHTML = random_nama;
  return random_nama;
}
