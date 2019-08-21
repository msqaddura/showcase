import { Game } from "./Game";
import { GameLayout } from "./Game.Layout";
import { GameStateStrategy } from "./GameState.Strategy";
import { GAMESTATES } from "./GAME.STATES";
import { StackSceneBlueprint } from "./StackScene/StackScene.Blueprint";
import { GallerySceneBlueprint } from "./GalleryScene/Gallery.Blueprint";
import { ParticlesSceneBlueprint } from "./ParticlesScene/Particles.Blueprint";
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
    }
  ],
  sceneMap: {
    [GAMESTATES.STACKSCENE]: StackSceneBlueprint,
    [GAMESTATES.GALLERYSCENE]: GallerySceneBlueprint,
    [GAMESTATES.PARTICLESSCENE]: ParticlesSceneBlueprint
  }
};
