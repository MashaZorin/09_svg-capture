var svg = document.getElementById('svg');
var clear = document.getElementById('clear');

var radius = '10';
var color1 = 'black';
var color2 = 'red';

var draw_circle_helper = function(x, y){
    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', radius);
    circle.setAttribute('fill', color1);
    svg.appendChild(circle);
}

var clear_scr = function(e){
    while (svg.lastChild){
	svg.removeChild(svg.lastChild);
    }
}

var draw_circle = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    if (e.target == svg){
	draw_circle_helper(x, y);
    }
    else{
	var circle = e.target;
	if (circle.getAttribute('fill') == color1){
	    circle.setAttribute('fill', color2);
	}
	else if (circle.getAttribute('fill') == color2){
	    svg.removeChild(circle);
	    var rand_x = Math.random() * 500;
	    var rand_y = Math.random() * 500;
	    draw_circle_helper(rand_x, rand_y);
	}
    }
}

svg.addEventListener('click', draw_circle);
clear.addEventListener('click', clear_scr);
