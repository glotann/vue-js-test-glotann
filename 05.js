function duplicateRemover(city)
{
	// const city = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung'];

	var distinctCity = [];

	for(a=0; a<distinctCity.length; a++)
	{
		if(distinctCity.indexOf(city[a]) === -1)
		{
			distinctCity.push(city[a]);
		}
	}

	return distinctCity;
}