function grade(value)
{
	var grades = "";
	
	if(value>=90)
	{
		grades = "A";
	}
	else if(value>=80 && value<=89)
	{
		grades = "B";
	}
	else if(value>=70 && value<=79)
	{
		grades = "C";
	}
	else if(value>=60 && value<=69)
	{
		grades = "D";
	}
	else
	{
		grades = "E";
	}

	return grades;
}