(function() {
  'use strict';
  kintone.events.on(['app.record.index.show', 'app.record.detail.show', 'app.record.create.show', 'app.record.edit.show', 'app.record.print.show', 'app.report.show', 'portal.show', 'mobile.app.record.index.show', 'mobile.app.record.detail.show', 'mobile.app.record.create.show', 'mobile.app.record.edit.show', 'mobile.app.report.show', 'portal.show'], function(e) {
    var element = document.createElement('meta');
    element.setAttribute('name', 'referrer');
    element.setAttribute('content', 'same-origin');
    document.head.appendChild(element);
  });
})();