// Define the messages used in the game.
var messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='http://monogatari.hyuchia.com/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='http://monogatari.hyuchia.com/demo/'>Demo</a> - A simple Demo.</p>"
	},
	"FriendTwitter1Leaving": {
		"Title" : "Twitter Feed",
		"Subtitle" : "Friend#001 @F1 1h",
		"Message" : "Hurricane is coming! I'm leaving! #HurricaneXX"
	},
	"FriendTwitter2Leaving": {
		"Title" : "Twitter Feed",
		"Subtitle" : "Friend#002 @F2 1h",
		"Message" : "This one is HUGE!! We aren't staying. #HurricaneXX"
	},
	"FriendTwitter1Staying": {
		"Title" : "Twitter Feed",
		"Subtitle" : "Friend#001 @F1 1h",
		"Message" : "Don't think this one will cause much trouble. I'm not going anywhere. #HurricaneXX"
	},
	"FriendTwitter2Staying": {
		"Title" : "Twitter Feed",
		"Subtitle" : "Friend#002 @F2 1h",
		"Message" : "This is my house and I'm not leaving it unattended! #HurricaneXX #PrayForJesus"
	}
}

// Define the notifications used in the game
var notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
}

// Define the Particles JS Configurations used in the game
var particles = {

}

// Define the music used in the game.
var music = {
	"rain" : "rain.wav"
}

// Define the voice files used in the game.
var voice = {

}

// Define the sounds used in the game.
var sound = {

}

// Define the videos used in the game.
var videos = {
	"HurricaneReport1" : "hurricane_report1.mp4"
}

// Define the images used in the game.
var images = {

}

// Define the backgrounds for each scene.
var scenes = {
	"florida_city" : "florida_city.jpg",
	"tv" : "tv.jpg",
	"traffic_jam" : "traffic_jam.jpg",
	"shelter" : "shelter.jpg",
	"flood" : "flood.jpg"
}

// Define the Characters
var characters = {
	"h": {
		"Name": "Hikaru",
		"Color": "#5bcaff"
	}
}

var script = {
	
	// The game starts here.
	"Start": [
		"scene #fff with fadeIn",
		
		{"Input": {
				"Text": "What is your name?",
				"Validation": function(input) {
					return input.trim().length > 0;
				},
				"Save": function(input) {
					storage.player.Name = input;
				},
				"Warning": "You must enter a name!"
			}
		},

		"scene florida_city with fadeIn",
		"&nbsp;&nbsp;Florida City, Florida. August 23rd, 20XX.",
		"&nbsp;&nbsp;Late summer is a usual hurricane season here.",
		"&nbsp;&nbsp;This year seems to be no different.",
		"scene tv with fadeIn",
		"&nbsp;&nbsp;You go to check the TV to see any news about this year hurricane.",
		"play video HurricaneReport1",
		"&nbsp;&nbsp;It seems like the hurricane is indeed coming.",
		"&nbsp;&nbsp;You decide to check your twitter to see your friends' reaction to the news.",
		"display message FriendTwitter1Leaving",
		"display message FriendTwitter2Leaving",
		
		{"Choice": {
				"Dialog": "&nbsp;&nbsp;Seeing the news about the hurricane, you ponder what should you do?",
				"Evacuate": {
					"Text": "Evacuate",
					"Do": "jump Evacuate"
				},
				"Stay": {
					"Text": "Stay",
					"Do": "jump Day2"
				}
			}
		}
	],

	"Evacuate": [

		"stop music",
		"&nbsp;&nbsp;You decide to evacuate to the nearest shelter.",
		"scene traffic_jam with FadeIn",
		"&nbsp;&nbsp;Turn out, it's not just you who decided to evacuate.",
		"&nbsp;&nbsp;In a normal day, it will probably take about two hours to reach the destination. Today, though, it will probably take 5-6 times longer.",
		"&nbsp;&nbsp;An hour has passed. You barely move. Maybe 10 miles or so.",
		"&nbsp;&nbsp;Two hours have passed. The traffic is only getting worse.",
		"&nbsp;&nbsp;Three hours have passed. You still on the highway.",
		"&nbsp;&nbsp;Four hours have passed. You start to worry about your gas.",
		"&nbsp;&nbsp;Five hours have passed. You see some people turn back.",
		"&nbsp;&nbsp;Six hours have passed. You've move for 45 miles, but still a long way to go.",
		"&nbsp;&nbsp;Seven hours have passed. Summer weather doesn't help you feel any better stuck here.",
		"&nbsp;&nbsp;Eight hours have passed. The sun is set soon.",
		"&nbsp;&nbsp;Nine hours have passed. Only 30 miles to go.",
		"&nbsp;&nbsp;Ten hours have passed. It's getting dark.",
		"&nbsp;&nbsp;Eleven hours have passed. 10 miles to go.",
		"&nbsp;&nbsp;Twelve hours have passed. You finally arrive at the shelter.",
		"scene shelter with FadeIn",
		"",
		"end"
	],

	"Day2": [

		"scene florida_city with fadeIn",
		"&nbsp;&nbsp;Florida City, Florida. August 24th, 20XX.",
		"&nbsp;&nbsp;You decided to stay put and see how the hurricane plays out.",
		"scene tv with fadeIn",
		"&nbsp;&nbsp;You go to check the news to see the update of the hurricane.",
		"play video HurricaneReport1",
		"&nbsp;&nbsp;It seems like the hurricane will pass through this area.",
		"&nbsp;&nbsp;You decide to check your twitter to see your friends' thoughts.",
		"display message FriendTwitter1Staying",
		"display message FriendTwitter2Staying",
		
		{"Choice": {
				"Dialog": "&nbsp;&nbsp;Seeing the update on the hurricane, you ponder what should you do?",
				"Evacuate": {
					"Text": "Evacuate",
					"Do": "jump Evacuate"
				},
				"Stay": {
					"Text": "Stay",
					"Do": "jump Day3"
				}
			}
		}
	],
	
	"Day3": [
	
		"scene florida_city with fadeIn",
		"play music rain loop",
		"&nbsp;&nbsp;Florida City, Florida. August 25th, 20XX.",
		"&nbsp;&nbsp;It starts raining non stop. The hurricane is coming.",
		"scene tv with fadeIn",
		"&nbsp;&nbsp;You go to see the update on the hurricane on the tv.",
		"play video HurricaneReport1",
		"&nbsp;&nbsp;It seems like the hurricane will be here tomorrow.",
		"&nbsp;&nbsp;You decide to check your twitter to see your friends' thoughts.",
		"display message FriendTwitter1Staying",
		"display message FriendTwitter2Staying",
		{"Choice": {
				"Dialog": "&nbsp;&nbsp;Seeing the update on the hurricane, you ponder what should you do?",
				"Evacuate": {
					"Text": "Evacuate",
					"Do": "jump Evacuate"
				},
				"Stay": {
					"Text": "Stay",
					"Do": "jump Day4"
				}
			}
		}
	],
	
	"Day4": [
	
		"scene flood with fadeIn",
		"&nbsp;&nbsp;Florida City, Florida. August 26th, 20XX.",
		"&nbsp;&nbsp;The hurricane has hit the florida city. The wind is really strong. and the water keep raising as the rain hasn't stopped.",
		"end"
	]
}