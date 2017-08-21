var globals = {
  board: {
    object: '',
    width: 40,
    height: 10,
    setPosition: function() {
      globals.board.xPos = globals.board.width/2;
      globals.board.yPos = globals.board.height/2;
    },
    moveIncrement: 20,
    movement: {
      left: false,
      right: false,
      up: false,
      down: false
    }
  }
}

var createBoard = function() {
  globals.board.object = $('<div>').css('background', '#fff').css('width', `${globals.board.width}px`).css('height', `${globals.board.height}px`);
  $('body').append(globals.board.object);

}

var moveBoard = function(dir) {
  console.log(`${globals.board.xPos}:${globals.board.yPos}`);
  if(globals.board.xPos >= globals.board.width/2 && globals.board.yPos >= globals.board.height/2) {
    console.log(dir);
    var movement = globals.board.movement;
    if(movement.left) {
      globals.board.xPos -= globals.board.moveIncrement;
      globals.board.object.css('transform', `translateX(${globals.board.xPos-globals.board.width/2}px)`);
      // globals.board.object.css('marginLeft', globals.board.xPos-globals.board.width/2);
    }
    if(movement.right) {
      globals.board.xPos += globals.board.moveIncrement;
      globals.board.object.css('transform', `translateX(${globals.board.xPos-globals.board.width/2}px)`);
      // globals.board.object.css('marginLeft', globals.board.xPos-globals.board.width/2);
    }
    if(movement.up) {
      globals.board.yPos -= globals.board.moveIncrement;
      globals.board.object.css('marginTop', globals.board.yPos-globals.board.height/2);
    }
    if(movement.down) {
      globals.board.yPos += globals.board.moveIncrement;
      globals.board.object.css('marginTop', globals.board.yPos-globals.board.height/2);
    }
    // switch (dir) {
    //   case 'left':
    //     globals.board.xPos -= globals.board.moveIncrement;
    //     globals.board.object.css('marginLeft', globals.board.xPos-globals.board.width/2);
    //     break;
    //   case 'right':
    //     globals.board.xPos += globals.board.moveIncrement;
    //     globals.board.object.css('marginLeft', globals.board.xPos-globals.board.width/2);
    //     break;
    //   case 'up':
    //     globals.board.yPos -= globals.board.moveIncrement;
    //     globals.board.object.css('marginTop', globals.board.yPos-globals.board.height/2);
    //     break;
    //   case 'down':
    //     globals.board.yPos += globals.board.moveIncrement;
    //     globals.board.object.css('marginTop', globals.board.yPos-globals.board.height/2);
    //     break;
    //   default:
    //
    // }

    // if(dir === 'right') {
    //   // globals.board.object.css('marginLeft', globals.board.xPos-globals.board.width/2);
    //   // globals.board.xPos += 5;
    // }
  } else {
    globals.board.setPosition();
  }
}

var interpretKeyPress = function(input) {
  if(input === 37) {
    globals.board.movement.left = true;
    moveBoard('left');
  }
  if(input === 38) {
    globals.board.movement.up = true;
    moveBoard('up');
  }
  if(input === 39) {
    globals.board.movement.right = true;
    moveBoard('right');
  }
  if(input === 40) {
    globals.board.movement.down = true;
    moveBoard('down');
  }
  // switch (input) {
  //   case 37:
  //     globals.board.movement.left = true;
  //     moveBoard('left');
  //     break;
  //   case 38:
  //     globals.board.movement.up = true;
  //     moveBoard('up');
  //     break;
  //   case 39:
  //     globals.board.movement.right = true;
  //     moveBoard('right');
  //     break;
  //   case 40:
  //     globals.board.movement.down = true;
  //     moveBoard('down');
  //     break;
  //   default:
  // }
}

var interpretKeyRelease = function(input) {
  if(input === 37) {
    globals.board.movement.left = false;
    moveBoard('left');
  }
  if(input === 38) {
    globals.board.movement.up = false;
    moveBoard('up');
  }
  if(input === 39) {
    globals.board.movement.right = false;
    moveBoard('right');
  }
  if(input === 40) {
    globals.board.movement.down = false;
    moveBoard('down');
  }
  // switch (input) {
  //   case 37:
  //     globals.board.movement.left = false;
  //     moveBoard('left');
  //     break;
  //   case 38:
  //     globals.board.movement.up = false;
  //     moveBoard('up');
  //     break;
  //   case 39:
  //     globals.board.movement.right = false;
  //     moveBoard('right');
  //     break;
  //   case 40:
  //     globals.board.movement.down = false;
  //     moveBoard('down');
  //     break;
  //   default:
  // }
}

var logInfo = function() {
  console.log(globals);
  console.log($(window).width());
  console.log($(window).height());
}

$(function() {
  $('body').css('background', '#000');
  createBoard();
  globals.board.setPosition();

  $(window).resize(logInfo);

  // logInfo();

  $(document).keydown(function(k) {
    interpretKeyPress(k.keyCode);
  })

  $(document).keyup(function(k) {
    interpretKeyRelease(k.keyCode);
  })

})
