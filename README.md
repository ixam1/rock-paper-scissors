# Rock Paper Scissors Game (React)

A simple Rock Paper Scissors Game, with easily extendable game modes.

[View Demo](https://rock-paper-scissors-ms.netlify.app/)

## Main Stack

- React
- Vite
- Typescript
- TailwindCSS
- Jest

## Browser Support

Latest stable versions of Chrome, Firefox, Edge, and Safari. Mobile and Desktop.

## Description

### Game Logic

The game logic is seperated from the UI Layer into the `useGame` hook. The Game is basically seperated into 5 stages.

#### Stages

1. `config`
   Choose a config via `setConfig`
2. `player1Picking`
   Player 1 chooses an action via `pickAction`
3. `player2Picking`
   Player 2 chooses an action via `pickAction`
4. `showdown`
   Wait until winner is determined via `determineWinner`
5. `reveal`
   Reveal Winner and save game to history

`resetGame` puts you back at stage 2
`resetConfig` puts you back at stage 1

### Game Configurations

All Configurations are in the `config` folder.

#### `actionSets`

The different actions a player can take, and which action beats which, are defined here. These can be easily extended beyond Rock, Paper and Scissors (see `lizardSpockExtension`).

#### `players`

The different kinds of Players and how they pick an action are defined here.

`computer` picks it by random.

`human` gets prompted the `HumanPickingStage` and picks from there.

A possible extension might be a smart ai with strategies or even an online human opponent.

## Getting Started

### Dependencies

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run test`

Runs the Jest tests.

### `npm run build`

Tests and builds for production, outputs by default to the `dist` folder.

### `npm run preview`

After you have built the app, you can locally preview the production build with this command.

## Things to optimize

- [ ] add more tests (this is my first time trying out Jest)
- [ ] save actions in the game history only by reference, right now a lot of unnecessary, duplicate data gets saved in local history
- [ ] make useGame more robust, if the triggers for the next stages get called out of order, it will probably cause bugs
- [ ] make the game more "playful" (animations, sounds, etc.)
- [ ] add a tutorial
- [ ] add a full viewable history

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
