import { Game } from "./Game";
import { GameLayout } from "./Game.Layout";
import { GameStateStrategy } from "./GameState.Strategy";
import { GAMESTATES } from "./GAME.STATES"
import { StackSceneBlueprint } from "./StackScene/StackScene.Blueprint";
// tslint:disable-next-line:variable-name
export const GameBlueprint = {
  name: "Game",
  ctor: Game,
  gameLayout: GameLayout,
  directChildren: [],
  blueprints: [
    {
      name: "GameStateStrategy",
      ctor: GameStateStrategy
    },

  ],
  sceneMap: {
    [GAMESTATES.STACKSCENE]: StackSceneBlueprint
  }
};
