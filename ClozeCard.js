function ClozeCard(text, cloze) 
{
	this.cloze=cloze;
	this.partial=text.replace(cloze, "...");
	this.fullText=text;

	if (text.indexOf(cloze) === -1) 
	{
		console.log("ERROR: that word isn't found in the text");
	}
	
		
}

module.exports=ClozeCard;
