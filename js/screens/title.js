game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage('title-screen')), -10); // TODO
	        console.log("title");
        
                me.game.world.addChild(new (me.Renderable.extend({
                    init: function(){
                        this._super(me.Renderable, 'init', [270, 240, 300, 50]);
                        this.font = new me.Font("Arial", 46, "white");
                        me.input.registerPointerEvent('pointerdown', this, this.newGame(this), true);
                    },
                    
                    draw: function(renderer){
                        this.font.draw(renderer.getContext(), "START A NEW GAME", this.pos.x, this.pos.y);

                    },
                    
                    update: function(dt){
                        return true;
                    },
                    
                    newGame: function(){
                        me.input.releasePointerEvent('pointerdown', this);
                        me.save.remove('exp');
                        me.save.remove('exp1');
                        me.save.remove('exp2');
                        me.save.remove('exp3');
                        me.save.remove('exp4');
                        me.state.change(me.state.PLAY);
                    }
                })));
                
                 me.game.world.addChild(new (me.Renderable.extend({
                    init: function(){
                        this._super(me.Renderable, 'init', [380, 340, 250, 50]);
                        this.font = new me.Font("Arial", 46, "white");
                        //me.input.registerPointerEvent('pointerdown', this, this.newGame(this), true);
                    },
                    
                    draw: function(renderer){
                        this.font.draw(renderer.getContext(), "CONTINUE", this.pos.x, this.pos.y);

                    },
                    
                    update: function(dt){
                        return true;
                    },
                    
                    newGame: function(){
                        game.data.exp = me.save.exp;
                        game.data.exp1 = me.save.exp;
                        game.data.exp2 = me.save.exp;
                        game.data.exp3 = me.save.exp;
                        game.data.exp4 = me.save.exp;
                        me.input.releasePointerEvent('pointerdown', this);
                        me.state.change(me.state.SPENDEXP);
                    }
                })));
},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {

	}
});
