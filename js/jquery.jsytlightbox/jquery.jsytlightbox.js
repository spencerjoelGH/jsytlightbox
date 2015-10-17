var YTAPIReady;
(function ( $ ) {
	
	var elements = {};
	var YTPlayer;
	var videoID;
	
	function createContainer(self){
		
			elements.modal = $('<div id="jsyt_container"></div>');
			elements.video_container = $('<div id="jsyt_video_container"></div>');
			elements.YTPlayer_container = $('<div id="jsyt_video_wrapper"><div id="jsyt_player"></div></div>');
			elements.close_button = $('<div id="jsyt_close"><i class="fa fa-times"></i></div>');
			
			$(self).append(elements.modal);
			$(elements.modal).append(elements.video_container);
			$(elements.modal).append(elements.close_button);
			$(elements.video_container).append(elements.YTPlayer_container);
	}

	function show(){
		$(elements.modal).css("display","block");
	}	
	
	function hide(){
		$(elements.modal).css("display","none");
	}
	
	
	function loadOrPlayVideo(videoId){
		console.log("Load or play video called");
		  console.log("Stored ID: " + videoID + " New ID: " + videoId);
		  if(!YTPlayer){
			  videoID = videoId;
		  // 2. This code loads the IFrame Player API code asynchronously.
	      var tag = document.createElement('script');
	      tag.src = "https://www.youtube.com/iframe_api";
	      var firstScriptTag = document.getElementsByTagName('script')[0];
	      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      	  } else {
	      	  if(videoID == videoId){
		      	  YTPlayer.playVideo();
	      	  } else {
		      	 changeVideo(videoId); 
		      	 videoID = videoId;
	      	  }
	      	 
      	  }
	  }
	
	YTAPIReady = function(){
		YTPlayer = new YT.Player('jsyt_player', {
          videoId : videoID,
          width : "60%",
          height : 490,
          playerVars:
					{
					    "enablejsapi":1,
					    "origin":document.domain,
					    "rel":0,
					    "iv_load_policy":0,
					    "modestbranding":1,
					    "showinfo":0,
					    "autoplay":0
					},
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            "onError":onPlayerError
          }
        });
        
	}
	
	function onPlayerReady(event) {
        event.target.playVideo();
      }
      
     function onPlayerStateChange(event) {
      }
      
    function onPlayerError(event){
    }
    
    function changeVideo(videoID){
	      YTPlayer.loadVideoById(videoID);
      }
	
	
	$.fn.jsytlightbox = function() {
		self = this;
		createContainer(self);
		
		$('*[media="youtube"]').click(function(){
			loadOrPlayVideo($(this).attr("data"));
			show();
		})
		
		$('#jsyt_close').click(function(){
			YTPlayer.stopVideo();
			hide();
		})
		
		$(elements.modal).click(function(){
			hide();
		})
		
		return this.each(function() {

			});
		
		}
	
	
}( jQuery ));


function onYouTubeIframeAPIReady() {
		YTAPIReady();
		
		
		}

