"use strict";

sap.ui.define(["sap/ui/core/Control", "sap/ui/core/RenderManager"], function (Control, RenderManager) {
  /**
   * @namespace org.openui5.bestofui5.control.CustomControlXMLRenderer
   */
  const CustomControlXMLRenderer = Control.extend("org.openui5.bestofui5.control.CustomControlXMLRenderer.CustomControlXMLRenderer", {
    renderer: {
      apiVersion: 2,
      render: function (rm, control) {
        // return immediately if control is invisible, do not render any HTML
        if (!CustomControlXMLRenderer.getVisible()) {
          return;
        } // start opening tag


        RenderManager.write("<div"); // write control data

        RenderManager.writeControlData(CustomControlXMLRenderer); // write classes

        RenderManager.writeClasses(); // write styles

        RenderManager.addStyle("width", CustomControlXMLRenderer.getWidth());
        RenderManager.addStyle("height", CustomControlXMLRenderer.getHeight());
        RenderManager.writeStyles(); // end opening tag

        RenderManager.write(">"); // render fragment controls (@see sap.ui.fragment.FragmentControl.metadata.properties._aFragmentControls)

        if (Array.isArray(CustomControlXMLRenderer._aFragmentControls)) {
          CustomControlXMLRenderer._aFragmentControls.forEach(function (oFragmentControl) {
            RenderManager.renderControl(oFragmentControl);
          });
        } // write closing tag


        RenderManager.write("</div>");
      }
    },
    constructor: function _constructor(id, settings) {
      Control.prototype.constructor.call(this, id, settings);
    }
  });
  return CustomControlXMLRenderer;
});
//# sourceMappingURL=CustomControlXMLRenderer.js.map