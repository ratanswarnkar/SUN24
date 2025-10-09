
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 300) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)



  
  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})();



// Counter Start
var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text('+')
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});


jQuery( document ).ready(function() {
  // Get the elements by their IDs
    var removefeature1 = document.getElementById('Feature_1');
    var removefeature2 = document.getElementById('Feature_2');
    var removefeature3 = document.getElementById('Feature_3');
    var removefeature4 = document.getElementById('Feature_4');



    var flushCollapseOne = document.getElementById('flush-collapse1');
    var featureOne = document.getElementById('Feature_1');

    // Add click event listeners
    flushCollapseOne.addEventListener('click', function() {
        // Toggle move-left class for Feature_1
        featureOne.classList.toggle('move-point');

        // Check if flush-collapseOne is expanded
        if (flushCollapseOne.classList.contains('show')) {
            // Add expanded class to Feature_1
            featureOne.classList.add('expanded');
        } else {
            // Remove expanded class from Feature_1
            featureOne.classList.remove('expanded');
        }
    });

    featureOne.addEventListener('click', function() {
        // Toggle the collapse state of flush-collapseOne
        var collapse = new bootstrap.Collapse(flushCollapseOne);
        collapse.toggle();
        featureOne.classList.toggle('space');

        removefeature2.classList.remove('space');
        removefeature3.classList.remove('space');
        removefeature4.classList.remove('space');
    });

    // button one js close
    var flushCollapseTwo = document.getElementById('flush-collapse2');
    var featureTwo = document.getElementById('Feature_2');

    var flushCollapseThree = document.getElementById('flush-collapse3');
    var featureThree = document.getElementById('Feature_3');
    // Add click event listeners
    flushCollapseTwo.addEventListener('click', function() {
        // Toggle move-left class for Feature_1
        
        featureTwo.classList.toggle('move-point');

        // Check if flush-collapseTwo is expanded
        if (flushCollapseTwo.classList.contains('show')) {
            // Add expanded class to Feature_1
            featureTwo.classList.add('expanded');
        } else {
            // Remove expanded class from Feature_1
            featureTwo.classList.remove('expanded');
        }
    });

    featureTwo.addEventListener('click', function() {
      // alert('test');
        // Toggle the collapse state of flush-collapseTwo
        var collapse = new bootstrap.Collapse(flushCollapseTwo);
        collapse.toggle();
        featureTwo.classList.toggle('space');

        removefeature1.classList.remove('space');
        removefeature3.classList.remove('space');
        removefeature4.classList.remove('space');
    });

    // button two js close


    // Add click event listeners
    flushCollapseThree.addEventListener('click', function() {
        // Toggle move-left class for Feature_1
        featureThree.classList.toggle('move-point');

        // Check if flush-collapseThree is expanded
        if (flushCollapseThree.classList.contains('show')) {
            // Add expanded class to Feature_1
            featureThree.classList.add('expanded');
        } else {
            // Remove expanded class from Feature_1
            featureThree.classList.remove('expanded');
        }
    });

    featureThree.addEventListener('click', function() {
        // Toggle the collapse state of flush-collapseThree
        var collapse = new bootstrap.Collapse(flushCollapseThree);
        collapse.toggle();
        featureThree.classList.toggle('space');

        removefeature4.classList.remove('space');
        removefeature1.classList.remove('space');
        removefeature2.classList.remove('space');
    });

    // button three js close
    var flushCollapseFour = document.getElementById('flush-collapse4');
    var featureFour = document.getElementById('Feature_4');

    // Add click event listeners
    flushCollapseFour.addEventListener('click', function() {
        // Toggle move-left class for Feature_1
        featureFour.classList.toggle('move-point');

        // Check if flush-collapseFour is expanded
        if (flushCollapseFour.classList.contains('show')) {
            // Add expanded class to Feature_1
            featureFour.classList.add('expanded');
        } else {
            // Remove expanded class from Feature_1
            featureFour.classList.remove('expanded');
        }
    });

    featureFour.addEventListener('click', function() {
        // Toggle the collapse state of flush-collapseFour
        var collapse = new bootstrap.Collapse(flushCollapseFour);
        collapse.toggle();
        featureFour.classList.toggle('space');

        removefeature3.classList.remove('space');
        removefeature1.classList.remove('space');
        removefeature2.classList.remove('space');
    });


    // class space add
    var flushCollapseOneAddspace = document.getElementById('flush-heading1');
    var flushCollapseTwoAddspace = document.getElementById('flush-heading2');
    var flushCollapseThreeAddspace = document.getElementById('flush-heading3');
    var flushCollapseFourAddspace = document.getElementById('flush-heading4');

    flushCollapseOneAddspace.addEventListener('click', function() {
      featureOne.classList.toggle('space');

        removefeature2.classList.remove('space');
        removefeature3.classList.remove('space');
        removefeature4.classList.remove('space');
    });

    flushCollapseTwoAddspace.addEventListener('click', function() {
      featureTwo.classList.toggle('space');
      
        removefeature1.classList.remove('space');
        removefeature3.classList.remove('space');
        removefeature4.classList.remove('space');
    });

    flushCollapseThreeAddspace.addEventListener('click', function() {
      featureThree.classList.toggle('space');

        removefeature4.classList.remove('space');
        removefeature1.classList.remove('space');
        removefeature2.classList.remove('space');
    });

    flushCollapseFourAddspace.addEventListener('click', function() {
      featureFour.classList.toggle('space');

        removefeature3.classList.remove('space');
        removefeature1.classList.remove('space');
        removefeature2.classList.remove('space');
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    item.addEventListener('show.bs.collapse', function () {
      item.classList.add('open-acodian');
    });

    item.addEventListener('hide.bs.collapse', function () {
      item.classList.remove('open-acodian');
    });
  });
});