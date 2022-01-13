const userSocialMedia = {
  github: 'SebastianP4T0',
  youtube: 'UCq4OSUJoYM9Oe0O2Pj8Fh6w',
  facebook: 'sebastian.santosnoll',
  instagram: 'sebastian_nolls',
  twitter: 'sebastiannolls'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${userSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userProfile.href = data.html_url
      userProfilePic.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGithubProfileInfos()
