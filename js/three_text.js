(function() {
  if (typeof THREE === 'undefined') return;

  const FileLoader = THREE.FileLoader;
  const Loader = THREE.Loader;
  const ShapePath = THREE.ShapePath;
  const ExtrudeGeometry = THREE.ExtrudeGeometry;

  

/**
 * A loader for loading fonts.
 *
 * You can convert fonts online using [facetype.js](https://gero3.github.io/facetype.js/).
 *
 * ```js
 * const loader = new FontLoader();
 * const font = await loader.loadAsync( 'fonts/helvetiker_regular.typeface.json' );
 * ```
 *
 * @augments Loader
 * @three_import 
 */
class FontLoader extends Loader {

	/**
	 * Constructs a new font loader.
	 *
	 * @param {LoadingManager} [manager] - The loading manager.
	 */
	constructor( manager ) {

		super( manager );

	}

	/**
	 * Starts loading from the given URL and passes the loaded font
	 * to the `onLoad()` callback.
	 *
	 * @param {string} url - The path/URL of the file to be loaded. This can also be a data URI.
	 * @param {function(Font)} onLoad - Executed when the loading process has been finished.
	 * @param {onProgressCallback} onProgress - Executed while the loading is in progress.
	 * @param {onErrorCallback} onError - Executed when errors occur.
	 */
	load( url, onLoad, onProgress, onError ) {

		const scope = this;

		const loader = new FileLoader( this.manager );
		loader.setPath( this.path );
		loader.setRequestHeader( this.requestHeader );
		loader.setWithCredentials( this.withCredentials );
		loader.load( url, function ( text ) {

			const font = scope.parse( JSON.parse( text ) );

			if ( onLoad ) onLoad( font );

		}, onProgress, onError );

	}

	/**
	 * Parses the given font data and returns the resulting font.
	 *
	 * @param {Object} json - The raw font data as a JSON object.
	 * @return {Font} The font.
	 */
	parse( json ) {

		return new Font( json );

	}

}

/**
 * Class representing a font.
 */
class Font {

	/**
	 * Constructs a new font.
	 *
	 * @param {Object} data - The font data as JSON.
	 */
	constructor( data ) {

		/**
		 * This flag can be used for type testing.
		 *
		 * @type {boolean}
		 * @readonly
		 * @default true
		 */
		this.isFont = true;

		this.type = 'Font';

		/**
		 * The font data as JSON.
		 *
		 * @type {Object}
		 */
		this.data = data;

	}

	/**
	 * Generates geometry shapes from the given text and size. The result of this method
	 * should be used with {@link ShapeGeometry} to generate the actual geometry data.
	 *
	 * @param {string} text - The text.
	 * @param {number} [size=100] - The text size.
	 * @param {string} [direction='ltr'] - Char direction: ltr(left to right), rtl(right to left) & tb(top bottom).
	 * @return {Array<Shape>} An array of shapes representing the text.
	 */
	generateShapes( text, size = 100, direction = 'ltr' ) {

		const shapes = [];
		const paths = createPaths( text, size, this.data, direction );

		for ( let p = 0, pl = paths.length; p < pl; p ++ ) {

			shapes.push( ...paths[ p ].toShapes() );

		}

		return shapes;

	}

}

function createPaths( text, size, data, direction ) {

	const chars = Array.from( text );
	const scale = size / data.resolution;
	const line_height = ( data.boundingBox.yMax - data.boundingBox.yMin + data.underlineThickness ) * scale;

	const paths = [];

	let offsetX = 0, offsetY = 0;

	if ( direction == 'rtl' || direction == 'tb' ) {

		chars.reverse();

	}

	for ( let i = 0; i < chars.length; i ++ ) {

		const char = chars[ i ];

		if ( char === '\n' ) {

			offsetX = 0;
			offsetY -= line_height;

		} else {

			const ret = createPath( char, scale, offsetX, offsetY, data );

			if ( direction == 'tb' ) {

				offsetX = 0;
				offsetY += data.ascender * scale;

			} else {

				offsetX += ret.offsetX;

			}

			paths.push( ret.path );

		}

	}

	return paths;

}

function createPath( char, scale, offsetX, offsetY, data ) {

	const glyph = data.glyphs[ char ] || data.glyphs[ '?' ];

	if ( ! glyph ) {

		console.error( 'THREE.Font: character "' + char + '" does not exists in font family ' + data.familyName + '.' );

		return;

	}

	const path = new ShapePath();

	let x, y, cpx, cpy, cpx1, cpy1, cpx2, cpy2;

	if ( glyph.o ) {

		const outline = glyph._cachedOutline || ( glyph._cachedOutline = glyph.o.split( ' ' ) );

		for ( let i = 0, l = outline.length; i < l; ) {

			const action = outline[ i ++ ];

			switch ( action ) {

				case 'm': // moveTo

					x = outline[ i ++ ] * scale + offsetX;
					y = outline[ i ++ ] * scale + offsetY;

					path.moveTo( x, y );

					break;

				case 'l': // lineTo

					x = outline[ i ++ ] * scale + offsetX;
					y = outline[ i ++ ] * scale + offsetY;

					path.lineTo( x, y );

					break;

				case 'q': // quadraticCurveTo

					cpx = outline[ i ++ ] * scale + offsetX;
					cpy = outline[ i ++ ] * scale + offsetY;
					cpx1 = outline[ i ++ ] * scale + offsetX;
					cpy1 = outline[ i ++ ] * scale + offsetY;

					path.quadraticCurveTo( cpx1, cpy1, cpx, cpy );

					break;

				case 'b': // bezierCurveTo

					cpx = outline[ i ++ ] * scale + offsetX;
					cpy = outline[ i ++ ] * scale + offsetY;
					cpx1 = outline[ i ++ ] * scale + offsetX;
					cpy1 = outline[ i ++ ] * scale + offsetY;
					cpx2 = outline[ i ++ ] * scale + offsetX;
					cpy2 = outline[ i ++ ] * scale + offsetY;

					path.bezierCurveTo( cpx1, cpy1, cpx2, cpy2, cpx, cpy );

					break;

			}

		}

	}

	return { offsetX: glyph.ha * scale, path: path };

}




  



/**
 * A class for generating text as a single geometry. It is constructed by providing a string of text, and a set of
 * parameters consisting of a loaded font and extrude settings.
 *
 * See the {@link FontLoader} page for additional details.
 *
 * `TextGeometry` uses [typeface.json](http://gero3.github.io/facetype.js/) generated fonts.
 * Some existing fonts can be found located in `/examples/fonts`.
 *
 * ```js
 * const loader = new FontLoader();
 * const font = await loader.loadAsync( 'fonts/helvetiker_regular.typeface.json' );
 * const geometry = new TextGeometry( 'Hello three.js!', {
 * 	font: font,
 * 	size: 80,
 * 	depth: 5,
 * 	curveSegments: 12
 * } );
 * ```
 *
 * @augments ExtrudeGeometry
 * @three_import 
 */
class TextGeometry extends ExtrudeGeometry {

	/**
	 * Constructs a new text geometry.
	 *
	 * @param {string} text - The text that should be transformed into a geometry.
	 * @param {TextGeometry~Options} [parameters] - The text settings.
	 */
	constructor( text, parameters = {} ) {

		const font = parameters.font;

		if ( font === undefined ) {

			super(); // generate default extrude geometry

		} else {

			const shapes = font.generateShapes( text, parameters.size, parameters.direction );

			if ( parameters.depth === undefined ) parameters.depth = ( parameters.height !== undefined ? parameters.height : 0.08 );
			if ( parameters.bevelThickness === undefined ) parameters.bevelThickness = 0;
			if ( parameters.bevelSize === undefined ) parameters.bevelSize = 0;
			if ( parameters.bevelEnabled === undefined ) parameters.bevelEnabled = false;

			super( shapes, parameters );

		}

		this.type = 'TextGeometry';

	}

	toJSON() {

		const data = super.toJSON();
		return data;

	}

	static fromJSON( data ) {

		const options = data.options;

		options.font = new Font( options.font.data );
		return new TextGeometry( options.text, options );

	}

}

/**
 * Represents the `options` type of the geometry's constructor.
 *
 * @typedef {Object} TextGeometry~Options
 * @property {Font} [font] - The font.
 * @property {number} [size=100] - The text size.
 * @property {number} [depth=50] - Depth to extrude the shape.
 * @property {number} [curveSegments=12] - Number of points on the curves.
 * @property {number} [steps=1] - Number of points used for subdividing segments along the depth of the extruded spline.
 * @property {boolean} [bevelEnabled=false] - Whether to beveling to the shape or not.
 * @property {number} [bevelThickness=10] - How deep into the original shape the bevel goes.
 * @property {number} [bevelSize=8] - Distance from the shape outline that the bevel extends.
 * @property {number} [bevelOffset=0] - Distance from the shape outline that the bevel starts.
 * @property {number} [bevelSegments=3] - Number of bevel layers.
 * @property {string} [direction='ltr'] - Char direction: ltr(left to right), rtl(right to left) & tb(top bottom).
 * @property {?Curve} [extrudePath=null] - A 3D spline path along which the shape should be extruded. Bevels not supported for path extrusion.
 * @property {Object} [UVGenerator] - An object that provides UV generator functions for custom UV generation.
 **/




  THREE.FontLoader = FontLoader;
  THREE.Font = Font;
  THREE.TextGeometry = TextGeometry;
})();
