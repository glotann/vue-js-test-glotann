function reverse(str)
{
	var split = str.split(" ");
	split.reverse();

	str = split.join(" ");

	return str;
}