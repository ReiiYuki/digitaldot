var scoreP1 = [];
for (var i = 0;i<10;i++) {
    scoreP1.push('res/images/1'+i+'.png')
}

var scoreP2 = [];
for (var i = 0;i<10;i++) {
    scoreP2.push('res/images/2'+i+'.png')
}
var res = {
    backGround: 'res/images/bg.jpg',
    player1: 'res/images/dot1.png',
    player2: 'res/images/dot2.png',
    SparkBall: 'res/images/spark.png',
    Boundary1: 'res/images/Boundary1.png',
    Boundary2: 'res/images/Boundary2.png',
    Player1Label: 'res/images/PLAYER1LABEL.PNG',
    Player2Label: 'res/images/PLAYER2LABEL.PNG'
};
                 
var g_resources = [];
for ( var i in res ) {
    g_resources.push( res[ i ] );
}