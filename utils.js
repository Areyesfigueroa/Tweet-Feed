String.prototype.replaceBetween = function(start, end, what) {
    return this.substring(0, start) + what + this.substring(end);
};

String.prototype.replaceAll = function(substr, newSubstr) {
    const replace = substr;
    const re = new RegExp(replace,"gmi");

    return this.replace(re, newSubstr);
}