"use strict";

sap.ui.define(["sap/ui/core/Control", "./CustomControlXMLRenderer"], function (Control, __CustomControlXMLRenderer) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }

  const CustomControlXMLRenderer = _interopRequireDefault(__CustomControlXMLRenderer);
  /**
   * @namespace org.openui5.bestofui5.control
   */


  const CustomControlXML = Control.extend("org.openui5.bestofui5.control.CustomControlXML", {
    metadata: {
      properties: {
        properties: {
          /**
           * Renderer
           */
          renderer: {
            type: "org.openui5.bestofui5.control.CustomControlXMLRenderer",
            defaultValue: CustomControlXMLRenderer
          },

          /**
           * Width
           */
          width: {
            type: "sap.ui.core.CSSSize",
            defaultValue: "100%"
          },

          /**
           * Height
           */
          height: {
            type: "sap.ui.core.CSSSize",
            defaultValue: "auto"
          }
        }
      }
    },
    constructor: function _constructor(id, settings) {
      Control.prototype.constructor.call(this, id, settings);

      this.init = function () {
        // load fragment controls
        this._aFragmentControls = this._loadFragmentControls(); // connect models / enable data binding for fragment controls

        this._aFragmentControls.forEach(function (oFragmentControl) {
          this.addDependent(oFragmentControl);
        }, this);
      };

      this._loadFragmentControls = function () {
        let vFragment = null;
        const sFragmentContent = this.getFragmentContent();

        if (sFragmentContent) {
          // load fragment content
          const oFragmentConfig = {
            sId: this.getId(),
            fragmentContent: sFragmentContent
          };
          vFragment = sap.ui.xmlfragment(oFragmentConfig, this);
        } else {
          // load fragment by name
          vFragment = sap.ui.xmlfragment(this.getId(), this.getFragmentName(), this);
        } // ensure array


        const aFragmentControls = Array.isArray(vFragment) ? vFragment : [vFragment];
        return aFragmentControls;
      };

      this.getFragmentName = function () {
        // default: fragment for control, e.g. some/namespace/MyControl.js -> some/namespace/MyControl.fragment.xml
        return this.getMetadata().getName();
      };

      this.getFragmentContent = function () {
        // default: undefined
        return;
      };
    }
  });
  return CustomControlXML;
});
//# sourceMappingURL=CustomControlXML.js.map