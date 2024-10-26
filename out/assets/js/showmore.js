// JavaScript function to show more experience items
function showMore() {
    var moreExperience = document.getElementById("more-experience");
    var button = document.getElementById("show-more");
    
    // Check the current display state
    if (moreExperience.style.display === "none" || moreExperience.style.display === "") {
        moreExperience.style.display = "block"; // Show more items
        button.querySelector('.lnk').innerText = "Show Less"; // Change button text
    } else {
        moreExperience.style.display = "none"; // Hide items
        button.querySelector('.lnk').innerText = "Show More"; // Reset button text
    }
}