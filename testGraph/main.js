window.setInterval(function(){
	if(document.getElementById('drawToMe')!= null){
	var checkDom = document.getElementById('drawToMe');
	
	if(checkDom.getAttribute('type') == "logGraph" && checkDom.getAttribute('addfakes') == "true" && (checkDom.getAttribute('array') == "undefined" || checkDom.getAttribute('array') == null))
		{
			 randomAdd(1 ,document.getElementById('drawToMe').getAttribute("type") , document.getElementById('drawToMe').getAttribute("array"));
			 logDat('drawToMe','logGraph', new Array('Distance versus time for two inputs', 'Distance from point / Ball width (px)', 'Time taken (ms)', new Array(new Array('Device One', '#0000FF', 'logResults[0]'), new Array('Device Two', '#FF0000', 'logResults[1]'))));	
		}
	if(checkDom.getAttribute('type') == "equiVariScatter" && checkDom.getAttribute('addfakes') == "true" && (checkDom.getAttribute('array') == "undefined" || checkDom.getAttribute('array') == null))
		{
			 randomAdd(1 ,document.getElementById('drawToMe').getAttribute("type") , document.getElementById('drawToMe').getAttribute("array"));	
			logDat('drawToMe','equiVariScatter', new Array('Distance versus time for four inputs', 'Distance from point / Ball width (px)', 'Time taken (ms)', new Array(new Array('Big Blue', '#0000FF', 'equiVariResults[0]'), new Array('Medium Green', '#00FF00', 'equiVariResults[1]'), new Array('Big Red', '#FF0000', 'equiVariResults[2]'), new Array('Small Yellow', '#FFFF00', 'equiVariResults[3]'))));	
		}
	if(checkDom.getAttribute('type') == "equaLongScatter" && checkDom.getAttribute('addfakes') == "true" && (checkDom.getAttribute('array') == "undefined" || checkDom.getAttribute('array') == null))
		{
			 randomAdd(1 ,document.getElementById('drawToMe').getAttribute("type") , document.getElementById('drawToMe').getAttribute("array"));	
			logDat('drawToMe','equaLongScatter', new Array('Distance versus time for three inputs', 'Distance from point / Ball width (px)', 'Time taken (ms)', new Array(new Array('Small Blue', '#0000FF', 'equaLongResults[0]'), new Array('Medium Green', '#00FF00', 'equaLongResults[1]'), new Array('Big Red', '#FF0000', 'equaLongResults[2]'))));
		}

	if(checkDom.getAttribute('type') == "diffDistScatter" && checkDom.getAttribute('addfakes') == "true" && (checkDom.getAttribute('array') == "undefined" || checkDom.getAttribute('array') == null))
		{
			 randomAdd(1 ,document.getElementById('drawToMe').getAttribute("type") , document.getElementById('drawToMe').getAttribute("array"));	
			logDat('drawToMe','diffDistScatter', new Array('Distance versus time for three inputs', 'Distance from point / Ball width (px)', 'Time taken (ms)', new Array(new Array('Medium Blue', '#0000FF', 'diffDistResults[0]'), new Array('Medium Green', '#00FF00', 'diffDistResults[1]'), new Array('Medium Red', '#FF0000', 'diffDistResults[2]'))));
		}

	if(checkDom.getAttribute('array') == "diffDistArr" && checkDom.getAttribute('addfakes') == "true" && checkDom.getAttribute('type') == "dotPattern")
		{
			 randomAdd(1 ,document.getElementById('drawToMe').getAttribute("type") , document.getElementById('drawToMe').getAttribute("array"));	
			graphRender('dotPattern','diffDistArr','Average time taken to click varidistant, equal size buttons.', 'drawToMe');
		}

	if(checkDom.getAttribute('array') == "equiVariArr" && checkDom.getAttribute('addfakes') == "true" && checkDom.getAttribute('type') == "dotPattern")
		{
			 randomAdd(1 ,document.getElementById('drawToMe').getAttribute("type") , document.getElementById('drawToMe').getAttribute("array"));	
			graphRender('dotPattern','equiVariArr','Average time taken to click varidistant, different size buttons', 'drawToMe');
		}

	if(checkDom.getAttribute('array') == "equaLongArr" && checkDom.getAttribute('addfakes') == "true" && checkDom.getAttribute('type') == "dotPattern")
		{
			 randomAdd(1 ,document.getElementById('drawToMe').getAttribute("type") , document.getElementById('drawToMe').getAttribute("array"));	
				graphRender('dotPattern','equaLongArr','Average time taken to click equidistant, different size buttons.', 'drawToMe');
		}		
	}
}, 1000);
							
(function() {
	var presentation = new mankini.Presentation( document.body );

	presentation.builder
				.slide()
			.state("SVG Test")
				.action(function(animate, $slide) {
					$slide.addClass('paper-test');
					$container = $('<div/>').appendTo( $slide ).css({
						position: 'absolute',
						top: 0,
						left: 0
					});

					$.ajax('../imgs/logos/ie6.png').done(function(result) {
						$( result.documentElement ).appendTo( $container );
					});
				})
		.slideSectionTitle("Fitts' Law", 'A demonstration for WeLikePie')
			.action(
				function(animate, $slide ) {
					$('<div class="hidden" id = "drawToMe"></div>').appendTo( $slide ).css({
						width:0,
						height:0,
						display:'hidden'
					})
		
					})
			.transition('fade')
		.slideHeading('√-1 DOES NOT EXIST.')
			.action(
				function(animate, $slide ) {
					$('<div class="renderBox" id = "drawToMe" type = "logGraph"></div>').appendTo( $slide ).css({
						position: 'absolute',
						top: 110,
						left: 112,
						width: 800,
						height: 500
					})
						logDat($slide.get(0).childNodes[1],'logGraph', new Array('Distance versus time for two inputs', 'Distance from point / Ball width (px)', 'Time taken (ms)', new Array(new Array('Device One', '#0000FF', 'logResults[0]'), new Array('Device Two', '#FF0000', 'logResults[1]'))));
					})
			.slideHeading('√-1 DOES NOT EXIST.')
					.action(
				function(animate, $slide ) {
					$('<div class="renderBox" id = "drawToMe" type = "logGraph" addfakes = "true"></div>').appendTo( $slide ).css({
						position: 'absolute',
						top: 110,
						left: 112,
						width: 800,
						height: 500
					});
					logDat($slide.get(0).childNodes[1],'logGraph', new Array('Distance versus time for two inputs', 'Distance from point / Ball width (px)', 'Time taken (ms)', new Array(new Array('Device One', '#0000FF', 'logResults[0]'), new Array('Device Two', '#FF0000', 'logResults[1]'))));
					//start timer here, run probability every second
					
					}
					)
				
			.transition('fade')
		.slideHeading('PSA: don\'t drink and derive!')
			.action(function(animate, $slide) {
					$container = $('<div class="renderBox" id = "drawToMe" type="equiVariScatter"></div>').appendTo( $slide ).css({
						position: 'absolute',
						top: 110,
						left: 112,
						width:800,
						height:500
					});
					logDat($slide.get(0).childNodes[1],'equiVariScatter', new Array('Distance versus time for four inputs', 'Distance from point / Ball width (px)', 'Time taken (ms)', new Array(new Array('Big Blue', '#0000FF', 'equiVariResults[0]'), new Array('Medium Green', '#00FF00', 'equiVariResults[1]'), new Array('Big Red', '#FF0000', 'equiVariResults[2]'), new Array('Small Yellow', '#FFFF00', 'equiVariResults[3]'))));
					})
	
		.slideHeading('PSA: don\'t drink and derive!')
			.action(function(animate, $slide) {
					$container = $('<div class="renderBox" id = "drawToMe" type="equiVariScatter" addfakes = "true"></div>').appendTo( $slide ).css({
						position: 'absolute',
						top: 110,
						left: 112,
						width:800,
						height:500
					});
					logDat($slide.get(0).childNodes[1],'equiVariScatter', new Array('Distance versus time for four inputs', 'Distance from point / Ball width (px)', 'Time taken (ms)', new Array(new Array('Big Blue', '#0000FF', 'equiVariResults[0]'), new Array('Medium Green', '#00FF00', 'equiVariResults[1]'), new Array('Big Red', '#FF0000', 'equiVariResults[2]'), new Array('Small Yellow', '#FFFF00', 'equiVariResults[3]'))));
					})
			.transition('fade')
		.slideHeading('80085 , \'nuff said.')
			.action(function(animate, $slide) {
					$container = $('<div class="renderBox" id = "drawToMe" type = "equaLongScatter"></div>').appendTo( $slide ).css({
						position: 'absolute',
						top: 110,
						left: 112,
						width:800,
						height:500
					});
					logDat($slide.get(0).childNodes[1],'equaLongScatter', new Array('Distance versus time for three inputs', 'Distance from point / Ball width (px)', 'Time taken (ms)', new Array(new Array('Small Blue', '#0000FF', 'equaLongResults[0]'), new Array('Medium Green', '#00FF00', 'equaLongResults[1]'), new Array('Big Red', '#FF0000', 'equaLongResults[2]'))));
					})
	.slideHeading('80085 , \'nuff said.')
			.action(function(animate, $slide) {
					$container = $('<div class="renderBox" id = "drawToMe" type = "equaLongScatter" addfakes = "true"></div>').appendTo( $slide ).css({
						position: 'absolute',
						top: 110,
						left: 112,
						width:800,
						height:500
					});
					logDat($slide.get(0).childNodes[1],'equaLongScatter', new Array('Distance versus time for three inputs', 'Distance from point / Ball width (px)', 'Time taken (ms)', new Array(new Array('Small Blue', '#0000FF', 'equaLongResults[0]'), new Array('Medium Green', '#00FF00', 'equaLongResults[1]'), new Array('Big Red', '#FF0000', 'equaLongResults[2]'))));
					})
			.transition('fade')
		.slideHeading('Graphing things, as easy as 3.14.')
			.action(function(animate, $slide) {
					$container = $('<div class="renderBox" id = "drawToMe" type = "diffDistScatter"></div>').appendTo( $slide ).css({
						position: 'absolute',
						top: 110,
						left: 112,
						width:800,
						height:500
					});
					logDat($slide.get(0).childNodes[1],'diffDistScatter', new Array('Distance versus time for three inputs', 'Distance from point / Ball width (px)', 'Time taken (ms)', new Array(new Array('Medium Blue', '#0000FF', 'diffDistResults[0]'), new Array('Medium Green', '#00FF00', 'diffDistResults[1]'), new Array('Medium Red', '#FF0000', 'diffDistResults[2]'))));
					})
			.slideHeading('Graphing things, as easy as 3.14.')
			.action(function(animate, $slide) {
					$container = $('<div class="renderBox" id = "drawToMe" type = "diffDistScatter" addfakes = "true"></div>').appendTo( $slide ).css({
						position: 'absolute',
						top: 110,
						left: 112,
						width:800,
						height:500
					});
					logDat($slide.get(0).childNodes[1],'diffDistScatter', new Array('Distance versus time for three inputs', 'Distance from point / Ball width (px)', 'Time taken (ms)', new Array(new Array('Medium Blue', '#0000FF', 'diffDistResults[0]'), new Array('Medium Green', '#00FF00', 'diffDistResults[1]'), new Array('Medium Red', '#FF0000', 'diffDistResults[2]'))));
					})
					.transition('fade') 
				.slideHeading('Why is six afraid of seven?')
		.action(function(animate, $slide) {
					$container = $('<div class="renderBox" id = "drawToMe" type = "dotPattern" array="equiVariArr"></div>').appendTo( $slide ).css({
						position: 'absolute',
						top: 110,
						left: 112,
						width:800,
						height:500
					});
					graphRender('dotPattern','equiVariArr','Average time taken to click varidistant, different size buttons', $slide.get(0).childNodes[1]);
					})
					
				.slideHeading('Why is six afraid of seven?')
		.action(function(animate, $slide) {
					$container = $('<div class="renderBox" id = "drawToMe" type = "dotPattern" array="equiVariArr" addfakes = "true"></div>').appendTo( $slide ).css({
						position: 'absolute',
						top: 110,
						left: 112,
						width:800,
						height:500
					});
					graphRender('dotPattern','equiVariArr','Average time taken to click varidistant, different size buttons', $slide.get(0).childNodes[1]);
					})
			.transition('fade')
		.slideHeading('Because seven\'s an utter psychopath.')
			.action(function(animate, $slide) {
					$container = $('<div class="renderBox" id = "drawToMe" type = "dotPattern" array="equaLongArr"></div>').appendTo( $slide ).css({
						position: 'absolute',
						top: 110,
						left: 112,
						width:800,
						height:500
					});
					graphRender('dotPattern','equaLongArr','Average time taken to click equidistant, different size buttons.', $slide.get(0).childNodes[1]);
					})
			.slideHeading('Because seven\'s an utter psychopath.')
			.action(function(animate, $slide) {
					$container = $('<div class="renderBox" id = "drawToMe" type = "dotPattern" array="equaLongArr" addfakes = "true"></div>').appendTo( $slide ).css({
						position: 'absolute',
						top: 110,
						left: 112,
						width:800,
						height:500
					});
					graphRender('dotPattern','equaLongArr','Average time taken to click equidistant, different size buttons.', $slide.get(0).childNodes[1]);
					})
			.transition('fade')
		.slideHeading('Am I punny?')
			.action(function(animate, $slide) {
					$container = $('<div class="renderBox" id = "drawToMe" type = "dotPattern" array="diffDistArr"></div>').appendTo( $slide ).css({
						position: 'absolute',
						top: 110,
						left: 112,
						width:800,
						height:500
					});
					graphRender('dotPattern','diffDistArr','Average time taken to click varidistant, equal size buttons.', $slide.get(0).childNodes[1]);
					})
		.slideHeading('Am I punny?')
			.action(function(animate, $slide) {
					$container = $('<div class="renderBox" id = "drawToMe" type = "dotPattern" array="diffDistArr" addfakes = "true"></div>').appendTo( $slide ).css({
						position: 'absolute',
						top: 110,
						left: 112,
						width:800,
						height:500
					});
					graphRender('dotPattern','diffDistArr','Average time taken to click varidistant, equal size buttons.', $slide.get(0).childNodes[1]);
					})
			.transition('fade')
	/* TODOs
		.slideTitle(mainTitle, subTitle)
			.state(name)
				.video( url, classNames )
				.videoPlay( pauseAtOptional )
				.videoSeek( time )
				.setActionContainer( $elm ) // stuff goes in here from now on ($elm created & inserted in a custom action)

		// Port glow2 property animation stuff over, but use raf, for transforming svg
		// Browser iframe for demos - need button icons & server toggle
		// Lanyrd logo
		// Slide selector in notes pane
		// Need to capture hiding the pointer in iframes - this should focus out of iframe too
	*/

	
	;
presentation.start();
})();
