/*

Copyright (c) 2011 Alliance Port, LLC (www.allianeport.jp)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/


window.addEvent('domready', function() {

	var col = $$(".col");
	var col2 = $$(".col2");
	
	col.each(function(item,i){
	
		var minHight = 100;
		var linePitch  = 24;
		var fontSize = 12;
		var danWidth = 196;
		var colmunGap = 30;
		
		var orgDimention = item.getSize();
		
		if(orgDimention.size.y<minHight){
			return;
		}
		
		
		var allPs = item.getChildren();

		allPs.each(function(item){
			item.setStyles({
				'margin':0,
				'padding':0,
				'width':danWidth
			});
		});
		
		
		
		//item.setStyles({width:danWidth});
		item.getFirst().setStyles({width:danWidth,marginLeft:0});
		
		var dimention = item.getSize();
		var colHeight = dimention.size.y-(linePitch-fontSize);
		
		if(true){
			var newColHeight = Math.ceil((colHeight/2)/linePitch)*linePitch;
			item.setStyles({height:newColHeight,overflow:"hidden",width:danWidth,float:"left"});
			var col2margin = -1*newColHeight;
			var conteinor = new Element('div', {
			    'styles': {
       			 'margin-top': col2margin
    			}
   		 	});
   		 	var clearTag = new Element('div',{
   		 		'styles':{
   		 			'clear': 'both'
   		 		}
   		 	});
    	
    		conteinor.injectInside(col2[i]);
    		clearTag.injectAfter(col2[i]);
    		
   		 	conteinor.innerHTML = item.innerHTML; 

   		 	col2[i].setStyles({width:danWidth,float:'left',overflow:"hidden",marginLeft:colmunGap});
		}
	});
		
});