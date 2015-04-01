var Boundary  = cc.Sprite.extend({
    ctor: function( Ball ) {
        
        this._super();
        
        this.pic = res.Boundary1;
        
        this.Ball = Ball;
        
    },
    
    update: function( dt ){
        
        var pos = this.Ball.getPosition();
        
        if ( pos.x < 80 || pos.x > 720 ){
            
            this.pic = res.Boundary2;
            
        }
        else {
            
            this.pic = res.Boundary1;  
            
        }
        
        this.initWithFile( this.pic );

    }
});