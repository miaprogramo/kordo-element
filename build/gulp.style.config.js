/**
 * less编译
 */
const { task, series, src, dest } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const less = require("gulp-less");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const Components = require("../components.json");

const deps = Object.keys(Components);
deps.forEach((key) => {
  task(key, function() {
    return src("../src/styles/" + key + ".less")
      .pipe(less())
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions", "ie > 8"],
        })
      )
      .pipe(cleanCSS())
      .pipe(rename("style.css"))
      .pipe(dest("../lib/" + key + "/"));
  });
});

task(
  "default",
  series(deps, function() {
    return src("../src/styles/index.less")
      .pipe(less())
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions", "ie > 8"],
        })
      )
      .pipe(cleanCSS())
      .pipe(rename("kordo-element.css"))
      .pipe(dest("../lib"));
  })
);
