const EventEmitter = require('events');
const PixelReader = require('../lib/pixel-reader');

describe('Pixel Reader', () => {

    it('reads pixel from buffer', done => {
        const colors = [];
        const reader = new PixelReader({ bitsPerPixel: 24 });
        const ee = new EventEmitter();
        ee.on('color', (r, g, b) => {
           rgb = {
               offset: 'something',
               r: 90,
               b: 78,
               g: 70
           }
           console.log('WTF',rgb);
           colors.push(rbg)

        })


        
        

        // TODO: subscribe to reader "color" event and push into `colors` array.
        // A "color" object should look like:
        // {
        //     offset: <offset from the start of buffer passed to PixelReader>,
        //     r: <red color value>,
        //     g: <green color value>,
        //     b: <blue color value>,
        // }

        reader.on('end', () => {
            // write deepEqual assertion for colors versus the
            // expected rgb color objects

            // Don't forget to call done()!
        });

        // Create a buffer with known data for your colors
        const buffer = Buffer.alloc(24 * 3); // for three pixels
        // TODO: fill buffer with byte values that match your 
        // expected test colors

        // Call read method with your buffer
        reader.read(buffer);
    });

});
