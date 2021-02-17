'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactForms = require('react-forms');
var core = require('@material-ui/core');
var Autocomplete = _interopDefault(require('@material-ui/lab/Autocomplete'));
var lodash = require('lodash');
var Highlighter = _interopDefault(require('react-highlight-words'));

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var TIME_BETWEEN_REQS = 300;
var MUIAutocomplete = function (props) {
    var _a = React.useState(), query = _a[0], setQuery = _a[1];
    var ref = React.useRef(null);
    var _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b, _c = props.formikProps, formikProps = _c === void 0 ? {} : _c, _d = props.fieldConfig, fieldConfig = _d === void 0 ? {} : _d;
    var fieldError = reactForms.getFieldError(fieldConfig.valueKey || "", formikProps);
    var error = !!fieldError;
    var _e = fieldProps.highlighterProps, highlighterProps = _e === void 0 ? {
        highlightText: false,
        highlightColor: "#ffff00",
    } : _e, _f = fieldProps.options, options = _f === void 0 ? [] : _f, _g = fieldProps.renderInputProps, renderInputProps = _g === void 0 ? {} : _g, _h = fieldProps.inputProps, inputProps = _h === void 0 ? {} : _h, _j = fieldProps.getQueryResponse, getQueryResponse = _j === void 0 ? undefined : _j, _k = fieldProps.clearOnSelect, clearOnSelect = _k === void 0 ? false : _k, _l = fieldProps.onItemSelected, onItemSelected = _l === void 0 ? undefined : _l, _m = fieldProps.getOptionLabel, getOptionLabel = _m === void 0 ? function (o) { return o; } : _m, //assumption that options is a string array
    transformValues = fieldProps.transformValues, multiple = fieldProps.multiple, autoCompleteProps = __rest(fieldProps, ["highlighterProps", "options", "renderInputProps", "inputProps", "getQueryResponse", "clearOnSelect", "onItemSelected", "getOptionLabel", "transformValues", "multiple"]);
    var _o = React.useState([]), defaultOptions = _o[0], setDefaultOptions = _o[1];
    var _p = React.useState(false), open = _p[0], setOpen = _p[1];
    var _q = React.useState(false), loading = _q[0], setLoading = _q[1];
    var _r = React.useState(""), globalTerm = _r[0], setGlobalTerm = _r[1];
    var _s = React.useState([]), globalQueries = _s[0], setGlobalQueries = _s[1];
    var value = lodash.get(formikProps, "values." + (lodash.get(fieldConfig, "valueKey") || "")) ||
        (multiple ? [] : null);
    var handleQueryResponse = function (newTerm) { return __awaiter(void 0, void 0, void 0, function () {
        var result, newOptions_1, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    if (!getQueryResponse) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, getQueryResponse(newTerm)];
                case 2:
                    result = _a.sent();
                    newOptions_1 = [];
                    result.forEach(function (element) {
                        newOptions_1.push(element);
                    });
                    setLoading(false);
                    return [2 /*return*/, newOptions_1];
                case 3:
                    e_1 = _a.sent();
                    setLoading(false);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, []];
            }
        });
    }); };
    var handleChange = function (newTerm, isWaitingReq) {
        if (isWaitingReq === void 0) { isWaitingReq = false; }
        return __awaiter(void 0, void 0, void 0, function () {
            var queries, prevQueryIndex, lastQueryOrder, lastQueryIndex, lastQuery, now, newOptions, index, latestRespOrder, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (options.length > 0)
                            return [2 /*return*/];
                        setQuery(newTerm);
                        if (!newTerm) {
                            setDefaultOptions([]);
                            return [2 /*return*/];
                        }
                        if ((isWaitingReq && globalTerm !== newTerm) || !newTerm)
                            return [2 /*return*/];
                        setGlobalTerm(newTerm);
                        queries = __spreadArrays(globalQueries);
                        prevQueryIndex = lodash.findIndex(queries, function (q) { return q.term === newTerm; });
                        lastQueryOrder = lodash.reduce(queries, function (currentMaxId, query) {
                            return Math.max(currentMaxId, query.order);
                        }, -1);
                        if (prevQueryIndex !== -1) {
                            if (queries[prevQueryIndex].options) {
                                setDefaultOptions(queries[prevQueryIndex].options || []);
                            }
                            else {
                                queries[prevQueryIndex].order = Math.max(queries[prevQueryIndex].order, lastQueryOrder + 1);
                            }
                            return [2 /*return*/];
                        }
                        lastQueryIndex = lodash.findIndex(queries, function (q) { return q.order === lastQueryOrder; });
                        lastQuery = queries[lastQueryIndex];
                        now = new Date().getTime();
                        if (!(lastQuery && now - lastQuery.sendAt < TIME_BETWEEN_REQS)) return [3 /*break*/, 1];
                        setGlobalQueries(__spreadArrays(queries));
                        setTimeout(function () {
                            handleChange(newTerm, true);
                        }, TIME_BETWEEN_REQS - (now - lastQuery.sendAt));
                        return [3 /*break*/, 5];
                    case 1:
                        queries.push({
                            term: newTerm,
                            sendAt: now,
                            order: (lastQueryOrder || 0) + 1,
                        });
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, handleQueryResponse(newTerm)];
                    case 3:
                        newOptions = _a.sent();
                        index = lodash.findIndex(queries, function (q) { return q.term === newTerm; });
                        latestRespOrder = lodash.reduce(queries, function (currentMaxId, query) {
                            if (!query.options)
                                return currentMaxId;
                            return Math.max(currentMaxId, query.order);
                        }, -1);
                        queries[index].options = newOptions;
                        if (latestRespOrder < queries[index].order) {
                            setDefaultOptions(newOptions);
                        }
                        setGlobalQueries(__spreadArrays(queries));
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.log("error", error_1);
                        queries = lodash.filter(queries, function (q) { return q.term !== newTerm; });
                        setDefaultOptions([]);
                        setGlobalQueries(__spreadArrays(queries));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    var onItemSelect = function (event, value) {
        event.preventDefault();
        if (clearOnSelect) {
            setQuery("");
        }
        if (value) {
            if (onItemSelected)
                onItemSelected(value);
            else {
                formikProps.setFieldValue(lodash.get(fieldConfig, "valueKey"), value, false);
            }
        }
    };
    var onInputChange = function (event, values, reason) {
        if (event) {
            event.preventDefault();
            if (reason === "clear") {
                if (onItemSelected) {
                    onItemSelected((multiple ? [] : lodash.isString(value) ? values : null));
                }
                else {
                    formikProps.setFieldValue(lodash.get(fieldConfig, "valueKey"), multiple ? [] : lodash.isString(value) ? values : null, false);
                }
            }
        }
    };
    var defaultRenderOptions = function (option, _a) {
        var inputValue = _a.inputValue;
        /*THIS WILL BE USED TO RENDER OPTION AND HIGHLIGHT IF USER DOESN'T PROVIDE ANY RENDER OPTIONS */
        return (React.createElement("div", null, highlighterProps.highlightText === false ? (
        //NO HIGHLIGHT
        React.createElement("span", null, getOptionLabel(option))) : (
        //DEFAULT HIGHLIGHT WITH USER STYLES IF PROVIDED
        React.createElement(Highlighter, { searchWords: [inputValue], textToHighlight: getOptionLabel(option), highlightStyle: __assign({ backgroundColor: highlighterProps.highlightColor }, highlighterProps.highlighterStyles) }))));
    };
    var multipleProp = multiple ? { multiple: true } : {};
    return (React.createElement(Autocomplete, __assign({ onChange: onItemSelect, onInputChange: onInputChange, getOptionLabel: getOptionLabel, onOpen: function () {
            setOpen(true);
        }, open: open, onClose: function () {
            setOpen(false);
        }, options: options.length > 0 ? options : defaultOptions, renderOption: defaultRenderOptions, id: fieldConfig.valueKey, disableClearable: clearOnSelect, value: transformValues ? transformValues(value) : value, renderInput: function (params) { return (React.createElement(core.TextField, __assign({}, params, { value: query, ref: ref, onChange: function (e) { return handleChange(e.target.value); }, fullWidth: true, error: error, helperText: fieldError }, renderInputProps, { InputProps: __assign(__assign(__assign({}, params.InputProps), { endAdornment: (React.createElement(React.Fragment, null,
                    loading ? (React.createElement(core.CircularProgress, { color: "primary", size: 20 })) : null,
                    params.InputProps.endAdornment)) }), (renderInputProps.InputProps || {})), inputProps: __assign(__assign(__assign({}, params.inputProps), inputProps), { autoComplete: "new-password" }) }))); } }, multipleProp, autoCompleteProps)));
};

reactForms.attachField('autocomplete', React__default.createElement(MUIAutocomplete, null));

exports.MUIAutocomplete = MUIAutocomplete;
//# sourceMappingURL=index.js.map
