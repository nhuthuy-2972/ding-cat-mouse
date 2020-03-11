function mouse(name,weight)
{
	name = name;
	dead = false;
}


mouse.prototype.die = function ()
{
	dead = true;
}
module.export('mouse');