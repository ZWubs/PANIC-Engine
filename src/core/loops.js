/**
 *	@function PANIC.Loop
 *  @author zwubs
 *  @description Where all game logic and rendering takes place
 */
PANIC.Loop = function( time=0 ) {

    // Updating

    PANIC.Clock.update( time );

    PANIC.Updater.update();

    // Rendering

    PANIC.Renderer.render( PANIC.Scene, PANIC.Camera );

    requestAnimationFrame( PANIC.Loop );

}
