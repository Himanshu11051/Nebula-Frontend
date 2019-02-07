/* 
* Nebula Bot JS Plugin
* Version: 1.0
* Author: Nebula Team
*/
var ifrm = document.createElement('iframe');
  ifrm.setAttribute('id', 'nebulaBotIframe'); // assign an id
  ifrm.setAttribute('height', '450');
  ifrm.setAttribute('style', 'position:fixed;z-index:9999;background:#fff;bottom:0;right:0');
  // to place at end of document
  document.body.appendChild(ifrm);
  // to place before another page element
  ifrm.setAttribute('src',
    'https://webchat.botframework.com/embed/Nebula-Test?s=MHhwlets2xM.cwA.43Q.xc4gnPliO-cnLjxYKIcLUzHlLkrrqiLwMGLH-Kcbmtg'
  );