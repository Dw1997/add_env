var Document = function Document() {

}; env_vm.safefunction(Document);
Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
});
////////////////
Document.prototype.exitFullscreen = function () {
    debugger;
}; env_vm.safefunction(Document.prototype.exitFullscreen);
////////////////


document = {};
document.__proto__ = Document.prototype;
////////////////////
document.getElementById = function getElementById(id) {
    debugger;
    // 用id匹配当前环境内存已有的
    return null;

}; env_vm.safefunction(document.getElementById);

document.createElement = function createElement(tagName) {
    var tagname = tagName.toLowerCase() + "";
    if (env_vm.memory.htmlelements[tagname] == undefined) {
        debugger;
    }
    return env_vm.proxy(env_vm.memory.htmlelements[tagname]);
}; env_vm.safefunction(document.createElement);


document.createEvent = function createEvent(eventName) {
    debugger;
    if (eventName == "TouchEvent") {
        throw new DOMException("The provided event type ('TouchEvent') is invalid.");
    }
}; env_vm.safefunction(document.createEvent);

document.addEventListener = function addEventListener() {
    debugger;
}; env_vm.safefunction(document.addEventListener);


document.getElementsByTagName = function getElementsByTagName(tagname) {
    debugger;
    return [];
}; env_vm.safefunction(document.addEventListener);
////////////////////


document = env_vm.proxy(document);
document.cookie = '__ac_signature=_02B4Z6wo00f01hZUucgAAIDBQ9YyVOC1NK4WdL1AAOFS13; ttcid=96994e2d548f45579c9174cd1a48db4d29; local_city_cache=%E4%B8%8A%E6%B5%B7; csrftoken=4b028b7d6cdae5862988fc9186ad68c9; _ga=GA1.1.370936209.1691476548; tt_scid=VhqPjFpd9FxvE5G3GJ9soR2bHcPcoYbPr6G6sK91XnOHJuRrHjR9uLyMtt8WTxvka50a; s_v_web_id=verify_ll1xgq98_2HzywXBR_ihVw_4ZsD_Aq4m_MSOxZoNvqv9L; _ga_QEHZPBE5HH=GS1.1.1691476548.1.0.1691476553.0.0.0; msToken=86F8H0U7iz_r2dCXEWv1BBE2aViBtSULGRmVUeA7fg2ZCTgTK2HrU4W43wx1NFJuwU0KPczcu1_9wY7LGWMYStPucUWOR-iMEsCU3DcX';
document.referrer = 'https://www.toutiao.com/';


// Object.defineProperty(document, "cookie", {
//     set: function (value) {
//         document.cookie = document.cookie + '; ' + value;
//         return value;
//     }
// })