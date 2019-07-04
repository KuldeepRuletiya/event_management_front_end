import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidators {

    static url(url: AbstractControl): { [key: string]: boolean } | null {
        if (url.value == null || url.value == undefined || url.value == '')
            return null;
        var pattern = new RegExp("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");
        if (!pattern.test(url.value)) { return { 'url': true }; }

        return null
    }
    static alphabets(name: AbstractControl): { [key: string]: boolean } | null {
        if (name.value == null || name.value == undefined || name.value == '')
            return null;
        var pattern = new RegExp("^[a-zA-Z ]+$");
        // var pattern = /^[a-zA-Z ]+$/;
        if (!pattern.test(name.value)) { return { 'alphabets': true }; }

        return null
    }
    static nameField(name: AbstractControl): { [key: string]: boolean } | null {
        if (name.value == null || name.value == undefined || name.value == '')
            return null;
        var pattern = new RegExp("^[a-zA-Z ]+$");
        //  var pattern = /^[a-zA-Z ]+$/;
        if (!pattern.test(name.value)) { return { 'nameField': true }; }

        return null
    }

    static spaceBetweenWords(name: AbstractControl): { [key: string]: boolean } | null {
        if (name.value == null || name.value == undefined || name.value == '')
            return null;
        var pattern = new RegExp("^[a-zA-Z]+(\\s[a-zA-Z]+)?$");
        //  var pattern = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
        if (!pattern.test(name.value)) { return { 'spaceBetweenWords': true }; }

        return null
    }

    static word(name: AbstractControl): { [key: string]: boolean } | null {
        if (name.value == null || name.value == undefined || name.value == '')
            return null;
        var pattern = new RegExp("^[A-Za-z]+[\s]?$");
        if (!pattern.test(name.value)) { return { 'word': true }; }

        return null
    }
    static phoneNoField(phone: AbstractControl): { [key: string]: boolean } | null {
        if (phone.value == null || phone.value == undefined || phone.value == '')
            return null;
        var pattern = new RegExp("^[+]?[0-9]+$");
        if (!pattern.test(phone.value)) { return { 'phoneValid': true }; }

        return null
    }

    static emailField(email: AbstractControl): { [key: string]: boolean } | null {
        if (email.value == null || email.value == undefined || email.value == '')
            return null;
        var pattern = new RegExp("^[A-Za-z_][A-Za-z0-9_]*[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$");
        console.log(pattern.test(email.value))
        if (!pattern.test(email.value)) { return { 'emailValid': true }; }

        return null
    }

    static aplhaNumeric(string: AbstractControl): { [key: string]: boolean } | null {
        if (string.value == null || string.value == undefined || string.value == '')
            return null;
        var pattern = new RegExp("^[a-zA-Z0-9 ]*$");
        // var pattern = /^[a-zA-Z0-9 ]*$/;
        if (!pattern.test(string.value)) { return { 'alphaNumeric': true }; }

        return null
    }

    static splChar(string: AbstractControl): { [key: string]: boolean } | null {
        if (string.value == null || string.value == undefined || string.value == '')
            return null;
        var pattern = new RegExp("^[^a-zA-Z0-9]*$");
        // var pattern = /^[^a-zA-Z0-9]*$/;
        if (!pattern.test(string.value)) { return { 'splChar': true }; }

        return null
    }

    static quantityField(quantity: AbstractControl): { [key: string]: boolean } | null {
        if (quantity.value == null || quantity.value == undefined || quantity.value == '')
            return null;
        var pattern = new RegExp("^[0-9]+$");
        // var pattern = /^[0-9]+$/;
        if (!pattern.test(quantity.value)) { return { 'quantityValid': true }; }

        return null
    }

    static priceField(price: AbstractControl): { [key: string]: boolean } | null {
        if (price.value == null || price.value == undefined || price.value == '')
            return null;
        var pattern = new RegExp("^([0-9]+(\.[0-9]+)?)$");
        // var pattern = /^([0-9]+(\.[0-9]+)?)$/;
        if (!pattern.test(price.value)) { return { 'priceValid': true }; }

        return null
    }

    static alpAndSplChar(name: AbstractControl): { [key: string]: boolean } | null {
        if (name.value == null || name.value == undefined || name.value == '')
            return null;
        var pattern = new RegExp("^[a-zA-Z_@./#&+-]+$");
        // var pattern = /^[a-zA-Z_@./#&+-]+$/;
        if (!pattern.test(name.value)) { return { 'alpAndSplChar': true }; }

        return null
    }

    static validationForDomainAndUrl(name: AbstractControl): { [key: string]: boolean } | null {
        if (name.value == null || name.value == undefined || name.value == '')
            return null;
        var pattern = new RegExp("^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$");
        if (!pattern.test(name.value)) {
            return { 'validationForDomainAndUrl': true };
        }
        return null
    }

    static sizeValidator(maxSize: number) {
        return function (input: FormGroup) {
            if (input.value[0]) {
                return input.value[0].size > maxSize ? { 'maxSize': true } : null;
            }
            return null;
        };
    }
    /*
        Description: This validator only accept text with single spaces between words not at begining and ending
        params: - value to be compared
        Returns: -return true or false.
        Auther:  ~ Mohd Islam
    */
    static nameWithSingleSpace(string: AbstractControl): { [key: string]: boolean } | null {
        if (string.value == null || string.value == undefined || string.value == '')
            return null;
        var pattern = new RegExp("^[\\S]+(?: [\\S]+)*$");
        if (!pattern.test(string.value)) { return { 'nameWithSingleSpace': true }; }
        return null
    }

    /*
        Description: This validator validate a valid facebook page containing facebook.com or fb.com
        params: - value to be compared
        Returns: -return true or false.
        Auther:  ~ Mohd Islam
    */
    static facebookPage(string: AbstractControl): { [key: string]: boolean } | null {
        if (string.value == null || string.value == undefined || string.value == '')
            return null; //(https?://)?(www\\.)
        var pattern = new RegExp("^((http|https):\/\/)?(www.)+(facebook.com|fb.com)+\/[a-zA-Z0-9](?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?");
        if (!pattern.test(string.value)) { return { 'facebookPage': true }; }
        return null
    }

    /*
        Description: This validator accept all positive integers and decimal  number only
        params: - value to be compared
        Returns: -return true or false.
        Auther:  ~ Mohd Islam
    */
    static onlyNumbersWithDecimals(string: AbstractControl): { [key: string]: boolean } | null {
        if (string.value == null || string.value == undefined || string.value == '')
            return null;
        var pattern = new RegExp("^[+]?([0-9]+(?:[\\.][0-9]*)?|\\.[0-9]+)$");
        //  var pattern = /^[+]?([0-9]+(?:[\\.][0-9]*)?|\\.[0-9]+)$/;
        if (!pattern.test(string.value)) { return { 'onlyNumbersWithDecimals': true }; }
        return null
    }
    /*
        Description: This validator accept no space like mobile numbers
        params: - value to be compared
        Returns: -return true or false.
        Auther:  ~ Mohd Islam
    */
    static noSapceAtAll(string: AbstractControl): { [key: string]: boolean } | null {
        if (string.value == null || string.value == undefined || string.value == '')
            return null;
        var pattern = new RegExp("^[\\S]S*$");
        if (!pattern.test(string.value)) { return { 'noSapceAtAll': true }; }
        return null
    }

    static onlyNumber(number: AbstractControl): { [key: string]: boolean } | null {
        if (number.value == null || number.value == undefined || number.value == '')
            return null;
        var pattern = new RegExp("^[0-9]+$");
        if (!pattern.test(number.value)) { return { 'onlyNumber': true }; }

        return null
    }

    static percentageValue(number: AbstractControl): { [key: string]: boolean } | null {
        if (number.value == null || number.value == undefined || number.value == '')
            return null;
        // var pattern = new RegExp("^(100([\.][0]{1,})?$|[0-9]{1,2}([\.][0-9]{1,})?)$");
        var pattern = new RegExp("^(100([\.][0]{1,})?$|[0-9]{1,2}([\.][0-9]{1,})?)$");
        console.log('---------------===============', pattern.test(number.value))
        if (!pattern.test(number.value)) { return { 'percentageValue': true }; }

        return null
    }

    // static extensionValidator(whiteListImageExtension: Array<string>) {
    //     return function (input: AbstractControl) {
    //         if (input.value[0]) {
    //             return whiteListImageExtension.includes(input.value[0].type) ? null : { 'extension': true };
    //         }
    //         return null;
    //     };
    // }

    static extensionValidator(whiteListImageExtension: Array<string>) {
        return function (input: AbstractControl) {
            if (input.value != null && input.value[0]) {
                return whiteListImageExtension.includes(input.value[0].name.split('.').slice(-1)[0].toLowerCase()) ? null : { 'extension': { accept: whiteListImageExtension } };
            }
            return null;
        };
    }

    static imageDimensionValidator(imageMinHeight: number, imageMinWidth: number) {
        return function (input: FormGroup) {
            return new Promise(resolve => {
                if (input.value[0]) {
                    const fr = new FileReader;
                    fr.onload = function () {
                        const image = new Image;
                        image.onload = function () {
                            if (image.width < imageMinWidth || image.height < imageMinHeight) {
                                return resolve({ dimension: true });
                            }
                            return resolve(null);
                        };
                        image.src = <string>fr.result;
                    };
                    fr.readAsDataURL(input.value[0]);
                } else {
                    return resolve(null);
                }
            });
        };
    }

    static alphabetsWithNoMoreThanOneSpace(name: AbstractControl): { [key: string]: boolean } | null {
        if (name.value == null || name.value == undefined || name.value == '')
            return null;
        var pattern = new RegExp("^([a-zA-Z]+\\\s)*[a-zA-Z]+$");
        if (!pattern.test(name.value)) { return { 'nameField': true }; }

        return null
    }
    static aplhaNumericWithNoMoreThanOneSpace(name: AbstractControl): { [key: string]: boolean } | null {
        if (name.value == null || name.value == undefined || name.value == '')
            return null;
        var pattern = new RegExp("^([a-zA-Z0-9]+\\\s)*[a-zA-Z0-9]+$");
        if (!pattern.test(name.value)) { return { 'aplhaNumericWithNoMoreThanOneSpace': true }; }

        return null
    }
    static alphabetsWithNoSpace(name: AbstractControl): { [key: string]: boolean } | null {
        if (name.value == null || name.value == undefined || name.value == '')
            return null;
        var pattern = new RegExp("^([a-zA-Z]+\s)*[a-zA-Z]+$");
        if (!pattern.test(name.value)) { return { 'nameField': true }; }

        return null
    }
    static aplhaNumericWithNoSpace(name: AbstractControl): { [key: string]: boolean } | null {
        if (name.value == null || name.value == undefined || name.value == '')
            return null;
        var pattern = new RegExp("^([a-zA-Z0-9]+\s)*[a-zA-Z0-9]+$");
        if (!pattern.test(name.value)) { return { 'nameField': true }; }

        return null
    }

    static notAlloeSpaceAtStart(name: AbstractControl): { [key: string]: boolean } | null {
        if (name.value == null || name.value == undefined || name.value == '')
            return null;
        var pattern = new RegExp("^[^-\\\s]");
        if (!pattern.test(name.value)) { return { 'nameField': true }; }

        return null
    }

    static mobile_number(name: AbstractControl): { [key: string]: boolean } | null {
        if (name.value == null || name.value == undefined || name.value == '')
            return null;
        var pattern = new RegExp("^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$");
        if (!pattern.test(name.value)) { return { 'mobile_number': true }; }

        return null
    }



    /*
      Description: This validator Accept Only Percent Up To Three Decimal value
      params: - value to be compared
      Returns: -return true or false.
      Auther:  ~ Kuldeep Ruletiya
  */

    // static percentageValueUpTwoDecimal(number: AbstractControl): { [key: string]: boolean } | null {
    //     if (number.value == null || number.value == undefined || number.value == '')
    //         return null;
    //     var pattern = new RegExp("^(100([\.][0]{1,2})?$|[0-9]{1,2}([\.][0-9]{1,2})?)$");
    //     if (!pattern.test(number.value)) { return { 'percentageValueUpTwoDecimal': true }; }
    //     return null
    // }

    static percentageValueUpThreeDecimal(number: AbstractControl): { [key: string]: boolean } | null {
        if (number.value == null || number.value == undefined || number.value == '')
            return null;
        // var pattern = new RegExp("^\d{0,2}(\.\d{1,3})? *%?$");
        // var pattern=/^\d{0,3}(\.\d{1,3})? *%?$/;
        var pattern = /^(100([\.][0]{1,3})?$|[0-9]{1,2}([\.][0-9]{1,3})?)$/;
        if (!pattern.test(number.value)) { return { 'percentageValueUpThreeDecimal': true }; }
        return null
    }


    static alphaNumericWithSpecialChar(name: AbstractControl): { [key: string]: boolean } | null {
        if (name.value == null || name.value == undefined || name.value == '')
            return null;
        var pattern = new RegExp("^([a-zA-Z0-9_@./#&+-]+\\\s)*[a-zA-Z0-9_@./#&+-]+$");
        if (!pattern.test(name.value)) { return { 'alphaNumericWithSpecialChar': true }; }
        return null
    }

    /*
     Description: This validator Accept Only Number And Not Allowed Repeted Numbers Max numer upto 9 digit
     params: - value to be compared
     Returns: -return true or false.
     Auther:  ~ Kuldeep Ruletiya
 */

    static repeatMobileNumber(name: AbstractControl): { [key: string]: boolean } | null {
        if (name.value == null || name.value == undefined || name.value == '')
            return null;
        // var pattern = new RegExp("^([0-9])\1{10,}$");
        var pattern = /^([0-9])\1{9,}$/;
        if (pattern.test(name.value)) { return { 'repeatMobileNumber': true }; }
        return null
    }


    /*
        Description: This validator Accept Only Number And Number Not Start With Zero
        params: - value to be compared
        Returns: -return true or false.
        Auther:  ~ Kuldeep Ruletiya
    */

    static numberNotStartWithZero(name: AbstractControl): { [key: string]: boolean } | null {
        if (name.value == null || name.value == undefined || name.value == '')
            return null;
        var pattern = /^[1-9][0-9]*$/;
        if (pattern.test(name.value)) { return { 'numberNotStartWithZero': true }; }
        return null
    }



    /*
        Description: This validator Accept Only Number And one dot for percent
        params: - value to be compared
        Returns: -return true or false.
        Auther:  ~ Kuldeep Ruletiya
    */

    static oneDotPercent(name: AbstractControl): { [key: string]: boolean } | null {
        if (name.value == null || name.value == undefined || name.value == '')
            return null;
        // var pattern = /(?: |^)\d*\.?\d+(?: |$)/;
        var pattern = new RegExp("^(?: |^)\d*\.?\d+(?: |$)");

        if (pattern.test(name.value)) { return { 'oneDotPercent': true }; }
        return null
    }

}
