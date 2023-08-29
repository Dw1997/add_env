window = this;
var Window = function Window() {
    // 容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; env_vm.safefunction(Window);

Object.defineProperties(Window.prototype, {
    [Symbol.toStringTag]: {
        value: "Window",
        configurable: true
    }
})

Window.prototype.__proto__ = WindowProperties.prototype;

window.__proto__ = Window.prototype;
/////////////////////////////////////////
window.setTimeout = function setTimeout(x, d) {
    debugger;
    // typeof (x) == "function" ? x() : undefined;
    // typeof (x) == "string" ? eval(x) : undefined;
    // 正确的 生成uuid并保存到内存
    return 0;
}; env_vm.safefunction(window.setTimeout);

window.setInterval = function (x, d) {
    debugger;
    // typeof (x) == "function" ? x() : undefined;
    // typeof (x) == "string" ? eval(x) : undefined;
    // 正确的 生成uuid并保存到内存
    return 0;
}; env_vm.safefunction(window.setInterval);


Window.prototype.PERSISTENT = 1;
Window.prototype.TEMPORARY = 0;
window.open = function open() { debugger; }; env_vm.safefunction(window.open);
window.chrome = env_vm.proxy(class chrome { });
window.DeviceOrientationEvent = function DeviceOrientationEvent() { debugger }; env_vm.safefunction(window.DeviceOrientationEvent);
window.DeviceMotionEvent = function DeviceMotionEvent() { debugger }; env_vm.safefunction(window.DeviceMotionEvent);
window.addEventListener = function addEventListener() {
    debugger;
}; env_vm.safefunction(window.addEventListener);
window.webkitRequestFileSystem = function webkitRequestFileSystem() {
    debugger;
}; env_vm.safefunction(window.webkitRequestFileSystem);
window.clearInterval = function clearInterval() {
    debugger;
}; env_vm.safefunction(window.clearInterval);
window.top = window;

window.performance = {
    "timeOrigin": 1692855932903.5,
    "timing": {
        "connectStart": 1692855932922,
        "navigationStart": 1692855932903,
        "secureConnectionStart": 0,
        "fetchStart": 1692855932906,
        "domContentLoadedEventStart": 0,
        "responseStart": 1692855932956,
        "domInteractive": 0,
        "domainLookupEnd": 1692855932922,
        "responseEnd": 1692855932984,
        "redirectStart": 0,
        "requestStart": 1692855932929,
        "unloadEventEnd": 0,
        "unloadEventStart": 0,
        "domLoading": 1692855932964,
        "domComplete": 0,
        "domainLookupStart": 1692855932915,
        "loadEventStart": 0,
        "domContentLoadedEventEnd": 0,
        "loadEventEnd": 0,
        "redirectEnd": 0,
        "connectEnd": 1692855932929
    },
    "navigation": {
        "type": 0,
        "redirectCount": 0
    }
}
/////////////////////////////////////////


Window = env_vm.proxy(Window);
window = env_vm.proxy(window);