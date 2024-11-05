# Tarot.js

**Tarot.js** is a powerful and customizable JavaScript library for creating and managing Tarot card decks, custom spreads, and readings. Whether you're a Tarot enthusiast or a developer looking to integrate Tarot readings into your application, Tarot.js offers a flexible toolkit to enhance your experience.

## Features

- **Deck Management**: Easily draw, shuffle, and get details about your Tarot deck.
- **Custom Spreads**: Create and manage unique Tarot spreads tailored to your needs.
- **Readings**: Perform readings using your custom spreads, drawing the specified number of cards for each position.
- **Current Spread Tracking**: View the most recent spread and cards drawn for a convenient reference.
- **Detailed Deck Information**: Retrieve full deck details, including card counts and each card’s metadata.


## Example and usage

You can view a demo of Tarot.js in use [here](https://marketingpipeline.github.io/Tarot.js/demo).

How to use **_Tarot.js_**:

```javascript
import Tarot from "https://esm.sh/gh/MarketingPip/tarot.js";
// Load a existing tarot deck via ES6 assert import or via fetch etc... 
import englishDeck from "https://esm.sh/gh/MarketingPip/tarot.js/decks/english.json" assert { type: "json" }; 

// Initialize a Tarot instance and deck
const tarot = new Tarot.Tarot();
tarot.initializeDeck(englishDeck);

// Access current deck and spread information
console.log(tarot.getDeckInfo());

// Add a spread (e.g., Past, Present, Future)
tarot.addSpread('Three-Card Spread', {
  positions: ['Past', 'Present', 'Future'],
  description: 'Insight into past, present, and future aspects.'
});

// Perform a reading using the spread
console.log(tarot.doReading("Three-Card Spread"));

// Make your own deck
const your_own_custom_deck = tarot.initializeDeck([
  {
    name: "The Fool",
    meaning: "New beginnings, innocence",
    whatever_key_names_you_want: "l33t"
  },
  {
    name: "The Coder",
    meaning: "Tired, broke, curious",
    whatever_values_you_want: ["dope"]
  }
  /* Add more card objects as needed. 
     Note: Objects must be same length or greater as your positions in your spread.
   */
]);

// Add your custom spread
tarot.addSpread("shakespeare", {
  positions: ["To be", "Not to be"],
  description: "Random example spread"
});

console.log(tarot.doReading("shakespeare"));

// View the most recent spread and cards drawn
console.log(tarot.getCurrentSpread());
```

For more advanced usage you can find the Tarot.js documentation [here](https://github.com/MarketingPipeline/Tarot.js/wiki).  

## Getting Started

Here’s a quick guide to get started with Tarot.js:

### 1. Initialize a Tarot Deck

Initialize your deck with an array of card objects:

```javascript
import Tarot from "https://esm.sh/gh/MarketingPip/tarot.js";
const tarot = new Tarot();

const deck = tarot.initializeDeck([
  { name: 'The Fool', meaning: 'New beginnings, innocence' },
  { name: 'The Magician', meaning: 'Skill, power, manifestation' },
  // Add more card objects as needed
]);
```

### 2. Create Custom Spreads

Define custom spreads by specifying card positions and an optional description:

```javascript
tarot.addSpread('Three-Card Spread', {
  positions: ['Past', 'Present', 'Future'],
  description: 'Provides insights into past, present, and future aspects.',
});
```

**Note**: "Cards" in your deck must be same length or greater then your positions in your spread.

### 3. Perform a Reading

Shuffle the deck and perform a reading using one of your custom spreads:

```javascript
tarot.shuffleDeck();
const reading = tarot.doReading('Three-Card Spread');
console.log(reading);
```

### 4. Access Deck Information

Retrieve details about the current deck setup:

```javascript
const deckInfo = tarot.getDeckInfo();
console.log(deckInfo);
```

### 5. List Custom Spreads

List all custom spreads you’ve created:

```javascript
const spreads = tarot.listSpreads();
console.log(spreads); // Outputs: ['Three-Card Spread']
```

Here’s the corrected and standardized Markdown format:

## API Reference

### `initializeDeck(cards)`

- **Description**: Initializes the deck with a provided array of card objects.
- **Parameters**:
  - `cards` (Array\<Object\>): Array of Tarot `"cards"`, each with properties like `name` and `meaning`.
  - `options` (Object): Spread settings.
    - `positions` (Array<string>): An array defining positions in the spread.
    - `description` (string, optional): Brief description of the spread.
- **Returns**: The configured spread object.

---

### `addSpread(name, options)`

- **Description**: Adds a custom spread configuration.
- **Parameters**:
  - `name` (string): Unique name for the spread.
  - `options` (Object): Spread settings.
    - `positions` (Array<string>): An array defining positions in the spread.
    - `description` (string, optional): Brief description of the spread.
- **Returns**: The configured spread object.

---

### `doReading(spreadName)`

- **Description**: Draws cards according to the specified spread.
- **Parameters**:
  - `spreadName` (string): Name of the spread to use for the reading.
- **Returns**: Array of objects with each position and corresponding drawn card.

---

### `shuffleDeck()`

- **Description**: Shuffles the deck in place.

---

### `removeSpread(name)`

- **Description**: Removes a spread by name.

---

### `getSpreadInfo(name)`

- **Description**: Retrieves information about a specific spread.

---

### `listSpreads()`

- **Description**: Lists all available custom spreads by name.

---

### `drawCards(count)`

- **Description**: Draws a specified number of cards from the deck.

---

### `getCurrentSpread()`

- **Description**: Retrieves the current spread from the most recent reading.

---

### `getDeckInfo()`

- **Description**: Retrieves information about the current deck, including the number of cards and card details. 


## Contributing

We welcome contributions! Feel free to submit issues, suggest features, or create pull requests to improve Tarot.js.

## License

Tarot.js is licensed under the MIT License.
