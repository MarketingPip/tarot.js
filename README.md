# Tarot.js

**Tarot.js** is a powerful and customizable JavaScript library for creating and managing Tarot card decks, custom spreads, and readings. Whether you're a Tarot enthusiast or a developer looking to integrate Tarot readings into your application, Tarot.js offers a flexible toolkit to enhance your experience.

## Features

- **Deck Management**: Easily draw, shuffle, and get details about your Tarot deck.
- **Custom Spreads**: Create and manage unique Tarot spreads tailored to your needs.
- **Readings**: Perform readings using your custom spreads, drawing the specified number of cards for each position.
- **Current Spread Tracking**: View the most recent spread and cards drawn for a convenient reference.
- **Detailed Deck Information**: Retrieve full deck details, including card counts and each card’s metadata.

## Getting Started

Here’s a quick guide to get started with Tarot.js:

### 1. Initialize a Tarot Deck

Initialize your deck with an array of card objects:

```javascript
const Tarot = require('tarot.js');
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

## API Reference

### `initializeDeck(cards)`

- **Description**: Initializes the deck with a provided array of card objects.
- **Parameters**:
  - `cards` (Array<Object>): Array of Tarot cards, each with properties like `name` and `meaning`.
- **Returns**: Array of initialized cards.

### `addSpread(name, options)`

- **Description**: Adds a custom spread configuration.
- **Parameters**:
  - `name` (string): Unique name for the spread.
  - `options` (Object): Spread settings.
    - `positions` (Array<string>): An array defining positions in the spread.
    - `description` (string, optional): Brief description of the spread.
- **Returns**: The configured spread object.

### `doReading(spreadName)`

- **Description**: Draws cards according to the specified spread.
- **Parameters**:
  - `spreadName` (string): Name of the spread to use for the reading.
- **Returns**: Array of objects with each position and corresponding drawn card.

### `shuffleDeck()`

- **Description**: Shuffles the deck in place.

### `getDeckInfo()`

- **Description**: Returns information about the deck, including card count and card details.

## Contributing

We welcome contributions! Feel free to submit issues, suggest features, or create pull requests to improve Tarot.js.

## License

Tarot.js is licensed under the MIT License.
