/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview DashedLineDrawingMode class
 */
import DrawingMode from '../interface/drawingMode';
import {drawingModes, componentNames as components} from '../consts';

/**
 * DashedLineDrawingMode class
 * @class
 * @ignore
 */
class DashedLineDrawingMode extends DrawingMode {
    constructor() {
        super(drawingModes.DASHED_LINE);
    }

    /**
    * start this drawing mode
    * @param {Graphics} graphics - Graphics instance
    * @param {{width: ?number, color: ?string}} [options] - Brush width & color
    * @override
    */
    start(graphics, options) {
        const lineDrawing = graphics.getComponent(components.DASHED_LINE);
        lineDrawing.start(options);
    }

    /**
     * stop this drawing mode
     * @param {Graphics} graphics - Graphics instance
     * @override
     */
    end(graphics) {
        const lineDrawing = graphics.getComponent(components.DASHED_LINE);
        lineDrawing.end();
    }
}

export default DashedLineDrawingMode;
