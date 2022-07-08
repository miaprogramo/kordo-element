const defaultSuccessTip = "复制成功";
const defaultErrorTip = "复制失败";

export default function ({
  text = "",
  successTip = defaultSuccessTip,
  errorTip = defaultErrorTip,
  success,
  error,
  showTip = true,
}) {
  const isRTL = document.documentElement.getAttribute("dir") === "rtl";
  const $textarea = document.createElement("textarea");
  $textarea.style.fontSize = "12pt";
  $textarea.style.border = "0";
  $textarea.style.padding = "0";
  $textarea.style.margin = "0";
  $textarea.style.position = "absolute";
  $textarea.style[isRTL ? "right" : "left"] = "-9999px";
  let yPosition = window.pageYOffset || document.documentElement.scrollTop;
  $textarea.style.top = `${yPosition}px`;
  $textarea.setAttribute("readonly", "");
  $textarea.value = text;
  document.body.appendChild($textarea);
  $textarea.select();

  let succeeded; // eslint-disable-line

  try {
    succeeded = document.execCommand("copy");
    if (showTip) {
      this.$message.success(successTip);
    }
    document.body.removeChild($textarea);
    if (success) success.call();
  } catch (err) {
    succeeded = false;
    if (showTip) {
      this.$message.error(errorTip);
    }
    document.body.removeChild($textarea);
    if (error) error.call();
  }
}
