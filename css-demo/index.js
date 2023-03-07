import { createApp } from "https://mavue.mavo.io/mavue.js";

globalThis.app = createApp(
  {
    data: {
      foo: 1,

      margin_top: 1,
      margin_right: 1,
      margin_bottom: 1,
      margin_left: 1,

      padding_top: 1,
      padding_right: 1,
      padding_bottom: 1,
      padding_left: 1,

      Border_width_top: 1,
      Border_width_right: 1,
      Border_width_bottom: 1,
      Border_width_left: 1,
    },
  },
  "#app"
);

// function updateTextInput(val) {
//   document.getElementById("textInput").value = val;
// }
