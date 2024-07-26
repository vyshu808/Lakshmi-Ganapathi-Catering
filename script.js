// This code is meant to be inserted into an HTML file using a <script> tag.

// Function to handle clicks on social media icons
function handleSocialClick(event) {
  event.preventDefault();
  const socialItem = event.target.closest('a');
  const platformName = socialItem.dataset.platformName;
  const platformId = socialItem.dataset.id;
  const baseUrl = socialItem.dataset.baseUrl;
  const customUrl = socialItem.dataset.url;
  
  // Redirect to the appropriate social media page
  if (platformName === 'Instagram') {
    window.location.href = customUrl || `${baseUrl}/${platformId}`;
  } else if (platformName === 'Email') {
    // You'll likely need to open a mailto link for Email
    window.location.href = 'mailto:lakshmiganapathi0708@gmail.com';
  }
}

// Add event listeners to social media icons
const socialItems = document.querySelectorAll('a[data-is-pmw-social-item]');
socialItems.forEach(socialItem => {
  socialItem.addEventListener('click', handleSocialClick);
});



