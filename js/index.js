/* HTML Elements */
const socialMediaLinks = document.getElementById("social-media");
const avatar = document.getElementById("avatar");
const cardFooter = document.getElementById("card-footer");
const shareButton = document.getElementById("share-button");
let showMedia = false;

shareButton.onclick = () => {
  if (!showMedia) {
    socialMediaLinks.style.display = "initial";
    console.log(window.screen.width);
    if (window.screen.width < 1024) {
      avatar.style.display = "none";
    }
  } else {
    avatar.style.display = "inherit";
    socialMediaLinks.style.display = "none";
  }
  cardFooter.classList.toggle("active-share");

  shareButton.classList.toggle("active-share-button");
  showMedia = !showMedia;
};
