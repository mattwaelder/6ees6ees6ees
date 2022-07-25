class RetiredForagerBee extends ForagerBee {
  constructor() {
    super();
    this.age = 40;
    this.color = 'grey';
    this.job = 'gamble';
    this.canFly = false;
  }
  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble() {
    // this.treasureChest.push('treasure');

    //super.forage() replaces the above code.

    super.forage();
  }
}
