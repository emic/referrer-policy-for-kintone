(function() {
  'use strict';

  kintone.events.on(['app.record.index.show', 'app.record.detail.show', 'app.record.create.show', 'app.record.edit.show', 'app.record.print.show', 'app.report.show', 'portal.show', 'mobile.app.record.index.show', 'mobile.app.record.detail.show', 'mobile.app.record.create.show', 'mobile.app.record.edit.show', 'mobile.app.report.show', 'mobile.portal.show'], function(event) {
    var element = document.querySelector('meta[name="referrer"]');
    var elementList = document.querySelectorAll('a[href]');
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', 'referrer');
      element.setAttribute('content', 'same-origin');
      document.head.appendChild(element);
    }

    elementList.forEach(function(linkElement) {
      if ((linkElement.getAttribute('href').indexOf('http://') === 0 && linkElement.getAttribute('href').indexOf('http://' + location.hostname + '/') < 0) || (linkElement.getAttribute('href').indexOf('https://') === 0 && linkElement.getAttribute('href').indexOf('https://' + location.hostname + '/') < 0)) {
        if (linkElement.hasAttribute('rel')) {
          if (linkElement.getAttribute('rel').indexOf('noreferrer') < 0) {
            linkElement.setAttribute('rel', linkElement.getAttribute('rel') + ' noreferrer');
          }
        } else {
          linkElement.setAttribute('rel', 'noreferrer');
        }

        if (linkElement.hasAttribute('target') && linkElement.getAttribute('target') === '_blank') {
          if (linkElement.getAttribute('rel')) {
            if (linkElement.getAttribute('rel').indexOf('noopener') < 0) {
              linkElement.setAttribute('rel', linkElement.getAttribute('rel') + ' noopener');
            }
          } else {
            linkElement.setAttribute('rel', 'noopener');
          }
        }
      }
    });

    return event;
  });
})();