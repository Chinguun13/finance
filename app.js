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
        type: document.querySelector(DOMstrings.inputType).value, //exp, inc
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDOMstrings: function () {
      return DOMstrings;
    },

    addListItem: function (item, type) {
      // Orlogo zarlagiin elementiin aguulsan html-iig beltgene.
      var html, list;
      if (type === "inc") {
        list = ".income__list";
        html = `<div class="item clearfix" id="income-%id%">
                  <div class="item__description">$$desc$$</div>
                  <div class="right clearfix">
                    <div class="item__value">$val$</div>
                    <div class="item__delete">
                      <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                  </div>
                </div>`;
      } else {
        list = ".expenses__list";
        html = `<div class="item clearfix" id="expense-%id%">
                  <div class="item__description">$$desc$$</div>
                  <div class="right clearfix">
                    <div class="item__value">$val$</div>
                    <div class="item__percentage">21%</div>
                    <div class="item__delete">
                      <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                  </div>
                </div>`;
      }

      // Ter HTML dotroo orlogo zarlaga utguudiig Replace ashilan oorchilj ogno.
      html = html.replace("%id%", item.id);
      html = html.replace("$$desc$$", item.description);
      html = html.replace("$val$", item.value);

      // Beltgesen HTML ee DOM ruu hiij ogno.
      document.querySelector(list).insertAdjacentHTML("beforeend", html);
    },
  };
})();

// Sanhuutei ajillah control
var financeController = (function () {
  // private data
  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // private data
  var Expence = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // private data
  var data = {
    items: {
      inc: [],
      exp: [],
    },

    totals: {
      inc: 0,
      exp: 0,
    },
  };

  return {
    addItem: function (type, desc, val) {
      var item, id;

      /* identification */
      if (data.items[type].length === 0) id = 1;
      else {
        id = data.items[type][data.items[type].length - 1].id + 1;
      }

      if (type === "inc") {
        item = new Income(id, desc, val);
      } else {
        /* type === 'exp' */
        item = new Expence(id, desc, val);
      }

      data.items[type].push(item);

      return item;
    },

    seeData: function () {
      return data;
    },
  };
})();

// Programm holbogch control
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. Oruulah ogogdliig delgetsees olj avna
    var input = uiController.getInput();

    // 2. Olj avsan ogogluudee sanhuugiin controlld damjuulj tend haragdana.
    var item = financeController.addItem(
      input.type,
      input.description,
      input.value
    );

    // 3. Olj avsan ogogdluudee web deeree tohiroh heseg deer haruulna
    uiController.addListItem(item, input.type);
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
