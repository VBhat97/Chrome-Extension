what();
    function what(){
    	var titles = ["Road Trip","The Hangover","The Descendants","Kung Fu Panda","300"]; //all titles
		var years = ["2000","2009","2011","2008","2006"];//all years
		var urls = ["www.mymovierack.com/show/road-trip","www.mymovierack.com/show/the-hangover","www.mymovierack.com/show/the-descendants","www.mymovierack.com/show/kung-fu-panda","www.mymovierack.com/show/300"];
		var images0 = ["6CvIM0Lp2gBppgoVoowqkyzhim7.jpg","nMql8efqLq5BubizOgxRlKrl5ri.jpg","bd37Q53FlDrjuSEfyNtF7ECNVdy.jpg","9yvKOIfXwPMg13qz0dLPVViCnT9.jpg","1u6L23WZRlJ9roNmzzbSgtKmuyC.jpg","vXT5Gw09k99o9XXqqxBPz9NKgsa.jpg","giQDUKiYAizK9DKwYuGaH8dyRAa.jpg"];
 		var images1 = ["39LohvXfll5dGCQIV9B9VJ16ImE.jpg","rl30cTC0C1cqOtXMHPOQenfZinl.jpg","hWVKbUWo7UcESN7E2jf7qgOMAe9.jpg","9bMd5gmFW4r56BdgAOY78rMlCUF.jpg","chkas43aa0KVdrd2mALYW2sYu4m.jpg","fPCm7jmlYQ3j1YHPA7cU36XdosE.jpg","xxKd56iFbMeRQARUosTGgxKxrnF.jpg","fH1yxcYJ8IB6rj3H2zJamsCZZ61.jpg","pTtIgNKkjGKX2s6EOCnlWzq6N3D.jpg","waGQKqVRDTdihRaIVm6m45fPBtp.jpg"];
		var images2 = ["hqz7LxiEATVXgJZMWIHsnbLLAI5.jpg","bN6IiGpwhbEy7QTpFet6RJEpu7G.jpg","unMHEkcT41VDxXlxT8UX9kzoYMi.jpg","hYHTleQjrTnOU2iQaICiJFqWm6K.jpg","9MWp87V7egGeRGfauv23C7tIKPW.jpg","Aoig2MMDSdvMYNyV5c7lD5BusRk.jpg","2D1yW3VVOHVl5wiSCHR0ylZGDR2.jpg","4tcSkLQgwbUFjvdAVOp147P0KoW.jpg","2w9yK69jGKTA1HIb79OBICJdt7T.jpg","xr6cGqQ1NFEf5UZ8pP2uYmZhlr8.jpg","qKSEjFzUlkw5JQOZlOYMGiGsNcs.jpg","vYX2YcHXGu7rLd7KrUJQn2a0DSp.jpg","lCQundjtHNPsgYZiLgHdAvxUydy.jpg"];
		var images3 = ["UJwhgwAxU42cm9XKncO9boFAEV.jpg","dWRy3NHHSjYP8bmuIyRebRg7wBz.jpg","iA5N8IBMpHKjZYDs1eDAszklPne.jpg","asYS6Nk4GQsawupu50XeG388UTq.jpg","wekK6HLUr58VyrZOFB7GU1HXlkW.jpg","8GS4K4u32NBnic1guiOQJqgZN86.jpg","rSL0kIydQyxf74n0rlcMsIegUBu.jpg","cyWxSTwai4D3FGYNfkjz3QtTPQI.jpg","4XBKM3cWk0pS20izLLWorVhp7Od.jpg","1xGYHCf4wuN41DK8YU4XdAxb3qy.jpg","rG0q85EkSXXHwfd3aDrKY2ka8lI.jpg"];		 		   
		var images4 = ["oHOTQkTYgDuoCYMaBEzuB9DqguX.jpg","pDDMP33wHbbdE8uPQnY1o454bEc.jpg","pK3zjCLvP4iq1vqjPiTft0MjwXw.jpg","gMzVgnh1nfEaep00EdMBuC6pYRa.jpg","qbA5CtRVBWdJ1XMsbC21pyx0ZvT.jpg","oWHMkAjD2eVIOxwyPRw1JrPcnlz.jpg","h5e7MNspWUqxLjcgoGNzvh91FbZ.jpg","tGB68KQyS2ylfK7nIIerjoLn0sa.jpg","hni4p6kzg98NbHMYxp4LJ8GRmGZ.jpg","cxt4qxSVWGXFtOPbYFmsNJ32BU5.jpg","4Nbp5e1Ag36UoWONCslS8FhU4uk.jpg","lq4wBtfvV9l8ersO2tfaUWy4adr.jpg","wX7nSDUITmLon49qYfDWMTMi5fn.jpg","jLecPGdlcq8OyvtXO0uDlByRF57.jpg","eF2fwTGrgICNN1BAsrUYrlSRT9D.jpg"]; 
		var rand = Math.floor(Math.random() * (4 - 0 + 1)) + 0; //random number to pick the movie name
        document.getElementById('head1').innerHTML = titles[rand];
        document.getElementById('head2').innerHTML = years[rand];
        document.getElementById('head3').innerHTML = urls[rand];

        if (rand==0) {
        	rand1 = Math.floor(Math.random() * (6 - 0 + 1)) + 0; //random number to pick the movie photo
        	document.getElementById('image').src =  "https://image.tmdb.org/t/p/w780/" + images0[rand1]; 
        }
        else if (rand==1) {
        	rand1 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        	document.getElementById('image').src = "https://image.tmdb.org/t/p/w780/" + images1[rand1];
        }
        else if (rand==2){
        	rand1 = Math.floor(Math.random() * (12 - 0 + 1)) + 0;
        	document.getElementById('image').src = "https://image.tmdb.org/t/p/w780/" + images2[rand1];
        }
        else if (rand==3) {
        	rand1 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
        	document.getElementById('image').src = "https://image.tmdb.org/t/p/w780/" + images3[rand1];
        }
        else {
        	rand1 = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
        	document.getElementById('image').src = "https://image.tmdb.org/t/p/w780/" + images4[rand1];
        }
    };