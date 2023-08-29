var Performance = function Performance() {
    throw new TypeError("Illegal constructor");
}; env_vm.safefunction(Performance);

Object.defineProperties(Performance.prototype, {
    [Symbol(Symbol.toStringTag)]: {
        value: "Performance",
        configurable: true
    }
});

////////////////////////////
Performance.prototype.timeOrigin = 1692863198304.7;
Performance.prototype.onresourcetimingbufferfull = env_vm.proxy(class onresourcetimingbufferfull { });
Performance.prototype.clearMarks = function clearMarks() { debugger }; env_vm.safefunction(Performance.prototype.clearMarks);
Performance.prototype.clearMeasures = function clearMeasures() { debugger }; env_vm.safefunction(Performance.prototype.clearMeasures);
Performance.prototype.clearResourceTimings = function clearResourceTimings() { debugger }; env_vm.safefunction(Performance.prototype.clearResourceTimings);
Performance.prototype.getEntries = function getEntries() { debugger }; env_vm.safefunction(Performance.prototype.getEntries);
Performance.prototype.getEntriesByName = function getEntriesByName() { debugger }; env_vm.safefunction(Performance.prototype.getEntriesByName);
Performance.prototype.getEntriesByType = function getEntriesByType() { debugger }; env_vm.safefunction(Performance.prototype.getEntriesByType);
Performance.prototype.mark = function mark() { debugger }; env_vm.safefunction(Performance.prototype.mark);
Performance.prototype.measure = function measure() { debugger }; env_vm.safefunction(Performance.prototype.measure);
Performance.prototype.now = function now() { debugger }; env_vm.safefunction(Performance.prototype.now);
Performance.prototype.setResourceTimingBufferSize = function setResourceTimingBufferSize() { debugger }; env_vm.safefunction(Performance.prototype.setResourceTimingBufferSize);
Performance.prototype.toJSON = function toJSON() { debugger }; env_vm.safefunction(Performance.prototype.toJSON);
///////////////////////////////////////////////


