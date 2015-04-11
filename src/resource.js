var scoreP1 = [];
for (var i = 0;i<10;i++) {
    scoreP1.push('res/images/1'+i+'.png')
}

var scoreP2 = [];
for (var i = 0;i<10;i++) {
    scoreP2.push('res/images/2'+i+'.png')
}
var digit = [];
for (var i = 0;i<10;i++){
    digit.push('res/images/'+i+'.png')
}
var res = {
    backGround: 'res/images/bg.jpg',
    player1: 'res/images/dot1.png',
    player2: 'res/images/dot2.png',
    SparkBall: 'res/images/spark.png',
    Boundary1: 'res/images/Boundary1.png',
    Boundary2: 'res/images/Boundary2.png',
    Player1Label: 'res/images/PLAYER1LABEL.PNG',
    Player2Label: 'res/images/PLAYER2LABEL.PNG',
    BgSound: "res/sounds/miiro.mp3",
    EffectSound: "res/sounds/soundmp3.mp3"
};
                 
var g_resources = [];
for ( var i in res ) {
    g_resources.push( res[ i ] );
}
for (var i in scoreP1) {
    g_resources.push( scoreP1[ i ] );
}
for (var i in scoreP2) {
    g_resources.push(scoreP2[i]);
}
for (var i in digit) {
    g_resources.push(digit[i]);
}