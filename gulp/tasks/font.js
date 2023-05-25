import fonter from 'gulp-fonter-2';
import ttf2woff2 from 'gulp-ttf2woff2';
import path from 'path';

export const font = () => {
  const ttfSource = path.resolve(app.path.src.fonts, '**/*.ttf');
  return app.gulp
    .src(app.path.src.fonts + '/**/*.ttf')
    .pipe(app.gulp.dest(app.path.build.fonts))
    .pipe(app.gulp.src(ttfSource))
    .pipe(
      fonter({
        formats: ['woff'],
      })
    )
    .pipe(app.gulp.dest(app.path.build.fonts))
    .pipe(app.gulp.src(ttfSource))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.build.fonts));
};
