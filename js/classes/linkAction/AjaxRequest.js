/**
 * @file js/classes/linkAction/AjaxRequest.js
 *
 * Copyright (c) 2000-2011 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @class AjaxRequest
 * @ingroup js_classes_linkAction
 *
 * @brief AJAX link action request.
 */
(function($) {


	/**
	 * @constructor
	 *
	 * @extends $.pkp.classes.linkAction.LinkActionRequest
	 *
	 * @param {jQuery} $linkActionElement The element the link
	 *  action was attached to.
	 * @param {Object} options Configuration of the link action
	 *  request.
	 */
	$.pkp.classes.linkAction.AjaxRequest =
			function($linkActionElement, options) {

		this.parent($linkActionElement, options);
	};
	$.pkp.classes.Helper.inherits(
			$.pkp.classes.linkAction.AjaxRequest,
			$.pkp.classes.linkAction.LinkActionRequest);


	//
	// Public methods
	//
	/**
	 * @inheritDoc
	 */
	$.pkp.classes.linkAction.AjaxRequest.prototype.activate =
			function(element, event) {

		// FIXME: Replace the reference to the ajaxAction() function
		// with an object/event oriented implementation in this class,
		// see #6339.
		var options = this.getOptions();
		ajaxAction(options.type, '#' + options.actOn,
				'#' + this.getLinkActionElement().attr('id'), options.url);
		return this.parent('activate', element, event);
	};


	/**
	 * @inheritDoc
	 */
	$.pkp.classes.linkAction.AjaxRequest.prototype.finish =
			function(element, event) {

		// FIXME: Move the response handling of the AJAX request here,
		// see #6339.
		return this.parent('finish', element, event);
	};


/** @param {jQuery} $ jQuery closure. */
})(jQuery);
