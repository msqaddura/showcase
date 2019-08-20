import { Graphics, Sprite, BlueprintUtil, Entity } from "webgladiator";
import { GalleryScene } from "./Gallery.Scene";
// tslint:disable-next-line: variable-name
export const GallerySceneBlueprint = {
    name: "StackScene",
    lazy: true,
    ctor: GalleryScene,
    layout: { name: "Portrait" },
    scaleOnly: true,
    blueprints: [
        { ctor: Graphics, name: "diag_start", left: 0, top: 0, PivotX: 1, PivotY: 1 },
        { ctor: Graphics, name: "diag_end", left: 512, top: 1024, PivotX: 1, PivotY: 1 },
        // { ctor: Sprite, name: "background", fromImage: "Resources/background.jpeg" },
    ]
}