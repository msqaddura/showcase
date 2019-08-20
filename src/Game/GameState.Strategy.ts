import { Strategy } from "webgladiator";
import { sceneManager } from "webgladiator";
import { System } from "webgladiator";
import { Game } from "./Game";
import { GAMESTATES } from "./GAME.STATES";

export class GameStateStrategy extends Strategy {
  owner: Game;
  start() {
    console.info("** Loading Started! **");
    System.resource.preload("Resources/resources.json").subscribe({
      next: value => {
        console.log(`Loaded :${Math.round(value)}%`)
      },
      complete: () => {
        console.info("** Loading Finished! **");
        this.owner.create();
        sceneManager.loadScene(GAMESTATES.STACKSCENE);
      }
    });
  }
}
