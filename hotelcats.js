$(document).ready(function(){
    $('.slideshow-container').slick({
        dots:true,
        arrows: true,
        prevArrow:"<span class='priv_arrow'><img class='a-left control-c prev slick-prev' src='/images/previous.png'></span>",
        nextArrow:"<span class='next_arrow'><img class='a-right control-c next slick-next' src='/images/next.png'></span>",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows:false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
        
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    }
    )
    
}
)

$(document).ready(function(){
    $('.slide-show-review').slick({
    arrows: true,
    centerMode: false,
    prevArrow:"<span class='priv_arrow'><img class='a-left control-c prev slick-prev' src='/images/previous.png'></span>",
    nextArrow:"<span class='next_arrow'><img class='a-right control-c next slick-next' src='/images/next.png'></span>",
      dots:true,
      infinite: true,
      slidesToShow: 2,
  slidesToScroll: 3,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: false

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
  
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    }
    )
    
}
)
