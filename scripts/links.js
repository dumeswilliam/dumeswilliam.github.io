var oLinks = {
    157: 'https://www.google.com/',
    79: 'https://myaccount.google.com/',
    27: 'https://calendar.google.com/',
    45: 'https://developers.google.com/',
    48: 'https://drive.google.com/drive/',
    144: 'https://translate.google.com/',
    59: 'https://mail.google.com/',
    160: 'https://www.youtube.com/',
    109: 'https://news.google.com/',
    54: 'https://www.google.com/finance/',
    129: 'https://shopping.google.com/',
    155: 'https://pay.google.com/',
    126: 'https://script.google.com/',
    125: 'https://scholar.google.com/',
    10: 'https://www.google.com/alerts/',
    101: 'https://maps.google.com.br/',
    89: 'https://photos.google.com/',
    179: 'https://www.google.com/android/find/',
};

document.querySelectorAll('div[role="link"]').forEach(oItem => {
    var iId = oItem.getAttribute('data-shortcut-id');
    if (oLinks[iId]) {
        oItem.addEventListener('click', () => window.open(oLinks[iId], '_blank'));
    }
});
