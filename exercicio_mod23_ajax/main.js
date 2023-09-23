document.addEventListener('DOMContentLoaded', function() {
    const profileAvatar = document.querySelector('.profile-avatar');
    const profileName = document.querySelector('.profile-name');
    const profileUserName = document.querySelector('.profile-username');
    const reposElement = document.querySelector('.repository');
    const followersElement = document.querySelector('.followers');
    const followingElement = document.querySelector('.following');
    const linkElement = document.querySelector('.profile-link');
    const urlAPI = 'https://api.github.com/users/KilsonJogli';
    

    fetch(urlAPI)
    .then(function(res) {
        console.log(res)
        return res.json();
    })
    .then(function(json) {
        profileAvatar.src = json.avatar_url;
        profileName.innerText = json.name;
        profileUserName.innerText = json.login;
        reposElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
    })
})