function cat()
{
	tomash = [];
}

cat.prototype.eat = function(mouse)
{
	tomash.push(mouse);
}


module.export('cat');