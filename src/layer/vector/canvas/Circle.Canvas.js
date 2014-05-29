/*
 * Extends L.Circle with Canvas-specific code.
 */

L.Circle.include(!L.Path.CANVAS ? {} : {
	_drawPath: function () {
		var p = this._point;
		this._ctx.beginPath();
		this._ctx.arc(p.x, p.y, this._radius, 0, Math.PI * 2, false);
	},

	_containsPoint: function (p) {
		var center = this._point,
				distance = p.distanceTo(this._point),
		    w2 = this.options.stroke ? this.options.weight / 2 : 0;

		if(this.options.pointerEventStroke) {
			return distance < this._radius + w2 &&
						 distance > this._radius - w2;
		} else {
			return (p.distanceTo(center) <= this._radius + w2);
		}
	}
});
