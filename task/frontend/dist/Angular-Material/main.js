(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular-Material';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-order-pipe */ "./node_modules/ng2-order-pipe/dist/index.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_order_pipe__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/signin/signin.component */ "./src/app/user/signin/signin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./error404/error404.component */ "./src/app/error404/error404.component.ts");
/* harmony import */ var _error500_error500_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./error500/error500.component */ "./src/app/error500/error500.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _error404_error404_component__WEBPACK_IMPORTED_MODULE_17__["Error404Component"],
                _error500_error500_component__WEBPACK_IMPORTED_MODULE_18__["Error500Component"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_11__["UserModule"],
                ng2_order_pipe__WEBPACK_IMPORTED_MODULE_8__["Ng2OrderModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'sign-in', component: _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_12__["SigninComponent"], pathMatch: 'full' },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
                    { path: 'profile/:userId', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_19__["ProfileComponent"] },
                    { path: '500', component: _error500_error500_component__WEBPACK_IMPORTED_MODULE_18__["Error500Component"] },
                    { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
                    { path: '**', component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_17__["Error404Component"] }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"], _socket_service__WEBPACK_IMPORTED_MODULE_15__["SocketService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppService = /** @class */ (function () {
    // private url = 'http://localhost:3000';
    function AppService(http) {
        this.http = http;
        this.url = 'http://api.virtuasha.online';
        //get userinfo from localstoreage
        this.getUserInfoFromLocalstorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        //set userInfo in local storage
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
    }
    // get all countries
    AppService.prototype.getAllCountry = function () {
        var response = this.http.get("https://restcountries.eu/rest/v2/all");
        return response;
    };
    // get country form code
    AppService.prototype.getCountry = function (code) {
        var response = this.http.get("https://restcountries.eu/rest/v2/callingcode/" + code);
        return response;
    };
    //get all users
    AppService.prototype.getAllUsers = function () {
        var response = this.http.get(this.url + "/api/v1/users/view/all?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return response;
    };
    //get users details
    AppService.prototype.getUserInfo = function (id) {
        var response = this.http.get(this.url + "/api/v1/users/" + id + "/details?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return response;
    };
    //get info about users friends
    AppService.prototype.getUserFriends = function (friendsArray) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('friends', friendsArray)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/api/v1/users/findFriend", params);
    };
    //signup 
    AppService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobile', data.mobile)
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/signup", params);
    }; // end of signupFunction function.
    AppService.prototype.signinFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/api/v1/users/login", params);
    }; // end of signinFunction function.
    AppService.prototype.forgotPasswordFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('email', data.email);
        return this.http.post(this.url + "/api/v1/users/forgot-password", params);
    }; // end of forgotPasswordFunction function.
    // send invitation mail
    AppService.prototype.sendInvite = function (userId, email) {
        var response = this.http.post(this.url + "/api/v1/users/invitation?userId=" + userId + "&email=" + email, email);
        return response;
    };
    // Add invited friend to friends array
    AppService.prototype.addInviteFriend = function (userId, inviteId) {
        var response = this.http.post(this.url + "/api/v1/users/addInvitedFriend?userId=" + userId + "&inviteId=" + inviteId, inviteId);
        return response;
    };
    // remove friend to friends array
    AppService.prototype.unFriend = function (userId, friendId) {
        var response = this.http.post(this.url + "/api/v1/users/unFriend?userId=" + userId + "&friendId=" + friendId, friendId);
        return response;
    };
    // change password
    AppService.prototype.changePasswordFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('userId', data.userId)
            .set('password', data.password);
        return this.http.put(this.url + "/api/v1/users/change-password", params);
    }; // end of signinFunction function.
    AppService.prototype.logout = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'))
            .set('userId', data);
        return this.http.post(this.url + "/api/v1/users/logout", params);
    }; // end logout function
    //Friends request
    AppService.prototype.request = function (freindId, userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('request', freindId)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.put(this.url + "/api/v1/users/" + userId + "/request", params);
    };
    //Friends request
    AppService.prototype.requested = function (freindId, userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('request', freindId)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.put(this.url + "/api/v1/users/" + userId + "/requested", params);
    };
    //add as friend
    AppService.prototype.addAsFriend = function (freindId, userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('request', freindId)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.put(this.url + "/api/v1/users/" + userId + "/addAsFriend", params);
    };
    //get all tasks
    AppService.prototype.getAllTasks = function () {
        var response = this.http.get(this.url + "/api/v1/task/all?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return response;
    };
    //creating a task
    AppService.prototype.createTask = function (taskObj) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('title', taskObj.title)
            .set('tasks', JSON.stringify(taskObj.tasks))
            .set('createdBy', taskObj.createdBy)
            .set('createdByUserId', taskObj.createdByUserId)
            .set('modifiedBy', taskObj.modifiedBy)
            .set('type', taskObj.type)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/api/v1/task/create", params);
    };
    //edit task
    AppService.prototype.editTask = function (taskObj) {
        // friendsList to store in history for undo purpose
        var friendList = this.getUserInfoFromLocalstorage().friends;
        friendList.push(this.getUserInfoFromLocalstorage().userId);
        friendList = taskObj.type === "public" ? friendList : this.getUserInfoFromLocalstorage().userId;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('title', taskObj.title)
            .set('tasks', JSON.stringify(taskObj.tasks))
            .set('type', taskObj.type)
            .set('modifiedBy', taskObj.modifiedBy)
            .set('modifiedOn', taskObj.modifiedOn)
            .set('friends', friendList)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.put(this.url + "/api/v1/task/" + taskObj.taskId + "/edit", params);
    }; // end of edit function.
    //delete task
    AppService.prototype.deleteTask = function (taskObj) {
        // friendsList to store in history for undo purpose
        var friendList = this.getUserInfoFromLocalstorage().friends;
        friendList.push(this.getUserInfoFromLocalstorage().userId);
        friendList = taskObj.type === "public" ? friendList : this.getUserInfoFromLocalstorage().userId;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('title', taskObj.title)
            .set('tasks', JSON.stringify(taskObj.tasks))
            .set('type', taskObj.type)
            .set('modifiedBy', taskObj.modifiedBy)
            .set('modifiedOn', taskObj.modifiedOn)
            .set('friends', friendList)
            .set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/api/v1/task/" + taskObj.taskId + "/delete", params);
    }; // end of delete task function
    //Undo tasks
    AppService.prototype.undo = function () {
        var response = this.http.get(this.url + "/api/v1/task/" + this.getUserInfoFromLocalstorage().userId + "/undo?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return response;
    };
    //get notification for user
    AppService.prototype.getUserNotification = function (id) {
        var response = this.http.get(this.url + "/api/v1/task/" + id + "/notification?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('authtoken'));
        return response;
    };
    AppService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errorMessage);
    }; // END handleError
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/error404/error404.component.css":
/*!*************************************************!*\
  !*** ./src/app/error404/error404.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-404{\n    background-image: url('404.jpg');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center;\n    height: -webkit-fill-available;\n}"

/***/ }),

/***/ "./src/app/error404/error404.component.html":
/*!**************************************************!*\
  !*** ./src/app/error404/error404.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background-404\">\n</div>"

/***/ }),

/***/ "./src/app/error404/error404.component.ts":
/*!************************************************!*\
  !*** ./src/app/error404/error404.component.ts ***!
  \************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Error404Component = /** @class */ (function () {
    function Error404Component(router, _route) {
        this.router = router;
        this._route = _route;
    }
    Error404Component.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(["/sign-in"]);
        }, 6000);
    };
    Error404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error404',
            template: __webpack_require__(/*! ./error404.component.html */ "./src/app/error404/error404.component.html"),
            styles: [__webpack_require__(/*! ./error404.component.css */ "./src/app/error404/error404.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "./src/app/error500/error500.component.css":
/*!*************************************************!*\
  !*** ./src/app/error500/error500.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.background-500{\n    background-image: url('404.jpg');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center;\n    height: -webkit-fill-available;\n}"

/***/ }),

/***/ "./src/app/error500/error500.component.html":
/*!**************************************************!*\
  !*** ./src/app/error500/error500.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background-500\">\n</div>"

/***/ }),

/***/ "./src/app/error500/error500.component.ts":
/*!************************************************!*\
  !*** ./src/app/error500/error500.component.ts ***!
  \************************************************/
/*! exports provided: Error500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500Component", function() { return Error500Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Error500Component = /** @class */ (function () {
    function Error500Component(router, _route) {
        this.router = router;
        this._route = _route;
    }
    Error500Component.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/sign-in']);
        }, 4000);
    };
    Error500Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error500',
            template: __webpack_require__(/*! ./error500.component.html */ "./src/app/error500/error500.component.html"),
            styles: [__webpack_require__(/*! ./error500.component.css */ "./src/app/error500/error500.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], Error500Component);
    return Error500Component;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n    max-width: 42.5%;\n    margin: 3%\n  }\n\n  span{\n      font-size: smaller;\n  }\n\n  .example-header-image {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n  }\n\n  .example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n\n  .mat-card-green-people{\n    background: #acd8c9d6;\n    color: rgba(0, 0, 0, 0.247);\n    margin: 20px;\n  }\n\n  .people-search{\n      width: 100%;\n  }\n\n  .people-ul{\n      display: flex;\n      list-style: none;\n      overflow-x: auto;\n  }\n\n  .example-full-width {\n    width: 86%;\n  }\n\n  .example-full-width1 {\n    width: 83%;\n  }\n\n  .add-btn{\n      margin:3px;\n      margin-top: 30px;\n     \n  }\n\n  .head-up{\n    margin-top: 6% !important;\n  }\n\n  .head-down{\n    margin-bottom: 6% !important;\n\n  }\n\n  .head{\n      margin: 5% 0px;\n  }\n\n  .graph-card{\n      width: 100%\n  }\n\n  .card{\n      width: 100%;\n      height: 365px;\n      margin-bottom: 30px;\n\n  }\n\n  .add-task{\n      position: fixed;\n      bottom: 0;\n      right: 0;\n      margin: 30px;\n\n      padding: 12px;\n      background: #3F51B5;\n      border: none;\n      border-radius: 51px;\n      color: white;\n  }\n\n  .add-task-mobile{\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    margin: 30px;\n  }\n\n  .email-input{\n      width: 60%\n  }\n\n  .mat-card-primary{\n    background-color: white;\n  }\n\n  .task-card{\n      width: 100%;\n  }\n\n  .task-head{\n    display: inline-block;\n    margin: 0px;\n    width: 86%;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    \n  }\n\n  .costum-checkBox{\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    text-transform: capitalize;\n  }\n\n  .costum-checkBox:hover{\n    text-decoration: line-through;\n  }\n\n  .task-ul{\n      height: 150px;\n      font-size: smaller;\n      list-style: none;\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      overflow-y: scroll;\n      text-overflow: ellipsis;\n      padding: 0px;\n  }\n\n  .task-ul::-webkit-scrollbar {\n    width: 0px;  \n    background: transparent; \n}\n\n  .subtask-ul{\n    list-style: none;\n    padding-left: 50px;\n    white-space: nowrap;\n    overflow: hidden;\n    font-size: 0.85em;\n    background-image: url('data:image/jpeg;base64,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');\n    background-repeat: no-repeat;\n    background-size: 18px;\n    cursor: default !important;\n}\n\n  .subtask-ul:hover{\n    list-style: none;\n    padding-left: 50px;\n    white-space: nowrap;\n    overflow: hidden;\n    cursor: default !important;\n    background-image: url('check2.jpg');\n    background-repeat: no-repeat;\n    background-size: 18px;\n }\n\n  .div-width{\n    width: 75%;\n}\n\n  @media screen and (max-width: 450px) {\n    .task-head{\n        display: inline-block;\n        margin: 0px;\n        width: 220px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n      .div-width{\n        width: 100%;\n    }\n  }\n\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #3f51b5 !important;\n    color: black !important;\n    cursor: default;\n}\n\n  .add-details{\n    margin-top: 20px;\n}\n\n  .sortBtn{\n    margin: 5px\n}\n\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <!-- The Modal  For Creating task-->\n    <div class=\"modal fade\" id=\"myModal\">\n        <div class=\"modal-dialog modal-dialog-centered\">\n            <div class=\"modal-content\" style=\"background: #acd8c9d6\">\n\n                <!-- Modal Header -->\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">Create task</h4>\n                    <mat-slide-toggle color=\"primary\" checked=\"checked\" [(ngModel)]=\"private\" *ngIf='!editMode'>\n                        Private\n                    </mat-slide-toggle>\n                    <button mat-icon-button *ngIf='editMode' matTooltip='Delete Task?' color='primary' data-toggle=\"collapse\" data-target=\"#collapseExample\"\n                        aria-expanded=\"false\" aria-controls=\"collapseExample\"><i class=\"material-icons\">delete_outline</i></button>\n\n                </div>\n                <div class=\"collapse\" id=\"collapseExample\">\n                    <div class=\"card-body\">\n                        Do you want to remove this task? <button mat-raised-button class=\"mat-elevation-z8 add-btn float-right\"\n                            color='primary' (click)=\"deleteTask()\" data-dismiss=\"modal\">Yes!</button>\n                    </div>\n                </div>\n\n                <!-- Modal body -->\n                <div class=\"modal-body\">\n\n                    <mat-form-field>\n                        <input matInput placeholder=\"Title\" type=\"text\" [(ngModel)]=\"title\">\n                    </mat-form-field>\n                    <button mat-raised-button class=\"mat-elevation-z8 add-btn float-right\" color='primary' (click)='addTask()' data-dismiss=\"modal\"><i\n                            class=\"material-icons\">\n                            done_outline\n                        </i></button>\n                    <hr>\n                    <div *ngFor='let x of taskNumberIds; let i = index'>\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput placeholder=\"Task{{i+1}}\" type=\"text\" [(ngModel)]=\"this['subtask' + x]\">\n                        </mat-form-field>\n\n\n                        <div *ngIf=\"this['subtask' + x]\">\n                            <div *ngFor=\"let detail of [1, 2, 3, 4, 5]; let j = index; let first = first; let last = last\">\n                                <mat-expansion-panel [expanded]=\"step === detail\" (opened)=\"setStep(detail)\" hideToggle>\n                                    <mat-expansion-panel-header>\n                                        <mat-panel-title>\n                                            SubTask:{{detail}}\n                                        </mat-panel-title>\n                                        <mat-panel-description>\n                                            {{ this['detail' + i + detail ] }}\n                                        </mat-panel-description>\n                                    </mat-expansion-panel-header>\n\n                                    <mat-form-field class=\"example-full-width1\">\n                                        <input matInput placeholder=\"Detail {{detail}}\" type=\"text\" [(ngModel)]=\"this['detail' + i + detail ]\">\n                                    </mat-form-field>\n\n                                    <button *ngIf=\"!last\" mat-icon-button color=\"primary\" class=\"float-right \" (click)=\"nextStep()\"> <i\n                                            class=\"material-icons\">\n                                            add\n                                        </i></button>\n                                    <mat-action-row *ngIf=\"last\">\n                                        <button mat-button color=\"warn\" (click)=\"prevStep()\"> <i class=\"material-icons\">\n                                                keyboard_arrow_up\n                                            </i></button>\n                                    </mat-action-row>\n                                </mat-expansion-panel>\n                            </div>\n                            <!-- Epansion panel for adding details endds here -->\n                        </div>\n                        <hr>\n                        <br>\n\n                    </div>\n                    <div class='float-right'>\n\n                        <button *ngIf='count != 10' mat-mini-fab class=\"mat-elevation-z8 add-btn\" color='primary' (click)='add()'> <i\n                                class=\"material-icons\">\n                                add\n                            </i></button>\n\n                    </div>\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button  mat-raised-button class=\"mat-elevation-z8\" color='primary' data-dismiss=\"modal\">\n                        <i class=\"material-icons\">\n                            close\n                        </i></button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <!-- end of modal -->\n\n\n\n    <!-- Modal  for notification-->\n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Notification</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <mat-progress-bar mode=\"indeterminate\" *ngIf=\"!notifications\"></mat-progress-bar>\n\n                    <div *ngIf=\"notifications\" class=\"container\">\n                        <div class=\"row\" *ngFor=\"let notify of notifications.slice().reverse()\">\n\n                            <h6 class=\"lift-up\">\n                                <i class=\"material-icons\">list_alt</i>\n\n                                {{ notify }}</h6>\n                            <hr>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"modal-footer\">\n                    <button mat-raised-button color=\"primary\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n\n        <mat-progress-bar mode=\"indeterminate\" value=\"40\" *ngIf=\"!users && !userInfo\"></mat-progress-bar>\n\n        <div class=\"container\">\n            <div class=\"row\" style=\"margin-top:10px\">\n                <div class=\"ml-auto\">\n\n                    Hey there, <span *ngIf=\"userInfo\"><b>{{userInfo.firstName}}</b></span> &nbsp;&nbsp;|\n                    <button mat-icon-button matTooltip=\"Notification\" data-toggle=\"modal\" data-target=\"#exampleModal\"><i\n                            class=\"material-icons\" matBadge=\"{{notificationCount}}\" color=\"primary\" matBadgeOverlap=\"true\" (click)='clearCount()'>\n                            notifications_none </i></button>\n                    | <button mat-icon-button data-toggle=\"collapse\" data-target=\"#share\" aria-expanded=\"false\" aria-controls=\"share\"><i class=\"material-icons\"> share </i> </button>\n\n                    |  <button mat-icon-button (click)=\"ngOnInit()\" matTooltip=\"refresh\"> <i class=\"material-icons\">refresh </i></button>\n                    | &nbsp;&nbsp;\n                    <button mat-icon-button (click)=\"chat()\" matTooltip=\"chat\"><i class=\"material-icons\">chat</i></button>|\n                    <button mat-raised-button class=\"mat-elevation-z8\" matTooltip=\"Logout\" (click)=\"logout()\">\n                        <img src=\"./../../assets/logout.png\" height=\"20px\" alt=\"\">\n                    </button>\n                </div>\n\n            </div>\n\n            <!-- Share collapse -->\n            <div class=\"collapse text-center\" id=\"share\">\n                <hr>\n                <mat-form-field class=\"text-center email-input \">\n                    <input matInput placeholder=\"Enter email to send invitation.\" type=\"text\" [(ngModel)]=\"mail\">\n                </mat-form-field> |\n\n                <button mat-icon-button color=\"primary\" matTooltip=\"Send invitaion mail\" (click)='sendInvitationMail()'><i\n                        class=\"material-icons\"> send</i></button>|\n\n                <button mat-icon-button color=\"primary\" matTooltip={{invitation}} (click)=\"copyMessage(invitation)\" value='click to copy'><i\n                        class=\"material-icons\"> file_copy </i></button>\n\n                <hr>\n            </div>\n\n\n            <!-- Heading  -->\n            <h2 class=\"text-center head-up\"><img class=\"anime\" src=\"./../../assets/check.png\" alt=\"\"> Task Reminder</h2>\n            <br>\n\n            <!-- card for Peoples and friends on platform -->\n            <mat-expansion-panel class=\"mat-elevation-z8\">\n                <mat-expansion-panel-header>\n                    <mat-panel-title>\n                        <i class=\"material-icons\"> person_pin </i>\n                    </mat-panel-title>\n                    <mat-panel-description>\n                        friends\n                    </mat-panel-description>\n                </mat-expansion-panel-header>\n\n                <mat-form-field class=\"text-center people-search\">\n                    <input matInput placeholder=\"Search Peoples\" type=\"text\" [(ngModel)]=\"peopleSearch\">\n                </mat-form-field>\n\n                <mat-spinner *ngIf='!users' [diameter]=\"100\" class=\"mx-auto\"></mat-spinner>\n\n                <div *ngIf=\"users && userInfo\" class=\"row\">\n\n                    <ul class=\"people-ul\">\n                        <li *ngFor=\"let user of users | filter: peopleSearch\">\n                            <div *ngIf=\"userId !== user.userId \">\n\n                                <mat-card class=\" mat-card-green-people\">\n\n                                    <p>{{user.firstName}}</p>\n                                    <button *ngIf=\"!userInfo.request.includes(user.userId) && !userInfo.friends.includes(user.userId) && !userInfo.requested.includes(user.userId)\"\n                                        mat-raised-button class=\"mat-elevation-z8\" color='primary' matTooltip=\"Add as Friend\"\n                                        (click)=\"addAsFriend(user.userId, user.firstName)\"><i\n                                            class=\"material-icons\">\n                                            person_add\n                                        </i></button>\n\n                                    <button *ngIf=\"userInfo.requested.includes(user.userId)\" mat-raised-button class=\"mat-elevation-z8\" color='disabled' disabled>Pending...</button>\n\n                                    <button *ngIf=\"userInfo.request.includes(user.userId)\" mat-raised-button class=\"mat-elevation-z8\" color='primary' (click)=\"addToFriend(user.userId, user.firstName)\"><i\n                                            matTooltip=\"Accept friend's request\" class=\"material-icons\">\n                                            check\n                                        </i></button>\n\n                                    <button [routerLink]=\"['/profile',user.userId]\" *ngIf=\"userInfo.friends.includes(user.userId)\" mat-raised-button class=\"mat-elevation-z8\"\n                                        color='primary'><i class=\"material-icons\">\n                                            account_circle\n                                        </i></button>\n                                </mat-card>\n                            </div>\n\n                        </li>\n                    </ul>\n\n                </div>\n\n            </mat-expansion-panel>\n            <br><br>\n            <hr><br>\n            <!-- Tasks -->\n\n            <mat-spinner *ngIf='!tasks && !empty' [diameter]=\"100\" class=\"mx-auto\"></mat-spinner>\n\n            <!-- card in case of no tasks -->\n            <mat-card class=\"text-center\" *ngIf='empty && !tasks'>\n                <h4>{{empty}}</h4>\n                <button mat-icon-button (click)=\"ngOnInit()\"> <i class=\"material-icons\">refresh </i></button>\n            </mat-card>\n\n            <div *ngIf='tasks' class=\"row\">\n\n                <div class=\"col-md-3 text-center\">\n                    <!-- task search input box -->\n                    <mat-form-field>\n                        <input matInput placeholder=\"Search\" type=\"text\" [(ngModel)]=\"filter\">\n                    </mat-form-field>\n\n                </div>\n\n                <div class=\"col-md-6 text-center\">\n                    <!-- pgination -->\n                    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                </div>\n\n\n                <div class=\"col-md-3 text-center\">\n                    <!-- SortBy buttons -->\n                    <p> <b>SortBy</b> <i class=\"material-icons\">filter_list </i></p>\n\n                    <button mat-raised-button class=\"mat-elevation-z8 sortBtn\" color='primary' matTooltip=\"SortBy Title\" (click)=\"sort('title')\">Title</button>\n\n                    <button mat-raised-button class=\"mat-elevation-z8 sortBtn\" color='primary' matTooltip=\"SortBy Date\" (click)=\"sort('createdOn')\">Date</button>\n\n                </div>\n            </div>\n\n            <hr>\n\n            <button mat-raised-button class=\"mat-elevation-z8 float-right\" color='primary' matTooltip=\"Ctrl + Z\" (click)='undo()'><i\n                    class=\"material-icons\">undo</i></button>\n\n            <!-- for loop starts here -->\n            <div class=\"row\" *ngFor='let task of tasks  | orderBy: key : reverse | filter:filter  | paginate: { itemsPerPage: 12, currentPage: p }'\n                style=\"margin-top:60px\">\n\n\n                <!-- card for pusblic tasks -->\n                <div *ngIf=\"task.type === 'public'\" class=\"mx-auto div-width\">\n\n                    <mat-card class=\"card mat-card-primary task-card mat-elevation-z8\">\n                        <h4 class=\"task-head\">{{ task.title }}</h4>\n                        <button mat-icon-button matTooltip=\"Edit\" color=\"primary\" *ngIf=\"userId === task.createdByUserId || userInfo.friends.includes(task.createdByUserId)\"\n                            class=\"float-right\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"editValue(task)\">\n                            <i class=\"material-icons\">\n                                edit\n                            </i>\n                        </button>\n                        <br>\n                        <br>\n                        <div class=\"row\">\n                            <span style=\"margin-left: 16px\">Created By:</span>\n                            <span class=\"mx-auto\"><b>{{ task.createdBy }}</b></span>\n                            <span class=\"ml-auto\"><b>{{ task.createdOn | date:'medium' }}</b></span>\n                        </div>\n                        <div class=\"row\">\n                            <span style=\"margin-left: 16px\">Modified By:</span>\n                            <span class=\"mx-auto\"><b>{{ task.modifiedBy }}</b></span>\n                            <span class=\"ml-auto\"><b>{{ task.modifiedOn | date:'medium'}}</b></span>\n                        </div>\n                        <hr>\n                        <ul class=\"task-ul\">\n                            <li *ngFor='let subtask of task.tasks; let i = index'>\n                                <mat-checkbox matTooltip=\"Mark Complete\" class=\"example-margin\" color=\"primary\" (change)=\"taskChecked(task,i)\" [disabled]=\"userId !== task.createdByUserId && !userInfo.friends.includes(task.createdByUserId)\">\n                                    {{ subtask.task }}\n                                </mat-checkbox>\n\n                                <ul>\n                                    <li class=\"subtask-ul\" *ngFor='let x of subtask.subtask; let j = index'>\n                                        <button class=\"costum-checkBox\" matTooltip=\"Mark Complete\" (click)=\"subtaskChecked(task, i, j)\" [disabled]=\"userId !== task.createdByUserId && !userInfo.friends.includes(task.createdByUserId)\">\n                                            {{x}}\n                                        </button>\n\n                                    </li>\n                                </ul>\n                                <hr>\n                            </li>\n                        </ul>\n                    </mat-card>\n                </div>\n\n                <!-- Card for private tasks of user -->\n                <div *ngIf=\"task.type === 'private' && userId === task.createdByUserId\" class=\"mx-auto div-width\">\n\n                    <mat-card class=\"card mat-card-green mat-elevation-z8\">\n                        <h4 class=\"task-head\">{{ task.title }}</h4>\n                        <button mat-icon-button color=\"link\" (click)=\"editValue(task)\" data-toggle=\"modal\" data-target=\"#myModal\" class=\"float-right\"\n                            matTooltip=\"Edit\">\n                            <i class=\"material-icons\">\n                                edit\n                            </i>\n                        </button>\n                        <br>\n                        <br>\n                        <div class=\"row\">\n                            <span style=\"margin-left: 16px\">Created By:</span>\n                            <span class=\"ml-auto\"><b>{{ task.createdBy }}</b></span>\n                            <span class=\"ml-auto\"><b>{{ task.createdOn | date:'medium' }}</b></span>\n                        </div>\n\n                        <hr>\n                        <ul class=\"task-ul\">\n                            <li *ngFor='let subtask of task.tasks; let i = index'>\n                                <mat-checkbox class=\"example-margin\" color=\"basic\" (click)=\"taskChecked(task,i)\" matTooltip=\"Mark Complete\">\n                                    {{ subtask.task }}\n                                </mat-checkbox>\n\n                                <ul>\n\n                                    <li class=\"subtask-ul\" *ngFor='let x of subtask.subtask; let j = index'>\n                                        <button class=\"costum-checkBox\" matTooltip=\"Mark Complete\" (click)=\"subtaskChecked(task, i, j)\">\n                                            {{x}}\n                                        </button>\n\n                                    </li>\n                                </ul>\n                                <hr>\n                            </li>\n                        </ul>\n                    </mat-card>\n                </div>\n            </div>\n            <!-- end of task row -->\n        </div>\n        <div class=\"col-md-12 text-center\">\n            <!-- pagination -->\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n\n    </div>\n\n    <!-- Add task Button -->\n    <button class=\"mat-elevation-z8 add-task d-none d-md-block\" color='primary' data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"clear(); editModeOff()\"\n        matTooltip=\"Add a Task\">Add Task\n        <i class=\"material-icons\" style=\"font-size : 14px\">\n            add\n        </i></button>\n\n    <!-- add task button for mobile -->\n    <button mat-mini-fab class=\"mat-elevation-z8 add-task-mobile d-xs-inline d-sm-inline d-md-none\" color='primary' data-toggle=\"modal\"\n        (click)=\"clear(); editModeOff()\" data-target=\"#myModal\"><i class=\"material-icons\" matTooltip=\"Add a Task\">\n            add\n        </i></button>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(SocketService, snackBar, router, _route, appService) {
        var _this = this;
        this.SocketService = SocketService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.appService = appService;
        //initializing p to one
        this.p = 1;
        //sorting
        this.key = 'createdOn';
        this.reverse = false;
        this.pageSize = 10;
        this.userList = [];
        // task variables
        this.private = false;
        this.spinner = false;
        this.taskCreationUpdate = false;
        this.editMode = false;
        this.step = 0;
        // Modal for create and update tasklist variables
        this.count = 1;
        this.taskNumberIds = [1];
        //notification related variables
        this.notifications = [];
        this.notificationCount = null;
        // check to for validity
        this.checkStatus = function () {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/sign-in']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
        // socket event to verifyUser
        this.verifyUserConfirmation = function () {
            _this.SocketService.verifyUser()
                .subscribe(function (data) {
                _this.disconnectedSocket = false;
                _this.SocketService.setUser(_this.authToken);
            });
        };
        // socket event to get online user list
        this.getOnlineUserList = function () {
            _this.SocketService.onlineUserList()
                .subscribe(function (userList) {
                _this.userList = [];
                for (var x in userList) {
                    var temp = { 'userId': userList[x].userId, 'name': userList[x].fullName };
                    _this.userList.push(temp);
                }
                console.log('UserList =>', _this.userList);
            }); // end online-user-list
        };
        // get notifications of the user
        this.getNotify = function () {
            _this.SocketService.notify(_this.userId)
                .subscribe(function (data) {
                var message = data;
                _this.snackBar.open("" + message.message, "Dismiss", {
                    duration: 5000,
                });
                console.log("Inside get notify");
                // pushing data to notification array
                _this.notifications.push(message.message);
                _this.notificationCount++;
                _this.getUserDetails(_this.userId);
                _this.getALLUsers();
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }); //end subscribe
        }; // end get message from a user 
        // get notifications related task changes done by friends
        this.getTaskChanges = function () {
            _this.SocketService.taskChanges().subscribe(function (data) {
                if (data.receiverId.includes(_this.userId)) {
                    var message = data;
                    _this.snackBar.open("" + message.message, "Dismiss", {
                        duration: 5000,
                    });
                    // pushing data to notification array
                    _this.notifications.push(message.message);
                    //playing notification sound.
                    _this.audio = new Audio();
                    _this.audio.src = "../../../assets/light.mp3";
                    _this.audio.load();
                    _this.audio.play();
                    _this.notificationCount++;
                }
                _this.getAllTasks();
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }); //end subscribe
        }; // end get message from a user 
        // get all tasks
        this.getAllTasks = function () {
            _this.appService.getAllTasks().subscribe(function (data) {
                if (data['status'] === 200) {
                    _this.tasks = data['data'];
                }
                else if (data['status'] === 404) {
                    _this.empty = data['message'];
                }
                else {
                    _this.snackBar.open("some error occured", "Dismiss", {
                        duration: 5000,
                    });
                    setTimeout(function () {
                        _this.router.navigate(['/500']);
                    }, 500);
                }
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            });
        }; //end of get all task
        //create task function or edit task and make api request
        this.addTask = function () {
            _this.taskList = [];
            if (_this.title) {
                _this.spinner = true;
                var taskObj_1 = {
                    taskId: '',
                    title: _this.title,
                    type: '',
                    tasks: [],
                    createdByUserId: _this.userId,
                    createdBy: _this.userInfo.firstName,
                    modifiedBy: _this.userInfo.firstName,
                    modifiedOn: Date.now(),
                };
                // handling private or public task
                if (_this.private == true) {
                    taskObj_1.type = 'private';
                }
                else {
                    taskObj_1.type = 'public';
                }
                // Mapping all the NgModels to TaskObj to send them to backend
                for (var i = 1; i <= 10; i++) {
                    if (_this["subtask" + i]) {
                        var taskDetailsObj = {
                            task: _this["subtask" + i],
                            status: "pending",
                            subtask: []
                        };
                        for (var j = 1; j <= 5; j++) {
                            if (_this["detail" + (i - 1) + j]) {
                                taskDetailsObj.subtask.push(_this["detail" + (i - 1) + j]);
                            }
                        }
                        taskObj_1.tasks.push(taskDetailsObj);
                    }
                }
                if (_this.editMode === false) {
                    //If edit mode is false the create task
                    _this.appService.createTask(taskObj_1).subscribe(function (apiResponse) {
                        if (apiResponse.status === 200) {
                            _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                                duration: 2000,
                            });
                            _this.spinner = false;
                            _this.taskCreationUpdate = true;
                            // sending notification
                            var notifyObject = {
                                type: taskObj_1.type,
                                senderName: _this.userInfo.firstName,
                                senderId: _this.userId,
                                receiverName: taskObj_1.createdBy,
                                receiverId: taskObj_1.createdByUserId,
                                message: _this.userInfo.firstName + " has created " + _this.title + " tasklist.",
                                createdOn: Date.now()
                            };
                            _this.SocketService.taskNotify(notifyObject);
                            _this.getAllTasks();
                        }
                        else {
                            _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                                duration: 5000,
                            });
                            setTimeout(function () {
                                _this.router.navigate(['/500']);
                            }, 500);
                        }
                    }, function (err) {
                        _this.snackBar.open("some error occured", "Dismiss", {
                            duration: 5000,
                        });
                        setTimeout(function () {
                            _this.router.navigate(['/500']);
                        }, 500);
                    }); //end of create task
                }
                else {
                    taskObj_1.taskId = _this.taskId;
                    taskObj_1.modifiedBy = _this.userInfo.firstName;
                    //If edit mode is true then edit task
                    _this.appService.editTask(taskObj_1).subscribe(function (apiResponse) {
                        if (apiResponse.status === 200) {
                            _this.snackBar.open("Task Edited!", "Dismiss", {
                                duration: 5000,
                            });
                            _this.spinner = false;
                            _this.taskCreationUpdate = true;
                            // sending notification
                            var notifyObject = {
                                type: taskObj_1.type,
                                senderName: _this.userInfo.firstName,
                                senderId: _this.userId,
                                receiverName: taskObj_1.createdBy,
                                receiverId: taskObj_1.createdByUserId,
                                message: _this.userInfo.firstName + " has Edited " + taskObj_1.title + " tasklist. ",
                                createdOn: Date.now()
                            };
                            _this.SocketService.taskNotify(notifyObject);
                            _this.getAllTasks();
                        }
                        else {
                            _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                                duration: 5000,
                            });
                            setTimeout(function () {
                                _this.router.navigate(['/500']);
                            }, 500);
                        }
                    }, function (err) {
                        _this.snackBar.open("some error occured", "Dismiss", {
                            duration: 5000,
                        });
                        setTimeout(function () {
                            _this.router.navigate(['/500']);
                        }, 500);
                    });
                } //end of edit task
            }
            else {
                _this.snackBar.open("Please enter title", "Dismiss", {
                    duration: 2000,
                });
            }
        };
        // logout Function
        this.logout = function () {
            var userId = _this.appService.getUserInfoFromLocalstorage().userId;
            _this.appService.logout(userId)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('authtoken');
                    _this.SocketService.exitSocket();
                    _this.router.navigate(['/sign-in']);
                }
                else {
                    _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                        duration: 5000,
                    });
                } // end condition
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            });
        }; // end logout
    }
    HomeComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    //checking for keypress to undo
    HomeComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.getModifierState && event.getModifierState('Control') && event.keyCode === 90) {
            this.undo();
        }
    }; //end of host listener
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkStatus();
        this.authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken');
        this.userId = this.appService.getUserInfoFromLocalstorage().userId;
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        this.createVariable();
        this.getNotify();
        this.getTaskChanges();
        this.getUserDetails(this.userId);
        this.invitation = "http://localhost:4200/sign-up?userId=" + this.userId;
        //on purpose Delay to ensure perfromance at OnInit
        setTimeout(function () {
            _this.getAllTasks();
        }, 1000);
        setTimeout(function () {
            _this.checkForInvitation();
        }, 6000);
        setTimeout(function () {
            _this.getALLUsers();
        }, 4000);
        setTimeout(function () {
            _this.getNotification(_this.userId);
        }, 8000);
    };
    HomeComponent.prototype.chat = function () {
        this.userId = this.appService.getUserInfoFromLocalstorage().userId;
        this.router.navigate(['/profile/$(this.userId']);
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.SocketService.exitSocket();
    };
    //undo button
    HomeComponent.prototype.undo = function () {
        var _this = this;
        this.appService.undo().subscribe(function (data) {
            _this.undoData = data;
            if (_this.undoData.status == 200) {
                _this.snackBar.open("" + _this.undoData.message, "Dismiss", {
                    duration: 2000,
                });
                // sending notification
                var notifyObject = {
                    type: "public",
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: '',
                    receiverId: '',
                    message: _this.userInfo.firstName + " has Undo a tasklist.",
                    createdOn: Date.now()
                };
                _this.SocketService.taskNotify(notifyObject);
                _this.getAllTasks();
            }
            else if (_this.undoData.status == 404) {
                _this.snackBar.open("" + _this.undoData.message, "Dismiss", {
                    duration: 2000,
                });
            }
            else {
                _this.snackBar.open("Some Error occured", "Dismiss", {
                    duration: 2000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of get all users.
    // create variable for task details (subtasks variables)
    HomeComponent.prototype.createVariable = function () {
        for (var i = 0; i <= 9; i++) {
            for (var j = 1; j <= 5; j++) {
                this["detail" + i + j];
            }
        }
    };
    // Get all users
    HomeComponent.prototype.getALLUsers = function () {
        var _this = this;
        this.appService.getAllUsers().subscribe(function (data) {
            _this.users = data['data'];
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of get all users.
    // get detail of current user
    HomeComponent.prototype.getUserDetails = function (id) {
        var _this = this;
        this.appService.getUserInfo(id).subscribe(function (data) {
            _this.userInfo = data['data'];
            setTimeout(function () {
                _this.appService.setUserInfoInLocalStorage(_this.userInfo);
            }, 2000);
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    // adding user to requested array of the friend .
    //adding friend to request array of the user.
    HomeComponent.prototype.addAsFriend = function (id, name) {
        var _this = this;
        // send friends request
        this.appService.request(this.userId, id).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: name,
                    receiverId: id,
                    message: _this.userInfo.firstName + " has sent you friend's request",
                    createdOn: new Date()
                };
                _this.SocketService.sendNotify(notifyObject);
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
        // add user to pending or requested array
        this.appService.requested(this.userId, id).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
        // refreshing
        setTimeout(function () {
            _this.ngOnInit();
        }, 1000);
    };
    // Add request user to friends array
    HomeComponent.prototype.addToFriend = function (id, name) {
        var _this = this;
        // add friend to friends array
        this.appService.addAsFriend(id, this.userId).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: name,
                    receiverId: id,
                    message: _this.userInfo.firstName + " has accepted your friend's request",
                    createdOn: new Date()
                };
                _this.SocketService.sendNotify(notifyObject);
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
        // refreshing
        setTimeout(function () {
            _this.ngOnInit();
        }, 1000);
    };
    // nested form
    HomeComponent.prototype.remove = function (i) {
        this.count--;
    };
    HomeComponent.prototype.add = function () {
        this.taskNumberIds.push(++this.count);
    };
    // Main taask check function
    HomeComponent.prototype.taskChecked = function (task, i) {
        var _this = this;
        var taskObj = task;
        var removedTask = task.tasks[i].task;
        taskObj.modifiedBy = this.userInfo.firstName;
        taskObj.modifiedOn = Date.now();
        setTimeout(function () {
            task.tasks.splice(i, 1);
            _this.appService.editTask(taskObj).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.snackBar.open("Task Completed!", "Dismiss", {
                        duration: 5000,
                    });
                    // sending notification
                    var notifyObject = {
                        type: taskObj.type,
                        senderName: _this.userInfo.firstName,
                        senderId: _this.userId,
                        receiverName: taskObj.createdBy,
                        receiverId: taskObj.createdByUserId,
                        message: _this.userInfo.firstName + " has Checked \" " + removedTask + " \" task from\" " + taskObj.title + " \" tasklist. ",
                        createdOn: Date.now()
                    };
                    _this.SocketService.taskNotify(notifyObject);
                    // refreshing
                    _this.getAllTasks();
                }
                else {
                    _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                        duration: 5000,
                    });
                    setTimeout(function () {
                        _this.router.navigate(['/500']);
                    }, 500);
                }
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            });
        }, 500);
    };
    // Subtask check function
    HomeComponent.prototype.subtaskChecked = function (task, i, j) {
        var _this = this;
        var taskObj = task;
        var removedSubtask = task.tasks[i].subtask[j];
        taskObj.modifiedBy = this.userInfo.firstName;
        taskObj.modifiedOn = Date.now();
        task.tasks[i].subtask.splice(j, 1);
        this.appService.editTask(taskObj).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("SubTask Completed!", "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    type: taskObj.type,
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: taskObj.createdBy,
                    receiverId: taskObj.createdByUserId,
                    message: _this.userInfo.firstName + " has Checked \" " + removedSubtask + " \" from \" " + taskObj.title + " \" tasklist.",
                    createdOn: Date.now()
                };
                _this.SocketService.taskNotify(notifyObject);
                // refreshing
                _this.getAllTasks();
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of subtask check.
    //function for pre render value to form for editing values
    HomeComponent.prototype.editValue = function (task) {
        var _this = this;
        // setting this variable for passing to delete task function
        this.taskDetailsToEdit = task;
        this.editMode = true;
        this.clear();
        // this.count = this.taskDetailsToEdit.tasks.length;
        this.title = task.title;
        this.taskId = task.taskId;
        if (task.type == 'private') {
            this.private = true;
        }
        else {
            this.private = false;
        }
        var i = 1;
        task.tasks.map(function (x) {
            _this["subtask" + i] = x.task;
            x.subtask.filter(function (y) {
                for (var j = 1; j <= 5; j++) {
                    _this["detail" + (i - 1) + j] = x.subtask[j - 1];
                }
            });
            i++;
        });
    };
    // delete task function
    HomeComponent.prototype.deleteTask = function () {
        var _this = this;
        var taskObj = this.taskDetailsToEdit;
        taskObj.modifiedBy = this.userInfo.firstName;
        taskObj.modifiedOn = Date.now();
        this.appService.deleteTask(taskObj).subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                _this.snackBar.open("Task Deleted!", "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    type: taskObj.type,
                    senderName: _this.userInfo.firstName,
                    senderId: _this.userId,
                    receiverName: taskObj.createdBy,
                    receiverId: taskObj.createdByUserId,
                    message: _this.userInfo.firstName + " has Deleted " + taskObj.title + " tasklist.",
                    createdOn: Date.now()
                };
                _this.SocketService.taskNotify(notifyObject);
                // refreshing
                _this.getAllTasks();
            }
            else {
                _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    }; //end of delete task.
    //code to get last 10 notification
    HomeComponent.prototype.getNotification = function (id) {
        var _this = this;
        this.appService.getUserNotification(id).subscribe(function (data) {
            var response = data['data'];
            _this.notifications = [];
            if (response != null) {
                response.map(function (x) {
                    _this.notifications.unshift(x.message);
                });
            }
        }, function (err) {
            _this.snackBar.open("some error occured", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    HomeComponent.prototype.editModeOff = function () {
        this.editMode = false;
    };
    HomeComponent.prototype.clear = function () {
        this.private = false;
        this.title = '';
        this.count = 1;
        this.taskNumberIds = [1];
        for (var i = 1; i <= 10; i++) {
            this["subtask" + i] = '';
        }
        for (var i = 0; i <= 9; i++) {
            for (var j = 1; j <= 5; j++) {
                this["detail" + i + j] = '';
            }
        }
    };
    // clearing notification count
    HomeComponent.prototype.clearCount = function () {
        this.notificationCount = null;
    };
    //code for mat-expansion panel in the modal for subtasks
    HomeComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    HomeComponent.prototype.nextStep = function () {
        this.step++;
    };
    HomeComponent.prototype.prevStep = function () {
        this.step--;
    };
    // send invitation mail
    HomeComponent.prototype.sendInvitationMail = function () {
        var _this = this;
        this.appService.sendInvite(this.userId, this.mail).subscribe(function (data) {
            var response = data;
            if (response['status'] === 200) {
                _this.snackBar.open("Invitation mail sent successfully", "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                _this.snackBar.open("Some error occured", "Dismiss", {
                    duration: 5000,
                });
            }
        });
    };
    //copy to clipboard
    HomeComponent.prototype.copyMessage = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.snackBar.open("Invitation link copied successfully", "Dismiss", {
            duration: 5000,
        });
    };
    //check for invitation
    HomeComponent.prototype.checkForInvitation = function () {
        var _this = this;
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('inviteId')) {
            var inviteId_1 = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('inviteId');
            this.appService.addInviteFriend(this.userId, inviteId_1).subscribe(function (data) {
                if (data['status'] === 200) {
                    _this.snackBar.open("Friend added to friend's list", "Dismiss", {
                        duration: 5000,
                    });
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('inviteId');
                    // sending notification
                    var notifyObject = {
                        senderName: _this.userInfo.firstName,
                        senderId: _this.userId,
                        receiverName: '',
                        receiverId: inviteId_1,
                        message: "You are now friend with " + _this.userInfo.firstName,
                        createdOn: new Date()
                    };
                    _this.SocketService.sendNotify(notifyObject);
                    _this.getUserDetails(_this.userId);
                }
                else {
                    _this.snackBar.open("Some error occured in adding invited friend to friend's list", "Dismiss", {
                        duration: 5000,
                    });
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "handleKeyboardEvent", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            providers: [_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]]
        }),
        __metadata("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], HomeComponent);
    return HomeComponent;
}()); // end of export class



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-pic{\n    margin: 5%;\n    font-size: 15em;\n}\n.profile-pic2{\n    font-size: 4em;\n}\n.marginTop{\n    margin-top: 2%; \n    background-color: #ffffff61;\n    color: rgba(0,0,0,.54);\n}\n.people-search{\n    width: 100%;\n}\n.people-ul{\n    display: flex;\n    list-style: none;\n    overflow-x: auto;\n}\n.mat-card-green-people {\n    margin: 5%;\nbox-shadow: 3px 3px 6px 1px rgba(0,0,0,0.2) ;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"indeterminate\" *ngIf=\"!userInfo\"></mat-progress-bar>\n\n<div class=\"container\">\n\n    <button mat-icon-button color=\"primary\" matTooltip=\"Back\" (click)=\"goBack()\">\n        <i class=\"material-icons\"> arrow_back </i>\n    </button>\n\n    <div class=\"row\">\n\n        <!-- Main card -->\n        <mat-card class=\"mx-auto marginTop\" *ngIf=\"userInfo\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <button mat-raised-button matTooltip=\"Unfriend\" (click)=\"unFriend()\" class=\"ml-auto\"> Unfriend</button>\n                    <div class=\"col-md-12\">\n                        <div class=\"text-center\">\n\n                            <i class=\"material-icons profile-pic\"> account_circle</i>\n                            <h2 style=\"text-transform:capitalize\">{{userInfo.firstName}} {{userInfo.lastName}}</h2>\n                            <hr>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"row\">\n\n                    <div class=\"col-md-6\">\n                        <p>Email :</p>\n                        <p><b>{{userInfo.email}}</b></p>\n                        <br>\n\n                        <p>Phone no.</p>\n                        <p *ngIf=\"userInfo.mobileNumber\"> <b>{{userInfo.mobileNumber}}</b> </p>\n\n                    </div>\n\n                    <div class=\"col-md-6\">\n                        <p>Join On :</p>\n                        <p> <b>{{userInfo.createdOn | date: \"medium\"}}</b> </p>\n\n                        <br>\n\n                        <p>Country :</p>\n                        <p *ngIf=\"country\"> <b>{{country}}</b> </p>\n                    </div>\n\n                </div>\n\n                <!-- Friend's friend list -->\n                <mat-expansion-panel class=\"mat-elevation-z8\">\n\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <i class=\"material-icons\"> person_pin </i>\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            {{userInfo.firstName}}'s friends.\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n\n                    <mat-form-field class=\"text-center people-search\">\n                        <input matInput placeholder=\"Search Peoples\" type=\"text\" [(ngModel)]=\"peopleSearch\">\n                    </mat-form-field>\n\n                    <mat-spinner *ngIf='!friends' [diameter]=\"100\" class=\"mx-auto\"></mat-spinner>\n\n                    <div *ngIf=\"friends\" class=\"row\">\n\n                        <ul class=\"people-ul\">\n                            <li *ngFor=\"let user of friends | filter: peopleSearch\">\n\n                                <mat-card class=\" mat-card-green-people \" *ngIf='user.userId !== id'>\n                                    <p> <i class=\"material-icons profile-pic2\"> account_circle</i></p>\n                                    <p>{{user.firstName}}</p>\n                                </mat-card>\n\n                            </li>\n                        </ul>\n\n                    </div>\n\n                </mat-expansion-panel>\n\n            </div>\n        </mat-card>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(location, SocketService, snackBar, router, _route, appService) {
        var _this = this;
        this.location = location;
        this.SocketService = SocketService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.appService = appService;
        // check to for validity
        this.checkStatus = function () {
            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/sign-in']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.appService.getUserInfoFromLocalstorage().userId;
        this.name = this.appService.getUserInfoFromLocalstorage().firstName;
        this.checkStatus();
        this.getUserDetails();
        setTimeout(function () {
            _this.getUsersFriends();
        }, 2000);
    };
    // get detail of current user
    ProfileComponent.prototype.getUserDetails = function () {
        var _this = this;
        var id = this._route.snapshot.params.userId;
        this.appService.getUserInfo(id).subscribe(function (data) {
            _this.userInfo = data['data'];
            var countryCode = _this.userInfo.mobileNumber.split(" ");
            // getting country of user
            _this.getCountry(countryCode[1]);
            // getting phone no
            _this.userInfo.mobileNumber = countryCode[2];
        }, function (err) {
            _this.snackBar.open("some error occured please check number", "Dismiss", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    //get users friends 
    ProfileComponent.prototype.getUsersFriends = function () {
        var _this = this;
        this.appService.getUserFriends(this.userInfo.friends).subscribe(function (data) {
            var response = data;
            if (response.status === 200) {
                _this.friends = response.data;
            }
            else if (response.status === 404) {
                _this.snackBar.open("" + response.message, "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                _this.snackBar.open("" + response.message, "Dismiss", {
                    duration: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/500']);
                }, 500);
            }
        }, function (err) {
            _this.snackBar.open("some internal error occured", "Caution", {
                duration: 5000,
            });
            setTimeout(function () {
                _this.router.navigate(['/500']);
            }, 500);
        });
    };
    //get country of user
    ProfileComponent.prototype.getCountry = function (code) {
        var _this = this;
        this.appService.getCountry(code).subscribe(function (data) {
            _this.country = data[0].name;
        });
    };
    //remove user from friends array
    ProfileComponent.prototype.unFriend = function () {
        var _this = this;
        this.appService.unFriend(this.userInfo.userId, this.id).subscribe(function (data) {
            if (data['status'] === 200) {
                _this.snackBar.open("Friend has been removed succesfully", "Dismiss", {
                    duration: 5000,
                });
                // sending notification
                var notifyObject = {
                    senderName: _this.name,
                    senderId: _this.id,
                    receiverName: '',
                    receiverId: _this.userInfo.userId,
                    message: _this.name + " has unfriend you.",
                    createdOn: new Date()
                };
                _this.SocketService.sendNotify(notifyObject);
                setTimeout(function () {
                    _this.router.navigate(['/home']);
                }, 2000);
            }
            else {
                _this.snackBar.open("Some error occured in removing your friend please try again or write to us if issue persists", "Dismiss", {
                    duration: 5000,
                });
            }
        });
    };
    ProfileComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/shared/side-bar/side-bar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ],
            declarations: [_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_2__["SideBarComponent"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_2__["SideBarComponent"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/side-bar/side-bar.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-bar{\n    min-height: 100%;\n    height: 100%;\n    position: fixed;\n    box-shadow: 0px 0 28px 2px rgba(0,0,0,0.4) ;\n    width: 55px;\n    z-index: 100;\n    background-color: #acd8c9d6;\n}\n\n.side-bar p {\n    display: none;\n}\n\n.side-bar-list{\n    list-style: none;\n    padding-left: 0px;\n    margin: 15px;\n    cursor: pointer;\n}\n\n.menu{\n    margin: 15px;\n    cursor: pointer;\n}\n\n.side-bar:hover {\n    z-index: 100;\n    background-color: #acd8c9d6;\n    min-height: 100%;\n    height: 100%;\n    position: fixed;\n    box-shadow: 7px 0 28px 2px rgba(0,0,0,0.4) ;\n    width: 255px;\n    transition: width 500ms cubic-bezier(0.785, 0.135, 0.15, 0.86) 10ms;\n}\n\n.side-bar:hover p{\n    transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1) 500ms;\n    display: inline-block;\n    margin-bottom: 0px;\n    }\n\n.nav-bar{\n    transition: all 600ms cubic-bezier(0.895, 0.03, 0.685, 0.22) 10ms;\n    z-index: 100;\n    /* background-color: #acd8c9d6; */\n    width: 100%;\n    position: fixed;\n    height: 50px;\n}\n\n.nav-bar ul{\n    display: none;\n}\n\n.nav-menu{\n    margin: 15px;\n    float:right;\n}\n\n.nav-bar:hover ul{\n    transition: all 600ms cubic-bezier(0.895, 0.03, 0.685, 0.22) 10ms;\n\n    display: inline;\n    height: auto;\n    z-index: 100;\n    background-color: #acd8c9d6;\n    width: 100%;\n    position: fixed;\n    margin: 0px;\n    padding: 15px;\n\n\n}\n\n.nav-bar:hover p{\n    display: inline;\n}\n\n.logout{\n    cursor: pointer;\n    height:24px;\n    width: 24px;\n}"

/***/ }),

/***/ "./src/app/shared/side-bar/side-bar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar d-xs-inline d-sm-inline d-md-none\">\n    <i class=\"material-icons nav-menu\">menu</i>\n    <ul class=\"side-bar-list\" style=\"padding-top:51px\">\n      <li [routerLink]=\"['/home']\">\n        <i class=\"material-icons\">\n          home\n        </i>\n        <p>&nbsp;&nbsp;&nbsp;&nbsp; Home</p>\n  \n      </li>\n      <hr>\n      \n      <li [routerLink]=\"['/sign-in']\">\n        <i class=\"material-icons\">\n          sentiment_satisfied_alt\n        </i>\n        <p>&nbsp;&nbsp;&nbsp;&nbsp; Sign-In</p>\n      </li>\n      <hr>\n      <li [routerLink]=\"['/sign-up']\" >\n        <i class=\"material-icons\">\n          pets\n        </i>\n        <p>&nbsp;&nbsp;&nbsp;&nbsp; Sign-Up</p>\n  \n      </li>\n      <hr>\n      <li [routerLink]=\"['/sign-up']\" >\n        <i class=\"material-icons\">\n            timer\n            </i>\n       <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   </p> \n       \n      </li>\n      <hr>\n      <li (click)=\"logout()\" >\n        <img class=\"logout\" src=\"./../../../assets/logout.png\" alt=\"Logout\" >\n        <p>&nbsp;&nbsp;&nbsp;&nbsp; Logout</p>\n  \n      </li>\n    </ul>\n</div>\n\n<div class=\"side-bar d-none d-md-block\">\n\n  <i class=\"material-icons menu\">menu</i>\n\n  <ul class=\"side-bar-list\">\n    <li [routerLink]=\"['/home']\">\n      <i class=\"material-icons\">\n        home\n      </i>\n      <p>&nbsp;&nbsp;&nbsp;&nbsp; Home</p>\n\n    </li>\n    \n    <hr>\n    <li [routerLink]=\"['/sign-in']\">\n      <i class=\"material-icons\">\n        sentiment_satisfied_alt\n      </i>\n      <p>&nbsp;&nbsp;&nbsp;&nbsp; Sign-In</p>\n    </li>\n      <hr>\n\n    <li [routerLink]=\"['/sign-up']\" >\n      <i class=\"material-icons\">\n        pets\n      </i>\n      <p>&nbsp;&nbsp;&nbsp;&nbsp; Sign-Up</p>\n\n    </li>\n    <hr>\n    <li [routerLink]=\"['/sign-up']\" >\n      <i class=\"material-icons\">\n          timer\n          </i>\n     <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </p> \n\n    </li>\n    <hr>\n    <li (click)=\"logout()\" >\n      <img class=\"logout\" src=\"./../../../assets/logout.png\" alt=\"Logout\" >\n      <p>&nbsp;&nbsp;&nbsp;&nbsp; Logout</p>\n\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/shared/side-bar/side-bar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.ts ***!
  \*******************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(socketService, appService, snackBar, router, _route) {
        var _this = this;
        this.socketService = socketService;
        this.appService = appService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.count = 7200;
        this.logout = function () {
            var userId = _this.appService.getUserInfoFromLocalstorage().userId;
            _this.appService.logout(userId)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('authtoken');
                    _this.socketService.exitSocket();
                    _this.router.navigate(['/sign-in']);
                }
                else {
                    _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                        duration: 5000,
                    });
                } // end condition
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
            });
        }; // end logout
    }
    SideBarComponent.prototype.ngOnInit = function () {
        this.counter = setInterval(function () {
        }, 1000);
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/shared/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/shared/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocketService = /** @class */ (function () {
    function SocketService(http, appService) {
        var _this = this;
        this.http = http;
        this.appService = appService;
        this.url = 'http://api.virtuasha.online';
        // events to be listened 
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('verifyUser', function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end verifyUser
        this.onlineUserList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on("online-user-list", function (userList) {
                    observer.next(userList);
                }); // end Socket
            }); // end Observable
        }; // end onlineUserList
        this.disconnectedSocket = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on("disconnect", function () {
                    observer.next();
                }); // end Socket
            }); // end Observable
        }; // end disconnectSocket
        // end events to be listened
        // events to be emitted
        this.setUser = function (authToken) {
            _this.socket.emit("set-user", authToken);
        }; // end setUser
        this.sendNotify = function (notifyObject) {
            _this.socket.emit('notify', notifyObject);
        }; // end send notify
        this.notify = function (userId) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on(userId, function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end notify
        //send notification data for changes in task beeen made
        this.taskNotify = function (notifyObject) {
            // friendsList to store in history for undo purpose
            var friendList = _this.appService.getUserInfoFromLocalstorage().friends;
            friendList.push(_this.appService.getUserInfoFromLocalstorage().userId);
            notifyObject.receiverId = friendList;
            if (notifyObject.type === "public") {
                _this.socket.emit('task-notify', notifyObject);
            }
        }; // end send TaskNotify
        //Listing to task chages 
        this.taskChanges = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on("task-changes", function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end notify
        // disconnect socket
        this.exitSocket = function () {
            _this.socket.disconnect();
        }; // end exit socket
        // connection is being created.
        // that handshake
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    SocketService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errorMessage);
    }; // END handleError
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/user/change-password/change-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  .background{\n    background-image: url('background.jpg');\n    min-height: -webkit-fill-available;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n  \n  .singinbtn{\n    width: 100%;\n    margin: 0px !important;\n  }"

/***/ }),

/***/ "./src/app/user/change-password/change-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <!-- Signin Input -->\n      <div class=\"col align-self-center\">\n        <div class=\"container\">\n\n          <h1 class=\"text-center\" style=\"margin-top:10%\"> Change password</h1>\n          <br>\n          <h6>Enter a new password</h6>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Password\" type=\"text\" [(ngModel)]=\"pass1\">\n          </mat-form-field>\n          <br><br>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Password\" type=\"text\" [(ngModel)]=\"pass2\">\n          </mat-form-field>\n          <br>\n          <h6>Not a user yet? <a [routerLink]=\"['/sign-up']\">SignUp</a> </h6>\n          <br>\n          <button mat-raised-button class=\"singinbtn mat-elevation-z8\" color='primary' (click)=\"changePasswordFunction()\"><i\n              class=\"material-icons\">navigate_next</i></button>\n          <br><br>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/change-password/change-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(appService, router, _route, snackBar) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this._route = _route;
        this.snackBar = snackBar;
        this.validation = function () {
            if (_this.pass1 === _this.pass2) {
                return true;
            }
            else {
                _this.snackBar.open("Please make sure you have enter same password in both feilds", "Dismiss", {
                    duration: 5000,
                });
            }
        };
        this.changePasswordFunction = function () {
            if (_this.validation()) {
                var captureId = _this._route.snapshot.paramMap.get("userId");
                var data = {
                    userId: captureId,
                    password: _this.pass1
                };
                _this.appService.changePasswordFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                            duration: 5000,
                        });
                        setTimeout(function () {
                            _this.router.navigate(['/sign-in']);
                        }, 2000);
                    }
                    else {
                        _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                            duration: 5000,
                        });
                    }
                }, function (err) {
                    _this.snackBar.open("some error occured", "Dismiss", {
                        duration: 5000,
                    });
                });
            }
        };
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/user/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/user/change-password/change-password.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  .background{\n    background-image: url('background.jpg');\n    min-height: -webkit-fill-available;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n  \n  .singinbtn{\n    width: 100%;\n    margin: 0px !important;\n  }"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <!-- Signin Input -->\n      <div class=\"col align-self-center\">\n        <div class=\"container\">\n\n          <h1 class=\"text-center\" style=\"margin-top:10%\"> FORGOT PASSWORD</h1>\n          <br>\n          <h6>Please enter your Email to get a password recovery mail.</h6>\n          <br>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\" [(ngModel)]=\"email\">\n            <mat-hint>Email seems to be Ok!</mat-hint>\n            <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n              Email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n          <br><br>\n\n          <br>\n          <h6>Don't have account yet? <a [routerLink]=\"['/sign-up']\">SignUp</a> </h6>\n          <h6 style=\"cursor:pointer\" [routerLink]=\"['/sign-in']\">Sign-in.</h6>\n          <br>\n          <button mat-raised-button class=\"singinbtn mat-elevation-z8\" color='primary' (click)=\"submit()\"><i class=\"material-icons\">navigate_next</i></button>\n          <br><br>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyErrorStateMatcher, ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(snackBar, appService, router) {
        var _this = this;
        this.snackBar = snackBar;
        this.appService = appService;
        this.router = router;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.submit = function () {
            if (!_this.email) {
                _this.snackBar.open("Please enter email", "Dismiss", {
                    duration: 5000,
                });
            }
            else {
                var data = {
                    email: _this.email
                };
                _this.appService.forgotPasswordFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                            duration: 5000,
                        });
                        setTimeout(function () {
                            _this.router.navigate(['/sign-in']);
                        }, 2000);
                    }
                    else {
                        _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                            duration: 5000,
                        });
                    }
                }, function (err) {
                    _this.snackBar.open("some error occured", "Dismiss", {
                        duration: 5000,
                    });
                });
            }
        };
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    //Validations
    ForgotPasswordComponent.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/user/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  .background{\n    background-image: url('background.jpg');\n    min-height: -webkit-fill-available;\n    background-attachment: fixed;\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n  \n  .singinbtn{\n    width: 100%;\n    margin: 0px !important;\n  }\n  \n  .toggle-margin{\n    margin: 15px !important;\n  }\n  \n  .head-up{\n    margin-top: 6% !important;\n  }\n  \n  .head-down{\n    margin-bottom: 6% !important;\n  }\n  \n  mat-form-field.mat-form-field {\n    font-size: 16px;\n  }\n  \n  .subtask-ul{\n    list-style: none;\n    padding-left: 50px;\n    white-space: nowrap;\n    overflow: hidden;\n    font-size: 0.85em;\n    background-image: url('data:image/jpeg;base64,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');\n    background-repeat: no-repeat;\n    background-size: 18px;\n    cursor: default !important;\n}\n  \n  .subtask-ul:hover{\n    list-style: none;\n    padding-left: 50px;\n    white-space: nowrap;\n    overflow: hidden;\n    cursor: default !important;\n    background-image: url('check2.jpg');\n    background-repeat: no-repeat;\n    background-size: 18px;\n }\n  \n  .div-width{\n    width: 75%;\n}"

/***/ }),

/***/ "./src/app/user/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <!-- Signin Input -->\n      <div class=\"col align-self-center\">\n        <div class=\"container\">\n          <h1 class=\"text-center head-up\"><img class=\"anime\" src=\"./../../assets/check.png\" alt=\"\"> Task Reminder</h1>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n\n              <h3 class=\"text-center\" style=\"margin-top:10%\"> hey there !!!</h3>\n              <br>\n              <h6>Signin to your account. </h6>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\" [(ngModel)]=\"email\">\n                <mat-hint [ngStyle]=\"{}\">verified email!</mat-hint>\n                <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                  umm..!enter a valid email address\n                </mat-error>\n                <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                  Email is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br><br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\">\n              </mat-form-field>\n              <br>\n              <h6>Not a user yet? <a [routerLink]=\"['/sign-up']\">SignUp</a> </h6>\n              <h6 style=\"cursor:pointer\" [routerLink]=\"['/forgot-password']\">Forgot password.</h6>\n              <br>\n              <button mat-raised-button class=\"singinbtn mat-elevation-z8\" color='primary' (click)=\"submit()\"><i class=\"material-icons\">navigate_next</i></button>\n              <br>\n              <hr>\n            </div>\n\n            <div class=\"col-md-6\">\n              <div class=\" text-center\" style=\"margin-top:10%\">\n\n                <b> Task Reminder is a real time task management application for you to take care of your health</b>\n              </div>\n              <hr>\n\n              <mat-card class=\"card mat-card-primary task-card mat-elevation-z8 anime1\">\n                <h4 class=\"task-head\">Tasks</h4>\n                <button mat-icon-button matTooltip=\"Edit\" color=\"primary\" class=\"float-right\"><i class=\"material-icons\">\n                  edit</i></button>\n                <br>\n                <br>\n\n                <hr>\n                <ul class=\"task-ul\">\n                  <li>\n                    <mat-checkbox matTooltip=\"Mark Complete\" class=\"example-margin\" color=\"primary\">\n                      Stuff to get done :-\n                    </mat-checkbox>\n\n                    <ul>\n                      <li class=\"subtask-ul\">\n                        <button class=\"costum-checkBox\" matTooltip=\"Mark Complete\">\n                          Eat Med1.\n                        </button>\n                      </li>\n                      <li class=\"subtask-ul\">\n                        <button class=\"costum-checkBox\" matTooltip=\"Mark Complete\">\n                          Eat Med2.\n                        </button>\n                      </li>\n                      <li class=\"subtask-ul\">\n                        <button class=\"costum-checkBox\" matTooltip=\"Mark Complete\">\n                          Eat Med3.\n                        </button>\n                      </li>\n                      <li class=\"subtask-ul\">\n                        <button class=\"costum-checkBox\" matTooltip=\"Mark Complete\">\n                          Get your blood work done.\n                        </button>\n                      </li>\n                    </ul>\n                  </li>\n                </ul>\n              </mat-card>\n\n              <br><br>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: MyErrorStateMatcher, SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var SigninComponent = /** @class */ (function () {
    function SigninComponent(appService, snackBar, router, _route) {
        this.appService = appService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.progress = false;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    //Validations
    SigninComponent.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    // Submit function
    SigninComponent.prototype.submit = function () {
        var _this = this;
        this.progress = true;
        // check for email
        if (this.email) {
            // check for password 
            var data = {
                email: this.email,
                password: this.password
            };
            this.appService.signinFunction(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('authtoken', apiResponse.data.authToken);
                    _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                    _this.router.navigate(['/home']);
                }
                else if (apiResponse.status === 404) {
                    _this.progress = false;
                    _this.snackBar.open("Email or Password wrong", "Dismiss", {
                        duration: 5000,
                    });
                }
                else {
                    _this.snackBar.open("" + apiResponse.message, "Dismiss", {
                        duration: 5000,
                    });
                }
            }, function (err) {
                _this.snackBar.open("some error occured", "Dismiss", {
                    duration: 5000,
                });
            });
        }
        else {
            this.snackBar.open("Please enter a valid Email and Password", "Dismiss", {
                duration: 5000,
            });
        } // check for email ends here
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/user/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/user/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n    color: #acd8c9d6;\n  }\n  \n  .example-full-width {\n    width: 100%;\n    color: black;\n  }\n  \n  .background{\n    background-image: url('background.jpg');\n    min-height: -webkit-fill-available;\n    background-attachment: fixed;\n    /* background-position: center; */\n    background-repeat: no-repeat;\n    color:black;\n    background-size: cover;\n  }\n  \n  .singinbtn{\n    width: 100%;\n    margin: 0px !important;\n    color:black;\n  }\n  \n  .example-headers-align .mat-expansion-panel-header-title, \n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n  color: black;\n}\n  \n  .example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n  color:black;\n}"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col align-self-center\">\n        <div class=\"container\">\n\n          <h1 class=\"text-center\" style=\"margin-top:4%\"> SignUp</h1>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"First name\" type=\"text\" [(ngModel)]=\"firstName\" autofocus>\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Last name\" type=\"text\" [(ngModel)]=\"lastName\" autofocus>\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-select [(value)]=\"selected\">\n              <mat-option>None</mat-option>\n              <mat-option *ngFor=\"let country of countryCode\" [value]=\"country.code\">{{ country.name }}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          &nbsp;&nbsp;&nbsp;\n          <mat-form-field>\n            <input matInput placeholder=\"Mobile number\" type=\"number\" [(ngModel)]=\"mobileNumber\" autofocus>\n          </mat-form-field>\n\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [errorStateMatcher]=\"matcher\" [(ngModel)]=\"email\" autofocus>\n            <mat-hint>Email seems to be Ok!</mat-hint>\n            <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n              Email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\" autofocus>\n          </mat-form-field>\n\n          <br>\n\n          <h6>Already have account? <a [routerLink]=\"['/sign-in']\">SignIn</a> </h6>\n          <h6>Forgot password.</h6>\n          <button mat-raised-button class=\"singinbtn mat-elevation-z8\" color='primary' (click)=\"submit()\"><i class=\"material-icons\">navigate_next</i></button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: MyErrorStateMatcher, SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, snackBar, router, _route) {
        this.appService = appService;
        this.snackBar = snackBar;
        this.router = router;
        this._route = _route;
        this.progress = false;
        this.countryCode = [];
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.getCountries();
        //to Check if the user has been invited by someone, if so store it in cookie to add him as friend.
        var userId = this._route.snapshot.queryParams.userId;
        if (userId) {
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('inviteId', userId);
        }
    };
    // get countries to get calling code of all the countries and maping them to select
    SignupComponent.prototype.getCountries = function () {
        var _this = this;
        this.appService.getAllCountry().subscribe(function (data) {
            _this.countries = data;
            _this.countries.map(function (x) {
                var obj = {
                    name: x.name,
                    code: x.callingCodes[0]
                };
                _this.countryCode.push(obj);
            });
        });
    };
    //Validations
    SignupComponent.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    // On submit function
    SignupComponent.prototype.submit = function () {
        var _this = this;
        if (!this.firstName) {
            this.snackBar.open("enter first name", "Dismiss", {
                duration: 5000,
            });
        }
        else if (!this.lastName) {
            this.snackBar.open("enter last name", "Dismiss", {
                duration: 5000,
            });
        }
        else if (!this.mobileNumber) {
            this.snackBar.open("enter mobile", "Dismiss", {
                duration: 5000,
            });
        }
        else if (!this.selected) {
            this.snackBar.open("enter country", "Dismiss", {
                duration: 5000,
            });
        }
        else if (!this.email) {
            this.snackBar.open("enter email", "Dismiss", {
                duration: 5000,
            });
        }
        else {
            this.progress = true;
            var data = {
                firstName: this.firstName,
                lastName: this.lastName,
                mobile: '',
                email: this.email,
                password: this.password,
            };
            data.mobile = "+" + this.selected + " " + this.mobileNumber;
            this.appService.signupFunction(data)
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.snackBar.open("Signup Successful", "Dismiss", {
                        duration: 5000,
                    });
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('authtoken', apiResponse.data.authToken);
                    _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                    _this.router.navigate(['/home']);
                }
                else {
                    _this.snackBar.open(apiResponse.message + ".", "Dismiss", {
                        duration: 5000,
                    });
                }
            }, function (err) {
                _this.snackBar.open("some error occured. Please try again later", "Dismiss", {
                    duration: 5000,
                });
            });
        } // end condition
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/user/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/user/change-password/change-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: 'sign-up', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] },
                    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"] },
                    { path: 'change-password/:userId', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordComponent"] }
                ])
            ],
            declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_10__["ChangePasswordComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\RITIK VERMA\Desktop\virtuasha\task\frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map