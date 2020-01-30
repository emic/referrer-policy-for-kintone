(function() {
  'use strict';
  kintone.events.on(['app.record.index.show', 'app.record.detail.show', 'app.record.create.show', 'app.record.edit.show', ' 	app.record.print.show', 'app.report.show', 'portal.show'], function(e) {
    var element = document.createElement('meta');
    element.setAttribute('name', 'referrer');
    element.setAttribute('content', 'same-origin');
    document.head.appendChild(element);
  });
})();