/**
 * Created by Lzzzzzq on 2017/3/14.
 */
import React from "react";
import {render} from "react-dom";
import Model from "./model";

const div = document.createElement("div");
document.body.appendChild(div);
const container = render(<Model />, div);

const Toast = function (opt) {
    opt = opt || {};
    if (opt.msg) {
        container.show(opt);
    }
};

export default Toast;
