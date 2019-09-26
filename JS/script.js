let profileImageTag = document.getElementById('profile-image');
let profileEmailTag = document.getElementById('profile-email');

function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log('Full Name: ' + profile.getName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);

	profileEmailTag.textContent = profile.getEmail();
	profileImageTag.src = profile.getImageUrl();
      }

let signOutButtons = document.getElementsByClassName('sign-out-button');
addSignOutButtonsAction();

function addSignOutButtonsAction() {
	for (let i = 0; i < signOutButtons.length; i++)
		{
			signOutButtons[i].addEventListener
				('click', function() {
					var auth2 = gapi.auth2.getAuthInstance();
				        auth2.signOut().then(function () {
							 console.log('User signed out.');
							 profileImageTag.src = 'IMG/profile-empty-picture.png';
							 profileEmailTag.textContent = '';
  			       		 });
				});
		}
}