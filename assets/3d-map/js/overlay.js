var po = org.polymaps;

var map = po.map()
    .container(document.getElementById("map").appendChild(po.svg("svg")))
    .zoomRange([12, 15])
    .add(po.interact());

map.add(po.layer(overlay)
    .tile(false));

map.add(po.compass()
    .pan("none"));

/** A lightweight layer implementation for an image overlay. */
function overlay(tile, proj) {
  proj = proj(tile);
  var tl = proj.locationPoint({lon: -122.518, lat: 37.816}),
      br = proj.locationPoint({lon: -122.375, lat: 37.755}),
      image = tile.element = po.svg("image");
  image.setAttribute("preserveAspectRatio", "none");
  image.setAttribute("x", tl.x);
  image.setAttribute("y", tl.y);
  image.setAttribute("width", br.x*2.2 - tl.x*2.2);
  image.setAttribute("height", br.y*2.2 - tl.y*2.2);
  image.setAttributeNS("http://www.w3.org/1999/xlink", "href", "assets/3d-map/img/intro.jpg");
  image.classList.add('intro');
  image.style.cursor = "pointer";
}
