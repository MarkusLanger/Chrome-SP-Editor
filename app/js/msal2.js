/*! msal v1.4.15 2021-11-02 */
'use strict';
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Msal", [], factory);
	else if(typeof exports === 'object')
		exports["Msal"] = factory();
	else
		root["Msal"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 795:
/***/ (function(__unused_webpack_module, exports) {


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.__classPrivateFieldSet = exports.__classPrivateFieldGet = exports.__importDefault = exports.__importStar = exports.__makeTemplateObject = exports.__asyncValues = exports.__asyncDelegator = exports.__asyncGenerator = exports.__await = exports.__spreadArrays = exports.__spread = exports.__read = exports.__values = exports.__exportStar = exports.__createBinding = exports.__generator = exports.__awaiter = exports.__metadata = exports.__param = exports.__decorate = exports.__rest = exports.__assign = exports.__extends = void 0;
var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
exports.__extends = __extends;
exports.__assign = function () {
    exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}
exports.__rest = __rest;
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
exports.__decorate = __decorate;
function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
exports.__param = __param;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
}
exports.__metadata = __metadata;
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
exports.__awaiter = __awaiter;
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}
exports.__generator = __generator;
function __createBinding(o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
}
exports.__createBinding = __createBinding;
function __exportStar(m, exports) {
    for (var p in m)
        if (p !== "default" && !exports.hasOwnProperty(p))
            exports[p] = m[p];
}
exports.__exportStar = __exportStar;
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
        return m.call(o);
    if (o && typeof o.length === "number")
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
exports.__values = __values;
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
        return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
    }
    catch (error) {
        e = { error: error };
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"]))
                m.call(i);
        }
        finally {
            if (e)
                throw e.error;
        }
    }
    return ar;
}
exports.__read = __read;
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}
exports.__spread = __spread;
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
        s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}
exports.__spreadArrays = __spreadArrays;
;
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
exports.__await = __await;
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n])
        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try {
        step(g[n](v));
    }
    catch (e) {
        settle(q[0][3], e);
    } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]); }
}
exports.__asyncGenerator = __asyncGenerator;
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}
exports.__asyncDelegator = __asyncDelegator;
function __asyncValues(o) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
}
exports.__asyncValues = __asyncValues;
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
}
exports.__makeTemplateObject = __makeTemplateObject;
;
function __importStar(mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
    result.default = mod;
    return result;
}
exports.__importStar = __importStar;
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}
exports.__importDefault = __importDefault;
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}
exports.__classPrivateFieldGet = __classPrivateFieldGet;
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}
exports.__classPrivateFieldSet = __classPrivateFieldSet;


/***/ }),

/***/ 630:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Account = void 0;
var CryptoUtils_1 = __webpack_require__(453);
var StringUtils_1 = __webpack_require__(454);
/**
 * accountIdentifier       combination of idToken.uid and idToken.utid
 * homeAccountIdentifier   combination of clientInfo.uid and clientInfo.utid
 * userName                idToken.preferred_username
 * name                    idToken.name
 * idToken                 idToken
 * sid                     idToken.sid - session identifier
 * environment             idtoken.issuer (the authority that issues the token)
 */
var Account = /** @class */ (function () {
    /**
     * Creates an Account Object
     * @praram accountIdentifier
     * @param homeAccountIdentifier
     * @param userName
     * @param name
     * @param idToken
     * @param sid
     * @param environment
     */
    function Account(accountIdentifier, homeAccountIdentifier, userName, name, idTokenClaims, sid, environment) {
        this.accountIdentifier = accountIdentifier;
        this.homeAccountIdentifier = homeAccountIdentifier;
        this.userName = userName;
        this.name = name;
        // will be deprecated soon
        this.idToken = idTokenClaims;
        this.idTokenClaims = idTokenClaims;
        this.sid = sid;
        this.environment = environment;
    }
    /**
     * @hidden
     * @param idToken
     * @param clientInfo
     */
    Account.createAccount = function (idToken, clientInfo) {
        // create accountIdentifier
        var accountIdentifier = idToken.objectId || idToken.subject;
        // create homeAccountIdentifier
        var uid = clientInfo ? clientInfo.uid : "";
        var utid = clientInfo ? clientInfo.utid : "";
        var homeAccountIdentifier;
        if (!StringUtils_1.StringUtils.isEmpty(uid)) {
            homeAccountIdentifier = StringUtils_1.StringUtils.isEmpty(utid) ? CryptoUtils_1.CryptoUtils.base64Encode(uid) : CryptoUtils_1.CryptoUtils.base64Encode(uid) + "." + CryptoUtils_1.CryptoUtils.base64Encode(utid);
        }
        return new Account(accountIdentifier, homeAccountIdentifier, idToken.preferredName, idToken.name, idToken.claims, idToken.sid, idToken.issuer);
    };
    /**
     * Utils function to compare two Account objects - used to check if the same user account is logged in
     *
     * @param a1: Account object
     * @param a2: Account object
     */
    Account.compareAccounts = function (a1, a2) {
        if (!a1 || !a2) {
            return false;
        }
        if (a1.homeAccountIdentifier && a2.homeAccountIdentifier) {
            if (a1.homeAccountIdentifier === a2.homeAccountIdentifier) {
                return true;
            }
        }
        return false;
    };
    return Account;
}());
exports.Account = Account;


/***/ }),

/***/ 681:
/***/ (function(__unused_webpack_module, exports) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildResponseStateOnly = void 0;
function buildResponseStateOnly(state) {
    return {
        uniqueId: "",
        tenantId: "",
        tokenType: "",
        idToken: null,
        idTokenClaims: null,
        accessToken: "",
        scopes: null,
        expiresOn: null,
        account: null,
        accountState: state,
        fromCache: false
    };
}
exports.buildResponseStateOnly = buildResponseStateOnly;


/***/ }),

/***/ 733:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateClaimsRequest = void 0;
var ClientConfigurationError_1 = __webpack_require__(550);
function validateClaimsRequest(request) {
    if (!request.claimsRequest) {
        return;
    }
    try {
        JSON.parse(request.claimsRequest);
    }
    catch (e) {
        throw ClientConfigurationError_1.ClientConfigurationError.createClaimsRequestParsingError(e);
    }
    // TODO: More validation will be added when the server team tells us how they have actually implemented claims
}
exports.validateClaimsRequest = validateClaimsRequest;


/***/ }),

/***/ 271:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientInfo = void 0;
var CryptoUtils_1 = __webpack_require__(453);
var ClientAuthError_1 = __webpack_require__(356);
var StringUtils_1 = __webpack_require__(454);
/**
 * @hidden
 */
var ClientInfo = /** @class */ (function () {
    function ClientInfo(rawClientInfo, authority) {
        if (!rawClientInfo || StringUtils_1.StringUtils.isEmpty(rawClientInfo)) {
            this.uid = "";
            this.utid = "";
            return;
        }
        try {
            var decodedClientInfo = CryptoUtils_1.CryptoUtils.base64Decode(rawClientInfo);
            var clientInfo = JSON.parse(decodedClientInfo);
            if (clientInfo) {
                if (clientInfo.hasOwnProperty("uid")) {
                    this.uid = authority ? ClientInfo.stripPolicyFromUid(clientInfo.uid, authority) : clientInfo.uid;
                }
                if (clientInfo.hasOwnProperty("utid")) {
                    this.utid = clientInfo.utid;
                }
            }
        }
        catch (e) {
            throw ClientAuthError_1.ClientAuthError.createClientInfoDecodingError(e);
        }
    }
    Object.defineProperty(ClientInfo.prototype, "uid", {
        get: function () {
            return this._uid ? this._uid : "";
        },
        set: function (uid) {
            this._uid = uid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientInfo.prototype, "utid", {
        get: function () {
            return this._utid ? this._utid : "";
        },
        set: function (utid) {
            this._utid = utid;
        },
        enumerable: false,
        configurable: true
    });
    ClientInfo.createClientInfoFromIdToken = function (idToken, authority) {
        var clientInfo = {
            uid: idToken.subject,
            utid: ""
        };
        return new ClientInfo(CryptoUtils_1.CryptoUtils.base64Encode(JSON.stringify(clientInfo)), authority);
    };
    ClientInfo.stripPolicyFromUid = function (uid, authority) {
        var uidSegments = uid.split("-");
        // Reverse the url segments so the last one is more easily accessible
        var urlSegments = authority.split("/").reverse();
        var policy = "";
        if (!StringUtils_1.StringUtils.isEmpty(urlSegments[0])) {
            policy = urlSegments[0];
        }
        else if (urlSegments.length > 1) {
            // If the original url had a trailing slash, urlSegments[0] would be "" so take the next element
            policy = urlSegments[1];
        }
        if (uidSegments[uidSegments.length - 1] === policy) {
            // If the last segment of uid matches the last segment of authority url, remove the last segment of uid
            return uidSegments.slice(0, uidSegments.length - 1).join("-");
        }
        return uid;
    };
    ClientInfo.prototype.encodeClientInfo = function () {
        var clientInfo = JSON.stringify({ uid: this.uid, utid: this.utid });
        return CryptoUtils_1.CryptoUtils.base64Encode(clientInfo);
    };
    return ClientInfo;
}());
exports.ClientInfo = ClientInfo;


/***/ }),

/***/ 875:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildConfiguration = void 0;
var tslib_1 = __webpack_require__(795);
var Logger_1 = __webpack_require__(89);
var UrlUtils_1 = __webpack_require__(741);
/**
 * Defaults for the Configuration Options
 */
var FRAME_TIMEOUT = 6000;
var OFFSET = 300;
var NAVIGATE_FRAME_WAIT = 500;
var DEFAULT_AUTH_OPTIONS = {
    clientId: "",
    authority: null,
    validateAuthority: true,
    authorityMetadata: "",
    knownAuthorities: [],
    redirectUri: function () { return UrlUtils_1.UrlUtils.getCurrentUrl(); },
    postLogoutRedirectUri: function () { return UrlUtils_1.UrlUtils.getCurrentUrl(); },
    navigateToLoginRequestUrl: true
};
var DEFAULT_CACHE_OPTIONS = {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false
};
var DEFAULT_SYSTEM_OPTIONS = {
    logger: new Logger_1.Logger(null),
    loadFrameTimeout: FRAME_TIMEOUT,
    tokenRenewalOffsetSeconds: OFFSET,
    navigateFrameWait: NAVIGATE_FRAME_WAIT
};
var DEFAULT_FRAMEWORK_OPTIONS = {
    isAngular: false,
    unprotectedResources: new Array(),
    protectedResourceMap: new Map()
};
/**
 * MSAL function that sets the default options when not explicitly configured from app developer
 *
 * @param TAuthOptions
 * @param TCacheOptions
 * @param TSystemOptions
 * @param TFrameworkOptions
 * @param TAuthorityDataOptions
 *
 * @returns TConfiguration object
 */
function buildConfiguration(_a) {
    var auth = _a.auth, _b = _a.cache, cache = _b === void 0 ? {} : _b, _c = _a.system, system = _c === void 0 ? {} : _c, _d = _a.framework, framework = _d === void 0 ? {} : _d;
    var overlayedConfig = {
        auth: tslib_1.__assign(tslib_1.__assign({}, DEFAULT_AUTH_OPTIONS), auth),
        cache: tslib_1.__assign(tslib_1.__assign({}, DEFAULT_CACHE_OPTIONS), cache),
        system: tslib_1.__assign(tslib_1.__assign({}, DEFAULT_SYSTEM_OPTIONS), system),
        framework: tslib_1.__assign(tslib_1.__assign({}, DEFAULT_FRAMEWORK_OPTIONS), framework)
    };
    return overlayedConfig;
}
exports.buildConfiguration = buildConfiguration;


/***/ }),

/***/ 881:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IdToken = void 0;
var ClientAuthError_1 = __webpack_require__(356);
var TokenUtils_1 = __webpack_require__(94);
var StringUtils_1 = __webpack_require__(454);
/**
 * @hidden
 */
var IdToken = /** @class */ (function () {
    /* tslint:disable:no-string-literal */
    function IdToken(rawIdToken) {
        if (StringUtils_1.StringUtils.isEmpty(rawIdToken)) {
            throw ClientAuthError_1.ClientAuthError.createIdTokenNullOrEmptyError(rawIdToken);
        }
        try {
            this.rawIdToken = rawIdToken;
            this.claims = TokenUtils_1.TokenUtils.extractIdToken(rawIdToken);
            if (this.claims) {
                if (this.claims.hasOwnProperty("iss")) {
                    this.issuer = this.claims["iss"];
                }
                if (this.claims.hasOwnProperty("oid")) {
                    this.objectId = this.claims["oid"];
                }
                if (this.claims.hasOwnProperty("sub")) {
                    this.subject = this.claims["sub"];
                }
                if (this.claims.hasOwnProperty("tid")) {
                    this.tenantId = this.claims["tid"];
                }
                if (this.claims.hasOwnProperty("ver")) {
                    this.version = this.claims["ver"];
                }
                if (this.claims.hasOwnProperty("preferred_username")) {
                    this.preferredName = this.claims["preferred_username"];
                }
                else if (this.claims.hasOwnProperty("upn")) {
                    this.preferredName = this.claims["upn"];
                }
                if (this.claims.hasOwnProperty("name")) {
                    this.name = this.claims["name"];
                }
                if (this.claims.hasOwnProperty("nonce")) {
                    this.nonce = this.claims["nonce"];
                }
                if (this.claims.hasOwnProperty("exp")) {
                    this.expiration = this.claims["exp"];
                }
                if (this.claims.hasOwnProperty("home_oid")) {
                    this.homeObjectId = this.claims["home_oid"];
                }
                if (this.claims.hasOwnProperty("sid")) {
                    this.sid = this.claims["sid"];
                }
                if (this.claims.hasOwnProperty("cloud_instance_host_name")) {
                    this.cloudInstance = this.claims["cloud_instance_host_name"];
                }
                /* tslint:enable:no-string-literal */
            }
        }
        catch (e) {
            /*
             * TODO: This error here won't really every be thrown, since extractIdToken() returns null if the decodeJwt() fails.
             * Need to add better error handling here to account for being unable to decode jwts.
             */
            throw ClientAuthError_1.ClientAuthError.createIdTokenParsingError(e);
        }
    }
    return IdToken;
}());
exports.IdToken = IdToken;


/***/ }),

/***/ 89:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = exports.LogLevel = void 0;
var StringUtils_1 = __webpack_require__(454);
var packageMetadata_1 = __webpack_require__(700);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(localCallback, options) {
        if (options === void 0) { options = {}; }
        /**
         * @hidden
         */
        this.level = LogLevel.Info;
        var _a = options.correlationId, correlationId = _a === void 0 ? "" : _a, _b = options.level, level = _b === void 0 ? LogLevel.Info : _b, _c = options.piiLoggingEnabled, piiLoggingEnabled = _c === void 0 ? false : _c;
        this.localCallback = localCallback;
        this.correlationId = correlationId;
        this.level = level;
        this.piiLoggingEnabled = piiLoggingEnabled;
    }
    /**
     * @hidden
     */
    Logger.prototype.logMessage = function (logLevel, logMessage, containsPii) {
        if ((logLevel > this.level) || (!this.piiLoggingEnabled && containsPii)) {
            return;
        }
        var timestamp = new Date().toUTCString();
        var log;
        if (!StringUtils_1.StringUtils.isEmpty(this.correlationId)) {
            log = timestamp + ":" + this.correlationId + "-" + packageMetadata_1.version + "-" + LogLevel[logLevel] + (containsPii ? "-pii" : "") + " " + logMessage;
        }
        else {
            log = timestamp + ":" + packageMetadata_1.version + "-" + LogLevel[logLevel] + (containsPii ? "-pii" : "") + " " + logMessage;
        }
        this.executeCallback(logLevel, log, containsPii);
    };
    /**
     * @hidden
     */
    Logger.prototype.executeCallback = function (level, message, containsPii) {
        if (this.localCallback) {
            this.localCallback(level, message, containsPii);
        }
    };
    /**
     * @hidden
     */
    Logger.prototype.error = function (message) {
        this.logMessage(LogLevel.Error, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.errorPii = function (message) {
        this.logMessage(LogLevel.Error, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.warning = function (message) {
        this.logMessage(LogLevel.Warning, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.warningPii = function (message) {
        this.logMessage(LogLevel.Warning, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.info = function (message) {
        this.logMessage(LogLevel.Info, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.infoPii = function (message) {
        this.logMessage(LogLevel.Info, message, true);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbose = function (message) {
        this.logMessage(LogLevel.Verbose, message, false);
    };
    /**
     * @hidden
     */
    Logger.prototype.verbosePii = function (message) {
        this.logMessage(LogLevel.Verbose, message, true);
    };
    Logger.prototype.isPiiLoggingEnabled = function () {
        return this.piiLoggingEnabled;
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),

/***/ 55:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScopeSet = void 0;
var tslib_1 = __webpack_require__(795);
var ClientConfigurationError_1 = __webpack_require__(550);
var Constants_1 = __webpack_require__(91);
var ScopeSet = /** @class */ (function () {
    function ScopeSet() {
    }
    /**
     * Check if there are dup scopes in a given request
     *
     * @param cachedScopes
     * @param scopes
     */
    // TODO: Rename this, intersecting scopes isn't a great name for duplicate checker
    ScopeSet.isIntersectingScopes = function (cachedScopes, scopes) {
        var convertedCachedScopes = this.trimAndConvertArrayToLowerCase(tslib_1.__spreadArrays(cachedScopes));
        var requestScopes = this.trimAndConvertArrayToLowerCase(tslib_1.__spreadArrays(scopes));
        for (var i = 0; i < requestScopes.length; i++) {
            if (convertedCachedScopes.indexOf(requestScopes[i].toLowerCase()) > -1) {
                return true;
            }
        }
        return false;
    };
    /**
     * Check if a given scope is present in the request
     *
     * @param cachedScopes
     * @param scopes
     */
    ScopeSet.containsScope = function (cachedScopes, scopes) {
        var convertedCachedScopes = this.trimAndConvertArrayToLowerCase(tslib_1.__spreadArrays(cachedScopes));
        var requestScopes = this.trimAndConvertArrayToLowerCase(tslib_1.__spreadArrays(scopes));
        return requestScopes.every(function (value) { return convertedCachedScopes.indexOf(value.toString().toLowerCase()) >= 0; });
    };
    /**
     *  Trims and converts string to lower case
     *
     * @param scopes
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    ScopeSet.trimAndConvertToLowerCase = function (scope) {
        return scope.trim().toLowerCase();
    };
    /**
     * Performs trimAndConvertToLowerCase on string array
     * @param scopes
     */
    ScopeSet.trimAndConvertArrayToLowerCase = function (scopes) {
        var _this = this;
        return scopes.map(function (scope) { return _this.trimAndConvertToLowerCase(scope); });
    };
    /**
     * Trims each scope in scopes array
     * @param scopes
     */
    ScopeSet.trimScopes = function (scopes) {
        return scopes.map(function (scope) { return scope.trim(); });
    };
    /**
     * Remove one element from a scope array
     *
     * @param scopes
     * @param scope
     */
    // TODO: Rename this, too generic name for a function that only deals with scopes
    ScopeSet.removeElement = function (scopes, scope) {
        var scopeVal = this.trimAndConvertToLowerCase(scope);
        return scopes.filter(function (value) { return value !== scopeVal; });
    };
    /**
     * Parse the scopes into a formatted scopeList
     * @param scopes
     */
    ScopeSet.parseScope = function (scopes) {
        var scopeList = "";
        if (scopes) {
            for (var i = 0; i < scopes.length; ++i) {
                scopeList += (i !== scopes.length - 1) ? scopes[i] + " " : scopes[i];
            }
        }
        return scopeList;
    };
    /**
     * @hidden
     *
     * Used to validate the scopes input parameter requested  by the developer.
     * @param {Array<string>} scopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
     * @ignore
     */
    ScopeSet.validateInputScope = function (scopes, scopesRequired) {
        if (!scopes) {
            if (scopesRequired) {
                throw ClientConfigurationError_1.ClientConfigurationError.createScopesRequiredError(scopes);
            }
            else {
                return;
            }
        }
        // Check that scopes is an array object (also throws error if scopes == null)
        if (!Array.isArray(scopes)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createScopesNonArrayError(scopes);
        }
        // Check that scopes is not an empty array
        if (scopes.length < 1 && scopesRequired) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyScopesArrayError(scopes.toString());
        }
    };
    /**
     * @hidden
     *
     * Extracts scope value from the state sent with the authentication request.
     * @param {string} state
     * @returns {string} scope.
     * @ignore
     */
    ScopeSet.getScopeFromState = function (state) {
        if (state) {
            var splitIndex = state.indexOf(Constants_1.Constants.resourceDelimiter);
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return "";
    };
    /**
     * @ignore
     * Appends extraScopesToConsent if passed
     * @param {@link AuthenticationParameters}
     */
    ScopeSet.appendScopes = function (reqScopes, reqExtraScopesToConsent) {
        if (reqScopes) {
            var convertedExtraScopes = reqExtraScopesToConsent ? this.trimAndConvertArrayToLowerCase(tslib_1.__spreadArrays(reqExtraScopesToConsent)) : null;
            var convertedReqScopes = this.trimAndConvertArrayToLowerCase(tslib_1.__spreadArrays(reqScopes));
            return convertedExtraScopes ? tslib_1.__spreadArrays(convertedReqScopes, convertedExtraScopes) : convertedReqScopes;
        }
        return null;
    };
    // #endregion
    /**
     * @ignore
     * Returns true if the scopes array only contains openid and/or profile
     */
    ScopeSet.onlyContainsOidcScopes = function (scopes) {
        var scopesCount = scopes.length;
        var oidcScopesFound = 0;
        if (scopes.indexOf(Constants_1.Constants.openidScope) > -1) {
            oidcScopesFound += 1;
        }
        if (scopes.indexOf(Constants_1.Constants.profileScope) > -1) {
            oidcScopesFound += 1;
        }
        return (scopesCount > 0 && scopesCount === oidcScopesFound);
    };
    /**
     * @ignore
     * Returns true if the scopes array only contains openid and/or profile
     */
    ScopeSet.containsAnyOidcScopes = function (scopes) {
        var containsOpenIdScope = scopes.indexOf(Constants_1.Constants.openidScope) > -1;
        var containsProfileScope = scopes.indexOf(Constants_1.Constants.profileScope) > -1;
        return (containsOpenIdScope || containsProfileScope);
    };
    /**
     * @ignore
     * Returns true if the clientId is the only scope in the array
     */
    ScopeSet.onlyContainsClientId = function (scopes, clientId) {
        // Double negation to force false value returned in case scopes is null
        return !!scopes && (scopes.indexOf(clientId) > -1 && scopes.length === 1);
    };
    /**
     * @ignore
     * Adds missing OIDC scopes to scopes array without duplication. Since STS requires OIDC scopes for
     * all implicit flow requests, 'openid' and 'profile' should always be included in the final request
     */
    ScopeSet.appendDefaultScopes = function (scopes) {
        var extendedScopes = scopes;
        if (extendedScopes.indexOf(Constants_1.Constants.openidScope) === -1) {
            extendedScopes.push(Constants_1.Constants.openidScope);
        }
        if (extendedScopes.indexOf(Constants_1.Constants.profileScope) === -1) {
            extendedScopes.push(Constants_1.Constants.profileScope);
        }
        return extendedScopes;
    };
    /**
     * @ignore
     * Removes present OIDC scopes from scopes array.
     */
    ScopeSet.removeDefaultScopes = function (scopes) {
        return scopes.filter(function (scope) {
            return (scope !== Constants_1.Constants.openidScope && scope !== Constants_1.Constants.profileScope);
        });
    };
    /**
     * @ignore
     * Removes clientId from scopes array if included as only scope. If it's not the only scope, it is treated as a resource scope.
     * @param scopes Array<string>: Pre-normalized scopes array
     * @param clientId string: The application's clientId that is searched for in the scopes array
     */
    ScopeSet.translateClientIdIfSingleScope = function (scopes, clientId) {
        return this.onlyContainsClientId(scopes, clientId) ? Constants_1.Constants.oidcScopes : scopes;
    };
    return ScopeSet;
}());
exports.ScopeSet = ScopeSet;


/***/ }),

/***/ 436:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServerRequestParameters = void 0;
var tslib_1 = __webpack_require__(795);
var CryptoUtils_1 = __webpack_require__(453);
var Constants_1 = __webpack_require__(91);
var StringUtils_1 = __webpack_require__(454);
var ScopeSet_1 = __webpack_require__(55);
var packageMetadata_1 = __webpack_require__(700);
/**
 * Nonce: OIDC Nonce definition: https://openid.net/specs/openid-connect-core-1_0.html#IDToken
 * State: OAuth Spec: https://tools.ietf.org/html/rfc6749#section-10.12
 * @hidden
 */
var ServerRequestParameters = /** @class */ (function () {
    /**
     * Constructor
     * @param authority
     * @param clientId
     * @param scope
     * @param responseType
     * @param redirectUri
     * @param state
     */
    function ServerRequestParameters(authority, clientId, responseType, redirectUri, scopes, state, correlationId) {
        this.authorityInstance = authority;
        this.clientId = clientId;
        this.nonce = CryptoUtils_1.CryptoUtils.createNewGuid();
        // set scope to clientId if null
        this.scopes = scopes ? tslib_1.__spreadArrays(scopes) : Constants_1.Constants.oidcScopes;
        this.scopes = ScopeSet_1.ScopeSet.trimScopes(this.scopes);
        // set state (already set at top level)
        this.state = state;
        // set correlationId
        this.correlationId = correlationId;
        // telemetry information
        this.xClientSku = "MSAL.JS";
        this.xClientVer = packageMetadata_1.version;
        this.responseType = responseType;
        this.redirectUri = redirectUri;
    }
    Object.defineProperty(ServerRequestParameters.prototype, "authority", {
        get: function () {
            return this.authorityInstance ? this.authorityInstance.CanonicalAuthority : null;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @hidden
     * @ignore
     *
     * Utility to populate QueryParameters and ExtraQueryParameters to ServerRequestParamerers
     * @param request
     * @param serverAuthenticationRequest
     */
    ServerRequestParameters.prototype.populateQueryParams = function (account, request, adalIdTokenObject, silentCall) {
        var queryParameters = {};
        if (request) {
            // add the prompt parameter to serverRequestParameters if passed
            if (request.prompt) {
                this.promptValue = request.prompt;
            }
            // Add claims challenge to serverRequestParameters if passed
            if (request.claimsRequest) {
                this.claimsValue = request.claimsRequest;
            }
            // if the developer provides one of these, give preference to developer choice
            if (ServerRequestParameters.isSSOParam(request)) {
                queryParameters = this.constructUnifiedCacheQueryParameter(request, null);
            }
        }
        if (adalIdTokenObject) {
            queryParameters = this.constructUnifiedCacheQueryParameter(null, adalIdTokenObject);
        }
        /*
         * adds sid/login_hint if not populated
         * this.logger.verbose("Calling addHint parameters");
         */
        queryParameters = this.addHintParameters(account, queryParameters);
        // sanity check for developer passed extraQueryParameters
        var eQParams = request ? request.extraQueryParameters : null;
        // Populate the extraQueryParameters to be sent to the server
        this.queryParameters = ServerRequestParameters.generateQueryParametersString(queryParameters);
        this.extraQueryParameters = ServerRequestParameters.generateQueryParametersString(eQParams, silentCall);
    };
    // #region QueryParam helpers
    /**
     * Constructs extraQueryParameters to be sent to the server for the AuthenticationParameters set by the developer
     * in any login() or acquireToken() calls
     * @param idTokenObject
     * @param extraQueryParameters
     * @param sid
     * @param loginHint
     */
    // TODO: check how this behaves when domain_hint only is sent in extraparameters and idToken has no upn.
    ServerRequestParameters.prototype.constructUnifiedCacheQueryParameter = function (request, idTokenObject) {
        // preference order: account > sid > login_hint
        var ssoType;
        var ssoData;
        var serverReqParam = {};
        // if account info is passed, account.sid > account.login_hint
        if (request) {
            if (request.account) {
                var account = request.account;
                if (account.sid) {
                    ssoType = Constants_1.SSOTypes.SID;
                    ssoData = account.sid;
                }
                else if (account.userName) {
                    ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                    ssoData = account.userName;
                }
            }
            // sid from request
            else if (request.sid) {
                ssoType = Constants_1.SSOTypes.SID;
                ssoData = request.sid;
            }
            // loginHint from request
            else if (request.loginHint) {
                ssoType = Constants_1.SSOTypes.LOGIN_HINT;
                ssoData = request.loginHint;
            }
        }
        // adalIdToken retrieved from cache
        else if (idTokenObject) {
            if (idTokenObject.hasOwnProperty(Constants_1.Constants.upn)) {
                ssoType = Constants_1.SSOTypes.ID_TOKEN;
                ssoData = idTokenObject["upn"];
            }
        }
        serverReqParam = this.addSSOParameter(ssoType, ssoData);
        return serverReqParam;
    };
    /**
     * @hidden
     *
     * Adds login_hint to authorization URL which is used to pre-fill the username field of sign in page for the user if known ahead of time
     * domain_hint if added skips the email based discovery process of the user - only supported for interactive calls in implicit_flow
     * domain_req utid received as part of the clientInfo
     * login_req uid received as part of clientInfo
     * Also does a sanity check for extraQueryParameters passed by the user to ensure no repeat queryParameters
     *
     * @param {@link Account} account - Account for which the token is requested
     * @param queryparams
     * @param {@link ServerRequestParameters}
     * @ignore
     */
    ServerRequestParameters.prototype.addHintParameters = function (account, params) {
        /*
         * This is a final check for all queryParams added so far; preference order: sid > login_hint
         * sid cannot be passed along with login_hint or domain_hint, hence we check both are not populated yet in queryParameters
         */
        var qParams = params;
        if (account && !qParams[Constants_1.SSOTypes.SID]) {
            // sid - populate only if login_hint is not already populated and the account has sid
            var populateSID = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.sid && this.promptValue === Constants_1.PromptState.NONE;
            if (populateSID) {
                qParams = this.addSSOParameter(Constants_1.SSOTypes.SID, account.sid, qParams);
            }
            // login_hint - account.userName
            else {
                var populateLoginHint = !qParams[Constants_1.SSOTypes.LOGIN_HINT] && account.userName && !StringUtils_1.StringUtils.isEmpty(account.userName);
                if (populateLoginHint) {
                    qParams = this.addSSOParameter(Constants_1.SSOTypes.LOGIN_HINT, account.userName, qParams);
                }
            }
        }
        return qParams;
    };
    /**
     * Add SID to extraQueryParameters
     * @param sid
     */
    ServerRequestParameters.prototype.addSSOParameter = function (ssoType, ssoData, params) {
        var ssoParam = params || {};
        if (!ssoData) {
            return ssoParam;
        }
        switch (ssoType) {
            case Constants_1.SSOTypes.SID: {
                ssoParam[Constants_1.SSOTypes.SID] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.ID_TOKEN: {
                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                break;
            }
            case Constants_1.SSOTypes.LOGIN_HINT: {
                ssoParam[Constants_1.SSOTypes.LOGIN_HINT] = ssoData;
                break;
            }
        }
        return ssoParam;
    };
    /**
     * Utility to generate a QueryParameterString from a Key-Value mapping of extraQueryParameters passed
     * @param extraQueryParameters
     */
    ServerRequestParameters.generateQueryParametersString = function (queryParameters, silentCall) {
        var paramsString = null;
        if (queryParameters) {
            Object.keys(queryParameters).forEach(function (key) {
                // sid cannot be passed along with login_hint or domain_hint
                if (key === Constants_1.Constants.domain_hint && (silentCall || queryParameters[Constants_1.SSOTypes.SID])) {
                    return;
                }
                if (!paramsString) {
                    paramsString = key + "=" + encodeURIComponent(queryParameters[key]);
                }
                else {
                    paramsString += "&" + key + "=" + encodeURIComponent(queryParameters[key]);
                }
            });
        }
        return paramsString;
    };
    // #endregion
    /**
     * Check to see if there are SSO params set in the Request
     * @param request
     */
    ServerRequestParameters.isSSOParam = function (request) {
        return !!(request && (request.account || request.sid || request.loginHint));
    };
    /**
     * Returns the correct response_type string attribute for an acquireToken request configuration
     * @param accountsMatch boolean: Determines whether the account in the request matches the cached account
     * @param scopes Array<string>: AuthenticationRequest scopes configuration
     * @param loginScopesOnly boolean: True if the scopes array ONLY contains the clientId or any combination of OIDC scopes, without resource scopes
     */
    ServerRequestParameters.determineResponseType = function (accountsMatch, scopes) {
        // Supports getting an id_token by sending in clientId as only scope or OIDC scopes as only scopes
        if (ScopeSet_1.ScopeSet.onlyContainsOidcScopes(scopes)) {
            return Constants_1.ResponseTypes.id_token;
        }
        // If accounts match, check if OIDC scopes are included, otherwise return id_token_token
        return (accountsMatch) ? this.responseTypeForMatchingAccounts(scopes) : Constants_1.ResponseTypes.id_token_token;
    };
    /**
     * Returns the correct response_type string attribute for an acquireToken request configuration that contains an
     * account that matches the account in the MSAL cache.
     * @param scopes Array<string>: AuthenticationRequest scopes configuration
     */
    ServerRequestParameters.responseTypeForMatchingAccounts = function (scopes) {
        // Opt-into also requesting an ID token by sending in 'openid', 'profile' or both along with resource scopes when login is not necessary.
        return (ScopeSet_1.ScopeSet.containsAnyOidcScopes(scopes)) ? Constants_1.ResponseTypes.id_token_token : Constants_1.ResponseTypes.token;
    };
    return ServerRequestParameters;
}());
exports.ServerRequestParameters = ServerRequestParameters;


/***/ }),

/***/ 463:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAgentApplication = void 0;
var tslib_1 = __webpack_require__(795);
var AccessTokenKey_1 = __webpack_require__(29);
var AccessTokenValue_1 = __webpack_require__(192);
var ServerRequestParameters_1 = __webpack_require__(436);
var Authority_1 = __webpack_require__(660);
var ClientInfo_1 = __webpack_require__(271);
var IdToken_1 = __webpack_require__(881);
var AuthCache_1 = __webpack_require__(226);
var Account_1 = __webpack_require__(630);
var ScopeSet_1 = __webpack_require__(55);
var StringUtils_1 = __webpack_require__(454);
var WindowUtils_1 = __webpack_require__(758);
var TokenUtils_1 = __webpack_require__(94);
var TimeUtils_1 = __webpack_require__(78);
var UrlUtils_1 = __webpack_require__(741);
var RequestUtils_1 = __webpack_require__(52);
var ResponseUtils_1 = __webpack_require__(756);
var AuthorityFactory_1 = __webpack_require__(951);
var Configuration_1 = __webpack_require__(875);
var ClientConfigurationError_1 = __webpack_require__(550);
var AuthError_1 = __webpack_require__(986);
var ClientAuthError_1 = __webpack_require__(356);
var ServerError_1 = __webpack_require__(447);
var InteractionRequiredAuthError_1 = __webpack_require__(961);
var AuthResponse_1 = __webpack_require__(681);
var TelemetryManager_1 = tslib_1.__importDefault(__webpack_require__(478));
var ApiEvent_1 = __webpack_require__(663);
var Constants_1 = __webpack_require__(91);
var CryptoUtils_1 = __webpack_require__(453);
var TrustedAuthority_1 = __webpack_require__(405);
var AuthCacheUtils_1 = __webpack_require__(49);
// default authority
var DEFAULT_AUTHORITY = "https://login.microsoftonline.com/common";
/**
 * UserAgentApplication class
 *
 * Object Instance that the developer can use to make loginXX OR acquireTokenXX functions
 */
var UserAgentApplication = /** @class */ (function () {
    /**
     * @constructor
     * Constructor for the UserAgentApplication used to instantiate the UserAgentApplication object
     *
     * Important attributes in the Configuration object for auth are:
     * - clientID: the application ID of your application.
     * You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
     * - authority: the authority URL for your application.
     *
     * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
     * It is of the form https://login.microsoftonline.com/&lt;Enter_the_Tenant_Info_Here&gt;.
     * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
     * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
     * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
     * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
     *
     *
     * In Azure B2C, authority is of the form https://&lt;instance&gt;/tfp/&lt;tenant&gt;/&lt;policyName&gt;/
     *
     * @param {@link (Configuration:type)} configuration object for the MSAL UserAgentApplication instance
     */
    function UserAgentApplication(configuration) {
        // callbacks for token/error
        this.authResponseCallback = null;
        this.tokenReceivedCallback = null;
        this.errorReceivedCallback = null;
        // Set the Configuration
        this.config = Configuration_1.buildConfiguration(configuration);
        this.logger = this.config.system.logger;
        this.clientId = this.config.auth.clientId;
        this.inCookie = this.config.cache.storeAuthStateInCookie;
        this.telemetryManager = this.getTelemetryManagerFromConfig(this.config.system.telemetry, this.clientId);
        TrustedAuthority_1.TrustedAuthority.setTrustedAuthoritiesFromConfig(this.config.auth.validateAuthority, this.config.auth.knownAuthorities);
        AuthorityFactory_1.AuthorityFactory.saveMetadataFromConfig(this.config.auth.authority, this.config.auth.authorityMetadata);
        // if no authority is passed, set the default: "https://login.microsoftonline.com/common"
        this.authority = this.config.auth.authority || DEFAULT_AUTHORITY;
        // cache keys msal - typescript throws an error if any value other than "localStorage" or "sessionStorage" is passed
        this.cacheStorage = new AuthCache_1.AuthCache(this.clientId, this.config.cache.cacheLocation, this.inCookie);
        // Initialize window handling code
        if (!window.activeRenewals) {
            window.activeRenewals = {};
        }
        if (!window.renewStates) {
            window.renewStates = [];
        }
        if (!window.callbackMappedToRenewStates) {
            window.callbackMappedToRenewStates = {};
        }
        if (!window.promiseMappedToRenewStates) {
            window.promiseMappedToRenewStates = {};
        }
        window.msal = this;
        var urlHash = window.location.hash;
        var urlContainsHash = UrlUtils_1.UrlUtils.urlContainsHash(urlHash);
        // check if back button is pressed
        WindowUtils_1.WindowUtils.checkIfBackButtonIsPressed(this.cacheStorage);
        // On the server 302 - Redirect, handle this
        if (urlContainsHash && this.cacheStorage.isInteractionInProgress(true)) {
            var stateInfo = this.getResponseState(urlHash);
            if (stateInfo.method === Constants_1.Constants.interactionTypeRedirect) {
                this.handleRedirectAuthenticationResponse(urlHash);
            }
        }
    }
    Object.defineProperty(UserAgentApplication.prototype, "authority", {
        /**
         * Method to manage the authority URL.
         *
         * @returns {string} authority
         */
        get: function () {
            return this.authorityInstance.CanonicalAuthority;
        },
        /**
         * setter for the authority URL
         * @param {string} authority
         */
        // If the developer passes an authority, create an instance
        set: function (val) {
            this.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(val, this.config.auth.validateAuthority);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Get the current authority instance from the MSAL configuration object
     *
     * @returns {@link Authority} authority instance
     */
    UserAgentApplication.prototype.getAuthorityInstance = function () {
        return this.authorityInstance;
    };
    UserAgentApplication.prototype.handleRedirectCallback = function (authOrTokenCallback, errorReceivedCallback) {
        if (!authOrTokenCallback) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCallbackObjectError(authOrTokenCallback);
        }
        // Set callbacks
        if (errorReceivedCallback) {
            this.tokenReceivedCallback = authOrTokenCallback;
            this.errorReceivedCallback = errorReceivedCallback;
            this.logger.warning("This overload for callback is deprecated - please change the format of the callbacks to a single callback as shown: (err: AuthError, response: AuthResponse).");
        }
        else {
            this.authResponseCallback = authOrTokenCallback;
        }
        if (this.redirectError) {
            this.authErrorHandler(Constants_1.Constants.interactionTypeRedirect, this.redirectError, this.redirectResponse);
        }
        else if (this.redirectResponse) {
            this.authResponseHandler(Constants_1.Constants.interactionTypeRedirect, this.redirectResponse);
        }
    };
    /**
     * Public API to verify if the URL contains the hash with known properties
     * @param hash
     */
    UserAgentApplication.prototype.urlContainsHash = function (hash) {
        this.logger.verbose("UrlContainsHash has been called");
        return UrlUtils_1.UrlUtils.urlContainsHash(hash);
    };
    UserAgentApplication.prototype.authResponseHandler = function (interactionType, response, resolve) {
        this.logger.verbose("AuthResponseHandler has been called");
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            this.logger.verbose("Interaction type is redirect");
            if (this.errorReceivedCallback) {
                this.logger.verbose("Two callbacks were provided to handleRedirectCallback, calling success callback with response");
                this.tokenReceivedCallback(response);
            }
            else if (this.authResponseCallback) {
                this.logger.verbose("One callback was provided to handleRedirectCallback, calling authResponseCallback with response");
                this.authResponseCallback(null, response);
            }
        }
        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
            this.logger.verbose("Interaction type is popup, resolving");
            resolve(response);
        }
        else {
            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
        }
    };
    UserAgentApplication.prototype.authErrorHandler = function (interactionType, authErr, response, reject) {
        this.logger.verbose("AuthErrorHandler has been called");
        // set interaction_status to complete
        this.cacheStorage.setInteractionInProgress(false);
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            this.logger.verbose("Interaction type is redirect");
            if (this.errorReceivedCallback) {
                this.logger.verbose("Two callbacks were provided to handleRedirectCallback, calling error callback");
                this.errorReceivedCallback(authErr, response.accountState);
            }
            else if (this.authResponseCallback) {
                this.logger.verbose("One callback was provided to handleRedirectCallback, calling authResponseCallback with error");
                this.authResponseCallback(authErr, response);
            }
            else {
                this.logger.verbose("handleRedirectCallback has not been called and no callbacks are registered, throwing error");
                throw authErr;
            }
        }
        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
            this.logger.verbose("Interaction type is popup, rejecting");
            reject(authErr);
        }
        else {
            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
        }
    };
    // #endregion
    /**
     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint.
     * @param {@link (AuthenticationParameters:type)}
     */
    UserAgentApplication.prototype.loginRedirect = function (userRequest) {
        this.logger.verbose("LoginRedirect has been called");
        // validate request
        var request = RequestUtils_1.RequestUtils.validateRequest(userRequest, true, this.clientId, Constants_1.Constants.interactionTypeRedirect);
        this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, true, request, null, null);
    };
    /**
     * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    UserAgentApplication.prototype.acquireTokenRedirect = function (userRequest) {
        this.logger.verbose("AcquireTokenRedirect has been called");
        // validate request
        var request = RequestUtils_1.RequestUtils.validateRequest(userRequest, false, this.clientId, Constants_1.Constants.interactionTypeRedirect);
        this.acquireTokenInteractive(Constants_1.Constants.interactionTypeRedirect, false, request, null, null);
    };
    /**
     * Use when initiating the login process via opening a popup window in the user's browser
     *
     * @param {@link (AuthenticationParameters:type)}
     *
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    UserAgentApplication.prototype.loginPopup = function (userRequest) {
        var _this = this;
        this.logger.verbose("LoginPopup has been called");
        // validate request
        var request = RequestUtils_1.RequestUtils.validateRequest(userRequest, true, this.clientId, Constants_1.Constants.interactionTypePopup);
        var apiEvent = this.telemetryManager.createAndStartApiEvent(request.correlationId, ApiEvent_1.API_EVENT_IDENTIFIER.LoginPopup);
        return new Promise(function (resolve, reject) {
            _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, true, request, resolve, reject);
        })
            .then(function (resp) {
            _this.logger.verbose("Successfully logged in");
            _this.telemetryManager.stopAndFlushApiEvent(request.correlationId, apiEvent, true);
            return resp;
        })
            .catch(function (error) {
            _this.cacheStorage.resetTempCacheItems(request.state);
            _this.telemetryManager.stopAndFlushApiEvent(request.correlationId, apiEvent, false, error.errorCode);
            throw error;
        });
    };
    /**
     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    UserAgentApplication.prototype.acquireTokenPopup = function (userRequest) {
        var _this = this;
        this.logger.verbose("AcquireTokenPopup has been called");
        // validate request
        var request = RequestUtils_1.RequestUtils.validateRequest(userRequest, false, this.clientId, Constants_1.Constants.interactionTypePopup);
        var apiEvent = this.telemetryManager.createAndStartApiEvent(request.correlationId, ApiEvent_1.API_EVENT_IDENTIFIER.AcquireTokenPopup);
        return new Promise(function (resolve, reject) {
            _this.acquireTokenInteractive(Constants_1.Constants.interactionTypePopup, false, request, resolve, reject);
        })
            .then(function (resp) {
            _this.logger.verbose("Successfully acquired token");
            _this.telemetryManager.stopAndFlushApiEvent(request.correlationId, apiEvent, true);
            return resp;
        })
            .catch(function (error) {
            _this.cacheStorage.resetTempCacheItems(request.state);
            _this.telemetryManager.stopAndFlushApiEvent(request.correlationId, apiEvent, false, error.errorCode);
            throw error;
        });
    };
    // #region Acquire Token
    /**
     * Use when initiating the login process or when you want to obtain an access_token for your API,
     * either by redirecting the user's browser window to the authorization endpoint or via opening a popup window in the user's browser.
     * @param {@link (AuthenticationParameters:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     */
    UserAgentApplication.prototype.acquireTokenInteractive = function (interactionType, isLoginCall, request, resolve, reject) {
        var _this = this;
        this.logger.verbose("AcquireTokenInteractive has been called");
        // block the request if made from the hidden iframe
        WindowUtils_1.WindowUtils.blockReloadInHiddenIframes();
        var interactionProgress = this.cacheStorage.isInteractionInProgress(false);
        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
            this.cacheStorage.setItem(Constants_1.TemporaryCacheKeys.REDIRECT_REQUEST, "" + Constants_1.Constants.inProgress + Constants_1.Constants.resourceDelimiter + request.state);
        }
        // If already in progress, do not proceed
        if (interactionProgress) {
            var thrownError = isLoginCall ? ClientAuthError_1.ClientAuthError.createLoginInProgressError() : ClientAuthError_1.ClientAuthError.createAcquireTokenInProgressError();
            var stateOnlyResponse = AuthResponse_1.buildResponseStateOnly(this.getAccountState(request.state));
            this.cacheStorage.resetTempCacheItems(request.state);
            this.authErrorHandler(interactionType, thrownError, stateOnlyResponse, reject);
            return;
        }
        // Get the account object if a session exists
        var account;
        if (request && request.account && !isLoginCall) {
            account = request.account;
            this.logger.verbose("Account set from request");
        }
        else {
            account = this.getAccount();
            this.logger.verbose("Account set from MSAL Cache");
        }
        // If no session exists, prompt the user to login.
        if (!account && !ServerRequestParameters_1.ServerRequestParameters.isSSOParam(request)) {
            if (isLoginCall) {
                // extract ADAL id_token if exists
                var adalIdToken = this.extractADALIdToken();
                // silent login if ADAL id_token is retrieved successfully - SSO
                if (adalIdToken && !request.scopes) {
                    this.logger.info("ADAL's idToken exists. Extracting login information from ADAL's idToken");
                    var tokenRequest = this.buildIDTokenRequest(request);
                    this.silentLogin = true;
                    this.acquireTokenSilent(tokenRequest).then(function (response) {
                        _this.silentLogin = false;
                        _this.logger.info("Unified cache call is successful");
                        _this.authResponseHandler(interactionType, response, resolve);
                        return;
                    }, function (error) {
                        _this.silentLogin = false;
                        _this.logger.error("Error occurred during unified cache ATS: " + error);
                        // proceed to login since ATS failed
                        _this.acquireTokenHelper(null, interactionType, isLoginCall, request, resolve, reject);
                    });
                }
                // No ADAL token found, proceed to login
                else {
                    this.logger.verbose("Login call but no token found, proceed to login");
                    this.acquireTokenHelper(null, interactionType, isLoginCall, request, resolve, reject);
                }
            }
            // AcquireToken call, but no account or context given, so throw error
            else {
                this.logger.verbose("AcquireToken call, no context or account given");
                this.logger.info("User login is required");
                var stateOnlyResponse = AuthResponse_1.buildResponseStateOnly(this.getAccountState(request.state));
                this.cacheStorage.resetTempCacheItems(request.state);
                this.authErrorHandler(interactionType, ClientAuthError_1.ClientAuthError.createUserLoginRequiredError(), stateOnlyResponse, reject);
                return;
            }
        }
        // User session exists
        else {
            this.logger.verbose("User session exists, login not required");
            this.acquireTokenHelper(account, interactionType, isLoginCall, request, resolve, reject);
        }
    };
    /**
     * @hidden
     * @ignore
     * Helper function to acquireToken
     *
     */
    UserAgentApplication.prototype.acquireTokenHelper = function (account, interactionType, isLoginCall, request, resolve, reject) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var requestSignature, serverAuthenticationRequest, acquireTokenAuthority, popUpWindow, responseType, loginStartPage, urlNavigate, hash, error_1, navigate, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.verbose("AcquireTokenHelper has been called");
                        this.logger.verbose("Interaction type: " + interactionType + ". isLoginCall: " + isLoginCall);
                        // Track the acquireToken progress
                        this.cacheStorage.setInteractionInProgress(true);
                        requestSignature = request.scopes ? request.scopes.join(" ").toLowerCase() : Constants_1.Constants.oidcScopes.join(" ");
                        this.logger.verbosePii("Request signature: " + requestSignature);
                        acquireTokenAuthority = (request && request.authority) ? AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, this.config.auth.validateAuthority, request.authorityMetadata) : this.authorityInstance;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 11, , 12]);
                        if (!!acquireTokenAuthority.hasCachedMetadata()) return [3 /*break*/, 3];
                        this.logger.verbose("No cached metadata for authority");
                        return [4 /*yield*/, AuthorityFactory_1.AuthorityFactory.saveMetadataFromNetwork(acquireTokenAuthority, this.telemetryManager, request.correlationId)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.logger.verbose("Cached metadata found for authority");
                        _a.label = 4;
                    case 4:
                        responseType = isLoginCall ? Constants_1.ResponseTypes.id_token : this.getTokenType(account, request.scopes);
                        loginStartPage = request.redirectStartPage || window.location.href;
                        serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(acquireTokenAuthority, this.clientId, responseType, this.getRedirectUri(request && request.redirectUri), request.scopes, request.state, request.correlationId);
                        this.logger.verbose("Finished building server authentication request");
                        this.updateCacheEntries(serverAuthenticationRequest, account, isLoginCall, loginStartPage);
                        this.logger.verbose("Updating cache entries");
                        // populate QueryParameters (sid/login_hint) and any other extraQueryParameters set by the developer
                        serverAuthenticationRequest.populateQueryParams(account, request);
                        this.logger.verbose("Query parameters populated from account");
                        urlNavigate = UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest) + Constants_1.Constants.response_mode_fragment;
                        // set state in cache
                        if (interactionType === Constants_1.Constants.interactionTypeRedirect) {
                            if (!isLoginCall) {
                                this.cacheStorage.setItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.STATE_ACQ_TOKEN, request.state), serverAuthenticationRequest.state, this.inCookie);
                                this.logger.verbose("State cached for redirect");
                                this.logger.verbosePii("State cached: " + serverAuthenticationRequest.state);
                            }
                            else {
                                this.logger.verbose("Interaction type redirect but login call is true. State not cached");
                            }
                        }
                        else if (interactionType === Constants_1.Constants.interactionTypePopup) {
                            window.renewStates.push(serverAuthenticationRequest.state);
                            window.requestType = isLoginCall ? Constants_1.Constants.login : Constants_1.Constants.renewToken;
                            this.logger.verbose("State saved to window");
                            this.logger.verbosePii("State saved: " + serverAuthenticationRequest.state);
                            // Register callback to capture results from server
                            this.registerCallback(serverAuthenticationRequest.state, requestSignature, resolve, reject);
                        }
                        else {
                            this.logger.verbose("Invalid interaction error. State not cached");
                            throw ClientAuthError_1.ClientAuthError.createInvalidInteractionTypeError();
                        }
                        if (!(interactionType === Constants_1.Constants.interactionTypePopup)) return [3 /*break*/, 9];
                        this.logger.verbose("Interaction type is popup. Generating popup window");
                        // Generate a popup window
                        try {
                            popUpWindow = this.openPopup(urlNavigate, "msal", Constants_1.Constants.popUpWidth, Constants_1.Constants.popUpHeight);
                            // Push popup window handle onto stack for tracking
                            WindowUtils_1.WindowUtils.trackPopup(popUpWindow);
                        }
                        catch (e) {
                            this.logger.info(ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code + ":" + ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
                            this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.code);
                            this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR_DESC, ClientAuthError_1.ClientAuthErrorMessage.popUpWindowError.desc);
                            if (reject) {
                                reject(ClientAuthError_1.ClientAuthError.createPopupWindowError());
                                return [2 /*return*/];
                            }
                        }
                        if (!popUpWindow) return [3 /*break*/, 8];
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, WindowUtils_1.WindowUtils.monitorPopupForHash(popUpWindow, this.config.system.loadFrameTimeout, urlNavigate, this.logger)];
                    case 6:
                        hash = _a.sent();
                        this.handleAuthenticationResponse(hash);
                        // Request completed successfully, set to completed
                        this.cacheStorage.setInteractionInProgress(false);
                        this.logger.info("Closing popup window");
                        // TODO: Check how this can be extracted for any framework specific code?
                        if (this.config.framework.isAngular) {
                            this.broadcast("msal:popUpHashChanged", hash);
                        }
                        WindowUtils_1.WindowUtils.closePopups();
                        return [3 /*break*/, 8];
                    case 7:
                        error_1 = _a.sent();
                        if (reject) {
                            reject(error_1);
                        }
                        if (this.config.framework.isAngular) {
                            this.broadcast("msal:popUpClosed", error_1.errorCode + Constants_1.Constants.resourceDelimiter + error_1.errorMessage);
                        }
                        else {
                            // Request failed, set to canceled
                            this.cacheStorage.setInteractionInProgress(false);
                            popUpWindow.close();
                        }
                        return [3 /*break*/, 8];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        // If onRedirectNavigate is implemented, invoke it and provide urlNavigate
                        if (request.onRedirectNavigate) {
                            this.logger.verbose("Invoking onRedirectNavigate callback");
                            navigate = request.onRedirectNavigate(urlNavigate);
                            // Returning false from onRedirectNavigate will stop navigation
                            if (navigate !== false) {
                                this.logger.verbose("onRedirectNavigate did not return false, navigating");
                                this.navigateWindow(urlNavigate);
                            }
                            else {
                                this.logger.verbose("onRedirectNavigate returned false, stopping navigation");
                            }
                        }
                        else {
                            // Otherwise, perform navigation
                            this.logger.verbose("Navigating window to urlNavigate");
                            this.navigateWindow(urlNavigate);
                        }
                        _a.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        err_1 = _a.sent();
                        this.logger.error(err_1);
                        this.cacheStorage.resetTempCacheItems(request.state);
                        this.authErrorHandler(interactionType, ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err_1.toString), AuthResponse_1.buildResponseStateOnly(request.state), reject);
                        if (popUpWindow) {
                            popUpWindow.close();
                        }
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * API interfacing idToken request when applications already have a session/hint acquired by authorization client applications
     * @param request
     */
    UserAgentApplication.prototype.ssoSilent = function (request) {
        this.logger.verbose("ssoSilent has been called");
        // throw an error on an empty request
        if (!request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        // throw an error on no hints passed
        if (!request.sid && !request.loginHint) {
            throw ClientConfigurationError_1.ClientConfigurationError.createSsoSilentError();
        }
        return this.acquireTokenSilent(tslib_1.__assign(tslib_1.__assign({}, request), { scopes: Constants_1.Constants.oidcScopes }));
    };
    /**
     * Use this function to obtain a token before every call to the API / resource provider
     *
     * MSAL return's a cached token when available
     * Or it send's a request to the STS to obtain a new token using a hidden iframe.
     *
     * @param {@link AuthenticationParameters}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthResponse>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     *
     */
    UserAgentApplication.prototype.acquireTokenSilent = function (userRequest) {
        var _this = this;
        this.logger.verbose("AcquireTokenSilent has been called");
        // validate the request
        var request = RequestUtils_1.RequestUtils.validateRequest(userRequest, false, this.clientId, Constants_1.Constants.interactionTypeSilent);
        var apiEvent = this.telemetryManager.createAndStartApiEvent(request.correlationId, ApiEvent_1.API_EVENT_IDENTIFIER.AcquireTokenSilent);
        var requestSignature = RequestUtils_1.RequestUtils.createRequestSignature(request);
        return new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var scope, account, adalIdToken, responseType, serverAuthenticationRequest, adalIdTokenObject, userContainedClaims, authErr, cacheResultResponse, logMessage, err_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // block the request if made from the hidden iframe
                        WindowUtils_1.WindowUtils.blockReloadInHiddenIframes();
                        scope = request.scopes.join(" ").toLowerCase();
                        this.logger.verbosePii("Serialized scopes: " + scope);
                        if (request.account) {
                            account = request.account;
                            this.logger.verbose("Account set from request");
                        }
                        else {
                            account = this.getAccount();
                            this.logger.verbose("Account set from MSAL Cache");
                        }
                        adalIdToken = this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
                        // In the event of no account being passed in the config, no session id, and no pre-existing adalIdToken, user will need to log in
                        if (!account && !(request.sid || request.loginHint) && StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
                            this.logger.info("User login is required");
                            // The promise rejects with a UserLoginRequiredError, which should be caught and user should be prompted to log in interactively
                            return [2 /*return*/, reject(ClientAuthError_1.ClientAuthError.createUserLoginRequiredError())];
                        }
                        responseType = this.getTokenType(account, request.scopes);
                        this.logger.verbose("Response type: " + responseType);
                        serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, this.config.auth.validateAuthority, request.authorityMetadata), this.clientId, responseType, this.getRedirectUri(request.redirectUri), request.scopes, request.state, request.correlationId);
                        this.logger.verbose("Finished building server authentication request");
                        // populate QueryParameters (sid/login_hint) and any other extraQueryParameters set by the developer
                        if (ServerRequestParameters_1.ServerRequestParameters.isSSOParam(request) || account) {
                            serverAuthenticationRequest.populateQueryParams(account, request, null, true);
                            this.logger.verbose("Query parameters populated from existing SSO or account");
                        }
                        // if user didn't pass login_hint/sid and adal's idtoken is present, extract the login_hint from the adalIdToken
                        else if (!account && !StringUtils_1.StringUtils.isEmpty(adalIdToken)) {
                            adalIdTokenObject = TokenUtils_1.TokenUtils.extractIdToken(adalIdToken);
                            this.logger.verbose("ADAL's idToken exists. Extracting login information from ADAL's idToken to populate query parameters");
                            serverAuthenticationRequest.populateQueryParams(account, null, adalIdTokenObject, true);
                        }
                        else {
                            this.logger.verbose("No additional query parameters added");
                        }
                        userContainedClaims = request.claimsRequest || serverAuthenticationRequest.claimsValue;
                        // If request.forceRefresh is set to true, force a request for a new token instead of getting it from the cache
                        if (!userContainedClaims && !request.forceRefresh) {
                            try {
                                cacheResultResponse = this.getCachedToken(serverAuthenticationRequest, account);
                            }
                            catch (e) {
                                authErr = e;
                            }
                        }
                        if (!cacheResultResponse) return [3 /*break*/, 1];
                        this.logger.verbose("Token found in cache lookup");
                        this.logger.verbosePii("Scopes found: " + JSON.stringify(cacheResultResponse.scopes));
                        resolve(cacheResultResponse);
                        return [2 /*return*/, null];
                    case 1:
                        if (!authErr) return [3 /*break*/, 2];
                        this.logger.infoPii(authErr.errorCode + ":" + authErr.errorMessage);
                        reject(authErr);
                        return [2 /*return*/, null];
                    case 2:
                        logMessage = void 0;
                        if (userContainedClaims) {
                            logMessage = "Skipped cache lookup since claims were given";
                        }
                        else if (request.forceRefresh) {
                            logMessage = "Skipped cache lookup since request.forceRefresh option was set to true";
                        }
                        else {
                            logMessage = "No valid token found in cache lookup";
                        }
                        this.logger.verbose(logMessage);
                        // Cache result can return null if cache is empty. In that case, set authority to default value if no authority is passed to the API.
                        if (!serverAuthenticationRequest.authorityInstance) {
                            serverAuthenticationRequest.authorityInstance = request.authority ?
                                AuthorityFactory_1.AuthorityFactory.CreateInstance(request.authority, this.config.auth.validateAuthority, request.authorityMetadata)
                                : this.authorityInstance;
                        }
                        this.logger.verbosePii("Authority instance: " + serverAuthenticationRequest.authority);
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 7, , 8]);
                        if (!!serverAuthenticationRequest.authorityInstance.hasCachedMetadata()) return [3 /*break*/, 5];
                        this.logger.verbose("No cached metadata for authority");
                        return [4 /*yield*/, AuthorityFactory_1.AuthorityFactory.saveMetadataFromNetwork(serverAuthenticationRequest.authorityInstance, this.telemetryManager, request.correlationId)];
                    case 4:
                        _a.sent();
                        this.logger.verbose("Authority has been updated with endpoint discovery response");
                        return [3 /*break*/, 6];
                    case 5:
                        this.logger.verbose("Cached metadata found for authority");
                        _a.label = 6;
                    case 6:
                        /*
                         * refresh attempt with iframe
                         * Already renewing for this scope, callback when we get the token.
                         */
                        if (window.activeRenewals[requestSignature]) {
                            this.logger.verbose("Renewing token in progress. Registering callback");
                            // Active renewals contains the state for each renewal.
                            this.registerCallback(window.activeRenewals[requestSignature], requestSignature, resolve, reject);
                        }
                        else {
                            if (request.scopes && ScopeSet_1.ScopeSet.onlyContainsOidcScopes(request.scopes)) {
                                /*
                                 * App uses idToken to send to api endpoints
                                 * Default scope is tracked as OIDC scopes to store this token
                                 */
                                this.logger.verbose("OpenID Connect scopes only, renewing idToken");
                                this.silentLogin = true;
                                this.renewIdToken(requestSignature, resolve, reject, account, serverAuthenticationRequest);
                            }
                            else {
                                // renew access token
                                this.logger.verbose("Renewing access token");
                                this.renewToken(requestSignature, resolve, reject, account, serverAuthenticationRequest);
                            }
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        err_2 = _a.sent();
                        this.logger.error(err_2);
                        reject(ClientAuthError_1.ClientAuthError.createEndpointResolutionError(err_2.toString()));
                        return [2 /*return*/, null];
                    case 8: return [2 /*return*/];
                }
            });
        }); })
            .then(function (res) {
            _this.logger.verbose("Successfully acquired token");
            _this.telemetryManager.stopAndFlushApiEvent(request.correlationId, apiEvent, true);
            return res;
        })
            .catch(function (error) {
            _this.cacheStorage.resetTempCacheItems(request.state);
            _this.telemetryManager.stopAndFlushApiEvent(request.correlationId, apiEvent, false, error.errorCode);
            throw error;
        });
    };
    // #endregion
    // #region Popup Window Creation
    /**
     * @hidden
     *
     * Configures popup window for login.
     *
     * @param urlNavigate
     * @param title
     * @param popUpWidth
     * @param popUpHeight
     * @ignore
     * @hidden
     */
    UserAgentApplication.prototype.openPopup = function (urlNavigate, title, popUpWidth, popUpHeight) {
        this.logger.verbose("OpenPopup has been called");
        try {
            /**
             * adding winLeft and winTop to account for dual monitor
             * using screenLeft and screenTop for IE8 and earlier
             */
            var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
            var winTop = window.screenTop ? window.screenTop : window.screenY;
            /**
             * window.innerWidth displays browser window"s height and width excluding toolbars
             * using document.documentElement.clientWidth for IE8 and earlier
             */
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var left = ((width / 2) - (popUpWidth / 2)) + winLeft;
            var top = ((height / 2) - (popUpHeight / 2)) + winTop;
            // open the window
            var popupWindow = window.open(urlNavigate, title, "width=" + popUpWidth + ", height=" + popUpHeight + ", top=" + top + ", left=" + left + ", scrollbars=yes");
            if (!popupWindow) {
                throw ClientAuthError_1.ClientAuthError.createPopupWindowError();
            }
            if (popupWindow.focus) {
                popupWindow.focus();
            }
            return popupWindow;
        }
        catch (e) {
            this.cacheStorage.setInteractionInProgress(false);
            throw ClientAuthError_1.ClientAuthError.createPopupWindowError(e.toString());
        }
    };
    // #endregion
    // #region Iframe Management
    /**
     * @hidden
     * Calling _loadFrame but with a timeout to signal failure in loadframeStatus. Callbacks are left.
     * registered when network errors occur and subsequent token requests for same resource are registered to the pending request.
     * @ignore
     */
    UserAgentApplication.prototype.loadIframeTimeout = function (urlNavigate, frameName, requestSignature) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var expectedState, iframe, _a, hash, error_2;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        expectedState = window.activeRenewals[requestSignature];
                        this.logger.verbosePii("Set loading state to pending for: " + requestSignature + ":" + expectedState);
                        this.cacheStorage.setItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.RENEW_STATUS, expectedState), Constants_1.Constants.inProgress);
                        if (!this.config.system.navigateFrameWait) return [3 /*break*/, 2];
                        return [4 /*yield*/, WindowUtils_1.WindowUtils.loadFrame(urlNavigate, frameName, this.config.system.navigateFrameWait, this.logger)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = WindowUtils_1.WindowUtils.loadFrameSync(urlNavigate, frameName, this.logger);
                        _b.label = 3;
                    case 3:
                        iframe = _a;
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, WindowUtils_1.WindowUtils.monitorIframeForHash(iframe.contentWindow, this.config.system.loadFrameTimeout, urlNavigate, this.logger)];
                    case 5:
                        hash = _b.sent();
                        if (hash) {
                            this.handleAuthenticationResponse(hash);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _b.sent();
                        if (this.cacheStorage.getItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.RENEW_STATUS, expectedState)) === Constants_1.Constants.inProgress) {
                            // fail the iframe session if it's in pending state
                            this.logger.verbose("Loading frame has timed out after: " + (this.config.system.loadFrameTimeout / 1000) + " seconds for scope/authority " + requestSignature + ":" + expectedState);
                            // Error after timeout
                            if (expectedState && window.callbackMappedToRenewStates[expectedState]) {
                                window.callbackMappedToRenewStates[expectedState](null, error_2);
                            }
                            this.cacheStorage.removeItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.RENEW_STATUS, expectedState));
                        }
                        WindowUtils_1.WindowUtils.removeHiddenIframe(iframe);
                        throw error_2;
                    case 7:
                        WindowUtils_1.WindowUtils.removeHiddenIframe(iframe);
                        return [2 /*return*/];
                }
            });
        });
    };
    // #endregion
    // #region General Helpers
    /**
     * @hidden
     * Used to redirect the browser to the STS authorization endpoint
     * @param {string} urlNavigate - URL of the authorization endpoint
     */
    UserAgentApplication.prototype.navigateWindow = function (urlNavigate, popupWindow) {
        // Navigate if valid URL
        if (urlNavigate && !StringUtils_1.StringUtils.isEmpty(urlNavigate)) {
            var navigateWindow = popupWindow ? popupWindow : window;
            var logMessage = popupWindow ? "Navigated Popup window to:" + urlNavigate : "Navigate to:" + urlNavigate;
            this.logger.infoPii(logMessage);
            navigateWindow.location.assign(urlNavigate);
        }
        else {
            this.logger.info("Navigate url is empty");
            throw AuthError_1.AuthError.createUnexpectedError("Navigate url is empty");
        }
    };
    /**
     * @hidden
     * Used to add the developer requested callback to the array of callbacks for the specified scopes. The updated array is stored on the window object
     * @param {string} expectedState - Unique state identifier (guid).
     * @param {string} scope - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {Function} resolve - The resolve function of the promise object.
     * @param {Function} reject - The reject function of the promise object.
     * @ignore
     */
    UserAgentApplication.prototype.registerCallback = function (expectedState, requestSignature, resolve, reject) {
        var _this = this;
        // track active renewals
        window.activeRenewals[requestSignature] = expectedState;
        // initialize callbacks mapped array
        if (!window.promiseMappedToRenewStates[expectedState]) {
            window.promiseMappedToRenewStates[expectedState] = [];
        }
        // indexing on the current state, push the callback params to callbacks mapped
        window.promiseMappedToRenewStates[expectedState].push({ resolve: resolve, reject: reject });
        // Store the server response in the current window??
        if (!window.callbackMappedToRenewStates[expectedState]) {
            window.callbackMappedToRenewStates[expectedState] = function (response, error) {
                // reset active renewals
                delete window.activeRenewals[requestSignature];
                // for all promiseMappedtoRenewStates for a given 'state' - call the reject/resolve with error/token respectively
                for (var i = 0; i < window.promiseMappedToRenewStates[expectedState].length; ++i) {
                    try {
                        if (error) {
                            window.promiseMappedToRenewStates[expectedState][i].reject(error);
                        }
                        else if (response) {
                            window.promiseMappedToRenewStates[expectedState][i].resolve(response);
                        }
                        else {
                            _this.cacheStorage.resetTempCacheItems(expectedState);
                            throw AuthError_1.AuthError.createUnexpectedError("Error and response are both null");
                        }
                    }
                    catch (e) {
                        _this.logger.warning(e);
                    }
                }
                // reset
                delete window.promiseMappedToRenewStates[expectedState];
                delete window.callbackMappedToRenewStates[expectedState];
            };
        }
    };
    // #endregion
    // #region Logout
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     */
    UserAgentApplication.prototype.logout = function (correlationId) {
        this.logger.verbose("Logout has been called");
        this.logoutAsync(correlationId);
    };
    /**
     * Async version of logout(). Use to log out the current user.
     * @param correlationId Request correlationId
     */
    UserAgentApplication.prototype.logoutAsync = function (correlationId) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var requestCorrelationId, apiEvent, correlationIdParam, postLogoutQueryParam, urlNavigate, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestCorrelationId = correlationId || CryptoUtils_1.CryptoUtils.createNewGuid();
                        apiEvent = this.telemetryManager.createAndStartApiEvent(requestCorrelationId, ApiEvent_1.API_EVENT_IDENTIFIER.Logout);
                        this.clearCache();
                        this.account = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        if (!!this.authorityInstance.hasCachedMetadata()) return [3 /*break*/, 3];
                        this.logger.verbose("No cached metadata for authority");
                        return [4 /*yield*/, AuthorityFactory_1.AuthorityFactory.saveMetadataFromNetwork(this.authorityInstance, this.telemetryManager, correlationId)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.logger.verbose("Cached metadata found for authority");
                        _a.label = 4;
                    case 4:
                        correlationIdParam = "client-request-id=" + requestCorrelationId;
                        postLogoutQueryParam = void 0;
                        if (this.getPostLogoutRedirectUri()) {
                            postLogoutQueryParam = "&post_logout_redirect_uri=" + encodeURIComponent(this.getPostLogoutRedirectUri());
                            this.logger.verbose("redirectUri found and set");
                        }
                        else {
                            postLogoutQueryParam = "";
                            this.logger.verbose("No redirectUri set for app. postLogoutQueryParam is empty");
                        }
                        urlNavigate = void 0;
                        if (this.authorityInstance.EndSessionEndpoint) {
                            urlNavigate = this.authorityInstance.EndSessionEndpoint + "?" + correlationIdParam + postLogoutQueryParam;
                            this.logger.verbose("EndSessionEndpoint found and urlNavigate set");
                            this.logger.verbosePii("urlNavigate set to: " + this.authorityInstance.EndSessionEndpoint);
                        }
                        else {
                            urlNavigate = this.authority + "oauth2/v2.0/logout?" + correlationIdParam + postLogoutQueryParam;
                            this.logger.verbose("No endpoint, urlNavigate set to default");
                        }
                        this.telemetryManager.stopAndFlushApiEvent(requestCorrelationId, apiEvent, true);
                        this.logger.verbose("Navigating window to urlNavigate");
                        this.navigateWindow(urlNavigate);
                        return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        this.telemetryManager.stopAndFlushApiEvent(requestCorrelationId, apiEvent, false, error_3.errorCode);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @hidden
     * Clear all access tokens and ID tokens in the cache.
     * @ignore
     */
    UserAgentApplication.prototype.clearCache = function () {
        this.logger.verbose("Clearing cache");
        window.renewStates = [];
        var tokenCacheItems = this.cacheStorage.getAllTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < tokenCacheItems.length; i++) {
            this.cacheStorage.removeItem(JSON.stringify(tokenCacheItems[i].key));
        }
        this.cacheStorage.resetCacheItems();
        this.cacheStorage.clearMsalCookie();
        this.logger.verbose("Cache cleared");
    };
    /**
     * @hidden
     * Clear a given access token from the cache.
     *
     * @param accessToken
     */
    UserAgentApplication.prototype.clearCacheForScope = function (accessToken) {
        this.logger.verbose("Clearing access token from cache");
        var accessTokenItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenItems.length; i++) {
            var token = accessTokenItems[i];
            if (token.value.accessToken === accessToken) {
                this.cacheStorage.removeItem(JSON.stringify(token.key));
                this.logger.verbosePii("Access token removed: " + token.key);
            }
        }
    };
    // #endregion
    // #region Response
    /**
     * @hidden
     * @ignore
     * Checks if the redirect response is received from the STS. In case of redirect, the url fragment has either id_token, access_token or error.
     * @param {string} hash - Hash passed from redirect page.
     * @returns {Boolean} - true if response contains id_token, access_token or error, false otherwise.
     */
    UserAgentApplication.prototype.isCallback = function (hash) {
        this.logger.info("isCallback will be deprecated in favor of urlContainsHash in MSAL.js v2.0.");
        this.logger.verbose("isCallback has been called");
        return UrlUtils_1.UrlUtils.urlContainsHash(hash);
    };
    /**
     * @hidden
     * Used to call the constructor callback with the token/error
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.processCallBack = function (hash, respStateInfo, parentCallback) {
        this.logger.info("ProcessCallBack has been called. Processing callback from redirect response");
        // get the state info from the hash
        var stateInfo = respStateInfo;
        if (!stateInfo) {
            this.logger.verbose("StateInfo is null, getting stateInfo from hash");
            stateInfo = this.getResponseState(hash);
        }
        var response;
        var authErr;
        // Save the token info from the hash
        try {
            response = this.saveTokenFromHash(hash, stateInfo);
        }
        catch (err) {
            authErr = err;
        }
        try {
            // Clear the cookie in the hash
            this.cacheStorage.clearMsalCookie(stateInfo.state);
            var accountState = this.getAccountState(stateInfo.state);
            if (response) {
                if ((stateInfo.requestType === Constants_1.Constants.renewToken) || response.accessToken) {
                    if (window.parent !== window) {
                        this.logger.verbose("Window is in iframe, acquiring token silently");
                    }
                    else {
                        this.logger.verbose("Acquiring token interactive in progress");
                    }
                    this.logger.verbose("Response tokenType set to " + Constants_1.ServerHashParamKeys.ACCESS_TOKEN);
                    response.tokenType = Constants_1.ServerHashParamKeys.ACCESS_TOKEN;
                }
                else if (stateInfo.requestType === Constants_1.Constants.login) {
                    this.logger.verbose("Response tokenType set to " + Constants_1.ServerHashParamKeys.ID_TOKEN);
                    response.tokenType = Constants_1.ServerHashParamKeys.ID_TOKEN;
                }
                if (!parentCallback) {
                    this.logger.verbose("Setting redirectResponse");
                    this.redirectResponse = response;
                    return;
                }
            }
            else if (!parentCallback) {
                this.logger.verbose("Response is null, setting redirectResponse with state");
                this.redirectResponse = AuthResponse_1.buildResponseStateOnly(accountState);
                this.redirectError = authErr;
                this.cacheStorage.resetTempCacheItems(stateInfo.state);
                return;
            }
            this.logger.verbose("Calling callback provided to processCallback");
            parentCallback(response, authErr);
        }
        catch (err) {
            this.logger.error("Error occurred in token received callback function: " + err);
            throw ClientAuthError_1.ClientAuthError.createErrorInCallbackFunction(err.toString());
        }
    };
    /**
     * @hidden
     * This method must be called for processing the response received from the STS if using popups or iframes. It extracts the hash, processes the token or error
     * information and saves it in the cache. It then resolves the promises with the result.
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.handleAuthenticationResponse = function (hash) {
        this.logger.verbose("HandleAuthenticationResponse has been called");
        // retrieve the hash
        var locationHash = hash || window.location.hash;
        // if (window.parent !== window), by using self, window.parent becomes equal to window in getResponseState method specifically
        var stateInfo = this.getResponseState(locationHash);
        this.logger.verbose("Obtained state from response");
        var tokenResponseCallback = window.callbackMappedToRenewStates[stateInfo.state];
        this.processCallBack(locationHash, stateInfo, tokenResponseCallback);
    };
    /**
     * @hidden
     * This method must be called for processing the response received from the STS when using redirect flows. It extracts the hash, processes the token or error
     * information and saves it in the cache. The result can then be accessed by user registered callbacks.
     * @param {string} [hash=window.location.hash] - Hash fragment of Url.
     */
    UserAgentApplication.prototype.handleRedirectAuthenticationResponse = function (hash) {
        this.logger.info("Returned from redirect url");
        this.logger.verbose("HandleRedirectAuthenticationResponse has been called");
        // clear hash from window
        WindowUtils_1.WindowUtils.clearUrlFragment(window);
        this.logger.verbose("Window.location.hash cleared");
        // if (window.parent !== window), by using self, window.parent becomes equal to window in getResponseState method specifically
        var stateInfo = this.getResponseState(hash);
        // if set to navigate to loginRequest page post login
        if (this.config.auth.navigateToLoginRequestUrl && window.parent === window) {
            this.logger.verbose("Window.parent is equal to window, not in popup or iframe. Navigation to login request url after login turned on");
            var loginRequestUrl = this.cacheStorage.getItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.LOGIN_REQUEST, stateInfo.state), this.inCookie);
            // Redirect to home page if login request url is null (real null or the string null)
            if (!loginRequestUrl || loginRequestUrl === "null") {
                this.logger.error("Unable to get valid login request url from cache, redirecting to home page");
                window.location.assign("/");
                return;
            }
            else {
                this.logger.verbose("Valid login request url obtained from cache");
                var currentUrl = UrlUtils_1.UrlUtils.removeHashFromUrl(window.location.href);
                var finalRedirectUrl = UrlUtils_1.UrlUtils.removeHashFromUrl(loginRequestUrl);
                if (currentUrl !== finalRedirectUrl) {
                    this.logger.verbose("Current url is not login request url, navigating");
                    this.logger.verbosePii("CurrentUrl: " + currentUrl + ", finalRedirectUrl: " + finalRedirectUrl);
                    window.location.assign("" + finalRedirectUrl + hash);
                    return;
                }
                else {
                    this.logger.verbose("Current url matches login request url");
                    var loginRequestUrlComponents = UrlUtils_1.UrlUtils.GetUrlComponents(loginRequestUrl);
                    if (loginRequestUrlComponents.Hash) {
                        this.logger.verbose("Login request url contains hash, resetting non-msal hash");
                        window.location.hash = loginRequestUrlComponents.Hash;
                    }
                }
            }
        }
        else if (!this.config.auth.navigateToLoginRequestUrl) {
            this.logger.verbose("Default navigation to start page after login turned off");
        }
        this.processCallBack(hash, stateInfo, null);
    };
    /**
     * @hidden
     * Creates a stateInfo object from the URL fragment and returns it.
     * @param {string} hash  -  Hash passed from redirect page
     * @returns {TokenResponse} an object created from the redirect response from AAD comprising of the keys - parameters, requestType, stateMatch, stateResponse and valid.
     * @ignore
     */
    UserAgentApplication.prototype.getResponseState = function (hash) {
        this.logger.verbose("GetResponseState has been called");
        var parameters = UrlUtils_1.UrlUtils.deserializeHash(hash);
        var stateResponse;
        if (!parameters) {
            throw AuthError_1.AuthError.createUnexpectedError("Hash was not parsed correctly.");
        }
        if (parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.STATE)) {
            this.logger.verbose("Hash contains state. Creating stateInfo object");
            var parsedState = RequestUtils_1.RequestUtils.parseLibraryState(parameters["state"]);
            stateResponse = {
                requestType: Constants_1.Constants.unknown,
                state: parameters["state"],
                timestamp: parsedState.ts,
                method: parsedState.method,
                stateMatch: false
            };
        }
        else {
            throw AuthError_1.AuthError.createUnexpectedError("Hash does not contain state.");
        }
        /*
         * async calls can fire iframe and login request at the same time if developer does not use the API as expected
         * incoming callback needs to be looked up to find the request type
         */
        // loginRedirect
        if (stateResponse.state === this.cacheStorage.getItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.STATE_LOGIN, stateResponse.state), this.inCookie) || stateResponse.state === this.silentAuthenticationState) {
            this.logger.verbose("State matches cached state, setting requestType to login");
            stateResponse.requestType = Constants_1.Constants.login;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // acquireTokenRedirect
        else if (stateResponse.state === this.cacheStorage.getItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.STATE_ACQ_TOKEN, stateResponse.state), this.inCookie)) {
            this.logger.verbose("State matches cached state, setting requestType to renewToken");
            stateResponse.requestType = Constants_1.Constants.renewToken;
            stateResponse.stateMatch = true;
            return stateResponse;
        }
        // external api requests may have many renewtoken requests for different resource
        if (!stateResponse.stateMatch) {
            this.logger.verbose("State does not match cached state, setting requestType to type from window");
            stateResponse.requestType = window.requestType;
            var statesInParentContext = window.renewStates;
            for (var i = 0; i < statesInParentContext.length; i++) {
                if (statesInParentContext[i] === stateResponse.state) {
                    this.logger.verbose("Matching state found for request");
                    stateResponse.stateMatch = true;
                    break;
                }
            }
            if (!stateResponse.stateMatch) {
                this.logger.verbose("Matching state not found for request");
            }
        }
        return stateResponse;
    };
    // #endregion
    // #region Token Processing (Extract to TokenProcessing.ts)
    /**
     * @hidden
     * Used to get token for the specified set of scopes from the cache
     * @param {@link ServerRequestParameters} - Request sent to the STS to obtain an id_token/access_token
     * @param {Account} account - Account for which the scopes were requested
     */
    UserAgentApplication.prototype.getCachedToken = function (serverAuthenticationRequest, account) {
        this.logger.verbose("GetCachedToken has been called");
        var scopes = serverAuthenticationRequest.scopes;
        /**
         * Id Token should be returned in every acquireTokenSilent call. The only exception is a response_type = token
         * request when a valid ID Token is not present in the cache.
         */
        var idToken = this.getCachedIdToken(serverAuthenticationRequest, account);
        var authResponse = this.getCachedAccessToken(serverAuthenticationRequest, account, scopes);
        var accountState = this.getAccountState(serverAuthenticationRequest.state);
        return ResponseUtils_1.ResponseUtils.buildAuthResponse(idToken, authResponse, serverAuthenticationRequest, account, scopes, accountState);
    };
    /**
     * @hidden
     *
     * Uses passed in authority to further filter an array of tokenCacheItems until only the token being searched for remains, then returns that tokenCacheItem.
     * This method will throw if authority filtering still yields multiple matching tokens and will return null if not tokens match the authority passed in.
     *
     * @param authority
     * @param tokenCacheItems
     * @param request
     * @param requestScopes
     * @param tokenType
     */
    UserAgentApplication.prototype.getTokenCacheItemByAuthority = function (authority, tokenCacheItems, requestScopes, tokenType) {
        var _this = this;
        var filteredAuthorityItems;
        if (UrlUtils_1.UrlUtils.isCommonAuthority(authority) || UrlUtils_1.UrlUtils.isOrganizationsAuthority(authority) || UrlUtils_1.UrlUtils.isConsumersAuthority(authority)) {
            filteredAuthorityItems = AuthCacheUtils_1.AuthCacheUtils.filterTokenCacheItemsByDomain(tokenCacheItems, UrlUtils_1.UrlUtils.GetUrlComponents(authority).HostNameAndPort);
        }
        else {
            filteredAuthorityItems = AuthCacheUtils_1.AuthCacheUtils.filterTokenCacheItemsByAuthority(tokenCacheItems, authority);
        }
        if (filteredAuthorityItems.length === 1) {
            return filteredAuthorityItems[0];
        }
        else if (filteredAuthorityItems.length > 1) {
            this.logger.warning("Multiple matching tokens found. Cleaning cache and requesting a new token.");
            filteredAuthorityItems.forEach(function (accessTokenCacheItem) {
                _this.cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
            });
            return null;
        }
        else {
            this.logger.verbose("No matching tokens of type " + tokenType + " found");
            return null;
        }
    };
    /**
     *
     * @hidden
     *
     * Searches the token cache for an ID Token that matches the request parameter and returns it as an IdToken object.
     *
     * @param serverAuthenticationRequest
     * @param account
     */
    UserAgentApplication.prototype.getCachedIdToken = function (serverAuthenticationRequest, account) {
        this.logger.verbose("Getting all cached tokens of type ID Token");
        var idTokenCacheItems = this.cacheStorage.getAllIdTokens(this.clientId, account ? account.homeAccountIdentifier : null);
        var matchAuthority = serverAuthenticationRequest.authority || this.authority;
        var idTokenCacheItem = this.getTokenCacheItemByAuthority(matchAuthority, idTokenCacheItems, null, Constants_1.ServerHashParamKeys.ID_TOKEN);
        if (idTokenCacheItem) {
            this.logger.verbose("Evaluating ID token found");
            var idTokenIsStillValid = this.evaluateTokenExpiration(idTokenCacheItem);
            if (idTokenIsStillValid) {
                this.logger.verbose("ID token expiration is within offset, using ID token found in cache");
                var idTokenValue = idTokenCacheItem.value;
                if (idTokenValue) {
                    this.logger.verbose("ID Token found in cache is valid and unexpired");
                }
                else {
                    this.logger.verbose("ID Token found in cache is invalid");
                }
                return (idTokenValue) ? new IdToken_1.IdToken(idTokenValue.idToken) : null;
            }
            else {
                this.logger.verbose("Cached ID token is expired, removing from cache");
                this.cacheStorage.removeItem(JSON.stringify(idTokenCacheItem.key));
                return null;
            }
        }
        else {
            this.logger.verbose("No tokens found");
            return null;
        }
    };
    /**
     *
     * @hidden
     *
     * Searches the token cache for an access token that matches the request parameters and returns it as an AuthResponse.
     *
     * @param serverAuthenticationRequest
     * @param account
     * @param scopes
     */
    UserAgentApplication.prototype.getCachedAccessToken = function (serverAuthenticationRequest, account, scopes) {
        this.logger.verbose("Getting all cached tokens of type Access Token");
        var tokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, account ? account.homeAccountIdentifier : null);
        var scopeFilteredTokenCacheItems = AuthCacheUtils_1.AuthCacheUtils.filterTokenCacheItemsByScope(tokenCacheItems, scopes);
        var matchAuthority = serverAuthenticationRequest.authority || this.authority;
        // serverAuthenticationRequest.authority can only be common or organizations if not null
        var accessTokenCacheItem = this.getTokenCacheItemByAuthority(matchAuthority, scopeFilteredTokenCacheItems, scopes, Constants_1.ServerHashParamKeys.ACCESS_TOKEN);
        if (!accessTokenCacheItem) {
            this.logger.verbose("No matching token found when filtering by scope and authority");
            return null;
        }
        else {
            serverAuthenticationRequest.authorityInstance = AuthorityFactory_1.AuthorityFactory.CreateInstance(accessTokenCacheItem.key.authority, this.config.auth.validateAuthority);
            this.logger.verbose("Evaluating access token found");
            var tokenIsStillValid = this.evaluateTokenExpiration(accessTokenCacheItem);
            // The response value will stay null if token retrieved from the cache is expired, otherwise it will be populated with said token's data
            if (tokenIsStillValid) {
                this.logger.verbose("Access token expiration is within offset, using access token found in cache");
                var responseAccount = account || this.getAccount();
                if (!responseAccount) {
                    throw AuthError_1.AuthError.createUnexpectedError("Account should not be null here.");
                }
                var aState = this.getAccountState(serverAuthenticationRequest.state);
                var response = {
                    uniqueId: "",
                    tenantId: "",
                    tokenType: Constants_1.ServerHashParamKeys.ACCESS_TOKEN,
                    idToken: null,
                    idTokenClaims: null,
                    accessToken: accessTokenCacheItem.value.accessToken,
                    scopes: accessTokenCacheItem.key.scopes.split(" "),
                    expiresOn: new Date(Number(accessTokenCacheItem.value.expiresIn) * 1000),
                    account: responseAccount,
                    accountState: aState,
                    fromCache: true
                };
                return response;
            }
            else {
                this.logger.verbose("Access token expired, removing from cache");
                this.cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                return null;
            }
        }
    };
    /**
     * Returns true if the token passed in is within the acceptable expiration time offset, false if it is expired.
     * @param tokenCacheItem
     * @param serverAuthenticationRequest
     */
    UserAgentApplication.prototype.evaluateTokenExpiration = function (tokenCacheItem) {
        var expiration = Number(tokenCacheItem.value.expiresIn);
        return TokenUtils_1.TokenUtils.validateExpirationIsWithinOffset(expiration, this.config.system.tokenRenewalOffsetSeconds);
    };
    /**
     * @hidden
     * Check if ADAL id_token exists and return if exists.
     *
     */
    UserAgentApplication.prototype.extractADALIdToken = function () {
        this.logger.verbose("ExtractADALIdToken has been called");
        var adalIdToken = this.cacheStorage.getItem(Constants_1.Constants.adalIdToken);
        return (!StringUtils_1.StringUtils.isEmpty(adalIdToken)) ? TokenUtils_1.TokenUtils.extractIdToken(adalIdToken) : null;
    };
    /**
     * @hidden
     * Acquires access token using a hidden iframe.
     * @ignore
     */
    UserAgentApplication.prototype.renewToken = function (requestSignature, resolve, reject, account, serverAuthenticationRequest) {
        this.logger.verbose("RenewToken has been called");
        this.logger.verbosePii("RenewToken scope and authority: " + requestSignature);
        var frameName = WindowUtils_1.WindowUtils.generateFrameName(Constants_1.FramePrefix.TOKEN_FRAME, requestSignature);
        WindowUtils_1.WindowUtils.addHiddenIFrame(frameName, this.logger);
        this.updateCacheEntries(serverAuthenticationRequest, account, false);
        this.logger.verbosePii("RenewToken expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = UrlUtils_1.UrlUtils.urlRemoveQueryStringParameter(UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none + Constants_1.Constants.response_mode_fragment;
        window.renewStates.push(serverAuthenticationRequest.state);
        window.requestType = Constants_1.Constants.renewToken;
        this.logger.verbose("Set window.renewState and requestType");
        this.registerCallback(serverAuthenticationRequest.state, requestSignature, resolve, reject);
        this.logger.infoPii("Navigate to: " + urlNavigate);
        this.loadIframeTimeout(urlNavigate, frameName, requestSignature).catch(function (error) { return reject(error); });
    };
    /**
     * @hidden
     * Renews idtoken for app's own backend when clientId is passed as a single scope in the scopes array.
     * @ignore
     */
    UserAgentApplication.prototype.renewIdToken = function (requestSignature, resolve, reject, account, serverAuthenticationRequest) {
        this.logger.info("RenewIdToken has been called");
        var frameName = WindowUtils_1.WindowUtils.generateFrameName(Constants_1.FramePrefix.ID_TOKEN_FRAME, requestSignature);
        WindowUtils_1.WindowUtils.addHiddenIFrame(frameName, this.logger);
        this.updateCacheEntries(serverAuthenticationRequest, account, false);
        this.logger.verbose("RenewIdToken expected state: " + serverAuthenticationRequest.state);
        // Build urlNavigate with "prompt=none" and navigate to URL in hidden iFrame
        var urlNavigate = UrlUtils_1.UrlUtils.urlRemoveQueryStringParameter(UrlUtils_1.UrlUtils.createNavigateUrl(serverAuthenticationRequest), Constants_1.Constants.prompt) + Constants_1.Constants.prompt_none + Constants_1.Constants.response_mode_fragment;
        if (this.silentLogin) {
            this.logger.verbose("Silent login is true, set silentAuthenticationState");
            window.requestType = Constants_1.Constants.login;
            this.silentAuthenticationState = serverAuthenticationRequest.state;
        }
        else {
            this.logger.verbose("Not silent login, set window.renewState and requestType");
            window.requestType = Constants_1.Constants.renewToken;
            window.renewStates.push(serverAuthenticationRequest.state);
        }
        // note: scope here is clientId
        this.registerCallback(serverAuthenticationRequest.state, requestSignature, resolve, reject);
        this.logger.infoPii("Navigate to:\" " + urlNavigate);
        this.loadIframeTimeout(urlNavigate, frameName, requestSignature).catch(function (error) { return reject(error); });
    };
    /**
     * @hidden
     *
     * This method builds an Access Token Cache item and saves it to the cache, returning the original
     * AuthResponse augmented with a parsed expiresOn attribute.
     *
     * @param response The AuthResponse object that contains the token to be saved
     * @param authority The authority under which the ID token will be cached
     * @param scopes The scopes to be added to the cache item key (undefined for ID token cache items)
     * @param clientInfo Client Info object that is used to generate the homeAccountIdentifier
     * @param expiration Token expiration timestamp
     */
    UserAgentApplication.prototype.saveToken = function (response, authority, scopes, clientInfo, expiration) {
        var accessTokenKey = new AccessTokenKey_1.AccessTokenKey(authority, this.clientId, scopes, clientInfo.uid, clientInfo.utid);
        var accessTokenValue = new AccessTokenValue_1.AccessTokenValue(response.accessToken, response.idToken.rawIdToken, expiration.toString(), clientInfo.encodeClientInfo());
        this.cacheStorage.setItem(JSON.stringify(accessTokenKey), JSON.stringify(accessTokenValue));
        if (expiration) {
            this.logger.verbose("New expiration set for token");
            response.expiresOn = new Date(expiration * 1000);
        }
        else {
            this.logger.error("Could not parse expiresIn parameter for access token");
        }
        return response;
    };
    /**
     * @hidden
     *
     * This method sets up the elements of an ID Token cache item and calls saveToken to save it in
     * Access Token Cache item format for the client application to use.
     *
     * @param response The AuthResponse object that will be used to build the cache item
     * @param authority The authority under which the ID token will be cached
     * @param parameters The response's Hash Params, which contain the ID token returned from the server
     * @param clientInfo Client Info object that is used to generate the homeAccountIdentifier
     * @param idTokenObj ID Token object from which the ID token's expiration is extracted
     */
    /* tslint:disable:no-string-literal */
    UserAgentApplication.prototype.saveIdToken = function (response, authority, parameters, clientInfo, idTokenObj) {
        this.logger.verbose("SaveIdToken has been called");
        var idTokenResponse = tslib_1.__assign({}, response);
        // Scopes are undefined so they don't show up in ID token cache key
        var scopes;
        idTokenResponse.scopes = Constants_1.Constants.oidcScopes;
        idTokenResponse.accessToken = parameters[Constants_1.ServerHashParamKeys.ID_TOKEN];
        var expiration = Number(idTokenObj.expiration);
        // Set ID Token item in cache
        this.logger.verbose("Saving ID token to cache");
        return this.saveToken(idTokenResponse, authority, scopes, clientInfo, expiration);
    };
    /**
     * @hidden
     *
     * This method sets up the elements of an Access Token cache item and calls saveToken to save it to the cache
     *
     * @param response The AuthResponse object that will be used to build the cache item
     * @param authority The authority under which the access token will be cached
     * @param parameters The response's Hash Params, which contain the access token returned from the server
     * @param clientInfo Client Info object that is used to generate the homeAccountIdentifier
     */
    /* tslint:disable:no-string-literal */
    UserAgentApplication.prototype.saveAccessToken = function (response, authority, parameters, clientInfo) {
        this.logger.verbose("SaveAccessToken has been called");
        var accessTokenResponse = tslib_1.__assign({}, response);
        // read the scopes
        var scope = parameters[Constants_1.ServerHashParamKeys.SCOPE];
        var consentedScopes = scope.split(" ");
        // retrieve all access tokens from the cache, remove the dup scopes
        var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(this.clientId, authority);
        this.logger.verbose("Retrieving all access tokens from cache and removing duplicates");
        for (var i = 0; i < accessTokenCacheItems.length; i++) {
            var accessTokenCacheItem = accessTokenCacheItems[i];
            if (accessTokenCacheItem.key.homeAccountIdentifier === response.account.homeAccountIdentifier) {
                var cachedScopes = accessTokenCacheItem.key.scopes.split(" ");
                if (ScopeSet_1.ScopeSet.isIntersectingScopes(cachedScopes, consentedScopes)) {
                    this.cacheStorage.removeItem(JSON.stringify(accessTokenCacheItem.key));
                }
            }
        }
        accessTokenResponse.accessToken = parameters[Constants_1.ServerHashParamKeys.ACCESS_TOKEN];
        accessTokenResponse.scopes = consentedScopes;
        var expiresIn = TimeUtils_1.TimeUtils.parseExpiresIn(parameters[Constants_1.ServerHashParamKeys.EXPIRES_IN]);
        var parsedState = RequestUtils_1.RequestUtils.parseLibraryState(parameters[Constants_1.ServerHashParamKeys.STATE]);
        var expiration = parsedState.ts + expiresIn;
        this.logger.verbose("Saving access token to cache");
        return this.saveToken(accessTokenResponse, authority, scope, clientInfo, expiration);
    };
    /**
     * @hidden
     * Saves token or error received in the response from AAD in the cache. In case of id_token, it also creates the account object.
     * @ignore
     */
    UserAgentApplication.prototype.saveTokenFromHash = function (hash, stateInfo) {
        this.logger.verbose("SaveTokenFromHash has been called");
        this.logger.info("State status: " + stateInfo.stateMatch + "; Request type: " + stateInfo.requestType);
        var response = {
            uniqueId: "",
            tenantId: "",
            tokenType: "",
            idToken: null,
            idTokenClaims: null,
            accessToken: null,
            scopes: [],
            expiresOn: null,
            account: null,
            accountState: "",
            fromCache: false
        };
        var error;
        var hashParams = UrlUtils_1.UrlUtils.deserializeHash(hash);
        var authorityKey = "";
        var acquireTokenAccountKey = "";
        var idTokenObj = null;
        // If server returns an error
        if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION) || hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ERROR)) {
            this.logger.verbose("Server returned an error");
            this.logger.infoPii("Error : " + hashParams[Constants_1.ServerHashParamKeys.ERROR] + "; Error description: " + hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION]);
            this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR, hashParams[Constants_1.ServerHashParamKeys.ERROR]);
            this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR_DESC, hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION]);
            // login
            if (stateInfo.requestType === Constants_1.Constants.login) {
                this.logger.verbose("RequestType is login, caching login error, generating authorityKey");
                this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.LOGIN_ERROR, hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION] + ":" + hashParams[Constants_1.ServerHashParamKeys.ERROR]);
                authorityKey = AuthCache_1.AuthCache.generateAuthorityKey(stateInfo.state);
            }
            // acquireToken
            if (stateInfo.requestType === Constants_1.Constants.renewToken) {
                this.logger.verbose("RequestType is renewToken, generating acquireTokenAccountKey");
                authorityKey = AuthCache_1.AuthCache.generateAuthorityKey(stateInfo.state);
                var account = this.getAccount();
                var accountId = void 0;
                if (account && !StringUtils_1.StringUtils.isEmpty(account.homeAccountIdentifier)) {
                    accountId = account.homeAccountIdentifier;
                    this.logger.verbose("AccountId is set");
                }
                else {
                    accountId = Constants_1.Constants.no_account;
                    this.logger.verbose("AccountId is set as no_account");
                }
                acquireTokenAccountKey = AuthCache_1.AuthCache.generateAcquireTokenAccountKey(accountId, stateInfo.state);
            }
            var hashErr = hashParams[Constants_1.ServerHashParamKeys.ERROR];
            var hashErrDesc = hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION];
            if (InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErr) ||
                InteractionRequiredAuthError_1.InteractionRequiredAuthError.isInteractionRequiredError(hashErrDesc)) {
                error = new InteractionRequiredAuthError_1.InteractionRequiredAuthError(hashParams[Constants_1.ServerHashParamKeys.ERROR], hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION]);
            }
            else {
                error = new ServerError_1.ServerError(hashParams[Constants_1.ServerHashParamKeys.ERROR], hashParams[Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION]);
            }
        }
        // If the server returns "Success"
        else {
            this.logger.verbose("Server returns success");
            // Verify the state from redirect and record tokens to storage if exists
            if (stateInfo.stateMatch) {
                this.logger.info("State is right");
                if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.SESSION_STATE)) {
                    this.logger.verbose("Fragment has session state, caching");
                    this.cacheStorage.setItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.SESSION_STATE, stateInfo.state), hashParams[Constants_1.ServerHashParamKeys.SESSION_STATE]);
                }
                response.accountState = this.getAccountState(stateInfo.state);
                var clientInfo = void 0;
                // Process access_token
                if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ACCESS_TOKEN)) {
                    this.logger.info("Fragment has access token");
                    response.accessToken = hashParams[Constants_1.ServerHashParamKeys.ACCESS_TOKEN];
                    if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.SCOPE)) {
                        response.scopes = hashParams[Constants_1.ServerHashParamKeys.SCOPE].split(" ");
                    }
                    // retrieve the id_token from response if present
                    if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ID_TOKEN)) {
                        this.logger.verbose("Fragment has id_token");
                        idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.ServerHashParamKeys.ID_TOKEN]);
                    }
                    else {
                        this.logger.verbose("No idToken on fragment, getting idToken from cache");
                        idTokenObj = new IdToken_1.IdToken(this.cacheStorage.getItem(Constants_1.PersistentCacheKeys.IDTOKEN));
                    }
                    response = ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                    // set authority
                    var authority = this.populateAuthority(stateInfo.state, this.inCookie, this.cacheStorage, idTokenObj);
                    this.logger.verbose("Got authority from cache");
                    // retrieve client_info - if it is not found, generate the uid and utid from idToken
                    if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.CLIENT_INFO)) {
                        this.logger.verbose("Fragment has clientInfo");
                        clientInfo = new ClientInfo_1.ClientInfo(hashParams[Constants_1.ServerHashParamKeys.CLIENT_INFO], authority);
                    }
                    else if (this.authorityInstance.AuthorityType === Authority_1.AuthorityType.Adfs) {
                        clientInfo = ClientInfo_1.ClientInfo.createClientInfoFromIdToken(idTokenObj, authority);
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                    }
                    response.account = Account_1.Account.createAccount(idTokenObj, clientInfo);
                    this.logger.verbose("Account object created from response");
                    var accountKey = void 0;
                    if (response.account && !StringUtils_1.StringUtils.isEmpty(response.account.homeAccountIdentifier)) {
                        this.logger.verbose("AccountKey set");
                        accountKey = response.account.homeAccountIdentifier;
                    }
                    else {
                        this.logger.verbose("AccountKey set as no_account");
                        accountKey = Constants_1.Constants.no_account;
                    }
                    acquireTokenAccountKey = AuthCache_1.AuthCache.generateAcquireTokenAccountKey(accountKey, stateInfo.state);
                    var acquireTokenAccountKey_noaccount = AuthCache_1.AuthCache.generateAcquireTokenAccountKey(Constants_1.Constants.no_account, stateInfo.state);
                    this.logger.verbose("AcquireTokenAccountKey generated");
                    var cachedAccount = this.cacheStorage.getItem(acquireTokenAccountKey);
                    var acquireTokenAccount = void 0;
                    // Check with the account in the Cache
                    if (!StringUtils_1.StringUtils.isEmpty(cachedAccount)) {
                        acquireTokenAccount = JSON.parse(cachedAccount);
                        this.logger.verbose("AcquireToken request account retrieved from cache");
                        if (response.account && acquireTokenAccount && Account_1.Account.compareAccounts(response.account, acquireTokenAccount)) {
                            response = this.saveAccessToken(response, authority, hashParams, clientInfo);
                            this.logger.info("The user object received in the response is the same as the one passed in the acquireToken request");
                        }
                        else {
                            this.logger.warning("The account object created from the response is not the same as the one passed in the acquireToken request");
                        }
                    }
                    else if (!StringUtils_1.StringUtils.isEmpty(this.cacheStorage.getItem(acquireTokenAccountKey_noaccount))) {
                        this.logger.verbose("No acquireToken account retrieved from cache");
                        response = this.saveAccessToken(response, authority, hashParams, clientInfo);
                    }
                }
                // Process id_token
                if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.ID_TOKEN)) {
                    this.logger.info("Fragment has idToken");
                    // set the idToken
                    idTokenObj = new IdToken_1.IdToken(hashParams[Constants_1.ServerHashParamKeys.ID_TOKEN]);
                    // set authority
                    var authority = this.populateAuthority(stateInfo.state, this.inCookie, this.cacheStorage, idTokenObj);
                    response = ResponseUtils_1.ResponseUtils.setResponseIdToken(response, idTokenObj);
                    if (hashParams.hasOwnProperty(Constants_1.ServerHashParamKeys.CLIENT_INFO)) {
                        this.logger.verbose("Fragment has clientInfo");
                        clientInfo = new ClientInfo_1.ClientInfo(hashParams[Constants_1.ServerHashParamKeys.CLIENT_INFO], authority);
                    }
                    else if (this.authorityInstance.AuthorityType === Authority_1.AuthorityType.Adfs) {
                        clientInfo = ClientInfo_1.ClientInfo.createClientInfoFromIdToken(idTokenObj, authority);
                    }
                    else {
                        this.logger.warning("ClientInfo not received in the response from AAD");
                    }
                    this.account = Account_1.Account.createAccount(idTokenObj, clientInfo);
                    response.account = this.account;
                    this.logger.verbose("Account object created from response");
                    if (idTokenObj && idTokenObj.nonce) {
                        this.logger.verbose("IdToken has nonce");
                        // check nonce integrity if idToken has nonce - throw an error if not matched
                        var cachedNonce = this.cacheStorage.getItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN, stateInfo.state), this.inCookie);
                        if (idTokenObj.nonce !== cachedNonce) {
                            this.account = null;
                            this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.LOGIN_ERROR, "Nonce Mismatch. Expected Nonce: " + cachedNonce + "," + "Actual Nonce: " + idTokenObj.nonce);
                            this.logger.error("Nonce Mismatch. Expected Nonce: " + cachedNonce + ", Actual Nonce: " + idTokenObj.nonce);
                            error = ClientAuthError_1.ClientAuthError.createNonceMismatchError(cachedNonce, idTokenObj.nonce);
                        }
                        // Save the token
                        else {
                            this.logger.verbose("Nonce matches, saving idToken to cache");
                            this.cacheStorage.setItem(Constants_1.PersistentCacheKeys.IDTOKEN, hashParams[Constants_1.ServerHashParamKeys.ID_TOKEN], this.inCookie);
                            this.cacheStorage.setItem(Constants_1.PersistentCacheKeys.CLIENT_INFO, clientInfo.encodeClientInfo(), this.inCookie);
                            // Save idToken as access token item for app itself
                            this.saveIdToken(response, authority, hashParams, clientInfo, idTokenObj);
                        }
                    }
                    else {
                        this.logger.verbose("No idToken or no nonce. Cache key for Authority set as state");
                        authorityKey = stateInfo.state;
                        acquireTokenAccountKey = stateInfo.state;
                        this.logger.error("Invalid id_token received in the response");
                        error = ClientAuthError_1.ClientAuthError.createInvalidIdTokenError(idTokenObj);
                        this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR, error.errorCode);
                        this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR_DESC, error.errorMessage);
                    }
                }
            }
            // State mismatch - unexpected/invalid state
            else {
                this.logger.verbose("State mismatch");
                authorityKey = stateInfo.state;
                acquireTokenAccountKey = stateInfo.state;
                var expectedState = this.cacheStorage.getItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.STATE_LOGIN, stateInfo.state), this.inCookie);
                this.logger.error("State Mismatch. Expected State: " + expectedState + ", Actual State: " + stateInfo.state);
                error = ClientAuthError_1.ClientAuthError.createInvalidStateError(stateInfo.state, expectedState);
                this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR, error.errorCode);
                this.cacheStorage.setItem(Constants_1.ErrorCacheKeys.ERROR_DESC, error.errorMessage);
            }
        }
        // Set status to completed
        this.cacheStorage.removeItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.RENEW_STATUS, stateInfo.state));
        this.cacheStorage.resetTempCacheItems(stateInfo.state);
        this.logger.verbose("Status set to complete, temporary cache cleared");
        // this is required if navigateToLoginRequestUrl=false
        if (this.inCookie) {
            this.logger.verbose("InCookie is true, setting authorityKey in cookie");
            this.cacheStorage.setItemCookie(authorityKey, "", -1);
            this.cacheStorage.clearMsalCookie(stateInfo.state);
        }
        if (error) {
            // Error case, set status to cancelled
            throw error;
        }
        if (!response) {
            throw AuthError_1.AuthError.createUnexpectedError("Response is null");
        }
        return response;
    };
    /**
     * Set Authority when saving Token from the hash
     * @param state
     * @param inCookie
     * @param cacheStorage
     * @param idTokenObj
     * @param response
     */
    UserAgentApplication.prototype.populateAuthority = function (state, inCookie, cacheStorage, idTokenObj) {
        this.logger.verbose("PopulateAuthority has been called");
        var authorityKey = AuthCache_1.AuthCache.generateAuthorityKey(state);
        var cachedAuthority = cacheStorage.getItem(authorityKey, inCookie);
        // retrieve the authority from cache and replace with tenantID
        return StringUtils_1.StringUtils.isEmpty(cachedAuthority) ? cachedAuthority : UrlUtils_1.UrlUtils.replaceTenantPath(cachedAuthority, idTokenObj.tenantId);
    };
    /* tslint:enable:no-string-literal */
    // #endregion
    // #region Account
    /**
     * Returns the signed in account
     * (the account object is created at the time of successful login)
     * or null when no state is found
     * @returns {@link Account} - the account object stored in MSAL
     */
    UserAgentApplication.prototype.getAccount = function () {
        // if a session already exists, get the account from the session
        if (this.account) {
            return this.account;
        }
        // frame is used to get idToken and populate the account for the given session
        var rawIdToken = this.cacheStorage.getItem(Constants_1.PersistentCacheKeys.IDTOKEN, this.inCookie);
        var rawClientInfo = this.cacheStorage.getItem(Constants_1.PersistentCacheKeys.CLIENT_INFO, this.inCookie);
        if (!StringUtils_1.StringUtils.isEmpty(rawIdToken) && !StringUtils_1.StringUtils.isEmpty(rawClientInfo)) {
            var idToken = new IdToken_1.IdToken(rawIdToken);
            var clientInfo = new ClientInfo_1.ClientInfo(rawClientInfo, "");
            this.account = Account_1.Account.createAccount(idToken, clientInfo);
            return this.account;
        }
        // if login not yet done, return null
        return null;
    };
    /**
     * @hidden
     *
     * Extracts state value from the accountState sent with the authentication request.
     * @returns {string} scope.
     * @ignore
     */
    UserAgentApplication.prototype.getAccountState = function (state) {
        if (state) {
            var splitIndex = state.indexOf(Constants_1.Constants.resourceDelimiter);
            if (splitIndex > -1 && splitIndex + 1 < state.length) {
                return state.substring(splitIndex + 1);
            }
        }
        return state;
    };
    /**
     * Use to get a list of unique accounts in MSAL cache based on homeAccountIdentifier.
     *
     * @param {@link Array<Account>} Account - all unique accounts in MSAL cache.
     */
    UserAgentApplication.prototype.getAllAccounts = function () {
        var accounts = [];
        var accessTokenCacheItems = this.cacheStorage.getAllAccessTokens(Constants_1.Constants.clientId, Constants_1.Constants.homeAccountIdentifier);
        for (var i = 0; i < accessTokenCacheItems.length; i++) {
            var idToken = new IdToken_1.IdToken(accessTokenCacheItems[i].value.idToken);
            var clientInfo = new ClientInfo_1.ClientInfo(accessTokenCacheItems[i].value.homeAccountIdentifier, "");
            var account = Account_1.Account.createAccount(idToken, clientInfo);
            accounts.push(account);
        }
        return this.getUniqueAccounts(accounts);
    };
    /**
     * @hidden
     *
     * Used to filter accounts based on homeAccountIdentifier
     * @param {Array<Account>}  Accounts - accounts saved in the cache
     * @ignore
     */
    UserAgentApplication.prototype.getUniqueAccounts = function (accounts) {
        if (!accounts || accounts.length <= 1) {
            return accounts;
        }
        var flags = [];
        var uniqueAccounts = [];
        for (var index = 0; index < accounts.length; ++index) {
            if (accounts[index].homeAccountIdentifier && flags.indexOf(accounts[index].homeAccountIdentifier) === -1) {
                flags.push(accounts[index].homeAccountIdentifier);
                uniqueAccounts.push(accounts[index]);
            }
        }
        return uniqueAccounts;
    };
    // #endregion
    // #region Angular
    /**
     * @hidden
     *
     * Broadcast messages - Used only for Angular?  *
     * @param eventName
     * @param data
     */
    UserAgentApplication.prototype.broadcast = function (eventName, data) {
        var evt = new CustomEvent(eventName, { detail: data });
        window.dispatchEvent(evt);
    };
    /**
     * @hidden
     *
     * Helper function to retrieve the cached token
     *
     * @param scopes
     * @param {@link Account} account
     * @param state
     * @return {@link AuthResponse} AuthResponse
     */
    UserAgentApplication.prototype.getCachedTokenInternal = function (scopes, account, state, correlationId) {
        // Get the current session's account object
        var accountObject = account || this.getAccount();
        if (!accountObject) {
            return null;
        }
        // Construct AuthenticationRequest based on response type; set "redirectUri" from the "request" which makes this call from Angular - for this.getRedirectUri()
        var newAuthority = this.authorityInstance ? this.authorityInstance : AuthorityFactory_1.AuthorityFactory.CreateInstance(this.authority, this.config.auth.validateAuthority);
        var responseType = this.getTokenType(accountObject, scopes);
        var serverAuthenticationRequest = new ServerRequestParameters_1.ServerRequestParameters(newAuthority, this.clientId, responseType, this.getRedirectUri(), scopes, state, correlationId);
        // get cached token
        return this.getCachedToken(serverAuthenticationRequest, account);
    };
    /**
     * @hidden
     *
     * Get scopes for the Endpoint - Used in Angular to track protected and unprotected resources without interaction from the developer app
     * Note: Please check if we need to set the "redirectUri" from the "request" which makes this call from Angular - for this.getRedirectUri()
     *
     * @param endpoint
     */
    UserAgentApplication.prototype.getScopesForEndpoint = function (endpoint) {
        // if user specified list of unprotectedResources, no need to send token to these endpoints, return null.
        if (this.config.framework.unprotectedResources.length > 0) {
            for (var i = 0; i < this.config.framework.unprotectedResources.length; i++) {
                if (endpoint.indexOf(this.config.framework.unprotectedResources[i]) > -1) {
                    return null;
                }
            }
        }
        // process all protected resources and send the matched one
        if (this.config.framework.protectedResourceMap.size > 0) {
            for (var _i = 0, _a = Array.from(this.config.framework.protectedResourceMap.keys()); _i < _a.length; _i++) {
                var key = _a[_i];
                // configEndpoint is like /api/Todo requested endpoint can be /api/Todo/1
                if (endpoint.indexOf(key) > -1) {
                    return this.config.framework.protectedResourceMap.get(key);
                }
            }
        }
        /*
         * default resource will be clientid if nothing specified
         * App will use idtoken for calls to itself
         * check if it's staring from http or https, needs to match with app host
         */
        if (endpoint.indexOf("http://") > -1 || endpoint.indexOf("https://") > -1) {
            if (UrlUtils_1.UrlUtils.getHostFromUri(endpoint) === UrlUtils_1.UrlUtils.getHostFromUri(this.getRedirectUri())) {
                return new Array(this.clientId);
            }
        }
        else {
            /*
             * in angular level, the url for $http interceptor call could be relative url,
             * if it's relative call, we'll treat it as app backend call.
             */
            return new Array(this.clientId);
        }
        // if not the app's own backend or not a domain listed in the endpoints structure
        return null;
    };
    /**
     * Return boolean flag to developer to help inform if login is in progress
     * @returns {boolean} true/false
     */
    UserAgentApplication.prototype.getLoginInProgress = function () {
        return this.cacheStorage.isInteractionInProgress(true);
    };
    /**
     * @hidden
     * @ignore
     *
     * @param loginInProgress
     */
    UserAgentApplication.prototype.setInteractionInProgress = function (inProgress) {
        this.cacheStorage.setInteractionInProgress(inProgress);
    };
    /**
     * @hidden
     * @ignore
     *
     * @param loginInProgress
     */
    UserAgentApplication.prototype.setloginInProgress = function (loginInProgress) {
        this.setInteractionInProgress(loginInProgress);
    };
    /**
     * @hidden
     * @ignore
     *
     * returns the status of acquireTokenInProgress
     */
    UserAgentApplication.prototype.getAcquireTokenInProgress = function () {
        return this.cacheStorage.isInteractionInProgress(true);
    };
    /**
     * @hidden
     * @ignore
     *
     * @param acquireTokenInProgress
     */
    UserAgentApplication.prototype.setAcquireTokenInProgress = function (acquireTokenInProgress) {
        this.setInteractionInProgress(acquireTokenInProgress);
    };
    /**
     * @hidden
     * @ignore
     *
     * returns the logger handle
     */
    UserAgentApplication.prototype.getLogger = function () {
        return this.logger;
    };
    /**
     * Sets the logger callback.
     * @param logger Logger callback
     */
    UserAgentApplication.prototype.setLogger = function (logger) {
        this.logger = logger;
    };
    // #endregion
    // #region Getters and Setters
    /**
     * Use to get the redirect uri configured in MSAL or null.
     * Evaluates redirectUri if its a function, otherwise simply returns its value.
     *
     * @returns {string} redirect URL
     */
    UserAgentApplication.prototype.getRedirectUri = function (reqRedirectUri) {
        if (reqRedirectUri) {
            return reqRedirectUri;
        }
        else if (typeof this.config.auth.redirectUri === "function") {
            return this.config.auth.redirectUri();
        }
        return this.config.auth.redirectUri;
    };
    /**
     * Use to get the post logout redirect uri configured in MSAL or null.
     * Evaluates postLogoutredirectUri if its a function, otherwise simply returns its value.
     *
     * @returns {string} post logout redirect URL
     */
    UserAgentApplication.prototype.getPostLogoutRedirectUri = function () {
        if (typeof this.config.auth.postLogoutRedirectUri === "function") {
            return this.config.auth.postLogoutRedirectUri();
        }
        return this.config.auth.postLogoutRedirectUri;
    };
    /**
     * Use to get the current {@link Configuration} object in MSAL
     *
     * @returns {@link Configuration}
     */
    UserAgentApplication.prototype.getCurrentConfiguration = function () {
        if (!this.config) {
            throw ClientConfigurationError_1.ClientConfigurationError.createNoSetConfigurationError();
        }
        return this.config;
    };
    /**
     * @ignore
     *
     * Utils function to create the Authentication
     * @param {@link account} account object
     * @param scopes
     *
     * @returns {string} token type: token, id_token or id_token token
     *
     */
    UserAgentApplication.prototype.getTokenType = function (accountObject, scopes) {
        var accountsMatch = Account_1.Account.compareAccounts(accountObject, this.getAccount());
        return ServerRequestParameters_1.ServerRequestParameters.determineResponseType(accountsMatch, scopes);
    };
    /**
     * @hidden
     * @ignore
     *
     * Sets the cachekeys for and stores the account information in cache
     * @param account
     * @param state
     * @hidden
     */
    UserAgentApplication.prototype.setAccountCache = function (account, state) {
        // Cache acquireTokenAccountKey
        var accountId = account ? this.getAccountId(account) : Constants_1.Constants.no_account;
        var acquireTokenAccountKey = AuthCache_1.AuthCache.generateAcquireTokenAccountKey(accountId, state);
        this.cacheStorage.setItem(acquireTokenAccountKey, JSON.stringify(account));
    };
    /**
     * @hidden
     * @ignore
     *
     * Sets the cacheKey for and stores the authority information in cache
     * @param state
     * @param authority
     * @hidden
     */
    UserAgentApplication.prototype.setAuthorityCache = function (state, authority) {
        // Cache authorityKey
        var authorityKey = AuthCache_1.AuthCache.generateAuthorityKey(state);
        this.cacheStorage.setItem(authorityKey, UrlUtils_1.UrlUtils.CanonicalizeUri(authority), this.inCookie);
    };
    /**
     * Updates account, authority, and nonce in cache
     * @param serverAuthenticationRequest
     * @param account
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.updateCacheEntries = function (serverAuthenticationRequest, account, isLoginCall, loginStartPage) {
        // Cache Request Originator Page
        if (loginStartPage) {
            this.cacheStorage.setItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.LOGIN_REQUEST, serverAuthenticationRequest.state), loginStartPage, this.inCookie);
        }
        // Cache account and authority
        if (isLoginCall) {
            // Cache the state
            this.cacheStorage.setItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.STATE_LOGIN, serverAuthenticationRequest.state), serverAuthenticationRequest.state, this.inCookie);
        }
        else {
            this.setAccountCache(account, serverAuthenticationRequest.state);
        }
        // Cache authorityKey
        this.setAuthorityCache(serverAuthenticationRequest.state, serverAuthenticationRequest.authority);
        // Cache nonce
        this.cacheStorage.setItem(AuthCache_1.AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN, serverAuthenticationRequest.state), serverAuthenticationRequest.nonce, this.inCookie);
    };
    /**
     * Returns the unique identifier for the logged in account
     * @param account
     * @hidden
     * @ignore
     */
    UserAgentApplication.prototype.getAccountId = function (account) {
        // return `${account.accountIdentifier}` + Constants.resourceDelimiter + `${account.homeAccountIdentifier}`;
        var accountId;
        if (!StringUtils_1.StringUtils.isEmpty(account.homeAccountIdentifier)) {
            accountId = account.homeAccountIdentifier;
        }
        else {
            accountId = Constants_1.Constants.no_account;
        }
        return accountId;
    };
    /**
     * @ignore
     * @param extraQueryParameters
     *
     * Construct 'tokenRequest' from the available data in adalIdToken
     */
    UserAgentApplication.prototype.buildIDTokenRequest = function (request) {
        var tokenRequest = {
            scopes: Constants_1.Constants.oidcScopes,
            authority: this.authority,
            account: this.getAccount(),
            extraQueryParameters: request.extraQueryParameters,
            correlationId: request.correlationId
        };
        return tokenRequest;
    };
    /**
     * @ignore
     * @param config
     * @param clientId
     *
     * Construct TelemetryManager from Configuration
     */
    UserAgentApplication.prototype.getTelemetryManagerFromConfig = function (config, clientId) {
        if (!config) { // if unset
            return TelemetryManager_1.default.getTelemetrymanagerStub(clientId, this.logger);
        }
        // if set then validate
        var applicationName = config.applicationName, applicationVersion = config.applicationVersion, telemetryEmitter = config.telemetryEmitter;
        if (!applicationName || !applicationVersion || !telemetryEmitter) {
            throw ClientConfigurationError_1.ClientConfigurationError.createTelemetryConfigError(config);
        }
        // if valid then construct
        var telemetryPlatform = {
            applicationName: applicationName,
            applicationVersion: applicationVersion
        };
        var telemetryManagerConfig = {
            platform: telemetryPlatform,
            clientId: clientId
        };
        return new TelemetryManager_1.default(telemetryManagerConfig, telemetryEmitter, this.logger);
    };
    return UserAgentApplication;
}());
exports.UserAgentApplication = UserAgentApplication;


/***/ }),

/***/ 767:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.XhrClient = void 0;
var Constants_1 = __webpack_require__(91);
/**
 * XHR client for JSON endpoints
 * https://www.npmjs.com/package/async-promise
 * @hidden
 */
var XhrClient = /** @class */ (function () {
    function XhrClient() {
    }
    XhrClient.prototype.sendRequestAsync = function (url, method, enableCaching) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, /* async: */ true);
            if (enableCaching) {
                /*
                 * TODO: (shivb) ensure that this can be cached
                 * xhr.setRequestHeader("Cache-Control", "Public");
                 */
            }
            xhr.onload = function () {
                if (xhr.status < 200 || xhr.status >= 300) {
                    reject(_this.handleError(xhr.responseText));
                }
                var jsonResponse;
                try {
                    jsonResponse = JSON.parse(xhr.responseText);
                }
                catch (e) {
                    reject(_this.handleError(xhr.responseText));
                }
                var response = {
                    statusCode: xhr.status,
                    body: jsonResponse
                };
                resolve(response);
            };
            xhr.onerror = function () {
                reject(xhr.status);
            };
            if (method === Constants_1.NetworkRequestType.GET) {
                xhr.send();
            }
            else {
                throw "not implemented";
            }
        });
    };
    XhrClient.prototype.handleError = function (responseText) {
        var jsonResponse;
        try {
            jsonResponse = JSON.parse(responseText);
            if (jsonResponse["error"]) {
                return jsonResponse["error"];
            }
            else {
                throw responseText;
            }
        }
        catch (e) {
            return responseText;
        }
    };
    return XhrClient;
}());
exports.XhrClient = XhrClient;


/***/ }),

/***/ 660:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Authority = exports.AuthorityType = void 0;
var tslib_1 = __webpack_require__(795);
var ClientConfigurationError_1 = __webpack_require__(550);
var XHRClient_1 = __webpack_require__(767);
var UrlUtils_1 = __webpack_require__(741);
var TrustedAuthority_1 = __webpack_require__(405);
var Constants_1 = __webpack_require__(91);
/**
 * @hidden
 */
var AuthorityType;
(function (AuthorityType) {
    AuthorityType[AuthorityType["Default"] = 0] = "Default";
    AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
})(AuthorityType = exports.AuthorityType || (exports.AuthorityType = {}));
/**
 * @hidden
 */
var Authority = /** @class */ (function () {
    function Authority(authority, validateAuthority, authorityMetadata) {
        this.IsValidationEnabled = validateAuthority;
        this.CanonicalAuthority = authority;
        this.validateAsUri();
        this.tenantDiscoveryResponse = authorityMetadata;
    }
    Authority.isAdfs = function (authorityUrl) {
        var components = UrlUtils_1.UrlUtils.GetUrlComponents(authorityUrl);
        var pathSegments = components.PathSegments;
        return (pathSegments.length && pathSegments[0].toLowerCase() === Constants_1.Constants.ADFS);
    };
    Object.defineProperty(Authority.prototype, "AuthorityType", {
        get: function () {
            return Authority.isAdfs(this.canonicalAuthority) ? AuthorityType.Adfs : AuthorityType.Default;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "Tenant", {
        get: function () {
            return this.CanonicalAuthorityUrlComponents.PathSegments[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "AuthorizationEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.AuthorizationEndpoint.replace(/{tenant}|{tenantid}/g, this.Tenant);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "EndSessionEndpoint", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.EndSessionEndpoint.replace(/{tenant}|{tenantid}/g, this.Tenant);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "SelfSignedJwtAudience", {
        get: function () {
            this.validateResolved();
            return this.tenantDiscoveryResponse.Issuer.replace(/{tenant}|{tenantid}/g, this.Tenant);
        },
        enumerable: false,
        configurable: true
    });
    Authority.prototype.validateResolved = function () {
        if (!this.hasCachedMetadata()) {
            throw "Please call ResolveEndpointsAsync first";
        }
    };
    Object.defineProperty(Authority.prototype, "CanonicalAuthority", {
        /**
         * A URL that is the authority set by the developer
         */
        get: function () {
            return this.canonicalAuthority;
        },
        set: function (url) {
            this.canonicalAuthority = UrlUtils_1.UrlUtils.CanonicalizeUri(url);
            this.canonicalAuthorityUrlComponents = null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "CanonicalAuthorityUrlComponents", {
        get: function () {
            if (!this.canonicalAuthorityUrlComponents) {
                this.canonicalAuthorityUrlComponents = UrlUtils_1.UrlUtils.GetUrlComponents(this.CanonicalAuthority);
            }
            return this.canonicalAuthorityUrlComponents;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "DefaultOpenIdConfigurationEndpoint", {
        // http://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
        get: function () {
            return (this.AuthorityType === AuthorityType.Adfs) ? "" + this.CanonicalAuthority + Constants_1.WELL_KNOWN_SUFFIX : this.CanonicalAuthority + "v2.0/" + Constants_1.WELL_KNOWN_SUFFIX;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Given a string, validate that it is of the form https://domain/path
     */
    Authority.prototype.validateAsUri = function () {
        var components;
        try {
            components = this.CanonicalAuthorityUrlComponents;
        }
        catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.invalidAuthorityType;
        }
        if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInsecure;
        }
        if (!components.PathSegments || components.PathSegments.length < 1) {
            throw ClientConfigurationError_1.ClientConfigurationErrorMessage.authorityUriInvalidPath;
        }
    };
    /**
     * Calls the OIDC endpoint and returns the response
     */
    Authority.prototype.DiscoverEndpoints = function (openIdConfigurationEndpoint, telemetryManager, correlationId) {
        var client = new XHRClient_1.XhrClient();
        var httpMethod = Constants_1.NetworkRequestType.GET;
        var httpEvent = telemetryManager.createAndStartHttpEvent(correlationId, httpMethod, openIdConfigurationEndpoint, "openIdConfigurationEndpoint");
        return client.sendRequestAsync(openIdConfigurationEndpoint, httpMethod, /* enableCaching: */ true)
            .then(function (response) {
            httpEvent.httpResponseStatus = response.statusCode;
            telemetryManager.stopEvent(httpEvent);
            return {
                AuthorizationEndpoint: response.body["authorization_endpoint"],
                EndSessionEndpoint: response.body["end_session_endpoint"],
                Issuer: response.body["issuer"]
            };
        })
            .catch(function (err) {
            httpEvent.serverErrorCode = err;
            telemetryManager.stopEvent(httpEvent);
            throw err;
        });
    };
    /**
     * Returns a promise.
     * Checks to see if the authority is in the cache
     * Discover endpoints via openid-configuration
     * If successful, caches the endpoint for later use in OIDC
     */
    Authority.prototype.resolveEndpointsAsync = function (telemetryManager, correlationId) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var host, openIdConfigurationEndpointResponse, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.IsValidationEnabled) return [3 /*break*/, 3];
                        host = this.canonicalAuthorityUrlComponents.HostNameAndPort;
                        if (!(TrustedAuthority_1.TrustedAuthority.getTrustedHostList().length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, TrustedAuthority_1.TrustedAuthority.setTrustedAuthoritiesFromNetwork(this.canonicalAuthority, telemetryManager, correlationId)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!TrustedAuthority_1.TrustedAuthority.IsInTrustedHostList(host)) {
                            throw ClientConfigurationError_1.ClientConfigurationError.createUntrustedAuthorityError(host);
                        }
                        _b.label = 3;
                    case 3:
                        openIdConfigurationEndpointResponse = this.GetOpenIdConfigurationEndpoint();
                        _a = this;
                        return [4 /*yield*/, this.DiscoverEndpoints(openIdConfigurationEndpointResponse, telemetryManager, correlationId)];
                    case 4:
                        _a.tenantDiscoveryResponse = _b.sent();
                        return [2 /*return*/, this.tenantDiscoveryResponse];
                }
            });
        });
    };
    /**
     * Checks if there is a cached tenant discovery response with required fields.
     */
    Authority.prototype.hasCachedMetadata = function () {
        return !!(this.tenantDiscoveryResponse &&
            this.tenantDiscoveryResponse.AuthorizationEndpoint &&
            this.tenantDiscoveryResponse.EndSessionEndpoint &&
            this.tenantDiscoveryResponse.Issuer);
    };
    /**
     * Returns a promise which resolves to the OIDC endpoint
     * Only responds with the endpoint
     */
    Authority.prototype.GetOpenIdConfigurationEndpoint = function () {
        return this.DefaultOpenIdConfigurationEndpoint;
    };
    return Authority;
}());
exports.Authority = Authority;


/***/ }),

/***/ 951:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorityFactory = void 0;
var tslib_1 = __webpack_require__(795);
/**
 * @hidden
 */
var Authority_1 = __webpack_require__(660);
var StringUtils_1 = __webpack_require__(454);
var ClientConfigurationError_1 = __webpack_require__(550);
var AuthorityFactory = /** @class */ (function () {
    function AuthorityFactory() {
    }
    AuthorityFactory.saveMetadataFromNetwork = function (authorityInstance, telemetryManager, correlationId) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var metadata;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, authorityInstance.resolveEndpointsAsync(telemetryManager, correlationId)];
                    case 1:
                        metadata = _a.sent();
                        this.metadataMap.set(authorityInstance.CanonicalAuthority, metadata);
                        return [2 /*return*/, metadata];
                }
            });
        });
    };
    AuthorityFactory.getMetadata = function (authorityUrl) {
        return this.metadataMap.get(authorityUrl);
    };
    AuthorityFactory.saveMetadataFromConfig = function (authorityUrl, authorityMetadataJson) {
        try {
            if (authorityMetadataJson) {
                var parsedMetadata = JSON.parse(authorityMetadataJson);
                if (!parsedMetadata.authorization_endpoint || !parsedMetadata.end_session_endpoint || !parsedMetadata.issuer) {
                    throw ClientConfigurationError_1.ClientConfigurationError.createInvalidAuthorityMetadataError();
                }
                this.metadataMap.set(authorityUrl, {
                    AuthorizationEndpoint: parsedMetadata.authorization_endpoint,
                    EndSessionEndpoint: parsedMetadata.end_session_endpoint,
                    Issuer: parsedMetadata.issuer
                });
            }
        }
        catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidAuthorityMetadataError();
        }
    };
    /**
     * Create an authority object of the correct type based on the url
     * Performs basic authority validation - checks to see if the authority is of a valid type (eg aad, b2c)
     */
    AuthorityFactory.CreateInstance = function (authorityUrl, validateAuthority, authorityMetadata) {
        if (StringUtils_1.StringUtils.isEmpty(authorityUrl)) {
            return null;
        }
        if (authorityMetadata) {
            // todo: log statements
            this.saveMetadataFromConfig(authorityUrl, authorityMetadata);
        }
        return new Authority_1.Authority(authorityUrl, validateAuthority, this.metadataMap.get(authorityUrl));
    };
    AuthorityFactory.metadataMap = new Map();
    return AuthorityFactory;
}());
exports.AuthorityFactory = AuthorityFactory;


/***/ }),

/***/ 405:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrustedAuthority = void 0;
var tslib_1 = __webpack_require__(795);
var XHRClient_1 = __webpack_require__(767);
var Constants_1 = __webpack_require__(91);
var UrlUtils_1 = __webpack_require__(741);
var TrustedAuthority = /** @class */ (function () {
    function TrustedAuthority() {
    }
    /**
     *
     * @param validateAuthority
     * @param knownAuthorities
     */
    TrustedAuthority.setTrustedAuthoritiesFromConfig = function (validateAuthority, knownAuthorities) {
        if (validateAuthority && !this.getTrustedHostList().length) {
            knownAuthorities.forEach(function (authority) {
                TrustedAuthority.TrustedHostList.push(authority.toLowerCase());
            });
        }
    };
    /**
     *
     * @param telemetryManager
     * @param correlationId
     */
    TrustedAuthority.getAliases = function (authorityToVerify, telemetryManager, correlationId) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var client, httpMethod, instanceDiscoveryEndpoint, httpEvent;
            return tslib_1.__generator(this, function (_a) {
                client = new XHRClient_1.XhrClient();
                httpMethod = Constants_1.NetworkRequestType.GET;
                instanceDiscoveryEndpoint = "" + Constants_1.AAD_INSTANCE_DISCOVERY_ENDPOINT + authorityToVerify + "oauth2/v2.0/authorize";
                httpEvent = telemetryManager.createAndStartHttpEvent(correlationId, httpMethod, instanceDiscoveryEndpoint, "getAliases");
                return [2 /*return*/, client.sendRequestAsync(instanceDiscoveryEndpoint, httpMethod, true)
                        .then(function (response) {
                        httpEvent.httpResponseStatus = response.statusCode;
                        telemetryManager.stopEvent(httpEvent);
                        return response.body["metadata"];
                    })
                        .catch(function (err) {
                        httpEvent.serverErrorCode = err;
                        telemetryManager.stopEvent(httpEvent);
                        throw err;
                    })];
            });
        });
    };
    /**
     *
     * @param telemetryManager
     * @param correlationId
     */
    TrustedAuthority.setTrustedAuthoritiesFromNetwork = function (authorityToVerify, telemetryManager, correlationId) {
        return tslib_1.__awaiter(this, void 0, Promise, function () {
            var metadata, host;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAliases(authorityToVerify, telemetryManager, correlationId)];
                    case 1:
                        metadata = _a.sent();
                        metadata.forEach(function (entry) {
                            var authorities = entry["aliases"];
                            authorities.forEach(function (authority) {
                                TrustedAuthority.TrustedHostList.push(authority.toLowerCase());
                            });
                        });
                        host = UrlUtils_1.UrlUtils.GetUrlComponents(authorityToVerify).HostNameAndPort;
                        if (TrustedAuthority.getTrustedHostList().length && !TrustedAuthority.IsInTrustedHostList(host)) {
                            // Custom Domain scenario, host is trusted because Instance Discovery call succeeded
                            TrustedAuthority.TrustedHostList.push(host.toLowerCase());
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TrustedAuthority.getTrustedHostList = function () {
        return this.TrustedHostList;
    };
    /**
     * Checks to see if the host is in a list of trusted hosts
     * @param host
     */
    TrustedAuthority.IsInTrustedHostList = function (host) {
        return this.TrustedHostList.indexOf(host.toLowerCase()) > -1;
    };
    TrustedAuthority.TrustedHostList = [];
    return TrustedAuthority;
}());
exports.TrustedAuthority = TrustedAuthority;


/***/ }),

/***/ 644:
/***/ (function(__unused_webpack_module, exports) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessTokenCacheItem = void 0;
/**
 * @hidden
 */
var AccessTokenCacheItem = /** @class */ (function () {
    function AccessTokenCacheItem(key, value) {
        this.key = key;
        this.value = value;
    }
    return AccessTokenCacheItem;
}());
exports.AccessTokenCacheItem = AccessTokenCacheItem;


/***/ }),

/***/ 29:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessTokenKey = void 0;
var CryptoUtils_1 = __webpack_require__(453);
var UrlUtils_1 = __webpack_require__(741);
/**
 * @hidden
 */
var AccessTokenKey = /** @class */ (function () {
    function AccessTokenKey(authority, clientId, scopes, uid, utid) {
        this.authority = UrlUtils_1.UrlUtils.CanonicalizeUri(authority);
        this.clientId = clientId;
        this.scopes = scopes;
        this.homeAccountIdentifier = CryptoUtils_1.CryptoUtils.base64Encode(uid) + "." + CryptoUtils_1.CryptoUtils.base64Encode(utid);
    }
    return AccessTokenKey;
}());
exports.AccessTokenKey = AccessTokenKey;


/***/ }),

/***/ 192:
/***/ (function(__unused_webpack_module, exports) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessTokenValue = void 0;
/**
 * @hidden
 */
var AccessTokenValue = /** @class */ (function () {
    function AccessTokenValue(accessToken, idToken, expiresIn, homeAccountIdentifier) {
        this.accessToken = accessToken;
        this.idToken = idToken;
        this.expiresIn = expiresIn;
        this.homeAccountIdentifier = homeAccountIdentifier;
    }
    return AccessTokenValue;
}());
exports.AccessTokenValue = AccessTokenValue;


/***/ }),

/***/ 226:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthCache = void 0;
var tslib_1 = __webpack_require__(795);
var Constants_1 = __webpack_require__(91);
var AccessTokenCacheItem_1 = __webpack_require__(644);
var BrowserStorage_1 = __webpack_require__(96);
var RequestUtils_1 = __webpack_require__(52);
var StringUtils_1 = __webpack_require__(454);
var IdToken_1 = __webpack_require__(881);
/**
 * @hidden
 */
var AuthCache = /** @class */ (function (_super) {
    tslib_1.__extends(AuthCache, _super);
    function AuthCache(clientId, cacheLocation, storeAuthStateInCookie) {
        var _this = _super.call(this, cacheLocation) || this;
        _this.temporaryCache = new BrowserStorage_1.BrowserStorage(Constants_1.SESSION_STORAGE);
        _this.clientId = clientId;
        // This is hardcoded to true for now. We may make this configurable in the future
        _this.rollbackEnabled = true;
        _this.migrateCacheEntries(storeAuthStateInCookie);
        return _this;
    }
    /**
     * Support roll back to old cache schema until the next major release: true by default now
     * @param storeAuthStateInCookie
     */
    AuthCache.prototype.migrateCacheEntries = function (storeAuthStateInCookie) {
        var _this = this;
        var idTokenKey = Constants_1.Constants.cachePrefix + "." + Constants_1.PersistentCacheKeys.IDTOKEN;
        var clientInfoKey = Constants_1.Constants.cachePrefix + "." + Constants_1.PersistentCacheKeys.CLIENT_INFO;
        var errorKey = Constants_1.Constants.cachePrefix + "." + Constants_1.ErrorCacheKeys.ERROR;
        var errorDescKey = Constants_1.Constants.cachePrefix + "." + Constants_1.ErrorCacheKeys.ERROR_DESC;
        var idTokenValue = _super.prototype.getItem.call(this, idTokenKey);
        var idToken;
        if (idTokenValue) {
            try {
                idToken = new IdToken_1.IdToken(idTokenValue);
            }
            catch (e) {
                return;
            }
        }
        if (idToken && idToken.claims && idToken.claims.aud === this.clientId) {
            var clientInfoValue = _super.prototype.getItem.call(this, clientInfoKey);
            var errorValue = _super.prototype.getItem.call(this, errorKey);
            var errorDescValue = _super.prototype.getItem.call(this, errorDescKey);
            var values_1 = [idTokenValue, clientInfoValue, errorValue, errorDescValue];
            var keysToMigrate = [Constants_1.PersistentCacheKeys.IDTOKEN, Constants_1.PersistentCacheKeys.CLIENT_INFO, Constants_1.ErrorCacheKeys.ERROR, Constants_1.ErrorCacheKeys.ERROR_DESC];
            keysToMigrate.forEach(function (cacheKey, index) { return _this.duplicateCacheEntry(cacheKey, values_1[index], storeAuthStateInCookie); });
        }
    };
    /**
     * Utility function to help with roll back keys
     * @param newKey
     * @param value
     * @param storeAuthStateInCookie
     */
    AuthCache.prototype.duplicateCacheEntry = function (newKey, value, storeAuthStateInCookie) {
        if (value) {
            this.setItem(newKey, value, storeAuthStateInCookie);
        }
    };
    /**
     * Prepend msal.<client-id> to each key; Skip for any JSON object as Key (defined schemas do not need the key appended: AccessToken Keys or the upcoming schema)
     * @param key
     * @param addInstanceId
     */
    AuthCache.prototype.generateCacheKey = function (key, addInstanceId) {
        try {
            // Defined schemas do not need the key appended
            JSON.parse(key);
            return key;
        }
        catch (e) {
            if (key.indexOf("" + Constants_1.Constants.cachePrefix) === 0 || key.indexOf(Constants_1.Constants.adalIdToken) === 0) {
                return key;
            }
            return addInstanceId ? Constants_1.Constants.cachePrefix + "." + this.clientId + "." + key : Constants_1.Constants.cachePrefix + "." + key;
        }
    };
    /**
     * Validates that the input cache key contains the account search terms (clientId and homeAccountIdentifier) and
     * then whether or not it contains the "scopes", depending on the token type being searched for. With matching account
     * search terms, Access Token search tries to match the "scopes" keyword, while Id Token search expects "scopes" to not be included.
     * @param key
     * @param clientId
     * @param homeAccountIdentifier
     * @param tokenType
     */
    AuthCache.prototype.matchKeyForType = function (key, clientId, homeAccountIdentifier, tokenType) {
        // All valid token cache item keys are valid JSON objects, ignore keys that aren't
        var parsedKey = StringUtils_1.StringUtils.validateAndParseJsonCacheKey(key);
        if (!parsedKey) {
            return null;
        }
        // Does the cache item match the request account
        var accountMatches = key.match(clientId) && key.match(homeAccountIdentifier);
        // Does the cache item match the requested token type
        var tokenTypeMatches = false;
        switch (tokenType) {
            case Constants_1.ServerHashParamKeys.ACCESS_TOKEN:
                // Cache item is an access token if scopes are included in the cache item key
                tokenTypeMatches = !!key.match(Constants_1.Constants.scopes);
                break;
            case Constants_1.ServerHashParamKeys.ID_TOKEN:
                // Cache may be an ID token if scopes are NOT included in the cache item key
                tokenTypeMatches = !key.match(Constants_1.Constants.scopes);
                break;
        }
        return (accountMatches && tokenTypeMatches) ? parsedKey : null;
    };
    /**
     * add value to storage
     * @param key
     * @param value
     * @param enableCookieStorage
     */
    AuthCache.prototype.setItem = function (key, value, enableCookieStorage) {
        _super.prototype.setItem.call(this, this.generateCacheKey(key, true), value, enableCookieStorage);
        // Values stored in cookies will have rollback disabled to minimize cookie length
        if (this.rollbackEnabled && !enableCookieStorage) {
            _super.prototype.setItem.call(this, this.generateCacheKey(key, false), value, enableCookieStorage);
        }
    };
    /**
     * get one item by key from storage
     * @param key
     * @param enableCookieStorage
     */
    AuthCache.prototype.getItem = function (key, enableCookieStorage) {
        return _super.prototype.getItem.call(this, this.generateCacheKey(key, true), enableCookieStorage);
    };
    /**
     * remove value from storage
     * @param key
     */
    AuthCache.prototype.removeItem = function (key) {
        this.temporaryCache.removeItem(this.generateCacheKey(key, true));
        _super.prototype.removeItem.call(this, this.generateCacheKey(key, true));
        if (this.rollbackEnabled) {
            _super.prototype.removeItem.call(this, this.generateCacheKey(key, false));
        }
    };
    /**
     * Sets temporary cache value
     * @param key
     * @param value
     * @param enableCookieStorage
     */
    AuthCache.prototype.setTemporaryItem = function (key, value, enableCookieStorage) {
        this.temporaryCache.setItem(this.generateCacheKey(key, true), value, enableCookieStorage);
    };
    /**
     * Gets temporary cache value
     * @param key
     * @param enableCookieStorage
     */
    AuthCache.prototype.getTemporaryItem = function (key, enableCookieStorage) {
        return this.temporaryCache.getItem(this.generateCacheKey(key, true), enableCookieStorage);
    };
    /**
     * Reset the cache items
     */
    AuthCache.prototype.resetCacheItems = function () {
        var storage = window[this.cacheLocation];
        var key;
        for (key in storage) {
            // Check if key contains msal prefix; For now, we are clearing all cache items created by MSAL.js
            if (storage.hasOwnProperty(key) && (key.indexOf(Constants_1.Constants.cachePrefix) !== -1)) {
                _super.prototype.removeItem.call(this, key);
                // TODO: Clear cache based on client id (clarify use cases where this is needed)
            }
        }
    };
    /**
     * Reset all temporary cache items
     */
    AuthCache.prototype.resetTempCacheItems = function (state) {
        var _this = this;
        var stateId = state && RequestUtils_1.RequestUtils.parseLibraryState(state).id;
        var isTokenRenewalInProgress = this.tokenRenewalInProgress(state);
        var storage = window[this.cacheLocation];
        // check state and remove associated cache
        if (stateId && !isTokenRenewalInProgress) {
            Object.keys(storage).forEach(function (key) {
                if (key.indexOf(stateId) !== -1) {
                    _this.removeItem(key);
                    _super.prototype.clearItemCookie.call(_this, key);
                }
            });
        }
        // delete the interaction status cache
        this.setInteractionInProgress(false);
        this.removeItem(Constants_1.TemporaryCacheKeys.REDIRECT_REQUEST);
    };
    /**
     * Set cookies for IE
     * @param cName
     * @param cValue
     * @param expires
     */
    AuthCache.prototype.setItemCookie = function (cName, cValue, expires) {
        _super.prototype.setItemCookie.call(this, this.generateCacheKey(cName, true), cValue, expires);
        if (this.rollbackEnabled) {
            _super.prototype.setItemCookie.call(this, this.generateCacheKey(cName, false), cValue, expires);
        }
    };
    AuthCache.prototype.clearItemCookie = function (cName) {
        _super.prototype.clearItemCookie.call(this, this.generateCacheKey(cName, true));
        if (this.rollbackEnabled) {
            _super.prototype.clearItemCookie.call(this, this.generateCacheKey(cName, false));
        }
    };
    /**
     * get one item by key from cookies
     * @param cName
     */
    AuthCache.prototype.getItemCookie = function (cName) {
        return _super.prototype.getItemCookie.call(this, this.generateCacheKey(cName, true));
    };
    /**
     * Get all tokens of a certain type from the cache
     * @param clientId
     * @param homeAccountIdentifier
     * @param tokenType
     */
    AuthCache.prototype.getAllTokensByType = function (clientId, homeAccountIdentifier, tokenType) {
        var _this = this;
        var results = Object.keys(window[this.cacheLocation]).reduce(function (tokens, key) {
            var matchedTokenKey = _this.matchKeyForType(key, clientId, homeAccountIdentifier, tokenType);
            if (matchedTokenKey) {
                var value = _this.getItem(key);
                if (value) {
                    try {
                        var newAccessTokenCacheItem = new AccessTokenCacheItem_1.AccessTokenCacheItem(matchedTokenKey, JSON.parse(value));
                        return tokens.concat([newAccessTokenCacheItem]);
                    }
                    catch (err) {
                        // Skip cache items with non-valid JSON values
                        return tokens;
                    }
                }
            }
            return tokens;
        }, []);
        return results;
    };
    /**
     * Get all access tokens in the cache
     * @param clientId
     * @param homeAccountIdentifier
     */
    AuthCache.prototype.getAllAccessTokens = function (clientId, homeAccountIdentifier) {
        return this.getAllTokensByType(clientId, homeAccountIdentifier, Constants_1.ServerHashParamKeys.ACCESS_TOKEN);
    };
    /**
     * Get all id tokens in the cache in the form of AccessTokenCacheItem objects so they are
     * in a normalized format and can make use of the existing cached access token validation logic
     */
    AuthCache.prototype.getAllIdTokens = function (clientId, homeAccountIdentifier) {
        return this.getAllTokensByType(clientId, homeAccountIdentifier, Constants_1.ServerHashParamKeys.ID_TOKEN);
    };
    /**
     * Get all access and ID tokens in the cache
     * @param clientId
     * @param homeAccountIdentifier
     */
    AuthCache.prototype.getAllTokens = function (clientId, homeAccountIdentifier) {
        var accessTokens = this.getAllAccessTokens(clientId, homeAccountIdentifier);
        var idTokens = this.getAllIdTokens(clientId, homeAccountIdentifier);
        return tslib_1.__spreadArrays(accessTokens, idTokens);
    };
    /**
     * Returns whether or not interaction is currently in progress. Optionally scope it to just this clientId
     * @param forThisClient
     */
    AuthCache.prototype.isInteractionInProgress = function (matchClientId) {
        var clientId = this.getInteractionInProgress();
        if (matchClientId) {
            return clientId === this.clientId;
        }
        else {
            return !!clientId;
        }
    };
    /**
     * Returns the clientId of the interaction currently in progress
     */
    AuthCache.prototype.getInteractionInProgress = function () {
        return this.getTemporaryItem(this.generateCacheKey(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS, false));
    };
    /**
     * Sets interaction in progress state
     * @param isInProgress
     */
    AuthCache.prototype.setInteractionInProgress = function (newInProgressValue) {
        if (newInProgressValue && !this.isInteractionInProgress(false)) {
            // Ensure we don't overwrite interaction in progress for a different clientId
            this.setTemporaryItem(this.generateCacheKey(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS, false), this.clientId);
        }
        else if (!newInProgressValue && this.isInteractionInProgress(true)) {
            // Only remove if the current in progress interaction is for this clientId
            this.removeItem(this.generateCacheKey(Constants_1.TemporaryCacheKeys.INTERACTION_STATUS, false));
        }
    };
    /**
     * Return if the token renewal is still in progress
     *
     * @param stateValue
     */
    AuthCache.prototype.tokenRenewalInProgress = function (stateValue) {
        var renewStatus = this.getItem(AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.RENEW_STATUS, stateValue));
        return !!(renewStatus && renewStatus === Constants_1.Constants.inProgress);
    };
    /**
     * Clear all cookies
     */
    AuthCache.prototype.clearMsalCookie = function (state) {
        var _this = this;
        /*
         * If state is truthy, remove values associated with that request.
         * Otherwise, remove all MSAL cookies.
         */
        if (state) {
            this.clearItemCookie(AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.NONCE_IDTOKEN, state));
            this.clearItemCookie(AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.STATE_LOGIN, state));
            this.clearItemCookie(AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.LOGIN_REQUEST, state));
            this.clearItemCookie(AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.STATE_ACQ_TOKEN, state));
        }
        else {
            var cookies = document.cookie.split(";");
            cookies.forEach(function (cookieString) {
                var cookieName = cookieString.trim().split("=")[0];
                if (cookieName.indexOf(Constants_1.Constants.cachePrefix) > -1) {
                    _super.prototype.clearItemCookie.call(_this, cookieName);
                }
            });
        }
    };
    /**
     * Create acquireTokenAccountKey to cache account object
     * @param accountId
     * @param state
     */
    AuthCache.generateAcquireTokenAccountKey = function (accountId, state) {
        var stateId = RequestUtils_1.RequestUtils.parseLibraryState(state).id;
        return "" + Constants_1.TemporaryCacheKeys.ACQUIRE_TOKEN_ACCOUNT + Constants_1.Constants.resourceDelimiter + accountId + Constants_1.Constants.resourceDelimiter + stateId;
    };
    /**
     * Create authorityKey to cache authority
     * @param state
     */
    AuthCache.generateAuthorityKey = function (state) {
        return AuthCache.generateTemporaryCacheKey(Constants_1.TemporaryCacheKeys.AUTHORITY, state);
    };
    /**
     * Generates the cache key for temporary cache items, using request state
     * @param tempCacheKey Cache key prefix
     * @param state Request state value
     */
    AuthCache.generateTemporaryCacheKey = function (tempCacheKey, state) {
        // Use the state id (a guid), in the interest of shorter key names, which is important for cookies.
        var stateId = RequestUtils_1.RequestUtils.parseLibraryState(state).id;
        return "" + tempCacheKey + Constants_1.Constants.resourceDelimiter + stateId;
    };
    return AuthCache;
}(BrowserStorage_1.BrowserStorage));
exports.AuthCache = AuthCache;


/***/ }),

/***/ 96:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BrowserStorage = void 0;
var ClientConfigurationError_1 = __webpack_require__(550);
var AuthError_1 = __webpack_require__(986);
/**
 * @hidden
 */
var BrowserStorage = /** @class */ (function () {
    function BrowserStorage(cacheLocation) {
        if (!window) {
            throw AuthError_1.AuthError.createNoWindowObjectError("Browser storage class could not find window object");
        }
        var storageSupported = typeof window[cacheLocation] !== "undefined" && window[cacheLocation] !== null;
        if (!storageSupported) {
            throw ClientConfigurationError_1.ClientConfigurationError.createStorageNotSupportedError(cacheLocation);
        }
        this.cacheLocation = cacheLocation;
    }
    /**
     * add value to storage
     * @param key
     * @param value
     * @param enableCookieStorage
     */
    BrowserStorage.prototype.setItem = function (key, value, enableCookieStorage) {
        window[this.cacheLocation].setItem(key, value);
        if (enableCookieStorage) {
            this.setItemCookie(key, value);
        }
    };
    /**
     * get one item by key from storage
     * @param key
     * @param enableCookieStorage
     */
    BrowserStorage.prototype.getItem = function (key, enableCookieStorage) {
        if (enableCookieStorage && this.getItemCookie(key)) {
            return this.getItemCookie(key);
        }
        return window[this.cacheLocation].getItem(key);
    };
    /**
     * remove value from storage
     * @param key
     */
    BrowserStorage.prototype.removeItem = function (key) {
        return window[this.cacheLocation].removeItem(key);
    };
    /**
     * clear storage (remove all items from it)
     */
    BrowserStorage.prototype.clear = function () {
        return window[this.cacheLocation].clear();
    };
    /**
     * add value to cookies
     * @param cName
     * @param cValue
     * @param expires
     */
    BrowserStorage.prototype.setItemCookie = function (cName, cValue, expires) {
        var cookieStr = encodeURIComponent(cName) + "=" + encodeURIComponent(cValue) + ";path=/;";
        if (expires) {
            var expireTime = this.getCookieExpirationTime(expires);
            cookieStr += "expires=" + expireTime + ";";
        }
        document.cookie = cookieStr;
    };
    /**
     * get one item by key from cookies
     * @param cName
     */
    BrowserStorage.prototype.getItemCookie = function (cName) {
        var name = encodeURIComponent(cName) + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return decodeURIComponent(c.substring(name.length, c.length));
            }
        }
        return "";
    };
    /**
     * Clear an item in the cookies by key
     * @param cName
     */
    BrowserStorage.prototype.clearItemCookie = function (cName) {
        this.setItemCookie(cName, "", -1);
    };
    /**
     * Get cookie expiration time
     * @param cookieLifeDays
     */
    BrowserStorage.prototype.getCookieExpirationTime = function (cookieLifeDays) {
        var today = new Date();
        var expr = new Date(today.getTime() + cookieLifeDays * 24 * 60 * 60 * 1000);
        return expr.toUTCString();
    };
    return BrowserStorage;
}());
exports.BrowserStorage = BrowserStorage;


/***/ }),

/***/ 986:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthError = exports.AuthErrorMessage = void 0;
var tslib_1 = __webpack_require__(795);
exports.AuthErrorMessage = {
    unexpectedError: {
        code: "unexpected_error",
        desc: "Unexpected error in authentication."
    },
    noWindowObjectError: {
        code: "no_window_object",
        desc: "No window object available. Details:"
    }
};
/**
 * General error class thrown by the MSAL.js library.
 */
var AuthError = /** @class */ (function (_super) {
    tslib_1.__extends(AuthError, _super);
    function AuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorMessage) || this;
        Object.setPrototypeOf(_this, AuthError.prototype);
        _this.errorCode = errorCode;
        _this.errorMessage = errorMessage;
        _this.name = "AuthError";
        return _this;
    }
    AuthError.createUnexpectedError = function (errDesc) {
        return new AuthError(exports.AuthErrorMessage.unexpectedError.code, exports.AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
    };
    AuthError.createNoWindowObjectError = function (errDesc) {
        return new AuthError(exports.AuthErrorMessage.noWindowObjectError.code, exports.AuthErrorMessage.noWindowObjectError.desc + " " + errDesc);
    };
    return AuthError;
}(Error));
exports.AuthError = AuthError;


/***/ }),

/***/ 356:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientAuthError = exports.ClientAuthErrorMessage = void 0;
var tslib_1 = __webpack_require__(795);
var AuthError_1 = __webpack_require__(986);
var StringUtils_1 = __webpack_require__(454);
exports.ClientAuthErrorMessage = {
    endpointResolutionError: {
        code: "endpoints_resolution_error",
        desc: "Error: could not resolve endpoints. Please check network and try again."
    },
    popUpWindowError: {
        code: "popup_window_error",
        desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
    },
    tokenRenewalError: {
        code: "token_renewal_error",
        desc: "Token renewal operation failed due to timeout."
    },
    invalidIdToken: {
        code: "invalid_id_token",
        desc: "Invalid ID token format."
    },
    invalidStateError: {
        code: "invalid_state_error",
        desc: "Invalid state."
    },
    nonceMismatchError: {
        code: "nonce_mismatch_error",
        desc: "Nonce is not matching, Nonce received: "
    },
    loginProgressError: {
        code: "login_progress_error",
        desc: "Login_In_Progress: Error during login call - login is already in progress."
    },
    acquireTokenProgressError: {
        code: "acquiretoken_progress_error",
        desc: "AcquireToken_In_Progress: Error during login call - login is already in progress."
    },
    userCancelledError: {
        code: "user_cancelled",
        desc: "User cancelled the flow."
    },
    callbackError: {
        code: "callback_error",
        desc: "Error occurred in token received callback function."
    },
    userLoginRequiredError: {
        code: "user_login_error",
        desc: "User login is required. For silent calls, request must contain either sid or login_hint"
    },
    userDoesNotExistError: {
        code: "user_non_existent",
        desc: "User object does not exist. Please call a login API."
    },
    clientInfoDecodingError: {
        code: "client_info_decoding_error",
        desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
    },
    clientInfoNotPopulatedError: {
        code: "client_info_not_populated_error",
        desc: "The service did not populate client_info in the response, Please verify with the service team"
    },
    nullOrEmptyIdToken: {
        code: "null_or_empty_id_token",
        desc: "The idToken is null or empty. Please review the trace to determine the root cause."
    },
    idTokenNotParsed: {
        code: "id_token_parsing_error",
        desc: "ID token cannot be parsed. Please review stack trace to determine root cause."
    },
    tokenEncodingError: {
        code: "token_encoding_error",
        desc: "The token to be decoded is not encoded correctly."
    },
    invalidInteractionType: {
        code: "invalid_interaction_type",
        desc: "The interaction type passed to the handler was incorrect or unknown"
    },
    cacheParseError: {
        code: "cannot_parse_cache",
        desc: "The cached token key is not a valid JSON and cannot be parsed"
    },
    blockTokenRequestsInHiddenIframe: {
        code: "block_token_requests",
        desc: "Token calls are blocked in hidden iframes"
    }
};
/**
 * Error thrown when there is an error in the client code running on the browser.
 */
var ClientAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientAuthError, _super);
    function ClientAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientAuthError";
        Object.setPrototypeOf(_this, ClientAuthError.prototype);
        return _this;
    }
    ClientAuthError.createEndpointResolutionError = function (errDetail) {
        var errorMessage = exports.ClientAuthErrorMessage.endpointResolutionError.desc;
        if (errDetail && !StringUtils_1.StringUtils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
        }
        return new ClientAuthError(exports.ClientAuthErrorMessage.endpointResolutionError.code, errorMessage);
    };
    ClientAuthError.createPopupWindowError = function (errDetail) {
        var errorMessage = exports.ClientAuthErrorMessage.popUpWindowError.desc;
        if (errDetail && !StringUtils_1.StringUtils.isEmpty(errDetail)) {
            errorMessage += " Details: " + errDetail;
        }
        return new ClientAuthError(exports.ClientAuthErrorMessage.popUpWindowError.code, errorMessage);
    };
    ClientAuthError.createTokenRenewalTimeoutError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenRenewalError.code, exports.ClientAuthErrorMessage.tokenRenewalError.desc);
    };
    ClientAuthError.createInvalidIdTokenError = function (idToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidIdToken.code, exports.ClientAuthErrorMessage.invalidIdToken.desc + " Given token: " + idToken);
    };
    // TODO: Is this not a security flaw to send the user the state expected??
    ClientAuthError.createInvalidStateError = function (invalidState, actualState) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidStateError.code, exports.ClientAuthErrorMessage.invalidStateError.desc + " " + invalidState + ", state expected : " + actualState + ".");
    };
    // TODO: Is this not a security flaw to send the user the Nonce expected??
    ClientAuthError.createNonceMismatchError = function (invalidNonce, actualNonce) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nonceMismatchError.code, exports.ClientAuthErrorMessage.nonceMismatchError.desc + " " + invalidNonce + ", nonce expected : " + actualNonce + ".");
    };
    ClientAuthError.createLoginInProgressError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.loginProgressError.code, exports.ClientAuthErrorMessage.loginProgressError.desc);
    };
    ClientAuthError.createAcquireTokenInProgressError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.acquireTokenProgressError.code, exports.ClientAuthErrorMessage.acquireTokenProgressError.desc);
    };
    ClientAuthError.createUserCancelledError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userCancelledError.code, exports.ClientAuthErrorMessage.userCancelledError.desc);
    };
    ClientAuthError.createErrorInCallbackFunction = function (errorDesc) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.callbackError.code, exports.ClientAuthErrorMessage.callbackError.desc + " " + errorDesc + ".");
    };
    ClientAuthError.createUserLoginRequiredError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userLoginRequiredError.code, exports.ClientAuthErrorMessage.userLoginRequiredError.desc);
    };
    ClientAuthError.createUserDoesNotExistError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.userDoesNotExistError.code, exports.ClientAuthErrorMessage.userDoesNotExistError.desc);
    };
    ClientAuthError.createClientInfoDecodingError = function (caughtError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoDecodingError.code, exports.ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError.createClientInfoNotPopulatedError = function (caughtError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.code, exports.ClientAuthErrorMessage.clientInfoNotPopulatedError.desc + " Failed with error: " + caughtError);
    };
    ClientAuthError.createIdTokenNullOrEmptyError = function (invalidRawTokenString) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.nullOrEmptyIdToken.code, exports.ClientAuthErrorMessage.nullOrEmptyIdToken.desc + " Raw ID Token Value: " + invalidRawTokenString);
    };
    ClientAuthError.createIdTokenParsingError = function (caughtParsingError) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.idTokenNotParsed.code, exports.ClientAuthErrorMessage.idTokenNotParsed.desc + " Failed with error: " + caughtParsingError);
    };
    ClientAuthError.createTokenEncodingError = function (incorrectlyEncodedToken) {
        return new ClientAuthError(exports.ClientAuthErrorMessage.tokenEncodingError.code, exports.ClientAuthErrorMessage.tokenEncodingError.desc + " Attempted to decode: " + incorrectlyEncodedToken);
    };
    ClientAuthError.createInvalidInteractionTypeError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.invalidInteractionType.code, exports.ClientAuthErrorMessage.invalidInteractionType.desc);
    };
    ClientAuthError.createCacheParseError = function (key) {
        var errorMessage = "invalid key: " + key + ", " + exports.ClientAuthErrorMessage.cacheParseError.desc;
        return new ClientAuthError(exports.ClientAuthErrorMessage.cacheParseError.code, errorMessage);
    };
    ClientAuthError.createBlockTokenRequestsInHiddenIframeError = function () {
        return new ClientAuthError(exports.ClientAuthErrorMessage.blockTokenRequestsInHiddenIframe.code, exports.ClientAuthErrorMessage.blockTokenRequestsInHiddenIframe.desc);
    };
    return ClientAuthError;
}(AuthError_1.AuthError));
exports.ClientAuthError = ClientAuthError;


/***/ }),

/***/ 550:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClientConfigurationError = exports.ClientConfigurationErrorMessage = void 0;
var tslib_1 = __webpack_require__(795);
var ClientAuthError_1 = __webpack_require__(356);
exports.ClientConfigurationErrorMessage = {
    configurationNotSet: {
        code: "no_config_set",
        desc: "Configuration has not been set. Please call the UserAgentApplication constructor with a valid Configuration object."
    },
    storageNotSupported: {
        code: "storage_not_supported",
        desc: "The value for the cacheLocation is not supported."
    },
    noRedirectCallbacksSet: {
        code: "no_redirect_callbacks",
        desc: "No redirect callbacks have been set. Please call handleRedirectCallback() with the appropriate function arguments before continuing. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    invalidCallbackObject: {
        code: "invalid_callback_object",
        desc: "The object passed for the callback was invalid. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    scopesRequired: {
        code: "scopes_required",
        desc: "Scopes are required to obtain an access token."
    },
    emptyScopes: {
        code: "empty_input_scopes_error",
        desc: "Scopes cannot be passed as empty array."
    },
    nonArrayScopes: {
        code: "nonarray_input_scopes_error",
        desc: "Scopes cannot be passed as non-array."
    },
    invalidPrompt: {
        code: "invalid_prompt_value",
        desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'",
    },
    invalidAuthorityType: {
        code: "invalid_authority_type",
        desc: "The given authority is not a valid type of authority supported by MSAL. Please see here for valid authorities: <insert URL here>."
    },
    authorityUriInsecure: {
        code: "authority_uri_insecure",
        desc: "Authority URIs must use https."
    },
    authorityUriInvalidPath: {
        code: "authority_uri_invalid_path",
        desc: "Given authority URI is invalid."
    },
    unsupportedAuthorityValidation: {
        code: "unsupported_authority_validation",
        desc: "The authority validation is not supported for this authority type."
    },
    untrustedAuthority: {
        code: "untrusted_authority",
        desc: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter or set validateAuthority=false."
    },
    b2cAuthorityUriInvalidPath: {
        code: "b2c_authority_uri_invalid_path",
        desc: "The given URI for the B2C authority is invalid."
    },
    b2cKnownAuthoritiesNotSet: {
        code: "b2c_known_authorities_not_set",
        desc: "Must set known authorities when validateAuthority is set to True and using B2C"
    },
    claimsRequestParsingError: {
        code: "claims_request_parsing_error",
        desc: "Could not parse the given claims request object."
    },
    emptyRequestError: {
        code: "empty_request_error",
        desc: "Request object is required."
    },
    invalidCorrelationIdError: {
        code: "invalid_guid_sent_as_correlationId",
        desc: "Please set the correlationId as a valid guid"
    },
    telemetryConfigError: {
        code: "telemetry_config_error",
        desc: "Telemetry config is not configured with required values"
    },
    ssoSilentError: {
        code: "sso_silent_error",
        desc: "request must contain either sid or login_hint"
    },
    invalidAuthorityMetadataError: {
        code: "authority_metadata_error",
        desc: "Invalid authorityMetadata. Must be a JSON object containing authorization_endpoint, end_session_endpoint, and issuer fields."
    }
};
/**
 * Error thrown when there is an error in configuration of the .js library.
 */
var ClientConfigurationError = /** @class */ (function (_super) {
    tslib_1.__extends(ClientConfigurationError, _super);
    function ClientConfigurationError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientConfigurationError";
        Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
        return _this;
    }
    ClientConfigurationError.createNoSetConfigurationError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.configurationNotSet.code, "" + exports.ClientConfigurationErrorMessage.configurationNotSet.desc);
    };
    ClientConfigurationError.createStorageNotSupportedError = function (givenCacheLocation) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.storageNotSupported.code, exports.ClientConfigurationErrorMessage.storageNotSupported.desc + " Given location: " + givenCacheLocation);
    };
    ClientConfigurationError.createRedirectCallbacksNotSetError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.code, exports.ClientConfigurationErrorMessage.noRedirectCallbacksSet.desc);
    };
    ClientConfigurationError.createInvalidCallbackObjectError = function (callbackObject) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCallbackObject.code, exports.ClientConfigurationErrorMessage.invalidCallbackObject.desc + " Given value for callback function: " + callbackObject);
    };
    ClientConfigurationError.createEmptyScopesArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.emptyScopes.code, exports.ClientConfigurationErrorMessage.emptyScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesNonArrayError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.nonArrayScopes.code, exports.ClientConfigurationErrorMessage.nonArrayScopes.desc + " Given value: " + scopesValue + ".");
    };
    ClientConfigurationError.createScopesRequiredError = function (scopesValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.scopesRequired.code, exports.ClientConfigurationErrorMessage.scopesRequired.desc + " Given value: " + scopesValue);
    };
    ClientConfigurationError.createInvalidPromptError = function (promptValue) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidPrompt.code, exports.ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
    };
    ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.claimsRequestParsingError.code, exports.ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
    };
    ClientConfigurationError.createEmptyRequestError = function () {
        var _a = exports.ClientConfigurationErrorMessage.emptyRequestError, code = _a.code, desc = _a.desc;
        return new ClientConfigurationError(code, desc);
    };
    ClientConfigurationError.createInvalidCorrelationIdError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidCorrelationIdError.code, exports.ClientConfigurationErrorMessage.invalidCorrelationIdError.desc);
    };
    ClientConfigurationError.createKnownAuthoritiesNotSetError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.b2cKnownAuthoritiesNotSet.code, exports.ClientConfigurationErrorMessage.b2cKnownAuthoritiesNotSet.desc);
    };
    ClientConfigurationError.createInvalidAuthorityTypeError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidAuthorityType.code, exports.ClientConfigurationErrorMessage.invalidAuthorityType.desc);
    };
    ClientConfigurationError.createUntrustedAuthorityError = function (host) {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.untrustedAuthority.code, exports.ClientConfigurationErrorMessage.untrustedAuthority.desc + " Provided Authority: " + host);
    };
    ClientConfigurationError.createTelemetryConfigError = function (config) {
        var _a = exports.ClientConfigurationErrorMessage.telemetryConfigError, code = _a.code, desc = _a.desc;
        var requiredKeys = {
            applicationName: "string",
            applicationVersion: "string",
            telemetryEmitter: "function"
        };
        var missingKeys = Object.keys(requiredKeys)
            .reduce(function (keys, key) {
            return config[key] ? keys : keys.concat([key + " (" + requiredKeys[key] + ")"]);
        }, []);
        return new ClientConfigurationError(code, desc + " mising values: " + missingKeys.join(","));
    };
    ClientConfigurationError.createSsoSilentError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.ssoSilentError.code, exports.ClientConfigurationErrorMessage.ssoSilentError.desc);
    };
    ClientConfigurationError.createInvalidAuthorityMetadataError = function () {
        return new ClientConfigurationError(exports.ClientConfigurationErrorMessage.invalidAuthorityMetadataError.code, exports.ClientConfigurationErrorMessage.invalidAuthorityMetadataError.desc);
    };
    return ClientConfigurationError;
}(ClientAuthError_1.ClientAuthError));
exports.ClientConfigurationError = ClientConfigurationError;


/***/ }),

/***/ 961:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteractionRequiredAuthError = exports.InteractionRequiredAuthErrorMessage = void 0;
var tslib_1 = __webpack_require__(795);
var ServerError_1 = __webpack_require__(447);
exports.InteractionRequiredAuthErrorMessage = {
    interactionRequired: {
        code: "interaction_required"
    },
    consentRequired: {
        code: "consent_required"
    },
    loginRequired: {
        code: "login_required"
    },
};
/**
 * Error thrown when the user is required to perform an interactive token request.
 */
var InteractionRequiredAuthError = /** @class */ (function (_super) {
    tslib_1.__extends(InteractionRequiredAuthError, _super);
    function InteractionRequiredAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "InteractionRequiredAuthError";
        Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
        return _this;
    }
    InteractionRequiredAuthError.isInteractionRequiredError = function (errorString) {
        var interactionRequiredCodes = [
            exports.InteractionRequiredAuthErrorMessage.interactionRequired.code,
            exports.InteractionRequiredAuthErrorMessage.consentRequired.code,
            exports.InteractionRequiredAuthErrorMessage.loginRequired.code
        ];
        return errorString && interactionRequiredCodes.indexOf(errorString) > -1;
    };
    InteractionRequiredAuthError.createLoginRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.loginRequired.code, errorDesc);
    };
    InteractionRequiredAuthError.createInteractionRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.interactionRequired.code, errorDesc);
    };
    InteractionRequiredAuthError.createConsentRequiredAuthError = function (errorDesc) {
        return new InteractionRequiredAuthError(exports.InteractionRequiredAuthErrorMessage.consentRequired.code, errorDesc);
    };
    return InteractionRequiredAuthError;
}(ServerError_1.ServerError));
exports.InteractionRequiredAuthError = InteractionRequiredAuthError;


/***/ }),

/***/ 447:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServerError = exports.ServerErrorMessage = void 0;
var tslib_1 = __webpack_require__(795);
var AuthError_1 = __webpack_require__(986);
exports.ServerErrorMessage = {
    serverUnavailable: {
        code: "server_unavailable",
        desc: "Server is temporarily unavailable."
    },
    unknownServerError: {
        code: "unknown_server_error"
    },
};
/**
 * Error thrown when there is an error with the server code, for example, unavailability.
 */
var ServerError = /** @class */ (function (_super) {
    tslib_1.__extends(ServerError, _super);
    function ServerError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ServerError";
        Object.setPrototypeOf(_this, ServerError.prototype);
        return _this;
    }
    ServerError.createServerUnavailableError = function () {
        return new ServerError(exports.ServerErrorMessage.serverUnavailable.code, exports.ServerErrorMessage.serverUnavailable.desc);
    };
    ServerError.createUnknownServerError = function (errorDesc) {
        return new ServerError(exports.ServerErrorMessage.unknownServerError.code, errorDesc);
    };
    return ServerError;
}(AuthError_1.AuthError));
exports.ServerError = ServerError;


/***/ }),

/***/ 700:
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.version = exports.name = void 0;
/* eslint-disable header/header */
exports.name = "msal";
exports.version = "1.4.15";


/***/ }),

/***/ 663:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.API_EVENT_IDENTIFIER = exports.API_CODE = exports.EVENT_KEYS = void 0;
var tslib_1 = __webpack_require__(795);
var TelemetryEvent_1 = tslib_1.__importDefault(__webpack_require__(336));
var TelemetryConstants_1 = __webpack_require__(810);
var TelemetryUtils_1 = __webpack_require__(847);
exports.EVENT_KEYS = {
    AUTHORITY: TelemetryUtils_1.prependEventNamePrefix("authority"),
    AUTHORITY_TYPE: TelemetryUtils_1.prependEventNamePrefix("authority_type"),
    PROMPT: TelemetryUtils_1.prependEventNamePrefix("ui_behavior"),
    TENANT_ID: TelemetryUtils_1.prependEventNamePrefix("tenant_id"),
    USER_ID: TelemetryUtils_1.prependEventNamePrefix("user_id"),
    WAS_SUCESSFUL: TelemetryUtils_1.prependEventNamePrefix("was_successful"),
    API_ERROR_CODE: TelemetryUtils_1.prependEventNamePrefix("api_error_code"),
    LOGIN_HINT: TelemetryUtils_1.prependEventNamePrefix("login_hint")
};
var API_CODE;
(function (API_CODE) {
    API_CODE[API_CODE["AcquireTokenRedirect"] = 2001] = "AcquireTokenRedirect";
    API_CODE[API_CODE["AcquireTokenSilent"] = 2002] = "AcquireTokenSilent";
    API_CODE[API_CODE["AcquireTokenPopup"] = 2003] = "AcquireTokenPopup";
    API_CODE[API_CODE["LoginRedirect"] = 2004] = "LoginRedirect";
    API_CODE[API_CODE["LoginPopup"] = 2005] = "LoginPopup";
    API_CODE[API_CODE["Logout"] = 2006] = "Logout";
})(API_CODE = exports.API_CODE || (exports.API_CODE = {}));
var API_EVENT_IDENTIFIER;
(function (API_EVENT_IDENTIFIER) {
    API_EVENT_IDENTIFIER["AcquireTokenRedirect"] = "AcquireTokenRedirect";
    API_EVENT_IDENTIFIER["AcquireTokenSilent"] = "AcquireTokenSilent";
    API_EVENT_IDENTIFIER["AcquireTokenPopup"] = "AcquireTokenPopup";
    API_EVENT_IDENTIFIER["LoginRedirect"] = "LoginRedirect";
    API_EVENT_IDENTIFIER["LoginPopup"] = "LoginPopup";
    API_EVENT_IDENTIFIER["Logout"] = "Logout";
})(API_EVENT_IDENTIFIER = exports.API_EVENT_IDENTIFIER || (exports.API_EVENT_IDENTIFIER = {}));
var mapEventIdentiferToCode = (_a = {},
    _a[API_EVENT_IDENTIFIER.AcquireTokenSilent] = API_CODE.AcquireTokenSilent,
    _a[API_EVENT_IDENTIFIER.AcquireTokenPopup] = API_CODE.AcquireTokenPopup,
    _a[API_EVENT_IDENTIFIER.AcquireTokenRedirect] = API_CODE.AcquireTokenRedirect,
    _a[API_EVENT_IDENTIFIER.LoginPopup] = API_CODE.LoginPopup,
    _a[API_EVENT_IDENTIFIER.LoginRedirect] = API_CODE.LoginRedirect,
    _a[API_EVENT_IDENTIFIER.Logout] = API_CODE.Logout,
    _a);
var ApiEvent = /** @class */ (function (_super) {
    tslib_1.__extends(ApiEvent, _super);
    function ApiEvent(correlationId, piiEnabled, apiEventIdentifier) {
        var _this = _super.call(this, TelemetryUtils_1.prependEventNamePrefix("api_event"), correlationId, apiEventIdentifier) || this;
        if (apiEventIdentifier) {
            _this.apiCode = mapEventIdentiferToCode[apiEventIdentifier];
            _this.apiEventIdentifier = apiEventIdentifier;
        }
        _this.piiEnabled = piiEnabled;
        return _this;
    }
    Object.defineProperty(ApiEvent.prototype, "apiEventIdentifier", {
        set: function (apiEventIdentifier) {
            this.event[TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.ApiTelemIdConstStrKey] = apiEventIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "apiCode", {
        set: function (apiCode) {
            this.event[TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.ApiIdConstStrKey] = apiCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "authority", {
        set: function (uri) {
            this.event[exports.EVENT_KEYS.AUTHORITY] = TelemetryUtils_1.scrubTenantFromUri(uri).toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "apiErrorCode", {
        set: function (errorCode) {
            this.event[exports.EVENT_KEYS.API_ERROR_CODE] = errorCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "tenantId", {
        set: function (tenantId) {
            this.event[exports.EVENT_KEYS.TENANT_ID] = this.piiEnabled && tenantId ?
                TelemetryUtils_1.hashPersonalIdentifier(tenantId)
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "accountId", {
        set: function (accountId) {
            this.event[exports.EVENT_KEYS.USER_ID] = this.piiEnabled && accountId ?
                TelemetryUtils_1.hashPersonalIdentifier(accountId)
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "wasSuccessful", {
        get: function () {
            return this.event[exports.EVENT_KEYS.WAS_SUCESSFUL] === true;
        },
        set: function (wasSuccessful) {
            this.event[exports.EVENT_KEYS.WAS_SUCESSFUL] = wasSuccessful;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "loginHint", {
        set: function (loginHint) {
            this.event[exports.EVENT_KEYS.LOGIN_HINT] = this.piiEnabled && loginHint ?
                TelemetryUtils_1.hashPersonalIdentifier(loginHint)
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "authorityType", {
        set: function (authorityType) {
            this.event[exports.EVENT_KEYS.AUTHORITY_TYPE] = authorityType.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiEvent.prototype, "promptType", {
        set: function (promptType) {
            this.event[exports.EVENT_KEYS.PROMPT] = promptType.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    return ApiEvent;
}(TelemetryEvent_1.default));
exports["default"] = ApiEvent;


/***/ }),

/***/ 868:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(795);
var TelemetryConstants_1 = __webpack_require__(810);
var TelemetryEvent_1 = tslib_1.__importDefault(__webpack_require__(336));
var TelemetryUtils_1 = __webpack_require__(847);
var DefaultEvent = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultEvent, _super);
    // TODO Platform Type
    function DefaultEvent(platform, correlationId, clientId, eventCount) {
        var _this = _super.call(this, TelemetryUtils_1.prependEventNamePrefix("default_event"), correlationId, "DefaultEvent") || this;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("client_id")] = clientId;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_plaform")] = platform.sdk;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("sdk_version")] = platform.sdkVersion;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("application_name")] = platform.applicationName;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("application_version")] = platform.applicationVersion;
        _this.event[TelemetryUtils_1.prependEventNamePrefix("effective_connection_speed")] = platform.networkInformation && platform.networkInformation.connectionSpeed;
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.UiEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("ui_event"), eventCount);
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.HttpEventCountTelemetryBatchKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("http_event"), eventCount);
        _this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.CacheEventCountConstStrKey] = _this.getEventCount(TelemetryUtils_1.prependEventNamePrefix("cache_event"), eventCount);
        return _this;
        // / Device id?
    }
    DefaultEvent.prototype.getEventCount = function (eventName, eventCount) {
        if (!eventCount[eventName]) {
            return 0;
        }
        return eventCount[eventName];
    };
    return DefaultEvent;
}(TelemetryEvent_1.default));
exports["default"] = DefaultEvent;


/***/ }),

/***/ 140:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EVENT_KEYS = void 0;
var tslib_1 = __webpack_require__(795);
var TelemetryEvent_1 = tslib_1.__importDefault(__webpack_require__(336));
var TelemetryUtils_1 = __webpack_require__(847);
var ServerRequestParameters_1 = __webpack_require__(436);
exports.EVENT_KEYS = {
    HTTP_PATH: TelemetryUtils_1.prependEventNamePrefix("http_path"),
    USER_AGENT: TelemetryUtils_1.prependEventNamePrefix("user_agent"),
    QUERY_PARAMETERS: TelemetryUtils_1.prependEventNamePrefix("query_parameters"),
    API_VERSION: TelemetryUtils_1.prependEventNamePrefix("api_version"),
    RESPONSE_CODE: TelemetryUtils_1.prependEventNamePrefix("response_code"),
    O_AUTH_ERROR_CODE: TelemetryUtils_1.prependEventNamePrefix("oauth_error_code"),
    HTTP_METHOD: TelemetryUtils_1.prependEventNamePrefix("http_method"),
    REQUEST_ID_HEADER: TelemetryUtils_1.prependEventNamePrefix("request_id_header"),
    SPE_INFO: TelemetryUtils_1.prependEventNamePrefix("spe_info"),
    SERVER_ERROR_CODE: TelemetryUtils_1.prependEventNamePrefix("server_error_code"),
    SERVER_SUB_ERROR_CODE: TelemetryUtils_1.prependEventNamePrefix("server_sub_error_code"),
    URL: TelemetryUtils_1.prependEventNamePrefix("url")
};
var HttpEvent = /** @class */ (function (_super) {
    tslib_1.__extends(HttpEvent, _super);
    function HttpEvent(correlationId, eventLabel) {
        return _super.call(this, TelemetryUtils_1.prependEventNamePrefix("http_event"), correlationId, eventLabel) || this;
    }
    Object.defineProperty(HttpEvent.prototype, "url", {
        set: function (url) {
            var scrubbedUri = TelemetryUtils_1.scrubTenantFromUri(url);
            this.event[exports.EVENT_KEYS.URL] = scrubbedUri && scrubbedUri.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpEvent.prototype, "httpPath", {
        set: function (httpPath) {
            this.event[exports.EVENT_KEYS.HTTP_PATH] = TelemetryUtils_1.scrubTenantFromUri(httpPath).toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpEvent.prototype, "userAgent", {
        set: function (userAgent) {
            this.event[exports.EVENT_KEYS.USER_AGENT] = userAgent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpEvent.prototype, "queryParams", {
        set: function (queryParams) {
            this.event[exports.EVENT_KEYS.QUERY_PARAMETERS] = ServerRequestParameters_1.ServerRequestParameters.generateQueryParametersString(queryParams);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpEvent.prototype, "apiVersion", {
        set: function (apiVersion) {
            this.event[exports.EVENT_KEYS.API_VERSION] = apiVersion.toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpEvent.prototype, "httpResponseStatus", {
        set: function (statusCode) {
            this.event[exports.EVENT_KEYS.RESPONSE_CODE] = statusCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpEvent.prototype, "oAuthErrorCode", {
        set: function (errorCode) {
            this.event[exports.EVENT_KEYS.O_AUTH_ERROR_CODE] = errorCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpEvent.prototype, "httpMethod", {
        set: function (httpMethod) {
            this.event[exports.EVENT_KEYS.HTTP_METHOD] = httpMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpEvent.prototype, "requestIdHeader", {
        set: function (requestIdHeader) {
            this.event[exports.EVENT_KEYS.REQUEST_ID_HEADER] = requestIdHeader;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpEvent.prototype, "speInfo", {
        /**
         * Indicates whether the request was executed on a ring serving SPE traffic.
         * An empty string indicates this occurred on an outer ring, and the string "I"
         * indicates the request occurred on the inner ring
         */
        set: function (speInfo) {
            this.event[exports.EVENT_KEYS.SPE_INFO] = speInfo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpEvent.prototype, "serverErrorCode", {
        set: function (errorCode) {
            this.event[exports.EVENT_KEYS.SERVER_ERROR_CODE] = errorCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpEvent.prototype, "serverSubErrorCode", {
        set: function (subErrorCode) {
            this.event[exports.EVENT_KEYS.SERVER_SUB_ERROR_CODE] = subErrorCode;
        },
        enumerable: false,
        configurable: true
    });
    return HttpEvent;
}(TelemetryEvent_1.default));
exports["default"] = HttpEvent;


/***/ }),

/***/ 810:
/***/ (function(__unused_webpack_module, exports) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TENANT_PLACEHOLDER = exports.TELEMETRY_BLOB_EVENT_NAMES = exports.ELAPSED_TIME_KEY = exports.START_TIME_KEY = exports.EVENT_NAME_KEY = exports.EVENT_NAME_PREFIX = void 0;
exports.EVENT_NAME_PREFIX = "msal.";
exports.EVENT_NAME_KEY = "event_name";
exports.START_TIME_KEY = "start_time";
exports.ELAPSED_TIME_KEY = "elapsed_time";
exports.TELEMETRY_BLOB_EVENT_NAMES = {
    MsalCorrelationIdConstStrKey: "Microsoft.MSAL.correlation_id",
    ApiTelemIdConstStrKey: "msal.api_telem_id",
    ApiIdConstStrKey: "msal.api_id",
    BrokerAppConstStrKey: "Microsoft_MSAL_broker_app",
    CacheEventCountConstStrKey: "Microsoft_MSAL_cache_event_count",
    HttpEventCountTelemetryBatchKey: "Microsoft_MSAL_http_event_count",
    IdpConstStrKey: "Microsoft_MSAL_idp",
    IsSilentTelemetryBatchKey: "",
    IsSuccessfulConstStrKey: "Microsoft_MSAL_is_successful",
    ResponseTimeConstStrKey: "Microsoft_MSAL_response_time",
    TenantIdConstStrKey: "Microsoft_MSAL_tenant_id",
    UiEventCountTelemetryBatchKey: "Microsoft_MSAL_ui_event_count"
};
// This is used to replace the real tenant in telemetry info
exports.TENANT_PLACEHOLDER = "<tenant>";


/***/ }),

/***/ 336:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(795);
var TelemetryConstants_1 = __webpack_require__(810);
var TelemetryUtils_1 = __webpack_require__(847);
var CryptoUtils_1 = __webpack_require__(453);
var TelemetryEvent = /** @class */ (function () {
    function TelemetryEvent(eventName, correlationId, eventLabel) {
        var _a;
        this.eventId = CryptoUtils_1.CryptoUtils.createNewGuid();
        this.label = eventLabel;
        this.event = (_a = {},
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_1.EVENT_NAME_KEY)] = eventName,
            _a[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_1.ELAPSED_TIME_KEY)] = -1,
            _a["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = correlationId,
            _a);
    }
    TelemetryEvent.prototype.setElapsedTime = function (time) {
        this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_1.ELAPSED_TIME_KEY)] = time;
    };
    TelemetryEvent.prototype.stop = function () {
        // Set duration of event
        this.setElapsedTime(+Date.now() - +this.startTimestamp);
        TelemetryUtils_1.endBrowserPerformanceMeasurement(this.displayName, this.perfStartMark, this.perfEndMark);
    };
    TelemetryEvent.prototype.start = function () {
        this.startTimestamp = Date.now();
        this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_1.START_TIME_KEY)] = this.startTimestamp;
        TelemetryUtils_1.startBrowserPerformanceMeasurement(this.perfStartMark);
    };
    Object.defineProperty(TelemetryEvent.prototype, "telemetryCorrelationId", {
        get: function () {
            return this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey];
        },
        set: function (value) {
            this.event["" + TelemetryConstants_1.TELEMETRY_BLOB_EVENT_NAMES.MsalCorrelationIdConstStrKey] = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TelemetryEvent.prototype, "eventName", {
        get: function () {
            return this.event[TelemetryUtils_1.prependEventNamePrefix(TelemetryConstants_1.EVENT_NAME_KEY)];
        },
        enumerable: false,
        configurable: true
    });
    TelemetryEvent.prototype.get = function () {
        return tslib_1.__assign(tslib_1.__assign({}, this.event), { eventId: this.eventId });
    };
    Object.defineProperty(TelemetryEvent.prototype, "key", {
        get: function () {
            return this.telemetryCorrelationId + "_" + this.eventId + "-" + this.eventName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TelemetryEvent.prototype, "displayName", {
        get: function () {
            return "Msal-" + this.label + "-" + this.telemetryCorrelationId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TelemetryEvent.prototype, "perfStartMark", {
        get: function () {
            return "start-" + this.key;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TelemetryEvent.prototype, "perfEndMark", {
        get: function () {
            return "end-" + this.key;
        },
        enumerable: false,
        configurable: true
    });
    return TelemetryEvent;
}());
exports["default"] = TelemetryEvent;


/***/ }),

/***/ 478:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(795);
var DefaultEvent_1 = tslib_1.__importDefault(__webpack_require__(868));
var Constants_1 = __webpack_require__(91);
var ApiEvent_1 = tslib_1.__importDefault(__webpack_require__(663));
var HttpEvent_1 = tslib_1.__importDefault(__webpack_require__(140));
var packageMetadata_1 = __webpack_require__(700);
var TelemetryManager = /** @class */ (function () {
    function TelemetryManager(config, telemetryEmitter, logger) {
        // correlation Id to list of events
        this.completedEvents = {};
        // event key to event
        this.inProgressEvents = {};
        // correlation id to map of eventname to count
        this.eventCountByCorrelationId = {};
        // Implement after API EVENT
        this.onlySendFailureTelemetry = false;
        // TODO THROW if bad options
        this.telemetryPlatform = tslib_1.__assign({ sdk: Constants_1.Constants.libraryName, sdkVersion: packageMetadata_1.version, networkInformation: {
                // @ts-ignore
                connectionSpeed: typeof navigator !== "undefined" && navigator.connection && navigator.connection.effectiveType
            } }, config.platform);
        this.clientId = config.clientId;
        this.onlySendFailureTelemetry = config.onlySendFailureTelemetry;
        /*
         * TODO, when i get to wiring this through, think about what it means if
         * a developer does not implement telem at all, we still instrument, but telemetryEmitter can be
         * optional?
         */
        this.telemetryEmitter = telemetryEmitter;
        this.logger = logger;
    }
    TelemetryManager.getTelemetrymanagerStub = function (clientId, logger) {
        var applicationName = "UnSetStub";
        var applicationVersion = "0.0";
        var telemetryEmitter = function () { };
        var telemetryPlatform = {
            applicationName: applicationName,
            applicationVersion: applicationVersion
        };
        var telemetryManagerConfig = {
            platform: telemetryPlatform,
            clientId: clientId
        };
        return new this(telemetryManagerConfig, telemetryEmitter, logger);
    };
    TelemetryManager.prototype.startEvent = function (event) {
        this.logger.verbose("Telemetry Event started: " + event.key);
        if (!this.telemetryEmitter) {
            return;
        }
        event.start();
        this.inProgressEvents[event.key] = event;
    };
    TelemetryManager.prototype.stopEvent = function (event) {
        this.logger.verbose("Telemetry Event stopped: " + event.key);
        if (!this.telemetryEmitter || !this.inProgressEvents[event.key]) {
            return;
        }
        event.stop();
        this.incrementEventCount(event);
        var completedEvents = this.completedEvents[event.telemetryCorrelationId];
        this.completedEvents[event.telemetryCorrelationId] = tslib_1.__spreadArrays((completedEvents || []), [event]);
        delete this.inProgressEvents[event.key];
    };
    TelemetryManager.prototype.flush = function (correlationId) {
        var _this = this;
        this.logger.verbose("Flushing telemetry events: " + correlationId);
        // If there is only unfinished events should this still return them?
        if (!this.telemetryEmitter || !this.completedEvents[correlationId]) {
            return;
        }
        var orphanedEvents = this.getOrphanedEvents(correlationId);
        orphanedEvents.forEach(function (event) { return _this.incrementEventCount(event); });
        var eventsToFlush = tslib_1.__spreadArrays(this.completedEvents[correlationId], orphanedEvents);
        delete this.completedEvents[correlationId];
        var eventCountsToFlush = this.eventCountByCorrelationId[correlationId];
        delete this.eventCountByCorrelationId[correlationId];
        // TODO add funcitonality for onlyFlushFailures after implementing api event? ??
        if (!eventsToFlush || !eventsToFlush.length) {
            return;
        }
        var defaultEvent = new DefaultEvent_1.default(this.telemetryPlatform, correlationId, this.clientId, eventCountsToFlush);
        var eventsWithDefaultEvent = tslib_1.__spreadArrays(eventsToFlush, [defaultEvent]);
        this.telemetryEmitter(eventsWithDefaultEvent.map(function (e) { return e.get(); }));
    };
    TelemetryManager.prototype.createAndStartApiEvent = function (correlationId, apiEventIdentifier) {
        var apiEvent = new ApiEvent_1.default(correlationId, this.logger.isPiiLoggingEnabled(), apiEventIdentifier);
        this.startEvent(apiEvent);
        return apiEvent;
    };
    TelemetryManager.prototype.stopAndFlushApiEvent = function (correlationId, apiEvent, wasSuccessful, errorCode) {
        apiEvent.wasSuccessful = wasSuccessful;
        if (errorCode) {
            apiEvent.apiErrorCode = errorCode;
        }
        this.stopEvent(apiEvent);
        this.flush(correlationId);
    };
    TelemetryManager.prototype.createAndStartHttpEvent = function (correlation, httpMethod, url, eventLabel) {
        var httpEvent = new HttpEvent_1.default(correlation, eventLabel);
        httpEvent.url = url;
        httpEvent.httpMethod = httpMethod;
        this.startEvent(httpEvent);
        return httpEvent;
    };
    TelemetryManager.prototype.incrementEventCount = function (event) {
        var _a;
        /*
         * TODO, name cache event different?
         * if type is cache event, change name
         */
        var eventName = event.eventName;
        var eventCount = this.eventCountByCorrelationId[event.telemetryCorrelationId];
        if (!eventCount) {
            this.eventCountByCorrelationId[event.telemetryCorrelationId] = (_a = {},
                _a[eventName] = 1,
                _a);
        }
        else {
            eventCount[eventName] = eventCount[eventName] ? eventCount[eventName] + 1 : 1;
        }
    };
    TelemetryManager.prototype.getOrphanedEvents = function (correlationId) {
        var _this = this;
        return Object.keys(this.inProgressEvents)
            .reduce(function (memo, eventKey) {
            if (eventKey.indexOf(correlationId) !== -1) {
                var event = _this.inProgressEvents[eventKey];
                delete _this.inProgressEvents[eventKey];
                return tslib_1.__spreadArrays(memo, [event]);
            }
            return memo;
        }, []);
    };
    return TelemetryManager;
}());
exports["default"] = TelemetryManager;


/***/ }),

/***/ 847:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.startBrowserPerformanceMeasurement = exports.endBrowserPerformanceMeasurement = exports.supportsBrowserPerformance = exports.prependEventNamePrefix = exports.hashPersonalIdentifier = exports.scrubTenantFromUri = void 0;
var TelemetryConstants_1 = __webpack_require__(810);
var CryptoUtils_1 = __webpack_require__(453);
var UrlUtils_1 = __webpack_require__(741);
var Authority_1 = __webpack_require__(660);
exports.scrubTenantFromUri = function (uri) {
    var url = UrlUtils_1.UrlUtils.GetUrlComponents(uri);
    // validate trusted host
    if (Authority_1.Authority.isAdfs(uri)) {
        /**
         * returning what was passed because the library needs to work with uris that are non
         * AAD trusted but passed by users such as B2C or others.
         * HTTP Events for instance can take a url to the open id config endpoint
         */
        return uri;
    }
    var pathParams = url.PathSegments;
    if (pathParams && pathParams.length >= 2) {
        var tenantPosition = pathParams[1] === "tfp" ? 2 : 1;
        if (tenantPosition < pathParams.length) {
            pathParams[tenantPosition] = TelemetryConstants_1.TENANT_PLACEHOLDER;
        }
    }
    return url.Protocol + "//" + url.HostNameAndPort + "/" + pathParams.join("/");
};
exports.hashPersonalIdentifier = function (valueToHash) {
    /*
     * TODO sha256 this
     * Current test runner is being funny with node libs that are webpacked anyway
     * need a different solution
     */
    return CryptoUtils_1.CryptoUtils.base64Encode(valueToHash);
};
exports.prependEventNamePrefix = function (suffix) { return "" + TelemetryConstants_1.EVENT_NAME_PREFIX + (suffix || ""); };
exports.supportsBrowserPerformance = function () { return !!(typeof window !== "undefined" &&
    "performance" in window &&
    window.performance.mark &&
    window.performance.measure); };
exports.endBrowserPerformanceMeasurement = function (measureName, startMark, endMark) {
    if (exports.supportsBrowserPerformance()) {
        window.performance.mark(endMark);
        window.performance.measure(measureName, startMark, endMark);
        window.performance.clearMeasures(measureName);
        window.performance.clearMarks(startMark);
        window.performance.clearMarks(endMark);
    }
};
exports.startBrowserPerformanceMeasurement = function (startMark) {
    if (exports.supportsBrowserPerformance()) {
        window.performance.mark(startMark);
    }
};


/***/ }),

/***/ 49:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthCacheUtils = void 0;
var ScopeSet_1 = __webpack_require__(55);
var UrlUtils_1 = __webpack_require__(741);
/**
 * @hidden
 */
var AuthCacheUtils = /** @class */ (function () {
    function AuthCacheUtils() {
    }
    AuthCacheUtils.filterTokenCacheItemsByScope = function (tokenCacheItems, requestScopes) {
        return tokenCacheItems.filter(function (cacheItem) {
            var cachedScopes = cacheItem.key.scopes.split(" ");
            var searchScopes = ScopeSet_1.ScopeSet.removeDefaultScopes(requestScopes);
            // If requestScopes contain only default scopes search for default scopes otherwise search for everything but default scopes
            return searchScopes.length === 0 ? ScopeSet_1.ScopeSet.containsScope(cachedScopes, requestScopes) : ScopeSet_1.ScopeSet.containsScope(cachedScopes, searchScopes);
        });
    };
    AuthCacheUtils.filterTokenCacheItemsByAuthority = function (tokenCacheItems, authority) {
        return tokenCacheItems.filter(function (cacheItem) { return UrlUtils_1.UrlUtils.CanonicalizeUri(cacheItem.key.authority) === authority; });
    };
    AuthCacheUtils.filterTokenCacheItemsByDomain = function (tokenCacheItems, requestDomain) {
        return tokenCacheItems.filter(function (cacheItem) {
            var cacheItemDomain = UrlUtils_1.UrlUtils.GetUrlComponents(cacheItem.key.authority).HostNameAndPort;
            return cacheItemDomain === requestDomain;
        });
    };
    return AuthCacheUtils;
}());
exports.AuthCacheUtils = AuthCacheUtils;


/***/ }),

/***/ 91:
/***/ (function(__unused_webpack_module, exports) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FramePrefix = exports.PromptState = exports.NetworkRequestType = exports.BlacklistedEQParams = exports.SSOTypes = exports.WELL_KNOWN_SUFFIX = exports.AAD_INSTANCE_DISCOVERY_ENDPOINT = exports.DEFAULT_AUTHORITY = exports.ErrorCacheKeys = exports.PersistentCacheKeys = exports.TemporaryCacheKeys = exports.ResponseTypes = exports.ServerHashParamKeys = exports.SESSION_STORAGE = exports.Constants = void 0;
/**
 * @hidden
 * Constants
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "libraryName", {
        get: function () { return "Msal.js"; } // used in telemetry sdkName
        ,
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "claims", {
        get: function () { return "claims"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "clientId", {
        get: function () { return "clientId"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "adalIdToken", {
        get: function () { return "adal.idtoken"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "cachePrefix", {
        get: function () { return "msal"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "scopes", {
        get: function () { return "scopes"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "no_account", {
        get: function () { return "NO_ACCOUNT"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "upn", {
        get: function () { return "upn"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "domain_hint", {
        get: function () { return "domain_hint"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_select_account", {
        get: function () { return "&prompt=select_account"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt_none", {
        get: function () { return "&prompt=none"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "prompt", {
        get: function () { return "prompt"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "response_mode_fragment", {
        get: function () { return "&response_mode=fragment"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "resourceDelimiter", {
        get: function () { return "|"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "cacheDelimiter", {
        get: function () { return "."; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpWidth", {
        get: function () { return this._popUpWidth; },
        set: function (width) {
            this._popUpWidth = width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "popUpHeight", {
        get: function () { return this._popUpHeight; },
        set: function (height) {
            this._popUpHeight = height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "login", {
        get: function () { return "LOGIN"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "renewToken", {
        get: function () { return "RENEW_TOKEN"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "unknown", {
        get: function () { return "UNKNOWN"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "ADFS", {
        get: function () { return "adfs"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "homeAccountIdentifier", {
        get: function () { return "homeAccountIdentifier"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "common", {
        get: function () { return "common"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "openidScope", {
        get: function () { return "openid"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "profileScope", {
        get: function () { return "profile"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "oidcScopes", {
        get: function () { return [this.openidScope, this.profileScope]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypeRedirect", {
        get: function () { return "redirectInteraction"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypePopup", {
        get: function () { return "popupInteraction"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "interactionTypeSilent", {
        get: function () { return "silentInteraction"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Constants, "inProgress", {
        get: function () { return "inProgress"; },
        enumerable: false,
        configurable: true
    });
    Constants._popUpWidth = 483;
    Constants._popUpHeight = 600;
    return Constants;
}());
exports.Constants = Constants;
exports.SESSION_STORAGE = "sessionStorage";
/**
 * Keys in the hashParams
 */
var ServerHashParamKeys;
(function (ServerHashParamKeys) {
    ServerHashParamKeys["SCOPE"] = "scope";
    ServerHashParamKeys["STATE"] = "state";
    ServerHashParamKeys["ERROR"] = "error";
    ServerHashParamKeys["ERROR_DESCRIPTION"] = "error_description";
    ServerHashParamKeys["ACCESS_TOKEN"] = "access_token";
    ServerHashParamKeys["ID_TOKEN"] = "id_token";
    ServerHashParamKeys["EXPIRES_IN"] = "expires_in";
    ServerHashParamKeys["SESSION_STATE"] = "session_state";
    ServerHashParamKeys["CLIENT_INFO"] = "client_info";
})(ServerHashParamKeys = exports.ServerHashParamKeys || (exports.ServerHashParamKeys = {}));
/**
 * @hidden
 * @ignore
 * response_type from OpenIDConnect
 * References: https://openid.net/specs/oauth-v2-multiple-response-types-1_0.html & https://tools.ietf.org/html/rfc6749#section-4.2.1
 *
 */
exports.ResponseTypes = {
    id_token: "id_token",
    token: "token",
    id_token_token: "id_token token"
};
/**
 * @hidden
 * CacheKeys for MSAL
 */
var TemporaryCacheKeys;
(function (TemporaryCacheKeys) {
    TemporaryCacheKeys["AUTHORITY"] = "authority";
    TemporaryCacheKeys["ACQUIRE_TOKEN_ACCOUNT"] = "acquireTokenAccount";
    TemporaryCacheKeys["SESSION_STATE"] = "session.state";
    TemporaryCacheKeys["STATE_LOGIN"] = "state.login";
    TemporaryCacheKeys["STATE_ACQ_TOKEN"] = "state.acquireToken";
    TemporaryCacheKeys["STATE_RENEW"] = "state.renew";
    TemporaryCacheKeys["NONCE_IDTOKEN"] = "nonce.idtoken";
    TemporaryCacheKeys["LOGIN_REQUEST"] = "login.request";
    TemporaryCacheKeys["RENEW_STATUS"] = "token.renew.status";
    TemporaryCacheKeys["URL_HASH"] = "urlHash";
    TemporaryCacheKeys["INTERACTION_STATUS"] = "interaction.status";
    TemporaryCacheKeys["REDIRECT_REQUEST"] = "redirect_request";
})(TemporaryCacheKeys = exports.TemporaryCacheKeys || (exports.TemporaryCacheKeys = {}));
var PersistentCacheKeys;
(function (PersistentCacheKeys) {
    PersistentCacheKeys["IDTOKEN"] = "idtoken";
    PersistentCacheKeys["CLIENT_INFO"] = "client.info";
})(PersistentCacheKeys = exports.PersistentCacheKeys || (exports.PersistentCacheKeys = {}));
var ErrorCacheKeys;
(function (ErrorCacheKeys) {
    ErrorCacheKeys["LOGIN_ERROR"] = "login.error";
    ErrorCacheKeys["ERROR"] = "error";
    ErrorCacheKeys["ERROR_DESC"] = "error.description";
})(ErrorCacheKeys = exports.ErrorCacheKeys || (exports.ErrorCacheKeys = {}));
exports.DEFAULT_AUTHORITY = "https://login.microsoftonline.com/common/";
exports.AAD_INSTANCE_DISCOVERY_ENDPOINT = exports.DEFAULT_AUTHORITY + "/discovery/instance?api-version=1.1&authorization_endpoint=";
exports.WELL_KNOWN_SUFFIX = ".well-known/openid-configuration";
/**
 * @hidden
 * SSO Types - generated to populate hints
 */
var SSOTypes;
(function (SSOTypes) {
    SSOTypes["ACCOUNT"] = "account";
    SSOTypes["SID"] = "sid";
    SSOTypes["LOGIN_HINT"] = "login_hint";
    SSOTypes["ORGANIZATIONS"] = "organizations";
    SSOTypes["CONSUMERS"] = "consumers";
    SSOTypes["ID_TOKEN"] = "id_token";
    SSOTypes["ACCOUNT_ID"] = "accountIdentifier";
    SSOTypes["HOMEACCOUNT_ID"] = "homeAccountIdentifier";
})(SSOTypes = exports.SSOTypes || (exports.SSOTypes = {}));
/**
 * @hidden
 */
exports.BlacklistedEQParams = [
    SSOTypes.SID,
    SSOTypes.LOGIN_HINT
];
exports.NetworkRequestType = {
    GET: "GET",
    POST: "POST"
};
/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 * @hidden
 */
exports.PromptState = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none"
};
/**
 * Frame name prefixes for the hidden iframe created in silent frames
 */
exports.FramePrefix = {
    ID_TOKEN_FRAME: "msalIdTokenFrame",
    TOKEN_FRAME: "msalRenewFrame"
};


/***/ }),

/***/ 453:
/***/ (function(__unused_webpack_module, exports) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CryptoUtils = void 0;
/**
 * @hidden
 */
var CryptoUtils = /** @class */ (function () {
    function CryptoUtils() {
    }
    /**
     * Creates a new random GUID
     * @returns string (GUID)
     */
    CryptoUtils.createNewGuid = function () {
        /*
         * RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
         * pseudo-random numbers.
         * The algorithm is as follows:
         *     Set the two most significant bits (bits 6 and 7) of the
         *        clock_seq_hi_and_reserved to zero and one, respectively.
         *     Set the four most significant bits (bits 12 through 15) of the
         *        time_hi_and_version field to the 4-bit version number from
         *        Section 4.1.3. Version4
         *     Set all the other bits to randomly (or pseudo-randomly) chosen
         *     values.
         * UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
         * time-low               = 4hexOctet
         * time-mid               = 2hexOctet
         * time-high-and-version  = 2hexOctet
         * clock-seq-and-reserved = hexOctet:
         * clock-seq-low          = hexOctet
         * node                   = 6hexOctet
         * Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
         * y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
         * y values are 8, 9, A, B
         */
        var cryptoObj = window.crypto; // for IE 11
        if (cryptoObj && cryptoObj.getRandomValues) {
            var buffer = new Uint8Array(16);
            cryptoObj.getRandomValues(buffer);
            // buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
            buffer[6] |= 0x40; // buffer[6] | 01000000 will set the 6 bit to 1.
            buffer[6] &= 0x4f; // buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
            // buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
            buffer[8] |= 0x80; // buffer[8] | 10000000 will set the 7 bit to 1.
            buffer[8] &= 0xbf; // buffer[8] & 10111111 will set the 6 bit to 0.
            return CryptoUtils.decimalToHex(buffer[0]) + CryptoUtils.decimalToHex(buffer[1])
                + CryptoUtils.decimalToHex(buffer[2]) + CryptoUtils.decimalToHex(buffer[3])
                + "-" + CryptoUtils.decimalToHex(buffer[4]) + CryptoUtils.decimalToHex(buffer[5])
                + "-" + CryptoUtils.decimalToHex(buffer[6]) + CryptoUtils.decimalToHex(buffer[7])
                + "-" + CryptoUtils.decimalToHex(buffer[8]) + CryptoUtils.decimalToHex(buffer[9])
                + "-" + CryptoUtils.decimalToHex(buffer[10]) + CryptoUtils.decimalToHex(buffer[11])
                + CryptoUtils.decimalToHex(buffer[12]) + CryptoUtils.decimalToHex(buffer[13])
                + CryptoUtils.decimalToHex(buffer[14]) + CryptoUtils.decimalToHex(buffer[15]);
        }
        else {
            var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            var hex = "0123456789abcdef";
            var r = 0;
            var guidResponse = "";
            for (var i = 0; i < 36; i++) {
                if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
                    // each x and y needs to be random
                    r = Math.random() * 16 | 0;
                }
                if (guidHolder[i] === "x") {
                    guidResponse += hex[r];
                }
                else if (guidHolder[i] === "y") {
                    // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                    r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                    r |= 0x8; // set pos 3 to 1 as 1???
                    guidResponse += hex[r];
                }
                else {
                    guidResponse += guidHolder[i];
                }
            }
            return guidResponse;
        }
    };
    /**
     * verifies if a string is  GUID
     * @param guid
     */
    CryptoUtils.isGuid = function (guid) {
        var regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return regexGuid.test(guid);
    };
    /**
     * Decimal to Hex
     *
     * @param num
     */
    CryptoUtils.decimalToHex = function (num) {
        var hex = num.toString(16);
        while (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };
    // See: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_4_%E2%80%93_escaping_the_string_before_encoding_it
    /**
     * encoding string to base64 - platform specific check
     *
     * @param input
     */
    CryptoUtils.base64Encode = function (input) {
        return btoa(encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
            return String.fromCharCode(Number("0x" + p1));
        }));
    };
    /**
     * Decodes a base64 encoded string.
     *
     * @param input
     */
    CryptoUtils.base64Decode = function (input) {
        var encodedString = input.replace(/-/g, "+").replace(/_/g, "/");
        switch (encodedString.length % 4) {
            case 0:
                break;
            case 2:
                encodedString += "==";
                break;
            case 3:
                encodedString += "=";
                break;
            default:
                throw new Error("Invalid base64 string");
        }
        return decodeURIComponent(atob(encodedString).split("").map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
    };
    /**
     * deserialize a string
     *
     * @param query
     */
    CryptoUtils.deserialize = function (query) {
        var match; // Regex for replacing addition symbol with a space
        var pl = /\+/g;
        var search = /([^&=]+)=([^&]*)/g;
        var decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
        var obj = {};
        match = search.exec(query);
        while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(query);
        }
        return obj;
    };
    return CryptoUtils;
}());
exports.CryptoUtils = CryptoUtils;


/***/ }),

/***/ 52:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequestUtils = void 0;
var tslib_1 = __webpack_require__(795);
var Constants_1 = __webpack_require__(91);
var ClientConfigurationError_1 = __webpack_require__(550);
var ScopeSet_1 = __webpack_require__(55);
var StringUtils_1 = __webpack_require__(454);
var CryptoUtils_1 = __webpack_require__(453);
var TimeUtils_1 = __webpack_require__(78);
var ClientAuthError_1 = __webpack_require__(356);
/**
 * @hidden
 */
var RequestUtils = /** @class */ (function () {
    function RequestUtils() {
    }
    /**
     * @ignore
     *
     * @param request
     * @param isLoginCall
     * @param cacheStorage
     * @param clientId
     *
     * validates all request parameters and generates a consumable request object
     */
    RequestUtils.validateRequest = function (request, isLoginCall, clientId, interactionType) {
        // Throw error if request is empty for acquire * calls
        if (!isLoginCall && !request) {
            throw ClientConfigurationError_1.ClientConfigurationError.createEmptyRequestError();
        }
        var scopes;
        var extraQueryParameters;
        if (request) {
            // if extraScopesToConsent is passed in loginCall, append them to the login request; Validate and filter scopes (the validate function will throw if validation fails)
            scopes = isLoginCall ? ScopeSet_1.ScopeSet.appendScopes(request.scopes, request.extraScopesToConsent) : request.scopes;
            ScopeSet_1.ScopeSet.validateInputScope(scopes, !isLoginCall);
            scopes = ScopeSet_1.ScopeSet.translateClientIdIfSingleScope(scopes, clientId);
            // validate prompt parameter
            this.validatePromptParameter(request.prompt);
            // validate extraQueryParameters
            extraQueryParameters = this.validateEQParameters(request.extraQueryParameters, request.claimsRequest);
            // validate claimsRequest
            this.validateClaimsRequest(request.claimsRequest);
        }
        // validate and generate state and correlationId
        var state = this.validateAndGenerateState(request && request.state, interactionType);
        var correlationId = this.validateAndGenerateCorrelationId(request && request.correlationId);
        var validatedRequest = tslib_1.__assign(tslib_1.__assign({}, request), { extraQueryParameters: extraQueryParameters,
            scopes: scopes,
            state: state,
            correlationId: correlationId });
        return validatedRequest;
    };
    /**
     * @ignore
     *
     * Utility to test if valid prompt value is passed in the request
     * @param request
     */
    RequestUtils.validatePromptParameter = function (prompt) {
        if (prompt) {
            if ([Constants_1.PromptState.LOGIN, Constants_1.PromptState.SELECT_ACCOUNT, Constants_1.PromptState.CONSENT, Constants_1.PromptState.NONE].indexOf(prompt) < 0) {
                throw ClientConfigurationError_1.ClientConfigurationError.createInvalidPromptError(prompt);
            }
        }
    };
    /**
     * @ignore
     *
     * Removes unnecessary or duplicate query parameters from extraQueryParameters
     * @param request
     */
    RequestUtils.validateEQParameters = function (extraQueryParameters, claimsRequest) {
        var eQParams = tslib_1.__assign({}, extraQueryParameters);
        if (!eQParams) {
            return null;
        }
        if (claimsRequest) {
            // this.logger.warning("Removed duplicate claims from extraQueryParameters. Please use either the claimsRequest field OR pass as extraQueryParameter - not both.");
            delete eQParams[Constants_1.Constants.claims];
        }
        Constants_1.BlacklistedEQParams.forEach(function (param) {
            if (eQParams[param]) {
                // this.logger.warning("Removed duplicate " + param + " from extraQueryParameters. Please use the " + param + " field in request object.");
                delete eQParams[param];
            }
        });
        return eQParams;
    };
    /**
     * @ignore
     *
     * Validates the claims passed in request is a JSON
     * TODO: More validation will be added when the server team tells us how they have actually implemented claims
     * @param claimsRequest
     */
    RequestUtils.validateClaimsRequest = function (claimsRequest) {
        if (!claimsRequest) {
            return;
        }
        try {
            JSON.parse(claimsRequest);
        }
        catch (e) {
            throw ClientConfigurationError_1.ClientConfigurationError.createClaimsRequestParsingError(e);
        }
    };
    /**
     * @ignore
     *
     * generate unique state per request
     * @param userState User-provided state value
     * @returns State string include library state and user state
     */
    RequestUtils.validateAndGenerateState = function (userState, interactionType) {
        return !StringUtils_1.StringUtils.isEmpty(userState) ? "" + RequestUtils.generateLibraryState(interactionType) + Constants_1.Constants.resourceDelimiter + userState : RequestUtils.generateLibraryState(interactionType);
    };
    /**
     * Generates the state value used by the library.
     *
     * @returns Base64 encoded string representing the state
     */
    RequestUtils.generateLibraryState = function (interactionType) {
        var stateObject = {
            id: CryptoUtils_1.CryptoUtils.createNewGuid(),
            ts: TimeUtils_1.TimeUtils.now(),
            method: interactionType
        };
        var stateString = JSON.stringify(stateObject);
        return CryptoUtils_1.CryptoUtils.base64Encode(stateString);
    };
    /**
     * Decodes the state value into a StateObject
     *
     * @param state State value returned in the request
     * @returns Parsed values from the encoded state value
     */
    RequestUtils.parseLibraryState = function (state) {
        var libraryState = decodeURIComponent(state).split(Constants_1.Constants.resourceDelimiter)[0];
        if (CryptoUtils_1.CryptoUtils.isGuid(libraryState)) {
            // If state is guid, assume timestamp is now and is redirect, as redirect should be only method where this can happen.
            return {
                id: libraryState,
                ts: TimeUtils_1.TimeUtils.now(),
                method: Constants_1.Constants.interactionTypeRedirect
            };
        }
        try {
            var stateString = CryptoUtils_1.CryptoUtils.base64Decode(libraryState);
            var stateObject = JSON.parse(stateString);
            return stateObject;
        }
        catch (e) {
            throw ClientAuthError_1.ClientAuthError.createInvalidStateError(state, null);
        }
    };
    /**
     * @ignore
     *
     * validate correlationId and generate if not valid or not set by the user
     * @param correlationId
     */
    RequestUtils.validateAndGenerateCorrelationId = function (correlationId) {
        // validate user set correlationId or set one for the user if null
        if (correlationId && !CryptoUtils_1.CryptoUtils.isGuid(correlationId)) {
            throw ClientConfigurationError_1.ClientConfigurationError.createInvalidCorrelationIdError();
        }
        return CryptoUtils_1.CryptoUtils.isGuid(correlationId) ? correlationId : CryptoUtils_1.CryptoUtils.createNewGuid();
    };
    /**
     * Create a request signature
     * @param request
     */
    RequestUtils.createRequestSignature = function (request) {
        return "" + request.scopes.join(" ").toLowerCase() + Constants_1.Constants.resourceDelimiter + request.authority;
    };
    return RequestUtils;
}());
exports.RequestUtils = RequestUtils;


/***/ }),

/***/ 756:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseUtils = void 0;
var tslib_1 = __webpack_require__(795);
var Constants_1 = __webpack_require__(91);
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * @hidden
 */
var ResponseUtils = /** @class */ (function () {
    function ResponseUtils() {
    }
    ResponseUtils.setResponseIdToken = function (originalResponse, idTokenObj) {
        if (!originalResponse) {
            return null;
        }
        else if (!idTokenObj) {
            return originalResponse;
        }
        var exp = Number(idTokenObj.expiration);
        if (exp && !originalResponse.expiresOn) {
            originalResponse.expiresOn = new Date(exp * 1000);
        }
        return tslib_1.__assign(tslib_1.__assign({}, originalResponse), { idToken: idTokenObj, idTokenClaims: idTokenObj.claims, uniqueId: idTokenObj.objectId || idTokenObj.subject, tenantId: idTokenObj.tenantId });
    };
    ResponseUtils.buildAuthResponse = function (idToken, authResponse, serverAuthenticationRequest, account, scopes, accountState) {
        switch (serverAuthenticationRequest.responseType) {
            case Constants_1.ResponseTypes.id_token:
                var idTokenResponse = tslib_1.__assign(tslib_1.__assign({}, authResponse), { tokenType: Constants_1.ServerHashParamKeys.ID_TOKEN, account: account, scopes: scopes, accountState: accountState });
                idTokenResponse = ResponseUtils.setResponseIdToken(idTokenResponse, idToken);
                return (idTokenResponse.idToken) ? idTokenResponse : null;
            case Constants_1.ResponseTypes.id_token_token:
                var idTokeTokenResponse = ResponseUtils.setResponseIdToken(authResponse, idToken);
                return (idTokeTokenResponse && idTokeTokenResponse.accessToken && idTokeTokenResponse.idToken) ? idTokeTokenResponse : null;
            case Constants_1.ResponseTypes.token:
                var tokenResponse = ResponseUtils.setResponseIdToken(authResponse, idToken);
                return tokenResponse;
            default:
                return null;
        }
    };
    return ResponseUtils;
}());
exports.ResponseUtils = ResponseUtils;


/***/ }),

/***/ 454:
/***/ (function(__unused_webpack_module, exports) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StringUtils = void 0;
/**
 * @hidden
 */
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * Check if a string is empty
     *
     * @param str
     */
    StringUtils.isEmpty = function (str) {
        return (typeof str === "undefined" || !str || 0 === str.length);
    };
    /**
     * Check if a string's value is a valid JSON object
     *
     * @param str
     */
    StringUtils.validateAndParseJsonCacheKey = function (str) {
        try {
            var parsedKey = JSON.parse(str);
            /**
             * There are edge cases in which JSON.parse will successfully parse a non-valid JSON object
             * (e.g. JSON.parse will parse an escaped string into an unescaped string), so adding a type check
             * of the parsed value is necessary in order to be certain that the string represents a valid JSON object.
             *
             */
            return (parsedKey && typeof parsedKey === "object") ? parsedKey : null;
        }
        catch (error) {
            return null;
        }
    };
    return StringUtils;
}());
exports.StringUtils = StringUtils;


/***/ }),

/***/ 78:
/***/ (function(__unused_webpack_module, exports) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TimeUtils = void 0;
/**
 * @hidden
 */
var TimeUtils = /** @class */ (function () {
    function TimeUtils() {
    }
    /**
     * Returns time in seconds for expiration based on string value passed in.
     *
     * @param expiresIn
     */
    TimeUtils.parseExpiresIn = function (expiresIn) {
        // if AAD did not send "expires_in" property, use default expiration of 3599 seconds, for some reason AAD sends 3599 as "expires_in" value instead of 3600
        var expires = expiresIn || "3599";
        return parseInt(expires, 10);
    };
    /**
     * Return the current time in Unix time (seconds). Date.getTime() returns in milliseconds.
     */
    TimeUtils.now = function () {
        return Math.round(new Date().getTime() / 1000.0);
    };
    /**
     * Returns the amount of time in milliseconds since the page loaded.
     */
    TimeUtils.relativeNowMs = function () {
        return window.performance.now();
    };
    return TimeUtils;
}());
exports.TimeUtils = TimeUtils;


/***/ }),

/***/ 94:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenUtils = void 0;
var CryptoUtils_1 = __webpack_require__(453);
var StringUtils_1 = __webpack_require__(454);
var TimeUtils_1 = __webpack_require__(78);
/**
 * @hidden
 */
var TokenUtils = /** @class */ (function () {
    function TokenUtils() {
    }
    /**
     * decode a JWT
     *
     * @param jwtToken
     */
    TokenUtils.decodeJwt = function (jwtToken) {
        if (StringUtils_1.StringUtils.isEmpty(jwtToken)) {
            return null;
        }
        var idTokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        var matches = idTokenPartsRegex.exec(jwtToken);
        if (!matches || matches.length < 4) {
            // this._requestContext.logger.warn("The returned id_token is not parseable.");
            return null;
        }
        var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
        };
        return crackedToken;
    };
    /**
     * Evaluates whether token cache item expiration is within expiration offset range
     * @param tokenCacheItem
     */
    TokenUtils.validateExpirationIsWithinOffset = function (expiration, tokenRenewalOffsetSeconds) {
        var offset = tokenRenewalOffsetSeconds || 300;
        return expiration && (expiration > TimeUtils_1.TimeUtils.now() + offset);
    };
    /**
     * Extract IdToken by decoding the RAWIdToken
     *
     * @param encodedIdToken
     */
    TokenUtils.extractIdToken = function (encodedIdToken) {
        // id token will be decoded to get the username
        var decodedToken = this.decodeJwt(encodedIdToken);
        if (!decodedToken) {
            return null;
        }
        try {
            var base64IdToken = decodedToken["JWSPayload"];
            var base64Decoded = CryptoUtils_1.CryptoUtils.base64Decode(base64IdToken);
            if (!base64Decoded) {
                // this._requestContext.logger.info("The returned id_token could not be base64 url safe decoded.");
                return null;
            }
            // ECMA script has JSON built-in support
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            // this._requestContext.logger.error("The returned id_token could not be decoded" + err);
        }
        return null;
    };
    return TokenUtils;
}());
exports.TokenUtils = TokenUtils;


/***/ }),

/***/ 741:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UrlUtils = void 0;
var Constants_1 = __webpack_require__(91);
var ScopeSet_1 = __webpack_require__(55);
var StringUtils_1 = __webpack_require__(454);
var CryptoUtils_1 = __webpack_require__(453);
/**
 * @hidden
 */
var UrlUtils = /** @class */ (function () {
    function UrlUtils() {
    }
    /**
     * generates the URL with QueryString Parameters
     * @param scopes
     */
    UrlUtils.createNavigateUrl = function (serverRequestParams) {
        var str = this.createNavigationUrlString(serverRequestParams);
        var authEndpoint = serverRequestParams.authorityInstance.AuthorizationEndpoint;
        // if the endpoint already has queryparams, lets add to it, otherwise add the first one
        if (authEndpoint.indexOf("?") < 0) {
            authEndpoint += "?";
        }
        else {
            authEndpoint += "&";
        }
        var requestUrl = "" + authEndpoint + str.join("&");
        return requestUrl;
    };
    /**
     * Generate the array of all QueryStringParams to be sent to the server
     * @param scopes
     */
    UrlUtils.createNavigationUrlString = function (serverRequestParams) {
        var scopes = ScopeSet_1.ScopeSet.appendDefaultScopes(serverRequestParams.scopes);
        var str = [];
        str.push("response_type=" + serverRequestParams.responseType);
        str.push("scope=" + encodeURIComponent(ScopeSet_1.ScopeSet.parseScope(scopes)));
        str.push("client_id=" + encodeURIComponent(serverRequestParams.clientId));
        str.push("redirect_uri=" + encodeURIComponent(serverRequestParams.redirectUri));
        str.push("state=" + encodeURIComponent(serverRequestParams.state));
        str.push("nonce=" + encodeURIComponent(serverRequestParams.nonce));
        str.push("client_info=1");
        str.push("x-client-SKU=" + serverRequestParams.xClientSku);
        str.push("x-client-Ver=" + serverRequestParams.xClientVer);
        if (serverRequestParams.promptValue) {
            str.push("prompt=" + encodeURIComponent(serverRequestParams.promptValue));
        }
        if (serverRequestParams.claimsValue) {
            str.push("claims=" + encodeURIComponent(serverRequestParams.claimsValue));
        }
        if (serverRequestParams.queryParameters) {
            str.push(serverRequestParams.queryParameters);
        }
        if (serverRequestParams.extraQueryParameters) {
            str.push(serverRequestParams.extraQueryParameters);
        }
        str.push("client-request-id=" + encodeURIComponent(serverRequestParams.correlationId));
        return str;
    };
    /**
     * Returns current window URL as redirect uri
     */
    UrlUtils.getCurrentUrl = function () {
        return window.location.href.split("?")[0].split("#")[0];
    };
    /**
     * Returns given URL with query string removed
     */
    UrlUtils.removeHashFromUrl = function (url) {
        return url.split("#")[0];
    };
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    UrlUtils.replaceTenantPath = function (url, tenantId) {
        var lowerCaseUrl = url.toLowerCase();
        var urlObject = this.GetUrlComponents(lowerCaseUrl);
        var pathArray = urlObject.PathSegments;
        if (tenantId && (pathArray.length !== 0 && (pathArray[0] === Constants_1.Constants.common || pathArray[0] === Constants_1.SSOTypes.ORGANIZATIONS || pathArray[0] === Constants_1.SSOTypes.CONSUMERS))) {
            pathArray[0] = tenantId;
        }
        return this.constructAuthorityUriFromObject(urlObject, pathArray);
    };
    UrlUtils.constructAuthorityUriFromObject = function (urlObject, pathArray) {
        return this.CanonicalizeUri(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + pathArray.join("/"));
    };
    /**
     * Checks if an authority is common (ex. https://a:b/common/)
     * @param url The url
     * @returns true if authority is common and false otherwise
     */
    UrlUtils.isCommonAuthority = function (url) {
        var authority = this.CanonicalizeUri(url);
        var pathArray = this.GetUrlComponents(authority).PathSegments;
        return (pathArray.length !== 0 && pathArray[0] === Constants_1.Constants.common);
    };
    /**
     * Checks if an authority is for organizations (ex. https://a:b/organizations/)
     * @param url The url
     * @returns true if authority is for  and false otherwise
     */
    UrlUtils.isOrganizationsAuthority = function (url) {
        var authority = this.CanonicalizeUri(url);
        var pathArray = this.GetUrlComponents(authority).PathSegments;
        return (pathArray.length !== 0 && pathArray[0] === Constants_1.SSOTypes.ORGANIZATIONS);
    };
    /**
     * Checks if an authority is for consumers (ex. https://a:b/consumers/)
     * @param url The url
     * @returns true if authority is for  and false otherwise
     */
    UrlUtils.isConsumersAuthority = function (url) {
        var authority = this.CanonicalizeUri(url);
        var pathArray = this.GetUrlComponents(authority).PathSegments;
        return (pathArray.length !== 0 && pathArray[0] === Constants_1.SSOTypes.CONSUMERS);
    };
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    UrlUtils.GetUrlComponents = function (url) {
        if (!url) {
            throw "Url required";
        }
        // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
        var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        var match = url.match(regEx);
        if (!match || match.length < 6) {
            throw "Valid url required";
        }
        var urlComponents = {
            Protocol: match[1],
            HostNameAndPort: match[4],
            AbsolutePath: match[5]
        };
        var pathSegments = urlComponents.AbsolutePath.split("/");
        pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
        urlComponents.PathSegments = pathSegments;
        if (match[6]) {
            urlComponents.Search = match[6];
        }
        if (match[8]) {
            urlComponents.Hash = match[8];
        }
        return urlComponents;
    };
    /**
     * Given a url or path, append a trailing slash if one doesnt exist
     *
     * @param url
     */
    UrlUtils.CanonicalizeUri = function (url) {
        if (url) {
            var lowerCaseUrl = url.toLowerCase();
            if (!UrlUtils.endsWith(lowerCaseUrl, "/")) {
                lowerCaseUrl += "/";
            }
            return lowerCaseUrl;
        }
        return url;
    };
    /**
     * Checks to see if the url ends with the suffix
     * Required because we are compiling for es5 instead of es6
     * @param url
     * @param str
     */
    // TODO: Rename this, not clear what it is supposed to do
    UrlUtils.endsWith = function (url, suffix) {
        if (!url || !suffix) {
            return false;
        }
        return url.indexOf(suffix, url.length - suffix.length) !== -1;
    };
    /**
     * Utils function to remove the login_hint and domain_hint from the i/p extraQueryParameters
     * @param url
     * @param name
     */
    UrlUtils.urlRemoveQueryStringParameter = function (url, name) {
        if (StringUtils_1.StringUtils.isEmpty(url)) {
            return url;
        }
        var updatedUrl = url;
        var regex = new RegExp("(\\&" + name + "=)[^\&]+");
        updatedUrl = url.replace(regex, "");
        // name=value&
        regex = new RegExp("(" + name + "=)[^\&]+&");
        updatedUrl = url.replace(regex, "");
        // name=value
        regex = new RegExp("(" + name + "=)[^\&]+");
        updatedUrl = url.replace(regex, "");
        return updatedUrl;
    };
    /**
     * @hidden
     * @ignore
     *
     * Returns the anchor part(#) of the URL
     */
    UrlUtils.getHashFromUrl = function (urlStringOrFragment) {
        var hashIndex1 = urlStringOrFragment.indexOf("#");
        var hashIndex2 = urlStringOrFragment.indexOf("#/");
        if (hashIndex2 > -1) {
            return urlStringOrFragment.substring(hashIndex2 + 2);
        }
        else if (hashIndex1 > -1) {
            return urlStringOrFragment.substring(hashIndex1 + 1);
        }
        return urlStringOrFragment;
    };
    /**
     * @hidden
     * Check if the url contains a hash with known properties
     * @ignore
     */
    UrlUtils.urlContainsHash = function (urlString) {
        var parameters = UrlUtils.deserializeHash(urlString);
        return (parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.ERROR_DESCRIPTION) ||
            parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.ERROR) ||
            parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.ACCESS_TOKEN) ||
            parameters.hasOwnProperty(Constants_1.ServerHashParamKeys.ID_TOKEN));
    };
    /**
     * @hidden
     * Returns deserialized portion of URL hash
     * @ignore
     */
    UrlUtils.deserializeHash = function (urlFragment) {
        var hash = UrlUtils.getHashFromUrl(urlFragment);
        return CryptoUtils_1.CryptoUtils.deserialize(hash);
    };
    /**
     * @ignore
     * @param {string} URI
     * @returns {string} host from the URI
     *
     * extract URI from the host
     */
    UrlUtils.getHostFromUri = function (uri) {
        // remove http:// or https:// from uri
        var extractedUri = String(uri).replace(/^(https?:)\/\//, "");
        extractedUri = extractedUri.split("/")[0];
        return extractedUri;
    };
    return UrlUtils;
}());
exports.UrlUtils = UrlUtils;


/***/ }),

/***/ 758:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WindowUtils = void 0;
var ClientAuthError_1 = __webpack_require__(356);
var UrlUtils_1 = __webpack_require__(741);
var Constants_1 = __webpack_require__(91);
var TimeUtils_1 = __webpack_require__(78);
var WindowUtils = /** @class */ (function () {
    function WindowUtils() {
    }
    /**
     * @hidden
     * Checks if the current page is running in an iframe.
     * @ignore
     */
    WindowUtils.isInIframe = function () {
        return window.parent !== window;
    };
    /**
     * @hidden
     * Check if the current page is running in a popup.
     * @ignore
     */
    WindowUtils.isInPopup = function () {
        return !!(window.opener && window.opener !== window);
    };
    /**
     * @hidden
     * @param prefix
     * @param scopes
     * @param authority
     */
    WindowUtils.generateFrameName = function (prefix, requestSignature) {
        return "" + prefix + Constants_1.Constants.resourceDelimiter + requestSignature;
    };
    /**
     * @hidden
     * Polls an iframe until it loads a url with a hash
     * @ignore
     */
    WindowUtils.monitorIframeForHash = function (contentWindow, timeout, urlNavigate, logger) {
        return new Promise(function (resolve, reject) {
            /*
             * Polling for iframes can be purely timing based,
             * since we don't need to account for interaction.
             */
            var nowMark = TimeUtils_1.TimeUtils.relativeNowMs();
            var timeoutMark = nowMark + timeout;
            logger.verbose("monitorWindowForIframe polling started");
            var intervalId = setInterval(function () {
                if (TimeUtils_1.TimeUtils.relativeNowMs() > timeoutMark) {
                    logger.error("monitorIframeForHash unable to find hash in url, timing out");
                    logger.errorPii("monitorIframeForHash polling timed out for url: " + urlNavigate);
                    clearInterval(intervalId);
                    reject(ClientAuthError_1.ClientAuthError.createTokenRenewalTimeoutError());
                    return;
                }
                var href;
                try {
                    /*
                     * Will throw if cross origin,
                     * which should be caught and ignored
                     * since we need the interval to keep running while on STS UI.
                     */
                    href = contentWindow.location.href;
                }
                catch (e) { }
                if (href && UrlUtils_1.UrlUtils.urlContainsHash(href)) {
                    logger.verbose("monitorIframeForHash found url in hash");
                    clearInterval(intervalId);
                    resolve(contentWindow.location.hash);
                }
            }, WindowUtils.POLLING_INTERVAL_MS);
        });
    };
    /**
     * @hidden
     * Polls a popup until it loads a url with a hash
     * @ignore
     */
    WindowUtils.monitorPopupForHash = function (contentWindow, timeout, urlNavigate, logger) {
        return new Promise(function (resolve, reject) {
            /*
             * Polling for popups needs to be tick-based,
             * since a non-trivial amount of time can be spent on interaction (which should not count against the timeout).
             */
            var maxTicks = timeout / WindowUtils.POLLING_INTERVAL_MS;
            var ticks = 0;
            logger.verbose("monitorWindowForHash polling started");
            var intervalId = setInterval(function () {
                if (contentWindow.closed) {
                    logger.error("monitorWindowForHash window closed");
                    clearInterval(intervalId);
                    reject(ClientAuthError_1.ClientAuthError.createUserCancelledError());
                    return;
                }
                var href;
                try {
                    /*
                     * Will throw if cross origin,
                     * which should be caught and ignored
                     * since we need the interval to keep running while on STS UI.
                     */
                    href = contentWindow.location.href;
                }
                catch (e) { }
                // Don't process blank pages or cross domain
                if (!href || href === "about:blank") {
                    return;
                }
                /*
                 * Only run clock when we are on same domain for popups
                 * as popup operations can take a long time.
                 */
                ticks++;
                if (href && UrlUtils_1.UrlUtils.urlContainsHash(href)) {
                    logger.verbose("monitorPopupForHash found url in hash");
                    clearInterval(intervalId);
                    var hash = contentWindow.location.hash;
                    WindowUtils.clearUrlFragment(contentWindow);
                    resolve(hash);
                }
                else if (ticks > maxTicks) {
                    logger.error("monitorPopupForHash unable to find hash in url, timing out");
                    logger.errorPii("monitorPopupForHash polling timed out for url: " + urlNavigate);
                    clearInterval(intervalId);
                    reject(ClientAuthError_1.ClientAuthError.createTokenRenewalTimeoutError());
                }
            }, WindowUtils.POLLING_INTERVAL_MS);
        });
    };
    /**
     * @hidden
     * Loads iframe with authorization endpoint URL
     * @ignore
     */
    WindowUtils.loadFrame = function (urlNavigate, frameName, timeoutMs, logger) {
        var _this = this;
        /*
         * This trick overcomes iframe navigation in IE
         * IE does not load the page consistently in iframe
         */
        logger.infoPii("LoadFrame: " + frameName);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var frameHandle = _this.loadFrameSync(urlNavigate, frameName, logger);
                if (!frameHandle) {
                    reject("Unable to load iframe with name: " + frameName);
                    return;
                }
                resolve(frameHandle);
            }, timeoutMs);
        });
    };
    /**
     * @hidden
     * Loads the iframe synchronously when the navigateTimeFrame is set to `0`
     * @param urlNavigate
     * @param frameName
     * @param logger
     */
    WindowUtils.loadFrameSync = function (urlNavigate, frameName, logger) {
        var frameHandle = WindowUtils.addHiddenIFrame(frameName, logger);
        // returning to handle null in loadFrame, also to avoid null object access errors
        if (!frameHandle) {
            return null;
        }
        else if (frameHandle.src === "" || frameHandle.src === "about:blank") {
            frameHandle.src = urlNavigate;
            logger.infoPii("Frame Name : " + frameName + " Navigated to: " + urlNavigate);
        }
        return frameHandle;
    };
    /**
     * @hidden
     * Adds the hidden iframe for silent token renewal.
     * @ignore
     */
    WindowUtils.addHiddenIFrame = function (iframeId, logger) {
        if (typeof iframeId === "undefined") {
            return null;
        }
        logger.info("Add msal iframe to document");
        logger.infoPii("Add msal frame to document:" + iframeId);
        var adalFrame = document.getElementById(iframeId);
        if (!adalFrame) {
            logger.verbose("Add msal iframe does not exist");
            var ifr = document.createElement("iframe");
            ifr.setAttribute("id", iframeId);
            ifr.setAttribute("aria-hidden", "true");
            ifr.style.visibility = "hidden";
            ifr.style.position = "absolute";
            ifr.style.width = ifr.style.height = "0";
            ifr.style.border = "0";
            ifr.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
            adalFrame = document.getElementsByTagName("body")[0].appendChild(ifr);
        }
        else {
            logger.verbose("Add msal iframe already exists");
        }
        return adalFrame;
    };
    /**
     * @hidden
     * Removes a hidden iframe from the page.
     * @ignore
     */
    WindowUtils.removeHiddenIframe = function (iframe) {
        if (document.body === iframe.parentNode) {
            document.body.removeChild(iframe);
        }
    };
    /**
     * @hidden
     * Find and return the iframe element with the given hash
     * @ignore
     */
    WindowUtils.getIframeWithHash = function (hash) {
        var iframes = document.getElementsByTagName("iframe");
        var iframeArray = Array.apply(null, Array(iframes.length)).map(function (iframe, index) { return iframes.item(index); }); // eslint-disable-line prefer-spread
        return iframeArray.filter(function (iframe) {
            try {
                return iframe.contentWindow.location.hash === hash;
            }
            catch (e) {
                return false;
            }
        })[0];
    };
    /**
     * @hidden
     * Returns an array of all the popups opened by MSAL
     * @ignore
     */
    WindowUtils.getPopups = function () {
        if (!window.openedWindows) {
            window.openedWindows = [];
        }
        return window.openedWindows;
    };
    /**
     * @hidden
     * Find and return the popup with the given hash
     * @ignore
     */
    WindowUtils.getPopUpWithHash = function (hash) {
        return WindowUtils.getPopups().filter(function (popup) {
            try {
                return popup.location.hash === hash;
            }
            catch (e) {
                return false;
            }
        })[0];
    };
    /**
     * @hidden
     * Add the popup to the known list of popups
     * @ignore
     */
    WindowUtils.trackPopup = function (popup) {
        WindowUtils.getPopups().push(popup);
    };
    /**
     * @hidden
     * Close all popups
     * @ignore
     */
    WindowUtils.closePopups = function () {
        WindowUtils.getPopups().forEach(function (popup) { return popup.close(); });
    };
    /**
     * @ignore
     *
     * blocks any login/acquireToken calls to reload from within a hidden iframe (generated for silent calls)
     */
    WindowUtils.blockReloadInHiddenIframes = function () {
        // return an error if called from the hidden iframe created by the msal js silent calls
        if (UrlUtils_1.UrlUtils.urlContainsHash(window.location.hash) && WindowUtils.isInIframe()) {
            throw ClientAuthError_1.ClientAuthError.createBlockTokenRequestsInHiddenIframeError();
        }
    };
    /**
     *
     * @param cacheStorage
     */
    WindowUtils.checkIfBackButtonIsPressed = function (cacheStorage) {
        var redirectCache = cacheStorage.getItem(Constants_1.TemporaryCacheKeys.REDIRECT_REQUEST);
        // if redirect request is set and there is no hash
        if (redirectCache && !UrlUtils_1.UrlUtils.urlContainsHash(window.location.hash)) {
            var splitCache = redirectCache.split(Constants_1.Constants.resourceDelimiter);
            splitCache.shift();
            var state = splitCache.length > 0 ? splitCache.join(Constants_1.Constants.resourceDelimiter) : null;
            cacheStorage.resetTempCacheItems(state);
        }
    };
    /**
     * Removes url fragment from browser url
     */
    WindowUtils.clearUrlFragment = function (contentWindow) {
        contentWindow.location.hash = "";
        // Office.js sets history.replaceState to null
        if (typeof contentWindow.history.replaceState === "function") {
            // Full removes "#" from url
            contentWindow.history.replaceState(null, null, "" + contentWindow.location.pathname + contentWindow.location.search);
        }
    };
    /**
     * @hidden
     * Interval in milliseconds that we poll a window
     * @ignore
     */
    WindowUtils.POLLING_INTERVAL_MS = 50;
    return WindowUtils;
}());
exports.WindowUtils = WindowUtils;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
var exports = __webpack_exports__;

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * @packageDocumentation
 * @module @azure/msal
 */
var UserAgentApplication_1 = __webpack_require__(463);
Object.defineProperty(exports, "UserAgentApplication", ({ enumerable: true, get: function () { return UserAgentApplication_1.UserAgentApplication; } }));
Object.defineProperty(exports, "authResponseCallback", ({ enumerable: true, get: function () { return UserAgentApplication_1.authResponseCallback; } }));
Object.defineProperty(exports, "errorReceivedCallback", ({ enumerable: true, get: function () { return UserAgentApplication_1.errorReceivedCallback; } }));
Object.defineProperty(exports, "tokenReceivedCallback", ({ enumerable: true, get: function () { return UserAgentApplication_1.tokenReceivedCallback; } }));
var Logger_1 = __webpack_require__(89);
Object.defineProperty(exports, "Logger", ({ enumerable: true, get: function () { return Logger_1.Logger; } }));
var Logger_2 = __webpack_require__(89);
Object.defineProperty(exports, "LogLevel", ({ enumerable: true, get: function () { return Logger_2.LogLevel; } }));
var Account_1 = __webpack_require__(630);
Object.defineProperty(exports, "Account", ({ enumerable: true, get: function () { return Account_1.Account; } }));
var Constants_1 = __webpack_require__(91);
Object.defineProperty(exports, "Constants", ({ enumerable: true, get: function () { return Constants_1.Constants; } }));
Object.defineProperty(exports, "ServerHashParamKeys", ({ enumerable: true, get: function () { return Constants_1.ServerHashParamKeys; } }));
var Authority_1 = __webpack_require__(660);
Object.defineProperty(exports, "Authority", ({ enumerable: true, get: function () { return Authority_1.Authority; } }));
var UserAgentApplication_2 = __webpack_require__(463);
Object.defineProperty(exports, "CacheResult", ({ enumerable: true, get: function () { return UserAgentApplication_2.CacheResult; } }));
var Configuration_1 = __webpack_require__(875);
Object.defineProperty(exports, "CacheLocation", ({ enumerable: true, get: function () { return Configuration_1.CacheLocation; } }));
Object.defineProperty(exports, "Configuration", ({ enumerable: true, get: function () { return Configuration_1.Configuration; } }));
var AuthenticationParameters_1 = __webpack_require__(733);
Object.defineProperty(exports, "AuthenticationParameters", ({ enumerable: true, get: function () { return AuthenticationParameters_1.AuthenticationParameters; } }));
var AuthResponse_1 = __webpack_require__(681);
Object.defineProperty(exports, "AuthResponse", ({ enumerable: true, get: function () { return AuthResponse_1.AuthResponse; } }));
var CryptoUtils_1 = __webpack_require__(453);
Object.defineProperty(exports, "CryptoUtils", ({ enumerable: true, get: function () { return CryptoUtils_1.CryptoUtils; } }));
var UrlUtils_1 = __webpack_require__(741);
Object.defineProperty(exports, "UrlUtils", ({ enumerable: true, get: function () { return UrlUtils_1.UrlUtils; } }));
var WindowUtils_1 = __webpack_require__(758);
Object.defineProperty(exports, "WindowUtils", ({ enumerable: true, get: function () { return WindowUtils_1.WindowUtils; } }));
// Errors
var AuthError_1 = __webpack_require__(986);
Object.defineProperty(exports, "AuthError", ({ enumerable: true, get: function () { return AuthError_1.AuthError; } }));
var ClientAuthError_1 = __webpack_require__(356);
Object.defineProperty(exports, "ClientAuthError", ({ enumerable: true, get: function () { return ClientAuthError_1.ClientAuthError; } }));
var ServerError_1 = __webpack_require__(447);
Object.defineProperty(exports, "ServerError", ({ enumerable: true, get: function () { return ServerError_1.ServerError; } }));
var ClientConfigurationError_1 = __webpack_require__(550);
Object.defineProperty(exports, "ClientConfigurationError", ({ enumerable: true, get: function () { return ClientConfigurationError_1.ClientConfigurationError; } }));
var InteractionRequiredAuthError_1 = __webpack_require__(961);
Object.defineProperty(exports, "InteractionRequiredAuthError", ({ enumerable: true, get: function () { return InteractionRequiredAuthError_1.InteractionRequiredAuthError; } }));
var packageMetadata_1 = __webpack_require__(700);
Object.defineProperty(exports, "version", ({ enumerable: true, get: function () { return packageMetadata_1.version; } }));

}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=msal.js.map