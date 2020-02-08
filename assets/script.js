// (function(e,t,n,i,s,a,c){e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)}
// ;a=t.createElement(i);c=t.getElementsByTagName(i)[0];a.async=true;a.src=s
// ;c.parentNode.insertBefore(a,c)
// })(window,document,"galite","script","//cdn.jsdelivr.net/npm/ga-lite@2/dist/ga-lite.min.js");
// galite('create', 'UA-109180894-1', 'auto');
// galite('send', 'pageview');

if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('/sw.js');
	});
}

function gotoEmail()
{
	window.scroll({ behavior: 'smooth', top: $('#section-email')[0].offsetTop});
}