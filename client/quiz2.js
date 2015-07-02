
Template.quiz2.rendered = function() {

  context = gameboard.getContext("2d");

  mouseisdown = false;
 gameboard.onmouseout = function(e) {
    mouseisdown = false;
  }
  gameboard.onmouseup = function(e) {
    mouseisdown = false;
  }
  

  gameboard.onmousedown = function(e) {
    mouseisdown = true;
    x = e.pageX -gameboard.offsetLeft;
    y = e.pageY -gameboard.offsetTop;
    $('#position').html('Position: (' + x + ',' + y + ')');
  }
  gameboard.onmousemove = function(e) {
    if (mouseisdown) {
      context.beginPath();
      context.moveTo(x, y);
      x = e.pageX - gameboard.offsetLeft;
      y = e.pageY - gameboard.offsetTop;
      $('#position').html('Position: (' + x + ',' + y + ')');

      context.lineTo(x, y);
      context.lineWidth = 5;
    context.strokeStyle=Color; 
      context.stroke();

    }
  }
  Color = $('#selectColor option:selected').val();
$('#selectColor').change(function () {
                                Color = $('#selectColor option:selected').val();
        });

}

Template.quiz2.events({


  'click #clear': function(event) {
    context.clearRect(0, 0, gameboard.width, gameboard.height);
  }
    
});