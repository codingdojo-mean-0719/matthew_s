class Card {
  constructor(suit, value, num) {
    this.suit = suit;
    this.value = value;
    this.num = num;
    if (num === 1) {
      this.value = "Ace";
    } else if (num === 11) {
      this.value = "Jack";
    } else if (num === 12) {
      this.value = "Queen";
    } else if (num === 13) {
      this.value = "King";
    } else {
      this.value = num;
    }
  }
  show() {
    console.log(`This is the ${this.value} (${this.num}) of ${this.suit}`);
  }
}

class Deck extends Card {
  constructor(suit, value, num) {
    super(suit, value, num);
    this.reset();
    this.shuffle();
  }
  reset() {
    this.deck = [];
    for (var i = 0; i <= 52; i++) {
      if (i < 13) {
        this.suit = "Spades";
        this.num = i + 1;
        this.value = i + 1;
        this.deck.push(new Card(this.suit, this.value, this.num));
      } else if (i >= 13 && i < 26) {
        this.suit = "Hearts";
        this.num = i % 13 + 1;
        this.value = i % 13 + 1;
        this.deck.push(new Card(this.suit, this.value, this.num));
      } else if (i >= 26 && i < 39) {
        this.suit = "Diamonds";
        this.num = i % 26 + 1;
        this.value = i % 26 + 1;
        this.deck.push(new Card(this.suit, this.value, this.num));
      } else if (i >= 39 && i < 52) {
        this.suit = "Clubs";
        this.num = i % 39 + 1;
        this.value = i % 39 + 1;
        this.deck.push(new Card(this.suit, this.value, this.num));
      }
    }
    return this.deck;
  }
  shuffle() {
    var counter = this.deck.length;
    while (counter > 0) {
      let idx = Math.floor(Math.random() * counter);
      counter--;

      let temp = this.deck[counter];
      this.deck[counter] = this.deck[idx];
      this.deck[idx] = temp;
    }

    return this.deck;
  }
  deal() {
    const singleCard = this.deck.pop();
    return singleCard;
  }
}

class Player extends Deck {
  constructor(name, hand, discard, reset, shuffle) {
    super(reset, shuffle);
    this.name = name;
    this.hand = [];
    this.discard = [];
  }

  getCards(amount) {
    this.shuffle();
    for (var i = 0; i < amount; i++) {
      let roundHand = this.deck.pop();
      this.hand.push(roundHand);
    }
    return this.hand;
  }

  discard() {
    this.discard.push(this.hand.pop());
  }
}


const newPerson = new Player("bob");
console.log(newPerson.getCards(4));