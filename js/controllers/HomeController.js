app.controller('HomeController', ['$scope', function($scope) {


	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    {
      title:	'The Shawshank Redemption',
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    {
      title:	'The Godfather',
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    {
      title:	'The Godfather: Part II',
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    {
      title:	'The Dark Knight',
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    {
      title:	'Schindler\'s List',
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},

	{
		title:	'Spectre',
		iscore:	6.9,
		rating:	'PG-13',
		runtime:	148,
		released:	new Date('2015', '11', '06'),
		country:	'UK/USA',
		posters:	['img/spectre1.jpg','img/spectre2.png'],
		imdb:		'http://www.imdb.com/title/tt2379713/?ref_=nv_sr_2',
		website:	'http://www.sonypictures.com/movies/spectre/',
		likes:	1254,
		dislikes:	495,
		posterindex: 0
},

	{
		title:	'Deadpool',
		iscore:	8.0,
		rating:	'R',
		runtime:	108,
		released:	new Date('2016', '02', '12'),
		country:	'USA',
		posters:	['img/deadpool1.jpg','img/deadpool2.png'],
		imdb:		'http://www.imdb.com/title/tt1431045/',
		website:	'http://www.foxmovies.com/movies/deadpool',
		likes:	1435,
		dislikes:	389,
		posterindex: 0
},

	{
		title:	'Suicide Squad',
		iscore:	6.3,
		rating:	'PG-13',
		runtime:	123,
		released:	new Date('2016', '08', '05'),
		country:	'USA',
		posters:	['img/suicide1.jpg','img/suicide2.jpg'],
		imdb:		'http://www.imdb.com/title/tt1386697/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2240084082&pf_rd_r=05JTFQ5AVDG87KDDMV2D&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=moviemeter&ref_=chtmvm_tt_18',
		website:	'http://www.suicidesquad.com/',
		likes:	764,
		dislikes:	243,
		posterindex: 0
}

  ];




	/* ADD VARIABLES FOR STEP 3 HERE */
	$scope.title = "IMDB + Palash's Top 8 Movies";
	$scope.owner = "Palash Jain";
	$scope.github = "https://github.com/pj92/is219s17Jain-p3";







	/* ADD FUNCTIONS FOR STEP 7 HERE */

	$scope.like = function(index){
		$scope.movies[index].likes++;
	};
	$scope.dislike = function(index){
		$scope.movies[index].dislikes--;
	};
	$scope.posterClick = function(index){
		if($scope.movies[index].posterindex < ($scope.movies[index].posters.length - 1)){
			$scope.movies[index].posterindex++;
		}
		else{
			$scope.movies[index].posterindex = 0;
		}
	};

	$scope.timeText= function(minutes){
 			$scope.hours= Math.round(minutes/ 60) ;
 			$scope.minutes= minutes %60;

 			return $scope.hours + 'hr ' + $scope.minutes + 'min'

 	};








}]);
