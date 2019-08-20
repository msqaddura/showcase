import { System, Sprite, TweenSystem } from "webgladiator";
import { Scene } from "webgladiator";
import { GameObjectBuilder } from "webgladiator";
import { Game } from "../Game";
import { STACK_CONFIG } from "./Stack.Config"
export class StackScene extends Scene {
    owner: Game;
    tiles: Sprite[] = [];
    start() {
        for (let i = 0; i < STACK_CONFIG.TOTAL; i++) {
            this.tiles.push(this.getNode(`item_${i}`));
        }
        let zOrder = -STACK_CONFIG.TOTAL;
        TweenSystem.getInstance().create({ paused: true }).staggerTo(this.tiles.reverse(), STACK_CONFIG.ANIMATION_TIME,
            {
                x: (x) => STACK_CONFIG.RIGHT,
                rotation: Math.PI * 2,
                onComplete: function () {
                    console.log(this)
                    this.target.zIndex = zOrder++;
                },

                cycle: {
                    y: (index) => STACK_CONFIG.BOTTOM - STACK_CONFIG.OFFSET * index,
                    zIndex: (index) => index
                }
            }, STACK_CONFIG.STAGGER, STACK_CONFIG.DELAY).play();
    }

}
