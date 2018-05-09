console.log ("Hello");


angular.module('Revolution')
    .controller('RevolutionController', function ($scope) {



            var slideIndex = 0;

            var showSlides = function () {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) {
                    slideIndex = 1
                }

                slides[slideIndex - 1].style.display = "block";
                setTimeout(showSlides, 3000); //Change image every 3 seconds

            }
            showSlides();



        window.onload = function () {

//Set the date to count down to
            var countDownDate = new Date("May 29, 2018 11:00:00").getTime();

            //Count down updates every 1 second
            var x = setInterval(function () {

                //Get today's date and time
                var now = new Date().getTime();

                //Find the distance between the count down date and now
                var dist = countDownDate - now;

                //Time calculation for days, hours, minutes and seconds
                var days = Math.floor(dist / (1000 * 60 * 60 * 24));
                var hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((dist % (1000 * 60)) / 1000);

                //Display the result in the element with id="timer"
                document.getElementById("timer").innerHTML = days + "day(s) " + hours + "hr(s) " + minutes + "min(s) " + seconds + "sec(s) ";

                // If the count down is finished, write some text
                if (dist < 0) {
                    clearInterval(x);
                    document.getElementById("timer").innerHTML = "Hope you enjoy the show";
                }

            }, 1000);

            //showSlides();
        }

    });