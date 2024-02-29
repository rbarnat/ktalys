/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });

    // Loading Pop up 
    $(function(){
      var overlay = $('<div id="overlay"></div>');
      overlay.show();
      overlay.appendTo(document.body);
      $('.popup-onload').show();
      $('.popup-close').click(function(){
      $('.popup-onload').hide();
      overlay.appendTo(document.body).remove();
      return false;
      });

      $('.x').click(function(){
      $('.popup').hide();
      overlay.appendTo(document.body).remove();
      return false;
      });
      });

      // Loading Header and Footer
      $(function(){
        $("#header-light").load("header-light.html"); 
        $("#footer").load("footer.html"); 
      });
  
  })(jQuery); // End of use strict

$(document).ready(function(){
  data = 
    {
      "@context": "http://schema.org/",
      "@graph":
      [
          {
              "@type" : "Organization",
              "name": "K-Talys",
              "legalName" : "K-Talys By Rémi BARNAT Entrepreneur individuel (EI)",
              "url" : "https://www.ktalys.re/index.html",
              "logo": "https://www.ktalys.re/assets/img/ktalys_banniere.png",
              "foundingDate": "2021",
              "founders":
              [
                  {
                  "@type": "Person",
                  "name": "Rémi BARNAT"
                  }
              ],
              "address":
              {
                  "@type": "PostalAddress",
                  "streetAddress": "11 rue ti coq",
                  "addressLocality": "Saint-Paul",
                  "addressRegion": "Réunion",
                  "postalCode": "97411",
                  "addressCountry": "Réunion"
              },
              "contactPoint" :
              [
                  {
                      "@type" : "ContactPoint",
                      "email": "rbarnat@gmail.com",
                      "contactType" : "customer service",
                      "contactOption" : "TollFree",
                      "areaServed" : "Réunion",
                      "availableLanguage" : ["English","French"]
                  }
              ]
          },
          {
              "@type": "BreadcrumbList",
              "itemListElement":
              [
                  {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "K-talys : création de site web à la Réunion (974)",
                      "item": "https://www.ktalys.re/index.html"
                  },
                  {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "K-talys : Crédits",
                      "item": "https://www.ktalys.re/credits.html"
                  },
                  {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "K-talys : Mentions légales",
                      "item": "https://www.ktalys.re/mentions.html"
                  }
              ]
          },
          {
              "@type": "Product",
              "url": "https://www.ktalys.re/index.html",
              "name": "Création de Site vitrine one page",
              "image": ["https://www.ktalys.re/assets/img/portfolio/developpement-site-web.jpg"],
              "description": "Création de Site vitrine one page",
              "offers": 
              [
                  {
                      "@type": "Offer",
                      "priceCurrency": "EUR",
                      "price": "1000",
                      "priceValidUntil": "2025-01-01",
                      "availability": "https://schema.org/InStock",
                      "seller":
                          {
                          "@type": "Organization",
                          "name": "K-Talys"
                          }
                  }
              ]
          },
          {
              "@type": "Product",
              "url": "https://www.ktalys.re/index.html",
              "name": "Création de Site vitrine avancé (multipage ou blog)",
              "image": ["https://www.ktalys.re/assets/img/portfolio/developpement-site-web.jpg"],
              "description": "Création de Site vitrine avancé (multipage ou blog)",
              "offers": 
              [
                  {
                      "@type": "Offer",
                      "priceCurrency": "EUR",
                      "price": "1500",
                      "priceValidUntil": "2025-01-01",
                      "availability": "https://schema.org/InStock",
                      "seller":
                          {
                          "@type": "Organization",
                          "name": "K-Talys"
                          }
                  }
              ]
          },
          {
              "@type": "Product",
              "url": "https://www.ktalys.re/index.html",
              "name": "Création de Plate-forme Web standard sur mesure",
              "image": ["https://www.ktalys.re/assets/img/portfolio/developpement-site-web.jpg"],
              "description": "Création de Plate-forme Web standard sur mesure",
              "offers": 
              [
                  {
                      "@type": "Offer",
                      "priceCurrency": "EUR",
                      "price": "2500",
                      "priceValidUntil": "2025-01-01",
                      "availability": "https://schema.org/InStock",
                      "seller":
                          {
                          "@type": "Organization",
                          "name": "K-Talys"
                          }
                  }
              ]
          },
          {
              "@type": "Product",
              "url": "https://www.ktalys.re/index.html",
              "name": "Création de Plate forme Web complexe sur mesure",
              "image": ["https://www.ktalys.re/assets/img/portfolio/developpement-site-web.jpg"],
              "description": "Création de Plate forme Web complexe sur mesure",
              "offers": 
              [
                  {
                      "@type": "Offer",
                      "priceCurrency": "EUR",
                      "price": "3500",
                      "priceValidUntil": "2025-01-01",
                      "availability": "https://schema.org/InStock",
                      "seller":
                          {
                          "@type": "Organization",
                          "name": "K-Talys"
                          }
                  }
              ]
          }
      ]
    };

    //creating the script element and storing the JSON-LD
    
    var script = document.createElement('script');
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(data);
    document.getElementsByTagName('head')[0].appendChild(script);
    
    //OR
    
    //storing the JSON-LD using ID
    $("#dynamicJSONLD").html(JSON.stringify(data));
    });
