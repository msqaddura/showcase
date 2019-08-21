import { System, Sprite, TweenSystem } from "webgladiator";
import { Scene } from "webgladiator";
import { GameObjectBuilder } from "webgladiator";
import { Game } from "../Game";
import { STACK_CONFIG } from "./Stack.Config";
export class StackScene extends Scene {
  owner: Game;
  tween;
  start() {
    const tiles: Sprite[] = [];
    for (let i = 0; i < STACK_CONFIG.TOTAL; i++) {
      tiles.push(this.getNode(`item_${i}`));
    }
    let zOrder = -STACK_CONFIG.TOTAL;
    this.tween = TweenSystem.getInstance()
      .create({ paused: true })
      .staggerTo(
        tiles.reverse(),
        STACK_CONFIG.ANIMATION_TIME,
        {
          x: x => STACK_CONFIG.RIGHT,
          rotation: Math.PI * 2,
          onComplete: function() {
            this.target.zIndex = zOrder++;
          },

          cycle: {
            y: index => STACK_CONFIG.BOTTOM - STACK_CONFIG.OFFSET * index,
            zIndex: index => index
          }
        },
        STACK_CONFIG.STAGGER,
        STACK_CONFIG.DELAY
      )
      .play();
  }

  kill() {
    this.tween.kill();
    super.kill();
  }
}
