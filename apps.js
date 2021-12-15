function gilmoreGirls() {
        let name = prompt("What's your name?");
        let h1 = document.querySelector("h1");

        name = name.trim();

        if (name === "") {
          alert("Please, write your name.");
        } else {
          let zodiac = prompt("What is your zodiac sign?");
          let h2 = document.querySelector("h2");
          zodiac = zodiac.toLowerCase();
          zodiac = zodiac.trim();

          if (zodiac === "sagittarius") {
            h1.innerHTML = name + ", you are Jess! <br/> ";
            h2.innerHTML =
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/673/original/5.png?1629575186" alt="jess" style="float:right;width: 49%"/>` +
              "   " +
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/674/original/6.png?1629575302" alt="sagittarius" style="width: 49%"/>`;
          } else if (zodiac === "leo") {
            h1.innerHTML = name + ", you are Logan! <br/> ";
            h2.innerHTML =
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/675/original/3.png?1629580249" alt="logan" style="float:right;width: 49%" />` +
              "   " +
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/676/original/4.png?1629580289" alt="leo" style="width: 49%" />`;
          } else if (zodiac === "aries") {
            h1.innerHTML = name + ", you are Lorelai  <br/> ";
            h2.innerHTML =
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/677/original/9.png?1629580338" alt="lorelai" style="float:right;width: 49%" />` +
              "   " +
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/678/original/10.png?1629580418" alt="aries" style="width: 49%" />`;
          } else if (zodiac === "capricorn") {
            h1.innerHTML = name + ", you are Paris!";
            h2.innerHTML =
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/679/original/7.png?1629580678" alt="Paris" style="float:right;width: 49%" />` +
              "   " +
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/680/original/8.png?1629580728" alt="alt="capricorn" style="width: 49%"/>`;
          } else if (zodiac === "virgo") {
            h1.innerHTML = name + ", you are Emily Gilmore!  <br/>  ";
            h2.innerHTML =
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/681/original/13.png?1629580803" alt="emily" style="float:right;width: 49%" />` +
              "   " +
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/682/original/14.png?1629580834" alt="alt="virgo" " style="width: 49%"/>`;
          } else if (zodiac === "taurus") {
            h1.innerHTML = name + ", you are Dean!";
            h2.innerHTML =
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/683/original/11.png?1629580910" alt="dean" style="float:right;width: 49%" />` +
              "   " +
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/684/original/12.png?1629580948" alt="alt="taurus" " style="width: 49%"/>`;
          } else if (zodiac === "scorpio") {
            h1.innerHTML = name + ", you are Luke!";
            h2.innerHTML =
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/685/original/17.png?1629580986" alt="luke" style="float:right;width: 49%" />` +
              "   " +
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/686/original/18.png?1629581013" alt="alt="scorpio" " style="width: 49%"/>`;
          } else if (zodiac === "libra") {
            h1.innerHTML = name + " , you are Rory! <br/> ";
            h2.innerHTML =
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/687/original/15.png?1629581054" alt="rory" style="float:right;width: 49%"/>` +
              "   " +
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/688/original/16.png?1629581094" alt="libra" style="width: 49%"/>`;
          } else if (zodiac === "cancer") {
            h1.innerHTML = name + " , you are Sookie!  <br/>";
            h2.innerHTML =
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/689/original/21.png?1629581132" alt="sookie" style="float:right;width: 49%"/>` +
              "   " +
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/690/original/22.png?1629581169" alt="alt="cancer" style="width: 49%"/>`;
          } else if (zodiac === "pisces") {
            h1.innerHTML = name + " , you are Ms. Patty!  <br/> ";
            h2.innerHTML =
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/691/original/19.png?1629581312" alt="patty" style="float:right;width: 49%"/>` +
              "   " +
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/692/original/20.png?1629581337" alt="pisces" style="width: 49%"/>`;
          } else if (zodiac === "aquarius") {
            h1.innerHTML = name + "<br/> You are Lane. <br/> ";
            h2.innerHTML =
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/693/original/25.png?1629581381" alt="lane" style="float:right;width: 49%"/>` +
              "   " +
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/694/original/26.png?1629581434" alt="alt="aquarius" style="width: 49%"/>`;
          } else if (zodiac === "gemini") {
            h1.innerHTML = name + ", you are Kirk! <br/> ";
            h2.innerHTML =
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/695/original/23.png?1629581490" alt="kirt" style="float:right;width: 49%"/>` +
              "   " +
              `<img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/015/697/original/24.png?1629581673" alt="alt="gemini" style="width: 49%"//>`;
          } else {
            alert("Sorry, didn't quite catch that. Please type that again.");
          }
        }
      }

      let gilmoregirlsButton = document.querySelector("button");
      gilmoregirlsButton.addEventListener("click", gilmoreGirls);