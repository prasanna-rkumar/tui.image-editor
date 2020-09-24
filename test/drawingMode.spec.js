/**
 * @author NHN Ent. FE Development Team <dl_javascript@nhn.com>
 * @fileoverview Test cases of "src/js/imageEditor.js"
 */
import ImageEditor from '../src/js/imageEditor';

describe('DrawingMode', () => {
    let imageEditor;
    const imageURL = 'base/test/fixtures/sampleImage.jpg';

    beforeEach(done => {
        imageEditor = new ImageEditor(document.createElement('div'), {
            cssMaxWidth: 700,
            cssMaxHeight: 500
        });
        imageEditor.loadImageFromURL(imageURL, 'sampleImage').then(() => {
            done();
        });
    });

    afterEach(() => {
        imageEditor.destroy();
    });

    it('enter a drawing mode with startDrawingMode, CROPPER', () => {
        imageEditor.startDrawingMode('CROPPER');

        expect(imageEditor.getDrawingMode()).toBe('CROPPER');
    });

    it('stop a drawing mode with stopDrawingMode, ie, to normal', () => {
        imageEditor.stopDrawingMode();

        expect(imageEditor.getDrawingMode()).toBe('NORMAL');
    });
});
