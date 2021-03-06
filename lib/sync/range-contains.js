/**
 * @member module:JGL.rangeContains
 * @function
 * @param {module:JGL~Range} rng
 * @param {Integer} idx
 * @returns {Boolean}
 */
module.exports = function rangeContains (rng, idx) {
    var from = rng.from || 0,
        to = rng.to,
        val = parseInt(idx, 10);

    return !isNaN(val) &&
        val === idx &&
        !isNaN(to) &&
        from <= idx && to >= idx;
};
