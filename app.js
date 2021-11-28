// Delgetstei ajillah controll
var uiController = (function () {
  // var x = 100;
  // function add(y) {
  //   return x + y;
  // }
  // return {
  //   publicAdd: function (a) {
  //     a = add(a);
  //     //   console.log("huleen avsan utga : " + a);
  //     console.log("Bolovsruulsan utga : " + a);
  //   },
  // };

  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();

// Sanhuutei ajillah control
var financeController = (function () {
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Expence = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      inc: [],
      exp: [],
    },

    totals: {
      inc: 0,
      exp: 0,
    },
  };
})();

// Programm holbogch control
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. Oruulah ogogdliig delgetsees olj avna
    console.log(uiController.getInput());
    // 2. Olj avsan ogogluudee sanhuugiin controlld damjuulj tend haragdana.
    // 3. Olj avsan ogogdluudee web deeree tohiroh heseg deer haruulna
    // 4. Tusviig tootsoolno
    // 5. Etssiin uldegdel, tootsoog delgetsend gargana
  };

  var setupEventListeners = function () {
    var DOM = uiController.getDOMstrings();

    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  return {
    init: function () {
      console.log("Application started...");
      setupEventListeners();
    },
  };
})(uiController, financeController);

appController.init();

// var hunController = function () {
//   // data encapsulation

//   // private data
//   var bodol = "Javascript tolgoi erguulmeer yum...";
//   function tsusGuih() {}

//   //   private function
//   function huchilturugchiigAgaaraasSorjTsusruuOruulah() {}

//   return {
//     yarih: function () {
//       bodol = "Javascript bol goy";
//       huchilturugchiigAgaaraasSorjTsusruuOruulah();
//       tsusGuih();
//       console.log("hi");
//     },
//   };
// };
