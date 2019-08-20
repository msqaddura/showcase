import { Graphics, Sprite, BlueprintUtil, Entity } from "webgladiator";
import { StackScene } from "./Stack.Scene";
import { STACK_CONFIG } from "./Stack.Config"
// tslint:disable-next-line: variable-name
export const StackSceneBlueprint = {
    name: "StackScene",
    lazy: true,
    ctor: StackScene,
    layout: { name: "Scene" },
    scaleOnly: true,
    blueprints: [
        { ctor: Graphics, name: "diag_start", left: 0, top: 0, PivotX: 1, PivotY: 1 },
        { ctor: Graphics, name: "diag_end", left: 500, top: 500, PivotX: 1, PivotY: 1 },
        // { ctor: Sprite, name: "background", fromImage: "Resources/background.jpeg" },
        BlueprintUtil.repeat(STACK_CONFIG.TOTAL,
            { ctor: Sprite, fromImage: "Resources/tile.png", anchorX: 0.5, anchorY: 0.5 },
            (item, index) => ({
                ...item,
                name: `item_${index}`,
                x: STACK_CONFIG.LEFT,
                y: STACK_CONFIG.BOTTOM - index * STACK_CONFIG.OFFSET,
                tint: Math.random() * 0xFFFFFF,
                zIndex: index
            }))
    ]
}