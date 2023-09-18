/*
 jQuery Validation Plugin v1.19.2

 https://jqueryvalidation.org/

 Copyright (c) 2020 Jörn Zaefferer
 Released under the MIT license
*/
(function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof module&&module.exports?module.exports=c(require("jquery")):c(jQuery)})(function(c){c.extend(c.fn,{validate:function(a){if(this.length){var b=c.data(this[0],"validator");if(b)return b;this.attr("novalidate","novalidate");b=new c.validator(a,this[0]);c.data(this[0],"validator",b);b.settings.onsubmit&&(this.on("click.validate",":submit",function(d){b.submitButton=d.currentTarget;c(this).hasClass("cancel")&&(b.cancelSubmit=
    !0);void 0!==c(this).attr("formnovalidate")&&(b.cancelSubmit=!0)}),this.on("submit.validate",function(d){function e(){var f;b.submitButton&&(b.settings.submitHandler||b.formSubmitted)&&(f=c("<input type='hidden'/>").attr("name",b.submitButton.name).val(c(b.submitButton).val()).appendTo(b.currentForm));if(b.settings.submitHandler&&!b.settings.debug){var g=b.settings.submitHandler.call(b,b.currentForm,d);f&&f.remove();return void 0!==g?g:!1}return!0}b.settings.debug&&d.preventDefault();if(b.cancelSubmit)return b.cancelSubmit=
    !1,e();if(b.form())return b.pendingRequest?(b.formSubmitted=!0,!1):e();b.focusInvalid();return!1}));return b}a&&a.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing.")},valid:function(){if(c(this[0]).is("form"))var a=this.validate().form();else{var b=[];a=!0;var d=c(this[0].form).validate();this.each(function(){(a=d.element(this)&&a)||(b=b.concat(d.errorList))});d.errorList=b}return a},rules:function(a,b){var d=this[0],e="undefined"!==typeof this.attr("contenteditable")&&
    "false"!==this.attr("contenteditable");if(null!=d&&(!d.form&&e&&(d.form=this.closest("form")[0],d.name=this.attr("name")),null!=d.form)){if(a){e=c.data(d.form,"validator").settings;var f=e.rules;var g=c.validator.staticRules(d);switch(a){case "add":c.extend(g,c.validator.normalizeRule(b));delete g.messages;f[d.name]=g;b.messages&&(e.messages[d.name]=c.extend(e.messages[d.name],b.messages));break;case "remove":if(!b)return delete f[d.name],g;var h={};c.each(b.split(/\s/),function(k,l){h[l]=g[l];delete g[l]});
    return h}}d=c.validator.normalizeRules(c.extend({},c.validator.classRules(d),c.validator.attributeRules(d),c.validator.dataRules(d),c.validator.staticRules(d)),d);d.required&&(e=d.required,delete d.required,d=c.extend({required:e},d));d.remote&&(e=d.remote,delete d.remote,d=c.extend(d,{remote:e}));return d}}});var p=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};c.extend(c.expr.pseudos||c.expr[":"],{blank:function(a){return!p(""+c(a).val())},filled:function(a){a=c(a).val();
    return null!==a&&!!p(""+a)},unchecked:function(a){return!c(a).prop("checked")}});c.validator=function(a,b){this.settings=c.extend(!0,{},c.validator.defaults,a);this.currentForm=b;this.init()};c.validator.format=function(a,b){if(1===arguments.length)return function(){var d=c.makeArray(arguments);d.unshift(a);return c.validator.format.apply(this,d)};if(void 0===b)return a;2<arguments.length&&b.constructor!==Array&&(b=c.makeArray(arguments).slice(1));b.constructor!==Array&&(b=[b]);c.each(b,function(d,
    e){a=a.replace(new RegExp("\\{"+d+"\\}","g"),function(){return e})});return a};c.extend(c.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:c([]),errorLabelContainer:c([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a;this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,
    this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===b.which&&""===this.elementValue(a)||-1!==c.inArray(b.keyCode,d)||(a.name in this.submitted||a.name in this.invalid)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},
    highlight:function(a,b,d){"radio"===a.type?this.findByName(a.name).addClass(b).removeClass(d):c(a).addClass(b).removeClass(d)},unhighlight:function(a,b,d){"radio"===a.type?this.findByName(a.name).removeClass(b).addClass(d):c(a).removeClass(b).addClass(d)}},setDefaults:function(a){c.extend(c.validator.defaults,a)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",
    dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:c.validator.format("Please enter no more than {0} characters."),minlength:c.validator.format("Please enter at least {0} characters."),rangelength:c.validator.format("Please enter a value between {0} and {1} characters long."),range:c.validator.format("Please enter a value between {0} and {1}."),max:c.validator.format("Please enter a value less than or equal to {0}."),
    min:c.validator.format("Please enter a value greater than or equal to {0}."),step:c.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function a(f){var g="undefined"!==typeof c(this).attr("contenteditable")&&"false"!==c(this).attr("contenteditable");!this.form&&g&&(this.form=c(this).closest("form")[0],this.name=c(this).attr("name"));if(b===this.form){g=c.data(this.form,"validator");var h="on"+f.type.replace(/^validate/,""),k=g.settings;k[h]&&!c(this).is(k.ignore)&&
    k[h].call(g,this,f)}}this.labelContainer=c(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||c(this.currentForm);this.containers=c(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var b=this.currentForm,d=this.groups={};c.each(this.settings.groups,function(f,g){"string"===typeof g&&(g=g.split(/\s/));c.each(g,function(h,k){d[k]=
    f})});var e=this.settings.rules;c.each(e,function(f,g){e[f]=c.validator.normalizeRule(g)});c(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
    a).on("click.validate","select, option, [type='radio'], [type='checkbox']",a);if(this.settings.invalidHandler)c(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){this.checkForm();c.extend(this.submitted,this.errorMap);this.invalid=c.extend({},this.errorMap);this.valid()||c(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);
    return this.valid()},element:function(a){var b=this.clean(a),d=this.validationTargetFor(b),e=this,f=!0,g;if(void 0===d)delete this.invalid[b.name];else{this.prepareElement(d);this.currentElements=c(d);(g=this.groups[d.name])&&c.each(this.groups,function(k,l){l===g&&k!==d.name&&(b=e.validationTargetFor(e.clean(e.findByName(k))))&&b.name in e.invalid&&(e.currentElements.push(b),f=e.check(b)&&f)});var h=!1!==this.check(d);f=f&&h;this.invalid[d.name]=h?!1:!0;this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers));
    this.showErrors();c(a).attr("aria-invalid",!h)}return f},showErrors:function(a){if(a){var b=this;c.extend(this.errorMap,a);this.errorList=c.map(this.errorMap,function(d,e){return{message:d,element:b.findByName(e)[0]}});this.successList=c.grep(this.successList,function(d){return!(d.name in a)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){c.fn.resetForm&&c(this.currentForm).resetForm();this.invalid={};this.submitted=
    {};this.prepareForm();this.hideErrors();var a=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(a)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},
    objectLength:function(a){var b=0,d;for(d in a)void 0!==a[d]&&null!==a[d]&&!1!==a[d]&&b++;return b},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text("");this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{c(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(a){}},
    findLastActive:function(){var a=this.lastActive;return a&&1===c.grep(this.errorList,function(b){return b.element.name===a.name}).length&&a},elements:function(){var a=this,b={};return c(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||c(this).attr("name"),e="undefined"!==typeof c(this).attr("contenteditable")&&"false"!==c(this).attr("contenteditable");!d&&a.settings.debug&&window.console&&
    console.error("%o has no name assigned",this);e&&(this.form=c(this).closest("form")[0],this.name=d);return this.form!==a.currentForm||d in b||!a.objectLength(c(this).rules())?!1:b[d]=!0})},clean:function(a){return c(a)[0]},errors:function(){var a=this.settings.errorClass.split(" ").join(".");return c(this.settings.errorElement+"."+a,this.errorContext)},resetInternals:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=c([]);this.toHide=c([])},reset:function(){this.resetInternals();
    this.currentElements=c([])},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset();this.toHide=this.errorsFor(a)},elementValue:function(a){var b=c(a),d=a.type,e="undefined"!==typeof b.attr("contenteditable")&&"false"!==b.attr("contenteditable");if("radio"===d||"checkbox"===d)return this.findByName(a.name).filter(":checked").val();if("number"===d&&"undefined"!==typeof a.validity)return a.validity.badInput?"NaN":b.val();a=e?b.text():
    b.val();if("file"===d){if("C:\\fakepath\\"===a.substr(0,12))return a.substr(12);d=a.lastIndexOf("/");if(0<=d)return a.substr(d+1);d=a.lastIndexOf("\\");return 0<=d?a.substr(d+1):a}return"string"===typeof a?a.replace(/\r/g,""):a},check:function(a){a=this.validationTargetFor(this.clean(a));var b=c(a).rules(),d=c.map(b,function(l,m){return m}).length,e=!1,f=this.elementValue(a),g;if("function"===typeof b.normalizer)var h=b.normalizer;else"function"===typeof this.settings.normalizer&&(h=this.settings.normalizer);
    h&&(f=h.call(a,f),delete b.normalizer);for(g in b){h={method:g,parameters:b[g]};try{var k=c.validator.methods[g].call(this,f,a,h.parameters);if("dependency-mismatch"===k&&1===d)e=!0;else{e=!1;if("pending"===k){this.toHide=this.toHide.not(this.errorsFor(a));return}if(!k)return this.formatAndAdd(a,h),!1}}catch(l){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+a.id+", check the '"+h.method+"' method.",l),l instanceof TypeError&&(l.message+=".  Exception occurred when checking element "+
    a.id+", check the '"+h.method+"' method."),l;}}if(!e)return this.objectLength(b)&&this.successList.push(a),!0},customDataMessage:function(a,b){return c(a).data("msg"+b.charAt(0).toUpperCase()+b.substring(1).toLowerCase())||c(a).data("msg")},customMessage:function(a,b){var d=this.settings.messages[a];return d&&(d.constructor===String?d:d[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(a,b){"string"===typeof b&&(b=
    {method:b});var d=this.findDefined(this.customMessage(a.name,b.method),this.customDataMessage(a,b.method),!this.settings.ignoreTitle&&a.title||void 0,c.validator.messages[b.method],"<strong>Warning: No message defined for "+a.name+"</strong>"),e=/\$?\{(\d+)\}/g;"function"===typeof d?d=d.call(this,b.parameters,a):e.test(d)&&(d=c.validator.format(d.replace(e,"{$1}"),b.parameters));return d},formatAndAdd:function(a,b){var d=this.defaultMessage(a,b);this.errorList.push({message:d,element:a,method:b.method});
    this.errorMap[a.name]=d;this.submitted[a.name]=d},addWrapper:function(a){this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper)));return a},defaultShowErrors:function(){var a;for(a=0;this.errorList[a];a++){var b=this.errorList[a];this.settings.highlight&&this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass);this.showLabel(b.element,b.message)}this.errorList.length&&(this.toShow=this.toShow.add(this.containers));if(this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);
    if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return c(this.errorList).map(function(){return this.element})},showLabel:function(a,b){var d,e=this.errorsFor(a),f=this.idOrName(a),g=c(a).attr("aria-describedby");
    if(e.length)e.removeClass(this.settings.validClass).addClass(this.settings.errorClass),e.html(b);else{var h=e=c("<"+this.settings.errorElement+">").attr("id",f+"-error").addClass(this.settings.errorClass).html(b||"");this.settings.wrapper&&(h=e.hide().show().wrap("<"+this.settings.wrapper+"/>").parent());this.labelContainer.length?this.labelContainer.append(h):this.settings.errorPlacement?this.settings.errorPlacement.call(this,h,c(a)):h.insertAfter(a);if(e.is("label"))e.attr("for",f);else if(0===
    e.parents("label[for='"+this.escapeCssMeta(f)+"']").length&&(h=e.attr("id"),g?g.match(new RegExp("\\b"+this.escapeCssMeta(h)+"\\b"))||(g+=" "+h):g=h,c(a).attr("aria-describedby",g),d=this.groups[a.name])){var k=this;c.each(k.groups,function(l,m){m===d&&c("[name='"+k.escapeCssMeta(l)+"']",k.currentForm).attr("aria-describedby",e.attr("id"))})}}!b&&this.settings.success&&(e.text(""),"string"===typeof this.settings.success?e.addClass(this.settings.success):this.settings.success(e,a));this.toShow=this.toShow.add(e)},
    errorsFor:function(a){var b=this.escapeCssMeta(this.idOrName(a));a=c(a).attr("aria-describedby");b="label[for='"+b+"'], label[for='"+b+"'] *";a&&(b=b+", #"+this.escapeCssMeta(a).replace(/\s+/g,", #"));return this.errors().filter(b)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){this.checkable(a)&&(a=this.findByName(a.name));return c(a).not(this.settings.ignore)[0]},
    checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(a){return c(this.currentForm).find("[name='"+this.escapeCssMeta(a)+"']")},getLength:function(a,b){switch(b.nodeName.toLowerCase()){case "select":return c("option:selected",b).length;case "input":if(this.checkable(b))return this.findByName(b.name).filter(":checked").length}return a.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},
    string:function(a,b){return!!c(a,b.form).length},"function":function(a,b){return a(b)}},optional:function(a){var b=this.elementValue(a);return!c.validator.methods.required.call(this,b,a)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,c(a).addClass(this.settings.pendingClass),this.pending[a.name]=!0)},stopRequest:function(a,b){this.pendingRequest--;0>this.pendingRequest&&(this.pendingRequest=0);delete this.pending[a.name];c(a).removeClass(this.settings.pendingClass);
    b&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(c(this.currentForm).submit(),this.submitButton&&c("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!b&&0===this.pendingRequest&&this.formSubmitted&&(c(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(a,b){b="string"===typeof b&&b||"remote";return c.data(a,"previousValue")||c.data(a,"previousValue",{old:null,valid:!0,message:this.defaultMessage(a,
    {method:b})})},destroy:function(){this.resetForm();c(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},
    classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(a,b){a.constructor===String?this.classRuleSettings[a]=b:c.extend(this.classRuleSettings,a)},classRules:function(a){var b={};(a=c(a).attr("class"))&&c.each(a.split(" "),function(){this in c.validator.classRuleSettings&&c.extend(b,c.validator.classRuleSettings[this])});return b},normalizeAttributeRule:function(a,
    b,d,e){/min|max|step/.test(d)&&(null===b||/number|range|text/.test(b))&&(e=Number(e),isNaN(e)&&(e=void 0));e||0===e?a[d]=e:b===d&&"range"!==b&&(a[d]=!0)},attributeRules:function(a){var b={},d=c(a),e=a.getAttribute("type"),f;for(f in c.validator.methods){if("required"===f){var g=a.getAttribute(f);""===g&&(g=!0);g=!!g}else g=d.attr(f);this.normalizeAttributeRule(b,e,f,g)}b.maxlength&&/-1|2147483647|524288/.test(b.maxlength)&&delete b.maxlength;return b},dataRules:function(a){var b={},d=c(a);a=a.getAttribute("type");
    var e;for(e in c.validator.methods){var f=d.data("rule"+e.charAt(0).toUpperCase()+e.substring(1).toLowerCase());""===f&&(f=!0);this.normalizeAttributeRule(b,a,e,f)}return b},staticRules:function(a){var b={},d=c.data(a.form,"validator");d.settings.rules&&(b=c.validator.normalizeRule(d.settings.rules[a.name])||{});return b},normalizeRules:function(a,b){c.each(a,function(d,e){if(!1===e)delete a[d];else if(e.param||e.depends){var f=!0;switch(typeof e.depends){case "string":f=!!c(e.depends,b.form).length;
    break;case "function":f=e.depends.call(b,b)}f?a[d]=void 0!==e.param?e.param:!0:(c.data(b.form,"validator").resetElements(c(b)),delete a[d])}});c.each(a,function(d,e){a[d]=c.isFunction(e)&&"normalizer"!==d?e(b):e});c.each(["minlength","maxlength"],function(){a[this]&&(a[this]=Number(a[this]))});c.each(["rangelength","range"],function(){if(a[this])if(c.isArray(a[this]))a[this]=[Number(a[this][0]),Number(a[this][1])];else if("string"===typeof a[this]){var d=a[this].replace(/[\[\]]/g,"").split(/[\s,]+/);
    a[this]=[Number(d[0]),Number(d[1])]}});c.validator.autoCreateRanges&&(null!=a.min&&null!=a.max&&(a.range=[a.min,a.max],delete a.min,delete a.max),null!=a.minlength&&null!=a.maxlength&&(a.rangelength=[a.minlength,a.maxlength],delete a.minlength,delete a.maxlength));return a},normalizeRule:function(a){if("string"===typeof a){var b={};c.each(a.split(/\s/),function(){b[this]=!0});a=b}return a},addMethod:function(a,b,d){c.validator.methods[a]=b;c.validator.messages[a]=void 0!==d?d:c.validator.messages[a];
    3>b.length&&c.validator.addClassRules(a,c.validator.normalizeRule(a))},methods:{required:function(a,b,d){return this.depend(d,b)?"select"===b.nodeName.toLowerCase()?(a=c(b).val())&&0<a.length:this.checkable(b)?0<this.getLength(a,b):void 0!==a&&null!==a&&0<a.length:"dependency-mismatch"},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||
    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,
    d){a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`."));return this.optional(d)||!/Invalid|NaN/.test((new Date(b)).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},
    number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(a,b,d){a=c.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||a>=d},maxlength:function(a,b,d){a=c.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||a<=d},rangelength:function(a,b,d){a=c.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||a>=d[0]&&a<=d[1]},min:function(a,b,d){return this.optional(b)||
    a>=d},max:function(a,b,d){return this.optional(b)||a<=d},range:function(a,b,d){return this.optional(b)||a>=d[0]&&a<=d[1]},step:function(a,b,d){var e=c(b).attr("type"),f="Step attribute on input type "+e+" is not supported.",g=["text","number","range"],h=new RegExp("\\b"+e+"\\b"),k=function(m){return(m=(""+m).match(/(?:\.(\d+))?$/))?m[1]?m[1].length:0:0},l=!0;if(e&&!h.test(g.join()))throw Error(f);e=k(d);if(k(a)>e||0!==Math.round(a*Math.pow(10,e))%Math.round(d*Math.pow(10,e)))l=!1;return this.optional(b)||
    l},equalTo:function(a,b,d){d=c(d);if(this.settings.onfocusout&&d.not(".validate-equalTo-blur").length)d.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){c(b).valid()});return a===d.val()},remote:function(a,b,d,e){if(this.optional(b))return"dependency-mismatch";e="string"===typeof e&&e||"remote";var f=this.previousValue(b,e);this.settings.messages[b.name]||(this.settings.messages[b.name]={});f.originalMessage=f.originalMessage||this.settings.messages[b.name][e];this.settings.messages[b.name][e]=
    f.message;d="string"===typeof d&&{url:d}||d;var g=c.param(c.extend({data:a},d.data));if(f.old===g)return f.valid;f.old=g;var h=this;this.startRequest(b);g={};g[b.name]=a;c.ajax(c.extend(!0,{mode:"abort",port:"validate"+b.name,dataType:"json",data:g,context:h.currentForm,success:function(k){var l=!0===k||"true"===k;h.settings.messages[b.name][e]=f.originalMessage;if(l){var m=h.formSubmitted;h.resetInternals();h.toHide=h.errorsFor(b);h.formSubmitted=m;h.successList.push(b);h.invalid[b.name]=!1;h.showErrors()}else m=
    {},k=k||h.defaultMessage(b,{method:e,parameters:a}),m[b.name]=f.message=k,h.invalid[b.name]=!0,h.showErrors(m);f.valid=l;h.stopRequest(b,l)}},d));return"pending"}}});var n={};if(c.ajaxPrefilter)c.ajaxPrefilter(function(a,b,d){b=a.port;"abort"===a.mode&&(n[b]&&n[b].abort(),n[b]=d)});else{var q=c.ajax;c.ajax=function(a){var b=("port"in a?a:c.ajaxSettings).port;return"abort"===("mode"in a?a:c.ajaxSettings).mode?(n[b]&&n[b].abort(),n[b]=q.apply(this,arguments),n[b]):q.apply(this,arguments)}}return c});