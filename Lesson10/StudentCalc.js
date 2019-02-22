var StudentCalc;
(function (StudentCalc) {
    function AnualFeeCalc(feeamount, term) {
        return feeamount * term;
    }
    StudentCalc.AnualFeeCalc = AnualFeeCalc;
})(StudentCalc || (StudentCalc = {}));
