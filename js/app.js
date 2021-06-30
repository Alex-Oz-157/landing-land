const app = {
  init:function() {
    /* Set up for burger Toggle button */
    let navToggle = document.querySelector('.nav-toggle');
    let nav = document.querySelector('.navbar');

    function doToggle (event) {
        event.preventDefault();
        navToggle.classList.toggle ('expanded');
        nav.classList.toggle ('expanded');
    }

    navToggle.addEventListener('click', doToggle);
    nav.addEventListener('click', doToggle);

    /* Set anchor in the project */
    /* Targeting all my 'button' */
    let homeMenu = document.getElementById('home');
    let logoMenu = document.getElementById('landingLogo');
    let laciniaMenu = document.getElementById('lacinia'); 
    let auctorMenu = document.getElementById('auctor'); 
    let suspendisseMenu = document.getElementById('suspendisse'); 
    let tinciduntMenu = document.getElementById('tincidunt'); 

    /* Targeting location point */
    let topTarget = document.getElementById('landing');
    let rhoncusTarget = document.getElementById('rhoncus');
    let vestibulumTarget = document.getElementById('vestibulum');
    let aliquamTarget = document.getElementById('aliquam');
    let dignissimTarget = document.getElementById('dignissim');
    let fusceTarget = document.getElementById('fusce');

    /* LINK button to target */
    homeMenu.addEventListener('click', function() {
      topTarget.scrollIntoView(
        {
          block: 'start',
          behavior: 'smooth',
          //inline: 'start',
        }
      );
    });

    logoMenu.addEventListener('click', function() {
      topTarget.scrollIntoView(
        {
          block: 'start',
          behavior: 'smooth',
          //inline: 'start',
        }
      );
    });

    homeMenu.addEventListener('click', function() {
      rhoncusTarget.scrollIntoView(
        {
          block: 'start',
          behavior: 'smooth',
          //inline: 'start',
        }
      );
    });

    laciniaMenu.addEventListener('click', function() {
      vestibulumTarget.scrollIntoView(
        {
          block: 'start',
          behavior: 'smooth',
          //inline: 'start',
        }
      );
    });

    auctorMenu.addEventListener('click', function() {
      aliquamTarget.scrollIntoView(
        {
          block: 'start',
          behavior: 'smooth',
          //inline: 'start',
        }
      );
    });

    suspendisseMenu.addEventListener('click', function() {
      dignissimTarget.scrollIntoView(
        {
          block: 'start',
          behavior: 'smooth',
          //inline: 'start',
        }
      );
    });

    tinciduntMenu.addEventListener('click', function() {
      fusceTarget.scrollIntoView(
        {
          block: 'start',
          behavior: 'smooth',
          //inline: 'start',
        }
      );
    });
  }
}
document.addEventListener('DOMContentLoaded', app.init);