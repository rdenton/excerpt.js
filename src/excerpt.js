/*
excerpt.js

The MIT License (MIT)
Copyright (C) 2013 Richard Denton, eMarketeer Australia

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//Select all data-excerpt elements.
var excerptjs_elements = document.querySelectorAll('[data-excerpt]');

if ( excerptjs_elements[0] ) {
	//Loop through all data-excerpt elements.
	for (var i = 0; i < excerptjs_elements.length; i++) {
		//The elements trim length.
		var excerptjs_trim_length = excerptjs_elements[i].getAttribute('data-excerpt');
		if ( excerptjs_trim_length > 0 ) {
			
			var excerptjs_element_type = excerptjs_elements[i].tagName.toLowerCase();
			var excerptjs_trimmed_data = excerptjs_elements[i].innerHTML.substring(0, excerptjs_trim_length) + "...";
			
			//Hide the original field with display: none;
			excerptjs_elements[i].style.display = "none";
			
			//Create a replacement element.
			var node = document.createElement( excerptjs_element_type );
			node.innerHTML = excerptjs_trimmed_data;
			
			//Append the replacement element in place of the overflowing element.
			if (excerptjs_elements[i].nextSibling) {
				excerptjs_elements[i].parentNode.insertBefore(node, excerptjs_elements[i].nextSibling);
			} else {
				excerptjs_elements[i].parentNode.appendChild(node);
			}
			
			
		}
	}
}
