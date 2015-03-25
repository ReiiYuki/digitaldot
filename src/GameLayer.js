var GameLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        this._super();
        //create the background image and position it at the center of screen
        var centerPos = cc.p(800 / 2, 600 / 2);
        var spriteBG = cc.Sprite.create(res.backGround);
        spriteBG.setPosition(centerPos);
        this.addChild(spriteBG);
        
        this.player1 = new Player();
        this.player1.setPosition(new cc.Point(100,300));
        this.addChild(this.player1);
        this.player1.scheduleUpdate();
        
        this.sparkBall = new SparkBall();
        this.sparkBall.setPosition(800/2,600/2);
        this.addChild(this.sparkBall);
        this.sparkBall.scheduleUpdate();
        
        this.boundary = new Boundary();
        this.boundary.setPosition(800/2,600/2 );
        this.addChild(this.boundary);
        
        this.scheduleUpdate();
        this.addKeyboardHandlers();
        return true;
    },
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                console.log('Stop moving');
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
    update: function( dt) {
        this.sparkBall.move(this.player1);
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