sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

                var oModel = new sap.ui.model.json.JSONModel();
              oModel.loadData("/model/product.json");
              this.getView().setModel(oModel, "DataModel");


            }
        });
    });
