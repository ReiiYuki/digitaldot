var GameLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        this._super();
        //create the background image and position it at the center of screen
        var centerPos = cc.p(800 / 2, 600 / 2);
        var spriteBG = cc.Sprite.create(bg);
        spriteBG.setPosition(centerPos);
        this.addChild(spriteBG);
        this.player1 = new Player();
        this.player1.setPosition(new cc.Point(50,300));
        this.addChild(this.player1);
        this.player1.scheduleUpdate();
        this.addKeyboardHandlers();
    },
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    },
    onKeyDown: function( keyCode, event ) {
        this.player1.moveUP(keyCode);
        
    },
    onKeyUp: function( keyCode, event ) {
        this.player1.stopMove();
    },
});
 
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});