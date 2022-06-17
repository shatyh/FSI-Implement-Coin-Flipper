// TODO: Declare any global variables we need
let headCount = 0
let tailCount = 0



    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById ("flip").addEventListener("click", function() {
        console.log("click flip");
     })

    document.getElementById ("clear").addEventListener("click",function() {
        console.log("reset flip");
    })

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        const flipResult = Math.random();

        let heads = false;
        if (flipResult < 0.5) {
            heads = true
        }

    

        // TODO: Update image and status message in the DOM
        if (heads) {
            document.querySelector("#penny_img").src =
             "assets/images/penny-heads.jpg";
            document.querySelector(".message-container").innerText = "Heads!";
            headCount++;
            document.querySelector("#heads").innerText = headCount;
        } else {
            document.querySelector("#penny_img").src = 
             "assets/images/penny-tails.jpg";
            document.querySelector(".message-container").innerText = "Tails!";
            tailCount++;
            document.querySelector("#tails").innerText = tailCount;
        }



        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        let total = headCount + tailCount;
        let percentHead = Math.round((headCount / total) * 100);
        let percentTail = Math.round((tailCount / total) * 100);

        document.querySelector("#heads-percent").innerText = `${percentHead}%`;
        document.querySelector("#tails-percent").innerText = `${percentTail}%`;

    



        headCount = 0
        tailCount = 0
        document.querySelector("#status_message").innerText = "New Game!"; 
        document.querySelector("#tails").innerText = 0;
        document.querySelector("#heads").innerText = 0;
        document.querySelector("#heads-percent").innerText = `0%`;
        document.querySelector("#tails-percent").innerText = `0%`;

    
   
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

