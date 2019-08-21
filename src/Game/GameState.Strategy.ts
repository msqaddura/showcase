import { Strategy } from "webgladiator";
import { sceneManager } from "webgladiator";
import { System } from "webgladiator";
import { Game } from "./Game";
import { GAMESTATES } from "./GAME.STATES";
import { merge, fromEvent } from "rxjs";
import { mapTo } from "rxjs/operators";

export class GameStateStrategy extends Strategy {
  owner: Game;
  start() {
    console.info("** Loading Started! **");
    System.resource.preload("Resources/resources.json").subscribe({
      next: value => {
        console.log(`Loaded :${Math.round(value)}%`);
      },
      complete: () => {
        console.info("** Loading Finished! **");
        document.body.className = "loaded";
        this.owner.create();
        sceneManager.loadScene(GAMESTATES.DEFAULT);

        document.getElementById("STACKSCENE").onclick = () => {
          sceneManager.switchScenesTo("STACKSCENE");
        };
        document.getElementById("GALLERYSCENE").onclick = () => {
          sceneManager.switchScenesTo("GALLERYSCENE");
        };
        document.getElementById("PARTICLESSCENE").onclick = () => {
          sceneManager.switchScenesTo("PARTICLESSCENE");
        };
      }
    });
  }
}
