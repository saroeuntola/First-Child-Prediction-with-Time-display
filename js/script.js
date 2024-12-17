
     function updateDateTime() {
        const currentDate = new Date();
        const options = { weekday: "long", month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
        const formattedDateTime = currentDate.toLocaleDateString("en-US", options);

        document.getElementById("dateTimeDisplay").textContent = `${formattedDateTime}`;
      }
 setInterval(updateDateTime, 1000);
      updateDateTime();
      function checkNameLengths(event) {
        event.preventDefault();

        const maleName = document.getElementById("maleInput").value.trim();
        const femaleName = document.getElementById("femaleInput").value.trim();
        const femaleImage = document.getElementById("femaleImage");
        const maleImage = document.getElementById("maleImage");
        const nameDisplay = document.getElementById("nameDisplay");
        const totalLength = maleName.length + femaleName.length;

        if (totalLength % 2 === 0) {
          femaleImage.style.display = "block";
          maleImage.style.display = "none";
          nameDisplay.textContent = "Your son is Girl";
        } else {
          maleImage.style.display = "block";
          femaleImage.style.display = "none";
          nameDisplay.textContent = "Your son is Boy";
        }
      }
