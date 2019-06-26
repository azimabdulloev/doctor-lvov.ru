$(document).ready(function()
		{		
			var elements=$("#menu li");
			for (i=0; i<elements.length; i++)
			{
				elements[i].onmouseout=function()
				{
					$(this).removeClass();
					$(this).addClass("page_item");
				}
				elements[i].onmouseover=function()
				{
					$(this).removeClass();
					$(this).addClass("page_item_light");
				}
				
			}		
		});