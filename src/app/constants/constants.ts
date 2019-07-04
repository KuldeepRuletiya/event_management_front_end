// import { UserService } from "../services/user.service";
// import * as CryptoJS from 'crypto-js';
import { environment } from "../../environments/environment";
import { UsersService } from '../services/users.service';


/// <reference types="crypto-js" />

export class Constants {
    static userToken = "";
    static image_formats = ['tif', 'tiff', 'gif', 'jpeg', 'jpg', 'png'];
    static file_formats = ['xlsx', 'xls', 'csv'];
    static role_privileges: any = [];
    static routes: any = [];
    // static STATUS: any = [{ id: 0, itemName: "Inactive" },
    // { id: 1, itemName: "Active" }];

    // static init = 0;
    constructor(private userService: UsersService) {
        // Constants.userToken = this.userService.getFromLocalStorage('log_in_token');
    }

    // public static get LOADER_IMAGE_CONFIGURATION(): any {
    //     return {
    //         url: Constants.BASE_URL + "/assets/images/loader.gif",
    //         classes: "img img-responsive loader_image",
    //     }
    // }

    // public static get editImage(): any {
    //     return {
    //         url: Constants.BASE_URL + "/assets/images/writing.png",
    //         classes: "img img-responsive loader_image",
    //     }
    // }


    // public static append_and_refresh_array(array, index_with_value) {
    //     let old_array = Object.create(array);
    //     let keys = Object.keys(index_with_value);
    //     for (let i = 0; i < keys.length; i++) {
    //         old_array[keys[i]] = index_with_value[keys[i]];
    //     }
    //     console.log(old_array);
    //     return old_array;
    // }
    public static get NO_IMAGE_FOUND(): any {
        return {
            // url: Constants.BASE_URL + "../../assets/images/profilenoImage.jpeg",
            url: Constants.BASE_URL + "/assets/images/profilenoImage.jpeg",

            //classes: "img img-responsive loader_image",
        }
    }

    // public static get DELETE_IMAGE_CONFIGURATION(): any {
    //     return {
    //         url: Constants.BASE_URL + "/assets/images/trash.png",
    //         classes: "img img-responsive loader_image",
    //     }
    // }

    // public static get DOWNLOAD_IMAGE(): any {
    //     return {
    //         url: Constants.BASE_URL + "/assets/images/download.png",
    //         classes: "img img-responsive loader_image",
    //     }
    // }

    // public static get ADD_IMAGE_CONFIGURATION(): any {
    //     return {
    //         url: Constants.BASE_URL + "/assets/images/plus.png",
    //         classes: "img img-responsive loader_image",
    //     }
    // }

    // public static get EDIT_RECORD_IMAGE_CONFIGURATION(): any {
    //     return {
    //         url: Constants.BASE_URL + "/assets/images/writing.png",
    //         classes: "img img-responsive loader_image",
    //     }
    // }

    // public static get EXPORT_EXCEL(): any {
    //     return {
    //         url: Constants.BASE_URL + "/assets/images/excel-logo.jpg",
    //         classes: "img img-responsive loader_image",
    //     }
    // }

    // public static get EXPORT_CSV(): any {
    //     return {
    //         url: Constants.BASE_URL + "/assets/images/export-csv.png",
    //         classes: "img img-responsive loader_image",
    //     }
    // }

    // public static get CHECK_MARK(): any {
    //     return {
    //         url: Constants.BASE_URL + "/assets/images/check-mark.png",
    //         classes: "img img-responsive loader_image",
    //     }
    // }

    // public static get CLOSE_BUTTON(): any {
    //     return {
    //         url: Constants.BASE_URL + "/assets/images/close-button.png",
    //         classes: "img img-responsive loader_image",
    //     }
    // }

    // public static get CONFIGURE_RECORD(): any {
    //     return {
    //         url: Constants.BASE_URL + "/assets/images/settings-con.png",
    //         classes: "img img-responsive loader_image",
    //     }
    // }

    // public static get RECOMMEND_IMAGE(): any {
    //     return {
    //         url: Constants.BASE_URL + "/assets/images/recommend.png",
    //         classes: "img img-responsive loader_image",
    //     }
    // }

    // public static get RECOMMENDED_IMAGE(): any {
    //     return {
    //         url: Constants.BASE_URL + "/assets/images/recommended.png",
    //         classes: "img img-responsive loader_image",
    //     }
    // }

    // public static get REMOVE_RECORD_IMAGE_CONFIGURATION(): any {
    //     return {
    //         url: Constants.BASE_URL + "/assets/images/close-button-.png",
    //         classes: "img img-responsive loader_image",
    //     }
    // }

    public static get API_URL(): string {
        return environment.API_URL;
    };

    public static get BASE_URL(): string {
        return environment.BASE_URL;
    };


    public static get API_TOKEN(): string {
        return "43dff1f0-01d2-11e8-b015-ddf13c227dad";
    }

    public static get USER_TOKEN(): string {
        return Constants.userToken;
    }

    public static get API_HEADER(): string {
        return JSON.parse('{"Content-Type": "application/json",' +
            '"Access-Control-Allow-Headers":  "Content-Type",' +
            // '"API_TOKEN": "' + Constants.API_TOKEN + '",' +
            '"USER_AGENT": "Website",' +
            '"USER_TOKEN" : "' + Constants.USER_TOKEN + '" }');
    }

    public static get API_FILE_HEADER(): string {
        return JSON.parse('{"Accept": "application/json",' +
            '"Access-Control-Allow-Headers":  "Content-Type",' +
            // '"API_TOKEN": "' + Constants.API_TOKEN + '",' +
            '"USER_AGENT": "Website"}');
    }

    // public static get angular2_single_select_setting(): any {
    //     return { singleSelection: true };
    // }


    public static isEquivalent(a, b) {
        // Create arrays of property names
        let aProps = Object.getOwnPropertyNames(a);
        let bProps = Object.getOwnPropertyNames(b);

        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
            return false;
        }

        for (let i = 0; i < aProps.length; i++) {
            let propName = aProps[i];

            // If values of same property are not equal,
            // objects are not equivalent
            if (a[propName] !== b[propName]) {
                return false;
            }
        }

        // If we made it this far, objects
        // are considered equivalent
        return true;
    }



    // public static SET_MULTI_SELECTED_VALUES(selectedFieldValues, selectedFieldArray) {
    //     selectedFieldValues = selectedFieldValues.toString();

    //     let selected_field_array = selectedFieldValues.split(",").map(Number);
    //     return selectedFieldArray.filter((items) => {
    //         return selected_field_array.indexOf(items.id) > -1;
    //     }).map((item) => {
    //         return { id: item.id, itemName: item.name }
    //     });
    // }

    // public static setAngularMultiSelectData(dropdownData, value) {
    //     return dropdownData.filter((data) => {
    //         return data.id == value
    //     });
    // }


    // public static setAngularMultiSelectData_Multiple(dropdownData, values) {
    //     console.log(values);
    //     return dropdownData.filter((data) => {
    //         console.log(data.id + ' ' + values.indexOf(data.id) + " " + values);
    //         return (values.indexOf(data.id) > -1)
    //     });
    // }


    // public static getIDSAngular2MultiselectDropdownList(values) {
    //     try {
    //         return values.map(val => val.id);
    //     } catch (e) {

    //         console.log(e);
    //         return null;
    //     }
    // }


    // public static setAngular2MultiselectDropDownList(normal_array, keys: any = {}, extra_columns: any = []) {
    //     let dd_array: any = [];
    //     let id_key = keys.id_keys !== undefined ? keys.id_keys : "id";
    //     let name_key = keys.name_key !== undefined ? keys.name_key : "name";

    //     try {
    //         dd_array = normal_array.map((event) => {
    //             let return_data = { id: event[id_key], itemName: event[name_key] };
    //             for (let i = 0; i < extra_columns.length; i++) {
    //                 return_data[extra_columns[i]] = event[extra_columns[i]];
    //             }
    //             return return_data;
    //         });
    //     } catch (e) {

    //     }
    //     return dd_array;
    // }

    // public static fileChecker(file) {
    //     console.log("file.split", file.split(".")[1]);
    //     let file_extension = file.split(".")[1]
    //     if (this.file_formats.indexOf(file_extension) > -1)
    //         return true;
    //     else
    //         return false;
    // }

    // public static imageChecker(file) {
    //     let image_extension = file.split(".")[1]
    //     if (this.image_formats.indexOf(image_extension) > -1)
    //         return true;
    //     else
    //         return false;
    // }

    // public static setAngularMultiSelectDataCustom(dropdownData, value, check_key) {
    //     return dropdownData.filter((data) => { return data[check_key] == value });
    // }

    public static get PROFILE_NO_IMAGE_FOUND(): any {
        return {
            url: Constants.BASE_URL + "/assets/images/profilenoImage.jpeg",
            //classes: "img img-responsive loader_image",
        }
    }

}
