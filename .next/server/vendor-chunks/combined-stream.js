/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/combined-stream";
exports.ids = ["vendor-chunks/combined-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/combined-stream/lib/combined_stream.js":
/*!*************************************************************!*\
  !*** ./node_modules/combined-stream/lib/combined_stream.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var util = __webpack_require__(/*! util */ \"util\");\nvar Stream = (__webpack_require__(/*! stream */ \"stream\").Stream);\nvar DelayedStream = __webpack_require__(/*! delayed-stream */ \"(ssr)/./node_modules/delayed-stream/lib/delayed_stream.js\");\nmodule.exports = CombinedStream;\nfunction CombinedStream() {\n    this.writable = false;\n    this.readable = true;\n    this.dataSize = 0;\n    this.maxDataSize = 2 * 1024 * 1024;\n    this.pauseStreams = true;\n    this._released = false;\n    this._streams = [];\n    this._currentStream = null;\n    this._insideLoop = false;\n    this._pendingNext = false;\n}\nutil.inherits(CombinedStream, Stream);\nCombinedStream.create = function(options) {\n    var combinedStream = new this();\n    options = options || {};\n    for(var option in options){\n        combinedStream[option] = options[option];\n    }\n    return combinedStream;\n};\nCombinedStream.isStreamLike = function(stream) {\n    return typeof stream !== \"function\" && typeof stream !== \"string\" && typeof stream !== \"boolean\" && typeof stream !== \"number\" && !Buffer.isBuffer(stream);\n};\nCombinedStream.prototype.append = function(stream) {\n    var isStreamLike = CombinedStream.isStreamLike(stream);\n    if (isStreamLike) {\n        if (!(stream instanceof DelayedStream)) {\n            var newStream = DelayedStream.create(stream, {\n                maxDataSize: Infinity,\n                pauseStream: this.pauseStreams\n            });\n            stream.on(\"data\", this._checkDataSize.bind(this));\n            stream = newStream;\n        }\n        this._handleErrors(stream);\n        if (this.pauseStreams) {\n            stream.pause();\n        }\n    }\n    this._streams.push(stream);\n    return this;\n};\nCombinedStream.prototype.pipe = function(dest, options) {\n    Stream.prototype.pipe.call(this, dest, options);\n    this.resume();\n    return dest;\n};\nCombinedStream.prototype._getNext = function() {\n    this._currentStream = null;\n    if (this._insideLoop) {\n        this._pendingNext = true;\n        return; // defer call\n    }\n    this._insideLoop = true;\n    try {\n        do {\n            this._pendingNext = false;\n            this._realGetNext();\n        }while (this._pendingNext);\n    } finally{\n        this._insideLoop = false;\n    }\n};\nCombinedStream.prototype._realGetNext = function() {\n    var stream = this._streams.shift();\n    if (typeof stream == \"undefined\") {\n        this.end();\n        return;\n    }\n    if (typeof stream !== \"function\") {\n        this._pipeNext(stream);\n        return;\n    }\n    var getStream = stream;\n    getStream((function(stream) {\n        var isStreamLike = CombinedStream.isStreamLike(stream);\n        if (isStreamLike) {\n            stream.on(\"data\", this._checkDataSize.bind(this));\n            this._handleErrors(stream);\n        }\n        this._pipeNext(stream);\n    }).bind(this));\n};\nCombinedStream.prototype._pipeNext = function(stream) {\n    this._currentStream = stream;\n    var isStreamLike = CombinedStream.isStreamLike(stream);\n    if (isStreamLike) {\n        stream.on(\"end\", this._getNext.bind(this));\n        stream.pipe(this, {\n            end: false\n        });\n        return;\n    }\n    var value = stream;\n    this.write(value);\n    this._getNext();\n};\nCombinedStream.prototype._handleErrors = function(stream) {\n    var self = this;\n    stream.on(\"error\", function(err) {\n        self._emitError(err);\n    });\n};\nCombinedStream.prototype.write = function(data) {\n    this.emit(\"data\", data);\n};\nCombinedStream.prototype.pause = function() {\n    if (!this.pauseStreams) {\n        return;\n    }\n    if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == \"function\") this._currentStream.pause();\n    this.emit(\"pause\");\n};\nCombinedStream.prototype.resume = function() {\n    if (!this._released) {\n        this._released = true;\n        this.writable = true;\n        this._getNext();\n    }\n    if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == \"function\") this._currentStream.resume();\n    this.emit(\"resume\");\n};\nCombinedStream.prototype.end = function() {\n    this._reset();\n    this.emit(\"end\");\n};\nCombinedStream.prototype.destroy = function() {\n    this._reset();\n    this.emit(\"close\");\n};\nCombinedStream.prototype._reset = function() {\n    this.writable = false;\n    this._streams = [];\n    this._currentStream = null;\n};\nCombinedStream.prototype._checkDataSize = function() {\n    this._updateDataSize();\n    if (this.dataSize <= this.maxDataSize) {\n        return;\n    }\n    var message = \"DelayedStream#maxDataSize of \" + this.maxDataSize + \" bytes exceeded.\";\n    this._emitError(new Error(message));\n};\nCombinedStream.prototype._updateDataSize = function() {\n    this.dataSize = 0;\n    var self = this;\n    this._streams.forEach(function(stream) {\n        if (!stream.dataSize) {\n            return;\n        }\n        self.dataSize += stream.dataSize;\n    });\n    if (this._currentStream && this._currentStream.dataSize) {\n        this.dataSize += this._currentStream.dataSize;\n    }\n};\nCombinedStream.prototype._emitError = function(err) {\n    this._reset();\n    this.emit(\"error\", err);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29tYmluZWQtc3RyZWFtL2xpYi9jb21iaW5lZF9zdHJlYW0uanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsT0FBT0MsbUJBQU9BLENBQUM7QUFDbkIsSUFBSUMsU0FBU0Qsb0RBQXdCO0FBQ3JDLElBQUlFLGdCQUFnQkYsbUJBQU9BLENBQUM7QUFFNUJHLE9BQU9DLE9BQU8sR0FBR0M7QUFDakIsU0FBU0E7SUFDUCxJQUFJLENBQUNDLFFBQVEsR0FBRztJQUNoQixJQUFJLENBQUNDLFFBQVEsR0FBRztJQUNoQixJQUFJLENBQUNDLFFBQVEsR0FBRztJQUNoQixJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJLE9BQU87SUFDOUIsSUFBSSxDQUFDQyxZQUFZLEdBQUc7SUFFcEIsSUFBSSxDQUFDQyxTQUFTLEdBQUc7SUFDakIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsRUFBRTtJQUNsQixJQUFJLENBQUNDLGNBQWMsR0FBRztJQUN0QixJQUFJLENBQUNDLFdBQVcsR0FBRztJQUNuQixJQUFJLENBQUNDLFlBQVksR0FBRztBQUN0QjtBQUNBaEIsS0FBS2lCLFFBQVEsQ0FBQ1gsZ0JBQWdCSjtBQUU5QkksZUFBZVksTUFBTSxHQUFHLFNBQVNDLE9BQU87SUFDdEMsSUFBSUMsaUJBQWlCLElBQUksSUFBSTtJQUU3QkQsVUFBVUEsV0FBVyxDQUFDO0lBQ3RCLElBQUssSUFBSUUsVUFBVUYsUUFBUztRQUMxQkMsY0FBYyxDQUFDQyxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0UsT0FBTztJQUMxQztJQUVBLE9BQU9EO0FBQ1Q7QUFFQWQsZUFBZWdCLFlBQVksR0FBRyxTQUFTQyxNQUFNO0lBQzNDLE9BQU8sT0FBUUEsV0FBVyxjQUNwQixPQUFPQSxXQUFXLFlBQ2xCLE9BQU9BLFdBQVcsYUFDbEIsT0FBT0EsV0FBVyxZQUNsQixDQUFDQyxPQUFPQyxRQUFRLENBQUNGO0FBQ3pCO0FBRUFqQixlQUFlb0IsU0FBUyxDQUFDQyxNQUFNLEdBQUcsU0FBU0osTUFBTTtJQUMvQyxJQUFJRCxlQUFlaEIsZUFBZWdCLFlBQVksQ0FBQ0M7SUFFL0MsSUFBSUQsY0FBYztRQUNoQixJQUFJLENBQUVDLENBQUFBLGtCQUFrQnBCLGFBQVksR0FBSTtZQUN0QyxJQUFJeUIsWUFBWXpCLGNBQWNlLE1BQU0sQ0FBQ0ssUUFBUTtnQkFDM0NiLGFBQWFtQjtnQkFDYkMsYUFBYSxJQUFJLENBQUNuQixZQUFZO1lBQ2hDO1lBQ0FZLE9BQU9RLEVBQUUsQ0FBQyxRQUFRLElBQUksQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUMsSUFBSTtZQUMvQ1YsU0FBU0s7UUFDWDtRQUVBLElBQUksQ0FBQ00sYUFBYSxDQUFDWDtRQUVuQixJQUFJLElBQUksQ0FBQ1osWUFBWSxFQUFFO1lBQ3JCWSxPQUFPWSxLQUFLO1FBQ2Q7SUFDRjtJQUVBLElBQUksQ0FBQ3RCLFFBQVEsQ0FBQ3VCLElBQUksQ0FBQ2I7SUFDbkIsT0FBTyxJQUFJO0FBQ2I7QUFFQWpCLGVBQWVvQixTQUFTLENBQUNXLElBQUksR0FBRyxTQUFTQyxJQUFJLEVBQUVuQixPQUFPO0lBQ3BEakIsT0FBT3dCLFNBQVMsQ0FBQ1csSUFBSSxDQUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFRCxNQUFNbkI7SUFDdkMsSUFBSSxDQUFDcUIsTUFBTTtJQUNYLE9BQU9GO0FBQ1Q7QUFFQWhDLGVBQWVvQixTQUFTLENBQUNlLFFBQVEsR0FBRztJQUNsQyxJQUFJLENBQUMzQixjQUFjLEdBQUc7SUFFdEIsSUFBSSxJQUFJLENBQUNDLFdBQVcsRUFBRTtRQUNwQixJQUFJLENBQUNDLFlBQVksR0FBRztRQUNwQixRQUFRLGFBQWE7SUFDdkI7SUFFQSxJQUFJLENBQUNELFdBQVcsR0FBRztJQUNuQixJQUFJO1FBQ0YsR0FBRztZQUNELElBQUksQ0FBQ0MsWUFBWSxHQUFHO1lBQ3BCLElBQUksQ0FBQzBCLFlBQVk7UUFDbkIsUUFBUyxJQUFJLENBQUMxQixZQUFZLEVBQUU7SUFDOUIsU0FBVTtRQUNSLElBQUksQ0FBQ0QsV0FBVyxHQUFHO0lBQ3JCO0FBQ0Y7QUFFQVQsZUFBZW9CLFNBQVMsQ0FBQ2dCLFlBQVksR0FBRztJQUN0QyxJQUFJbkIsU0FBUyxJQUFJLENBQUNWLFFBQVEsQ0FBQzhCLEtBQUs7SUFHaEMsSUFBSSxPQUFPcEIsVUFBVSxhQUFhO1FBQ2hDLElBQUksQ0FBQ3FCLEdBQUc7UUFDUjtJQUNGO0lBRUEsSUFBSSxPQUFPckIsV0FBVyxZQUFZO1FBQ2hDLElBQUksQ0FBQ3NCLFNBQVMsQ0FBQ3RCO1FBQ2Y7SUFDRjtJQUVBLElBQUl1QixZQUFZdkI7SUFDaEJ1QixVQUFVLFVBQVN2QixNQUFNO1FBQ3ZCLElBQUlELGVBQWVoQixlQUFlZ0IsWUFBWSxDQUFDQztRQUMvQyxJQUFJRCxjQUFjO1lBQ2hCQyxPQUFPUSxFQUFFLENBQUMsUUFBUSxJQUFJLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLElBQUk7WUFDL0MsSUFBSSxDQUFDQyxhQUFhLENBQUNYO1FBQ3JCO1FBRUEsSUFBSSxDQUFDc0IsU0FBUyxDQUFDdEI7SUFDakIsR0FBRVUsSUFBSSxDQUFDLElBQUk7QUFDYjtBQUVBM0IsZUFBZW9CLFNBQVMsQ0FBQ21CLFNBQVMsR0FBRyxTQUFTdEIsTUFBTTtJQUNsRCxJQUFJLENBQUNULGNBQWMsR0FBR1M7SUFFdEIsSUFBSUQsZUFBZWhCLGVBQWVnQixZQUFZLENBQUNDO0lBQy9DLElBQUlELGNBQWM7UUFDaEJDLE9BQU9RLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQ1UsUUFBUSxDQUFDUixJQUFJLENBQUMsSUFBSTtRQUN4Q1YsT0FBT2MsSUFBSSxDQUFDLElBQUksRUFBRTtZQUFDTyxLQUFLO1FBQUs7UUFDN0I7SUFDRjtJQUVBLElBQUlHLFFBQVF4QjtJQUNaLElBQUksQ0FBQ3lCLEtBQUssQ0FBQ0Q7SUFDWCxJQUFJLENBQUNOLFFBQVE7QUFDZjtBQUVBbkMsZUFBZW9CLFNBQVMsQ0FBQ1EsYUFBYSxHQUFHLFNBQVNYLE1BQU07SUFDdEQsSUFBSTBCLE9BQU8sSUFBSTtJQUNmMUIsT0FBT1EsRUFBRSxDQUFDLFNBQVMsU0FBU21CLEdBQUc7UUFDN0JELEtBQUtFLFVBQVUsQ0FBQ0Q7SUFDbEI7QUFDRjtBQUVBNUMsZUFBZW9CLFNBQVMsQ0FBQ3NCLEtBQUssR0FBRyxTQUFTSSxJQUFJO0lBQzVDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLFFBQVFEO0FBQ3BCO0FBRUE5QyxlQUFlb0IsU0FBUyxDQUFDUyxLQUFLLEdBQUc7SUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQ3hCLFlBQVksRUFBRTtRQUN0QjtJQUNGO0lBRUEsSUFBRyxJQUFJLENBQUNBLFlBQVksSUFBSSxJQUFJLENBQUNHLGNBQWMsSUFBSSxPQUFPLElBQUksQ0FBQ0EsY0FBYyxDQUFDcUIsS0FBSyxJQUFLLFlBQVksSUFBSSxDQUFDckIsY0FBYyxDQUFDcUIsS0FBSztJQUN6SCxJQUFJLENBQUNrQixJQUFJLENBQUM7QUFDWjtBQUVBL0MsZUFBZW9CLFNBQVMsQ0FBQ2MsTUFBTSxHQUFHO0lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUM1QixTQUFTLEVBQUU7UUFDbkIsSUFBSSxDQUFDQSxTQUFTLEdBQUc7UUFDakIsSUFBSSxDQUFDTCxRQUFRLEdBQUc7UUFDaEIsSUFBSSxDQUFDa0MsUUFBUTtJQUNmO0lBRUEsSUFBRyxJQUFJLENBQUM5QixZQUFZLElBQUksSUFBSSxDQUFDRyxjQUFjLElBQUksT0FBTyxJQUFJLENBQUNBLGNBQWMsQ0FBQzBCLE1BQU0sSUFBSyxZQUFZLElBQUksQ0FBQzFCLGNBQWMsQ0FBQzBCLE1BQU07SUFDM0gsSUFBSSxDQUFDYSxJQUFJLENBQUM7QUFDWjtBQUVBL0MsZUFBZW9CLFNBQVMsQ0FBQ2tCLEdBQUcsR0FBRztJQUM3QixJQUFJLENBQUNVLE1BQU07SUFDWCxJQUFJLENBQUNELElBQUksQ0FBQztBQUNaO0FBRUEvQyxlQUFlb0IsU0FBUyxDQUFDNkIsT0FBTyxHQUFHO0lBQ2pDLElBQUksQ0FBQ0QsTUFBTTtJQUNYLElBQUksQ0FBQ0QsSUFBSSxDQUFDO0FBQ1o7QUFFQS9DLGVBQWVvQixTQUFTLENBQUM0QixNQUFNLEdBQUc7SUFDaEMsSUFBSSxDQUFDL0MsUUFBUSxHQUFHO0lBQ2hCLElBQUksQ0FBQ00sUUFBUSxHQUFHLEVBQUU7SUFDbEIsSUFBSSxDQUFDQyxjQUFjLEdBQUc7QUFDeEI7QUFFQVIsZUFBZW9CLFNBQVMsQ0FBQ00sY0FBYyxHQUFHO0lBQ3hDLElBQUksQ0FBQ3dCLGVBQWU7SUFDcEIsSUFBSSxJQUFJLENBQUMvQyxRQUFRLElBQUksSUFBSSxDQUFDQyxXQUFXLEVBQUU7UUFDckM7SUFDRjtJQUVBLElBQUkrQyxVQUNGLGtDQUFrQyxJQUFJLENBQUMvQyxXQUFXLEdBQUc7SUFDdkQsSUFBSSxDQUFDeUMsVUFBVSxDQUFDLElBQUlPLE1BQU1EO0FBQzVCO0FBRUFuRCxlQUFlb0IsU0FBUyxDQUFDOEIsZUFBZSxHQUFHO0lBQ3pDLElBQUksQ0FBQy9DLFFBQVEsR0FBRztJQUVoQixJQUFJd0MsT0FBTyxJQUFJO0lBQ2YsSUFBSSxDQUFDcEMsUUFBUSxDQUFDOEMsT0FBTyxDQUFDLFNBQVNwQyxNQUFNO1FBQ25DLElBQUksQ0FBQ0EsT0FBT2QsUUFBUSxFQUFFO1lBQ3BCO1FBQ0Y7UUFFQXdDLEtBQUt4QyxRQUFRLElBQUljLE9BQU9kLFFBQVE7SUFDbEM7SUFFQSxJQUFJLElBQUksQ0FBQ0ssY0FBYyxJQUFJLElBQUksQ0FBQ0EsY0FBYyxDQUFDTCxRQUFRLEVBQUU7UUFDdkQsSUFBSSxDQUFDQSxRQUFRLElBQUksSUFBSSxDQUFDSyxjQUFjLENBQUNMLFFBQVE7SUFDL0M7QUFDRjtBQUVBSCxlQUFlb0IsU0FBUyxDQUFDeUIsVUFBVSxHQUFHLFNBQVNELEdBQUc7SUFDaEQsSUFBSSxDQUFDSSxNQUFNO0lBQ1gsSUFBSSxDQUFDRCxJQUFJLENBQUMsU0FBU0g7QUFDckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0Z3B0LWxpdGUvLi9ub2RlX21vZHVsZXMvY29tYmluZWQtc3RyZWFtL2xpYi9jb21iaW5lZF9zdHJlYW0uanM/NmFhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbnZhciBTdHJlYW0gPSByZXF1aXJlKCdzdHJlYW0nKS5TdHJlYW07XG52YXIgRGVsYXllZFN0cmVhbSA9IHJlcXVpcmUoJ2RlbGF5ZWQtc3RyZWFtJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tYmluZWRTdHJlYW07XG5mdW5jdGlvbiBDb21iaW5lZFN0cmVhbSgpIHtcbiAgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuICB0aGlzLnJlYWRhYmxlID0gdHJ1ZTtcbiAgdGhpcy5kYXRhU2l6ZSA9IDA7XG4gIHRoaXMubWF4RGF0YVNpemUgPSAyICogMTAyNCAqIDEwMjQ7XG4gIHRoaXMucGF1c2VTdHJlYW1zID0gdHJ1ZTtcblxuICB0aGlzLl9yZWxlYXNlZCA9IGZhbHNlO1xuICB0aGlzLl9zdHJlYW1zID0gW107XG4gIHRoaXMuX2N1cnJlbnRTdHJlYW0gPSBudWxsO1xuICB0aGlzLl9pbnNpZGVMb29wID0gZmFsc2U7XG4gIHRoaXMuX3BlbmRpbmdOZXh0ID0gZmFsc2U7XG59XG51dGlsLmluaGVyaXRzKENvbWJpbmVkU3RyZWFtLCBTdHJlYW0pO1xuXG5Db21iaW5lZFN0cmVhbS5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciBjb21iaW5lZFN0cmVhbSA9IG5ldyB0aGlzKCk7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGZvciAodmFyIG9wdGlvbiBpbiBvcHRpb25zKSB7XG4gICAgY29tYmluZWRTdHJlYW1bb3B0aW9uXSA9IG9wdGlvbnNbb3B0aW9uXTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZFN0cmVhbTtcbn07XG5cbkNvbWJpbmVkU3RyZWFtLmlzU3RyZWFtTGlrZSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICByZXR1cm4gKHR5cGVvZiBzdHJlYW0gIT09ICdmdW5jdGlvbicpXG4gICAgJiYgKHR5cGVvZiBzdHJlYW0gIT09ICdzdHJpbmcnKVxuICAgICYmICh0eXBlb2Ygc3RyZWFtICE9PSAnYm9vbGVhbicpXG4gICAgJiYgKHR5cGVvZiBzdHJlYW0gIT09ICdudW1iZXInKVxuICAgICYmICghQnVmZmVyLmlzQnVmZmVyKHN0cmVhbSkpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICB2YXIgaXNTdHJlYW1MaWtlID0gQ29tYmluZWRTdHJlYW0uaXNTdHJlYW1MaWtlKHN0cmVhbSk7XG5cbiAgaWYgKGlzU3RyZWFtTGlrZSkge1xuICAgIGlmICghKHN0cmVhbSBpbnN0YW5jZW9mIERlbGF5ZWRTdHJlYW0pKSB7XG4gICAgICB2YXIgbmV3U3RyZWFtID0gRGVsYXllZFN0cmVhbS5jcmVhdGUoc3RyZWFtLCB7XG4gICAgICAgIG1heERhdGFTaXplOiBJbmZpbml0eSxcbiAgICAgICAgcGF1c2VTdHJlYW06IHRoaXMucGF1c2VTdHJlYW1zLFxuICAgICAgfSk7XG4gICAgICBzdHJlYW0ub24oJ2RhdGEnLCB0aGlzLl9jaGVja0RhdGFTaXplLmJpbmQodGhpcykpO1xuICAgICAgc3RyZWFtID0gbmV3U3RyZWFtO1xuICAgIH1cblxuICAgIHRoaXMuX2hhbmRsZUVycm9ycyhzdHJlYW0pO1xuXG4gICAgaWYgKHRoaXMucGF1c2VTdHJlYW1zKSB7XG4gICAgICBzdHJlYW0ucGF1c2UoKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLl9zdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5Db21iaW5lZFN0cmVhbS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uKGRlc3QsIG9wdGlvbnMpIHtcbiAgU3RyZWFtLnByb3RvdHlwZS5waXBlLmNhbGwodGhpcywgZGVzdCwgb3B0aW9ucyk7XG4gIHRoaXMucmVzdW1lKCk7XG4gIHJldHVybiBkZXN0O1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLl9nZXROZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2N1cnJlbnRTdHJlYW0gPSBudWxsO1xuXG4gIGlmICh0aGlzLl9pbnNpZGVMb29wKSB7XG4gICAgdGhpcy5fcGVuZGluZ05leHQgPSB0cnVlO1xuICAgIHJldHVybjsgLy8gZGVmZXIgY2FsbFxuICB9XG5cbiAgdGhpcy5faW5zaWRlTG9vcCA9IHRydWU7XG4gIHRyeSB7XG4gICAgZG8ge1xuICAgICAgdGhpcy5fcGVuZGluZ05leHQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3JlYWxHZXROZXh0KCk7XG4gICAgfSB3aGlsZSAodGhpcy5fcGVuZGluZ05leHQpO1xuICB9IGZpbmFsbHkge1xuICAgIHRoaXMuX2luc2lkZUxvb3AgPSBmYWxzZTtcbiAgfVxufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLl9yZWFsR2V0TmV4dCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3RyZWFtID0gdGhpcy5fc3RyZWFtcy5zaGlmdCgpO1xuXG5cbiAgaWYgKHR5cGVvZiBzdHJlYW0gPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmVuZCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3RyZWFtICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5fcGlwZU5leHQoc3RyZWFtKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZ2V0U3RyZWFtID0gc3RyZWFtO1xuICBnZXRTdHJlYW0oZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgdmFyIGlzU3RyZWFtTGlrZSA9IENvbWJpbmVkU3RyZWFtLmlzU3RyZWFtTGlrZShzdHJlYW0pO1xuICAgIGlmIChpc1N0cmVhbUxpa2UpIHtcbiAgICAgIHN0cmVhbS5vbignZGF0YScsIHRoaXMuX2NoZWNrRGF0YVNpemUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLl9oYW5kbGVFcnJvcnMoc3RyZWFtKTtcbiAgICB9XG5cbiAgICB0aGlzLl9waXBlTmV4dChzdHJlYW0pO1xuICB9LmJpbmQodGhpcykpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLl9waXBlTmV4dCA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICB0aGlzLl9jdXJyZW50U3RyZWFtID0gc3RyZWFtO1xuXG4gIHZhciBpc1N0cmVhbUxpa2UgPSBDb21iaW5lZFN0cmVhbS5pc1N0cmVhbUxpa2Uoc3RyZWFtKTtcbiAgaWYgKGlzU3RyZWFtTGlrZSkge1xuICAgIHN0cmVhbS5vbignZW5kJywgdGhpcy5fZ2V0TmV4dC5iaW5kKHRoaXMpKTtcbiAgICBzdHJlYW0ucGlwZSh0aGlzLCB7ZW5kOiBmYWxzZX0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IHN0cmVhbTtcbiAgdGhpcy53cml0ZSh2YWx1ZSk7XG4gIHRoaXMuX2dldE5leHQoKTtcbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS5faGFuZGxlRXJyb3JzID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc3RyZWFtLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycikge1xuICAgIHNlbGYuX2VtaXRFcnJvcihlcnIpO1xuICB9KTtcbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgdGhpcy5lbWl0KCdkYXRhJywgZGF0YSk7XG59O1xuXG5Db21iaW5lZFN0cmVhbS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLnBhdXNlU3RyZWFtcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKHRoaXMucGF1c2VTdHJlYW1zICYmIHRoaXMuX2N1cnJlbnRTdHJlYW0gJiYgdHlwZW9mKHRoaXMuX2N1cnJlbnRTdHJlYW0ucGF1c2UpID09ICdmdW5jdGlvbicpIHRoaXMuX2N1cnJlbnRTdHJlYW0ucGF1c2UoKTtcbiAgdGhpcy5lbWl0KCdwYXVzZScpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuX3JlbGVhc2VkKSB7XG4gICAgdGhpcy5fcmVsZWFzZWQgPSB0cnVlO1xuICAgIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuX2dldE5leHQoKTtcbiAgfVxuXG4gIGlmKHRoaXMucGF1c2VTdHJlYW1zICYmIHRoaXMuX2N1cnJlbnRTdHJlYW0gJiYgdHlwZW9mKHRoaXMuX2N1cnJlbnRTdHJlYW0ucmVzdW1lKSA9PSAnZnVuY3Rpb24nKSB0aGlzLl9jdXJyZW50U3RyZWFtLnJlc3VtZSgpO1xuICB0aGlzLmVtaXQoJ3Jlc3VtZScpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9yZXNldCgpO1xuICB0aGlzLmVtaXQoJ2VuZCcpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fcmVzZXQoKTtcbiAgdGhpcy5lbWl0KCdjbG9zZScpO1xufTtcblxuQ29tYmluZWRTdHJlYW0ucHJvdG90eXBlLl9yZXNldCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG4gIHRoaXMuX3N0cmVhbXMgPSBbXTtcbiAgdGhpcy5fY3VycmVudFN0cmVhbSA9IG51bGw7XG59O1xuXG5Db21iaW5lZFN0cmVhbS5wcm90b3R5cGUuX2NoZWNrRGF0YVNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fdXBkYXRlRGF0YVNpemUoKTtcbiAgaWYgKHRoaXMuZGF0YVNpemUgPD0gdGhpcy5tYXhEYXRhU2l6ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtZXNzYWdlID1cbiAgICAnRGVsYXllZFN0cmVhbSNtYXhEYXRhU2l6ZSBvZiAnICsgdGhpcy5tYXhEYXRhU2l6ZSArICcgYnl0ZXMgZXhjZWVkZWQuJztcbiAgdGhpcy5fZW1pdEVycm9yKG5ldyBFcnJvcihtZXNzYWdlKSk7XG59O1xuXG5Db21iaW5lZFN0cmVhbS5wcm90b3R5cGUuX3VwZGF0ZURhdGFTaXplID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGF0YVNpemUgPSAwO1xuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fc3RyZWFtcy5mb3JFYWNoKGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgIGlmICghc3RyZWFtLmRhdGFTaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZi5kYXRhU2l6ZSArPSBzdHJlYW0uZGF0YVNpemU7XG4gIH0pO1xuXG4gIGlmICh0aGlzLl9jdXJyZW50U3RyZWFtICYmIHRoaXMuX2N1cnJlbnRTdHJlYW0uZGF0YVNpemUpIHtcbiAgICB0aGlzLmRhdGFTaXplICs9IHRoaXMuX2N1cnJlbnRTdHJlYW0uZGF0YVNpemU7XG4gIH1cbn07XG5cbkNvbWJpbmVkU3RyZWFtLnByb3RvdHlwZS5fZW1pdEVycm9yID0gZnVuY3Rpb24oZXJyKSB7XG4gIHRoaXMuX3Jlc2V0KCk7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xufTtcbiJdLCJuYW1lcyI6WyJ1dGlsIiwicmVxdWlyZSIsIlN0cmVhbSIsIkRlbGF5ZWRTdHJlYW0iLCJtb2R1bGUiLCJleHBvcnRzIiwiQ29tYmluZWRTdHJlYW0iLCJ3cml0YWJsZSIsInJlYWRhYmxlIiwiZGF0YVNpemUiLCJtYXhEYXRhU2l6ZSIsInBhdXNlU3RyZWFtcyIsIl9yZWxlYXNlZCIsIl9zdHJlYW1zIiwiX2N1cnJlbnRTdHJlYW0iLCJfaW5zaWRlTG9vcCIsIl9wZW5kaW5nTmV4dCIsImluaGVyaXRzIiwiY3JlYXRlIiwib3B0aW9ucyIsImNvbWJpbmVkU3RyZWFtIiwib3B0aW9uIiwiaXNTdHJlYW1MaWtlIiwic3RyZWFtIiwiQnVmZmVyIiwiaXNCdWZmZXIiLCJwcm90b3R5cGUiLCJhcHBlbmQiLCJuZXdTdHJlYW0iLCJJbmZpbml0eSIsInBhdXNlU3RyZWFtIiwib24iLCJfY2hlY2tEYXRhU2l6ZSIsImJpbmQiLCJfaGFuZGxlRXJyb3JzIiwicGF1c2UiLCJwdXNoIiwicGlwZSIsImRlc3QiLCJjYWxsIiwicmVzdW1lIiwiX2dldE5leHQiLCJfcmVhbEdldE5leHQiLCJzaGlmdCIsImVuZCIsIl9waXBlTmV4dCIsImdldFN0cmVhbSIsInZhbHVlIiwid3JpdGUiLCJzZWxmIiwiZXJyIiwiX2VtaXRFcnJvciIsImRhdGEiLCJlbWl0IiwiX3Jlc2V0IiwiZGVzdHJveSIsIl91cGRhdGVEYXRhU2l6ZSIsIm1lc3NhZ2UiLCJFcnJvciIsImZvckVhY2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/combined-stream/lib/combined_stream.js\n");

/***/ })

};
;