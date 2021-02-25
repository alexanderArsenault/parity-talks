/**
 * @author Author Name a.name@insign.ch;
 */
var App = App || {};

/**
 * Namespace which groups all global Options for the Application
 */
App = (function() {

    return {
        setup: function() {

            // In general: Links that point to # should be ignored
            $("a[href='#']").click(function(e) { e.preventDefault(); });

            App.navigation();
            App.parallax();
            App.datePicker();


        },

        navigation: function() {
            //console.log('Something else');
            $('[data-toggle="offcanvas"]').on('click', function() {
                $('.offcanvas-collapse').toggleClass('open');
                $('.hamburger').toggleClass('is-active');
            });

            var win = this, // Gets window object
                last = 0, // The last read top value
                delay = 150, // The delay for the setInterval
                threshold = 30; // The max scroll distance before showing/hiding the nav

            // I always set a variable to my setIntervals in case I want to stop them later on
            var navMovement = setInterval(function() {
                var $nav = $('.navbar.fixed-top'), // Gets nav object
                    $window = $(window); // Makes the window object a jQuery object
                if ($window.scrollTop() - last < -threshold) { // Happens if the difference in scroll is below the negative threshold
                    $nav.removeClass('scrolled');
                } else if ($window.scrollTop() - last > threshold) { // Happend if the difference in scroll is above the threshold
                    $nav.addClass('scrolled');
                }
                last = $window.scrollTop(); // Updates the previous scroll value
            }, delay); // Runs every `delay` amount


        },

        parallax: function() {
            var images = document.getElementsByClassName('js-parallax');
            if (images.length) {
                new simpleParallax(images);
            }
            /*
            mediumZoom('[data-zoomable]', {
                background: 'rgba(255,255,255,0.8)'
            });*/
        },

        datePicker: function() {

            moment.updateLocale('en', {
            week: {
                dow : 1, // Monday is the first day of the week.
            }
            });


            $('.js-datepicker').datepicker({
                format: 'MM-DD-YYYY'
            });

             //Get the value of Start and End of Week
            $('.js-datepicker').on('dp.change', function (e) {
                var firstDate = moment(value, "MM-DD-YYYY").day(1).format("MM-DD-YYYY");
                var lastDate =  moment(value, "MM-DD-YYYY").day(7).format("MM-DD-YYYY");
                $(".js-date-range").text(firstDate + " - " + lastDate);
            });



        },

    };
}());