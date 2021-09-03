/**
 *	@typedef {Object} PANIC.Tileset.Tile
 *	@param name {String}
 */
PANIC.Tileset.Tile = function( name ) {

	this.name = name || "Undefined";

	this.x = 0;
	this.y = 0;
	this.w = 0;
	this.h = 0;

	this.pattern = [ 0, 1, 2, 1, 0, 3, 2, 3 ];

}

/**
 *	@param x {Number}
 *	@param y {Number}
 *	@param width {Number}
 *	@param height {Number}
 */
PANIC.Tileset.Tile.prototype.set = function( x, y, w, h ) {

	this.x = ( isNaN(x) ? this.x : x );
	this.y = ( isNaN(y) ? this.y : y );
	this.w = ( isNaN(w) ? this.w : w );
	this.h = ( isNaN(h) ? this.h : h );

}

/**
 *	@param texture {PANIC.Texture}
 */
PANIC.Tileset.Tile.prototype.UV = function( texture ) {

	let corners = [
		this.x / texture.w,
		( texture.h - this.y ) / texture.h,
		( this.x + this.w ) / texture.w,
		( texture.h - this.y - this.h ) / texture.h
	]

	return [
		corners[ this.pattern[0] ],
		corners[ this.pattern[1] ],
		corners[ this.pattern[2] ],
		corners[ this.pattern[3] ],
		corners[ this.pattern[4] ],
		corners[ this.pattern[5] ],
		corners[ this.pattern[6] ],
		corners[ this.pattern[7] ]
	]

}

/**
 *	@param abcdefgh {Number} 	
 */
PANIC.Tileset.Tile.prototype.editPattern = function( a, b, c, d, e, f, g, h ) {

	let newPattern = [
		this.pattern[ a ],
		this.pattern[ b ],
		this.pattern[ c ],
		this.pattern[ d ],
		this.pattern[ e ],
		this.pattern[ f ],
		this.pattern[ g ],
		this.pattern[ h ]
	];

	this.pattern = newPattern;

}

/**
 *	@param params {Object}
 */
PANIC.Tileset.Tile.prototype.transform = function( params ) {

	if( params.translate ) {

		this.x += ( isNaN( params.translate.x ) ? 0 : params.translate.x );
		this.y += ( isNaN( params.translate.y ) ? 0 : params.translate.y );

	}

}

/**
 *	Getters & Setters
 */
Object.defineProperties( PANIC.Tileset.Tile.prototype, {
	width: {
		get: function() { return this.w; }
	},
	height: {
		get: function() { return this.h; }
	}
});
