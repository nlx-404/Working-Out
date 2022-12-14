const to_Top = () => window.scrollTo({ top: 0, behavior: "smooth" });

const brandLink = document.querySelector("li#Brand");

// check if the brand link exists on the page
if (brandLink) {
  // add a click event listener to the brand link
  brandLink.addEventListener("click", () => {
    // bookmark the page using the window.external.AddFavorite function
    window.external.AddFavorite(window.location.href, document.title);
  });
}

//bounce when hovering over it
const brandListItem = document.getElementById("Brand");

const bounce = () => {
  brandListItem.style.animation = "bounce 0.5s linear";
};

brandListItem.addEventListener("mouseenter", bounce);

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();
