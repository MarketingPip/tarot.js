// Polyfills modern JavaScript features (ES6+) for older browsers.
// Includes things like Promise, Map, Set, Array.from, Object.assign, etc.
// This ensures that code using modern JS features runs in IE11 and other older environments.
import 'core-js/stable/index.js';  

// Polyfills support for async functions and generators in older browsers.
// Babel transpiles async/await into generator functions that rely on regeneratorRuntime.
// Without this, code using async/await would throw ReferenceError in browsers like IE11.
import 'regenerator-runtime/runtime.js';

export class Tarot {
  constructor() {
    this.deck = [];
    this.currentSpread = [];
    this.customSpreads = new Map();
    this.isInitialized = false;
  }

  // Initialize the deck with cards
  initializeDeck(cards) {
    if (!Array.isArray(cards) || cards.length === 0) {
      throw new Error('Cards must be provided as a non-empty array');
    }

    // Validate that all items are TarotCard instances
   cards.forEach((card, index) => {
    if (typeof card !== 'object' || Array.isArray(card)) {
        throw new Error(`Item at index ${index} is not a valid TarotCard item. Must be a JSON object.`);
    }
    // Additional checks for TarotCard properties can be added here
});


    this.deck = cards;
    this.isInitialized = true;
    return this.deck;
  }

  // Validate deck is initialized before operations
  validateDeckInitialized() {
    if (!this.isInitialized || this.deck.length === 0) {
      throw new Error('Deck not initialized. Call initializeDeck() with cards first');
    }
  }

  // Validate spread exists
  validateSpreadExists(name) {
    if (!this.customSpreads.has(name)) {
      throw new Error(`Spread "${name}" not found. Add it using addSpread() first`);
    }
  }

  // Add a custom spread
  addSpread(name, { positions, description = null }) {
    if (typeof name !== 'string' || name.trim().length === 0) {
      throw new Error('Spread name must be a non-empty string');
    }

    if (!Array.isArray(positions) || positions.length === 0) {
      throw new Error('Positions must be a non-empty array of position names');
    }

    positions.forEach((position, index) => {
      if (typeof position !== 'string' || position.trim().length === 0) {
        throw new Error(`Position at index ${index} must be a non-empty string`);
      }
    });

    const spreadConfig = {
      positions,
      description,
      cardCount: positions.length
    };

    this.customSpreads.set(name, spreadConfig);
    return spreadConfig;
  }

  // Remove a spread
  removeSpread(name) {
    this.validateSpreadExists(name);
    this.customSpreads.delete(name);
  }

  // Get spread information
  getSpreadInfo(name) {
    this.validateSpreadExists(name);
    return this.customSpreads.get(name);
  }

  // List all spreads
  listSpreads() {
    return Array.from(this.customSpreads.keys());
  }

  // Draw cards for a spread
  drawCards(count) {
    this.validateDeckInitialized();

    if (count > this.deck.length) {
      throw new Error(`Cannot draw ${count} cards. Only ${this.deck.length} cards available`);
    }
    
    const tempDeck = [...this.deck];
    
    for (let i = tempDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempDeck[i], tempDeck[j]] = [tempDeck[j], tempDeck[i]];
    }
    
    return tempDeck.slice(0, count);
  }

  // Perform a reading
  doReading(spreadName) {
    this.validateDeckInitialized();
    this.validateSpreadExists(spreadName);

    const spread = this.customSpreads.get(spreadName);
    const cards = this.drawCards(spread.cardCount);
    
    this.currentSpread = spread.positions.map((position, index) => ({
      position,
      card: cards[index]
    }));
    
    return this.currentSpread;
  }

  // Get current spread
  getCurrentSpread() {
    return this.currentSpread;
  }

  // Shuffle the deck
  shuffleDeck() {
    this.validateDeckInitialized();
    
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  // Get deck information
  getDeckInfo() {
    this.validateDeckInitialized();
    return {
      cardCount: this.deck.length,
      cards: this.deck.map(card => (card))
    };
  }
  
}
