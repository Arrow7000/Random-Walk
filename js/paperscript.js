var p = view.center;

var circ = new Path.Circle(p, 5);
circ.fillColor = '#fff';

var line = new Path();
line.strokeColor = 'rgba(238,238,238,0.75)';
line.strokeWidth = 2;
line.strokeJoin = 'round';


function randCoords() {
  var range = 10;
  return (Math.random() * range * 2) - range;
}

// var rectangle = new Rectangle({
//   point: [20, 20],
//   size: [60, 60]
// });
// console.log(rectangle.x + rectangle.width);

function onFrame(event) {


  var newP = new Point();
  do {
    newP = p + new Point(randCoords(), randCoords());
  } while (
    newP.x < view.bounds.x ||
    newP.y < view.bounds.y ||
    newP.x > view.bounds.x + view.bounds.width ||
    newP.y > view.bounds.y + view.bounds.height
  );

  p = newP;
  circ.position = p;
  line.add(p);

  // console.log("p.x: " + p.x + "\np.y: " + p.y + "\n\nview.bounds.x: " + view.bounds.width + "\nview.bounds.height: " + view.bounds.height);
  console.log(view.bounds.toString);
}



/*
Design spec:
  - You can add network elements by either clicking the canvas or an 'add' button
  - All balloons will be linkable to each other by dragging lines from one to the other
  - The balloons will rearrange to minimise length of connection lines, whilst maintaining network topography
  - However there will be a minimum length the connection line must be, so that they don't all collapse on one another
  - Similarly the balloons cannot overlap one another, even if not linked
  - Balloons will sway somewhat around their locations, connections permitting

  Potentials:
  - Somehow dragging a balloon will make it more likely to stay in the dropped area

  */
