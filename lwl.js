/* TO DO *************************************

Not sure how to replicate:
A cloned Resilience card (card175_clone) with the "drawnby" name attached and darkened ended up in Jude's power ups.
He could infinitely click on it and it would never clear the DOM.

When player has 2 lizards and the second one is stunned but not the first, when they use resilience it incorrectly
unstuns the first one instead of the stunned one. Haven't tested with more than 2 lizards or if both lizards are stunned

Verify that resilience can be used on stunned lizards at all times.

Work on any todos throughout the code

*********************************************/

function isTouchDevice() {
  return 'ontouchstart' in window // works on most browsers 
      || window.navigator.msMaxTouchPoints > 0; // works on ie10
}

var context;
var soundLoader;
if(!isTouchDevice()) {
	var splashloop = new SeamlessLoop();
	splashloop.addUri('./audio/splash.wav', 2500, 'splash');
}

// Fix up prefixing
window.AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext();

soundLoader = new BufferLoader(
	context,
	[
	  	'./audio/applyaftershock.wav', // 0
		'./audio/applybrownout.flac', // 1
		'./audio/applycard.wav', // 2
		'./audio/applycloak.wav', // 3
		'./audio/applyforcefield.mp3', // 4
		'./audio/applymaximumpower.wav', // 5
		'./audio/applymechanic1.wav', // 6
		'./audio/applymechanic2.ogg', // 7
		'./audio/applymultishot.wav', // 8
		'./audio/applymultishot2.ogg', // 9
		'./audio/applyoverdrive.wav', // 10
		'./audio/applystickyfingers.wav', // 11
		'./audio/applysuperscope.wav', // 12
		'./audio/applysuperscope2.wav', // 13
		'./audio/applysuperscope3.wav', // 14
		'./audio/applysuperscope4.wav', // 15
		'./audio/applyupgradeslot.wav', // 16
		'./audio/attack.wav', // 17
		'./audio/battle.wav', // 18
		'./audio/battlebegin.wav', // 19
		'./audio/blackout.wav', // 20
		'./audio/blackout2.wav', // 21
		'./audio/click.wav', // 22
		'./audio/click2.wav', // 23 <-- this spot is available
		'./audio/creature.wav', // 24
		'./audio/deal.wav', // 25
		'./audio/defend.wav', // 26
		'./audio/draw.wav', // 27
		'./audio/earthquake.wav', // 28
		'./audio/earthquake2.wav', // 29
		'./audio/earthquake3.wav', // 30
		'./audio/earthquake4.wav', // 31
		'./audio/emp.mp3', // 32
		'./audio/fatality.wav', // 33
		'./audio/fatalityblocked.mp3', // 34
		'./audio/frenzy.wav', // 35
		'./audio/gameover.mp3', // 36
		'./audio/hidefooter.mp3', // 37
		'./audio/joinsfight.wav', // 38
		'./audio/nerf.wav', // 39
		'./audio/notice.wav', // 40
		'./audio/playeradd.mp3', // 41
		'./audio/playerremove.wav', // 42
		'./audio/primeaftershock.wav', // 43
		'./audio/primebrownout.mp3', // 44
		'./audio/primecard.wav', // 45
		'./audio/primecloak.mp3', // 46
		'./audio/primefatality.wav', // 47
		'./audio/primemechanic.wav', // 48
		'./audio/primeupgradeslot.wav', // 49
		'./audio/resilience.wav', // 50
		'./audio/showfooter.wav', // 51
		'./audio/splash.wav', // 52
		'./audio/start.wav', // 53
		'./audio/stun.wav', // 54
		'./audio/turbo.wav', // 55
		'./audio/turbo2.wav', // 56
		'./audio/turbo3.wav', // 57
		'./audio/unprimecard.wav', // 58
		'./audio/unprimecloak.mp3', // 59
		'./audio/unprimemechanic.wav', // 60
		'./audio/unprimeupgradeslot.wav', // 61
		'./audio/victory.wav', // 62
		'./audio/volume.wav', // 63
		'./audio/applynuclearreactor.wav', // 64
		//'./audio/applynuclearreactor2.wav' // 65
	],
	finishedLoading
);
soundLoader.load();

function finishedLoading(bufferList) {
  	setTimeout(function() {
		jQuery('#game-loading').addClass('hidden');
	}, 300);
}

if(isTouchDevice()) {
	setTimeout(function() {
		jQuery('.game-loading-progress').css('width', '100%');
	}, 4000);
	setTimeout(function() {
		jQuery('#game-loading').addClass('hidden');
	}, 6000);
}

function playsound(s, delay = 0) {
	if(game.playsounds) {
		setTimeout(function() {
			var sound = context.createBufferSource();
			sound.buffer = soundLoader.bufferList[s];
			sound.connect(context.destination);
			sound.start(0);
		}, delay);
	}
}


jQuery(window).on('load', function() {

	// fade in game
	jQuery('#game-outer').addClass('shown');
	game.settooltips();

});

jQuery(document).ready(function($) {

	/* JQUERY EVENT HANDLERS */

	// sounds
	$('#mutesounds').click(function() {
		game.playsounds = !game.playsounds;
		if(game.playsounds==false) {
			if(!isTouchDevice()) splashloop.stop();
		} else {
			if(!isTouchDevice()) {
				splashloop.start('splash');
				splashloop.volume(0.4);
			}
			playsound(63);
		}
	});

	$('#player3, #player4, #player5, #player6').click(function() {
		if($(this).is(':checked')) {
			game.numplayers--;
			playsound(42);
		} else {
			game.numplayers++;
			playsound(41);
		}
	});

	$('#tutorial').click(function() {
		if($(this).is(':checked')) {
			game.tutorial = false;
			playsound(51);
		} else {
			game.tutorial = true;
			playsound(37);
		}
	});

	$('#close-tutorial').click(function() {
		game.tutorial = false;
		$('body').removeClass('show-tutorial');
		$('#tutorial').trigger('click');
		$('.step').removeClass('shown');
		$('#step1').addClass('shown');																																							
	});

	$('#step1 .next-button').click(function() {
		$(this).parent().removeClass('shown');
		$('#step2').addClass('shown');
	});

	$('#step2 .next-button').click(function() {
		$(this).parent().removeClass('shown');
		$('#step3').addClass('shown');
	});

	$('#step3 .next-button').click(function() {
		$(this).parent().removeClass('shown');
		$('#step4').addClass('shown');
	});

	$('#step4 .next-button').click(function() {
		$(this).parent().removeClass('shown');
		$('#step5').addClass('shown');
	});

	$('#step5 .next-button').click(function() {
		$(this).parent().removeClass('shown');
		$('#step6').addClass('shown');
	});

	$('#step6 .next-button').click(function() {
		$(this).parent().removeClass('shown');
		game.tutorial = false;
		$('body').removeClass('show-tutorial');	
		$('#tutorial').trigger('click');
		$('#step1').addClass('shown');
	});

	$('#debugging').click(function() {
		if($(this).is(':checked')) {
			game.logactivity = false;
			$('body').removeClass('activity-log');
		} else {
			game.logactivity = true;
			$('body').addClass('activity-log');
		}
	});

	$('body').on('click', '.pulse-button', function() {
		playsound(22);
	});

	// splash
	$('#open-game').click(function(e) {
		playsound(24);
		if(!isTouchDevice()) {
			splashloop.start('splash');
			splashloop.volume(0.4);
		}
		$('#splash').addClass('hidden');
	});

	// logs 
	$('.toggle-logs').click(function(e) {
		$('body').toggleClass('show-footer');
		if($('body').hasClass('show-footer')) {
			playsound(51);
		} else {
			playsound(37);
		}
	});

	// rules
	$('.rules').click(function(e) {
		if(game.tutorial) {
			$('body').addClass('show-tutorial');
		}
		$('body').toggleClass('overlay-shown instructions-shown no-splash');
		if(!isTouchDevice()) splashloop.stop();
		if($('body').hasClass('overlay-shown')) {
			playsound(51);
		} else {
			playsound(37);
		}
	});

	$('#playername').focus();
	$('#start-game').hide();
	$('#battle, #pass, #done, #skip, #done-trapping, #continue, #ok-draw, #deal, #show-playfield, #play-again').hide();

	// enter name
	$('#playername').on('input', function(e) {
		if($(this).val()) {
			$('#start-game').show();
		} else {
			$('#start-game').hide();
		}
	});

	// start game
	$('#playername').keypress(function (e) {
		var key = e.which;
		if(key == 13)  { // enter key pressed
			$('#start-game').click();
			return false;  
		}
	}); 
	$('#start-game').click(function(e) {
		if(game.tutorial) {
			$('body').addClass('show-tutorial');
		}
		if(!isTouchDevice()) splashloop.stop();
		playsound(53);
		$('body').removeClass('overlay-shown instructions-shown playfield-shown');
		$('#footer .rules').addClass('shown');
		$('.overlay-controls').show();
		$('#deal').show();
		Shuffle(game.playernames);
		if($('#playername').val()) {
			game.playernames.unshift($('#playername').val());
		} else {
			game.playernames.unshift('Me');
		}
		game.init();
		const r = Math.floor(Math.random() * 6) + 1;
		for(i = 0; i < r; i++) {
			game.setdealer();
		}
	});

	// hide playfield
	$('#overlay-hide').click(function(e) {

		$('body').removeClass('overlay-shown playfield-shown');
		$('#show-playfield').show();

	});

	// show playfield
	$('#show-playfield').click(function(e) {

		$('body').addClass('overlay-shown playfield-shown');
		$(this).hide();

	});

	// deal
	$('#deal').click(function(e) {

		playsound(25);
		$('body').addClass('overlay-shown playfield-shown');
		$(this).hide();
		if(game.gamestatus()=='gameover') return;
		game.beginturn();
		game.populateplayfield();
		game.gameinfo();

	});

	// ok
	$('#ok-draw').click(function(e) {

		$('body').removeClass('overlay-shown playfield-shown');
		$('#done').show();
		game.arrangecards();

	});

	// ok earthquake
	$('#ok-earthquake').click(function(e) {

		$('body').removeClass('event');
		$(this).hide();
		game.clearplayfield();
		game.replenishdeck();
		game.populateplayfield();
		game.gameinfo();
		
	});

	// ok emp
	$('#ok-emp').click(function(e) {

		$('body').removeClass('emp');

	});

	// done trapping
	$('#done-trapping').click(function(e) {

		$('#done-trapping, #show-playfield').hide();
		$('.card.trap').removeClass('clickable selected');
		$('body').addClass('overlay-shown playfield-shown');
		game.buildphase();

	});

	// aftershock
	$('body').on('click', '.playfield .card.clickable.aftershocking', function(e) {

		$('.playfield .card.clickable').removeClass('aftershocking clickable');
		$('.player.human .card.trap').removeClass('clickable selected');
		$('.player.human .card.trap.after_shock').addClass('active');
		let player = game.gethumanplayer();
		let cardid = $(this).attr('id');
		let cid = cardid.replace('card', '');
		let card = $.grep(game.playfieldcards, function(e){return e.id == cid;});
		game.useaftershock(player, card[0]);
		action(card[0].name + ' destroyed by ' + player.name + '!', $(this), 'small');
		playsound(0);
		if(!game.humantrapspossible()) {
			$('#done-trapping').click();
		}

	});

	// brown out
	$('body').on('click', '.player.npc .powerup.clickable.browningout', function(e) {

		$('.player.npc .powerup.clickable').removeClass('browningout clickable');
		$('.player.human .card.trap').removeClass('clickable');
		$('.player.human .card.trap.brown_out').addClass('active');
		let player = game.gethumanplayer();
		let cardid = $(this).attr('id');
		let cid = cardid.replace('card', '');
		let otherpowerups = game.getotherpowerups(player);
		let card = $.grep(otherpowerups, function(e){return e.id == cid;});
		game.usebrownout(player, card[0]);
		action(card[0].name + ' deactivated by ' + player.name + '!', $(this), 'small');
		if(!game.humantrapspossible()) {
			$('#done-trapping').click();
		}
		playsound(1);

	});
	
	// select playfield card
	$('body').on('click', '.playfield .card.clickable:not(.aftershocking)', function(e) {

		playsound(27);
		let cardid = $(this).attr('id');
		let cid = cardid.replace('card', '');
		let card = $.grep(game.playfieldcards, function(e){return e.id == cid;});
		game.drawcard(players[(game.currentplayer-1)], card[0]);
		let done = true;
		// does this player have Sticky Fingers active?
		let stickyfingers = $.grep(players[(game.currentplayer-1)].cards, function(e){return e.name == 'Sticky Fingers';});
		if(stickyfingers.length>0) {
			if(stickyfingers[0].active==true) {
				if(players[(game.currentplayer-1)].carddrawn==false) {
					done = false;
					players[(game.currentplayer-1)].carddrawn=true;
				} else { // this is the second time through, which means sticky fingers was used
					players[(game.currentplayer-1)].stickyfingersused=true;
				}
			}
		} 
		if(done) {
			$('#pass').hide();
			$('.card').removeClass('clickable');
			game.drawcards();
		}

	});

	// pass
	$('#pass').click(function(e) {

		$('#pass').hide();
		$('.card').removeClass('clickable');
		game.drawcards();

	});

	// arrange cards
	$('body').on('click', '.player.human .card.clickable:not(.mechanizing):not(.fatalitizing):not(.cloaking):not(.resiliencing), .player.human .upgrade-slot.clickable:not(.upgrading)', function(e) {

		game.clickcard($(this));

	});

	// cloak lizard 
	$('body').on('click', '.player.human .lizard.clickable.cloaking', function(e) {

		$('.player.human .lizard').removeClass('clickable swap cloaking');
		$('.player.human .card:not(.ammo):not(.lizard):not(.deactivated)').addClass('clickable');
		$('.card.discard').removeClass('selected active');
		let cardid = $(this).attr('id');
		let cid = cardid.replace('card', '');
		let card = $.grep(lizards, function(e){return e.id == cid;});
		game.activatecloakingdevices(game.gethumanplayer(), card);
		// remove clickable class from cards that shouldn't be clickable
		game.isarrangepossible(game.gethumanplayer());
		playsound(3);

	});

	// resilience used
	$('body').on('click', '.player.human .lizard.clickable.resiliencing', function(e) {

		$('.player.human .lizard').removeClass('clickable swap resiliencing');
		$('.card.discard').removeClass('selected active');
		let cardid = $(this).attr('id');
		let cid = cardid.replace('card', '');
		let card = $.grep(lizards, function(e){return e.id == cid;});

		game.useresilience(card[0]);

		// check if we can still use resilience after using it once
		let canstilluseresilience = false;
		for (let l=0; l < lizards.length; l++) {
			if(lizards[l].stunned == true) {
				canstilluseresilience = true;
				break;
			}
		}
		if(canstilluseresilience) {
			$('.player.human .card.resilience').addClass('clickable');
		} else {
			$('.player.human .card.resilience').removeClass('clickable');
			message('Round is over. Click <span>Deal</span> to begin next round.');
		}

	});

	// upgrade slot
	$('body').on('click', '.player.human .upgrade-slot.clickable.upgrading', function(e) {

		$('.player.human .upgrade_slot').removeClass('selected active');
		let part = $(this).attr('data-part');
		let cardid = $(this).closest('.lizard').attr('id');
		let cid = cardid.replace('card', '');
		let card = $.grep(lizards, function(e){return e.id == cid;});
		game.equipupgradeslot(game.gethumanplayer(), card[0], part);
		// remove clickable class from cards that shouldn't be clickable
		game.isarrangepossible(game.gethumanplayer());
		playsound(16);

	});

	// mechanic
	$('body').on('click', '.player.human .card.clickable.mechanizing', function(e) {

		$('.player.human .mechanic.active').addClass('expended').removeClass('selected');
		$('.player.human .card.clickable').removeClass('mechanizing');
		$('.player.human .card:not(.ammo):not(.lizard):not(.deactivated)').addClass('clickable');
		let cardid = $(this).attr('id');
		let cid = cardid.replace('card', '');
		let player = game.gethumanplayer();
		let card = $.grep(player.cards, function(e){return e.id == cid;});
		game.usemechanic(player, card[0]);
		// remove clickable class from cards that shouldn't be clickable
		game.isarrangepossible(player);
		playsound(6);
		playsound(7);
	});

	// done
	$('#done').click(function(e) {

		$('#done').hide();
		$('.card, .upgrade-slot').removeClass('clickable selected upgrading primed');
		game.arrangecards();

	});

	// battle
	$('#battle').click(function(e) {

		playsound(19);
		$('#battle').hide();
		game.battlephase();

	});

	// continue battle
	$('#continue').click(function(e) {

		$('#continue').hide();
		game.dobattle();

	});

	// select lizard to target
	$('body').on('click', '.player:not(.human) .playercards .lizard.clickable', function(e) {

		$('#skip').hide();
		let cardid = $(this).attr('id');
		let cid = cardid.replace('card', '');
		let card = $.grep(lizards, function(e){return e.id == cid;});

		// check for reinforcements (human player is using fatality)
		let reinforcementcard = $('.lizard.reinforcement');
		if(reinforcementcard.length>0) {
			let reinforcementid = reinforcementcard.attr('id');
			let rid = reinforcementid.replace('card', '');
			let reinforcement = $.grep(lizards, function(e){return e.id == rid;});
			game.dobattle(card[0], false, reinforcement[0]);
		} else {
			game.dobattle(card[0]);
		}

	});

	// select second lizard to attack
	$('body').on('click', '.player.human .playercards .lizard.clickable:not(.cloaking):not(.resiliencing)', function(e) {

		let cardid = $(this).attr('id');
		let cid = cardid.replace('card', '');
		let card = $.grep(lizards, function(e){return e.id == cid;});
		$(this).addClass('attacking reinforcement');
		$('.player.human .playercards .lizard:not(.attacking)').removeClass('clickable');
		message('<span>' + card[0].name + '</span> joins the fight! Choose your victim.');
		playsound(38);

	});

	// skip
	$('body').on('click', '#skip', function(e) {

		$('#skip').hide();
		game.dobattle(null, true);

	});

	// play again 
	$('#play-again, #new-game').click(function(e) {

		$('#start-game').click();

	});

	$('.toggle-button').click(function(e) {

		$(this).parent().siblings().removeClass('open');
		if($(this).parent().hasClass('open')) {
			$('.gameinfo, .gameinfo-background').removeClass('open');
		} else {
			$('.gameinfo, .gameinfo-background').addClass('open');
		}
		$(this).parent().toggleClass('open');
		if($(this).parent().hasClass('open')) {
			playsound(37);
		} else {
			playsound(51);
		}

	});

});

// setup the cards
function Card(id, name, type, part, desirability, slots, speed, stunned, cloaked, used, active, deactivated, mechanic, skipped) {
	this.id = id;
	this.name = name;
	this.type = type;
	this.part = part;
	this.desirability = desirability;
	this.slots = slots;
	this.speed = speed;
	this.stunned = stunned;
	this.cloaked = cloaked;
	this.used = used;
	this.active = active;
	this.deactivated = deactivated;
	this.mechanic = mechanic;
	this.skipped = skipped;
}
let deck = [];

// setup the players
function Player(name, type, id, cards, reserve, points, ammo, attacked, turntaken, carddrawn, stickyfingersused) {
	this.name = name;
	this.type = type;
	this.id = id;
	this.cards = cards;
	this.reserve = reserve;
	this.points = points;
	this.ammo = ammo;
	this.attacked = attacked;
	this.turntaken = turntaken;
	this.carddrawn = carddrawn;
	this.stickyfingersused = stickyfingersused;
}
let players = [];
let lizards = [];

function rollDie() {
	return Math.floor(Math.random() * (6 - 1 + 1) + 1);
}

function compareSpeed( a, b ) {
	let v = a.speed - b.speed;
	if(v==0) {
		if(rollDie()>3) {
			v = 1;
		} else {
			v = -1;
		}
	}
	return v;
}

function compareDesirability( a, b ) {
	let v = a.desirability - b.desirability;
	if(v==0) {
		if(rollDie()>3) {
			v = 1;
		} else {
			v = -1;
		}
	}
	return v;
}

// sometimes a nested object array needs sorted
function compareDesirabilityCard( a, b ) {
	let v = a.card.desirability - b.card.desirability;
	if(v==0) {
		if(rollDie()>3) {
			v = 1;
		} else {
			v = -1;
		}
	}
	return v;
}

function compareValue( a, b ) {
	let v = a.value - b.value;
	if(v==0) {
		if(rollDie()>3) {
			v = 1;
		} else {
			v = -1;
		}
	}
	return v;
}

function message(msg, type = 'status', elem = '#message') {
	// show or log messages
	if(type=='status') {
		$(elem).html(msg);
	} else if(type=='buildlog') {
		$('.buildlog-text').append(msg);
	} else if(type=='battlelog') {
		$('.battlelog-text').append(msg);
	} else if(type=='debug') {
		if(game.logactivity) {
			$(elem).append(msg);
		}
	}
}

function action(msg, elem, size = 'large', delay = 0) {
	// displays a temporary action message that disappears in a few seconds
	let $action = $('<div>', {'class': 'action-alert'});
	$action.addClass(size).html(msg);
	let $left  = $(elem)[0].getBoundingClientRect().left + $(window)['scrollLeft']();
	let $top   = $(elem)[0].getBoundingClientRect().top + $(window)['scrollTop']();
	let $rotate = Math.floor(Math.random() * 10) + 1;
	$rotate *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
	let $scale = Math.floor(Math.random() * 6) + 1;
	let $toprandom = Math.floor(Math.random() * 40) + 1;
	$toprandom *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
	let $leftrandom = Math.floor(Math.random() * 60) + 1;
	$leftrandom *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
	$action.css('transform', 'rotate(' + $rotate + 'deg) scale(1.' + $scale + ')');
	$action.css('top', ($top + $toprandom) + 'px');
	$action.css('left', ($left + $leftrandom) + 'px');
	setTimeout(function() {
		$('body').append($action);
		$action.fadeOut(4000 + delay);
		// check if message is out of viewport
		let $actionleft  = $action[0].getBoundingClientRect().left + $(window)['scrollLeft']();
		let $actionright  = $actionleft + $action.width();
		let $actiontop  = $action[0].getBoundingClientRect().top + $(window)['scrollLeft']();
		let $actionbottom  = $actiontop + $action.height();
		if($actionleft < 0) {
			$action.css('left', '60px');
		} else if($actionright > $(window).width()) {
			$action.css('left', 'auto');
			$action.css('right', '60px');
		}
		if($actiontop < 0) {
			$action.css('top', '60px');
		} else if($actionbottom > $(window).height()) {
			$action.css('top', 'auto');
			$action.css('bottom', '60px');
		}
		setTimeout(function() {
			$action.remove();
		}, (4000 + delay));
	}, delay);
}

function event(eventname, ext = 'wav') {
	let safename = eventname.toLowerCase().replace(/ /g,"").replace(/./g,"");
	let cardname = eventname.toLowerCase().replace(/ /g,"_").replace(/./g,"");
	$('body').addClass('event');
	message(eventname + '!<br />', 'debug', '.build-activity');
	message(eventname + '!<br />', 'buildlog');
	message('');
	$('#current-event').html('<span class="tooltip" data-powertip="The ' + eventname + ' event is in effect this round.">' + eventname + '!</span>');
}

function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

// play the game!
let game = {
	humanplayer : true,
	numplayers : 4, // default 4
	playernames : ['The Stealthmaster', 'Dr. Coldblood', 'Queen of Scales', 'Voidman', 'Forktongue'],
	victorypoints : 15, // default 15
	numupgrade1cards : 12, // default 12
	numupgrade2cards : 8, // default 8
	numupgrade3cards : 4, // default 4
	numammo1cards : 20, // default 20
	numammo2cards : 20, // default 20
	numammo3cards : 20, // default 20
	numeachtrapcards : 1, // default 1
	numeacheventcards : 1, // default 1
	numupgradeslotcards : 8, // default 8
	numcloakingdevicecards : 8, // default 8
	numresiliencecards : 20, // default 20
	numempcards : 5, // default 5
	numfatalitycards : 3, // default 3
	numeachpowerupcards : 1, // default 1
	reservecards : 1, // default 1
	ammoslots : 1, // default 1
	fadetime : 100,
	delay : 0,
	logactivity : false,
	playsounds : true,
	tutorial : true,
	cardsperround : function() {
		return game.numplayers + 2; // default + 2
	},
	init : function() {
		if(game.logactivity) $('body').addClass('activity-log');
		$('#battle, #pass, #done, #done-trapping, #skip, #continue, #ok-draw, #ok-earthquake, #show-playfield, #play-again').hide();
		$('#controls').css('opacity', 1);
		message('Click <span>deal</span> to start a new game.');
		$('.players').empty();
		$('body').removeClass('game-over');
		game.cardsowned = 0;
		deck = [];
		players = [];
		lizards = [];
		game.playfieldcards = [];
		game.discardedcards = [];
		game.state = 'beginround';
		game.nocards = false;
		game.round = 0;
		game.currentplayer = 0;
		game.currentlizard = 0;
		game.lasttarget = {};
		game.humantrapsset = false;
		game.roundsplayed = 0;
		game.battleswon = 0;
		game.battleslost = 0;
		game.winner = {};
		game.availablecards = deck;
		game.gameover = false;
		game.emp = false;
		game.nerf = false;
		game.turbo = false;
		game.frenzy = false;
		game.blackout = false;
		game.humantrapsset = false;
		game.fatalityactive = false;
		// create players
		for(let i=0; i<game.numplayers; i++) {
			let dealer = i==0 ? ' dealer' : '';
			let ptype = (i==0 && game.humanplayer) ? 'human' : 'npc';
			//let $w = ptype=='human' ? '100%' : 'calc(100% / ' + (game.numplayers - 1) + ')';
			let $w = 'calc(100% / ' + game.numplayers + ')';
			$('.players').append('<div class="player ' + ptype + dealer + '" id="player'+(i+1)+'" style="width:' + $w + ';"><div class="player-inner"><div class="player-name" style="width:' + $w + ';"><span>Player ' + (i+1) + ': ' + game.playernames[i] + '</span><div class="points tooltip" data-powertip="Victory points (first to 20 wins)">0</div></div><div class="dealer-button">Dealer</div><div class="playercards clearfix"><div class="topcards clearfix"><div class="ammo-slot tooltip" data-powertip="Each player has 1 ammo slot">Energy</div><div class="reserve-slot tooltip" data-powertip="Each player has 1 upgrade reserve slot">Reserve</div></div></div></div><div class="dice-results"></div></div>');
			let player = new Player(game.playernames[i], ptype, 'player' + (i+1), [], {}, 0, 0, false, false, false, false);
			players.push(player);
		}
		// build deck
		let j = 1;
		// level 1 cards
		let level = 1;
		for(let i=0; i<game.numupgrade1cards; i++) {
			deck.push(new Card(j, 'Laser ' + level, 'upgrade', 'attack', level));j++;
			deck.push(new Card(j, 'Shield ' + level, 'upgrade', 'defense', level));j++;
			deck.push(new Card(j, 'Booster ' + level, 'upgrade', 'speed', level));j++;
		}
		for(let i=0; i<game.numammo1cards; i++) {
			deck.push(new Card(j, 'Energy ' + level, 'ammo', 'energy', level));j++;
		}
		// level 2 cards
		level = 2;
		for(let i=0; i<game.numupgrade2cards; i++) {
			deck.push(new Card(j, 'Laser ' + level, 'upgrade', 'attack', level));j++;
			deck.push(new Card(j, 'Shield ' + level, 'upgrade', 'defense', level));j++;
			deck.push(new Card(j, 'Booster ' + level, 'upgrade', 'speed', level));j++;
		}
		for(let i=0; i<game.numammo2cards; i++) {
			deck.push(new Card(j, 'Energy ' + level, 'ammo', 'energy', level));j++;
		}
		// level 3 cards
		level = 3;
		for(let i=0; i<game.numupgrade3cards; i++) {
			deck.push(new Card(j, 'Laser ' + level, 'upgrade', 'attack', level));j++;
			deck.push(new Card(j, 'Shield ' + level, 'upgrade', 'defense', level));j++;
			deck.push(new Card(j, 'Booster ' + level, 'upgrade', 'speed', level));j++;
		}
		for(let i=0; i<game.numammo3cards; i++) {
			deck.push(new Card(j, 'Energy ' + level, 'ammo', 'energy', level));j++;
		}
		// lizard cards
		deck.push(new Card(j, 'Gecko', 'lizard', 'lizard', 3, {'attack' : [{}], 'defense' : [{}, {}], 'speed' : [{}, {}, {}]}, 0, false, false, false, false, false, false, false));j++;
		deck.push(new Card(j, 'Nile Monitor', 'lizard', 'lizard', 3, {'attack' : [{}], 'defense' : [{}, {}, {}], 'speed' : [{}, {}]}, 0, false, false, false, false, false, false, false));j++;
		deck.push(new Card(j, 'Iguana', 'lizard', 'lizard', 3, {'attack' : [{}, {}], 'defense' : [{}], 'speed' : [{}, {}, {}]}, 0, false, false, false, false, false, false, false));j++;
		deck.push(new Card(j, 'Tree Crocodile', 'lizard', 'lizard', 3, {'attack' : [{}, {}], 'defense' : [{}, {}], 'speed' : [{}, {}]}, 0, false, false, false, false, false, false, false));j++;
		deck.push(new Card(j, 'Chameleon', 'lizard', 'lizard', 3, {'attack' : [{}, {}], 'defense' : [{}, {}, {}], 'speed' : [{}]}, 0, false, false, false, false, false, false, false));j++;
		deck.push(new Card(j, 'Komodo Dragon', 'lizard', 'lizard', 3, {'attack' : [{}, {}, {}], 'defense' : [{}], 'speed' : [{}, {}]}, 0, false, false, false, false, false, false, false));j++;
		if(game.numplayers>2) {
			deck.push(new Card(j, 'Gila Monster', 'lizard', 'lizard', 3, {'attack' : [{}, {}, {}], 'defense' : [{}, {}], 'speed' : [{}]}, 0, false, false, false, false, false, false, false));j++;
			deck.push(new Card(j, 'Gecko', 'lizard', 'lizard', 3, {'attack' : [{}], 'defense' : [{}, {}], 'speed' : [{}, {}, {}]}, 0, false, false, false, false, false, false, false));j++;
			if(game.numplayers>3) {
				deck.push(new Card(j, 'Nile Monitor', 'lizard', 'lizard', 3, {'attack' : [{}], 'defense' : [{}, {}, {}], 'speed' : [{}, {}]}, 0, false, false, false, false, false, false, false));j++;
				deck.push(new Card(j, 'Iguana', 'lizard', 'lizard', 3, {'attack' : [{}, {}], 'defense' : [{}], 'speed' : [{}, {}, {}]}, 0, false, false, false, false, false, false, false));j++;
				if(game.numplayers>4) {
					deck.push(new Card(j, 'Tree Crocodile', 'lizard', 'lizard', 3, {'attack' : [{}, {}], 'defense' : [{}, {}], 'speed' : [{}, {}]}, 0, false, false, false, false, false, false, false));j++;
					deck.push(new Card(j, 'Chameleon', 'lizard', 'lizard', 3, {'attack' : [{}, {}], 'defense' : [{}, {}, {}], 'speed' : [{}]}, 0, false, false, false, false, false, false, false));j++;
					if(game.numplayers>5) {
						deck.push(new Card(j, 'Komodo Dragon', 'lizard', 'lizard', 3, {'attack' : [{}, {}, {}], 'defense' : [{}], 'speed' : [{}, {}]}, 0, false, false, false, false, false, false, false));j++;
						deck.push(new Card(j, 'Gila Monster', 'lizard', 'lizard', 3, {'attack' : [{}, {}, {}], 'defense' : [{}, {}], 'speed' : [{}]}, 0, false, false, false, false, false, false, false));j++;
					}
				}
			}
		}
		// traps
		for(let i=0; i<game.numeachtrapcards; i++) {
			deck.push(new Card(j, 'After Shock', 'powerup', 'trap', 7));j++;
			for(let ii=0; ii<1; ii++) {
				deck.push(new Card(j, 'Brown Out', 'powerup', 'trap', 7));j++;
			}
			for(let ii=0; ii<1; ii++) {
				deck.push(new Card(j, 'Sticky Fingers', 'powerup', 'trap', 10));j++;
			}
		}
		// events
		for(let i=0; i<game.numeacheventcards; i++) {
			for(let ii=0; ii<1; ii++) {
				deck.push(new Card(j, 'Earthquake', 'event', 'event', 4));j++;
			}
			for(let ii=0; ii<1; ii++) {
				deck.push(new Card(j, 'Black Out', 'event', 'event', 4));j++;
			}
			deck.push(new Card(j, 'Nerf', 'event', 'event', 4));j++;
			deck.push(new Card(j, 'Turbo', 'event', 'event', 4));j++;
			deck.push(new Card(j, 'Frenzy', 'event', 'event', 4));j++;
			for(let ii=0; ii<1; ii++) {
				deck.push(new Card(j, 'Auto E.M.P.', 'event', 'event', 4));j++;
			}
		}
		// upgrade slots
		for(let i=0; i<game.numupgradeslotcards; i++) {
			deck.push(new Card(j, 'Upgrade Slot', 'powerup', 'discard', 2));j++;
		}
		// cloaking device
		for(let i=0; i<game.numcloakingdevicecards; i++) {
			deck.push(new Card(j, 'Cloaking Device', 'powerup', 'discard', 3));j++;
		}
		// resilience
		for(let i=0; i<game.numresiliencecards; i++) {
			deck.push(new Card(j, 'Resilience', 'powerup', 'discard', 3));j++;
		}
		// emp
		for(let i=0; i<game.numempcards; i++) {
			deck.push(new Card(j, 'E.M.P.', 'powerup', 'discard', 3));j++;
		}
		// fatality
		for(let i=0; i<game.numfatalitycards; i++) {
			deck.push(new Card(j, 'Fatality', 'powerup', 'discard', 4));j++;
		}
		// powerups
		for(let i=0; i<game.numeachpowerupcards; i++) {
			for(let ii=0; ii<1; ii++) {
				deck.push(new Card(j, 'Nuclear Reactor', 'powerup', 'permanent', 12));j++;
			}
			for(let ii=0; ii<1; ii++) {
				deck.push(new Card(j, 'Maximum Power', 'powerup', 'permanent', 11));j++;
			}
			deck.push(new Card(j, 'Super Scope', 'powerup', 'permanent', 8));j++;
			deck.push(new Card(j, 'Force Field', 'powerup', 'permanent', 8));j++;
			deck.push(new Card(j, 'Multishot', 'powerup', 'permanent', 9));j++;
			for(let ii=0; ii<1; ii++) {
				deck.push(new Card(j, 'Overdrive', 'powerup', 'permanent', 8));j++;
			}
			for(let ii=0; ii<1; ii++) {
				deck.push(new Card(j, 'Mechanic', 'powerup', 'permanent', 6));j++;
			}
		}
		game.settooltips();
		game.drawfirstlizard();
	},


/********************************************
GENERAL ACTIONS
*********************************************/
	drawfirstlizard : function() {
		for(let i=0; i<game.numplayers; i++) {
			let lizardcards = $.grep(game.availablecards, function(e){return e.type == 'lizard';});
			let index = Math.floor(Math.random() * lizardcards.length);
			let card = lizardcards[index];
			// remove this card from available cards and add it to the playfield
			game.availablecards = game.availablecards.filter(obj => obj.id !== card.id);
			game.playfieldcards.push(card);
			// create card dom elements
			let div = '';
			let cardname = card.name.toLowerCase().replace(/ /g,"_");
			cardname = cardname.replace(/\./g, '');
			let csstooltip = card.type=='lizard' ? '' : 'tooltip-card ';
			let tooltipdata = card.type=="lizard" ? "" : "&lt;span class='tooltip-image " + cardname + "'&gt;&lt;span&gt;";
			let newcard = $('<div id="card' + card.id + '" class="card ' + csstooltip + card.type + ' ' + card.part + ' ' + cardname + '" data-powertip="' + tooltipdata + '" data-desirability="' + card.desirability + '"><span class="darken"></span></div>').appendTo('.playfield');
			let tooltiplizarddata = "&lt;span class='tooltip-image " + cardname + "'&gt;&lt;span&gt;";
			div = '<div class="lizard-card-image tooltip-card" data-powertip="' + tooltiplizarddata + '"><span class="darken"></span></div>';
			newcard.append(div);
			Object.keys(card.slots).forEach(function(key) {
				div = '<div class="upgrade-group upgrade-group-' + key + '">';
				for(let p=0; p<card.slots[key].length; p++) {
					div += '<div class="upgrade-slot ' + key + '-slot empty" data-part="' + key + '">' + key + '</div>';
				}
				div += '</div>';
				newcard.append(div);
			});
		}
		for (let p=game.currentplayer; p<players.length; p++) {
			let card = game.decidecard(players[p]);
			if(card) game.drawcard(players[p], card);
		}
		game.clearplayfield();
	},
	settooltips : function() {
		$('.tooltip').powerTip({
			followMouse: true,
			fadeInTime: 50,
			fadeOutTime: 30,
			closeDelay: 30,
			intentPollInterval: 50,
			intentSensitivity: 4
		});
		$('.tooltip-card').powerTip({
			followMouse: true,
			fadeInTime: 50,
			fadeOutTime: 30,
			closeDelay: 30,
			intentPollInterval: 50,
			intentSensitivity: 4,
			popupClass: 'noborder'
		});
	},
	beginturn : function() {
		game.checkforreactor();
		game.clearmechanic();
		game.resetlizards();
		game.setdealer();
		game.resetplayers();
		game.cleartraps();
		if(game.gamestatus()=='gameover') return;
		game.emp = false;
		game.nerf = false;
		game.turbo = false;
		game.frenzy = false;
		game.blackout = false;
		game.humantrapsset = false;
		game.fatalityactive = false;
		$('body').removeClass('emp event');
		$('#battle, #pass, #done, #skip, #done-trapping, #continue, #ok-draw, #ok-earthquake, #show-playfield, #play-again').hide();
		$('.dice-results').removeClass('shown');
		$('#overlay-hide').show();
		$('.buildlog-text, .battlelog-text').html('');
		message('Select a card from the playfield, or click <span>pass</span>.');
		console.clear();
	},
	endturn : function($call = null) {
		//if($call!=null) console.log('endturn called from ' + $call); // debugging
		// check for game over
		if(game.gamestatus()=='gameover') return;
		game.state = 'endround';
		game.solesurvivorcheck();
		game.clearplayfield();
		game.replenishdeck();
		game.depleteammo();
		game.delay = 0;
		$('body').removeClass('battle-phase');
		$('#battle, #skip, #done, #done-trapping, #continue, #play-again').hide();
		$('#deal').show();
		$('.card, .upgrade-slot').removeClass('clickable upgrading attacking');
		$('.fatality').removeClass('active'); // it's possible user activated fatality but didn't end up using it
		$('.card.discard').removeClass('clickable selected active');
		message('Round is over. Click <span>deal</span> to begin the next round.');
		game.revivelizards();
	},
	setdealer : function() {
		$('.player').removeClass('dealer');
		$('#' + players[0].id).addClass('dealer');
		players.push(players.shift());
	},
	gamestatus : function() {
		let gameover = false;
		let out = 'gameon';
		if(game.nocards) gameover = true;
		for (let p=0; p<players.length; p++) {
			if(players[p].points >= game.victorypoints) {
				gameover = true;
				game.winner = players[p];
			}
		}
		game.gameover = gameover;
		if(gameover) {
			out = 'gameover';
			for (let p=0; p<players.length; p++) {
				$('.game-object').append(JSON.stringify(players[p], null, 4) + '<br /><br />');
			}
			message('Game over. <span>' + game.winner.name + '</span> wins!');
			$('body').removeClass('battle-phase').addClass('game-over');
			$('#play-again').show();
			playsound(36, 1500);
			game.clearplayfield();
		}
		return out;
	},
	gameinfo : function() {
		let discardarr = game.discardedcards.map(a => a.id);
		let discardstring = discardarr.join(", ");
		$('.cards-discards').html(discardstring);
		let availablearr = game.availablecards.map(a => a.id);
		let availablestring = availablearr.join(", ");
		$('.cards-available').html(availablestring);
		$('.total-cards').html(deck.length);
		$('.cards-owned').html(game.cardsowned);
		$('.rounds-played').html(game.roundsplayed);
	},
	solesurvivorcheck : function() {
		// loop through all players and see if they receive a solesurvivor point
		for (let i=0; i < players.length; i++) {
			let unstunnedlizards = game.getunstunnedlizards(players[i]);
			if(unstunnedlizards != null) {
				if(unstunnedlizards.length == 0) {
					players[i].points += 1;
					$('#' + players[i].id + ' .points').html(players[i].points);
					game.delay += 1300;
					playsound(62, (game.delay));
					action('+1 Sole Survivor!', $('#' + players[i].id), 'huge', (game.delay));
				}
			}
		}
	},
	clearplayfield : function() {
		// clear the dom
		$('.playfield').empty();
		// add playfield cards to discard pile
		game.discardedcards.push(...game.playfieldcards);
		// remove playfield cards from available cards
		game.availablecards = game.availablecards.filter((el) => !game.playfieldcards.includes(el));
		// clear playfield cards
		game.playfieldcards = []; 
		// increment round counter
		game.roundsplayed++;
	},
	replenishdeck : function() {
		if(game.availablecards.length < game.cardsperround()) {
			game.availablecards.push(...game.discardedcards);
			game.discardedcards = [];
			if(game.availablecards.length < game.cardsperround()) {
				game.nocards = true;
			}
		}
	},
	depleteammo : function() {
		for(let i = 0; i<players.length; i++) {
			// if this player attacked, discard ammo regardless of how much was used

			let reactor = $.grep(players[i].cards, function(e){return e.name == 'Nuclear Reactor';});
			let noreactor = true;
			if(reactor.length > 0) {
				if(reactor[0].active == true) {
					noreactor = false;
				}
			}
			if(noreactor && players[i].attacked) {
				let playerammocard = $.grep(players[i].cards, function(e){return e.type == 'ammo';});
				game.discard(players[i], playerammocard[0]);
				players[i].attacked = false;
				players[i].ammo = 0;
			}
		}
	},
	revivelizards : function() {
		// loop through all previously stunned lizards and determine if lizard should be unstunned this round

		for (let l=0; l<lizards.length; l++) {
			if(lizards[l].stunned == true) {
				let p = game.getplayerfromlizard(lizards[l]);
				if(p.type=='human') {
					let attack = game.gettotalstatbypart(lizards[l], 'attack');
					// don't unstun this lizard if it doesn't have lasers
					if(attack > 0) {
						let resilience = game.canuseresilience(lizards[l], 'won', 'human', false);
						if(resilience) {
							$('.player.human .card.resilience').addClass('clickable');
							message('Round is over. You can use <span>resilience</span>, or click <span>Deal</span> to begin next round.');
						}
					}
				} else {
					let attack = game.gettotalstatbypart(lizards[l], 'attack');
					// don't unstun this lizard if it doesn't have lasers
					if(attack > 0) {
						let resilience = game.canuseresilience(lizards[l], 'won', 'npc', false);
						if(resilience) {
							game.useresilience(lizards[l], resilience[0]);
						}
					}
				}
			}
		}

	},
	populateplayfield : function() {
		// check for game over
		if(game.gamestatus()=='gameover') return;
		// start the round
		game.round++;
		game.state = 'beginround';
		message('<br />Round ' + game.round + '<br />', 'debug', '.build-activity');
		// get cards
		let numcards = game.cardsperround();
		for(let i=0; i<numcards; i++) {
			let index = Math.floor(Math.random() * game.availablecards.length);
			let card = game.availablecards[index];
			// remove this card from available cards and add it to the playfield
			game.availablecards.splice(index, 1);
			game.playfieldcards.push(card);
			// create card dom elements
			let div = '';
			let cardname = card.name.toLowerCase().replace(/ /g,"_");
			cardname = cardname.replace(/\./g, '');
			let csstooltip = card.type=='lizard' ? '' : 'tooltip-card ';
			let tooltipdata = card.type=="lizard" ? "" : "&lt;span class='tooltip-image " + cardname + "'&gt;&lt;span&gt;";
			let newcard = $('<div id="card' + card.id + '" class="card ' + csstooltip + card.type + ' ' + card.part + ' ' + cardname + '" data-powertip="' + tooltipdata + '" data-desirability="' + card.desirability + '"><span class="darken"></span></div>').appendTo('.playfield');
			if(card.type=='lizard') {
				let tooltiplizarddata = "&lt;span class='tooltip-image " + cardname + "'&gt;&lt;span&gt;";
				div = '<div class="lizard-card-image tooltip-card" data-powertip="' + tooltiplizarddata + '"><span class="darken"></span></div>';
				newcard.append(div);
				Object.keys(card.slots).forEach(function(key) {
					div = '<div class="upgrade-group upgrade-group-' + key + '">';
					for(let p=0; p<card.slots[key].length; p++) {
						div += '<div class="upgrade-slot ' + key + '-slot empty" data-part="' + key + '">' + key + '</div>';
					}
					div += '</div>';
					newcard.append(div);
				});
			}
		}

		// EVENTS
		// check for earthquake
		let earthquake = $.grep(game.playfieldcards, function(e){return e.name == 'Earthquake';});
		if(earthquake.length>0) {
			playsound(28, 500);
			playsound(29, 800);
			playsound(30, 500);
			playsound(31, 500);
			event('Earthquake');
			$('.playfield .card').removeClass('clickable').addClass('drawn');
			$('.playfield .card span.darken').css('opacity', 1);
			$('#ok-earthquake').show();
			$('#pass').hide();
			game.settooltips();
			return; // we don't want to show any of the next messages if we're clearing the playfield
		}
		// check for auto emp
		let autoemp = $.grep(game.playfieldcards, function(e){return e.name == 'Auto E.M.P.';});
		if(autoemp.length>0) {
			playsound(32, 500);
			game.emp = true;
			event('Auto E.M.P.');
		}
		// check for nerf
		let nerf = $.grep(game.playfieldcards, function(e){return e.name == 'Nerf';});
		if(nerf.length>0) {
			playsound(39, 500);
			game.nerf = true;
			event('Nerf');
		}
		// check for turbo
		let turbo = $.grep(game.playfieldcards, function(e){return e.name == 'Turbo';});
		if(turbo.length>0) {
			playsound(55, 500);
			playsound(56, 1000);
			playsound(57, 1200);
			game.turbo = true;
			event('Turbo');
		}
		// check for frenzy
		let frenzy = $.grep(game.playfieldcards, function(e){return e.name == 'Frenzy';});
		if(frenzy.length>0) {
			playsound(35, 500);
			game.frenzy = true;
			event('Frenzy');
		}
		// check for blackout
		let blackout = $.grep(game.playfieldcards, function(e){return e.name == 'Black Out';});
		if(blackout.length>0) {
			playsound(20, 500);
			playsound(21, 1200);
			game.blackout = true;
			event('Black Out');
			$('.player.human .card.powerup:not(.discard)').removeClass('clickable').addClass('deactivated');
			$('.player .powerup:not(.discard)').removeClass('active').addClass('deactivated');
			game.clearmechanic(true);
			// deactivate all powerups
			for(let p = 0; p < players.length; p++) {
				let powerups = $.grep(players[p].cards, function(e){return e.part == 'permanent';});
				let traps = $.grep(players[p].cards, function(e){return e.part == 'trap';});
				let allpowerups = powerups.concat(traps);
				for(let ap = 0; ap < allpowerups.length; ap++) {
					allpowerups[ap].deactivated = true;
					allpowerups[ap].active = false;
				}
				// unuse mechanic
				for(let m = 0; m < players[p].cards; m++) {
					card[m].mechanic = false;
				}
				
			}
		}
		game.state = 'beginbuild';
		game.buildphase();
		game.settooltips();
	},
	checkforreactor : function() {
		for(let p = 0; p < players.length; p++) {
			let reactor = $.grep(players[p].cards, function(e){return e.name == 'Nuclear Reactor';});
			let playerammocard = $.grep(players[p].cards, function(e){return e.type == 'ammo';});
			let ammo = 0;
			if(playerammocard.length > 0) {
				ammo = playerammocard[0].desirability;
			}
			if(reactor.length > 0) {
				if(reactor[0].active == true) {
					players[p].ammo = 3;
				} else {
					players[p].ammo = ammo;
				}
			} else {
				players[p].ammo = ammo;
			}
		}
		
	},
	clearmechanic : function(all = false, card = null) {
		if(card) {
			let p = game.getplayerfromcard(card);
			for(let c = 0; c < p.cards.length; c++) {
				p.cards[c].mechanic = false;
			}
			$('#' + p.id + ' .card').removeClass('using-mechanic expended mechanized');
		} else {
			for(let p = 0; p < players.length; p++) {
				if(players[p].type!='human' || all) {
					for(let c = 0; c < players[p].cards.length; c++) {
						players[p].cards[c].mechanic = false;
					}
				}
			}
			if(all) {
				$('.player .card').removeClass('using-mechanic expended mechanized');
			} else {
				$('.player:not(.human) .card').removeClass('using-mechanic expended mechanized');
			}
		}
	},
	cleartraps : function() {
		$('.card.trap').removeClass('active clickable');
		$('.card').removeClass('deactivated');
		for(let p = 0; p < players.length; p++) {
			let traps = $.grep(players[p].cards, function(e){return e.part == 'trap';});
			if(traps.length > 0) {
				for(let t = 0; t < traps.length; t++) {
					traps[t].active = false;
				}
			}
			for(let c = 0; c < players[p].cards.length; c++) {
				players[p].cards[c].deactivated = false;
			}
		}
	},


/********************************************
UTILITY FUNCTIONS
*********************************************/


	getplayerfromlizard : function(lizard) {
		// get the owner of this lizard

		let playerid = $('#card' + lizard.id).closest('.player').attr('id');
		let player = $.grep(players, function(e){return e.id == playerid;});
		return player[0];
	},
	gethumanplayer : function() {
		// get the human player

		let playerid = $('.player.human').attr('id');
		let player = $.grep(players, function(e){return e.id == playerid;});
		return player[0];
	},
	getplayerfromcard : function(card) {
		// get the owner of this lizard

		let playerid = $('#card' + card.id).closest('.player').attr('id');
		let player = $.grep(players, function(e){return e.id == playerid;});
		return player[0];
	},
	gethumanlizards : function() {
		// gets all lizards owned by human

		let player = game.gethumanplayer();
		let humanlizards = [];
		for (let i=0; i < lizards.length; i++) {
			let p = game.getplayerfromlizard(lizards[i]);
			if(p!=undefined) {
				if(p.id == player.id) humanlizards.push(lizards[i]);
			}
		}
		return humanlizards;
	},
	getotherlizards : function(player) {
		// gets all lizards not owned by player

		let otherlizards = [];
		for (let i=0; i < lizards.length; i++) {
			let p = game.getplayerfromlizard(lizards[i]);
			if(p!=undefined) {
				if((p.id != player.id) && p.stunned!=true && p.cloaked!=true) otherlizards.push(lizards[i]);
			}
		}
		return otherlizards;
	},
	getunstunnedlizards : function(player) {
		// gets all non-human unstunned lizards

		let otherlizards = game.getotherlizards(player);
		let unstunnedlizards = [];
		if(otherlizards.length>0) {
			for (let i=0; i < otherlizards.length; i++) {
				if(otherlizards[i].stunned!=true) unstunnedlizards.push(otherlizards[i]);
			}
			return unstunnedlizards;
		} else {
			return null;
		}
	},
	getotherpowerups : function(player) {
		// gets all powerups not owned by player

		let otherpowerups = [];
		for (let i=0; i < players.length; i++) {
			if((players[i].id != player.id)) {
				let powerups = $.grep(players[i].cards, function(e){return e.type == 'powerup';});
				for (let p=0; p < powerups.length; p++) {
					if(powerups[p].part!='discard') otherpowerups.push(powerups[p]);
				}
			}
		}
		return otherpowerups;
	},
	getotherunusedpowerups : function(player) {
		// gets all powerups not owned by player that have not been used this round
		// this basically just applies to trapping phase, so that if a player has already used
		// a trap this round it can't be deactivated by a brown out right afterwards

		let otherpowerups = [];
		for (let i=0; i < players.length; i++) {
			if((players[i].id != player.id)) {
				let powerups = $.grep(players[i].cards, function(e){return e.type == 'powerup';});
				for (let p=0; p < powerups.length; p++) {
					if(powerups[p].part=='trap') {
						if(powerups[p].active!=true) {
							otherpowerups.push(powerups[p]);
						}
					} else if(powerups[p].part!='discard') {
						otherpowerups.push(powerups[p]);
					}
				}
			}
		}
		return otherpowerups;
	},
	getlizardbythreat : function(lizards) {
		// determines which lizard is the highest threat by finding best attack+speed to defense ratio

		let targetedlizard = lizards[0];
		let threatindex = null;
		for (let l=0; l < lizards.length; l++) {
			let attack = game.gettotalstatbypart(lizards[l], 'attack');
			let defense = game.gettotalstatbypart(lizards[l], 'defense');
			let speed = game.gettotalstatbypart(lizards[l], 'speed');
			let thisthreatindex = ((attack*2)+speed)-defense*1.5;
			// this lizard is more threatening if it hasn't yet attacked
			if(attack>0 && lizards[l].used==false && lizards[l].skipped==false) {
				thisthreatindex += 3;
			}
			if(threatindex==null) {
				threatindex=thisthreatindex;
			} else {
				if(thisthreatindex > threatindex) {
					threatindex = thisthreatindex;
					targetedlizard = lizards[l];
				}
			}
		}
		return targetedlizard;
	},
	getlizardsbyvalue : function(lizards) {
		// sorts passed lizards by value (attack+defense+speed) best to worst

		let bestlizards = [];
		let value = null;
		for (let l=0; l < lizards.length; l++) {
			let thislizard = {};
			let attack = game.gettotalstatbypart(lizards[l], 'attack');
			let defense = game.gettotalstatbypart(lizards[l], 'defense');
			let speed = game.gettotalstatbypart(lizards[l], 'speed');
			let thisvalue = attack+speed+defense;
			thislizard['value'] = thisvalue;
			thislizard['lizard'] = lizards[l];
			bestlizards.push(thislizard);
		}
		bestlizards.sort(compareValue).reverse();
		return bestlizards;
	},
	gettotalslotsavailable : function(lizard) {
		// checks to see if this lizard has any empty slots

		let emptyslots = 0;
		let attackslots = lizard.slots['attack'];
		let defenseslots = lizard.slots['defense'];
		let speedslots = lizard.slots['speed'];
		let emptyattackslots = attackslots.filter(x => $.isEmptyObject(x));
		let emptydefenseslots = defenseslots.filter(x => $.isEmptyObject(x));
		let emptyspeedslots = speedslots.filter(x => $.isEmptyObject(x));
		return emptyattackslots.length + emptydefenseslots.length + emptyspeedslots.length;
	},
	getslotindexbycard : function(card) {
		// returns the slot position (key index) of the passed card

		let lizard = game.getlizardfromcard(card);
		let slotindex = lizard.slots[card.part].findIndex(item => item.id === card.id);

		return slotindex;
	},
	getbestlizardbypart : function(part, player = null, others = false) {
		// if player is passed, look only at player's lizards, otherwise loop through all players
		// if others is true, look only at other player's lizards

		let bestlizard = {};
		let bestpart = -1;
		let playerarr = [];
		if(player==null) {
			playerarr = players;
		} else if(others) {
			playerarr = $.grep(players, function(e){return e.id != player.id;});
		} else {
			playerarr = [player];
		}
		for(let p = 0; p < playerarr.length; p++) {
			let playerlizards = $.grep(playerarr[p].cards, function(e){return e.type == 'lizard';});
			for(let l = 0; l < playerlizards.length; l++) {
				let thispart = game.gettotalstatbypart(playerlizards[l], part);
				if(thispart>bestpart) {
					bestpart = thispart;
					bestlizard = playerlizards[l];
				} else if(thispart==bestpart) {
					// randomly select between matching lizards
					if(rollDie()>3) bestlizard = playerlizards[l];
				}
			}
		}
		return [bestpart, bestlizard];
	},
	getattackinglizards : function(player) {
		// gets all lizards that can attack the passed player this round

		let attackinglizards = [];
		for (let l=0; l<lizards.length; l++) {
			// get current player
			let thisplayer = game.getplayerfromlizard(lizards[l]);
			if(thisplayer!=undefined) {
				// get all lizards from other players
				let otherlizards = game.getotherlizards(player);
				// get this lizard's attack
				let occupiedattackslots = lizards[l].slots['attack'].filter(x => !$.isEmptyObject(x));
				// skip this lizard if it has no attack, if it is owned by passed player, there are no other lizards, or thisplayer is out of ammo
				if(occupiedattackslots.length>0 && otherlizards.length>0 && player.id!=thisplayer.id && thisplayer.ammo>0) {
					attackinglizards.push(lizards[l]);
				}
			}
		}
		return attackinglizards;
	},
	
	getlizardfromcard : function(card) {
		// get the lizard this card is attached to

		let lizardid = $('#card' + card.id).closest('.lizard').attr('id');
		lizardid = lizardid.replace('card', '');
		let lizard = $.grep(lizards, function(e){return e.id == lizardid;});
		return lizard[0];
	},
	getlizardfromslot : function(slot) {
		// get the lizard this slot is part of

		let lizardid = $(slot).closest('.lizard').attr('id');
		lizardid = lizardid.replace('card', '');
		let lizard = $.grep(lizards, function(e){return e.id == lizardid;});
		return lizard[0];
	},
	getownedattackinglizards : function(player) {
		// gets all lizards from the passed player that can attack

		let attackinglizards = [];
		let playerlizards = $.grep(player.cards, function(e){return e.type == 'lizard';});
		for (let l=0; l<playerlizards.length; l++) {
			// get this lizard's attack
			let occupiedattackslots = playerlizards[l].slots['attack'].filter(x => !$.isEmptyObject(x));
			// skip this lizard if it has no attack or if it is stunned/used/skipped
			if(occupiedattackslots.length>0 && playerlizards[l].stunned!=true && playerlizards[l].used!=true && playerlizards[l].skipped!=true) {
				attackinglizards.push(playerlizards[l]);
			}
		}
		return attackinglizards;
	},
	
	gettotalslotsbypart : function(lizard, part) {
		// gets the total number of part slots for the passed lizard

		let slots = 0;
		let occupiedpartslots = lizard.slots[part].filter(x => !$.isEmptyObject(x));
		if(occupiedpartslots.length>0) {
			for (let i=0; i<lizard.slots[part].length; i++) {
				let slot = lizard.slots[part][i].desirability; // makes sure there is a card in this slot
				if(slot) slots++;
			}
		}
		return slots;
	},
	gettotalstatbypart : function(lizard, part) {
		// gets the total stat value of the passed part for the passed lizard

		let stat = 0;
		let occupiedpartslots = lizard.slots[part].filter(x => !$.isEmptyObject(x));
		if(occupiedpartslots.length>0) {
			for (let i=0; i<lizard.slots[part].length; i++) {
				let slot = lizard.slots[part][i].desirability;
				let m = lizard.slots[part][i].mechanic;
				if(slot) {
					stat += slot;
					// see if this card has mechanic active
					if(m==true) stat = stat + 1;
				}
			}
		}

		// +1 to speed if overdrive is active
		if(part=='speed') {
			let thisplayer = game.getplayerfromlizard(lizard);
			if(thisplayer!=undefined) {
				let overdrive = $.grep(thisplayer.cards, function(e){return e.name == 'Overdrive';});
				if(overdrive.length>0) {
					if(overdrive[0].active==true) {
						stat = stat + 1;
						message(thisplayer.name + ' has Overdrive active making total speed ' + stat + ' for ' + lizard.id + '<br />', 'debug', '.battle-activity');
					}
				}
			}
		}

		return stat;
	},
	getupgradeablecards : function(player, part) {
		let lizards = $.grep(player.cards, function(e){return e.type == 'lizard';});
		for(let l = 0; l < lizards.length; l++) {
			let occupiedpartslots = lizards[l].slots[part].filter(x => !$.isEmptyObject(x));
			if(occupiedpartslots.length>0) {
				let upgradeablecards = $.grep(occupiedpartslots, function(e){return e.desirability < 3;});
				return upgradeablecards[0];
			}
		}
	},
	getbestcardfromset : function(usable, wanted) {
		// looks at usable card array and finds the best wanted card

		// the usable array might have discards - get rid of them
		let u = usable.length;
		while (u--) {
			if(Object.keys(usable[u])[0]=='discard') {
				usable.splice(u, 1);
			}
		}
		// if there are no remaining cards in the usable array, exit function
		if(usable.length < 1) return false;

		// loop through wanted cards greatest to least
		let bestDesire = 1;
		let best = null;
		for(let i = 0; i < wanted.length; i++) {
			var d = wanted[i].substr(wanted[i].length - 1);
			if($.isNumeric(d)) {
				var w = wanted[i].replace(d, '');
				var chkDesire = true;
			} else {
				var w = wanted[i];
				var chkDesire = false;
			}

			// if there is a matching usable card, return it
			for(let j = 0; j < usable.length; j++) {
				// check for resilience first
				if(w=='Resilience') {
					if(usable[j].card.name===w) {
						best = usable[j];
						bestDesire = best.card.desirability;
						break;
					}
				}
				// if card is powerup, need to find the most desirable one
				if(w=='permanent' || w=='trap') {
					if(usable[j].card.part===w && usable[j].card.desirability > bestDesire) {
						best = usable[j];
						bestDesire = best.card.desirability;
					}
				} else if(w=='powerup') {
					if(usable[j].card.type===w && usable[j].card.desirability > bestDesire) {
						best = usable[j];
						bestDesire = best.card.desirability;
					}
				} else {
					if(chkDesire) {
						// sometimes a generic value of 'upgrade' is passed instead of a specific part
						if(w=='upgrade') {
							if(((usable[j].card.part==='attack' || usable[j].card.part==='defense' || usable[j].card.part==='speed') && usable[j].card.desirability==d) && usable[j].card.desirability > bestDesire) {
								best = usable[j];
								bestDesire = best.card.desirability;
								break;
							}
						} else {
							if(usable[j].card.part===w && usable[j].card.desirability==d && usable[j].card.desirability > bestDesire) {
								best = usable[j];
								bestDesire = best.card.desirability;
								break;
							}
						}
					} else {
						if(usable[j].card.part===w && usable[j].card.desirability > bestDesire) {
							best = usable[j];
							bestDesire = best.card.desirability;
							break;
						}
					}
				}
			}
			if(best!=null) return best;
		}
	},
	getusablecards : function(player) {
		// surveys the playfield and returns all cards that the player can use

		let usable = [];
		for (let i=0; i<game.playfieldcards.length; i++) {
			let wanted = {};
			let card = game.playfieldcards[i];
			message(player.name + ' considered ' + card.id + '<br />', 'debug', '.build-activity');
			let slotavailable = game.isslotavailable(player, card);

			if(card.type=='ammo') {
				let playerammocard = $.grep(player.cards, function(e){return e.type == 'ammo';});
				// already have ammo, check if this one is better
				if(playerammocard.length > 0) {
					if(card.desirability > playerammocard[0].desirability) {
						message(player.name + ' liked ' + card.id + ' over ' + playerammocard[0].id + '<br />', 'debug', '.build-activity');
						wanted['card'] = card;
						usable.push(wanted);
					}
				} else {
					wanted['card'] = card;
					usable.push(wanted);
				}
			} else if(card.type=='upgrade') {

				// there are no slots available, check for better cards
				if(!slotavailable) {
					// should we swap out an attached upgrade?
					let playerlizards = $.grep(player.cards, function(e){return e.type == 'lizard';});
					if(playerlizards.length > 0) {
						for(let l=0; l<playerlizards.length; l++) {
							parts = playerlizards[l].slots[card.part];
							for(let p=0; p<parts.length; p++) {
								if(card.desirability > parts[p].desirability) {
									// yep, swap out an attached upgrade
									message(player.name + ' liked ' + card.id + ' over ' + parts[p].id + '<br />', 'debug', '.build-activity');
									wanted['card'] = card;
									wanted['discard'] = parts[p];
									wanted['lizard'] = playerlizards[l];
									usable.push(wanted);
								}
							}
						}
					}
					// should we swap out our reserve card?
					if(player.reserve.id!=null) {
						if(card.desirability > player.reserve.desirability) {
							message(player.name + ' liked ' + card.id + ' over ' + player.reserve.id + '<br />', 'debug', '.build-activity');
							if(game.logactivity) 
							wanted['card'] = card;
							wanted['discard'] = player.reserve;
							usable.push(wanted);
						}
					}
				} else {
					wanted['card'] = card;
					usable.push(wanted);
				}

			} else if(card.type=='lizard') {
				if(slotavailable) {
					wanted['card'] = card;
					usable.push(wanted);
				}
			} else if(card.type=='powerup') {
				wanted['card'] = card;
				usable.push(wanted);
			}
		}
		return usable;
	},
	isslotavailable : function(player, card) {
		// checks to see if there's a slot available for the passed card

		slotavailable = true;

		if(card.type=='upgrade') {
			let playerlizards = $.grep(player.cards, function(e){return e.type == 'lizard';});
			let slots = [];
			let totalpartslots = 0;
			let emptypartslotsnum = player.reserve.id!=null ? 0 : 1;
			let emptypartslots = [];
			for(let i=0; i<playerlizards.length; i++) {
				slots = playerlizards[i].slots;
				totalpartslots += slots[card.part].length;
				emptypartslots = slots[card.part].filter(x => $.isEmptyObject(x));
				emptypartslotsnum += emptypartslots.length;
			}
			if(emptypartslotsnum < 1) {
				slotavailable = false;
			}
			let reservecard = player.reserve.id==null ? 'nothing' : player.reserve.id;
			message(player.name + ' saw ' + reservecard + ' in reserve<br />', 'debug', '.build-activity');	
		} else if(card.type=='ammo') {
			let playerammocard = $.grep(player.cards, function(e){return e.type == 'ammo';});
			if(playerammocard.length > 0) {
				slotavailable = false;
			}
		} else if(card.type=='lizard') {
			let emptyattackslots = card.slots['attack'].filter(x => $.isEmptyObject(x));
			let emptydefenseslots = card.slots['defense'].filter(x => $.isEmptyObject(x));
			let emptyspeedslots = card.slots['speed'].filter(x => $.isEmptyObject(x));
			let emptypartslotsnum = emptyattackslots.length + emptydefenseslots.length + emptyspeedslots.length;
			if(emptypartslotsnum < 1) {
				slotavailable = false;
			}
		}
		return slotavailable;
	},


/********************************************
BUILD PHASE ACTIONS
*********************************************/


	buildphase : function() {
		// this function is only called once, but drawcards is called multiple times

		// check for game over
		if(game.gamestatus()=='gameover') return;

		let readytodraw = true;

		// we're at the beginning of the build phase
		if(game.state=='beginbuild') {
			//all players set traps
			readytodraw = game.settraps();
		}

		//players draw
		if(readytodraw) {
			game.currentplayer = 0;
			game.drawcards();	
		}

	},
	drawcards : function() {
		// loop through all players stopping at human player to allow for user input
		// exit the loop and re-enter the loop allowing any remaining players to complete turn

		// check for game over
		if(game.gamestatus()=='gameover') return;

		for (let p=game.currentplayer; p<players.length; p++) {
			game.state = 'midbuild';

			$('.player').removeClass('myturn');
			$('#' + players[p].id).addClass('myturn');

			// increment the current player
			game.currentplayer++;

			if(players[p].turntaken==false) {
				// if the next player is human enable card clicking
				if(players[p].type=='human') {
					$('.playfield .card:not(.event)').addClass('clickable');
					$('#pass').show();
					message('Select a card from the playfield, or click <span>pass</span>.');	
				} else {
					$('.playfield .card').removeClass('clickable');
					$('#pass').hide();
					// does this player have Sticky Fingers active?
					let stickyfingers = $.grep(players[p].cards, function(e){return e.name == 'Sticky Fingers';});
					if(stickyfingers.length>0) {
						if(stickyfingers[0].active==true) {
							// draw extra card
							let card = game.decidecard(players[p]);
							if(card) game.drawcard(players[p], card);
							message(players[p].name + ' has Sticky Fingers active<br />', 'debug', '.build-activity');	
						}
					}
					let card = game.decidecard(players[p]);
					if(card) game.drawcard(players[p], card);
				}
			}

			// exit the loop for human turn
			if(players[p].type=='human' && players[p].turntaken==false) {
				players[p].turntaken==true;
				return;
			}

			players[p].turntaken==true;
			
		}
		
		// we are at the end of the buildphase
		if(game.currentplayer == game.numplayers) {
			game.state = 'endbuild';
			game.currentplayer = 0;
			//allow for arrangecards
			message('Arrange your cards and then click <span>done</span> to end the build phase.');	
			$('#pass').hide();
			$('#ok-draw').show();
			$('#overlay-hide').hide();
			return;
		}
	},
	prepareforbattle : function() {
		game.currentplayer = 0;
		//order lizards by speed
		game.orderlizards();
		//reset turntaken
		game.resetplayers();
		//human might have activated nuclear reactor during build phase
		game.checkforreactor();
		if(game.isbattlepossible()==true) {
			$('#done').hide();
			$('#battle').show();
			playsound(18);
			message('Click <span>battle</span> to begin the battle phase. Fastest lizard will attack first.');	
		} else {
			game.endturn('arrangecards');
		}
	},
	drawcard : function(player, card) {
		game.cardsowned++;
		let id = card.id;

		// create a clone that we can keep in the playfield to show the user what was drawn
		let domcard = $('#card' + id);
    	let clonecard = domcard.clone();
    	clonecard.attr('id', domcard.attr('id') + '_clone');
    	clonecard.addClass('drawn').removeClass('clickable');
    	domcard.after(clonecard);
    	clonecard.append('<div class="drawnby"><span>' + player.name + '</span></div>');

		// remove chosen card from playfield
		game.playfieldcards.splice(game.playfieldcards.map(function(e) { return e.id; }).indexOf(id), 1);
		// attach card
		game.attachcard(player,card);
		// add card to player's inventory
		player.cards.push(card);
		// attach upgrade if on reserve when a lizard is acquired
		if(card.type=='lizard' && player.reserve.id!=null) game.attachcard(player, player.reserve);
		game.settooltips();
		return;
	},
	discard : function(player, card, lizard) {
		game.cardsowned--;
		// remove card from player cards
		if(card==null) {
			return;
		}
		player.cards.splice(player.cards.map(function(e) { return e.id; }).indexOf(card.id), 1);
		// detach card from lizards
		if(lizard!=null) { 
			let v = lizard.slots[card.part].map(function(e) { return e.id; }).indexOf(card.id); 
			lizard.slots[card.part][v] = {};
		}
		// remove card from reserve
		if(card.id==player.reserve.id) player.reserve = {};
		// add card to discard pile
		game.discardedcards.push(card);
		// remove from dom
		$('#card' + card.id).parent().addClass('empty');
		$('#card' + card.id).remove();
		message(player.name + ' discarded ' + card.id + '<br />', 'debug', '.build-activity');	
		message(player.name + ' discarded ' + card.id + '<br />', 'debug', '.transactions');	
	},
	attachcard : function(player, card) {

    	let domcard = $('#card' + card.id);

    	// deal with each card type
		if(card.type=='upgrade') {
			// figure out where to put this upgrade
			let playerlizards = $.grep(player.cards, function(e){return e.type == 'lizard';});
			if(playerlizards.length > 0) {
				// loop through lizards and find a slot
				for(let i=0; i<playerlizards.length; i++) {
					let part = card.part;
					let slots = playerlizards[i].slots;
					let totalpartslots = slots[part].length;
					let emptypartslots = slots[part].filter(x => $.isEmptyObject(x));
					let emptypartslotsnum = emptypartslots.length;
					let verb = 'drew';
					if(emptypartslotsnum > 0) { // found a slot	
						// is this card coming from reserve?
						if(card.id==player.reserve.id) {
							player.reserve = {};	
							message(player.name + ' emptied reserve<br />', 'debug', '.build-activity');
							verb = 'equipped';
						}
						// put upgrade into slot
						slots[part][slots[part].findIndex(x => $.isEmptyObject(x))] = card;
						message(player.name + ' attached ' + card.id + ' to ' + playerlizards[i].id + '<br />', 'debug', '.build-activity');
						// move card in the dom
						let childcard = $('#card' + card.id);
						let parentcard = $('#card' + playerlizards[i].id + ' .' + card.part + '-slot.empty').first();
						childcard.hide().appendTo(parentcard).fadeIn(game.fadetime);
						message(player.name + ' appended ' + card.id + ' to ' + playerlizards[i].id + ' ' + card.part + '<br />', 'debug', '.transactions');
						parentcard.removeClass('empty');
						message(player.name + ' ' + verb + ' ' + card.name + '<br />', 'buildlog');
						return;
					}
				}	
			}

			// there's already a card in reserve from a previous turn - discard it
			if(player.reserve.id!=null && player.reserve.id!==card.id) {
				game.discard(player, player.reserve);	
			}
			message(player.name + ' reserved ' + card.id + '<br />', 'debug', '.build-activity');
			// attach new reserve card
			player.reserve = card;
			// attach reserve card to dom
			$(domcard).hide().appendTo('#'+player.id+' .playercards .reserve-slot').fadeIn(game.fadetime);
			message(player.name + ' appended ' + card.id + ' to reserve<br />', 'debug', '.transactions');
		} else if(card.type=='ammo') {
			let playerammocard = $.grep(player.cards, function(e){return e.type == 'ammo';});
			player.ammo = card.desirability;
			// there's already an ammo card that needs replaced
			if(playerammocard.length > 0) {
				game.discard(player, playerammocard[0]);			
			}
			// move the dom card element to the player
			message(player.name + ' selected ' + card.id + '<br />', 'debug', '.build-activity');
			$(domcard).hide().appendTo('#'+player.id+' .playercards .ammo-slot').fadeIn(game.fadetime);
			message(player.name + ' appended ' + card.id + ' to ammo<br />', 'debug', '.transactions');
		} else if(card.type=='lizard') {
			message(player.name + ' selected ' + card.id + '<br />', 'debug', '.build-activity');
			// add lizard to game lizard array
			lizards.push(card);
			// move the dom card element to the player
			if(card.type!='upgrade') $(domcard).hide().appendTo('#'+player.id+' .playercards').fadeIn(game.fadetime);
			message(player.name + ' appended ' + card.id + ' to general<br />', 'debug', '.transactions');
		} else if(card.type=='powerup') {
			message(player.name + ' selected ' + card.id + '<br />', 'debug', '.build-activity');
			// move the dom card element to the player
			$(domcard).hide().appendTo('#'+player.id+' .topcards').fadeIn(game.fadetime);
			message(player.name + ' appended ' + card.id + ' to general<br />', 'debug', '.transactions');
		}

		// log activity
		message(player.name + ' drew ' + card.name + '<br />', 'buildlog');

	},
	humantrapspossible : function() {
		// check if human can set any traps

		let possible = true;
		let aftershockpossible = true;
		let brownoutpossible = true;
		let stickyfingerspossible = true;
		let player = game.gethumanplayer();

		// can player use after shock?
		let aftershock = $.grep(player.cards, function(e){return e.name == 'After Shock';});
		if(aftershock.length==0) {
			aftershockpossible = false;
		} else if(aftershock.length>0) {
			if(aftershock[0].deactivated==true) {
				aftershockpossible = false;
			}
		}

		// can player use brown out?
		let brownout = $.grep(player.cards, function(e){return e.name == 'Brown Out';});
		if(brownout.length==0) {
			brownoutpossible = false;
		} else if(brownout.length>0) {
			if(brownout[0].deactivated==true) {
				brownoutpossible = false;
			}
		} else {
			let otherpowerups = game.getotherpowerups(player);
			if(otherpowerups.length==0) {
				brownoutpossible = false;
			}
		}

		// can player use sticky fingers?
		let stickyfingers = $.grep(player.cards, function(e){return e.name == 'Sticky Fingers';});
		if(stickyfingers.length==0) {
			stickyfingerspossible = false;
		} else if(stickyfingers.length>0) {
			if(stickyfingers[0].deactivated==true) {
				stickyfingerspossible = false;
			}
		}

		if(aftershockpossible==false && brownoutpossible==false && stickyfingerspossible==false) {
			possible = false;
		}

		// todo future enhancement: what if player has max power, after shock, and brown out?
		// currently only one trap can be activated per round, but in rare cases player might have this
		// configuration and want to activate both traps (1 is the current limit because of the game.humantrapsset check)

		// has human already set a trap?
		if(game.humantrapsset==true) {
			possible = false;
		}

		return possible;
	},
	settraps : function(player = null) {
		// if player is passed, player sets traps, otherwise loop through all players and set traps

		/* TRAP RULES
		if player has a trap
		 if player doesn't want to activate any other powerups
		  if trap is aftershock
		   if player is not first to draw
		    activate trap and destroy best card in playfield
		   if player is first to draw
		   	decide which card to draw and then destroy next best card in playfield
		  if trap is brown out
		   activate trap and deactivate highest other desirability powerup on field
		  if trap is sticky fingers
		   activate sticky fingers
		*/

		let playerarr = player != null ? [player] : players;
		let counter = player != null ? 0 : game.currentplayer;
		for (let p=counter; p<playerarr.length; p++) {
			// if the next player is human enable card clicking
			if(playerarr[p].type=='human' && game.humantrapspossible()==true) {
				$('#' + playerarr[p].id + ' .card.trap:not(.deactivated)').addClass('clickable');
				$('#done-trapping').show();
				$('#pass').hide();
				message('You have traps&mdash;do you want to set one?');
				$('body').removeClass('overlay-shown playfield-shown');
				$('#show-playfield').show();
				game.humantrapsset = true;
				game.currentplayer++;
				return false; // not ready for drawcards()
			} else if(playerarr[p].type!='human') {
				let usable = [];
				let traps = $.grep(playerarr[p].cards, function(e){return e.part == 'trap';});
				let permanents = $.grep(playerarr[p].cards, function(e){return e.part == 'permanent';});
				let usablearr = traps.concat(permanents);
				// push all powerups into special object array
				for(let u = 0; u < usablearr.length; u++) {
					let wantedtemp = {};
					wantedtemp['card'] = usablearr[u];
					// it's possible this card was deactivated by brown out already
					if(wantedtemp['card'].deactivated!=true) {
						usable.push(wantedtemp);
					}
				}
				// sort usable cards by desirability
				usable.sort(compareDesirabilityCard).reverse();
				if(usable.length>0) {
					let wanted = ['powerup'];
					let index = 0;
					// get player's best powerup
					let bestcardobj = game.getbestcardfromset(usable, wanted);
					let bestcard = bestcardobj['card'];
					if(bestcard.part=='trap') { // player doesn't want to activate any other powerups
						// activate this powerup
						bestcard.active = true;
						$('#' + playerarr[p].id + ' .powerup').removeClass('active');
						$('#card' + bestcard.id).addClass('active');
						if(bestcard.name=='After Shock') {
							game.playfieldcards.sort(compareDesirability).reverse();

							// we don't care about events
							let trappablecards = game.playfieldcards.filter(function(obj) {return obj.type !== 'event';});

							if(player == null) {
								// we only care about checking if player is first to draw if we're looping through all
								// players and not dealing with a specifically passed in player
								if(playerarr[game.currentplayer].id==playerarr[p].id) { // player is first to draw
									// destroy second-best playfield card
									index = 1;
								} else { // player is not first to draw
									// destroy best playfield card
									index = 0;
								}
							} else {
								index = 0;
							}
							let card = trappablecards[index];
							// make sure there is a card in the playfield
							if(card!=undefined) {
								game.useaftershock(playerarr[p], card);
							}
						} else if(bestcard.name=='Brown Out') {
							let otherpowerups = game.getotherunusedpowerups(playerarr[p]);
							if(otherpowerups.length>0) {
								otherpowerups.sort(compareDesirability).reverse();
								game.usebrownout(playerarr[p], otherpowerups[0]);
							}
						} else if(bestcard.name=='Sticky Fingers') {
							let card = $.grep(players[p].cards, function(e){return e.name == 'Sticky Fingers';});
							game.activatepowerup(playerarr[p], card);
						}
					}
				}
				// we're looping through players and not dealing with a directly passed player
				if(player == null) {
					game.currentplayer++;
				}
			}
		}
		return true; // ready for drawcards()
	},
	useaftershock : function(player, card) {
		// uses aftershock

		message(player.name + ' used after shock to destroy ' + card.name + ' (' + card.id + ')<br />', 'debug', '.build-activity');
		message(player.name + ' used after shock to destroy ' + card.name + '<br />', 'buildlog');
		// remove card from dom
		$('#card' + card.id).addClass('drawn');
		$('#card' + card.id).append('<div class="drawnby"><span>Destroyed</span></div>');

		// discard the card
		game.discardedcards.push(card);
		game.playfieldcards.splice(game.playfieldcards.map(function(e) { return e.id; }).indexOf(card.id), 1);

		let aftershock = $.grep(player.cards, function(e){return e.name == 'After Shock';});
		aftershock[0].active = true;

		// deactivate other powerups if necessary
		let allowedpowerups = game.getallowedpowerups(player);
		if(game.getactivepowerups(player).length > (allowedpowerups - 1)) {
			// human already has max powerups active and tried to set a trap - arbitrarily disable one of the powerups
			// so human can never have more than max allowed active.
			let pid = game.getactivepowerups(player)[0].id;
			game.getactivepowerups(player)[0].active = false;
			$('#card' + pid).removeClass('active');
		}
	},
	usebrownout : function(player, card) {
		// uses brown out

		// deactivate highest other desirability powerup
		card.active = false;
		card.deactivated = true;
		$('.powerup').removeClass('deactivated');
		$('#card' + card.id).removeClass('active clickable').addClass('deactivated');
		// if mechanic was deactivated, need to clear the mechanized card
		game.clearmechanic(false, card);
		message(player.name + ' used brown out to deactivate ' + card.name + ' (' + card.id + ')<br />', 'debug', '.build-activity');
		message(player.name + ' used brown out to deactivate ' + card.name + '<br />', 'buildlog');
		// allow targeted player to activate trap if it was second best card
		//let targetedplayer = game.getplayerfromcard(card); 
		//game.settraps(targetedplayer); // not sure why i implemented this originally but the recursion seems to break things

		let brownout = $.grep(player.cards, function(e){return e.name == 'Brown Out';});
		brownout[0].active = true;

		// deactivate other powerups if necessary
		let allowedpowerups = game.getallowedpowerups(player);
		if(game.getactivepowerups(player).length > allowedpowerups) {
			// human already has max powerups active and tried to set a trap - arbitrarily disable one of the powerups
			// so human can never have more than max allowed active.
			let pid = game.getactivepowerups(player)[0].id;
			game.getactivepowerups(player)[0].active = false;
			$('#card' + pid).removeClass('active');
		}
	},
	resetlizards : function() {
		// loop through and remove used, skipped, and cloaked flags from all lizards
		// unstunning lizards is done elsewhere

		for (let l=0; l<lizards.length; l++) {
			lizards[l].used = false;
			lizards[l].skipped = false;
			lizards[l].cloaked = false;
			$('.card.lizard').removeClass('used cloaked revived attacking skipped reinforcement fatalitizing cloaking resiliencing');
		}
	},
	resetplayers : function() {
		// loop through and remove player flags

		for (let p=0; p<players.length; p++) {
			players[p].turntaken = false;
			players[p].carddrawn = false;
			players[p].attacked = false;
			players[p].stickyfingersused = false;
		}
	},
	orderlizards : function() {
		// loop through and assign speed value to each lizard

		for (let l=0; l<lizards.length; l++) {
			lizards[l].speed = game.gettotalstatbypart(lizards[l], 'speed');
		}
		// order the lizards by speed
		lizards.sort(compareSpeed).reverse();
	},
	arrangecards : function() {
		// loop through all players and arrange cards

		// check for game over
		if(game.gamestatus()=='gameover') return;

		game.delay = 0;

		for (let p=game.currentplayer; p<players.length; p++) {
			game.state = 'midarrange';

			// increment the current player
			game.currentplayer++;

			if(players[p].turntaken==false) {
				// if the next player is human enable card clicking
				if(players[p].type=='human') {
					$('#' + players[p].id + ' .card:not(.ammo):not(.lizard):not(.deactivated)').addClass('clickable');
					// remove clickable if blackout or if player has already used sticky fingers
					if(game.blackout==true || players[p].stickyfingersused==true) {
						$('#' + players[p].id + ' .card.powerup:not(.discard)').removeClass('clickable');
					}
					$('#done').show();
				} else {
					$('.card').removeClass('clickable');
					$('#done').hide();
					// upgrade slots
					game.equipupgradeslot(players[p]);
					// powerups
					game.activatepowerup(players[p]);
					// cloaking devices
					game.activatecloakingdevices(players[p]);
					// emp
					game.useemp(players[p]);
					// mechanic
					game.usemechanic(players[p]);
					// swap reserve
					game.swapreserve(players[p]);
				}
			}

			// exit the loop for human turn
			if(players[p].type=='human' && players[p].turntaken==false) {
				if(game.isarrangepossible(players[p])==true) {
					players[p].turntaken==true;
					return;
				}
			}

			players[p].turntaken==true;

		}

		if(game.currentplayer == game.numplayers) {
			game.prepareforbattle();
			return;
		}

	},
	isarrangepossible : function(player) {
		// see if the human player can arrange cards

		let possible = false;

		// disable upgrades and fatalities if user has no lizards
		let playerlizards = $.grep(player.cards, function(e){return e.type == 'lizard';});
		if(playerlizards.length==0) {
			$('.player.human .card.fatality, .player.human .card.upgrade, .player.human .card.cloaking_device, .player.human .card.upgrade_slot').removeClass('clickable');
		} else if(playerlizards.length==1) {
			$('.player.human .card.upgrade').removeClass('clickable');
			if(player.reserve) {
				let part = playerlizards[0].slots[player.reserve.part];
				if(part) {
					$('.player.human .card.upgrade.' + player.reserve.part).addClass('clickable');
				}
			}
		}
		// disable powerups if mechanic is expended
		/*
		if($('.player.human .mechanic').hasClass('expended')) {
			let allowedpowerups = game.getallowedpowerups(player);
			if(allowedpowerups == 1) {
				$('.player.human .powerup.permanent:not(.mechanic)').removeClass('clickable');
			}
		} else {
			// always enable nuclear reactor
			$('.player.human .card.nuclear_reactor').addClass('clickable');
		}*/

		// disable powerups if trap has been set
		if($('.player.human .trap').hasClass('active')) {
			let allowedpowerups = game.getallowedpowerups(player);
			if(allowedpowerups == 1) {
				$('.player.human .powerup.permanent').removeClass('clickable');
			}
		}

		// disable powerups if sticky fingers has been used
		if(player.stickyfingersused) {
			$('.player.human .powerup.permanent').removeClass('clickable');
		}
		
		// disable resilience, traps, and fatalities
		$('.player.human .card.resilience, .player.human .card.trap, .player.human .card.fatality').removeClass('clickable');

		let clickablecards = $('.player.human .card.clickable:not(.lizard)');

		if(clickablecards.length>0) {
			possible = true;
		} else {
			possible = false;
		}

		return possible;
	},
	clickcard : function(card) {
		// what to do with the card the human player clicked

		// check for game over
		if(game.gamestatus()=='gameover') return;

		let player = game.gethumanplayer();
		let playerlizards = $.grep(player.cards, function(e){return e.type == 'lizard';});
		let cid = 0;
		let c = [];
		let swapreservecard = card;
		if(!$(card).hasClass('upgrade-slot')) {
			cid = $(card).attr('id').replace('card', '');
			c = $.grep(player.cards, function(e){return e.id == cid;});
			swapreservecard = c[0];
		}

		// all possible card variations
		if($(card).is('.emp')) {

			// emps
			game.useemp(player);

		} else if($(card).is('.mechanic')) {

			// mechanic
			if($(card).hasClass('active')) {
				$(card).removeClass('selected active');
				$('.player.human .card:not(.ammo):not(.lizard):not(.deactivated)').addClass('clickable').removeClass('mechanizing');
				playsound(60);
				if($(card).hasClass('expended')) {
					game.unusemechanic();
				}
			} else {
				game.activatepowerup(player, c);
				$('.player.human .card.clickable').removeClass('clickable');
				$(card).addClass('selected clickable');
				$('.player.human .lizard .card.upgrade[data-desirability = 1], .player.human .lizard .card.upgrade[data-desirability = 2]').addClass('clickable mechanizing');
				playsound(48);
			}

		} else if($(card).is('.powerup.permanent')) {

			// powerups
			if($(card).is('.active')) {
				game.deactivatepowerup(player, c);
				if($(card).is('.nuclear_reactor')) {
					playsound(59);
				} else if($(card).is('.maximum_power')) {
					playsound(59);
				} else if($(card).is('.multishot')) {
					playsound(59);
				} else if($(card).is('.super_scope')) {
					playsound(59);
				} else if($(card).is('.force_field')) {
					playsound(59);
				} else if($(card).is('.overdrive')) {
					playsound(59);
				}
			} else {
				// we need to unuse mechanic if it's currently in use
				game.unusemechanic();
				game.activatepowerup(player, c);
				if($(card).is('.nuclear_reactor')) {
					playsound(64);
					//playsound(65);
				} else if($(card).is('.maximum_power')) {
					playsound(5);
				} else if($(card).is('.multishot')) {
					playsound(8);
					playsound(9, 1000);
				} else if($(card).is('.super_scope')) {
					playsound(13);
					playsound(15, 1500);
					playsound(12, 2000);
					playsound(14, 2400);
				} else if($(card).is('.force_field')) {
					playsound(4);
				} else if($(card).is('.overdrive')) {
					playsound(10);
				}
			}
			
		} else if($(card).is('.cloaking_device')) {

			// cloaking devices
			if($(card).hasClass('selected')) {
				$(card).removeClass('selected active');
				$('.player.human .card.lizard:not(.cloaked)').removeClass('clickable cloaking');
				$('.player.human .card:not(.ammo):not(.lizard):not(.deactivated)').addClass('clickable');
				playsound(59);
			} else {
				$(card).siblings('.cloaking_device').removeClass('selected active');
				$('.player.human .card:not(.ammo):not(.lizard):not(.cloaking_device)').removeClass('clickable');
				$(card).addClass('selected active');
				$('.player.human .card.lizard:not(.cloaked)').addClass('clickable cloaking');
				playsound(46);
			}

		} else if($(card).is('.upgrade_slot')) {

			// upgrade slots
			if($(card).hasClass('selected')) {
				$(card).removeClass('selected active');
				$('.player.human .card.lizard:not(.cloaked)').removeClass('clickable');
				$('.player.human .card:not(.ammo):not(.lizard):not(.deactivated)').addClass('clickable');
				$('.player.human .upgrade-slot').removeClass('clickable upgrading');
				playsound(61);
			} else {
				$(card).siblings('.upgrade_slot').removeClass('selected active');
				$('.player.human .card:not(.ammo):not(.lizard):not(.upgrade_slot)').removeClass('clickable');
				$(card).addClass('selected active');
				$('.player.human .upgrade-slot').addClass('clickable upgrading');
				$('.player.human .card.upgrade.clickable').removeClass('clickable active swap selected');
				playsound(49);
			}

		} else if($(card).is('.fatality')) {

			if($(card).hasClass('active')) {
				game.fatalityactive = false;
				$(card).removeClass('active');
				$(card).addClass('clickable');
				$(card).siblings('.fatality').addClass('clickable');
				$('.player.human .playercards .lizard:not(.attacking)').removeClass('clickable fatalitizing');
				message('You decided against <span>Fatality</span>, saving it for a more opportune time.');
				playsound(59);
			} else {
				game.fatalityactive = true;
				$(card).addClass('active');
				$(card).siblings('.fatality').removeClass('clickable');
				$('.player.human .playercards .lizard:not(.attacking):not(.stunned):not(.skipped)').addClass('clickable fatalitizing');
				// disallow lizards with no attack
				let lizards = game.gethumanlizards();
				for (let l=0; l < lizards.length; l++) {
					let attack = game.gettotalstatbypart(lizards[l], 'attack');
					if(attack==0) {
						$('#card' + lizards[l].id).removeClass('clickable fatalitizing');
					}
				}
				message('You used <span>Fatality</span>! Choose your reinforcements.');
				playsound(47);
			}

		} else if($(card).is('.resilience')) {

			$('#continue').hide();
			//$('.player.human .card.resilience').removeClass('clickable');
			if(game.state == 'endround') {

				// resilience
				if($(card).hasClass('selected')) {
					$(card).removeClass('selected active');
					$('.player.human .card.lizard:not(.stunned)').removeClass('clickable resiliencing');
					$('.player.human .card.resilience').addClass('clickable');
					playsound(59); // TODO: new sound?
				} else {
					$(card).siblings('.resilience').removeClass('selected active clickable');
					$(card).addClass('selected active');
					$('.player.human .card.lizard:not(.resiliencing)').addClass('clickable resiliencing');
					playsound(46); // TODO: new sound?
				}

			} else {
				// it's possible the player has multiple resilience cards and had a previously stunned lizard from another round
				// and chooses to use resilience on a lizard that was stunned this round, so if the user decides to use 
				// resilience again, make sure it's not targetting the lizard that was just unstunned
				if(game.lasttarget.stunned == true) {
					let lizards = game.gethumanlizards();
					for (let l=0; l < lizards.length; l++) {
						if(lizards[l].stunned == true) {
							game.useresilience(lizards[l], c[0]);
							break;
						}
					}
				} else {
					game.useresilience(game.lasttarget, c[0]);
				}
				game.dobattle();
			}

		} else if($(card).is('.trap')) {
			
			// we need to unuse mechanic if it's currently in use
			game.unusemechanic();

			if($(card).hasClass('after_shock')) {
				if($(card).hasClass('selected')) {
					$(card).removeClass('selected');
					$('.playfield .card').removeClass('clickable');
					$('body').removeClass('overlay-shown playfield-shown');
					playsound(59);
				} else {
					$(card).addClass('selected');
					$('.playfield .card:not(.event)').addClass('clickable aftershocking');
					$('body').addClass('overlay-shown playfield-shown');
					playsound(43);
				}
			} else if($(card).hasClass('brown_out')) {
				if($(card).hasClass('selected')) {
					$(card).removeClass('selected');
					$('.player.npc .powerup').removeClass('clickable');
					playsound(59);
				} else {
					$(card).addClass('selected');
					$('.player.npc .powerup.trap:not(.active), .player.npc .powerup.permanent').addClass('clickable browningout');
					playsound(44);
				}
			} else if($(card).hasClass('sticky_fingers')) {
				if($(card).is('.active')) {
					game.deactivatepowerup(player, c);
					playsound(59);
				} else {
					game.activatepowerup(player, c);
					playsound(11);
				}
			}

		} else {

			// swappable cards
			let selectedcards = $('.player.human .card.clickable.selected');

			if($(card).hasClass('selected')) {
				$(card).removeClass('selected swap');
				$('.player.human .card:not(.ammo):not(.lizard):not(.deactivated)').addClass('clickable');
				$('.player.human .upgrade-slot').removeClass('clickable');
				$('.player.human .card').removeClass('primed');
				playsound(58);
			} else if(selectedcards.length>0) {

				let sid = $(selectedcards[0]).attr('id').replace('card', '');
				let s = $.grep(player.cards, function(e){return e.id == sid;});

				$(card).addClass('swap');
				// is reserve card one of the cards to be swapped?
				if($('.player.human .reserve-slot .card').hasClass('selected') || $('.player.human .reserve-slot .card').hasClass('swap')) {
					// in case human clicked equipped card first and then reserve card second
					if($(card).parent().hasClass('reserve-slot')) {
						let cardtoswap = $('.player.human .lizard .card.clickable.selected');
						cid = $(cardtoswap).attr('id').replace('card', '');
						c = $.grep(player.cards, function(e){return e.id == cid;});
						swapreservecard = c[0];
					}
					game.swapreserve(player, swapreservecard);
					// remove clickable class from cards that shouldn't be clickable
					game.isarrangepossible(game.gethumanplayer());
				} else if($(card).hasClass('upgrade-slot')) {
					// we're moving to an empty slot
					game.movecard(player, card, s[0]);
					// remove clickable class from cards that shouldn't be clickable
					game.isarrangepossible(game.gethumanplayer());
				} else {
					// we're swapping two cards
					game.swapcard(player, c[0], s[0]);
					// remove clickable class from cards that shouldn't be clickable
					game.isarrangepossible(game.gethumanplayer());
				}
				$('.player.human .upgrade-slot').removeClass('clickable');
				$('.player.human .card').removeClass('primed');
				playsound(2);
			} else {
				$(card).addClass('selected');
				// ensure only same parts can be clicked

				// todo bug: sometimes c[0] doesn't exist at this point. this doesn't cause a program
				// halting error, but it does show an error in the console.
				$('.player.human .card.clickable:not(.' + c[0].part + ')').removeClass('clickable');
				$('.player.human .card.clickable.' + c[0].part).addClass('primed');
				// make sure to include empty upgrade slots
				$('.player.human .upgrade-slot.' + c[0].part + '-slot.empty').addClass('clickable');
				playsound(45);
			}

		}

	},
	movecard : function(player, slot, card) {
		// moves passed card to passed slot

		//setup vars
		let playerlizardto = game.getlizardfromslot(slot);
		let playerlizardfrom = game.getlizardfromcard(card);
		let parentcardto = $(slot);
		let parentcardfrom = $('#card' + card.id).parent();
		let slotfrom = game.getslotindexbycard(card);
		// do the swap
		playerlizardto.slots[card.part][playerlizardto.slots[card.part].findIndex(x => $.isEmptyObject(x))] = card;
		playerlizardfrom.slots[card.part][slotfrom] = {};
		// now the dom
		$('#card' + card.id).hide().appendTo(parentcardto).fadeIn(game.fadetime);
		parentcardfrom.addClass('empty');
		parentcardto.removeClass('empty');
		// unselect cards and reset clickables
		$('#' + player.id + ' .card').removeClass('selected swap');
		$('#' + player.id + ' .card:not(.ammo):not(.lizard):not(.deactivated)').addClass('clickable');
		$('.player.human .upgrade-slot').removeClass('clickable selected swap');
		// log it
		message(player.name + ' moved ' + card.id + ' to ' + playerlizardto.name + ' (' + playerlizardto.id + ')<br />', 'debug', '.transactions');
	},
	swapcard : function(player, card1, card2) {
		// swaps position of the passed cards

		// setup vars
		let playerlizard1 = game.getlizardfromcard(card1);
		let playerlizard2 = game.getlizardfromcard(card2);
		let parentcard1 = $('#card' + card1.id).parent();
		let parentcard2 = $('#card' + card2.id).parent();
		let oldcard1 = playerlizard1.slots[card1.part][game.getslotindexbycard(card1)];
		let oldcard2 = playerlizard2.slots[card2.part][game.getslotindexbycard(card2)];
		// do the swap
		playerlizard1.slots[card1.part][game.getslotindexbycard(card1)] = oldcard2;
		playerlizard2.slots[card2.part][game.getslotindexbycard(card2)] = oldcard1;
		// now the dom
		$('#card' + card1.id).hide().appendTo(parentcard2).fadeIn(game.fadetime);
		$('#card' + card2.id).hide().appendTo(parentcard1).fadeIn(game.fadetime);
		// unselect cards and reset clickables
		$('#' + player.id + ' .card').removeClass('selected swap');
		$('#' + player.id + ' .card:not(.ammo):not(.lizard):not(.deactivated)').addClass('clickable');
		$('.player.human .upgrade-slot').removeClass('clickable selected swap');
		// log it
		message(player.name + ' swapped ' + card1.id + ' and ' + card2.id + '<br />', 'debug', '.transactions');
	},
	swapreserve : function(player, swapcard = null) {
		// compares reserve to equipped and swaps if better, or lets human move it manually

		if(swapcard!=null) {
			// setup vars
			let playerlizard = {};
			let c = 0;
			let oldreserve = player.reserve;
			let parentcard = {};
			let part = player.reserve.part;

			// figure out if we're moving or swapping
			if($(swapcard).hasClass('upgrade-slot')) {
				// moving from reserve to empty slot
				playerlizard = game.getlizardfromslot(swapcard);
				c = playerlizard.slots[part].findIndex(x => $.isEmptyObject(x));
				parentcard = $(swapcard);
				// remove reserve slot
				player.reserve = {};
				// log it
				message(player.name + ' moved ' + player.reserve.id + ' to ' + playerlizard.id + '<br />', 'debug', '.transactions');
			} else {
				// swapping from reserve to occupied slot
				playerlizard = game.getlizardfromcard(swapcard);
				c = game.getslotindexbycard(swapcard);
				parentcard = $('#card' + swapcard.id).parent();
				let oldslot = playerlizard.slots[part][c];
				// add slot to reserve
				player.reserve = oldslot;
				$('#card' + swapcard.id).hide().appendTo('#' + player.id + ' .playercards .reserve-slot').fadeIn(game.fadetime);

				// check if mechanic is active on swapped card and if so deactivate it
				if(swapcard.mechanic==true) {
					game.unusemechanic();
				}

				// log it
				message(player.name + ' swapped ' + oldslot.id + ' and ' + player.reserve.id + '<br />', 'debug', '.transactions');
			}

			// add reserve to slot
			playerlizard.slots[part][c] = oldreserve;
			$('#card' + oldreserve.id).hide().appendTo(parentcard).fadeIn(game.fadetime);
			
			// unselect cards and reset clickables
			$('#' + player.id + ' .card').removeClass('selected swap');
			$('#' + player.id + ' .card:not(.ammo):not(.lizard):not(.deactivated)').addClass('clickable');
			$('.player.human .upgrade-slot').removeClass('clickable selected swap');
			
		} else {
			if(player.reserve.id!=null) {
				let playerlizards = $.grep(player.cards, function(e){return e.type == 'lizard';});
				for(let l=0; l<playerlizards.length; l++) {
					parts = playerlizards[l].slots[player.reserve.part];
					for(let c=0; c<parts.length; c++) {
						if(player.reserve.desirability > parts[c].desirability) {
							// yep, swap out reserve
							message(player.name + ' liked ' + player.reserve.id + ' over ' + parts[c].id + '<br />', 'debug', '.build-activity');
							// add reserve to slot
							let childcard = $('#card' + player.reserve.id);
							let parentcard = $('#card' + parts[c].id).parent();
							let oldreserve = player.reserve;
							let oldslot = playerlizards[l].slots[player.reserve.part][c];
							$('#card' + oldslot.id).hide();
							childcard.hide().appendTo(parentcard).fadeIn(game.fadetime);
							playerlizards[l].slots[player.reserve.part][c] = oldreserve;
							message(player.name + ' swapped ' + parts[c].id + ' and ' + player.reserve.id + '<br />', 'debug', '.transactions');
							// add slot to reserve
							player.reserve = oldslot;
							$('#card' + oldslot.id).hide().appendTo('#' + player.id + ' .playercards .reserve-slot').fadeIn(game.fadetime);
							$('#' + player.id + ' .playercards .reserve-slot').removeClass('empty');		
							return;
						}
					}
				}
			}
		}
	},
	equipupgradeslot : function(player, upgradelizard = null, manualpart = null) {
		// equips upgrade slot to this player

		let upgradeslots = $.grep(player.cards, function(e){return e.name == 'Upgrade Slot';});
		let part = null;
		let upgradethislizard = null;
		if(manualpart!=null) {
			part = manualpart;
			upgradethislizard = upgradelizard;
		} else if(upgradeslots.length>0) {
			let playerlizards = $.grep(player.cards, function(e){return e.type == 'lizard';});
			/* RULES FOR EQUIPPING UPGRADE SLOTS
			make sure lizard is full
			if there are any faster lizards, equip to speed
			or if there are any single slots, equip to that part
			or if there are any double slots, equip to that part
			or if there are any triple slots, equip to that part
			do not add more than 4 to a slot
			*/
			for(let l = 0; l < playerlizards.length; l++) {
				let slotavailable = game.isslotavailable(player, playerlizards[l]);
				if(game.gettotalslotsavailable(playerlizards[l])==0) { // lizard is full, ready for upgrade
					let speed = game.gettotalstatbypart(playerlizards[l], 'speed');
					let fastestlizard = game.getbestlizardbypart('speed', player, true); // check for faster lizards
					if(fastestlizard[0] >= speed) {
						upgradethislizard = playerlizards[l];
						part = 'speed';
						break;
					} else {
						let defenseslots = game.gettotalslotsbypart(playerlizards[l], 'defense');
						let attackslots = game.gettotalslotsbypart(playerlizards[l], 'attack');
						let speedslots = game.gettotalslotsbypart(playerlizards[l], 'speed');
						if(defenseslots==1) {
							upgradethislizard = playerlizards[l];
							part = 'defense';
							break;
						} else if(attackslots==1) {
							upgradethislizard = playerlizards[l];
							part = 'attack';
							break;
						} else if(speedslots==1) {
							upgradethislizard = playerlizards[l];
							part = 'speed';
							break;
						} else if(defenseslots==2) {
							upgradethislizard = playerlizards[l];
							part = 'defense';
							break;
						} else if(attackslots==2) {
							upgradethislizard = playerlizards[l];
							part = 'attack';
							break;
						} else if(speedslots==2) {
							upgradethislizard = playerlizards[l];
							part = 'speed';
							break;
						} else if(defenseslots==3) {
							upgradethislizard = playerlizards[l];
							part = 'defense';
							break;
						} else if(attackslots==3) {
							upgradethislizard = playerlizards[l];
							part = 'attack';
							break;
						} else if(speedslots==3) {
							upgradethislizard = playerlizards[l];
							part = 'speed';
							break;
						}
					}
				}
			}
		}
		if(upgradethislizard!=null) {
			// add new empty object to lizard's specified part array
			upgradethislizard.slots[part].push({});
			// discard an upgrade slot card from this player
			game.discard(player, upgradeslots[0]);	
			// add to dom
			let newslot = $('<div class="upgrade-slot ' + part + '-slot empty powerup-slot" data-part="' + part + '">' + part.charAt(0) + '</div>');
			$('#card' + upgradethislizard.id + ' .upgrade-group-' + part).append(newslot);
			$('.player.human .upgrade-slot').removeClass('upgrading clickable');
			$('.player.human .card:not(.ammo):not(.lizard):not(.deactivated)').addClass('clickable');
			// add to build log
			message(player.name + ' equipped ' + upgradeslots[0].id + ' to ' + upgradethislizard.id + ' ' + part + ' slot<br />', 'debug', '.build-activity');
			action(part + ' upgraded!', newslot, 'small');
		}
	},
	deactivatepowerup : function(player, powerup) {
		// deactivate the passed powerup

		powerup[0].active = false;
		$('#card' + powerup[0].id).removeClass('active');
		message(player.name + ' deactivated ' + powerup[0].name + '<br />', 'debug', '.build-activity');
	},
	activatepowerup : function(player, powerup = null) {
		// figure out which powerup to activate for this player

		// get all permanent powerups for this player
		let powerups = $.grep(player.cards, function(e){return e.part == 'permanent';});
		let human = false;
		if(powerup!=null) {
			human = true;
		}

		// exit if black out event is active
		if(game.blackout==true) {
			return;
		}

		// check if player has already used a trap this round
		if(game.getactivetraps(player).length > 0) {
			return;
		}
		
		// activate powerups
		if(powerups.length>0) {
			if(human==false) {
				$('#' + player.id + ' .powerup').removeClass('active');
			}
			powerups.sort(compareDesirability).reverse();

			// before looping through get allowedpowerups for this player
			let allowedpowerups = game.getallowedpowerups(player);

			// activate highest value powerup, looping through in case of max power which allows for multiple powerups to be active
			let $i = 0;

			// handle humans
			if(human==true) {
				if(game.getactivepowerups(player).length > (allowedpowerups - 1)) {
					// human already has max pwerups active and tried to turn another one on - arbitrarily disable one of them
					// so human can never have more than max allowed active. human can selectively disable powerups for more control too.
					let pid = game.getactivepowerups(player)[0].id;
					game.getactivepowerups(player)[0].active = false;
					$('#card' + pid).removeClass('active');
				}
				// override all player powerups with human-passed powerup
				powerups = powerup;
			}

			// loop through all player powerups (or passed powerup for human) and activate
			for(let p = 0; p < powerups.length; p++) {
				// future enhancement: choose powerup based on other players' situations instead of powerup desirability
				// make sure this powerup hasn't been deactivated by brown out
				if(!powerups[p].deactivated && powerups[p].name != 'Maximum Power') {
					$i++;
					powerups[p].active = true;
					$('#card' + powerups[p].id).addClass('active');
					message(player.name + ' activated ' + powerups[p].name + '<br />', 'debug', '.build-activity');
					if(allowedpowerups == $i) break;
				}
			}
		}
	},
	getactivepowerups : function(player) {
		// returns active powerups for the passed player (includes traps)

		let powerups = $.grep(player.cards, function(e){return e.part == 'permanent';});
		let traps = $.grep(player.cards, function(e){return e.part == 'trap';});
		let allpowerups = powerups.concat(traps);
		let preturn = [];
		for(let p = 0; p < allpowerups.length; p++) {
			if(!allpowerups[p].deactivated && allpowerups[p].name != 'Maximum Power') {
				if(allpowerups[p].active == true) {
					preturn.push(allpowerups[p]);
				}
			}
		}
		return preturn;
	},
	getactivetraps : function(player) {
		// returns active traps for the passed player

		let traps = $.grep(player.cards, function(e){return e.part == 'trap';});
		let preturn = [];
		for(let p = 0; p < traps.length; p++) {
			if(!traps[p].deactivated) {
				if(traps[p].active == true) {
					preturn.push(traps[p]);
				}
			}
		}
		return preturn;
	},
	getallowedpowerups : function(player) {
		// return the number of allowed powerups for the passed player

		let powerups = $.grep(player.cards, function(e){return e.part == 'permanent';});
		let maxpower = $.grep(powerups, function(e){return e.name == 'Maximum Power';});
		let allowedpowerups = 1;
		if(maxpower.length>0) {
			if(!maxpower[0].deactivated) {
				allowedpowerups = 2;
				maxpower[0].active = true;
				$('#card' + maxpower[0].id).addClass('active');
				message(player.name + ' noticed ' + maxpower[0].name + '<br />', 'debug', '.build-activity');
			}
		}
		return allowedpowerups;
	},
	activatecloakingdevices : function(player, lizard = null) {
		// activate cloaking device for this player's lizard(s)

		/* RULES FOR CLOAKING
		for each lizard that can attack this round
		  if that lizard is faster than this lizard
		    if that lizard considers this lizard the highest threat
		      then cloak this lizard
		*/

		let cloaks = $.grep(player.cards, function(e){return e.name == 'Cloaking Device';});
		let lizards = $.grep(player.cards, function(e){return e.type == 'lizard';});
		let bestlizards = game.getlizardsbyvalue(lizards);
		let attackinglizards = game.getattackinglizards(player);
		let c = 0;
		let todiscard = [];
		if(lizard!=null) {
			lizard[0].cloaked = true;
			todiscard.push(cloaks[0]);
			$('#card' + lizard[0].id).addClass('cloaked');
			message(player.name + ' cloaked ' + lizard[0].name + ' (' + lizard[0].id + ')<br />', 'debug', '.build-activity');
			action('Cloaked!', $('#card' + lizard[0].id));
		} else if(attackinglizards.length>0 && cloaks.length>0 && bestlizards.length>0) {
			attackinglizards.sort(compareSpeed).reverse();
			// loop through each attacking lizard
			for(let a = 0; a < attackinglizards.length; a++) {	
				// is the attacking lizard faster than the current player's best lizard (if a matching one exists)
				// the attackinglizards array could be longer than the bestlizards array
				if(bestlizards[a]!=undefined) {
					let occupiedattackslots = bestlizards[a].lizard.slots['attack'].filter(x => !$.isEmptyObject(x));
					// the player doesn't want to waste a cloak on this lizard because it's faster than the other attacker
					// and is planning on attacking it first during the battle round
					if(player.ammo==0 || occupiedattackslots==0 || (player.ammo>0 && attackinglizards[a].speed >= bestlizards[a].lizard.speed)) {
						// get all lizards not owned by attackinglizard's owner
						let attackingplayer = game.getplayerfromlizard(attackinglizards[a]);
						let otherlizards = game.getotherlizards(attackingplayer);
						// exclude cloaked and stunned lizards
						let visiblelizards = $.grep(otherlizards, function(e){return e.cloaked == false;});
						let attackablelizards = $.grep(visiblelizards, function(e){return e.stunned == false;});
						// remove lizard as a threat if owner has no ammo
						if(attackablelizards.length>0) {
							for(let al = attackablelizards.length - 1; al >= 0; al--) {
								let attackableplayer = game.getplayerfromlizard(attackablelizards[al]);
								if(attackableplayer.ammo==0) {
									attackablelizards.splice(al, 1);
								}
							}
							// make sure we haven't removed all of the attackable lizards in the loop above
							if(attackablelizards.length>0) {
								let threateninglizard = game.getlizardbythreat(attackablelizards);
								let threateningplayer = game.getplayerfromlizard(threateninglizard);
								// if this player is the owner of the most threatening lizard to the attacking player, apply cloak to this lizard because it is the one that the attacker will target
								if(threateningplayer.id==player.id) {
									bestlizards[a].lizard.cloaked = true;
									todiscard.push(cloaks[c]);
									c++;
									$('#card' + bestlizards[a].lizard.id).addClass('cloaked');
									message(bestlizards[a].lizard.id + ' detected coming attack from ' + bestlizards[a].lizard.name + ', and cloaked<br />', 'debug', '.build-activity');
									action('Cloaked!', $('#card' + bestlizards[a].lizard.id));
								}
							}
							// we're done if we've used all available player cloaks
							if(c==cloaks.length) break;
						}
					}	
				}	
			}
		}
		// discard used cloaks
		if(todiscard.length>0) {
			for(let d = 0; d < todiscard.length; d++) {
				game.discard(player, todiscard[d]);
			}
		}
	},
	useemp : function(player) {
		// use EMP this round?
		
		/* RULES FOR USING EMPs
		if this player has no ammo or if this player has at least one lizard and no equipped lasers
		  if ther are any lizards that can attack this round
		    use emp
		*/
		let emps = $.grep(player.cards, function(e){return e.name == 'E.M.P.';});
		let lizards = $.grep(player.cards, function(e){return e.type == 'lizard';});
		let attackinglizards = game.getattackinglizards(player);
		let c = 0;
		let todiscard = [];
		// check if player has any lizards with any lasers
		for (let l = 0; l < lizards.length; l++) {
			let attack = game.gettotalstatbypart(lizards[l], 'attack');
			c += attack;
		}
		// player has no ammo, or has lizard(s) with no attack, or human deployed emp
		if(player.ammo==0 || (lizards.length>1 && c==0) || player.type=='human') {
			// there is at least one other lizard attacking this round, or human deployed emp
			if((attackinglizards.length>0 && emps.length>0 && game.emp == false) || player.type=='human') {
				game.emp = true;
				$('body').addClass('emp');
				message(player.name + ' used an E.M.P. (' + emps[0].id + ')<br />', 'debug', '.build-activity');
				message(player.name + ' used an E.M.P.<br />', 'buildlog');
				message(player.name + ' used an E.M.P.');
				action(player.name + ' used an E.M.P.', $('#' + player.id));
				game.discard(player, emps[0]);
				playsound(32);
				event('E.M.P.');
			}
		}
	},
	unusemechanic : function() {

		let player = game.gethumanplayer();
		let mechanic = $.grep(player.cards, function(e){return e.name == 'Mechanic';});
		if(mechanic.length>0) {
			if(mechanic[0].active==true) {
				$('.player.human .mechanic').removeClass('expended active');
				let cardid = $('.player.human .using-mechanic').attr('id');
				let cid = cardid.replace('card', '');
				let card = $.grep(player.cards, function(e){return e.id == cid;});
				$('.player.human .card').removeClass('using-mechanic');
				card[0].mechanic = false;
			}
		}

	},
	usemechanic : function(player, card = null) {

		// exit if black out event is active
		if(game.blackout==true) {
			return;
		}

		let mechanic = $.grep(player.cards, function(e){return e.name == 'Mechanic';});
		let cardwasupgraded = false;
		if(mechanic.length>0) {
			if(mechanic[0].active==true) {
				let upgradeablecard = {};
				if(card != null) {
					cardwasupgraded = true;
					upgradeablecard = card;
				} else {
					/* RULES FOR MECHANIC
					if player can upgrade a speed slot
					  if there is a faster player with at least one attack
					    use mechanic on booster
					else if player can upgrade an attack slot
					  use mechanic on laser
					else if player can upgrade a defend slot
					  use mechanic on shield
					else if player has another power up to activate
					  deactivate mechanic and activate next best power up
					*/
					let upgradeablespeedcard = game.getupgradeablecards(player, 'speed');
					if(upgradeablespeedcard!=undefined) {
						let cardlizard = game.getlizardfromcard(upgradeablespeedcard);
						let cardlizardspeed = game.gettotalstatbypart(cardlizard, 'speed');
						let fastestlizard = game.getbestlizardbypart('speed', player, true); // check for faster lizards
						if(fastestlizard[1]!=null) { // there might not be any other owned lizards
							// possible bug: if no other lizards are owned, gettotalstatbypart might throw an undefined bug
							// just need to make sure fastestlizard[1] is not null (the null check above wasn't tested yet)
							let fastestlizardattack = game.gettotalstatbypart(fastestlizard[1], 'attack');
							if(fastestlizardattack>0) {
								let lizardspeed = game.gettotalstatbypart(cardlizard, 'speed');
								cardwasupgraded = true;
								upgradeablecard = upgradeablespeedcard;
							}
						}
					} 
					let upgradeableattackcard = game.getupgradeablecards(player, 'attack');
					if(cardwasupgraded!=true && upgradeableattackcard!=undefined) {
						cardwasupgraded = true;
						upgradeablecard = upgradeableattackcard;
					} 
					let upgradeabledefensecard = game.getupgradeablecards(player, 'defense');
					if(cardwasupgraded!=true && upgradeabledefensecard!=undefined) {
						cardwasupgraded = true;
						upgradeablecard = upgradeabledefensecard;
					}
				}
				if(cardwasupgraded) {
					upgradeablecard.mechanic = true;
					$('#card' + upgradeablecard.id).addClass('using-mechanic');
					message(player.name + ' upgraded ' + upgradeablecard.id + ' with mechanic<br />', 'debug', '.build-activity');
					action(player.name + ' used mechanic on ' + upgradeablecard.name + '!', $('#card' + upgradeablecard.id), 'small');
				}
			}
		}
	},
	canuseresilience : function(targetedlizard, result, playertype, requireammo = true) {
		// returns resilience card if lizard's owner can use resilience

		let r = false;

		let targetedplayer = game.getplayerfromlizard(targetedlizard);
		let resilience = $.grep(targetedplayer.cards, function(e){return e.name == 'Resilience';});
		let attack = game.gettotalstatbypart(targetedlizard, 'attack');
		// if player has ammo and resilience card(s) and targeted lizard has not attacked and has lasers
		if(targetedplayer.type==playertype && result=='won' && resilience.length>0 && targetedlizard.used==false && attack>0 && targetedlizard.skipped==false) {
			if(requireammo == false ) {
				r = resilience;
			} else if(targetedplayer.ammo>0) {
				r = resilience;
			}
		}

		return r;

	},
	useresilience : function(targetedlizard, resilience = null) {
		// uses passed resilience card on the passed lizard
		// if no resilience card is passed, discard the first resilience card
		// in the players' set

		let targetedplayer = game.getplayerfromlizard(targetedlizard);
		targetedlizard.stunned = false;
		$('#card' + targetedlizard.id).removeClass('stunned').addClass('revived');
		message(targetedlizard.name + ' (' + targetedlizard.id + ') used resilience<br />', 'debug', '.battle-activity');
		message(targetedlizard.name + ' used resilience<br />', 'battlelog');

		if(!resilience) {
			resiliences = $.grep(targetedplayer.cards, function(e){return e.name == 'Resilience';});
			resilience = resiliences[0];
		}
		game.discard(targetedplayer, resilience);
		action('Revived!', $('#card' + targetedlizard.id), 'large', game.delay);
		playsound(50, game.delay);

	},



/********************************************
BATTLE PHASE ACTIONS
*********************************************/


	battlephase : function() {
		//lizard(s) attack!

		// check for game over
		if(game.gamestatus()=='gameover') return;

		game.state = 'beginbattle';
		//minimum of 2 owned lizards required for battle
		if(game.isbattlepossible()==true && game.emp==false) {
			$('body').addClass('battle-phase');
			game.dobattle();
		} else {
			game.currentlizard = 0;
			game.endturn('battlephase');
		}
	},
	gettargetlizard : function(lizard) {
		// gets targeted lizard if the passed lizard can attack

		// get lizard's owner
		let player = game.getplayerfromlizard(lizard);
		// get all lizards from other players
		let otherlizards = game.getotherlizards(player);
		// get this lizard's attack
		let occupiedattackslots = lizard.slots['attack'].filter(x => !$.isEmptyObject(x));
		// exclude cloaked and stunned lizards
		let visiblelizards = $.grep(otherlizards, function(e){return e.cloaked == false;});
		let attackablelizards = $.grep(visiblelizards, function(e){return e.stunned == false;});
		// find lizard with highest threat value
		let targetedlizard = game.getlizardbythreat(attackablelizards);

		if (occupiedattackslots.length>0 && lizard.stunned==false && player.ammo>0 && targetedlizard!=undefined) {
			return targetedlizard;
		} else {
			return false;
		}
	},
	attackablelizardsexist : function(player) {
		// returns true if there are attackable lizards

		// get all lizards from other players
		let otherlizards = game.getotherlizards(player);
		// exclude cloaked and stunned lizards
		let visiblelizards = $.grep(otherlizards, function(e){return e.cloaked == false;});
		let attackablelizards = $.grep(visiblelizards, function(e){return e.stunned == false;});

		if (attackablelizards.length>0) {
			return true;
		} else {
			return false;
		}
	},
	getallattackinglizards : function(excludestunned = true) {
		// gets all lizards that can attack

		let allattackinglizards = [];
		for (let l=0; l<lizards.length; l++) {
			// get current player
			let thisplayer = game.getplayerfromlizard(lizards[l]);
			if(thisplayer!=undefined) {
				// get this lizard's attack
				let occupiedattackslots = lizards[l].slots['attack'].filter(x => !$.isEmptyObject(x));
				// skip this lizard if it has no attack or thisplayer is out of ammo
				if(occupiedattackslots.length>0 && thisplayer.ammo>0 && lizards[l].used==false && lizards[l].skipped==false) {
					if(excludestunned) {
						if(lizards[l].stunned==false) {
							allattackinglizards.push(lizards[l]);
						}
					} else {
						allattackinglizards.push(lizards[l]);
					}
				}
			}
		}
		return allattackinglizards;
	},
	isbattlepossible : function() {
		// loop through all lizards and see if any attacks are possible

		let possible = false;
		let lizardarr = game.getallattackinglizards();
		if(game.emp==false) {
			for (let l=0; l<lizardarr.length; l++) {
				// get lizard's owner
				let player = game.getplayerfromlizard(lizardarr[l]);
				// can this lizard attack? 
				if((game.ismultishotactive(player)==false && lizardarr[l].used==true) || lizardarr[l].skipped==true) {
					// remain false - this lizard has already been used and multishot is off
				} else {
					// get all attackable lizards from other players
					let attackablelizards = game.attackablelizardsexist(player);
					if(attackablelizards==true) {
						possible = true;
					}
				}
			}
		}
		return possible;
	},
	ismultishotactive : function(player) {
		// determines if multishot is currently active

		let multishot = $.grep(player.cards, function(e){return e.name == 'Multishot';});
		let domultishot = false;
		if(game.frenzy==true) {
			domultishot = true;
		} else if(multishot.length>0) {
			if(multishot[0].active==true) {
				domultishot = true;
			}
		}
		return domultishot;
	},
	dobattle : function(targeted = null, skip = false, reinforcement = null) {
		// loops through lizards and performs attacks
		// can be called multiple times per round
		game.state = 'midbattle';
		let lizardarr = game.getallattackinglizards();
		//console.clear();

		// we always need to reset this before the loop because each time dobattle is called lizardarr could have less lizards
		game.currentlizard = 0;

		// loop through all attacking lizards
		for (let l=game.currentlizard; l<lizardarr.length; l++) {

			// check for game over
			if(game.gamestatus()=='gameover') return;
			// increment by default
			let doincrement = true;

			// it's possible this lizard was already used during a fatality
			if(lizardarr[game.currentlizard].used==true) {
				game.currentlizard++;
				continue;
			}

			// get current player
			let player = game.getplayerfromlizard(lizardarr[game.currentlizard]);
			// get targeted lizard
			let targetedlizard = game.gettargetlizard(lizardarr[game.currentlizard]);
			// override with human-selected target
			if(targeted) {
				targetedlizard = targeted;
			}

			// allow for multishot
			let domultishot = game.ismultishotactive(player);

			// check if there are any attackable lizards for the current player
			let attackablelizards = game.attackablelizardsexist(player);
			if(attackablelizards==false || (domultishot==false && lizardarr[game.currentlizard].used==true) || lizardarr[game.currentlizard].skipped==true) {
				// move onto the next lizard in the array
				targetedlizard = false;
			}

			// check for skip
			if(skip) {
				lizardarr[game.currentlizard].skipped = true;
				$('#card' + lizardarr[game.currentlizard].id).addClass('skipped');
				message(lizardarr[game.currentlizard].name + ' (' + lizardarr[game.currentlizard].id + ') was skipped<br />', 'debug', '.battle-activity');
				message(lizardarr[game.currentlizard].name + ' was skipped<br />', 'battlelog');
				// move onto the next lizard in the array
				targetedlizard = false;
			}

			/* RULES FOR FATALITY
			if owner of attacking lizard has fatality card(s) 
			  if owner of attacking lizard has at least one other lizard that can attack
			    if nerf event is not active
			    	if owner of attacking lizard has at least 2 ammo left
			   	  		use fatality and mark both involved lizards as used
			*/
			let fatality = $.grep(player.cards, function(e){return e.name == 'Fatality';});
			let attackinglizards = game.getownedattackinglizards(player);
			let chosenlizards = [];
			let doingfatality = false;
			let allowfatality = false;
			if(fatality.length>0 && attackinglizards.length>1 && game.nerf==false && player.ammo>1) {
				if(player.type=='human' && game.fatalityactive==true) {
					let primaryattackercard = $('.lizard.attacking:not(.reinforcement)');
					let primaryattackerid = primaryattackercard.attr('id');
		            let paid = primaryattackerid.replace('card', '');
		            let primaryattacker = $.grep(lizards, function(e){return e.id == paid;});
					if(reinforcement==null) {
						// human is using fatality but hasn't chosen second lizard yet
						chosenlizards = [primaryattacker[0]];
						allowfatality = true;
					} else {
						chosenlizards = [primaryattacker[0], reinforcement];
						doingfatality = true;
					}
				} else if(player.type=='human') {
					// human has a fatality card but has not clicked it
					chosenlizards = [lizardarr[game.currentlizard]];
					allowfatality = true;
				} else {
					// todo future enhancement: instead of taking first two lizards in array, decide which two to use
					chosenlizards = [attackinglizards[0], attackinglizards[1]];
					doingfatality = true;
				}
			} else {
				chosenlizards = [lizardarr[game.currentlizard]];
			}

			// highlight attacking lizard in dom
			$('.card.lizard').removeClass('attacking');
			$('#card' + chosenlizards[0].id).addClass('attacking');
			if(chosenlizards.length>1) $('#card' + chosenlizards[1].id).addClass('attacking');

			// exit loop if human player has attacking lizards and allow click selection
			// its possible the current lizard has been stunned earlier in the loop in which
			// case the targetedlizard variable will be empty, which works fine for AI but
			// needs to be accounted for in case of human players
			if(player.type=='human' && !targeted && player.ammo>0 && lizardarr[game.currentlizard].stunned==false && game.isbattlepossible() && skip==false) {
				$('.player.npc .playercards .lizard:not(.stunned):not(.cloaked)').addClass('clickable');
				message('Your <span>' + lizardarr[game.currentlizard].name + '</span> is ready to attack! Choose a victim.');
				$('#skip').show();
				if(allowfatality==true) {
					$('.player.human .card.fatality').addClass('clickable');
				} else {
					$('.player.human .card.fatality').removeClass('clickable');
				}
				game.delay = 0;
				return;
			}

			// we want to do this only if we're not exiting the loop for a human player
			if(doingfatality==true) {
				message(player.name + ' used fatality against ' + targetedlizard.name + ' (' + targetedlizard.id + ')<br />', 'debug', '.battle-activity');
				message(player.name + ' used fatality against ' + targetedlizard.name + '<br />', 'battlelog');
				// discard used fatality
				game.discard(player, fatality[0]);
			}

			// check if multishot is active
			if(domultishot==true && player.ammo>0 && targetedlizard!=false) {
				// player has multishot active and more than 2 ammo left; don't increment to next lizard, allowing for this one to attack again
				doincrement = false;
				message(player.name + ' is using multishot with ' + lizardarr[game.currentlizard].id + '<br />', 'debug', '.battle-activity');
			}
			
			// this lizard will attack
			if(targetedlizard) {
				
				let result = game.attack(chosenlizards, targetedlizard);
				game.lasttarget = targetedlizard;

				game.delay += 300;

				// check if human player wants to revive stunned lizard
				// this needs to be done here instead of in game.attack because it needs to 
				// break this loop and allow for human input before it continues

				let resilience = game.canuseresilience(targetedlizard, result, 'human');
				if(resilience) {
					message('Your <span>' + targetedlizard.name + '</span> was stunned! Use resilience or continue battle phase.');
					$('#continue').show();
					$('.player.human .card.resilience').addClass('clickable');
					return;
				}
			}

			// increment current lizard
			if(doincrement) {
				game.currentlizard++;
				if(game.currentlizard == lizardarr.length) {
					break;
				};
			}

			// reset this so next iteration player has to select new target
			// if player has multiple consecutive attacking lizards 
			if(targeted) {
				targeted = null;
			}
			$('.lizard').removeClass('clickable');

			skip = false;
		}
		
		// due to a combination of frenzy possibilities and human interaction we always need to do a check
		// to see if there are any lizards that can attack any other lizards, otherwise endturn
		if(game.isbattlepossible()==false) {
			game.currentlizard = 0;
			game.gameinfo();
			game.endturn('dobattle');
			return;
		} else {
			// we got to the end of the loop before frenzied lizards could finish their attacks
			game.currentlizard = 0;
			game.dobattle();
		}

	},
	attack : function(chosenlizards, targetedlizard) {
		// performs attack and returns result

		// check for fatality
		let usingfatality = false;
		let lizard1 = chosenlizards[0];
		let lizard2 = {};
		if(chosenlizards.length>1) {
			usingfatality = true;
			lizard2 = chosenlizards[1];
		}

		// ATTACK
		// get current player
		let player = game.getplayerfromlizard(lizard1);
		// perform melee
		let result = game.melee(chosenlizards, targetedlizard);
		// process result
		if(result=='won') {
			targetedlizard.stunned = true;
			$('#card' + targetedlizard.id).addClass('stunned');
			player.points += 1;
			$('#' + player.id + ' .points').html(player.points);
			game.battleswon++;
			$('.battles-won').html(game.battleswon);
			playsound(62, (game.delay + 800));
			action('+1', $('#' + player.id), 'huge', (game.delay + 800));
		} else {
			game.battleslost++;
			$('.battles-lost').html(game.battleslost);
		}
		// expend ammo
		player.ammo--;
		player.attacked = true;
		// mark lizard as used
		lizard1.used = true;
		$('#card' + lizard1.id).addClass('used');
		if(usingfatality) {
			lizard2.used = true;
			// expend additional ammo
			player.ammo--;
			$('#card' + lizard2.id).addClass('used');
			message(lizard1.name + ' (' + lizard1.id + ') and ' + lizard2.name + ' (' + lizard2.id + ') attacked ' + targetedlizard.name + '(' + targetedlizard.id + ') and ' + result + '<br />', 'debug', '.battle-activity');
			message(lizard1.name + ' and ' + lizard2.name + ' attacked ' + targetedlizard.name + ' and ' + result + '<br />', 'battlelog');
			playsound(33, game.delay);
			if(result=='won') {
				action('Fatality!', $('#card' + targetedlizard.id), 'large', game.delay);
			} else {
				action('Fatality blocked!!!!', $('#card' + targetedlizard.id), 'large', game.delay);
				playsound(34, (game.delay + 400));
			}
		} else {
			message(lizard1.name + ' (' + lizard1.id + ') attacked ' + targetedlizard.id + ' and ' + result + '<br />', 'debug', '.battle-activity');
			message(lizard1.name + ' attacked ' + targetedlizard.name + ' and ' + result + '<br />', 'battlelog');
			playsound(17, game.delay);
			if(result=='won') {
				action('Stunned!', $('#card' + targetedlizard.id), 'large',game.delay);
				playsound(54, (game.delay + 500));
			} else {
				action('Blocked!', $('#card' + targetedlizard.id), 'large', (game.delay + 300));
				playsound(26, (game.delay + 300));
			}
		}
		if(player.type=='human') {
			message('You <span>' + result + '</span>!');
		}

		/* RULES FOR RESILIENCE
		if player is not human
			if owner of targeted lizard has resilience card(s) and ammo and it has not already attacked
			  if it has lasers and has the strongest attack of all this player's lizards
			    use resilience  
		*/
		
		let resilience = game.canuseresilience(targetedlizard, result, 'npc');
		if(resilience) {
			let highestattacklizard = game.getbestlizardbypart('attack', game.getplayerfromlizard(targetedlizard));
			// if this is this player's strongest attack lizard
			if(highestattacklizard[1].id==targetedlizard.id) {
				game.delay += 300;
				game.useresilience(targetedlizard, resilience[0]);
				//console.log('game delay after resilience=' + game.delay);
			}
		}
		return result;
	},
	melee : function(attackers, defender) {
		// check for fatality
		let usingfatality = false;
		let attacker1 = attackers[0];
		let attacker2 = {};
		if(attackers.length>1) {
			usingfatality = true;
			attacker2 = attackers[1];
		}

		// ATTACK
		let bestAttack = 0;
		let attacks = attacker1.slots['attack'];
		var attacksexisting = attacks.filter(value => Object.keys(value).length !== 0);
		let attackDice = [0, 0, 0];
		let attackCardsUsed = []; // for display purposes only
		if(usingfatality) {
			let attacks2 = attacker2.slots['attack'];
			var attacks2existing = attacks2.filter(value => Object.keys(value).length !== 0);
			let attackDiceUsed = []; // for display purposes only
			attackDice = [0, 0, 0, 0, 0, 0];
			// for fatalities we don't need to loop through every attack slot, we just want to grab
			// the single best attack slot from both attacking lizards and combine the total
			let best1 = attacksexisting.sort(compareDesirability).reverse();
			let best2 = attacks2existing.sort(compareDesirability).reverse();
			let totalDice = best1[0].desirability + best2[0].desirability;
			// do either of these attacking cards have mechanic active?
			if(best1[0].mechanic==true || best2[0].mechanic==true) totalDice = totalDice + 1;
			// each dice
			for(let i = 0; i < totalDice; i++) {
				let r = rollDie();
				attackDice[i] = r;
				attackDiceUsed[i] = r;
			}
			attackCardsUsed[0] = attackDiceUsed;
		} else {
			// each card
			for(let a = 0; a < attacksexisting.length; a++) {
				let attackDiceUsed = []; // for display purposes only
				let v = attacksexisting[a].desirability;
				// does this card have mechanic active?
				if(attacksexisting[a].mechanic==true) v = v + 1;
				// is nerf event active?
				if(game.nerf==true) v = 1;
				// is turbo event active?
				if(game.turbo==true) v = 3;
				if(v) {
					if(v>bestAttack) bestAttack = v;
					// each dice
					for(let i = 0; i < v; i++) {
						let r = rollDie();
						attackDiceUsed[i] = r;
						if(attackDice[i] < r) attackDice[i] = r;
					}
				}
				attackCardsUsed[a] = attackDiceUsed;
			}
		}

		// DEFEND
		let defends = defender.slots['defense'];
		var defendsexisting = defends.filter(value => Object.keys(value).length !== 0);
		let defendDice = [0, 0, 0];
		let defendCardsUsed = []; // for display purposes only
		let bestDefend = 0;
		// each card
		for(let d = 0; d < defendsexisting.length; d++) {
			let defendDiceUsed = []; // for display purposes only
			let v = defendsexisting[d].desirability;
			// does this card have mechanic active?
			if(defendsexisting[d].mechanic==true) v = v + 1;
			// is nerf event active?
			if(game.nerf==true) v = 1;
			// is turbo event active?
			if(game.turbo==true) v = 3;
			if(v) {
				if(v>bestDefend) bestDefend = v;
				// each dice
				for(let i = 0; i < v; i++) {
					let r = rollDie();
					defendDiceUsed[i] = r;
					if(defendDice[i] < r) defendDice[i] = r;
				}
			}
			defendCardsUsed[d] = defendDiceUsed;
		}
		// roll one dice if no defense present
		if(defendsexisting.length == 0) {
			let defendDiceUsed = []; // for display purposes only
			bestDefend = 1;
			defendDice[0] = rollDie() - 1;
			defendDiceUsed[0] = defendDice[0];
			defendCardsUsed[0] = defendDiceUsed[0];
		}

		// sort arrays for best dice
		attackDice.sort((a, b) => b - a);
		defendDice.sort((a, b) => b - a);
		for(let adu = 0; adu < attackCardsUsed.length; adu++) {
			attackCardsUsed[adu].sort((a,b) => b - a);
		}
		for(let ddu = 0; ddu < defendCardsUsed.length; ddu++) {
			if(defendCardsUsed[ddu].length > 0) {
				defendCardsUsed[ddu].sort((a,b) => b - a);
			}
		}

		if(!usingfatality) {
			// compare same number of dice for attack and defend
			let maxDice = 0;
			if(bestAttack >= bestDefend) {
				maxDice = bestDefend;
			} else {
				maxDice = bestAttack;
			}
			attackDice = attackDice.slice(0, maxDice);
			defendDice = defendDice.slice(0, maxDice);
		}

		// take upgrades into account
		let attackingplayer = game.getplayerfromlizard(attacker1);
		let defendingplayer = game.getplayerfromlizard(defender);
		let superscope = $.grep(attackingplayer.cards, function(e){return e.name == 'Super Scope';});
		let forcefield = $.grep(defendingplayer.cards, function(e){return e.name == 'Force Field';});
		let attackbonus = 0;
		let defendbonus = 0;
		if(superscope.length>0) {
			if(superscope[0].active==true) {
				attackbonus = 1;
			}
		}
		if(forcefield.length>0) {
			if(forcefield[0].active==true) {
				defendbonus = 1;
				message(defendingplayer.name + ' has Force Field active; +1 to defense<br />', 'debug', '.battle-activity');
			}
		}

		const totalAttack = attackDice.reduce((partial_sum, a) => partial_sum + a,0) + attackbonus; 
		const totalDefend = defendDice.reduce((partial_sum, a) => partial_sum + a,0) + defendbonus;

		// battle log purposes only
		if(attackbonus == 1) {
			message(attackingplayer.name + ' has Super Scope active and rolled ' + totalAttack + '<br />', 'debug', '.battle-activity');
		}
		if(defendbonus == 1) {
			message(defendingplayer.name + ' has Force Field active and rolled ' + totalDefend + '<br />', 'debug', '.battle-activity');
		}

		let result = totalAttack > totalDefend ? 'won' : 'lost';

		let $melee = '<div class="melee-attack clearfix"><h4>Attack: ' + totalAttack + '</h4>';
		for(let acu = 0; acu < attackCardsUsed.length; acu++) {
			$melee += '<div class="card-wrapper"><div class="attack-card clearfix">';
			for(let adu = 0; adu < attackCardsUsed[acu].length; adu++) {
				let cssused = '';
				let diepos = $.inArray(attackCardsUsed[acu][adu], attackDice);
				if(diepos > -1) {
					attackDice.splice(diepos,1);
					cssused = ' die-used';
				}
				$melee += '<div class="attack-die die die' + attackCardsUsed[acu][adu] + cssused + '"></div>';
			}
			$melee += '</div></div>';
		}
		let totalDefendDisplay = defendsexisting.length == 0 ? '<span class="tooltip" data-powertip="Penalty for no shields">' + (totalDefend+1) + ' (-1): ' + totalDefend + '</span>' : totalDefend;
		$melee += '</div><div class="melee-defend clearfix"><h4>Defense ' + totalDefendDisplay + '</h4>';
		for(let dcu = 0; dcu < defendCardsUsed.length; dcu++) {
			$melee += '<div class="card-wrapper"><div class="defend-card clearfix">';
			if(defendCardsUsed[dcu].length > 0) {
				for(let ddu = 0; ddu < defendCardsUsed[dcu].length; ddu++) {
					let cssused = '';
					let diepos = $.inArray(defendCardsUsed[dcu][ddu], defendDice);
					if(diepos > -1) {
						defendDice.splice(diepos,1);
						cssused = ' die-used';
					}
					$melee += '<div class="defend-die die die' + defendCardsUsed[dcu][ddu] + cssused + '"></div>';
				}
			} else {
				$melee += '<div class="defend-die die die' + (defendCardsUsed[0] + 1) + ' die-used"></div>';
			}
			$melee += '</div></div>';
		}
		$melee += '</div>';
		$('#' + attackingplayer.id + ' .dice-results').addClass('shown').html($melee);
		game.settooltips();
		return result;
	},



	decidecard : function(player) {
		// looks at usable cards to find the best one

		// todo future enhancement: take other players' situations into account when deciding card
		// instead of looking only at owned cards

		// usable playfield cards
		let usable = game.getusablecards(player);	
		
		// misc variables
		let wanted = [];

		// existing lizards
		let l = $.grep(player.cards, function(e){return e.type == 'lizard';});
		let ll = l.length;
		
		// start with all possible card types - we will adjust later
		wanted.push('permanent', 'trap', 'lizard', 'energy3', 'upgrade3', 'energy2', 'upgrade2', 'energy1', 'upgrade1', 'powerup');
		
		if(ll==1) {
			// move lizard after upgrade2
			wanted.splice(wanted.indexOf('lizard'), 1);
			wanted.splice(wanted.indexOf('energy1'), 0, 'lizard');
			// move energy3 and energy2 to end
			wanted.splice(wanted.indexOf('energy3'), 1);
			wanted.splice(wanted.length, 0, 'energy3');
			wanted.splice(wanted.indexOf('energy2'), 1);
			wanted.splice(wanted.length, 0, 'energy2');
		
		} else if(ll==2) {
			// move lizard after upgrade1
			wanted.splice(wanted.indexOf('lizard'), 1);
			wanted.splice(wanted.indexOf('powerup'), 0, 'lizard');
			// move energy3 to end
			wanted.splice(wanted.indexOf('energy2'), 1);
			wanted.splice(wanted.length, 0, 'energy2');

		} else if(ll==3) {
			// move lizard to end
			wanted.splice(wanted.indexOf('lizard'), 1);
			wanted.splice(wanted.length, 0, 'lizard');

		} else if(ll==4) {
			// remove lizard
			wanted.splice(wanted.indexOf('lizard'), 1);

		}

		// if player has at least one lizard and no reslience, look for a resilience card
		if(ll>0) {
			// existing resilience
			let r = $.grep(player.cards, function(e){return e.name == 'Resilience';});
			let rr = r.length;
			if(rr==0) {
				wanted.unshift('Resilience');
			}
		}

		//console.log(player.name + ' wants: \n' + wanted.toString());
		
		// get the best card
		let best = game.getbestcardfromset(usable, wanted);	

		if(best!=null) {
			// if multiple identical cards are found, only use the first one
			if(best.length > 1) best = best[0];
			// discard if necessary
			if(best.discard!=null) {
				game.discard(player, best.discard, best.lizard);
			}
			// return the card
			return best.card;
		}
	},

}

