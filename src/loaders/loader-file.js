/**
 *	@author zwubs
 */

PANIC.Loaders.File = new function() {

	this.loader = new THREE.FileLoader();

	this.load = async function( url ) {

		// Get File Information
		// var baseURL = url.substring( 0, url.lastIndexOf("/") + 1 );
		// var filename = url.substring( url.lastIndexOf("/") + 1, url.lastIndexOf(".") )
		// var fileextension = url.substring( url.lastIndexOf('.') + 1 );

		return await new Promise( resolve => { this.loader.load( url, resolve ); } );

	}

}
