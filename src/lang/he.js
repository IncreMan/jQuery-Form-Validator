/**
 *  @author ILIYA KHERSONSKI, http://increman.com
 */
! function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function(a) {
    ! function(a, b) {
        "use strict";
        a(b).bind("validatorsLoaded", function() {
            a.formUtils.LANG = {
                errorTitle: "שגיאה בעת שליחת הטופס!",
                requiredField: "שדה זה הינו חובה",
                requiredFields: "לא מלאתם את כל שדות חובה",
                badTime: "מלאתם זמן לא תקין",
                badEmail: "כתובת דוא\"ל שמלאתם איננה תקינה",
                badTelephone: "מלאתם מספר טלפון לא תקין",
                badSecurityAnswer: "מלאתם תשובה לא נכונה לשאלת אבטחה",
                badDate: "מלאתם תאריך לא תקין",
                lengthBadStart: "הערך חייב להיות בתווך של",
                lengthBadEnd: " תווים",
                lengthTooLongStart: "מלאתם ערך גדול מ-",
                lengthTooShortStart: "מלאתם ערך קטן מ-",
                notConfirmed: "לא ניתן לאמת את המידע שמלאתם",
                badDomain: "מלאתם שם דומיין שגוי",
                badUrl: "URL שגוי",
                badCustomVal: "הערך שמלאתם לא תקין",
                andSpaces: " ורווחים ",
                badInt: "הערך אינו מספרי",
                badSecurityNumber: "מספר תעודת זהות לא תקין",
                badUKVatAnswer: "מספר ח.פ. לא תקין",
                badStrength: "הסיסמה אינה מספיק חזקה",
                badNumberOfSelectedOptionsStart: "אתם נדרשים לבחור לפחות ",
                badNumberOfSelectedOptionsEnd: " תשובות",
                badAlphaNumeric: "הערך יכול להכיל אך ורק תווים וספרות ",
                badAlphaNumericExtra: " וגם ",
                wrongFileSize: "נפח הקובץ גדול מידי (גודל מירבי %s)",
                wrongFileType: "הקבצים המתקבלים אך ורק מסוג %s",
                groupCheckedRangeStart: "נא לבחור בין ",
                groupCheckedTooFewStart: "נא לבחור לפחות ",
                groupCheckedTooManyStart: "נא לבחור לכל היותר ",
                groupCheckedEnd: " פריטים",
                badCreditCard: "מספר כרטיס אשראי אינו תקין",
                badCVV: "מספר ה-CVV אינו תקין",
                wrongFileDim: "לקובץ תמונה זה גודל שגוי,",
                imageTooTall: "התונה לא יכולה להיות צרה יותר מ-",
                imageTooWide: "התמונה לא יכולה להיות רחבה יותר מ-",
                imageTooSmall: "התמונה קטנה מידי",
                min: "מינימום",
                max: "מקסימום",
                imageRatioNotAccepted: "לא ניתן לקבל תמונה עם יחס רוחב-גובה כזה",
                badreCaptcha: "אשר שאינך בוט",
                passwordComplexityStart: "הסיסמה צריכה להכיל לפחות ",
                passwordComplexitySeparator: ", ",
                passwordComplexityUppercaseInfo: " אותיות ראשיות",
                passwordComplexityLowercaseInfo: " אורטיות קטנות",
                passwordComplexitySpecialCharsInfo: " תווים מיוחדים",
                passwordComplexityNumericCharsInfo: " מספרים",
                passwordComplexityEnd: "."
            }
        })
    }(a, window)
});
