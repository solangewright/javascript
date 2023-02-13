//Information from Form
    //Username
    let profileName = document.getElementById("name").innerText;
    //Profile Picture
    let imageSrc = document.getElementById("profilePic").src;
    //Email
    let email = document.getElementById("inputEmail").innerText;
    //Bio
    let bio = document.getElementById("bio").innerText;

    //Submit button
    const body = document.getElementById("profilePage");

//HTML locations on profile.html
const userNameLocation = document.getElementById("username-goes-here");
const emailLocation = document.getElementById("email-goes-here");
const imageLocation = document.getElementById("image-goes-here");
const bioLocation = document.getElementById("bio-goes-here");

const submission = () => {
    userNameLocation.innerText = profileName;
    imageLocation.src = imageSrc;
    emailLocation.innerText = email;
    bioLocation.innerText = bio;
}

body.addEventListener('load', submission());
