var GameLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        this._super();
        cc.audioEngine.playMusic(res.BgSound,9999);
        //create the background image and position it at the center of screen
        var centerPos = cc.p( 400 , 300 );
        var spriteBG = cc.Sprite.create( res.backGround );
        spriteBG.setPosition( centerPos );
        this.addChild( spriteBG );
        
        this.time = new Timer(60);
        this.time.setPosition(400,300);
        this.addChild(this.time);
        this.time.scheduleUpdate();

        
        this.scorePlayer1 = new Score(1);
        this.scorePlayer1.setPosition( 100 , 200 );
        this.addChild(this.scorePlayer1);
        this.scorePlayer2 = new Score(2);
        this.scorePlayer2.setPosition( 450 , 200 );
        this.addChild(this.scorePlayer2);
        
        this.player1 = new Player( res.player1 , Player.DIR.PLAYER1 );
        this.player1.setPosition( 100 , 300 );
        this.addChild( this.player1 );
        this.player1.scheduleUpdate();
        
        this.player2 = new Player( res.player2 , Player.DIR.PLAYER2 );
        this.player2.setPosition( 700 , 300 );
        this.addChild( this.player2 );
        this.player2.scheduleUpdate();
        
        this.sparkBall = new SparkBall();
        this.sparkBall.setPosition( 400 , 300 );
        this.addChild(this.sparkBall);
        this.scorePlayer1.setSpark(this.sparkBall);
        this.scorePlayer2.setSpark(this.sparkBall);
        this.sparkBall.scheduleUpdate();
        
        this.boundary = new Boundary(this.sparkBall);
        this.boundary.setPosition( 400 , 300 );
        this.boundary.scheduleUpdate();
        this.addChild(this.boundary);
        
        this.scheduleUpdate();
        this.addKeyboardHandlers();
        
        return true;
    },
    
    addKeyboardHandlers: function() {
        
        var self = this;
        
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode , event ) {
                self.onKeyDown( keyCode , event );
            },
            onKeyReleased: function( keyCode , event ) {
            }
        }, this );
        
    },
    onKeyDown: function( keyCode , event ) {
        
        this.player1.moveUP( keyCode );
        this.player2.moveUP( keyCode );
        
    },

    update: function( dt ) {
        this.sparkBall.move( this.player1 );
        this.sparkBall.move( this.player2 );
        this.scorePlayer1.scheduleUpdate();
        this.scorePlayer2.scheduleUpdate();

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