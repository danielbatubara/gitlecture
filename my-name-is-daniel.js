$(document).ready(function(){
// 	google analytics function
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-99701287-1', 'auto');
	  ga('send', 'pageview');
	
	
// 	location.reload();
	var educationDiv = $("#education-section").offset().top;
	var experienceDiv = $("#experience-section").offset().top;
	var skillsDiv = $("#skills-section").offset().top;
	var projectDiv = $("#project-section").offset().top;
	$(window).resize(function(){
		educationDiv = $("#education-section").offset().top;
		experienceDiv = $("#experience-section").offset().top;
		skillsDiv = $("#skills-section").offset().top;
		projectDiv = $("#project-section").offset().top;
	});
	$(document).scroll(function() {
    if($(window).scrollTop()>educationDiv) {
  	$('#education-section').removeClass("background2");
  	$('body').css({'background-image':'url("https://www.secureaplus.com/wp-content/uploads/2016/04/SecureAPlus-For-Education-Background.png")'});
    	}
	});
	$(document).scroll(function() {
    if($(window).scrollTop()<educationDiv) {
  	$('#education-section').addClass("background2");
  	$('body').css({'background-image':'url("http://wallpapercave.com/wp/CpRGNUC.jpg")'});
        }
	});
	$(document).scroll(function() {
    if($(window).scrollTop()>experienceDiv) {
  	$('#experience-section').removeClass("background3");
  	$('body').css({'background-image':'url("http://www.sjoerdcornelisse.nl/wp-content/uploads/2016/06/office-desk-background-2.jpg")'});
    	}
	});
	$(document).scroll(function() {
    if($(window).scrollTop()<experienceDiv && $(window).scrollTop()>educationDiv) {
  	$('#experience-section').addClass("background3");
  	$('body').css({'background-image':'url("https://www.secureaplus.com/wp-content/uploads/2016/04/SecureAPlus-For-Education-Background.png")'});
        }
	});
	$(document).scroll(function() {
    if($(window).scrollTop()>skillsDiv) {
  	$('#skills-section').removeClass("background4");
  	$('body').css({'background-image':'url("http://wallpaperpulse.com/img/902487.jpg")'});
    	}
	});
	$(document).scroll(function() {
    if($(window).scrollTop()<skillsDiv && $(window).scrollTop()>experienceDiv) {
  	$('#skills-section').addClass("background4");
  	$('body').css({'background-image':'url("http://www.sjoerdcornelisse.nl/wp-content/uploads/2016/06/office-desk-background-2.jpg")'});
        }
	});
	$(document).scroll(function() {
    if($(window).scrollTop()>projectDiv) {
  	$('#project-section').removeClass("background5");
  	$('body').css({'background-image':'url("https://images.alphacoders.com/174/thumb-1920-174041.jpg")'});
    	}
	});
	$(document).scroll(function() {
    if($(window).scrollTop()<projectDiv && $(window).scrollTop()>skillsDiv) {
  	$('#project-section').addClass("background5");
  	$('body').css({'background-image':'url("http://wallpaperpulse.com/img/902487.jpg")'});
        }
	});

	$("h1.title-header").mouseenter(function() {
 	$(this).css({'text-decoration':'underline','font-size':'42px'});
  	})
  	.mouseleave(function() {
    $(this).css({'text-decoration':'none','font-size':'32px'});
  	});

  	$("img.img-circle").mouseenter(function() {
 	$(this).removeClass("pic-size-140").addClass("pic-size-155").addClass("position-relative");
  	})
  	.mouseleave(function() {
    $(this).removeClass("pic-size-155").removeClass("position-relative").addClass("pic-size-140");
  	});

  	$("button.skill-1").mouseenter(function() {
 	$("li.skill-a").append("HTML(5)").fadeIn(999);
 	$("li.skill-b").append("CSS(3)").fadeIn(999);
 	$("li.skill-c").append("Bootstrap").fadeIn(999);
 	$("li.skill-d").append("JavaScript").fadeIn(999);
 	$("li.skill-e").append("jQuery").fadeIn(999);
 	})
 	.mouseleave(function() {
    $("li.skill-a").empty();
 	$("li.skill-b").empty();
 	$("li.skill-c").empty();
 	$("li.skill-d").empty();
 	$("li.skill-e").empty();
  	});

  	$("button.skill-2").mouseenter(function() {
 	$("li.skill-a").append("R Studio").fadeIn(999);
 	$("li.skill-b").append("Tableau").fadeIn(999);
 	$("li.skill-c").append("Adobe Analytics").fadeIn(999);
 	$("li.skill-d").append("Rapid Miner").fadeIn(999);
 	$("li.skill-e").append("SPSS & STATA").fadeIn(999);
 	})
 	.mouseleave(function() {
    $("li.skill-a").empty();
 	$("li.skill-b").empty();
 	$("li.skill-c").empty();
 	$("li.skill-d").empty();
 	$("li.skill-e").empty();
  	});

  	$("button.skill-3").mouseenter(function() {
 	$("li.skill-a").append("Microsoft Word").fadeIn(999);
 	$("li.skill-b").append("Microsoft Powerpoint").fadeIn(999);
 	$("li.skill-c").append("Microsoft Excel").fadeIn(999);
 	$("li.skill-d").append("One Note").fadeIn(999);
 	})
 	.mouseleave(function() {
    $("li.skill-a").empty();
 	$("li.skill-b").empty();
 	$("li.skill-c").empty();
 	$("li.skill-d").empty();
 	$("li.skill-e").empty();
  	});

  	$("button.skill-4").mouseenter(function() {
 	$("li.skill-a").append("Adobe Photoshop").fadeIn(999);
 	$("li.skill-b").append("Adobe Premiere CC Pro (Video Editing)").fadeIn(999);
 	$("li.skill-c").append("Adobe After Effects").fadeIn(999);
 	$("li.skill-d").append("SEO").fadeIn(999);
 	})
 	.mouseleave(function() {
    $("li.skill-a").empty();
 	$("li.skill-b").empty();
 	$("li.skill-c").empty();
 	$("li.skill-d").empty();
 	$("li.skill-e").empty();
  	});

  	$("button.skill-5").mouseenter(function() {
 	$("li.skill-a").append("English (native)").fadeIn(999);
 	$("li.skill-b").append("Indonesian (native)").fadeIn(999);
 	$("li.skill-c").append("Dutch (beginner)").fadeIn(999);
 	})
 	.mouseleave(function() {
    $("li.skill-a").empty();
 	$("li.skill-b").empty();
 	$("li.skill-c").empty();
 	$("li.skill-d").empty();
 	$("li.skill-e").empty();
  	});


});
