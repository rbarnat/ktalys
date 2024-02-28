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
