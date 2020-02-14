function mirror(str)
{
	var split = str.split(" ");
	split.reverse();

	var str_reverse = split.join(" ");

	var str_join = str.concat(str_reverse);

	return split;
}