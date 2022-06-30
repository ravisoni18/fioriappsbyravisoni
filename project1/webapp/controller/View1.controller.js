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

                var oModel = new sap.ui.model.json.JSONModel("./model/product.json");
            //   oModel.loadData("/model/product.json");
              this.getView().setModel(oModel, "DataModel");

            //   var oDefaultModel = new sap.ui.model.json.JSONModel();
            //   oDefaultModel.loadData("/model/SampleData.json");
              var oModel = new sap.ui.model.json.JSONModel("./model/SampleData.json");
              this.getView().setModel(oModel);
            //   this.getView().setModel(oDefaultModel);



            }
        });
    });
