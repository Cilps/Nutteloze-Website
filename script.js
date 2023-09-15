// function hide_marquee_h3() {
//   document.getElementById("marquee_h3").style.opacity = "0";
// }
// function show_marquee_h3() {
//   document.getElementById("marquee_h3").style.opacity = "1";
// }
// var color_input = document.getElementById("color_input");

// color_input.addEventListener("input", function () {
//   var color = color_input.value;
//   document.body.style.backgroundColor = color;
//   document.getElementsByClassName("color_input_div")[0].style.border = "3px double " + invertColor(color);
//   const collection = document.getElementsByClassName("text");
//   for (let i = 0; i < collection.length; i++) {
//     collection[i].style.color = invertColor(color);
//   }
// }, false);

// var color_input_div = document.getElementsByClassName("color_input_div")[0];
// color_input_div.addEventListener("click", function () {
//   color_input_div.style.animation = "none";
// })

var i = 0;
function stickman_fall_apart() {
  setTimeout(function () {
    $(document).ready(function () {
      $(".stickman_chest_div").throwable({
        drag: true,
        gravity: {
          x: 0,
          y: 1
        },
        impulse: {
          f: 52,
          p: {
            x: 0,
            y: 0
          }
        },
        autostart: false,
        bounce: 10,
        damping: 20,
      });
    });
  }, 500);

  setTimeout(function () {
    $(document).ready(function () {
      $(".stickman_chest_div").throwable({
        drag: true,
        gravity: {
          x: 0,
          y: 1
        },
        impulse: {
          f: 52,
          p: {
            x: 0,
            y: 0
          }
        },
        autostart: false,
        bounce: 10,
        damping: 20,
      });
    });
  }, 400);
  setTimeout(function () {
    $(document).ready(function () {
      $(".stickman_right_arm_div").throwable({
        drag: true,
        gravity: {
          x: 0,
          y: 1
        },
        impulse: {
          f: 52,
          p: {
            x: 0,
            y: 0
          }
        },
        autostart: false,
        bounce: 10,
        damping: 20
      });
    });
  }, 300);
  setTimeout(function () {
    $(document).ready(function () {
      $(".stickman_left_leg_div").throwable({
        drag: true,
        gravity: {
          x: 0,
          y: 1
        },
        impulse: {
          f: 52,
          p: {
            x: 0,
            y: 0
          }
        },
        autostart: false,
        bounce: 10,
        damping: 20
      });
    });
  }, 200);

  setTimeout(function () {
    $(document).ready(function () {
      $(".stickman_right_leg_div").throwable({
        drag: true,
        gravity: {
          x: 0,
          y: 1
        },
        impulse: {
          f: 52,
          p: {
            x: 0,
            y: 0
          }
        },
        autostart: false,
        bounce: 10,
        damping: 20
      });
    });
  }, 100);

  setTimeout(function () {
    $(document).ready(function () {
      $(".stickman_head_div").throwable({
        drag: true,
        gravity: {
          x: 0,
          y: 1
        },
        impulse: {
          f: 52,
          p: {
            x: 0,
            y: 0
          }
        },
        autostart: false,
        bounce: 10,
        damping: 20,
        shape: "circle"
      });
    });
  }, 600);
  setTimeout(function () {
    document.getElementsByClassName("stickman_throwable")[0].remove;
  }, 900);
  $(document).ready(function () {
    $(".stickman_left_arm_div").throwable({
      drag: true,
      gravity: {
        x: 0,
        y: 1
      },
      impulse: {
        f: 52,
        p: {
          x: 0,
          y: 0
        }
      },
      autostart: false,
      bounce: 10,
      damping: 20
    });
  });
}

//#region gestolen functie
//https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
function invertColor(hex) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}


$(document).ready(function () {
  $(".throwable").throwable({
    drag: true,
    gravity: {
      x: 0,
      y: 1
    },
    impulse: {
      f: 52,
      p: {
        x: 0,
        y: 0
      }
    },
    autostart: false,
    bounce: 10,
    containment: "window",
    collisionDectection: true,
    damping: 20
  });
});
$(document).on("collision", function (event, e1) {
  $(e1).css("color", "red");
});
$(document).ready(function () {
  $(".victim").throwable({
    drag: false,
    gravity: {
      x: 0,
      y: 1
    },
    impulse: {
      f: 52,
      p: {
        x: 0,
        y: 0
      }
    },
    autostart: false,
    bounce: 1,
    damping: 50
  });
});
$(document).ready(function () {
  $(".stickman_throwable").throwable({
    drag: true,
    gravity: {
      x: 0,
      y: 1
    },
    impulse: {
      f: 52,
      p: {
        x: 0,
        y: 0
      }
    },
    autostart: false,
    bounce: 0.5,
    damping: 20
  });
});



//#endregion
// #region gestolen drag functie
// dragElement(document.getElementById("iets_box"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }
//#endregion







$(document).ready(function () {

  $("#circle,#box").throwable({
    damping: 10, shape: "circle",
    collisionDetection: true,
    areaDetection: [[0, 0, 300, 300]]
  });
  $(document).on("collision", function (event, e1, e2) {
    $(e1).css("background-color", "black");
    $(e2).css("background-color", "black");
    $("#notification").text("Collision between circle and box");

  });
  $(document).on("nocollision", function () {
    $("#circle,#box").css("background-color", "red");
  });

  $(document).on("inarea", function (event, data) {
    $("#area").css("background-color", "blue");
    $("#notification").text($(data[0]).text() + " enter the area");
  });
  $(document).on("outarea", function (event, data) {
    $("#area").css("background-color", "green");
    $("#notification").text($(data[0]).text() + " exit the area");
  });
});