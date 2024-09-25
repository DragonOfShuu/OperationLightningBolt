const gulp = require("gulp");
const inline = require("gulp-inline");
const dom = require('gulp-dom')

gulp.task("default", () => {
  return gulp
    .src("./dist/**/*.html")
    .pipe(inline())
    .pipe(dom(function() {
      const discardAttributes = (element: Element, ...attributes: string[]) =>
        attributes.forEach((attribute) => element.removeAttribute(attribute));

      // @ts-expect-error `this` is of type Document, however
      // the library in use does not specify that with types.
      return (this as Document).querySelectorAll("head style").forEach((elem) => {
        discardAttributes(elem, "media");
    });

  }))
    .pipe(gulp.dest("./dist-single"));
});
