const { task, src, dest } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const less = require("gulp-less");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");

// 编译less
task("default", function () {
  return src("../src/styles/index.less")
    .pipe(less())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions", "ie > 8"],
      })
    )
    .pipe(cleanCSS())
    .pipe(rename("kordo-element.css"))
    .pipe(dest("../dist"));
});
